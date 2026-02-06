import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Media & Gallery | Pranavananda International School",
};

const images = [
  "/media-1.svg",
  "/media-2.svg",
  "/media-3.svg",
  "/media-4.svg",
  "/media-5.svg",
  "/media-6.svg",
];

export default function MediaGalleryPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight text-[var(--fg)] sm:text-4xl">
        Media &amp; Gallery
      </h1>

      <p className="max-w-3xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
        Photos and highlights from school events and campus life.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src) => (
          <div key={src} className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-2 shadow-sm">
            <Image src={src} alt={src} width={1200} height={800} className="w-full h-auto rounded-lg object-cover" priority={false} />
          </div>
        ))}
      </div>
    </div>
  );
}


