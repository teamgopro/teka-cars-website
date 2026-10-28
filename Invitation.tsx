import Reveal from "../components/Reveal";
import InvitationForm from "../components/InvitationForm";

export default function Invitation() {
  return (
    <div>
      <section className="relative flex min-h-[56vh] w-full items-end overflow-hidden bg-ink">
        <img
          src="/images/night-scene.jpg"
          alt="TEKA ONE illuminated at night by architectural lighting"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-black/40" />
        <Reveal className="relative z-10 mx-auto w-full max-w-[1200px] px-6 pb-16 md:px-10 md:pb-20">
          <span className="label-overline inline-flex items-center gap-2 text-[11px] text-silver-2">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Invite Only
          </span>
          <h1 className="font-display mt-5 max-w-3xl text-5xl font-medium leading-[0.95] tracking-wide text-white md:text-7xl">
            ACCESS IS BY
            <br /> INVITATION.
          </h1>
          <p className="mt-6 max-w-lg text-base font-light leading-relaxed text-silver">
            TEKA ONE is presented through an invitation-only ownership experience. Access is limited to
            individuals invited to connect with TEKA Cars.
          </p>
        </Reveal>
      </section>

      <section className="bg-ink py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <span className="label-overline text-xs text-silver-2">Before You Apply</span>
              <h2 className="font-display mt-5 text-3xl font-medium tracking-wide text-white md:text-4xl">
                WHAT TO EXPECT.
              </h2>
              <ul className="mt-8 space-y-6 text-sm font-light leading-relaxed text-silver">
                <li className="border-t border-line pt-5">
                  No prices, financing information, or checkout are presented anywhere in this experience.
                </li>
                <li className="border-t border-line pt-5">
                  Submitting this form does not guarantee an invitation. TEKA Cars reviews requests at its
                  own discretion.
                </li>
                <li className="border-t border-line pt-5">
                  Your information is used solely to evaluate and respond to your request, in line with our
                  Privacy Policy.
                </li>
                <li className="border-t border-line pt-5">
                  This environment currently runs in demo mode — no backend is connected, so no data is
                  permanently stored.
                </li>
              </ul>
            </Reveal>

            <Reveal delay={0.1} className="border border-line bg-graphite/20 p-7 md:p-12">
              <InvitationForm />
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
