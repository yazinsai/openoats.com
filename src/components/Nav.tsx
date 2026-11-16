import { Icon } from "@iconify/react";
import Link from "next/link";
import { DMG_URL, REPO_URL } from "@/lib/site";
import { Logo } from "./Logo";

const LINKS = [
  ["How it works", "#how-it-works"],
  ["Reliability", "#reliability"],
  ["Privacy", "#privacy"],
  ["FAQ", "#faq"],
];

export function Nav() {
  return (
    <header className="sticky top-0 z-30 bg-paper/85 backdrop-blur-xl border-b border-line-soft">
      <div className="mx-auto max-w-[1200px] flex items-center justify-between px-5 sm:px-10 h-16">
        <Link href="/" className="flex items-center gap-2.5">
          <Logo size={26} variant="dark" />
          <span className="font-semibold tracking-tight text-ink text-[15px]">OpenOats</span>
        </Link>
        <nav className="flex items-center gap-1">
          {LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="hidden md:inline-block px-3 py-1.5 text-[13.5px] text-ink-2 hover:text-ink transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 text-[13.5px] text-ink-2 hover:text-ink transition-colors"
          >
            <Icon icon="simple-icons:github" className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href={DMG_URL}
            className="flex items-center gap-1.5 ml-1.5 px-3.5 py-2 text-[13px] font-medium rounded-full bg-ink text-paper hover:bg-moss-deep transition-colors"
          >
            <Icon icon="simple-icons:apple" className="w-3.5 h-3.5" />
            Download
          </a>
        </nav>
      </div>
    </header>
  );
}
