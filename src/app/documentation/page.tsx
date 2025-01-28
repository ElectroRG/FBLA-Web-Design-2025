"use client";
import React from 'react';
import { TracingBeam } from "@/components/ui/tracing-beam";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const Documentation: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-16 px-6 sm:px-8 lg:px-12">
      <TracingBeam className="px-8">
          <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-6 pb-8">
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-500">
              Site Documentation
            </h1>
            <p className="text-2xl text-white/90">
              Discover the technology and design principles behind our website.
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-yellow-500">Overview</h2>
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <p className="text-white/80 leading-relaxed">
                This website was designed as part of FBLA Website Design to showcase Lafayette High School's new public gymnasium.
                It features responsive design, modern UI components, and accessibility considerations.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-yellow-500">Technologies Used</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Frontend", tech: "Next.js with TypeScript" },
                { title: "Styling", tech: "Tailwind CSS & Styled Components" },
                { title: "Hosting", tech: "Firebase Hosting" },
                { title: "Version Control", tech: "GitHub" }
              ].map((item, i) => (
                <HoverBorderGradient key={i} className="p-6 rounded-xl bg-black/40">
                  <h3 className="font-medium text-yellow-400 mb-2">{item.title}</h3>
                  <p className="text-white/70">{item.tech}</p>
                </HoverBorderGradient>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-yellow-500">Copyright Compliance</h2>
            <div className="space-y-6">
              <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
                <h3 className="text-xl font-medium text-yellow-400 mb-4">Images and Media</h3>
                <ul className="list-disc list-inside space-y-2 text-white/80">
                  <li>All images sourced from royalty-free platforms such as Unsplash, Pexels, or Pixabay</li>
                  <li>Custom graphics designed using Canva and Figma</li>
                  <li>Icons provided by FontAwesome and Material Icons under open-source licenses</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
                <h3 className="text-xl font-medium text-yellow-400 mb-4">Code Libraries</h3>
                <ul className="list-disc list-inside space-y-2 text-white/80">
                  <li>React and related dependencies are licensed under MIT</li>
                  <li>Any additional libraries are cited in the package.json file</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
                <h3 className="text-xl font-medium text-yellow-400 mb-4">Content</h3>
                <p className="text-white/80">
                  All written content is original or used with permission. References and citations are provided where necessary.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-yellow-500">Testing and Validation</h2>
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <ul className="list-disc list-inside space-y-2 text-white/80">
                <li>Validated HTML and CSS using W3C validators</li>
                <li>Checked accessibility compliance with Lighthouse and Wave tools</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-yellow-500">Contact Information</h2>
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <p className="text-white/80">Created by: Rohan G and Pardhu K</p>
              <p className="text-white/80">Juniors at Lafayette High School</p>
            </div>
          </section>
        </div>
      </TracingBeam>
    </div>
  );
};

export default Documentation;
