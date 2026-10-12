import FadeIn from "./FadeIn";
import { memories } from "../content";

export default function Memories() {
  return (
    <section className="relative bg-ivory px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <FadeIn className="text-center">
          <p className="font-body text-xs uppercase tracking-[0.35em] text-rose-deep/60">Us, lately</p>
          <h2 className="mt-4 font-serif-display text-3xl font-medium text-ink sm:text-4xl">
            Little moments that mean so much.
          </h2>
        </FadeIn>

        <div className="mt-16 space-y-16">
          <FadeIn>
            <MemoryCard {...memories[0]} />
          </FadeIn>

          <div className="flex justify-center" aria-hidden>
            <img src="/images/floral-divider.png" alt="" className="w-48 opacity-80 sm:w-64" />
          </div>

          <FadeIn>
            <MemoryCard {...memories[1]} reverse />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

interface MemoryCardProps {
  title: string;
  image: string;
  alt: string;
  caption: string;
  reverse?: boolean;
}

function MemoryCard({ title, image, alt, caption, reverse }: MemoryCardProps) {
  return (
    <div
      className={`flex flex-col items-center gap-8 md:gap-12 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="w-full max-w-sm shrink-0 overflow-hidden rounded-[1.75rem] bg-cream shadow-[0_20px_45px_rgba(143,42,46,0.1)] aspect-[16/10]">
        <img src={image} alt={alt} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
      </div>
      <div className="text-center md:text-left">
        <h3 className="font-serif-display text-xl font-medium text-rose-deep sm:text-2xl">{title}</h3>
        <p className="mt-4 max-w-sm font-body text-base leading-relaxed text-ink/80 sm:text-[1.05rem]">
          {caption}
        </p>
      </div>
    </div>
  );
}
