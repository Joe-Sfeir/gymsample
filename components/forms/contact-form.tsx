"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { contactSchema, type ContactInput } from "@/lib/validation/forms";
export function ContactForm() {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>();
  const [status, setStatus] = useState("idle");
  const submit = async (data: ContactInput) => {
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      parsed.error.issues.forEach((i) =>
        setError(i.path[0] as keyof ContactInput, { message: i.message }),
      );
      return;
    }
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };
  const field =
    "mt-2 min-h-12 w-full border-2 border-border bg-background px-3";
  return (
    <form className="max-w-2xl" noValidate onSubmit={handleSubmit(submit)}>
      {status === "success" && (
        <p role="status" className="placeholder-note mb-6">
          Demo receipt issued. Your message was validated and not retained.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="text-accent">
          Submission failed. Please retry.
        </p>
      )}
      <label className="block font-bold">
        Full name
        <input className={field} {...register("fullName")} />
        <span className="text-accent">{errors.fullName?.message}</span>
      </label>
      <label className="mt-5 block font-bold">
        Phone or email
        <input className={field} {...register("contact")} />
        <span className="text-accent">{errors.contact?.message}</span>
      </label>
      <label className="mt-5 block font-bold">
        Inquiry type
        <select
          className={field}
          defaultValue="training"
          {...register("inquiryType")}
        >
          <option value="training">Training</option>
          <option value="membership">Membership</option>
          <option value="facility">Facility</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label className="mt-5 block font-bold">
        Message
        <textarea
          className={field + " min-h-36 p-3"}
          {...register("message")}
        />
        <span className="text-accent">{errors.message?.message}</span>
      </label>
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Website
          <input tabIndex={-1} {...register("website")} />
        </label>
      </div>
      <label className="mt-5 flex gap-3">
        <input type="checkbox" {...register("consent")} />I understand this is a
        demonstration inquiry and the submitted details will not be retained.
      </label>
      <span className="text-accent">{errors.consent?.message}</span>
      <button className="button button-accent mt-7" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Send inquiry"}
      </button>
    </form>
  );
}
