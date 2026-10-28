import Reveal from "../components/Reveal";

export default function Privacy() {
  return (
    <div className="bg-ink pb-28 pt-40 md:pt-48">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <Reveal>
          <span className="label-overline text-xs text-silver-2">Legal</span>
          <h1 className="font-display mt-5 text-5xl font-medium tracking-wide text-white">PRIVACY POLICY</h1>
          <p className="mt-6 text-sm font-light leading-relaxed text-silver">
            This Privacy Policy is a placeholder for the preview experience of the TEKA Cars website. It
            explains, at a high level, how information submitted through this site would be handled.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 space-y-10 text-sm font-light leading-relaxed text-silver">
          <section>
            <h2 className="font-display text-xl tracking-wide text-white">Information We Collect</h2>
            <p className="mt-3">
              When you submit the Invitation Request or Contact forms, we may collect your full name, email
              address, country of residence, area of interest, and any message you choose to provide.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl tracking-wide text-white">How Information Is Used</h2>
            <p className="mt-3">
              Information submitted is intended to be used solely to evaluate invitation requests, respond
              to enquiries, and — where you have opted in — share brand updates. We do not sell personal
              information.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl tracking-wide text-white">Demo Mode Notice</h2>
            <p className="mt-3">
              This preview environment does not currently have a production backend connected. Form
              submissions made here are not permanently stored or transmitted to a live database.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl tracking-wide text-white">Your Choices</h2>
            <p className="mt-3">
              You may request access to, correction of, or deletion of your information at any time by
              contacting us through the Contact page once a live backend is configured.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl tracking-wide text-white">Contact</h2>
            <p className="mt-3">
              Questions about this policy can be directed to TEKA Cars via the Contact page.
            </p>
          </section>
        </Reveal>
      </div>
    </div>
  );
}
