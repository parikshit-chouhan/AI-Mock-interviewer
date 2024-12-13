"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div >
      {/* Navbar */}
      <div className="bg-secondary shadow-lg sticky top-0 z-50  border-b border-gray-200">
        <div className="flex p-4 items-center justify-between">
          <Link href={"/dashboard"}>
            <h1 className="text-xl font-bold cursor-pointer text-purple-800">
              AI Mock Interviewer
            </h1>
          </Link>

          {/* Hamburger Menu for Small Screens */}
          <div className="md:hidden">
            <button
              className="text-purple-800 focus:outline-none"
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
                className={`hover:font-bold transition-all cursor-pointer `}
              >
                Dashboard
              </li>
            </Link>

            <Link href={"#features"}>
              <li
                className={`hover:font-bold transition-all cursor-pointer`}
              >
                Features
              </li>
            </Link>

            <Link href={"#howitworks"}>
              <li
                className={`hover:font-bold transition-all cursor-pointer `}
              >
                How it Works?
              </li>
            </Link>
          </ul>
          {/* User Button */}

        </div>

        {/* Collapsible Navbar for Small Screens */}
        {isOpen && (
          <ul className="md:hidden flex flex-col bg-secondary px-4 py-2 space-y-2 text-center">
            <Link href={"/dashboard"}>
              <li
                className={`hover:font-bold transition-all cursor-pointer `}
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </li>
            </Link>

            <Link href={"#features"}>
              <li
                className={`hover:font-bold transition-all cursor-pointer `}
                onClick={() => setIsOpen(false)}
              >
                Features
              </li>
            </Link>

            <Link href={"#howitworks"}>
              <li
                className={`hover:font-bold transition-all cursor-pointer`}
                onClick={() => setIsOpen(false)}
              >
                How it Works?
              </li>
            </Link>
            <li>

            </li>
          </ul>
        )}
      </div>

      {/* Hero Section */}
      <section className="relative text-center py-20 ">
        <div className="absolute inset-0 bg-[url('/robot.jpg')] opacity-80 bg-cover bg-center"></div> {/* Overlay for background opacity */}

        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-purple-800 mb-4">Ace Your Next Interview</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8 font-bold"> {/* Text contrast maintained */}
            Get ready for job interviews with our AI-powered mock interviews. Tailored questions, realistic feedback, and live camera functionality to prepare you like never before.
          </p>
          <Link href={"/dashboard"}>
            <Button>Let's Get Started</Button>
          </Link>
        </div>
      </section>



      {/* Features Section */}
      <section id="features" className="py-16 bg">
        <div className="container mx-auto px-8">
          <h3 className="text-3xl font-bold mb-8 text-center ">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className=" p-10 rounded-lg text-center border shadow-sm transform hover:scale-105 transition bg-secondary ">
              <h4 className="text-2xl font-semibold mb-4 text-purple-800 ">Tailored Interviews</h4>
              <p>Questions are generated based on your job role, experience, and required skills.</p>
            </div>
            <div className=" p-10 rounded-lg text-center border shadow-sm transform hover:scale-105 transition bg-secondary">
              <h4 className="text-2xl font-semibold mb-4 text-purple-800">Realistic Experience</h4>
              <p>Answer questions using live camera, and listen to AI-generated questions for an immersive interview experience.</p>
            </div>
            <div className=" p-10 rounded-lg text-center border shadow-sm transform hover:scale-105 transition bg-secondary">
              <h4 className="text-2xl font-semibold mb-4 text-purple-800">Feedback & Improvement</h4>
              <p>AI analyzes your answers, compares them to ideal responses, and provides actionable feedback for improvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}

      <section id="howitworks" className="py-16">
        <div className="container mx-auto px-8">
          <h3 className="text-3xl font-bold mb-8 text-center ">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className=" p-10 rounded-lg text-center border shadow-sm transform hover:scale-105 transition bg-secondary">
              <h4 className="text-2xl font-semibold mb-4 text-purple-800 ">Set Your Preferences</h4>
              <p>Choose the job role, required skills, and experience level. The AI will tailor the interview questions accordingly.</p>
            </div>
            <div className=" p-10 rounded-lg text-center border shadow-sm transform hover:scale-105 transition bg-secondary">
              <h4 className="text-2xl font-semibold mb-4 text-purple-800">AI Generates Tailored Questions</h4>
              <p>Based on your preferences, the AI creates relevant interview questions.</p>
            </div>
            <div className=" p-10 rounded-lg text-center border shadow-sm transform hover:scale-105 transition bg-secondary">
              <h4 className="text-2xl font-semibold mb-4 text-purple-800">Realistic Interview Experience</h4>
              <p>Use live camera functionality to answer questions on video, simulating a genuine interview..</p>
            </div>
            <div className=" p-10 rounded-lg text-center border shadow-sm transform hover:scale-105 transition bg-secondary">
              <h4 className="text-2xl font-semibold mb-4 text-purple-800">Real-Time Feedback</h4>
              <p>Receive instant feedback on your responses, with a rating and specific areas for improvement.</p>
            </div>
            <div className=" p-10 rounded-lg text-center border shadow-sm transform hover:scale-105 transition bg-secondary">
              <h4 className="text-2xl font-semibold mb-4 text-purple-800">Speech-to-Text and Audio</h4>
              <p>Answer questions verbally with speech-to-text, and listen to audio questions to help focus.</p>
            </div>
            <div className=" p-10 rounded-lg text-center border shadow-sm transform hover:scale-105 transition bg-secondary">
              <h4 className="text-2xl font-semibold mb-4 text-purple-800">Continuous Improvement</h4>
              <p>The AI provides targeted advice to refine your answers and enhance your interview skills.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16  text-center bg-gradient-to-r from-purple-950 to-slate-300 mb-5">
        <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
        <p className="text-lg mb-8 ">Join hundreds of users improving their interview skills with AI.</p>
        <Link href={"/dashboard"} >
          <Button> Start Your Mock Interview</Button>
        </Link>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-200 py-11 text-center ">
        <h1 className="text-xl font-bold">© 2024 AI Mock Interviewer. All rights reserved.</h1>
        <p className="">Contact us: parikshitchouhan1076@gmail.com</p>
        <p className="">Developed & Maintained By:Parikshit Chouhan</p>
      </footer>
    </div>
  );
}
