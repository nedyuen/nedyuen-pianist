import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/biography", label: "Biography" },
  { to: "/gallery", label: "Gallery" },
  { to: "/videos", label: "Performances" },
  { to: "/repertoire", label: "Repertoire" },
  { to: "/schedule", label: "Schedule" },
  { to: "/press", label: "Press" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const transparent = overlay && !scrolled;

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
        transparent
          ? "bg-transparent text-ivory border-b border-transparent"
          : "bg-background/85 backdrop-blur-md border-b border-border text-foreground",
      ].join(" ")}
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-3 group">
          <span className="font-serif text-2xl tracking-tight">Ned Yuen</span>
          <span className="hidden md:inline text-[10px] tracking-[0.35em] uppercase opacity-60">Pianist</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.slice(1).map((n) => {
            const active = pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={[
                  "text-[11px] tracking-[0.28em] uppercase transition-colors",
                  active ? "text-[color:var(--gold)]" : "hover:text-[color:var(--gold)]",
                ].join(" ")}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <button
          aria-label="Open menu"
          className="lg:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background text-foreground border-t border-border">
          <div className="px-6 py-8 flex flex-col gap-5">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm tracking-[0.2em] uppercase"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
