import { motion } from "framer-motion";

interface HeroProps {
  onReadLetter: () => void;
}

export default function Hero({ onReadLetter }: HeroProps) {
  return (
    <section className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_top,_#fffdf8_0%,_#fbf5ec_55%,_#f6e9db_100%)] px-6 py-20">
      {/* soft ambient light blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(243,201,163,0.35),_transparent_70%)] blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-10rem] right-[-6rem] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,_rgba(217,142,142,0.25),_transparent_70%)] blur-2xl"
      />

      {/* floral cutout, upper right */}
      <motion.img
        src="/images/rose-hero.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-[2%] top-[8%] w-32 sm:w-44 md:w-56 lg:right-[8%] drop-shadow-[0_18px_30px_rgba(143,42,46,0.18)] animate-drift"
        style={{ ["--rot" as string]: "6deg" }}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* floral cutout, lower left, small accent */}
      <motion.img
        src="/images/floral-divider.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute bottom-[10%] left-[-2%] w-40 rotate-[-18deg] opacity-80 sm:left-[4%] sm:w-52"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 0.85, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
      />

      <div className="relative z-10 flex max-w-2xl flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-body text-xs uppercase tracking-[0.35em] text-rose-deep/70 sm:text-sm"
        >
          For my favorite person
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-serif-display text-shadow-soft mt-6 text-4xl font-medium leading-[1.15] text-ink sm:text-5xl md:text-6xl"
        >
          To my <span className="italic text-rose-deep">Julian</span>,
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 font-serif-display text-lg italic text-ink/70 sm:text-xl"
        >
          From your babe, Razal ♡
        </motion.p>

        <motion.button
          type="button"
          onClick={onReadLetter}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.75 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="group mt-12 inline-flex items-center gap-3 rounded-full border border-rose-deep/30 bg-cream/70 px-8 py-3.5 font-body text-sm uppercase tracking-[0.2em] text-rose-deep shadow-[0_8px_24px_rgba(163,59,59,0.12)] backdrop-blur-sm transition-colors hover:bg-rose-deep hover:text-cream focus-visible:outline-offset-4"
        >
          Read my letter
          <span aria-hidden className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </motion.button>
      </div>

      <motion.div
        aria-hidden
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink/30"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="18" height="28" viewBox="0 0 18 28" fill="none">
          <rect x="1" y="1" width="16" height="26" rx="8" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="9" cy="8" r="2" fill="currentColor" />
        </svg>
      </motion.div>
    </section>
  );
}
