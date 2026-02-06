import type { Metadata } from "next";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "About | Pranavananda",
};

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-3xl font-semibold tracking-tight text-[var(--fg)] sm:text-4xl"
        >
          About <span className="text-[var(--brand-orange)]">Pranavananda</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="max-w-2xl text-sm leading-relaxed text-[var(--muted)] sm:text-base"
        >
          Use this page to introduce the ethos of Pranavananda International
          School — its roots in Bharat Sevashram Sangha, focus on value‑based
          education and commitment to holistic development.
        </motion.p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl border border-gray-100 bg-white p-5 shadow-xs"
        >
          <h2 className="text-sm font-semibold text-[var(--fg)] sm:text-base">
            Who you are
          </h2>
          <p className="mt-2 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
            Use this area for a concise overview of your organization or
            profile. Keep paragraphs short and focused for better readability
            across desktop, tablet and mobile screens.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="rounded-2xl border border-gray-100 bg-white p-5 shadow-xs"
        >
          <h2 className="text-sm font-semibold text-[var(--fg)] sm:text-base">
            How you work
          </h2>
          <p className="mt-2 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
            Highlight your approach, methods or services. The layout is flexible
            enough for bullet points, short sections or quick stats without
            feeling crowded.
          </p>
        </motion.div>
      </section>
    </div>
  );
}


