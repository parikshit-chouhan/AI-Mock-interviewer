"use client";
import React, { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  return (
    <div className="bg-white sticky top-0 z-50  border-b border-gray-200">
      <div className="flex p-4 items-center justify-between">
        <Link href={"/dashboard"}>
          <h1 className="text-2xl font-bold cursor-pointer text-teal-900">
            AI Mock Interviewer
          </h1>
        </Link>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden">
          <button
            className="text-teal-900 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12" // Close icon (X)
                    : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
                }
              />
            </svg>
          </button>
        </div>

        {/* Navbar Links for Medium+ Screens */}
        <ul className="hidden md:flex gap-6">
          <Link href={"/dashboard"}>
            <li
              className={`hover:font-bold transition-all cursor-pointer ${
                path == "/dashboard" && "font-bold"
              }`}
            >
              Dashboard
            </li>
          </Link>

          <Link href={"/dashboard/questions"}>
            <li
              className={`hover:font-bold transition-all cursor-pointer ${
                path == "/dashboard/questions" && "text-teal-900 font-bold"
              }`}
            >
              Questions
            </li>
          </Link>

          <Link href={"/dashboard/how"}>
            <li
              className={`hover:font-bold transition-all cursor-pointer ${
                path == "/dashboard/how" && "text-teal-900 font-bold"
              }`}
            >
              How it Works?
            </li>
          </Link>
        <UserButton />
        </ul>
        {/* User Button */}
      
      </div>

      {/* Collapsible Navbar for Small Screens */}
      {isOpen && (
        <ul className="md:hidden flex flex-col bg-secondary px-4 py-2 space-y-2 text-center">
          <Link href={"/dashboard"}>
            <li
              className={`hover:font-bold transition-all cursor-pointer ${
                path == "/dashboard" && "font-bold"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </li>
          </Link>

          <Link href={"/dashboard/questions"}>
            <li
              className={`hover:font-bold transition-all cursor-pointer ${
                path == "/dashboard/questions" && "text-teal-900 font-bold"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Questions
            </li>
          </Link>

          <Link href={"/dashboard/how"}>
            <li
              className={`hover:font-bold transition-all cursor-pointer ${
                path == "/dashboard/how" && "text-teal-900 font-bold"
              }`}
              onClick={() => setIsOpen(false)}
            >
              How it Works?
            </li>
          </Link>
          <li>
          <UserButton />
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
