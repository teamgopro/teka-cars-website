import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import { ROUTES, useRouter } from "../router";

export default function Home() {
  const { navigate } = useRouter();

  const go = (to: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(to);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* HERO */}
      <section className="relative flex h-[100svh] min-h-[640px] w-full items-center overflow-hidden bg-ink">
        <img
          src="/images/hero-front.jpg"
          alt="TEKA ONE, an original electric hypercar concept, front three-quarter view in a dark studio"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/10 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <span className="label-overline text-xs text-silver">Teka Cars</span>
            <h1 className="font-display mt-5 text-6xl font-semibold leading-[0.92] tracking-wide text-white md:text-8xl">
              BUILT BEYOND
              <br />
              ORDINARY.
            </h1>
            <p className="mt-7 max-w-md text-base font-light leading-relaxed text-silver md:text-lg">
              A new expression of performance, design, and automotive ambition from TEKA Holdings.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={ROUTES.theCar}
                onClick={go(ROUTES.theCar)}
                className="label-overline border border-white bg-white px-8 py-4 text-[11px] text-ink transition-colors duration-300 hover:bg-transparent hover:text-white"
              >
                Discover TEKA ONE
              </a>
              <a
                href={ROUTES.invitation}
                onClick={go(ROUTES.invitation)}
                className="label-overline flex items-center gap-2 border border-silver/40 px-8 py-4 text-[11px] text-white transition-colors duration-300 hover:border-white"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                Invite Only
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-3 text-silver-2"
          aria-hidden="true"
        >
          <span className="label-overline text-[10px]">Scroll</span>
          <span className="relative block h-10 w-px overflow-hidden bg-white/20">
            <span className="absolute inset-x-0 top-0 h-3 w-px animate-[scrolldown_1.8s_ease-in-out_infinite] bg-white" />
          </span>
        </motion.div>
        <style>{`@keyframes scrolldown { 0% { transform: translateY(-100%);} 60% {transform: translateY(140%);} 100% {transform: translateY(140%);} }`}</style>
      </section>

      {/* INTRO STATEMENT */}
      <section className="bg-ink py-28 md:py-36">
        <div className="mx-auto max-w-[1100px] px-6 text-center md:px-10">
          <Reveal>
            <span className="label-overline text-xs text-silver-2">Not Made For Everyone</span>
            <p className="font-display mt-6 text-3xl font-light leading-snug tracking-wide text-white md:text-5xl text-balance">
              TEKA Cars exists to explore what a supercar can become when futuristic electric
              performance meets exotic mechanical emotion.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SILHOUETTE */}
      <section className="relative overflow-hidden bg-ink">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Reveal className="relative order-2 h-[60vh] min-h-[420px] md:order-1 md:h-auto">
            <img
              src="/images/side-profile.jpg"
              alt="Side profile of TEKA ONE showing its low, wide electric-roadster silhouette"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </Reveal>
          <div className="order-1 flex items-center bg-graphite/30 px-6 py-20 md:order-2 md:px-16 md:py-0">
            <Reveal>
              <span className="label-overline text-xs text-silver-2">01 / A New Silhouette</span>
              <h2 className="font-display mt-5 text-4xl font-medium tracking-wide text-white md:text-5xl">
                THE FUTURE HAS
                <br /> A NEW SHAPE.
              </h2>
              <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-silver md:text-base">
                An extremely low, wide stance. A long sculpted hood. A roofline drawn from the language of
                electric roadsters, married to the drama of an exotic supercar. TEKA ONE is designed to
                look fast standing still.
              </p>
              <a
                href={ROUTES.theCar}
                onClick={go(ROUTES.theCar)}
                className="label-overline mt-8 inline-flex items-center gap-3 text-[11px] text-white underline decoration-silver/40 underline-offset-8 transition-colors hover:decoration-white"
              >
                Explore the Concept
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* DRIVING SCENE / POWER */}
      <section className="relative flex h-[85vh] min-h-[560px] w-full items-center overflow-hidden bg-ink">
        <img
          src="/images/mountain-road.jpg"
          alt="TEKA ONE driving on an empty dramatic mountain road at dusk"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10" />
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 md:px-10">
          <Reveal>
            <span className="label-overline text-xs text-silver-2">02 / Power Without Compromise</span>
            <h2 className="font-display mt-5 max-w-xl text-4xl font-medium leading-tight tracking-wide text-white md:text-6xl">
              INSTANT TORQUE.
              <br /> EXOTIC CHARACTER.
            </h2>
            <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-silver md:text-base">
              TEKA ONE explores the ambitious fusion of electric responsiveness and the mechanical emotion
              of exotic performance engineering. This is a concept vision — not a confirmed production
              specification.
            </p>
            <a
              href={ROUTES.technology}
              onClick={go(ROUTES.technology)}
              className="label-overline mt-8 inline-flex items-center gap-3 text-[11px] text-white underline decoration-silver/40 underline-offset-8 transition-colors hover:decoration-white"
            >
              See the Technology Vision
            </a>
          </Reveal>
        </div>
      </section>

      {/* COCKPIT */}
      <section className="relative overflow-hidden bg-ink">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex items-center bg-graphite/30 px-6 py-20 md:px-16 md:py-0">
            <Reveal>
              <span className="label-overline text-xs text-silver-2">03 / Designed Around the Driver</span>
              <h2 className="font-display mt-5 text-4xl font-medium tracking-wide text-white md:text-5xl">
                A COCKPIT BUILT
                <br /> FOR ONE PURPOSE.
              </h2>
              <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-silver md:text-base">
                A minimalist, driver-focused cabin — premium materials, carbon-fibre accents, and a clean
                digital interface, free of unnecessary clutter.
              </p>
              <a
                href={ROUTES.design}
                onClick={go(ROUTES.design)}
                className="label-overline mt-8 inline-flex items-center gap-3 text-[11px] text-white underline decoration-silver/40 underline-offset-8 transition-colors hover:decoration-white"
              >
                View the Design Gallery
              </a>
            </Reveal>
          </div>
          <Reveal className="relative h-[60vh] min-h-[420px] md:h-auto">
            <img
              src="/images/interior-cockpit.jpg"
              alt="Minimalist black cockpit interior of TEKA ONE with a sculpted steering wheel"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      {/* INVITATION BANNER */}
      <section className="relative overflow-hidden bg-ink py-28 md:py-36">
        <img
          src="/images/night-scene.jpg"
          alt="TEKA ONE illuminated at night by architectural lighting"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-ink/70" />
        <Reveal className="relative z-10 mx-auto max-w-3xl px-6 text-center md:px-10">
          <span className="label-overline text-xs text-silver-2">An Invitation to the Extraordinary</span>
          <h2 className="font-display mt-6 text-4xl font-medium tracking-wide text-white md:text-6xl">
            INVITE ONLY.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-sm font-light leading-relaxed text-silver md:text-base">
            TEKA ONE is not available for public purchase. Ownership access is extended exclusively by
            invitation to those who share our vision.
          </p>
          <a
            href={ROUTES.invitation}
            onClick={go(ROUTES.invitation)}
            className="label-overline mt-10 inline-flex border border-white bg-white px-9 py-4 text-[11px] text-ink transition-colors duration-300 hover:bg-transparent hover:text-white"
          >
            Request an Invitation
          </a>
        </Reveal>
      </section>
    </div>
  );
}
