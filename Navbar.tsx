import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import { ROUTES, useRouter } from "../router";

const NAV_LINKS: { label: string; to: string }[] = [
  { label: "The Car", to: ROUTES.theCar },
  { label: "Design", to: ROUTES.design },
  { label: "Technology", to: ROUTES.technology },
  { label: "Our Vision", to: ROUTES.vision },
];

export default function Navbar() {
  const { path, navigate } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (to: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(to);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "bg-ink/90 backdrop-blur-md border-b border-line" : "bg-gradient-to-b from-black/70 via-black/20 to-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 md:px-10">
        <a href={ROUTES.home} onClick={go(ROUTES.home)} className="text-white" aria-label="TEKA Cars home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.to}
              href={link.to}
              onClick={go(link.to)}
              className={`label-overline text-[11px] transition-colors duration-300 hover:text-white ${
                path === link.to ? "text-white" : "text-silver-2"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={ROUTES.invitation}
            onClick={go(ROUTES.invitation)}
            className="label-overline border border-silver/40 px-5 py-2.5 text-[11px] text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-ink"
          >
            Invitation
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-px w-6 bg-white transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-white transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
          <span className={`h-px w-6 bg-white transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line bg-ink lg:hidden"
          >
            <nav className="flex flex-col px-6 py-6" aria-label="Mobile">
              {[...NAV_LINKS, { label: "Invitation Only", to: ROUTES.invitation }, { label: "Contact", to: ROUTES.contact }].map(
                (link) => (
                  <a
                    key={link.to}
                    href={link.to}
                    onClick={go(link.to)}
                    className="label-overline border-b border-line py-4 text-sm text-silver transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
