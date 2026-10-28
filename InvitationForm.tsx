import { useRef, useState, type FormEvent } from "react";
import { motion } from "framer-motion";

interface FormState {
  fullName: string;
  email: string;
  country: string;
  interest: string;
  message: string;
  consent: boolean;
  website: string; // honeypot
}

const INITIAL_STATE: FormState = {
  fullName: "",
  email: "",
  country: "",
  interest: "Vehicle concept",
  message: "",
  consent: false,
  website: "",
};

const INTERESTS = ["Vehicle concept", "Private introduction", "Brand updates"];

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function InvitationForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const submittedOnce = useRef(false);
  const lastSubmitAt = useRef(0);
  const startTime = useRef(Date.now());

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim() || form.fullName.trim().length < 2) {
      next.fullName = "Please enter your full name.";
    }
    if (!isValidEmail(form.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.country.trim()) {
      next.country = "Please enter your country of residence.";
    }
    if (!form.consent) {
      next.consent = "Consent to the privacy policy is required.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Basic spam protections: honeypot + time-trap (bots submit near-instantly).
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
    if (submittedOnce.current && now - lastSubmitAt.current < 4000) {
      return; // prevent duplicate rapid submissions
    }

    if (!validate()) return;

    setStatus("submitting");
    lastSubmitAt.current = now;
    submittedOnce.current = true;

    try {
      // Demo mode: no backend is currently configured for this deployment.
      // Replace this block with a real request (e.g. to Supabase, Firebase,
      // or a secure serverless function) to persist submissions.
      await new Promise((resolve) => setTimeout(resolve, 1100));
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
        className="border border-line bg-graphite/40 px-8 py-14 text-center md:px-16"
        role="status"
      >
        <span className="label-overline text-[11px] text-silver-2">Request Received</span>
        <h3 className="font-display mt-4 text-3xl tracking-wide text-white md:text-4xl">
          YOUR INTEREST HAS BEEN RECEIVED.
        </h3>
        <p className="mx-auto mt-5 max-w-lg text-sm font-light leading-relaxed text-silver">
          Thank you for connecting with TEKA Cars. Your submission has been recorded. If an invitation
          becomes available, the team may contact you using the details provided.
        </p>
        <p className="mx-auto mt-6 max-w-lg text-xs font-light text-silver-2">
          Demo mode: this preview environment does not have a live backend connected, so no data has been
          permanently stored.
        </p>
      </motion.div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-7" aria-describedby="invitation-demo-note">
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
        <Field
          label="Full Name"
          htmlFor="fullName"
          error={errors.fullName}
        >
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            value={form.fullName}
            onChange={(e) => setForm((f) => ({ ...f, fullName: e.target.value }))}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className={inputClass(!!errors.fullName)}
          />
        </Field>

        <Field label="Email Address" htmlFor="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClass(!!errors.email)}
          />
        </Field>

        <Field label="Country of Residence" htmlFor="country" error={errors.country}>
          <input
            id="country"
            name="country"
            type="text"
            autoComplete="country-name"
            value={form.country}
            onChange={(e) => setForm((f) => ({ ...f, country: e.target.value }))}
            aria-invalid={!!errors.country}
            aria-describedby={errors.country ? "country-error" : undefined}
            className={inputClass(!!errors.country)}
          />
        </Field>

        <Field label="Area of Interest" htmlFor="interest">
          <select
            id="interest"
            name="interest"
            value={form.interest}
            onChange={(e) => setForm((f) => ({ ...f, interest: e.target.value }))}
            className={inputClass(false)}
          >
            {INTERESTS.map((interest) => (
              <option key={interest} value={interest} className="bg-ink">
                {interest}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Message (Optional)" htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          className={inputClass(false)}
        />
      </Field>

      {/* Honeypot field — hidden from real users, catches basic bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
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
            aria-describedby={errors.consent ? "consent-error" : undefined}
            className="mt-1 h-4 w-4 shrink-0 border border-silver/50 bg-transparent accent-white"
          />
          <span>
            I consent to TEKA Cars collecting and processing my information in accordance with the{" "}
            <span className="underline underline-offset-4">Privacy Policy</span>.
          </span>
        </label>
        {errors.consent && (
          <p id="consent-error" className="mt-2 text-xs text-red-400">
            {errors.consent}
          </p>
        )}
      </div>

      <div className="flex flex-col items-start gap-4 pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="label-overline group relative inline-flex items-center gap-3 border border-white bg-white px-9 py-4 text-[11px] text-ink transition-colors duration-300 hover:bg-transparent hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Submitting…" : "Request an Invitation"}
        </button>
        {status === "error" && (
          <p role="alert" className="text-xs text-red-400">
            Something went wrong while submitting your request. Please try again.
          </p>
        )}
        <p id="invitation-demo-note" className="text-xs font-light text-silver-2">
          Demo mode: no backend is currently connected. No information is permanently stored in this preview.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="label-overline mb-2 block text-[10px] text-silver-2">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} role="alert" className="mt-2 text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

function inputClass(invalid: boolean) {
  return `w-full border bg-transparent px-4 py-3 text-sm font-light text-white outline-none transition-colors placeholder:text-silver-2/60 ${
    invalid ? "border-red-400/70" : "border-line focus:border-white"
  }`;
}
