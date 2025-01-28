"use client";

import { TextHoverEffect1 } from "@/components/Text1";
import { TextHoverEffect2 } from "@/components/Text2";
import { TimelineDemo } from "@/components/Timeline";
import Footer from "@/components/Footer";
import { ParallaxScrollDemo } from '@/components/ParallaxScroll';
import { HeroParallaxDemo } from '@/components/HeroParallax';

const stadium = [
  {
    text: "Stadium",
    className: "text-white-500 dark:text-yellow-500",

  },
  {
    text: "Booking",
    className: "text-yellow-500 dark:text-yellow-500",
  },
];

export default function Home() {
  return (
    <div>
      <HeroParallaxDemo/>
      <ParallaxScrollDemo/>
      <Footer/>
      {/* Add Footer here */}
    </div>
  );
}
