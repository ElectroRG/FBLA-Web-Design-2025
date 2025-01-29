"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const cards = [
  {
    id: 1,
    title: "State-of-the-Art Facilities",
    description: "Experience our modern gymnasium equipped with the latest sports technology and training equipment.",
    image: "/front.png"
  },
  {
    id: 2,
    title: "Spacious Seating",
    description: "Comfortable seating arrangements with excellent visibility from every angle, accommodating up to 2,000 spectators.",
    image: "/perfect.png"
  },
  {
    id: 3,
    title: "Multi-Sport Venue",
    description: "Designed to accommodate basketball, volleyball, wrestling, and various indoor sports events throughout the year.",
    image: "/ball.png"
  },
  {
    id: 4,
    title: "Modern Design",
    description: "Contemporary architecture that combines functionality with aesthetic appeal, featuring LED lighting and climate control.",
    image: "/reconstruction.png"
  },
  {
    id: 5,
    title: "Community Hub",
    description: "A gathering place for school events, tournaments, and community celebrations that brings people together.",
    image: "/School-Front.png"
  },
  {
    id: 6,
    title: "Training Facilities",
    description: "Dedicated areas for strength training, conditioning, and team practice sessions with professional equipment.",
    image: "/wrestling.png"
  },
  {
    id: 7,
    title: "Championship Legacy",
    description: "Home to numerous district and state championship victories, showcasing our athletic excellence.",
    image: "/baseball.png"
  },
  {
    id: 8,
    title: "Media Center",
    description: "Advanced scoreboard and sound system for an immersive game-day experience.",
    image: "/tennis.png"
  }
];

const SideScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [hasScrolledToEnd, setHasScrolledToEnd] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let lastTimestamp: number;
    let scrollPosition = container.scrollLeft;
    const scrollSpeed = 0.5; // Adjusted for smoother scrolling

    const handleScroll = () => {
      if (isDragging) return; // Skip scroll handling during drag
      if (container) {
        scrollPosition = container.scrollLeft;
        const isAtEnd = scrollPosition + container.clientWidth >= container.scrollWidth - 10;
        setHasScrolledToEnd(isAtEnd);
      }
    };

    const autoScroll = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!isDragging && container) {
        scrollPosition += scrollSpeed * (deltaTime / 16); // Smooth scroll based on frame time
        if (scrollPosition >= container.scrollWidth - container.clientWidth) {
          scrollPosition = 0;
        }
        container.scrollLeft = scrollPosition;
        animationFrameId = requestAnimationFrame(autoScroll);
      }
    };

    container.addEventListener('scroll', handleScroll);
    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isDragging]);


  return (
    <div className="relative w-full bg-black py-4 overflow-hidden" style={{ pointerEvents: 'auto' }}>
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="absolute inset-y-0 h-full w-full bg-black/50 -z-10" />
      
      <div 
        ref={containerRef} 
        className="flex overflow-x-auto hide-scrollbar"
        onMouseEnter={() => setIsDragging(true)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
      >
        <div className="flex space-x-4 px-4 py-2 w-max">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className="relative flex-shrink-0 w-[300px] h-[400px] rounded-xl overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300">
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">{card.title}</h3>
                  <p className="text-white/80 text-sm">{card.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default SideScroll;