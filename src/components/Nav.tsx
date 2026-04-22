import { Icon } from "@iconify/react";
import Link from "next/link";
import { Logo } from "./Logo";

export function Nav() {
  return (
    <header className="sticky top-0 z-30 bg-ink/80 backdrop-blur-xl border-b border-line">
      <div className="mx-auto max-w-[1280px] flex items-center justify-between px-6 sm:px-10 h-16">
        <Link href="/" className="flex items-center gap-2.5">
          <Logo size={26} />
          <span className="font-semibold tracking-tight text-snow text-[15px]">
            OpenOats
          </span>
        </Link>
        <nav className="flex items-center gap-1">
          <a
            href="#how-it-works"
            className="hidden sm:inline-block px-3 py-1.5 text-[13px] text-snow-muted hover:text-snow transition-colors"
          >
            How it works
          </a>
          <a
            href="#privacy"
            className="hidden sm:inline-block px-3 py-1.5 text-[13px] text-snow-muted hover:text-snow transition-colors"
          >
            Privacy
          </a>
          <a
            href="https://github.com/yazinsai/OpenOats"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 text-[13px] text-snow-muted hover:text-snow transition-colors"
          >
            <Icon icon="simple-icons:github" className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href="https://github.com/yazinsai/OpenOats/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 ml-2 px-3.5 py-2 text-[13px] font-medium rounded-md bg-snow text-ink hover:bg-snow-dim transition-colors"
          >
            <Icon icon="simple-icons:apple" className="w-3.5 h-3.5" />
            Download
          </a>
        </nav>
      </div>
    </header>
  );
}
