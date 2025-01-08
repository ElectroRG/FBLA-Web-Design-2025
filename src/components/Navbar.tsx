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
          <MenuItem setActive={setActive} active={active} item="Stadium">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/stadium">Gymnasium</HoveredLink>
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Events">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/calendar">Event Calendar</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;