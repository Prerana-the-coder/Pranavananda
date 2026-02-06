import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Infrastructure | Pranavananda International School",
};

export default function InfrastructurePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold tracking-tight text-[var(--fg)] sm:text-4xl">
        Infrastructure
      </h1>
      <div className="grid gap-6 md:grid-cols-2">
        <p className="text-sm leading-relaxed text-[var(--muted)] sm:text-base">
          With all modern amenities – Science &amp; Technology Labs, Art &amp;
          Craft, Music, Dance, Smart Classrooms, Library and a vast green
          playground – the school provides a vibrant learning environment. These
          facilities are integrated with a spiritual atmosphere in the presence
          of the monks of the Sangha.
        </p>
        <p className="text-sm leading-relaxed text-[var(--muted)] sm:text-base">
          The campus aims to be a true learning hub where infrastructure
          supports interactive, value‑based education. You can showcase photos
          of laboratories, library, sports fields, auditorium and activity rooms
          here to give parents a clear sense of the campus.
        </p>
      </div>
    </div>
  );
}


