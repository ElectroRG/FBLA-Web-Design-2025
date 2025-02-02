"use client";
import React from 'react';
import { TracingBeam } from "@/components/ui/tracing-beam";
import { TechStack } from "@/components/TechStack";
import { motion, useScroll, useTransform } from "framer-motion";

const Documentation: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const boxShadowProgress = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["rgba(0, 0, 0, 0.24) 0px 3px 8px", "none"]
  );
  const backgroundColorProgress = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["var(--emerald-500)", "white"]
  );
  const borderColorProgress = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["var(--emerald-600)", "white"]
  );

  return (
    <div className="min-h-screen bg-black py-24 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
      <TracingBeam className="px-8">
        <div className="max-w-7xl mx-auto space-y-20 relative z-10">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-yellow-400 text-center">Overview</h2>
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-yellow-400/10 transition-all duration-300 hover:bg-white/10 hover:border-yellow-400/30">
              <p className="text-white/80 leading-relaxed">
                This website was designed as part of FBLA Website Design to showcase Lafayette High School's new public gymnasium.
                It features responsive design, modern UI components, and accessibility considerations.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-yellow-400 text-center">Technologies Used</h2>
            <TechStack />
          </section>

          <section className="space-y-6 flex flex-col items-center text-center">
            <h2 className="text-2xl font-semibold text-yellow-400 text-center">Copyright Compliance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 p-6 rounded-xl border border-yellow-400/10 shadow-lg transition-all duration-300 hover:bg-white/10 hover:border-yellow-400/30 flex flex-col items-center"
              >
                <h3 className="text-xl font-medium text-yellow-400 mb-4">Images and Media</h3>
                <ul className="space-y-3 text-white/70 w-full">
                  <li className="flex items-center justify-center gap-2">
                    <span>All images sourced from royalty-free platforms</span>
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <span>Custom graphics designed using Canva and Figma</span>
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <span>Icons from FontAwesome and Material Icons</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 p-6 rounded-xl border border-yellow-400/10 shadow-lg transition-all duration-300 hover:bg-white/10 hover:border-yellow-400/30 flex flex-col items-center"
              >
                <h3 className="text-xl font-medium text-yellow-400 mb-4">Code Libraries</h3>
                <ul className="space-y-3 text-white/70 w-full">
                  <li className="flex items-center justify-center gap-2">
                    <span>React and related dependencies (MIT License)</span>
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <span>Additional libraries cited in package.json</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 p-6 rounded-xl border border-yellow-400/10 shadow-lg transition-all duration-300 hover:bg-white/10 hover:border-yellow-400/30 flex flex-col items-center"
              >
                <h3 className="text-xl font-medium text-yellow-400 mb-4">Content</h3>
                <p className="text-white/70 leading-relaxed text-center">
                  All written content is original or used with permission. References and citations are provided where necessary.
                </p>
              </motion.div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-yellow-400 text-center">Testing and Validation</h2>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-white/5 p-8 rounded-xl border border-yellow-400/10 shadow-lg transition-all duration-300 hover:bg-white/10 hover:border-yellow-400/30"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-yellow-400 text-center">Code Quality</h3>
                  <ul className="space-y-3 text-white/70 text-center">
                    <li className="flex items-center justify-center gap-2">
                      <span>W3C HTML Validation</span>
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <span>CSS Validation Service</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-yellow-400 text-center">Accessibility</h3>
                  <ul className="space-y-3 text-white/70 text-center">
                    <li className="flex items-center justify-center gap-2">
                      <span>Lighthouse Performance Audit</span>
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <span>WAVE Accessibility Evaluation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-yellow-400 text-center">Contact Information</h2>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-white/5 p-8 rounded-xl border border-yellow-400/10 shadow-lg transition-all duration-300 hover:bg-white/10 hover:border-yellow-400/30"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-yellow-400">Developers</h3>
                  <div className="space-y-2">
                    <p className="text-white/70">Rohan G</p>
                    <p className="text-white/70">Pardhu K</p>
                    <p className="text-white/50 text-sm">Juniors at Lafayette High School</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-yellow-400">School Information</h3>
                  <div className="space-y-2">
                    <p className="text-white/70">Lafayette High School</p>
                    <p className="text-white/50">17050 Clayton Rd</p>
                    <p className="text-white/50">Wildwood, MO 63011</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      </TracingBeam>
    </div>
  );
};

export default Documentation;
