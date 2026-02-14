import { div } from "framer-motion/m";
import type { Metadata } from "next";
import Image from "next/image";


export const metadata: Metadata = {
  title: "About Us | Pranavananda International School",
};

export default function AboutUsPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--fg)] sm:text-4xl">
          About{" "}
          <span className="text-[var(--brand-orange)]">
            Pranavananda International School
          </span>
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
          Pranavananda International School is an educational institution of
          Bharat Sevashram Sangha, the century‑old great philanthropic and
          leading monastic organisation in India and abroad. It imparts
          present‑day modern education blended with high moral values and strict
          discipline.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-[var(--fg)]">
            Holistic development
          </h2>
          <p className="text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            Education here is a holistic approach towards all‑round development
            and progress of the present generation – physical, mental,
            intellectual, moral, spiritual, social and emotional. The aim is to
            prepare responsible, accountable, patriotic, dutiful, respectful,
            successful and worthy citizens of our holy motherland.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-[var(--fg)]">
            Guiding principles
          </h2>
          <p className="text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            The guiding principles of Acharya Srimat Swami Pranavanandaji
            Maharaj, the illustrious patriot saint and nation‑builder of
            unparalleled spiritual power and the founder of Bharat Sevashram
            Sangha, form the core values of the school. These values transform
            human qualities into godly ones and inspire students to live a
            dignified and meaningful life across the globe.
          </p>
        </div>
        <div className="w-full mt-8">
          <Image
            src="/slogan.jpg"
            alt="School slogan"
            width={1400}
            height={300}
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>
      </section>
    </div>

  );
}





  
