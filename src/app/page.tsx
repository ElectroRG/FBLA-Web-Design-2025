"use client";

import Footer from "@/components/Footer";
import { ParallaxScrollDemo } from '@/components/ParallaxScroll';
import { HeroParallaxDemo } from '@/components/HeroParallax';
import SideScroll from '@/components/SideScroll';

export default function Home() {
  return (
    <div>
      <HeroParallaxDemo/>
      <ParallaxScrollDemo/>
      <SideScroll />
      <Footer/>
    </div>
  );
}
