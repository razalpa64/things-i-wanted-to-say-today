import FadeIn from "./FadeIn";
import { futureText } from "../content";

export default function Future() {
  return (
    <section className="relative overflow-hidden bg-cream px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
        <FadeIn y={20}>
          <div className="overflow-hidden rounded-[2rem] shadow-[0_24px_60px_rgba(68,92,63,0.14)]">
            <img
              src="/images/future-home-illustration.png"
              alt="A cozy illustrated home at golden hour, surrounded by a garden of roses and greenery"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </FadeIn>

        <FadeIn y={20} delay={0.15}>
          <p className="font-body text-xs uppercase tracking-[0.35em] text-green-deep/70">A glimpse ahead</p>
          <h2 className="mt-4 font-serif-display text-3xl font-medium text-ink sm:text-4xl">
            A future I dream about.
          </h2>
          <p className="mt-6 font-body text-[1.05rem] leading-[1.9] text-ink/85">{futureText}</p>
        </FadeIn>
      </div>
    </section>
  );
}
