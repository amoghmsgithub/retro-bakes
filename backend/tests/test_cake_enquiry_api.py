"""Backend API tests for Retro Bakes Store - cake enquiry endpoints."""
import os
import pytest
import requests
from dotenv import load_dotenv
from pathlib import Path

# Use the public URL from frontend env which goes through ingress
load_dotenv(Path(__file__).resolve().parents[2] / "frontend" / ".env")
BASE_URL = os.environ["REACT_APP_BACKEND_URL"].rstrip("/")
ADMIN_KEY = "retro-admin-2025"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Health ----------
class TestHealth:
    def test_root(self, client):
        r = client.get(f"{BASE_URL}/api/")
        assert r.status_code == 200
        data = r.json()
        assert "message" in data
        assert "Retro Bakes" in data["message"]


# ---------- Cake Enquiry Create ----------
class TestCakeEnquiryCreate:
    def test_create_minimal_required(self, client):
        payload = {
            "name": "TEST_Aanya",
            "phone": "+919812345678",
            "occasion": "Birthday",
            "cake_type": "Rasmalai Cake",
        }
        r = client.post(f"{BASE_URL}/api/cake-enquiry", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert data["name"] == payload["name"]
        assert data["phone"] == payload["phone"]
        assert data["occasion"] == payload["occasion"]
        assert data["cake_type"] == payload["cake_type"]
        assert data["status"] == "new"
        assert "created_at" in data
        assert "_id" not in data

    def test_create_full_payload(self, client):
        payload = {
            "name": "TEST_Rohan",
            "phone": "+919800000000",
            "email": "rohan.test@example.com",
            "occasion": "Anniversary",
            "cake_type": "Sinful Chocolate Cake",
            "servings": "1kg / 12 ppl",
            "event_date": "2026-02-14",
            "notes": "Add red roses on top",
        }
        r = client.post(f"{BASE_URL}/api/cake-enquiry", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["email"] == payload["email"]
        assert data["servings"] == payload["servings"]
        assert data["event_date"] == payload["event_date"]
        assert data["notes"] == payload["notes"]

    @pytest.mark.parametrize("missing", ["name", "phone", "occasion", "cake_type"])
    def test_create_missing_required_fields_returns_422(self, client, missing):
        payload = {
            "name": "TEST_X",
            "phone": "+919800000000",
            "occasion": "Birthday",
            "cake_type": "Custom Theme Cake",
        }
        payload.pop(missing)
        r = client.post(f"{BASE_URL}/api/cake-enquiry", json=payload)
        assert r.status_code == 422, f"Expected 422 for missing {missing}, got {r.status_code}: {r.text}"

    def test_create_invalid_email_returns_422(self, client):
        payload = {
            "name": "TEST_BadEmail",
            "phone": "+919800000000",
            "email": "not-an-email",
            "occasion": "Birthday",
            "cake_type": "Custom Theme Cake",
        }
        r = client.post(f"{BASE_URL}/api/cake-enquiry", json=payload)
        assert r.status_code == 422


# ---------- Cake Enquiry List (admin) ----------
class TestCakeEnquiryList:
    def test_list_without_admin_key_returns_401(self, client):
        r = client.get(f"{BASE_URL}/api/cake-enquiries")
        assert r.status_code == 401

    def test_list_with_wrong_admin_key_returns_401(self, client):
        r = client.get(f"{BASE_URL}/api/cake-enquiries", params={"admin_key": "nope"})
        assert r.status_code == 401

    def test_list_with_correct_admin_key(self, client):
        r = client.get(f"{BASE_URL}/api/cake-enquiries", params={"admin_key": ADMIN_KEY})
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data, list)
        for item in data:
            assert "_id" not in item
            assert "id" in item

    def test_create_then_list_persistence_and_sort(self, client):
        # Create a unique enquiry
        unique_name = "TEST_Persist_" + os.urandom(4).hex()
        payload = {
            "name": unique_name,
            "phone": "+919812345699",
            "occasion": "Wedding",
            "cake_type": "Blueberry Cheesecake",
            "notes": "persistence-check",
        }
        cr = client.post(f"{BASE_URL}/api/cake-enquiry", json=payload)
        assert cr.status_code == 200
        created_id = cr.json()["id"]

        # List
        lr = client.get(f"{BASE_URL}/api/cake-enquiries", params={"admin_key": ADMIN_KEY})
        assert lr.status_code == 200
        rows = lr.json()
        assert len(rows) > 0

        # The newly created should be present
        match = [r for r in rows if r["id"] == created_id]
        assert len(match) == 1, "Newly created enquiry not found in list"
        assert match[0]["name"] == unique_name

        # Sorted by created_at desc -> first row should be the newest. Allow tolerance:
        # at minimum ensure created entry is in top 3 since tests may run concurrently.
        top_ids = [r["id"] for r in rows[:3]]
        assert created_id in top_ids, "Newest enquiry not in top 3 (sort desc may be broken)"
