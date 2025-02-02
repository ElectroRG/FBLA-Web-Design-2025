"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

export function ParallaxScrollDemo() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useSpring(useTransform(scrollYProgress, [0, 0.8], [1, 3.5]), {
    stiffness: 100,
    damping: 30
  });
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.3, 1], [1, 0.8, 0.6]), {
    stiffness: 100,
    damping: 30
  });
  const translateZ = useSpring(useTransform(scrollYProgress, [0, 0.8], [0, 2000]), {
    stiffness: 100,
    damping: 30
  });
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.8], [0, -600]), {
    stiffness: 100,
    damping: 30
  });
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.8], [0, 25]), {
    stiffness: 100,
    damping: 30
  });
  const beamHeight = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), {
    stiffness: 100,
    damping: 30
  });

  return (
    <div
      ref={ref}
      className="relative h-[150vh] w-full overflow-hidden bg-black"
      style={{ perspective: "2000px" }}
    >
      <div className="sticky top-0 h-screen w-full">
        {/* Left Tracing Beam */}
        <motion.div
          className="absolute left-0 top-0 w-1 h-full"
          style={{
            background: "linear-gradient(180deg, rgba(255, 208, 0, 0) 0%, #FFD700 50%, rgba(255, 208, 0, 0) 100%)",
            height: beamHeight,
            opacity: 0.6,
          }}
        />

        {/* Right Tracing Beam */}
        <motion.div
          className="absolute right-0 top-0 w-1 h-full"
          style={{
            background: "linear-gradient(180deg, rgba(255, 208, 0, 0) 0%, #FFD700 50%, rgba(255, 208, 0, 0) 100%)",
            height: beamHeight,
            opacity: 0.6,
          }}
        />

        <motion.div
          style={{
            scale,
            opacity,
            y: translateY,
            z: translateZ,
            rotateX,
            transformStyle: "preserve-3d",
          }}
          className="relative h-full w-full"
        >
          <Image
            src="/summit.png"
            alt="Sports Ball Image Lafayette High School"
            fill
            className="object-contain"
            priority
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            loading="eager"
            style={{ filter: 'none' }}
          />
          <div className="absolute inset-0 bg-black/20" />
          <motion.div 
            className="absolute inset-0 flex items-center justify-center text-center px-4"
            style={{
              translateZ: useTransform(scrollYProgress, [0, 0.5], [0, 200]),
              opacity: useTransform(scrollYProgress, [0, 0.2], [0, 1])
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-full flex items-center justify-center">
              <motion.h1 
                className="text-4xl md:text-7xl font-bold text-yellow-400 drop-shadow-[0_0_15px_rgba(255,255,0,0.3)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {"Welcome to Lafayette High School".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    style={{
                      display: "inline-block",
                      whiteSpace: "pre",
                      opacity: useTransform(
                        scrollYProgress,
                        [0, 0.1 + (index * 0.005)],
                        [0, 1]
                      ),
                      y: useTransform(
                        scrollYProgress,
                        [0, 0.1 + (index * 0.005)],
                        [20, 0]
                      )
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h1>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

const images = [
  "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
  "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
  "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  "https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  "https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2640&q=80",
  "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
  "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
  "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
];
