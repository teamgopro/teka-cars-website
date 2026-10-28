import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";
import { ROUTES, useRouter } from "../router";

export default function TheCar() {
  const { navigate } = useRouter();
  const go = (to: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(to);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <PageHero
        eyebrow="TEKA ONE"
        title="A NEW SILHOUETTE."
        description="An original electric hypercar concept, engineered as an idea before it becomes a machine — low, wide, and unmistakably TEKA."
        image="/images/hero-front.jpg"
        imageAlt="TEKA ONE front three-quarter view in a dark studio"
      />

      {/* SILHOUETTE DETAIL */}
      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:items-center">
            <Reveal>
              <span className="label-overline text-xs text-silver-2">Proportions &amp; Stance</span>
              <h2 className="font-display mt-5 text-4xl font-medium tracking-wide text-white md:text-5xl">
                LOW. WIDE. INEVITABLE.
              </h2>
              <p className="mt-6 max-w-lg text-sm font-light leading-relaxed text-silver md:text-base">
                TEKA ONE carries an extremely low, wide supercar stance with a long, sculpted hood and a
                sleek aerodynamic silhouette. Its roofline borrows the futuristic character of electric
                roadsters, while its surfacing carries the drama of an exotic Italian supercar. Every line
                is drawn to communicate intent — this is a vehicle designed to look fast even when
                stationary.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <img
                src="/images/side-profile.jpg"
                alt="TEKA ONE side profile showing its low, wide electric-roadster silhouette"
                className="w-full object-cover"
                loading="lazy"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* FORM MEETS FUNCTION */}
      <section className="bg-graphite/20 py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="label-overline text-xs text-silver-2">Form Meets Function</span>
            <h2 className="font-display mt-5 text-4xl font-medium tracking-wide text-white md:text-5xl">
              EVERY SURFACE HAS A PURPOSE.
            </h2>
            <p className="mt-6 text-sm font-light leading-relaxed text-silver md:text-base">
              From the narrow LED headlight signature to the sculpted rear diffuser, nothing on TEKA ONE
              is purely decorative.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal className="group relative overflow-hidden">
              <img
                src="/images/front-detail.jpg"
                alt="Close-up of TEKA ONE's narrow LED headlight signature and front fascia"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="label-overline text-[11px] text-white">Front Fascia &amp; Lighting Signature</p>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="group relative overflow-hidden">
              <img
                src="/images/rear-three-quarter.jpg"
                alt="TEKA ONE rear three-quarter view showing the signature light bar and diffuser"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="label-overline text-[11px] text-white">Rear Light Bar &amp; Diffuser</p>
              </div>
            </Reveal>
            <Reveal delay={0.05} className="group relative overflow-hidden">
              <img
                src="/images/wheel-detail.jpg"
                alt="Close-up of TEKA ONE's performance wheel and carbon-ceramic brake"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="label-overline text-[11px] text-white">Performance Wheel &amp; Brake Assembly</p>
              </div>
            </Reveal>
            <Reveal delay={0.15} className="group relative overflow-hidden">
              <img
                src="/images/overhead-view.jpg"
                alt="Overhead view of TEKA ONE showing its aerodynamic shape"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="label-overline text-[11px] text-white">Aerodynamic Form, From Above</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* DESIGNED AROUND THE DRIVER */}
      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:items-center">
            <Reveal className="order-2 md:order-1">
              <img
                src="/images/interior-cockpit.jpg"
                alt="Minimalist black cockpit interior of TEKA ONE"
                className="w-full object-cover"
                loading="lazy"
              />
            </Reveal>
            <Reveal delay={0.1} className="order-1 md:order-2">
              <span className="label-overline text-xs text-silver-2">Designed Around the Driver</span>
              <h2 className="font-display mt-5 text-4xl font-medium tracking-wide text-white md:text-5xl">
                A COCKPIT, NOT A SHOWROOM.
              </h2>
              <p className="mt-6 max-w-lg text-sm font-light leading-relaxed text-silver md:text-base">
                Inside, TEKA ONE favours restraint over spectacle. A sculpted performance steering wheel, a
                clean digital driver display, and a wide but restrained central interface sit within a
                cabin finished in premium black materials with carbon-fibre accents. Ambient lighting is
                used sparingly — only where it serves the driver.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ENGINEERED WITH INTENT */}
      <section className="bg-graphite/20 py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="label-overline text-xs text-silver-2">Engineered With Intent</span>
            <h2 className="font-display mt-5 text-4xl font-medium tracking-wide text-white md:text-5xl">
              A VISION, NOT YET A VERDICT.
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
            {[
              {
                title: "Instant Electric Response",
                body: "A design ambition built around the immediacy of electric torque, paired with intelligent performance management.",
              },
              {
                title: "Exotic Powertrain Character",
                body: "A concept that explores the emotion of exotic, high-performance engineering alongside electric drive technology.",
              },
              {
                title: "Lightweight Construction",
                body: "Aerodynamics, cooling, and structure conceived together — not confirmed specifications, but a direction for development.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08} className="border-t border-line pt-6">
                <h3 className="font-display text-xl tracking-wide text-white">{item.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-silver">{item.body}</p>
              </Reveal>
            ))}
          </div>
          <p className="mx-auto mt-14 max-w-2xl text-center text-xs font-light leading-relaxed text-silver-2">
            TEKA Cars has not announced confirmed horsepower figures, acceleration times, top speed,
            battery capacity, range, or production timelines for TEKA ONE. No prototype has been built or
            tested. The descriptions above represent design ambition and concept direction only.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink py-28 md:py-32">
        <img
          src="/images/rear-three-quarter.jpg"
          alt="TEKA ONE rear three-quarter cinematic view"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-ink/60" />
        <Reveal className="relative z-10 mx-auto max-w-2xl px-6 text-center md:px-10">
          <span className="label-overline text-xs text-silver-2">Invite Only</span>
          <h2 className="font-display mt-5 text-4xl font-medium tracking-wide text-white md:text-5xl">
            EXPERIENCE TEKA ONE, BY INVITATION.
          </h2>
          <a
            href={ROUTES.invitation}
            onClick={go(ROUTES.invitation)}
            className="label-overline mt-9 inline-flex border border-white bg-white px-9 py-4 text-[11px] text-ink transition-colors duration-300 hover:bg-transparent hover:text-white"
          >
            Request an Invitation
          </a>
        </Reveal>
      </section>
    </div>
  );
}
