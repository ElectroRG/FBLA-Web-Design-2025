"use client";

import { TextHoverEffect1 } from "@/components/Text1";
import { TextHoverEffect2 } from "@/components/Text2";
import { TimelineDemo } from "@/components/Timeline";
import Footer from "@/components/Footer";

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
      <div style={{ paddingTop: "175px" }}>
        <TextHoverEffect1 />
      </div>
      <div style={{ paddingTop: "-5px" }}>
        <TextHoverEffect2 />
      </div>
      <div style={{ paddingBottom: "400px" }}>
        <TimelineDemo />
      </div>



      <Footer/>
      {/* Add Footer here */}
      
    </div>
  );
}
