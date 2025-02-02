'use client';

import { GoogleGeminiEffectDemo } from "@/components/Gemini";
import { StickyScrollRevealDemo } from "@/components/Scroll";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <div className="relative z-10">
        <GoogleGeminiEffectDemo
          title="Amenities"
          description="Explore our state-of-the-art facilities and amenities"
        />
      </div>
      
      <div className="relative z-20 -mt-[100vh] pt-[100vh]">
        <StickyScrollRevealDemo/>
      </div>
    </div>
  )
}
