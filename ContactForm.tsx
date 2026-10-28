import { useRef, useState, type FormEvent } from "react";
import { motion } from "framer-motion";

interface FormState {
  fullName: string;
  email: string;
  enquiryType: string;
  message: string;
  consent: boolean;
  website: string;
}

const INITIAL_STATE: FormState = {
  fullName: "",
  email: "",
  enquiryType: "General Enquiry",
  message: "",
  consent: false,
  website: "",
};

const ENQUIRY_TYPES = ["General Enquiry", "Media & Press", "Partnerships", "Careers", "Other"];

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const submittedOnce = useRef(false);
  const lastSubmitAt = useRef(0);
  const startTime = useRef(Date.now());

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim() || form.fullName.trim().length < 2) next.fullName = "Please enter your full name.";
    if (!isValidEmail(form.email)) next.email = "Please enter a valid email address.";
    if (!form.message.trim() || form.message.trim().length < 10)
      next.message = "Please include a short message (at least 10 characters).";
    if (!form.consent) next.consent = "Consent to the privacy policy is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (form.website.trim() !== "") {
      setStatus("success");
      return;
    }
    if (Date.now() - startTime.current < 1200) {
      setErrors({ fullName: "Please review the form and try again." });
      return;
    }
    if (status === "submitting") return;
    const now = Date.now();
    if (submittedOnce.current && now - lastSubmitAt.current < 4000) return;

    if (!validate()) return;

    setStatus("submitting");
    lastSubmitAt.current = now;
    submittedOnce.current = true;

    try {
      // Demo mode: connect this to a real endpoint (serverless function,
      // Supabase, Firebase, etc.) to persist and route enquiries.
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="border border-line bg-graphite/40 px-8 py-14 text-center"
        role="status"
      >
        <span className="label-overline text-[11px] text-silver-2">Message Sent</span>
        <h3 className="font-display mt-4 text-3xl tracking-wide text-white">THANK YOU FOR REACHING OUT.</h3>
        <p className="mx-auto mt-5 max-w-lg text-sm font-light leading-relaxed text-silver">
          Your enquiry has been recorded. A member of the TEKA Cars team will respond if required.
        </p>
        <p className="mx-auto mt-6 max-w-lg text-xs font-light text-silver-2">
          Demo mode: this preview environment does not have a live backend connected.
        </p>
      </motion.div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-7" aria-describedby="contact-demo-note">
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
        <div>
          <label htmlFor="c-fullName" className="label-overline mb-2 block text-[10px] text-silver-2">
            Full Name
          </label>
          <input
            id="c-fullName"
            type="text"
            autoComplete="name"
            value={form.fullName}
            onChange={(e) => setForm((f) => ({ ...f, fullName: e.target.value }))}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "c-fullName-error" : undefined}
            className={inputClass(!!errors.fullName)}
          />
          {errors.fullName && (
            <p id="c-fullName-error" role="alert" className="mt-2 text-xs text-red-400">
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="c-email" className="label-overline mb-2 block text-[10px] text-silver-2">
            Email Address
          </label>
          <input
            id="c-email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "c-email-error" : undefined}
            className={inputClass(!!errors.email)}
          />
          {errors.email && (
            <p id="c-email-error" role="alert" className="mt-2 text-xs text-red-400">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="c-enquiry" className="label-overline mb-2 block text-[10px] text-silver-2">
          Enquiry Type
        </label>
        <select
          id="c-enquiry"
          value={form.enquiryType}
          onChange={(e) => setForm((f) => ({ ...f, enquiryType: e.target.value }))}
          className={inputClass(false)}
        >
          {ENQUIRY_TYPES.map((type) => (
            <option key={type} value={type} className="bg-ink">
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="c-message" className="label-overline mb-2 block text-[10px] text-silver-2">
          Message
        </label>
        <textarea
          id="c-message"
          rows={5}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "c-message-error" : undefined}
          className={inputClass(!!errors.message)}
        />
        {errors.message && (
          <p id="c-message-error" role="alert" className="mt-2 text-xs text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="c-website">Leave this field empty</label>
        <input
          id="c-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(e) => setForm((f) => ({ ...f, website: e.target.value }))}
        />
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-3 text-sm font-light text-silver">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(e) => setForm((f) => ({ ...f, consent: e.target.checked }))}
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? "c-consent-error" : undefined}
            className="mt-1 h-4 w-4 shrink-0 border border-silver/50 bg-transparent accent-white"
          />
          <span>
            I consent to TEKA Cars processing my information in accordance with the{" "}
            <span className="underline underline-offset-4">Privacy Policy</span>.
          </span>
        </label>
        {errors.consent && (
          <p id="c-consent-error" role="alert" className="mt-2 text-xs text-red-400">
            {errors.consent}
          </p>
        )}
      </div>

      <div className="flex flex-col items-start gap-4 pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="label-overline inline-flex items-center gap-3 border border-white bg-white px-9 py-4 text-[11px] text-ink transition-colors duration-300 hover:bg-transparent hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send Message"}
        </button>
        {status === "error" && (
          <p role="alert" className="text-xs text-red-400">
            Something went wrong while sending your message. Please try again.
          </p>
        )}
        <p id="contact-demo-note" className="text-xs font-light text-silver-2">
          Demo mode: no backend is currently connected. No information is permanently stored in this preview.
        </p>
      </div>
    </form>
  );
}

function inputClass(invalid: boolean) {
  return `w-full border bg-transparent px-4 py-3 text-sm font-light text-white outline-none transition-colors placeholder:text-silver-2/60 ${
    invalid ? "border-red-400/70" : "border-line focus:border-white"
  }`;
}
