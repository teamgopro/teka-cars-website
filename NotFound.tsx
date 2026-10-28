import Reveal from "../components/Reveal";
import { ROUTES, useRouter } from "../router";

export default function NotFound() {
  const { navigate } = useRouter();
  const go = (to: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(to);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden bg-ink">
      <img
        src="/images/night-scene.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-ink/70" />
      <Reveal className="relative z-10 mx-auto max-w-lg px-6 text-center">
        <span className="label-overline text-xs text-silver-2">404</span>
        <h1 className="font-display mt-5 text-5xl font-medium tracking-wide text-white md:text-6xl">
          THIS ROAD ENDS HERE.
        </h1>
        <p className="mt-6 text-sm font-light leading-relaxed text-silver">
          The page you're looking for doesn't exist, or has moved. Let's get you back on course.
        </p>
        <a
          href={ROUTES.home}
          onClick={go(ROUTES.home)}
          className="label-overline mt-9 inline-flex border border-white bg-white px-9 py-4 text-[11px] text-ink transition-colors duration-300 hover:bg-transparent hover:text-white"
        >
          Return Home
        </a>
      </Reveal>
    </div>
  );
}
