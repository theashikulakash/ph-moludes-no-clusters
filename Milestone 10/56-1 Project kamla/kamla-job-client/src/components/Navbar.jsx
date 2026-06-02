"use client";

import { useState } from "react";
import { Button, Link } from "@heroui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home",       href: "/" },
  { label: "Find Jobs",  href: "/jobs" },
  { label: "Companies",  href: "/companies" },
  { label: "Resources",  href: "/resources" },
  { label: "About",      href: "/about" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-default-200 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">

        {/* Logo */}
        <NextLink href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white font-bold text-sm">
            K
          </div>
          <span className="text-lg font-bold text-foreground">
            Kamla<span className="text-primary">Jobs</span>
          </span>
        </NextLink>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                as={NextLink}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-primary font-semibold"
                    : "text-default-600 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA buttons */}
        <div className="hidden md:flex items-center gap-2">
          <Button as={NextLink} href="/login" variant="light" size="sm">
            Sign In
          </Button>
          <Button as={NextLink} href="/register" color="primary" size="sm">
            Get Started
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded-md hover:bg-default-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-5 bg-foreground transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block h-0.5 w-5 bg-foreground transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-foreground transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 border-t border-default-200" : "max-h-0"}`}>
        <ul className="flex flex-col px-4 py-3 gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NextLink
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-primary bg-primary/10 font-semibold"
                    : "text-default-600 hover:bg-default-100 hover:text-foreground"
                }`}
              >
                {link.label}
              </NextLink>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-2 px-4 pb-4">
          <Button as={NextLink} href="/login" variant="bordered" fullWidth onClick={() => setIsOpen(false)}>
            Sign In
          </Button>
          <Button as={NextLink} href="/register" color="primary" fullWidth onClick={() => setIsOpen(false)}>
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;