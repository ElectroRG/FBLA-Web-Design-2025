"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Events",
      className: "text-yellow-500",
    },
    {
      text: "Calendar",
      className: "text-yellow-500",
    },
  ];
  return (
    <div className="flex flex-col items-left justify-center h-[17.5rem] mx-10">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}

/*
<div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div>
*/