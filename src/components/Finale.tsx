import FadeIn from "./FadeIn";
import { finalLines } from "../content";

interface FinaleProps {
  onReadAgain: () => void;
}

export default function Finale({ onReadAgain }: FinaleProps) {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_bottom,_#f6e9db_0%,_#fbf5ec_55%,_#fffdf8_100%)] px-6 py-24 sm:py-32">
      {/* Soft ambient background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(243,201,163,0.35),_transparent_70%)] blur-2xl"
      />

      <div className="relative z-10 mx-auto flex max-w-[62ch] flex-col items-center text-center">
        {/* The heartfelt final lines - perfectly readable with high contrast */}
        <div className="w-full space-y-6 font-body text-[1.05rem] leading-[1.9] text-ink sm:text-[1.125rem]">
          {finalLines.map((line, idx) => (
            <FadeIn key={idx} delay={idx * 0.08}>
              <p>{line}</p>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3} className="mt-10 sm:mt-12">
          <p className="font-serif-display text-2xl font-medium italic text-rose-deep sm:text-3xl">
            I love you more than I know how to explain, Julian.
          </p>
          <p className="mt-4 font-body text-base text-ink/85 sm:text-lg">
            Thank you for being part of my life.
          </p>
        </FadeIn>

        <FadeIn delay={0.4} className="mt-8">
          <p className="font-serif-display italic text-ink/80">Forever your babe,</p>
          <p className="mt-2 font-serif-display text-3xl text-rose-deep sm:text-4xl">Razal ♡</p>
        </FadeIn>

        {/* The Bouquet centerpiece presented right below the love note */}
        <FadeIn delay={0.5} className="mt-12 flex justify-center">
          <img
            src="/images/bouquet-final.png"
            alt="A breathtaking bouquet of fresh red roses and white blossoms"
            className="w-60 sm:w-72 md:w-84 drop-shadow-[0_25px_50px_rgba(143,42,46,0.2)] transition-transform duration-700 hover:scale-105"
          />
        </FadeIn>

        <FadeIn delay={0.6} className="mt-12">
          <button
            type="button"
            onClick={onReadAgain}
            className="inline-flex items-center gap-2 rounded-full border border-rose-deep/30 bg-cream/90 px-8 py-3.5 font-body text-xs uppercase tracking-[0.25em] text-rose-deep shadow-[0_8px_24px_rgba(163,59,59,0.12)] backdrop-blur-sm transition-all hover:bg-rose-deep hover:text-cream hover:shadow-lg focus-visible:outline-offset-4"
          >
            Read it again
          </button>
        </FadeIn>
      </div>
    </section>
  );
}
