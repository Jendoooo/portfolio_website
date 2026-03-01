"use client";

import { useEffect, useMemo, useState } from "react";

const links = [
  { id: "hero", label: "Home", href: "#hero" },
  { id: "about", label: "About", href: "#about" },
  { id: "journey", label: "Journey", href: "#journey" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "freelance", label: "Freelance", href: "#freelance" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "education", label: "Education", href: "#education" },
  { id: "research", label: "Research", href: "#research" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { threshold: 0.5 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const activeLabel = useMemo(
    () => links.find((link) => link.id === active)?.label ?? "Home",
    [active],
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur shadow-sm" : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <a
          href="#hero"
          className="text-[#1F3864] font-bold text-xl tracking-tight hover:text-[#0D9488] transition-colors"
        >
          OA
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`nav-link text-sm font-medium transition-colors ${isActive
                    ? "text-[#0D9488] nav-link-active"
                    : "text-gray-700 hover:text-[#1F3864]"
                  }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="mailto:olajideayeola@gmail.com"
            className="ml-2 px-4 py-2 bg-[#1F3864] text-white text-sm font-medium rounded-lg hover:bg-[#0D9488] transition-colors"
          >
            Get in touch
          </a>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <p className="text-xs text-[#0D9488] font-semibold uppercase tracking-wider">
            {activeLabel}
          </p>
          <button
            className="p-2 text-[#1F3864]"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium transition-colors ${isActive ? "text-[#0D9488]" : "text-gray-700 hover:text-[#1F3864]"
                  }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="mailto:olajideayeola@gmail.com"
            className="px-4 py-2 bg-[#1F3864] text-white text-sm font-medium rounded-lg text-center"
          >
            Get in touch
          </a>
        </div>
      )}
    </nav>
  );
}
