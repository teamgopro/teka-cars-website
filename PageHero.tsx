import { motion } from "framer-motion";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  height?: string;
}

export default function PageHero({ eyebrow, title, description, image, imageAlt, height = "h-[72vh]" }: PageHeroProps) {
  return (
    <section className={`relative flex ${height} min-h-[460px] w-full items-end overflow-hidden bg-ink`}>
      <img src={image} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-black/40" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 md:px-10 md:pb-24"
      >
        <span className="label-overline text-[11px] text-silver-2">{eyebrow}</span>
        <h1 className="font-display mt-4 max-w-4xl text-5xl font-medium leading-[0.95] tracking-wide text-white text-balance md:text-7xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-silver md:text-lg">{description}</p>
        )}
      </motion.div>
    </section>
  );
}
