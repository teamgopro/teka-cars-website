import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";
import { ROUTES, useRouter } from "../router";

const PILLARS = [
  {
    index: "01",
    title: "Performance Philosophy",
    body: "TEKA ONE is guided by a single ambition: to combine the immediacy of electric responsiveness with the character and drama of exotic performance engineering. We are exploring how instant torque and intelligent performance management can be shaped into an emotional driving experience — not just an efficient one.",
    image: "/images/mountain-road.jpg",
    alt: "TEKA ONE driving on a dramatic mountain road",
    note: "Conceptual direction. No performance figures have been confirmed.",
  },
  {
    index: "02",
    title: "Aerodynamic Intelligence",
    body: "Every sculpted surface, side channel, and diffuser element on TEKA ONE is designed with airflow in mind. The concept explores active-aerodynamic elements, intentional cooling pathways, and a silhouette engineered to manage downforce and stability at speed.",
    image: "/images/overhead-view.jpg",
    alt: "Overhead view of TEKA ONE showing its aerodynamic shape",
    note: "Design intention only. Aerodynamic performance has not been wind-tunnel verified.",
  },
  {
    index: "03",
    title: "Driver-Centric Technology",
    body: "Inside, the vision is a clean digital cockpit: a crisp driver display, a restrained central interface, and intelligent vehicle systems that recede into the background until needed. Technology should serve the driver, not distract from the drive.",
    image: "/images/interior-cockpit.jpg",
    alt: "TEKA ONE minimalist cockpit interior",
    note: "Conceptual interface. Final software and hardware are undetermined.",
  },
  {
    index: "04",
    title: "Materials & Craft",
    body: "The design vision calls for lightweight materials, carbon-fibre-inspired structural elements, and precision manufacturing throughout the cabin and body. Every material choice is intended to balance weight, strength, and a tactile sense of quality.",
    image: "/images/wheel-detail.jpg",
    alt: "Close-up of TEKA ONE wheel and brake assembly",
    note: "Material direction only. Production specifications are not yet established.",
  },
];

export default function Technology() {
  const { navigate } = useRouter();
  const go = (to: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(to);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <PageHero
        eyebrow="Technology Vision"
        title="ENGINEERED AS AN IDEA."
        description="An editorial look at the technology ambitions behind TEKA ONE — conceptual, evolving, and clearly labeled as such."
        image="/images/night-scene.jpg"
        imageAlt="TEKA ONE illuminated at night by architectural lighting"
      />

      <section className="bg-ink py-10 md:py-16">
        <Reveal className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <p className="text-sm font-light leading-relaxed text-silver-2">
            The technology described on this page reflects TEKA Cars' design and engineering ambition for
            TEKA ONE. It is conceptual in nature. We do not present it as a confirmed production
            specification, certification, or safety claim.
          </p>
        </Reveal>
      </section>

      {PILLARS.map((pillar, i) => (
        <section key={pillar.title} className={i % 2 === 0 ? "bg-ink" : "bg-graphite/20"}>
          <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-24">
            <div className={`grid grid-cols-1 gap-14 md:grid-cols-2 md:items-center`}>
              <Reveal className={i % 2 === 1 ? "md:order-2" : ""}>
                <img
                  src={pillar.image}
                  alt={pillar.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </Reveal>
              <Reveal delay={0.1} className={i % 2 === 1 ? "md:order-1" : ""}>
                <span className="label-overline text-xs text-silver-2">{pillar.index} / {pillar.title}</span>
                <h2 className="font-display mt-5 text-3xl font-medium uppercase tracking-wide text-white md:text-4xl">
                  {pillar.title}
                </h2>
                <p className="mt-6 max-w-lg text-sm font-light leading-relaxed text-silver md:text-base">
                  {pillar.body}
                </p>
                <p className="mt-6 label-overline text-[10px] text-silver-2">Concept · {pillar.note}</p>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-ink py-24 text-center md:py-32">
        <Reveal className="mx-auto max-w-2xl px-6 md:px-10">
          <span className="label-overline text-xs text-silver-2">Invite Only</span>
          <h2 className="font-display mt-5 text-4xl font-medium tracking-wide text-white md:text-5xl">
            FOLLOW THE VISION FORWARD.
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
