import { Icon } from "@iconify/react";

export function Footer() {
  return (
    <footer className="relative px-6 sm:px-10 py-10 border-t border-oat-line">
      <div className="mx-auto max-w-[1200px] flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start gap-1.5">
          <span className="font-display text-[22px] tracking-tight text-oat-cream">
            OpenOats
          </span>
          <span className="text-[11.5px] text-oat-cream-dimmer font-mono">
            MIT · built by{" "}
            <a
              href="https://github.com/yazinsai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-oat-cream-dim hover:text-oat-amber transition-colors"
            >
              @yazinsai
            </a>
          </span>
        </div>

        <nav className="flex items-center gap-5 text-[12.5px] text-oat-cream-dim">
          <a
            href="https://github.com/yazinsai/OpenOats"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-oat-cream transition-colors"
          >
            <Icon icon="simple-icons:github" className="w-3.5 h-3.5" />
            GitHub
          </a>
          <a
            href="https://github.com/yazinsai/OpenOats/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-oat-cream transition-colors"
          >
            Releases
          </a>
          <a
            href="https://github.com/yazinsai/OpenOats/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-oat-cream transition-colors"
          >
            Issues
          </a>
        </nav>
      </div>
    </footer>
  );
}
