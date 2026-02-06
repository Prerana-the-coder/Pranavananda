import type { Metadata } from "next";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "Contact | Pranavananda",
};

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-3xl font-semibold tracking-tight text-[var(--fg)] sm:text-4xl"
        >
          Get in{" "}
          <span className="text-[var(--brand-orange)]">touch</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="max-w-2xl text-sm leading-relaxed text-[var(--muted)] sm:text-base"
        >
          Use this page to share your preferred contact channels—email,
          WhatsApp, phone or a simple form. The layout keeps everything clear
          and easy to scan.
        </motion.p>
      </section>

      <section className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-xs"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="text-xs font-medium text-[var(--fg)]"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                placeholder="Your name"
                className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-xs text-[var(--fg)] outline-none ring-0 transition focus:border-[var(--brand-orange)] focus:ring-2 focus:ring-[var(--brand-orange)]/40"
              />
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="text-xs font-medium text-[var(--fg)]"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                placeholder="you@example.com"
                className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-xs text-[var(--fg)] outline-none transition focus:border-[var(--brand-orange)] focus:ring-2 focus:ring-[var(--brand-orange)]/40"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="message"
              className="text-xs font-medium text-[var(--fg)]"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Write a short message here..."
              className="w-full resize-none rounded-md border border-gray-200 bg-white px-3 py-2 text-xs text-[var(--fg)] outline-none transition focus:border-[var(--brand-orange)] focus:ring-2 focus:ring-[var(--brand-orange)]/40"
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-[var(--brand-orange)] px-4 py-2.5 text-xs font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#ff7f1f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-orange)]/60 sm:w-auto"
          >
            Send message
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="space-y-4 rounded-2xl border border-gray-100 bg-white p-5 text-xs text-[var(--muted)] shadow-xs sm:text-sm"
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-orange)]">
              Direct contact
            </p>
            <p className="mt-2">
              Add your main email address, phone number or social profile links
              here so visitors can reach you quickly.
            </p>
          </div>
          <div className="h-px bg-gray-100" />
          <div className="space-y-1.5">
            <p className="font-medium text-[var(--fg)]">Example</p>
            <p>you@example.com</p>
            <p>+91 00000 00000</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

