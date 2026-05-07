import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2, X, Cake } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const OCCASIONS = ["Birthday", "Anniversary", "Wedding", "Baby Shower", "Corporate", "Other"];
const CAKE_TYPES = [
  "Rasmalai Cake",
  "Blueberry Cheesecake",
  "Sinful Chocolate Cake",
  "Brownie with Hazelnut",
  "Custom Theme Cake",
  "Photo Print Cake",
  "Other",
];

export default function EnquiryDialog({ open, onOpenChange }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    occasion: "",
    cake_type: "",
    servings: "",
    event_date: "",
    notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e?.target ? e.target.value : e }));

  const reset = () => {
    setForm({ name: "", phone: "", email: "", occasion: "", cake_type: "", servings: "", event_date: "", notes: "" });
    setSuccess(false);
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.occasion || !form.cake_type) {
      toast.error("Please fill in name, phone, occasion and cake type.");
      return;
    }
    setLoading(true);
    try {
      const payload = { ...form };
      if (!payload.email) delete payload.email;
      await axios.post(`${API}/cake-enquiry`, payload);
      setSuccess(true);
      toast.success("Enquiry sent! Our team will reach out within 30 minutes.");
    } catch (err) {
      toast.error(err?.response?.data?.detail?.[0]?.msg || "Couldn't send enquiry. Please call us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(v) => { onOpenChange(v); if (!v) setTimeout(reset, 300); }}>
      <DialogContent
        className="bg-[#15110F] border border-white/10 text-cream max-w-xl rounded-3xl p-0 overflow-hidden"
        data-testid="enquiry-dialog"
      >
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 z-10 w-9 h-9 rounded-full glass grid place-items-center text-cream hover:text-gold transition-colors"
          aria-label="Close"
          data-testid="enquiry-close-btn"
        >
          <X className="w-4 h-4" />
        </button>

        {!success ? (
          <>
            <div className="px-7 pt-9 pb-5 bg-gradient-to-b from-[#1d1714] to-transparent">
              <DialogHeader className="text-left space-y-3">
                <div className="overline">Custom cake enquiry</div>
                <DialogTitle className="font-display text-3xl md:text-4xl text-cream leading-tight">
                  Tell us about your <span className="italic text-warm">celebration.</span>
                </DialogTitle>
                <DialogDescription className="text-mute text-sm">
                  We'll WhatsApp you a quote within 30 minutes. No deposits to enquire.
                </DialogDescription>
              </DialogHeader>
            </div>

            <form onSubmit={submit} className="px-7 pb-7 pt-2 space-y-4" data-testid="enquiry-form">
              <div className="grid grid-cols-2 gap-3">
                <Field label="Your name *">
                  <Input value={form.name} onChange={set("name")} placeholder="Aanya" className="bg-white/[0.04] border-white/10 text-cream placeholder:text-mute/60 h-11 rounded-xl focus-visible:ring-[#C7A17A]" data-testid="enquiry-name" required />
                </Field>
                <Field label="Phone *">
                  <Input value={form.phone} onChange={set("phone")} placeholder="+91 98xxxxxxxx" className="bg-white/[0.04] border-white/10 text-cream placeholder:text-mute/60 h-11 rounded-xl focus-visible:ring-[#C7A17A]" data-testid="enquiry-phone" required />
                </Field>
              </div>

              <Field label="Email (optional)">
                <Input type="email" value={form.email} onChange={set("email")} placeholder="hello@you.com" className="bg-white/[0.04] border-white/10 text-cream placeholder:text-mute/60 h-11 rounded-xl focus-visible:ring-[#C7A17A]" data-testid="enquiry-email" />
              </Field>

              <div className="grid grid-cols-2 gap-3">
                <Field label="Occasion *">
                  <Select value={form.occasion} onValueChange={set("occasion")}>
                    <SelectTrigger className="bg-white/[0.04] border-white/10 text-cream h-11 rounded-xl" data-testid="enquiry-occasion">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1A1514] border-white/10 text-cream">
                      {OCCASIONS.map((o) => (
                        <SelectItem key={o} value={o} className="focus:bg-white/5 focus:text-cream">{o}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
                <Field label="Cake type *">
                  <Select value={form.cake_type} onValueChange={set("cake_type")}>
                    <SelectTrigger className="bg-white/[0.04] border-white/10 text-cream h-11 rounded-xl" data-testid="enquiry-cake-type">
                      <SelectValue placeholder="Choose flavour" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1A1514] border-white/10 text-cream">
                      {CAKE_TYPES.map((o) => (
                        <SelectItem key={o} value={o} className="focus:bg-white/5 focus:text-cream">{o}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Field label="Servings">
                  <Input value={form.servings} onChange={set("servings")} placeholder="e.g. 500g / 10 ppl" className="bg-white/[0.04] border-white/10 text-cream placeholder:text-mute/60 h-11 rounded-xl focus-visible:ring-[#C7A17A]" data-testid="enquiry-servings" />
                </Field>
                <Field label="Event date">
                  <Input type="date" value={form.event_date} onChange={set("event_date")} className="bg-white/[0.04] border-white/10 text-cream h-11 rounded-xl focus-visible:ring-[#C7A17A]" data-testid="enquiry-date" />
                </Field>
              </div>

              <Field label="Anything else?">
                <Textarea value={form.notes} onChange={set("notes")} rows={3} placeholder="Theme, colour palette, message on cake, allergies…" className="bg-white/[0.04] border-white/10 text-cream placeholder:text-mute/60 rounded-xl focus-visible:ring-[#C7A17A] resize-none" data-testid="enquiry-notes" />
              </Field>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full mt-2"
                data-testid="enquiry-submit-btn"
              >
                {loading ? (<><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>) : (<><Cake className="w-4 h-4" /> Send Enquiry</>)}
              </button>
              <p className="text-[11px] text-mute text-center">By submitting you agree to be contacted on the phone number provided.</p>
            </form>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-8 py-14 text-center"
            data-testid="enquiry-success"
          >
            <div className="mx-auto w-16 h-16 rounded-full bg-[#C7A17A]/15 grid place-items-center text-gold mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display text-3xl text-cream mb-3">Enquiry received.</h3>
            <p className="text-mute leading-relaxed max-w-sm mx-auto">
              Thanks {form.name.split(" ")[0] || "there"} — our pastry team will WhatsApp you a quote within 30 minutes. Until then, save our number 📞
            </p>
            <button onClick={() => onOpenChange(false)} className="btn-ghost-gold mt-8" data-testid="enquiry-success-close">
              Close
            </button>
          </motion.div>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Field({ label, children }) {
  return (
    <div className="space-y-1.5">
      <Label className="text-xs tracking-[0.16em] uppercase text-mute">{label}</Label>
      {children}
    </div>
  );
}
