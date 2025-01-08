"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <nav className="sticky z-50 bg-gray-800 text-white">
      <div className={cn("fixed top-0 inset-x-0 max-w-full mx-auto z-50 bg-gray-800", className)}>
        <Menu
          setActive={setActive}
          logo={{
            src: "/lafayette.png", // Replace with your logo's path
            alt: "Site Logo",
            href: "/", // Redirect to homepage on click
          }}
        >
          {/* Centered Menu Items */}
          <div className="flex justify-center space-x-8">
            <MenuItem setActive={setActive} active={active} item="Stadium" href="/stadium">
              {/* Removed the submenus under Stadium */}
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Events" href="/calendar">
              {/* Removed the submenus under Events */}
            </MenuItem>
          </div>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;