import { useMemo, useState } from "react";
import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";
import Lightbox, { type GalleryImage } from "../components/Lightbox";

const GALLERY: GalleryImage[] = [
  {
    src: "/images/hero-front.jpg",
    alt: "TEKA ONE front three-quarter view in a dark studio",
    caption: "Front three-quarter view, studio",
    category: "Exterior",
  },
  {
    src: "/images/side-profile.jpg",
    alt: "TEKA ONE full side profile showing its low, wide silhouette",
    caption: "Side profile silhouette",
    category: "Exterior",
  },
  {
    src: "/images/rear-three-quarter.jpg",
    alt: "TEKA ONE rear three-quarter view with glowing light bar",
    caption: "Rear three-quarter view",
    category: "Exterior",
  },
  {
    src: "/images/front-detail.jpg",
    alt: "Close-up of TEKA ONE's narrow LED headlight signature",
    caption: "Headlight signature, close-up",
    category: "Detail",
  },
  {
    src: "/images/rear-three-quarter.jpg",
    alt: "TEKA ONE rear lighting detail",
    caption: "Rear lighting signature",
    category: "Detail",
  },
  {
    src: "/images/wheel-detail.jpg",
    alt: "TEKA ONE performance wheel and carbon-ceramic brake assembly",
    caption: "Wheel &amp; brake detail",
    category: "Detail",
  },
  {
    src: "/images/interior-cockpit.jpg",
    alt: "TEKA ONE minimalist cockpit interior",
    caption: "Driver-focused cockpit",
    category: "Interior",
  },
  {
    src: "/images/interior-cockpit.jpg",
    alt: "TEKA ONE seat and material detail",
    caption: "Seat &amp; material craftsmanship",
    category: "Interior",
  },
  {
    src: "/images/overhead-view.jpg",
    alt: "Overhead view of TEKA ONE showing its aerodynamic shape",
    caption: "Aerodynamic surfacing, overhead",
    category: "Exterior",
  },
  {
    src: "/images/night-scene.jpg",
    alt: "TEKA ONE illuminated at night in a dark studio",
    caption: "Full vehicle, dark studio",
    category: "Exterior",
  },
];

const FILTERS = ["All", "Exterior", "Interior", "Detail"] as const;

export default function Design() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? GALLERY : GALLERY.filter((img) => img.category === filter)),
    [filter]
  );

  return (
    <div>
      <PageHero
        eyebrow="Design Gallery"
        title="FORM, STUDIED CLOSELY."
        description="A closer look at the surfaces, lighting signatures, and materials that define TEKA ONE."
        image="/images/overhead-view.jpg"
        imageAlt="Overhead studio view of TEKA ONE"
        height="h-[58vh]"
      />

      <section className="bg-ink py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <Reveal className="flex flex-wrap items-center justify-between gap-6 border-b border-line pb-8">
            <div>
              <span className="label-overline text-xs text-silver-2">Exterior / Interior / Detail</span>
              <h2 className="font-display mt-3 text-3xl font-medium tracking-wide text-white md:text-4xl">
                THE DESIGN PORTFOLIO.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3" role="tablist" aria-label="Filter gallery by category">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  role="tab"
                  aria-selected={filter === f}
                  onClick={() => setFilter(f)}
                  className={`label-overline border px-5 py-2.5 text-[11px] transition-colors duration-300 ${
                    filter === f
                      ? "border-white bg-white text-ink"
                      : "border-silver/30 text-silver hover:border-white hover:text-white"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((img, i) => (
              <Reveal key={`${img.src}-${img.caption}`} delay={(i % 3) * 0.08}>
                <button
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className="group relative block w-full overflow-hidden border border-line text-left"
                  aria-label={`Open image: ${img.caption}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-xs font-light text-white">{img.caption}</span>
                    <span className="label-overline text-[10px] text-silver-2">{img.category}</span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          <p className="mt-10 text-center text-xs font-light text-silver-2">
            Click any image to view it in full detail. Use the arrow keys or swipe to navigate.
          </p>
        </div>
      </section>

      <Lightbox images={filtered} index={activeIndex} onClose={() => setActiveIndex(null)} onNavigate={setActiveIndex} />
    </div>
  );
}
