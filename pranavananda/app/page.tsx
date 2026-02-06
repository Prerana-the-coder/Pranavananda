"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, GraduationCap, Users, BookOpen, Award, Calendar } from "lucide-react";

const popUp = {
  hidden: { opacity: 0, scale: 0.5, y: 50 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const features = [
  {
    icon: GraduationCap,
    title: "Holistic Education",
    description: "Physical, mental, intellectual, moral, spiritual, social and emotional development.",
  },
  {
    icon: Users,
    title: "Value-Based Learning",
    description: "Modern education blended with high moral values and strict discipline.",
  },
  {
    icon: BookOpen,
    title: "Modern Facilities",
    description: "Science & Technology Labs, Smart Classrooms, Library and more.",
  },
  {
    icon: Award,
    title: "Excellence Focused",
    description: "Preparing responsible, patriotic and value-driven citizens.",
  },
];

const leadership = [
  {
    title: "Chairman",
    name: "Swamy Atmajnanananda",
    excerpt:
      "We intend to make Pranavananda International School different from others, where learning is based on experiences and applications.",
  },
  {
    title: "Principal",
    name: "JEEVITENDRA SATI",
    excerpt:
      "India needs a value education system which inculcates universal values and enriches a student's personality along with academics.",
  },
  {
    title: "Vice Principal",
    name: "SEEMA SATI M.A., B.ED.",
    excerpt:
      "Education is the fine‑tuning that brings out perfection in human beings, helping them blossom their full potential.",
  },
];

const events = [
  {
    title: "Geeta Chanting Competition",
    date: "Ongoing",
    summary:
      "Students showcase the timeless beauty of Bhagavad Gita Shlokas, nurturing discipline, focus and devotion.",
  },
  {
    title: "Annual Day Celebration",
    date: "Completed",
    summary:
      "11th Annual Day 2025 (NAVODAYAN) celebrated with esteemed guests and joyful student performances.",
  },
  {
    title: "School Excursions",
    date: "Upcoming",
    summary:
      "Educational excursions organised for all classes, providing practical exposure beyond the classroom.",
  },
];

export default function Home() {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowPopup(false), 3500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="space-y-0">
      {/* Pop-up Image Section */}
      {showPopup && (
        <section className="fixed inset-0 z-[60] flex items-center justify-center bg-black/30 p-4">
          <div className="relative w-full max-w-3xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={popUp}
              className="w-full"
            >
              <img
                src="/first-pop.jpg"
                alt="Popup media"
                width={1200}
                height={800}
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  if (!img.dataset.fallback) {
                    img.dataset.fallback = "1";
                    img.src = "/first-image.svg";
                  }
                }}
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </motion.div>
            <button
              aria-label="Close popup"
              onClick={() => setShowPopup(false)}
              className="absolute right-2 top-2 z-50 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-sm shadow"
            >
              ×
            </button>
          </div>
        </section>
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-orange-50/30 to-white">
        <div className="container-custom section-padding">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="space-y-8"
            >
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-orange)]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--brand-orange)]"
              >
                <span>Pranavananda International School</span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-balance text-4xl font-bold tracking-tight text-[var(--fg)] sm:text-5xl lg:text-6xl"
              >
                Man‑Making Education in a{" "}
                <span className="text-gradient">modern, spiritual campus</span>.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="max-w-2xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl"
              >
                An educational institution of Bharat Sevashram Sangha, imparting
                present‑day education blended with high moral values, strict
                discipline and a holistic approach to physical, mental, intellectual
                and spiritual growth.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex flex-wrap items-center gap-4"
              >
                <Link href="/admission" className="btn-primary">
                  Admission 2025–26
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/about-us" className="btn-secondary">
                  Learn more about the school
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={fadeUp}
                className="grid grid-cols-3 gap-6 pt-8"
              >
                {[
                  { label: "CBSE", value: "Affiliated" },
                  { label: "Location", value: "Gurugram" },
                  { label: "Type", value: "Co-ed" },
                ].map((stat, index) => (
                  <div key={index} className="space-y-1">
                    <p className="text-2xl font-bold text-[var(--brand-orange)]">
                      {stat.value}
                    </p>
                    <p className="text-xs font-medium text-[var(--muted)] uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-[var(--brand-orange)]/20 via-white to-[var(--brand-orange)]/10 blur-3xl" />
              <div className="card relative overflow-hidden">
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                    Welcome
                  </span>
                  <span className="inline-flex items-center rounded-full bg-[var(--brand-orange)]/10 px-3 py-1 text-[10px] font-semibold text-[var(--brand-orange)]">
                    Gurugram • CBSE • Co‑ed
                  </span>
                </div>

                <div className="relative h-64 overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--brand-orange)]/20 via-white to-[var(--brand-orange)]/30">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <GraduationCap className="h-24 w-24 text-[var(--brand-orange)]/30" />
                  </div>
                </div>

                <p className="mt-6 text-sm leading-relaxed text-[var(--muted)]">
                  With modern amenities like Science &amp; Technology Labs, Art
                  &amp; Craft, Music, Dance, Smart Classrooms, Library and a vast
                  green playground amidst a spiritual environment, the institute
                  aims to be a learning hub with &quot;Man‑Making‑Education&quot; as
                  a movement.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-12"
          >
            <motion.div variants={fadeUp} className="text-center space-y-4">
              <h2 className="section-title">Why Choose Pranavananda?</h2>
              <p className="section-subtitle max-w-2xl mx-auto">
                A holistic approach to education that shapes well-rounded individuals
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  className="card group"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-orange)]/10 text-[var(--brand-orange)] transition-colors group-hover:bg-[var(--brand-orange)] group-hover:text-white">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-[var(--fg)]">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--muted)]">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50/50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-8"
          >
            <motion.div variants={fadeUp} className="space-y-4">
              <h2 className="section-title">Welcome to Pranavananda International School</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <p className="text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                  Pranavananda International School is an educational institution of
                  Bharat Sevashram Sangha, a century‑old philanthropic and leading
                  monastic organisation in India and abroad. It aims to impart modern
                  education blended with high moral values and strict discipline.
                </p>
                <p className="text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                  The school follows a holistic approach towards all‑round development
                  – physical, mental, intellectual, moral, spiritual, social and
                  emotional – preparing responsible, patriotic and value‑driven
                  citizens of our motherland.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* News & Activities Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-8"
          >
            <div className="flex flex-wrap items-end justify-between gap-4">
              <motion.div variants={fadeUp}>
                <h2 className="section-title">News &amp; Current Activities</h2>
              </motion.div>
              <motion.div variants={fadeUp}>
                <Link
                  href="/news-events"
                  className="inline-flex items-center text-sm font-medium text-[var(--brand-orange)] underline-offset-4 hover:underline"
                >
                  View all
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <motion.div variants={fadeUp} className="card">
                <div className="mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-[var(--brand-orange)]" />
                  <h3 className="text-lg font-semibold text-[var(--fg)]">
                    Latest Notices
                  </h3>
                </div>
                <ul className="space-y-4 text-sm text-[var(--muted)]">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 rounded-full bg-gray-100 px-2.5 py-1 text-[10px] font-semibold text-[var(--fg)]">
                      Admission
                    </span>
                    <span>
                      Admission for the Session 2025–2026 is open for the classes
                      Nursery to IX &amp; XI.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 rounded-full bg-gray-100 px-2.5 py-1 text-[10px] font-semibold text-[var(--fg)]">
                      Entrance Test
                    </span>
                    <span>
                      Entrance Test is conducted on working days. Reporting time: 9:00
                      AM – 11:00 AM.
                    </span>
                  </li>
                </ul>
              </motion.div>

              <motion.div variants={fadeUp} className="card">
                <div className="mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-[var(--brand-orange)]" />
                  <h3 className="text-lg font-semibold text-[var(--fg)]">
                    Current Activities
                  </h3>
                </div>
                <ul className="space-y-4 text-sm text-[var(--muted)]">
                  {[
                    { date: "SAT 09 MARCH", text: "Admission process for Session 2025–26 for Nursery to IX & XI." },
                    { date: "WED 14 FEB", text: "Celebration of Sri Sri Saraswati Puja on Basant Panchami." },
                    { date: "SUN 14 APRIL", text: "All India Open Karate Championship at Community Centre, Sec 27, Gurugram." },
                  ].map((activity, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0 text-xs font-bold text-[var(--brand-orange)]">
                        {activity.date}
                      </span>
                      <span>{activity.text}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50/50 to-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-12"
          >
            <motion.div variants={fadeUp} className="text-center space-y-4">
              <h2 className="section-title">From the Leadership</h2>
              <p className="section-subtitle max-w-2xl mx-auto">
                Visionary leaders guiding the path of excellence
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              {leadership.map((person) => (
                <motion.div
                  key={person.name}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  className="card flex flex-col h-full"
                >
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[var(--brand-orange)]">
                    {person.title}
                  </p>
                  <p className="mb-4 text-xl font-bold text-[var(--fg)]">
                    {person.name}
                  </p>
                  <p className="flex-1 text-sm leading-relaxed text-[var(--muted)]">
                    {person.excerpt}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-8"
          >
            <motion.div variants={fadeUp}>
              <h2 className="section-title">Upcoming &amp; Recent Events</h2>
            </motion.div>
            <div className="grid gap-6 md:grid-cols-3">
              {events.map((event) => (
                <motion.div
                  key={event.title}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  className="card"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--brand-orange)]">
                      {event.date}
                    </span>
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-[var(--fg)]">
                    {event.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--muted)]">
                    {event.summary}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
