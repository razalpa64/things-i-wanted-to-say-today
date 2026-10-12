import { useRef } from "react";
import Hero from "./components/Hero";
import Letter from "./components/Letter";
import Memories from "./components/Memories";
import Future from "./components/Future";
import Finale from "./components/Finale";

export default function App() {
  const letterRef = useRef<HTMLElement>(null);

  const scrollToLetter = () => {
    letterRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen w-full bg-ivory font-body text-ink">
      <Hero onReadLetter={scrollToLetter} />
      <Letter ref={letterRef} />
      <Memories />
      <Future />
      <Finale onReadAgain={scrollToLetter} />
    </div>
  );
}
