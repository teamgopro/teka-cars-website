import Reveal from "../components/Reveal";
import ContactForm from "../components/ContactForm";

// Configure brand contact details here once finalized by TEKA Holdings.
const CONTACT_INFO = {
  generalEmail: "contact@tekacars.example",
  pressEmail: "press@tekacars.example",
  parent: "TEKA Holdings",
};

export default function Contact() {
  return (
    <div>
      <section className="bg-ink pb-4 pt-40 md:pt-48">
        <Reveal className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <span className="label-overline text-xs text-silver-2">Contact</span>
          <h1 className="font-display mt-5 text-5xl font-medium tracking-wide text-white md:text-6xl">
            LET&apos;S CONNECT.
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-sm font-light leading-relaxed text-silver md:text-base">
            For general enquiries, media requests, or partnership interest, reach out below. For ownership
            access, please visit our Invitation page.
          </p>
        </Reveal>
      </section>

      <section className="bg-ink py-16 md:py-24">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <span className="label-overline text-xs text-silver-2">Company Information</span>
              <h2 className="font-display mt-5 text-3xl font-medium tracking-wide text-white md:text-4xl">
                TEKA CARS
              </h2>
              <p className="mt-2 text-sm font-light text-silver-2">A {CONTACT_INFO.parent} automotive concept.</p>

              <dl className="mt-10 space-y-6 text-sm font-light text-silver">
                <div className="border-t border-line pt-5">
                  <dt className="label-overline text-[10px] text-silver-2">General Enquiries</dt>
                  <dd className="mt-2">{CONTACT_INFO.generalEmail}</dd>
                </div>
                <div className="border-t border-line pt-5">
                  <dt className="label-overline text-[10px] text-silver-2">Media &amp; Press</dt>
                  <dd className="mt-2">{CONTACT_INFO.pressEmail}</dd>
                </div>
                <div className="border-t border-line pt-5">
                  <dt className="label-overline text-[10px] text-silver-2">Parent Company</dt>
                  <dd className="mt-2">{CONTACT_INFO.parent}</dd>
                </div>
              </dl>
              <p className="mt-10 text-xs font-light leading-relaxed text-silver-2">
                Contact details above are placeholders configured for this preview. Replace them with
                verified TEKA Holdings contact information before launch.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="border border-line bg-graphite/20 p-7 md:p-12">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
