from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI(title="Retro Bakes Store API")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# ---------- Status (kept for template parity) ----------
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


# ---------- Cake Enquiry ----------
class CakeEnquiryCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=80)
    phone: str = Field(..., min_length=6, max_length=20)
    email: Optional[EmailStr] = None
    occasion: str = Field(..., min_length=1, max_length=60)  # birthday/anniversary/etc.
    cake_type: str = Field(..., min_length=1, max_length=80)  # rasmalai, chocolate, custom
    servings: Optional[str] = Field(default=None, max_length=40)
    event_date: Optional[str] = Field(default=None, max_length=40)
    notes: Optional[str] = Field(default=None, max_length=1000)


class CakeEnquiry(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    email: Optional[str] = None
    occasion: str
    cake_type: str
    servings: Optional[str] = None
    event_date: Optional[str] = None
    notes: Optional[str] = None
    status: str = "new"
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


@api_router.get("/")
async def root():
    return {"message": "Retro Bakes Store API is live"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    obj = StatusCheck(**input.model_dump())
    doc = obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    rows = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for r in rows:
        if isinstance(r.get('timestamp'), str):
            r['timestamp'] = datetime.fromisoformat(r['timestamp'])
    return rows


@api_router.post("/cake-enquiry", response_model=CakeEnquiry)
async def create_cake_enquiry(payload: CakeEnquiryCreate):
    obj = CakeEnquiry(**payload.model_dump())
    doc = obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.cake_enquiries.insert_one(doc)
    return obj


@api_router.get("/cake-enquiries", response_model=List[CakeEnquiry])
async def list_cake_enquiries(admin_key: Optional[str] = None):
    expected = os.environ.get('ADMIN_KEY', 'retro-admin')
    if admin_key != expected:
        raise HTTPException(status_code=401, detail="Unauthorized")
    rows = await db.cake_enquiries.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
    for r in rows:
        if isinstance(r.get('created_at'), str):
            r['created_at'] = datetime.fromisoformat(r['created_at'])
    return rows


# Mount the router
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
