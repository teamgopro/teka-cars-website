import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";
import { ROUTES, useRouter } from "../router";

export default function OurVision() {
  const { navigate } = useRouter();
  const go = (to: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(to);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <PageHero
        eyebrow="Our Vision"
        title="AN IDEA, BEFORE IT IS A MACHINE."
        description="TEKA Cars is a division of TEKA Holdings, built around a singular belief in the future of exclusive performance."
        image="/images/side-profile.jpg"
        imageAlt="TEKA ONE side profile in a dark studio"
      />

      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <Reveal>
            <span className="label-overline text-xs text-silver-2">The Belief</span>
            <p className="font-display mt-6 text-3xl font-light leading-snug tracking-wide text-white md:text-4xl text-balance">
              TEKA Cars was conceived around a simple belief: the future of performance should be
              unmistakable.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-10 space-y-6 text-sm font-light leading-relaxed text-silver md:text-base">
            <p>
              We envision a new generation of automobiles where precision, design, technology, and emotion
              come together in a singular expression. TEKA Cars sits within TEKA Holdings as an exploration
              of what an exclusive automotive marque can become when it is unburdened by convention.
            </p>
            <p>
              Our ambition is not to build for everyone. It is to create something exceptional for those
              invited to experience it. Every decision — from the shape of a headlight to the texture of a
              seat — is made in service of that exclusivity.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-graphite/20 py-24 md:py-32">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-16 px-6 md:grid-cols-2 md:items-center md:px-10">
          <Reveal>
            <img
              src="/images/hero-front.jpg"
              alt="TEKA ONE front three-quarter view, representing the brand's long-term ambition"
              className="w-full object-cover"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="label-overline text-xs text-silver-2">TEKA ONE &amp; What Comes Next</span>
            <h2 className="font-display mt-5 text-4xl font-medium tracking-wide text-white md:text-5xl">
              A FIRST EXPRESSION.
            </h2>
            <p className="mt-6 max-w-lg text-sm font-light leading-relaxed text-silver md:text-base">
              TEKA ONE is the first expression of this vision — a concept that imagines a supercar at the
              intersection of futuristic electric design and exotic mechanical emotion. It represents a
              direction, not a finished chapter.
            </p>
            <p className="mt-4 max-w-lg text-sm font-light leading-relaxed text-silver md:text-base">
              As TEKA Cars continues to develop this vision, access to updates, early concepts, and private
              introductions will remain limited to those who have requested an invitation.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="label-overline text-xs text-silver-2">Why TEKA Holdings</span>
            <h2 className="font-display mt-5 text-3xl font-medium tracking-wide text-white md:text-4xl">
              A DIVISION BUILT ON AMBITION, NOT LEGACY.
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
            {[
              {
                title: "Exclusive by Design",
                body: "TEKA Cars is deliberately not building for a mass market. Every aspect of the brand is shaped around a smaller, invited circle.",
              },
              {
                title: "Design-Led Thinking",
                body: "The vehicle concept begins with form and emotion, then works backward toward the technology required to support it.",
              },
              {
                title: "Long-Term Ambition",
                body: "TEKA ONE is presented as an evolving concept. TEKA Cars is transparent about what is confirmed and what remains aspirational.",
              },
            ].map((item) => (
              <Reveal key={item.title} className="border-t border-line pt-6">
                <h3 className="font-display text-xl tracking-wide text-white">{item.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-silver">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink pb-28 pt-4 text-center md:pb-36">
        <Reveal className="mx-auto max-w-2xl px-6 md:px-10">
          <span className="label-overline text-xs text-silver-2">Invite Only</span>
          <h2 className="font-display mt-5 text-4xl font-medium tracking-wide text-white md:text-5xl">
            JOIN THE CIRCLE OF INVITATION.
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
