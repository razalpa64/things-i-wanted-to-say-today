import { forwardRef } from "react";
import FadeIn from "./FadeIn";
import { letterParagraphs, letterSignOff } from "../content";

const Letter = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section
      ref={ref}
      id="letter"
      className="relative scroll-mt-10 bg-cream px-6 py-24 sm:py-32"
    >
      {/* decorative side floral, hidden on small screens to keep reading clean */}
      <img
        src="/images/floral-letter-side.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-2 top-16 hidden w-40 opacity-90 md:block lg:left-10 lg:w-52"
      />
      <img
        src="/images/floral-letter-side.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute bottom-16 right-2 hidden w-36 rotate-[150deg] opacity-80 md:block lg:right-10 lg:w-48"
      />

      <div className="relative z-10 mx-auto max-w-[62ch]">
        <FadeIn>
          <p className="text-center font-body text-xs uppercase tracking-[0.35em] text-rose-deep/60">
            A letter, just for you
          </p>
          <h2 className="mt-4 text-center font-serif-display text-3xl font-medium text-ink sm:text-4xl">
            My Julian,
          </h2>
        </FadeIn>

        <div className="mt-10 space-y-6 font-body text-[1.05rem] leading-[1.9] text-ink/90 sm:text-[1.1rem]">
          {letterParagraphs.map((paragraph, idx) => (
            <FadeIn key={idx} delay={idx * 0.03} y={16} duration={0.7}>
              <p>{paragraph}</p>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.1} className="mt-10">
          <p className="font-body text-[1.05rem] leading-[1.9] text-ink/90 sm:text-[1.1rem]">
            {letterSignOff.closingLine}
          </p>
          <p className="mt-8 font-serif-display italic text-ink/80">{letterSignOff.signature}</p>
          <p className="mt-1 font-serif-display text-2xl text-rose-deep">{letterSignOff.name}</p>
        </FadeIn>
      </div>
    </section>
  );
});

Letter.displayName = "Letter";

export default Letter;
