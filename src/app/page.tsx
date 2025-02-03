"use client";

import Footer from "@/components/Footer";
import { ParallaxScrollDemo } from '@/components/ParallaxScroll';
import { HeroParallaxDemo } from '@/components/HeroParallax';
import SideScroll from '@/components/SideScroll';
import { Tabs } from "@/components/ui/tabs";
import { TabsDemo } from "@/components/Tabs";

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
