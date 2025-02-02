"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "State-of-the-Art Gymnasium",
    description:
      "Our modern gymnasium features professional-grade equipment, multiple basketball courts, and advanced training facilities. Perfect for both competitive sports and recreational activities.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--yellow-500),var(--orange-500))] flex items-center justify-center text-white">
        <Image
          src="/ball.png"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-xl"
          alt="gymnasium facilities"
        />
      </div>
    ),
  },
  {
    title: "Olympic-Size Swimming Pool",
    description:
      "Dive into excellence with our Olympic-standard swimming pool. Complete with professional timing systems, spectator seating, and year-round temperature control for optimal training conditions.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/swim.png"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-xl"
          alt="swimming pool"
        />
      </div>
    ),
  },
  {
    title: "Tennis Courts Complex",
    description:
      "Experience world-class tennis facilities with our professional-grade courts. Whether you're a beginner or an advanced player, our courts provide the perfect environment for improving your game.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--yellow-500),var(--orange-500))] flex items-center justify-center text-white">
        <Image
          src="/tennis.png"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-xl"
          alt="tennis courts"
        />
      </div>
    ),
  },
  {
    title: "Wrestling Arena",
    description:
      "Our dedicated wrestling facility features professional mats, training equipment, and specialized areas for both practice and competition. Join our wrestling program and train like a champion.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--yellow-500),var(--orange-500))] flex items-center justify-center text-white">
        <Image
          src="/wrestling.png"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-xl"
          alt="wrestling arena"
        />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
