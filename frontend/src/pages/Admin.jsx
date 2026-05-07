import { useEffect, useState } from "react";
import axios from "axios";
import { Loader2, Lock, RefreshCw, MessageSquare, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Admin() {
  const [key, setKey] = useState(localStorage.getItem("rb_admin_key") || "");
  const [authed, setAuthed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const [error, setError] = useState("");

  const fetchRows = async (k) => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get(`${API}/cake-enquiries`, { params: { admin_key: k } });
      setRows(res.data || []);
      setAuthed(true);
      localStorage.setItem("rb_admin_key", k);
    } catch (e) {
      setError(e?.response?.status === 401 ? "Invalid admin key" : "Failed to load enquiries");
      setAuthed(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (key) fetchRows(key);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!authed) {
    return (
      <div className="min-h-screen bg-ink grid place-items-center px-6" data-testid="admin-login">
        <div className="glass-strong rounded-3xl p-8 w-full max-w-md">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-full bg-[#C7A17A]/15 grid place-items-center text-gold"><Lock className="w-5 h-5" /></div>
            <h1 className="font-display text-2xl text-cream">Retro Bakes · Admin</h1>
          </div>
          <p className="text-mute text-sm mb-6">Enter your admin key to view custom cake enquiries.</p>
          <Input
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="Admin key"
            className="bg-white/[0.04] border-white/10 text-cream h-11 rounded-xl focus-visible:ring-[#C7A17A] mb-4"
            data-testid="admin-key-input"
          />
          {error && <div className="text-sm text-red-400 mb-3">{error}</div>}
          <button onClick={() => fetchRows(key)} disabled={!key || loading} className="btn-primary w-full" data-testid="admin-login-btn">
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : null} Sign in
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ink text-cream py-10 px-6" data-testid="admin-dashboard">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="overline mb-2">Admin</div>
            <h1 className="font-display text-3xl md:text-4xl">Cake Enquiries <span className="text-mute font-sans text-base">· {rows.length}</span></h1>
          </div>
          <button onClick={() => fetchRows(key)} className="btn-ghost-gold !py-2.5 text-sm" data-testid="admin-refresh">
            <RefreshCw className="w-4 h-4" /> Refresh
          </button>
        </div>

        <div className="space-y-4">
          {rows.length === 0 && (
            <div className="glass rounded-2xl p-8 text-center text-mute">No enquiries yet.</div>
          )}
          {rows.map((r) => (
            <div key={r.id} className="glass rounded-2xl p-5" data-testid={`admin-row-${r.id}`}>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <div>
                  <div className="text-cream font-medium">{r.name}</div>
                  <div className="text-xs text-mute">{new Date(r.created_at).toLocaleString()}</div>
                </div>
                <div className="flex items-center gap-2">
                  <a href={`tel:${r.phone}`} className="glass rounded-full px-3 py-1.5 text-xs flex items-center gap-1.5 text-cream hover:text-gold transition-colors">
                    <Phone className="w-3.5 h-3.5" /> {r.phone}
                  </a>
                  <a href={`https://wa.me/${(r.phone || "").replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="glass rounded-full px-3 py-1.5 text-xs flex items-center gap-1.5 text-cream hover:text-gold transition-colors">
                    <MessageSquare className="w-3.5 h-3.5" /> WhatsApp
                  </a>
                </div>
              </div>
              <div className="grid md:grid-cols-4 gap-3 text-sm">
                <Stat label="Occasion" value={r.occasion} />
                <Stat label="Cake" value={r.cake_type} />
                <Stat label="Servings" value={r.servings || "—"} />
                <Stat label="Event date" value={r.event_date || "—"} />
              </div>
              {r.notes && (
                <div className="mt-3 text-sm text-mute border-l-2 border-[#C7A17A]/40 pl-3 italic">"{r.notes}"</div>
              )}
              {r.email && <div className="mt-2 text-xs text-mute">{r.email}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div>
      <div className="text-[10px] tracking-[0.18em] uppercase text-mute">{label}</div>
      <div className="text-cream">{value}</div>
    </div>
  );
}
