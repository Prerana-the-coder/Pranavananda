"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";


const footerLinks = {
  quickLinks: [
    { href: "/about-us", label: "About Us" },
    { href: "/admission", label: "Admission" },
    { href: "/academic", label: "Academic" },
    { href: "/infrastructure", label: "Infrastructure" },
  ],
  resources: [
    { href: "/news-events", label: "News & Events" },
    { href: "/media-gallery", label: "Media & Gallery" },
    { href: "/ashram", label: "Ashram" },
    { href: "/contact-us", label: "Contact Us" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t border-gray-200 bg-gradient-to-b from-white to-gray-50/50 mt-20"
    >
      <div className="container-custom">
        <div className="section-padding">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl overflow-hidden">
               <Image
                  src="/logo.jpg"
                  alt="School Logo"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>

                <div className="flex flex-col">
                  <span className="text-lg font-bold text-[var(--fg)] leading-tight">
                    Pranavananda
                  </span>
                  <span className="text-[10px] font-medium text-[var(--muted)] uppercase tracking-wider">
                    International School
                  </span>
                </div>
              
               <p className="text-sm leading-relaxed text-[var(--muted)]">
                    Man-Making Education in a modern, spiritual campus. Importing
                    present-day education blended with high moral values and strict discipline.
                  </p>
                </motion.div>

              

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--fg)]">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--brand-orange)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--fg)]">
                Resources
              </h3>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--brand-orange)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--fg)]">
                Contact
              </h3>
              <div className="space-y-3 text-sm text-[var(--muted)]">
                <p>
                  Wazirpur, Sector – 92,
                  <br />
                  Gurugram, Haryana - 122505
                </p>
                <p>
                  <span className="font-medium text-[var(--fg)]">Phone:</span>{" "}
                  <a
                    href="tel:8448293021"
                    className="hover:text-[var(--brand-orange)] transition-colors"
                  >
                    8448293021
                  </a>
                </p>
                <p>
                  <span className="font-medium text-[var(--fg)]">Email:</span>{" "}
                  <a
                    href="mailto:bsspisggn@gmail.com"
                    className="hover:text-[var(--brand-orange)] transition-colors break-all"
                  >
                    bsspisggn@gmail.com
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-[var(--muted)]">
              © {currentYear} Pranavananda International School. All rights
              reserved.
            </p>
            <p className="text-sm text-[var(--muted)]">
              Made with{" "}
              <span className="text-[var(--brand-orange)]">●</span> care by{" "}
              <span className="font-medium text-[var(--fg)]">
                Bharat Sevashram Sangha
              </span>
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
