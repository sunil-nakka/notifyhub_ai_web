"use client";

import { useState, type FormEvent } from "react";
import { SITE } from "@/lib/constants";
import { cx } from "@/components/ui/primitives";
import { IconCheck } from "@/components/ui/icons";

/**
 * Forms post to NEXT_PUBLIC_CONTACT_ENDPOINT when it is configured.
 * Until an endpoint exists, they fall back to composing an email so a
 * submission is never silently discarded.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

type State = "idle" | "sending" | "sent" | "error";

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  autoComplete,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-[13px] font-medium text-ink-800"
      >
        {label}
        {required ? <span className="ml-1 text-risk-500">*</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="mt-1.5 h-10 w-full rounded-md border border-ink-300 bg-white px-3 text-[14px] text-ink-900 transition-colors outline-none placeholder:text-ink-400 focus:border-cobalt-500"
      />
    </div>
  );
}

function Success({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-positive-500/25 bg-positive-50 p-5">
      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-positive-500 text-white">
        <IconCheck className="h-3.5 w-3.5" />
      </span>
      <div>
        <p className="text-[14px] font-semibold text-positive-700">{title}</p>
        <p className="mt-1 text-[13px] leading-relaxed text-ink-600">{body}</p>
      </div>
    </div>
  );
}

async function submit(payload: Record<string, string>, subject: string) {
  if (ENDPOINT) {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error("Request failed");
    return;
  }

  const body = Object.entries(payload)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
  window.location.href = `mailto:${SITE.contactEmail}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}

/** Business contact form used on /contact. */
export function ContactForm() {
  const [state, setState] = useState<State>("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(
      new FormData(e.currentTarget).entries(),
    ) as Record<string, string>;
    setState("sending");
    try {
      await submit(data, "NotifyHub enquiry");
      setState("sent");
    } catch {
      setState("error");
    }
  };

  if (state === "sent") {
    return (
      <Success
        title="Thanks — your message is on its way."
        body="Someone from NotifyHub will get back to you at the address you provided."
      />
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        <Field label="Full name" name="name" required autoComplete="name" />
        <Field
          label="Work email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        <Field label="Organization" name="organization" autoComplete="organization" />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
      </div>

      <div>
        <label
          htmlFor="interest"
          className="block text-[13px] font-medium text-ink-800"
        >
          What are you interested in?
        </label>
        <select
          id="interest"
          name="interest"
          defaultValue="School"
          className="mt-1.5 h-10 w-full rounded-md border border-ink-300 bg-white px-3 text-[14px] text-ink-900 outline-none focus:border-cobalt-500"
        >
          <option>School</option>
          <option>College</option>
          <option>Hospital</option>
          <option>Restaurant</option>
          <option>Platform or partnership</option>
          <option>Something else</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-[13px] font-medium text-ink-800"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your organization and what you are trying to improve."
          className="mt-1.5 w-full rounded-md border border-ink-300 bg-white px-3 py-2.5 text-[14px] leading-relaxed text-ink-900 outline-none placeholder:text-ink-400 focus:border-cobalt-500"
        />
      </div>

      {state === "error" ? (
        <p className="text-[13px] text-risk-700">
          That didn&rsquo;t go through. Email {SITE.contactEmail} and we&rsquo;ll
          pick it up from there.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={state === "sending"}
        className="inline-flex h-11 items-center justify-center rounded-md bg-cobalt-600 px-5 text-[15px] font-medium text-white transition-colors hover:bg-cobalt-700 disabled:opacity-60"
      >
        {state === "sending" ? "Sending…" : "Send message"}
      </button>

      <p className="text-[12px] leading-relaxed text-ink-500">
        We use this only to respond to your enquiry.
      </p>
    </form>
  );
}

/** Short interest form used on the pages for products that are not yet available. */
export function InterestForm({
  product,
  label,
  className,
}: {
  product: string;
  label: string;
  className?: string;
}) {
  const [state, setState] = useState<State>("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(
      new FormData(e.currentTarget).entries(),
    ) as Record<string, string>;
    setState("sending");
    try {
      await submit({ ...data, product }, `NotifyHub ${product} — interest`);
      setState("sent");
    } catch {
      setState("error");
    }
  };

  if (state === "sent") {
    return (
      <div className={className}>
        <Success
          title="You're on the list."
          body={`We'll be in touch when NotifyHub ${product} is ready for its first organizations.`}
        />
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={cx("space-y-3", className)}>
      <p className="text-[14px] font-semibold text-ink-950">{label}</p>
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <Field label="Work email" name="email" type="email" required autoComplete="email" />
        <Field label="Organization" name="organization" autoComplete="organization" />
      </div>
      {state === "error" ? (
        <p className="text-[13px] text-risk-700">
          That didn&rsquo;t go through. Email {SITE.contactEmail} instead.
        </p>
      ) : null}
      <button
        type="submit"
        disabled={state === "sending"}
        className="inline-flex h-10 items-center justify-center rounded-md border border-ink-300 bg-white px-4 text-[14px] font-medium text-ink-800 transition-colors hover:border-ink-400 hover:bg-ink-50 disabled:opacity-60"
      >
        {state === "sending" ? "Sending…" : "Notify me"}
      </button>
    </form>
  );
}
