'use client';
import '@schedule-x/theme-default/dist/index.css'
import { LampDemo } from "@/components/Lamp";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { ParallaxScrollDemo } from '@/components/ParallaxScroll';
import { HeroParallaxDemo } from '@/components/HeroParallax';
import { CoverDemo } from '@/components/Cover';
import { LayoutGridDemo } from '@/components/Layout';

export default function Home() {
  

  return (
    <div>
        <LampDemo/>
        <ShootingStars/>
        <HeroParallaxDemo/>
    </div>
    
  )
}   
