"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "FB", href: "https://facebook.com" },
  { label: "TW", href: "https://twitter.com" },
  { label: "LI", href: "https://linkedin.com" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-[#101010] text-white">
      {/* Top bar – stays fixed on top */}
      <div className="flex items-center justify-between px-4 py-4 sm:px-8 sm:py-5 relative z-50 h-[10vh]">
        <Link href="/" className="flex items-start">
          <Image width={65} height={65} src="/logo.avif" alt="logo" />
        </Link>

        {open ? (
          <div className="hidden sm:flex items-center gap-2">
            {socials.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center bg-[#FFFFFF1A] hover:bg-[#ED2B2B] text-lg font-semibold transition-colors duration-300"
              >
                {s.label}
              </Link>
            ))}
          </div>
        ) : (
          <Link
            href="mailto:hello@studix.com"
            className="hidden text-base font-medium sm:inline-block sm:text-lg"
          >
            hello@studix.com
          </Link>
        )}

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex items-center gap-2 bg-transparent cursor-pointer sm:gap-3"
        >
          <span className="relative h-6 w-6 flex items-center justify-center">
            <X
              className={`absolute h-6 w-6 transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                open ? "rotate-0 opacity-100 scale-100" : "rotate-45 opacity-0 scale-75"
              }`}
            />
            <span
              className={`absolute flex flex-col gap-1 transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                open ? "rotate-45 opacity-0 scale-75" : "rotate-0 opacity-100 scale-100"
              }`}
            >
              <span className="h-px w-6 bg-white sm:w-8" />
              <span className="h-px w-6 bg-white sm:w-8" />
            </span>
          </span>
          <span className="text-lg font-semibold sm:text-2xl">
            {open ? "CLOSE" : "MENU"}
          </span>
        </button>
      </div>

      {/* Full‑screen overlay menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#101010] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full">
          <nav className="flex flex-1 flex-col items-center justify-center gap-1 px-6 py-10 sm:gap-2 sm:px-8 sm:py-12">
            {links.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-white text-center hover:text-[#ED2B2B] text-4xl sm:text-6xl md:text-7xl uppercase leading-tighter transition-colors"
                style={{
                  fontWeight: 600,
                  opacity: open ? 1 : 0,
                  filter: open ? "blur(0px)" : "blur(6px)",
                  transform: open ? "translateY(0) scale(1)" : "translateY(24px) scale(0.96)",
                  transition:
                    "opacity 0.45s cubic-bezier(0.76,0,0.24,1), transform 0.45s cubic-bezier(0.76,0,0.24,1), filter 0.45s cubic-bezier(0.76,0,0.24,1), color 0.2s ease",
                  transitionDelay: open ? `${0.15 + i * 0.05}s` : "0s",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-4 px-6 pb-8 sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:px-8">
            <Link
              href="mailto:hello@studix.com"
              className="order-2 text-sm font-bold uppercase text-white sm:order-1 sm:text-base"
            >
              hello@studix.com
            </Link>

            <Link
              href="mailto:hello@studix.com"
              className="order-1 flex w-full max-w-xs items-center justify-between gap-3 border border-white/30 px-6 py-3 text-base font-semibold uppercase transition-colors duration-300 hover:bg-white hover:text-black sm:order-2 sm:w-62.5"
            >
              Let&apos;s Talk
              <ArrowUpRight className="h-5 w-5" />
            </Link>

            <span className="order-3 text-sm font-bold uppercase text-white/80 sm:text-base">
              Copyright {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}