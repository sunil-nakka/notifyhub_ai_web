import Link from "next/link";
import { FOOTER_NAV } from "@/lib/navigation";
import { SITE } from "@/lib/constants";
import { LogoMark, Wordmark } from "@/components/ui/logo";
import { Container } from "@/components/ui/primitives";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink-950 text-ink-300">
      <Container>
        <div className="grid gap-12 py-16 grid-cols-1 lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)] lg:gap-16">
          <div>
            <div className="flex items-center gap-2.5">
              <LogoMark tone="dark" />
              <Wordmark tone="dark" />
            </div>
            <p className="mt-4 max-w-[240px] text-[13.5px] leading-relaxed text-ink-400">
              {SITE.tagline}.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6"
          >
            {FOOTER_NAV.map((col) => (
              <div key={col.heading}>
                <h2 className="nh-eyebrow text-ink-500">{col.heading}</h2>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[13.5px] text-ink-300 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-[12.5px] text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} NotifyHub. All rights reserved.</p>
          <p>{SITE.legalName}</p>
        </div>
      </Container>
    </footer>
  );
}
