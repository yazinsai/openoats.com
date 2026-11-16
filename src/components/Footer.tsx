import { Icon } from "@iconify/react";
import { RELEASES_URL, REPO_URL } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative px-5 sm:px-10 py-10 border-t border-line-soft">
      <div className="mx-auto max-w-[1200px] flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start gap-2">
          <div className="flex items-center gap-2">
            <Logo size={20} variant="dark" />
            <span className="font-semibold tracking-tight text-ink text-[14px]">OpenOats</span>
          </div>
          <span className="text-[12px] text-ink-3 font-mono">
            MIT · built by{" "}
            <a
              href="https://github.com/yazinsai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-2 hover:text-ink transition-colors"
            >
              @yazinsai
            </a>
          </span>
        </div>

        <nav className="flex items-center gap-5 text-[13px] text-ink-2">
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-ink transition-colors"
          >
            <Icon icon="simple-icons:github" className="w-3.5 h-3.5" />
            GitHub
          </a>
          <a href={RELEASES_URL} target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">
            Releases
          </a>
          <a
            href={`${REPO_URL}/issues`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink transition-colors"
          >
            Issues
          </a>
        </nav>
      </div>
    </footer>
  );
}
