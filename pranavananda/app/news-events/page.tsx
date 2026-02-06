import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Events | Pranavananda International School",
};

export default function NewsEventsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight text-[var(--fg)] sm:text-4xl">
        News &amp; Events
      </h1>
      <p className="max-w-3xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
        List all current activities and upcoming events here, such as Geeta
        Chanting Competition, Annual Day Celebration, School Excursions, Model
        United Nations achievements, Youth Kala Utsav awards and more, similar
        to the existing news feed on the original site.
      </p>
    </div>
  );
}


