import Logo from "./Logo";
import { ROUTES, useRouter } from "../router";

const COLUMNS: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "The Car", to: ROUTES.theCar },
      { label: "Design", to: ROUTES.design },
      { label: "Technology", to: ROUTES.technology },
      { label: "Our Vision", to: ROUTES.vision },
    ],
  },
  {
    title: "Access",
    links: [
      { label: "Invitation Only", to: ROUTES.invitation },
      { label: "Contact", to: ROUTES.contact },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", to: ROUTES.privacy },
      { label: "Terms of Use", to: ROUTES.terms },
    ],
  },
];

// Configure social links here. Leave href as "#" until official accounts exist.
const SOCIAL_LINKS: { label: string; href: string }[] = [
  { label: "Instagram", href: "#" },
  { label: "X", href: "#" },
  { label: "YouTube", href: "#" },
];

export default function Footer() {
  const { navigate } = useRouter();

  const go = (to: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(to);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href={ROUTES.home} onClick={go(ROUTES.home)} className="text-white">
              <Logo />
            </a>
            <p className="mt-5 max-w-xs text-sm font-light leading-relaxed text-silver-2">
              A TEKA HOLDINGS automotive concept. Exploring the future of exclusive, high-performance
              electric supercars.
            </p>
            <div className="mt-6 flex gap-5">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="label-overline text-[10px] text-silver-2 transition-colors hover:text-white"
                  aria-label={`TEKA Cars on ${s.label}`}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="label-overline text-[11px] text-silver-2">{col.title}</h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <a
                      href={link.to}
                      onClick={go(link.to)}
                      className="text-sm font-light text-silver transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 text-xs font-light text-silver-2 md:flex-row md:items-center">
          <p>© 2026 TEKA CARS. All rights reserved.</p>
          <p>TEKA ONE is a concept presented through an invitation-only experience. No vehicles are currently available for public purchase.</p>
        </div>
      </div>
    </footer>
  );
}
