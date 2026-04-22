import { Icon } from "@iconify/react";
import Link from "next/link";

export function Nav() {
  return (
    <header className="relative z-20 flex items-center justify-between px-6 sm:px-10 py-6">
      <Link href="/" className="flex items-center gap-2.5 group">
        <Logo />
        <span className="font-display text-[18px] tracking-tight text-oat-cream">
          OpenOats
        </span>
      </Link>
      <nav className="flex items-center gap-1 sm:gap-2">
        <a
          href="#how-it-works"
          className="hidden sm:inline-block px-3 py-2 text-[13px] text-oat-cream-dim hover:text-oat-cream transition-colors"
        >
          How it works
        </a>
        <a
          href="#privacy"
          className="hidden sm:inline-block px-3 py-2 text-[13px] text-oat-cream-dim hover:text-oat-cream transition-colors"
        >
          Privacy
        </a>
        <a
          href="https://github.com/yazinsai/OpenOats"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-2 text-[13px] text-oat-cream-dim hover:text-oat-cream transition-colors"
        >
          <Icon icon="simple-icons:github" className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">GitHub</span>
        </a>
        <a
          href="https://github.com/yazinsai/OpenOats/releases/latest"
          className="flex items-center gap-1.5 ml-1 px-3.5 py-2 text-[13px] font-medium rounded-full bg-oat-cream text-oat-ink hover:bg-oat-amber-bright transition-colors"
        >
          <Icon icon="simple-icons:apple" className="w-3.5 h-3.5" />
          Download
        </a>
      </nav>
    </header>
  );
}

function Logo() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="text-oat-amber"
    >
      {/* Oat-grain inspired mark: two stacked seeds */}
      <ellipse cx="13" cy="7" rx="4.5" ry="5.5" stroke="currentColor" strokeWidth="1.4" />
      <ellipse cx="13" cy="18" rx="4.5" ry="5.5" stroke="currentColor" strokeWidth="1.4" opacity="0.7" />
      <line x1="13" y1="0.5" x2="13" y2="25.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
