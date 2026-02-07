import type { Metadata } from "next";
import Image from "next/image";


export const metadata: Metadata = {
  title: "Admission | Pranavananda International School",
};

export default function AdmissionPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight text-[var(--fg)] sm:text-4xl">
        Admission
      </h1>
      <p className="max-w-3xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
        Admission for the Session 2025–2026 is open for the classes Nursery to
        IX &amp; XI. Entrance Tests are conducted on working days, with
        reporting time between 9:00 AM and 11:00 AM. Parents can contact the
        school office for detailed admission procedures, fee structure and
        required documents.
      </p>
      <Image
  src="/first%20pop%20image.jpg"
  alt="Admission poster"
  width={1000}
  height={600}
  style={{ width: "100%", height: "auto", borderRadius: "12px" }}
/>


    </div>
  );
}


