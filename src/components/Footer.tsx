import { Icon } from "@iconify/react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative px-6 sm:px-10 py-10 border-t border-line">
      <div className="mx-auto max-w-[1280px] flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start gap-2">
          <div className="flex items-center gap-2">
            <Logo size={20} />
            <span className="font-semibold tracking-tight text-snow text-[14px]">
              OpenOats
            </span>
          </div>
          <span className="text-[11.5px] text-snow-faint font-mono">
            MIT · built by{" "}
            <a
              href="https://github.com/yazinsai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-snow-muted hover:text-snow transition-colors"
            >
              @yazinsai
            </a>
          </span>
        </div>

        <nav className="flex items-center gap-5 text-[12.5px] text-snow-muted">
          <a
            href="https://github.com/yazinsai/OpenOats"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-snow transition-colors"
          >
            <Icon icon="simple-icons:github" className="w-3.5 h-3.5" />
            GitHub
          </a>
          <a
            href="https://github.com/yazinsai/OpenOats/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-snow transition-colors"
          >
            Releases
          </a>
          <a
            href="https://github.com/yazinsai/OpenOats/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-snow transition-colors"
          >
            Issues
          </a>
        </nav>
      </div>
    </footer>
  );
}
