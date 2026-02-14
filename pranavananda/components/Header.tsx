"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/ashram", label: "Ashram" },
  { href: "/media-gallery", label: "Media & Gallery" },
  { href: "/infrastructure", label: "Infrastructure" },
  { href: "/admission", label: "Admission" },
  { href: "/academic", label: "Academic" },
  { href: "/news-events", label: "News & Events" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-gray-200 bg-white/95 backdrop-blur-md shadow-sm"
          : "border-gray-100 bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--brand-orange)] to-[var(--brand-orange-dark)] text-xl font-bold text-white shadow-md transition-shadow group-hover:shadow-lg overflow-hidden"
            >
              <Image
                src="/logo.jpg"
                alt="Pranavananda logo"
                width={48}
                height={48}
                priority
                className="object-cover"
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-[var(--fg)] leading-tight">
                Pranavananda
              </span>
              <span className="text-[10px] font-medium text-[var(--muted)] uppercase tracking-wider">
                International School
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium transition-colors"
                >
                  <span
                    className={`relative z-10 ${
                      isActive
                        ? "text-[var(--brand-orange)]"
                        : "text-[var(--muted)] hover:text-[var(--fg)]"
                    }`}
                  >
                    {item.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-lg bg-[var(--brand-orange)]/10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <motion.button
            type="button"
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white text-[var(--fg)] shadow-sm transition-colors hover:bg-gray-50 lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="absolute h-0.5 w-5 rounded-full bg-current"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="absolute h-0.5 w-5 rounded-full bg-current"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="absolute h-0.5 w-5 rounded-full bg-current"
            />
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 top-full z-50 border-t border-gray-200 bg-white shadow-lg lg:hidden"
            >
              <div className="container-custom flex flex-col gap-1 py-4">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-[var(--brand-orange)]/10 text-[var(--brand-orange)]"
                            : "text-[var(--muted)] hover:bg-gray-50 hover:text-[var(--fg)]"
                        }`}
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
