import React from "react";
import { Cover } from "@/components/ui/cover";
import { FlipWords } from "./ui/flip-words";
import { FlipWordsDemo } from "./Flip";

export function CoverDemo() {

  const words = ["Host", "Celebrate", "Enjoy", "Party"];

  return (
    <div className="bg-black flex items-center justify-center">
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-white mb-6 !mt-0 relative z-20 py-0">
        Come <FlipWords words={words} />at <Cover>Lafayette Stadium</Cover>
      </h1>
    </div>
  );
}