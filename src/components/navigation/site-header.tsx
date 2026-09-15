"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { PRIMARY_NAV, type NavGroup, type NavLink } from "@/lib/navigation";
import { PRODUCT_ICONS, IconChevron, IconArrow } from "@/components/ui/icons";
import { Logo } from "@/components/ui/logo";
import {
  ButtonLink,
  Container,
  StatusPill,
  cx,
} from "@/components/ui/primitives";
import { useScrolled } from "@/components/ui/reveal";

export function SiteHeader() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const scrolled = useScrolled(6);
  const navRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuId = useId();

  const close = useCallback(() => setOpenIndex(null), []);

  // Close every menu when the route changes, adjusting state during render
  // rather than in an effect.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpenIndex(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [close]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(close, 120);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  return (
    <header
      className={cx(
        "sticky top-0 z-50 border-b bg-white/85 backdrop-blur-md transition-[border-color,box-shadow] duration-200",
        scrolled
          ? "border-ink-200 shadow-[0_1px_3px_rgba(10,14,20,0.05)]"
          : "border-transparent",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-10 focus:rounded focus:bg-ink-950 focus:px-3 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <Container>
        <div className="flex h-16 items-center justify-between gap-6">
          <Logo />

          {/* Desktop navigation */}
          <div
            ref={navRef}
            className="hidden lg:flex lg:items-center lg:gap-0.5"
            onMouseLeave={scheduleClose}
            onMouseEnter={cancelClose}
          >
            {PRIMARY_NAV.map((group, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={group.label} className="relative">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`${menuId}-${i}`}
                    onMouseEnter={() => {
                      cancelClose();
                      setOpenIndex(i);
                    }}
                    onFocus={() => setOpenIndex(i)}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className={cx(
                      "flex items-center gap-1 rounded-md px-3 py-2 text-[14px] font-medium transition-colors",
                      isOpen ? "text-ink-950" : "text-ink-600 hover:text-ink-950",
                    )}
                  >
                    {group.label}
                    <IconChevron
                      className={cx(
                        "h-3.5 w-3.5 text-ink-400 transition-transform duration-200",
                        isOpen && "rotate-180",
                      )}
                    />
                  </button>
                </div>
              );
            })}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <ButtonLink href="/signin" variant="ghost" size="md">
              Sign in
            </ButtonLink>
            <ButtonLink href="/contact" variant="primary" size="md">
              Talk to us
            </ButtonLink>
          </div>

          {/* Mobile trigger */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation"
            aria-expanded={mobileOpen}
            className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-md text-ink-700 lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </Container>

      {/* Mega menu */}
      {PRIMARY_NAV.map((group, i) => (
        <MegaMenu
          key={group.label}
          id={`${menuId}-${i}`}
          group={group}
          open={openIndex === i}
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        />
      ))}

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

/* ---------- Mega menu -------------------------------------------------- */

function MegaMenu({
  id,
  group,
  open,
  onMouseEnter,
  onMouseLeave,
}: {
  id: string;
  group: NavGroup;
  open: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const wide = Boolean(group.feature);
  return (
    <div
      id={id}
      hidden={!open}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute inset-x-0 top-full border-b border-ink-200 bg-white shadow-[0_18px_40px_-24px_rgba(10,14,20,0.3)]"
    >
      <Container>
        <div
          className={cx(
            "grid gap-8 py-7",
            wide ? "grid-cols-[minmax(0,1fr)_300px]" : "grid-cols-1",
          )}
        >
          <div
            className={cx(
              "grid gap-x-8 gap-y-6",
              group.columns.length > 1 ? "grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]" : "grid-cols-1",
            )}
          >
            {group.columns.map((col) => (
              <div key={col.heading ?? "col"}>
                {col.heading ? (
                  <p className="nh-eyebrow mb-3 text-ink-400">{col.heading}</p>
                ) : null}
                <ul
                  className={cx(
                    "grid gap-1",
                    col.links.length > 3 && col.links.some((l) => l.description)
                      ? "sm:grid-cols-2"
                      : "grid-cols-1",
                  )}
                >
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <MegaLink link={link} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {group.feature ? (
            <Link
              href={group.feature.href}
              className="group flex flex-col justify-between rounded-lg border border-ink-200 bg-ink-50/70 p-5 transition-colors hover:border-ink-300 hover:bg-ink-50"
            >
              <div>
                <p className="nh-eyebrow text-cobalt-600">{group.feature.eyebrow}</p>
                <p className="mt-3 text-[15px] leading-snug font-semibold text-ink-950">
                  {group.feature.title}
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-600">
                  {group.feature.body}
                </p>
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-cobalt-600">
                {group.feature.cta}
                <IconArrow className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ) : null}
        </div>
      </Container>
    </div>
  );
}

function MegaLink({ link }: { link: NavLink }) {
  const Icon = link.icon
    ? PRODUCT_ICONS[link.icon as keyof typeof PRODUCT_ICONS]
    : null;

  return (
    <Link
      href={link.href}
      className="group flex gap-3 rounded-md p-2.5 transition-colors hover:bg-ink-50"
    >
      {Icon ? (
        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-ink-200 bg-white text-ink-600 transition-colors group-hover:border-cobalt-200 group-hover:text-cobalt-600">
          <Icon className="h-4 w-4" />
        </span>
      ) : null}
      <span className="min-w-0">
        <span className="flex flex-wrap items-center gap-2">
          <span className="text-[14px] font-medium text-ink-900">{link.label}</span>
          {link.status ? (
            <StatusPill status={link.status} label={link.statusLabel} className="scale-[0.92]" />
          ) : null}
        </span>
        {link.description ? (
          <span className="mt-1 block text-[12.5px] leading-relaxed text-ink-500">
            {link.description}
          </span>
        ) : null}
      </span>
    </Link>
  );
}

/* ---------- Mobile ----------------------------------------------------- */

function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>("Products");

  return (
    <div
      hidden={!open}
      className="fixed inset-0 z-50 bg-white lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation"
    >
      <div className="flex h-16 items-center justify-between border-b border-ink-200 px-5">
        <Logo />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close navigation"
          className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-md text-ink-700"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
            <path
              d="m6 6 12 12M18 6 6 18"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <nav className="h-[calc(100dvh-4rem-5.5rem)] overflow-y-auto overscroll-contain px-5 py-4">
        {PRIMARY_NAV.map((group) => {
          const isOpen = expanded === group.label;
          return (
            <div key={group.label} className="border-b border-ink-100 last:border-0">
              <button
                type="button"
                onClick={() => setExpanded(isOpen ? null : group.label)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between py-4 text-left"
              >
                <span className="text-[16px] font-semibold text-ink-950">
                  {group.label}
                </span>
                <IconChevron
                  className={cx(
                    "h-4 w-4 text-ink-400 transition-transform duration-200",
                    isOpen && "rotate-180",
                  )}
                />
              </button>

              <div
                className={cx(
                  "grid transition-[grid-template-rows] duration-250 ease-out motion-reduce:transition-none",
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  <ul className="space-y-0.5 pb-3">
                    {group.columns.flatMap((c) => c.links).map((link) => {
                      const Icon = link.icon
                        ? PRODUCT_ICONS[link.icon as keyof typeof PRODUCT_ICONS]
                        : null;
                      return (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            onClick={onClose}
                            className="flex items-start gap-3 rounded-md px-1 py-2.5"
                          >
                            {Icon ? (
                              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-ink-200 text-ink-600">
                                <Icon className="h-4 w-4" />
                              </span>
                            ) : null}
                            <span className="min-w-0">
                              <span className="flex flex-wrap items-center gap-2">
                                <span className="text-[14.5px] font-medium text-ink-900">
                                  {link.label}
                                </span>
                                {link.status ? (
                                  <StatusPill
                                    status={link.status}
                                    label={link.statusLabel}
                                    className="scale-[0.9]"
                                  />
                                ) : null}
                              </span>
                              {link.description ? (
                                <span className="mt-0.5 block text-[12.5px] leading-relaxed text-ink-500">
                                  {link.description}
                                </span>
                              ) : null}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </nav>

      <div className="absolute inset-x-0 bottom-0 grid grid-cols-2 gap-2 border-t border-ink-200 bg-white px-5 py-4">
        <ButtonLink href="/signin" variant="secondary" size="lg">
          Sign in
        </ButtonLink>
        <ButtonLink href="/contact" variant="primary" size="lg">
          Talk to us
        </ButtonLink>
      </div>
    </div>
  );
}
