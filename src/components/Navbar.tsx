"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/dist/client/link";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 border-2 border-gray-700 dark:border-gray-200 rounded-full", className)}>
      <Menu setActive={setActive}>
        <Link href="/">
          <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink
              href="/all-courses"
            >
              All Courses
            </HoveredLink>
            <HoveredLink
              href="/basic-music-theory"
            >
              Basic Music Theory
            </HoveredLink>
            <HoveredLink
              href="/advanced-composition"
            >
              Advanced Composition
            </HoveredLink> 
            <HoveredLink
              href="/songwriting"
            >
              Songwriting
            </HoveredLink>  
            <HoveredLink
              href="/music-production"
            >
              Music Production
            </HoveredLink>  
          </div>
        </MenuItem>
        <Link href="/contact">
          <MenuItem setActive={setActive} active={active} item="Contact Us">
        </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
