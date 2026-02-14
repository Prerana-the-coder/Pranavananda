import type { Metadata } from "next";
import Link from "next/link";



export const metadata: Metadata = {
  title: "News & Events | Pranavananda International School",
};
const newsItems = [
  { text: "Admission Open for Session 2026–27", link: "/admission" },
  { text: "Annual Day Celebration on 15 March", link: "/news-events" },
  { text: "School Excursion Next Week", link: "/media-gallery" },
  { text: "New Academic Session Starting Soon", link: "/academic" },
];


export default function NewsEventsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight text-[var(--fg)] sm:text-4xl">
        News &amp; Events
      </h1>
      <div className="bg-orange-500 text-white overflow-hidden whitespace-nowrap">
  <div className="animate-marquee py-2 text-sm font-medium flex gap-8">
    {[...newsItems, ...newsItems].map((item, i) => (
      <Link key={i} href={item.link} className="hover:underline">
        📢 {item.text}
      </Link>
    ))}
  </div>
</div>
<div className="bg-yellow-100 p-6 rounded-lg text-center space-y-4 mt-6">

  <h2 className="text-xl font-semibold tracking-wide">
    ACADEMIC
  </h2>

  <p>
    <strong>SYLLABUS:</strong> As the school is affiliated to CBSE,
    the school follows the CBSE prescribed curriculum.
  </p>

  <p>
    <strong>TEST & EXAMINATION:</strong> The institute follows the CBSE
    pattern of revised assessment structure implemented from the academic
    year 2017–2018.
  </p>

  <p>
    <strong>
      <a href="/academic" className="text-blue-600 underline">
        FACULTY
      </a>
    </strong>
    : The teaching members are highly qualified.
    <a href="/academic" className="text-blue-600 underline ml-1">
      CLICK FOR MORE INFORMATION
    </a>
  </p>

  <p className="font-semibold">
    BOOK LIST:
    <a
      href="/booklist.pdf"
      target="_blank"
      className="text-orange-600 underline ml-2"
    >
      Click here for BOOKLIST 2025–26
    </a>
  </p>

</div>



      <p className="max-w-3xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
        List all current activities and upcoming events here, such as Geeta
        Chanting Competition, Annual Day Celebration, School Excursions, Model
        United Nations achievements, Youth Kala Utsav awards and more, similar
        to the existing news feed on the original site.
      </p>
    </div>
    
  );
}


