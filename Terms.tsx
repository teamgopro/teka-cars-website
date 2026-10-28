import Reveal from "../components/Reveal";

export default function Terms() {
  return (
    <div className="bg-ink pb-28 pt-40 md:pt-48">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <Reveal>
          <span className="label-overline text-xs text-silver-2">Legal</span>
          <h1 className="font-display mt-5 text-5xl font-medium tracking-wide text-white">TERMS OF USE</h1>
          <p className="mt-6 text-sm font-light leading-relaxed text-silver">
            These Terms of Use govern your access to this preview of the TEKA Cars website.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 space-y-10 text-sm font-light leading-relaxed text-silver">
          <section>
            <h2 className="font-display text-xl tracking-wide text-white">Concept Content</h2>
            <p className="mt-3">
              TEKA ONE is a design and engineering concept. References to performance, technology, or
              materials describe design ambition and direction, not confirmed, tested, or certified
              production specifications.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl tracking-wide text-white">No Offer for Sale</h2>
            <p className="mt-3">
              Nothing on this website constitutes an offer to sell, a price quotation, or a solicitation to
              purchase any vehicle. Access to TEKA ONE, where available, is extended solely by invitation at
              TEKA Cars' discretion.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl tracking-wide text-white">Intellectual Property</h2>
            <p className="mt-3">
              The TEKA CARS name, TEKA ONE concept, wordmark, and associated imagery are original works
              created for this brand concept and may not be reproduced without permission.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl tracking-wide text-white">Changes</h2>
            <p className="mt-3">
              TEKA Cars may update these Terms of Use at any time as the brand and its offerings evolve.
            </p>
          </section>
        </Reveal>
      </div>
    </div>
  );
}
