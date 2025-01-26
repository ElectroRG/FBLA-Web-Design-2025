"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[85%] max-w-2xl bg-black/40 backdrop-blur-xl z-50 border border-white/10 rounded-2xl">
      <div className="w-full flex items-center justify-center px-6 py-4">
        <div className="hidden md:flex space-x-6 items-center">
          {[
            { href: "/calendar", label: "Calendar" },
            { href: "/stadium", label: "Stadium" },
            { href: "/documentation", label: "Documentation" }
          ].map((link) => (
            <motion.div
              key={link.href}
              whileHover={{ 
                y: -1,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              whileTap={{ y: 1 }}
            >
              <Link
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-yellow-400 transition-all duration-200"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md md:hidden"
            >
              <div className="flex flex-col items-center py-4 space-y-4">
                {[
                  { href: "/calendar", label: "Calendar" },
                  { href: "/stadium", label: "Stadium" },
                  { href: "/documentation", label: "Documentation" }
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white hover:text-yellow-500 transition-colors w-full text-center py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
