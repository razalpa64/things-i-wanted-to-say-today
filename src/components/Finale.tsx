import FadeIn from "./FadeIn";
import { finalLines } from "../content";

interface FinaleProps {
  onReadAgain: () => void;
}

export default function Finale({ onReadAgain }: FinaleProps) {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_bottom,_#f6e9db_0%,_#fbf5ec_55%,_#fffdf8_100%)] px-6 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center">
        <img
          src="/images/bouquet-final.png"
          alt="A breathtaking bouquet of fresh red roses and white blossoms"
          className="w-[22rem] max-w-[85vw] drop-shadow-[0_30px_50px_rgba(143,42,46,0.18)] sm:w-[28rem] md:w-[32rem]"
        />
      </div>

      <div className="relative z-10 mx-auto mt-[15rem] max-w-[58ch] text-center sm:mt-[18rem] md:mt-[20rem]">
        <FadeIn>
          <div className="space-y-6 font-body text-[1.05rem] leading-[1.9] text-ink/90 sm:text-[1.1rem]">
            {finalLines.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="mt-10">
          <p className="font-serif-display text-2xl font-medium italic text-rose-deep sm:text-3xl">
            I love you more than I know how to explain, Julian.
          </p>
          <p className="mt-6 font-body text-ink/80">Thank you for being part of my life.</p>
        </FadeIn>

        <FadeIn delay={0.25} className="mt-10">
          <p className="font-serif-display italic text-ink/80">Forever your babe,</p>
          <p className="mt-1 font-serif-display text-3xl text-rose-deep">Razal ♡</p>
        </FadeIn>

        <FadeIn delay={0.35} className="mt-14">
          <button
            type="button"
            onClick={onReadAgain}
            className="inline-flex items-center gap-2 rounded-full border border-rose-deep/25 bg-cream/60 px-6 py-2.5 font-body text-xs uppercase tracking-[0.25em] text-rose-deep/80 transition-colors hover:bg-rose-deep hover:text-cream"
          >
            Read it again
          </button>
        </FadeIn>
      </div>
    </section>
  );
}
