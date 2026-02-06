import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ashram | Pranavananda International School",
};

export default function AshramPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold tracking-tight text-[var(--fg)] sm:text-4xl">
        Ashram
      </h1>
      <p className="max-w-3xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
        Bharat Sevashram Sangha, founded by Acharya Srimat Swami
        Pranavanandaji Maharaj, tirelessly strives for spiritual upliftment and
        service to humanity. The ashram associated with the school provides a
        serene and disciplined environment where students are exposed to prayer,
        values and selfless service.
      </p>
      <p className="max-w-3xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
        In this spiritual atmosphere, students learn to harmonise academic
        pursuits with moral and spiritual growth. Regular satsangs, observance
        of important festivals and interaction with monks help them internalise
        the ideals of character, discipline and compassion.
      </p>
    </div>
  );
}


