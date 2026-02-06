import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Pranavananda International School",
};

export default function ContactUsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight text-[var(--fg)] sm:text-4xl">
        Contact Us
      </h1>
      <p className="max-w-3xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
        Wazirpur, Sector – 92, Gurugram, Haryana - 122505
      </p>
      <p className="text-sm leading-relaxed text-[var(--muted)] sm:text-base">
        Phone: 8448293021, 8448293023, 8448293024
        <br />
        Email: bsspisggn@gmail.com
      </p>
    </div>
  );
}

