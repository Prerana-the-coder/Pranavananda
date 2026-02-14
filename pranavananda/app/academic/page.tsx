import type { Metadata } from "next";
import Image from "next/image";


export const metadata: Metadata = {
  title: "Academic | Pranavananda International School",
};

export default function AcademicPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight text-[var(--fg)] sm:text-4xl">
        Academic
      </h1>
      <Image
        src="/acadamics.jpg"
        alt="Academic"
        width={1000}
        height={500}
        className="rounded-xl my-6 w-full h-auto"
      />

      <p className="max-w-3xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
        Use this page to outline the academic structure, curriculum, subjects
        and key academic policies of the school. You can mirror the details
        from the existing website – such as class‑wise curriculum, evaluation
        pattern and co‑scholastic areas – and present them in clear sections.
      </p>
    </div>
  );
}


