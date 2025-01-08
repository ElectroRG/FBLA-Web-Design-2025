"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

// Updated MenuItem to include hover effect and make it clickable
// Updated MenuItem to increase font size
export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  href, // Add href prop to make it clickable
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  href?: string; // Optional link for navigation
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-xl text-black hover:text-yellow-500 dark:text-black" // Increased font size to 2xl
      >
        {href ? (
          <Link href={href} className="text-black hover:text-yellow-500">
            {item}
          </Link>
        ) : (
          item
        )}
      </motion.p>
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
  logo,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
  logo?: { src: string; alt: string; href?: string }; // Add logo prop
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-none border border-transparent dark:bg-white dark:border-white/[0.2] bg-white shadow-input flex items-center justify-start px-1 py-1 h-20" // Adjusted px-4 and py-4 for overall padding
    >
      {logo && (
        <a
          href={logo.href || "/"}
          className="flex items-center"
          style={{ marginLeft: "10px" , marginRight:"750px",marginTop:"1px",marginBottom:"5px"}} // Reduced margin to 8px
        >
          <img
            src={logo.src}
            alt={logo.alt}
            width={75} // Reduced size to make it more compact
            height={75}
            className="rounded-md" // Optional: add rounded corners
          />
        </a>
      )}
      <div className="flex space-x-8">{children}</div> {/* Reduced spacing between menu items */}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-black">
          {title}
        </h4>
        <p className="text-black text-sm max-w-[10rem] dark:text-black">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-black dark:text-black hover:text-black"
    >
      {children}
    </Link>
  );
};