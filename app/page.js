"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  const handleStartInterview = () => {
    router.push("/dashboard");
  };

  return (
    <div >
      {/* Navbar */}
      <div className="flex p-4 items-center bg-black shadow-sm sticky top-0 z-50">
  {/* Left Side: Title */}
  <h1 className="text-xl font-bold cursor-pointer text-white">AI Mock Interviewer</h1>

  {/* Center: Navigation Links */}
  <ul className="flex-grow flex justify-center gap-6">
    <Link href="/dashboard">
      <li className="hover:text-yellow-400 hover:font-bold transition-all cursor-pointer text-white">
        Dashboard
      </li>
    </Link>
    <li className="hover:text-yellow-400 hover:font-bold transition-all cursor-pointer text-white">
      How it Works?
    </li>
  </ul>
</div>

      {/* Hero Section */}
      <section className="text-center py-20">
        <h2 className="text-4xl font-bold text-purple-800 mb-4">Ace Your Next Interview</h2>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          Get ready for job interviews with our AI-powered mock interviews. Tailored questions, realistic feedback, and live camera functionality to prepare you like never before.
        </p>
        <Link href={"/dashboard"} >
          <Button> Lets Get Started</Button>
        </Link>

      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="container mx-auto px-8">
          <h3 className="text-3xl font-bold mb-8 text-center ">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className=" p-10 rounded-lg text-center border shadow-sm transform hover:scale-105 transition ">
              <h4 className="text-2xl font-semibold mb-4 text-purple-800 ">Tailored Interviews</h4>
              <p>Questions are generated based on your job role, experience, and required skills.</p>
            </div>
            <div className=" p-10 rounded-lg text-center border shadow-sm transform hover:scale-105 transition">
              <h4 className="text-2xl font-semibold mb-4 text-purple-800">Realistic Experience</h4>
              <p>Answer questions using live camera, and listen to AI-generated questions for an immersive interview experience.</p>
            </div>
            <div className=" p-10 rounded-lg text-center border shadow-sm transform hover:scale-105 transition">
              <h4 className="text-2xl font-semibold mb-4 text-purple-800">Feedback & Improvement</h4>
              <p>AI analyzes your answers, compares them to ideal responses, and provides actionable feedback for improvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}

      <section id="how-it-works" className="py-16">
        <div className="container mx-auto px-8">
          <h3 className="text-3xl font-bold mb-8 text-center ">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className=" p-10 rounded-lg text-center border shadow-sm transform hover:scale-105 transition ">
              <h4 className="text-2xl font-semibold mb-4 text-purple-800 ">Set Your Preferences</h4>
              <p>Choose the job role, required skills, and experience level. The AI will tailor the interview questions accordingly.</p>
            </div>
            <div className=" p-10 rounded-lg text-center border shadow-sm transform hover:scale-105 transition">
              <h4 className="text-2xl font-semibold mb-4 text-purple-800">AI Generates Tailored Questions</h4>
              <p>Based on your preferences, the AI creates relevant interview questions.</p>
            </div>
            <div className=" p-10 rounded-lg text-center border shadow-sm transform hover:scale-105 transition">
              <h4 className="text-2xl font-semibold mb-4 text-purple-800">Realistic Interview Experience</h4>
              <p>Use live camera functionality to answer questions on video, simulating a genuine interview..</p>
            </div>
            <div className=" p-10 rounded-lg text-center border shadow-sm transform hover:scale-105 transition">
              <h4 className="text-2xl font-semibold mb-4 text-purple-800">Real-Time Feedback</h4>
              <p>Receive instant feedback on your responses, with a rating and specific areas for improvement.</p>
            </div>
            <div className=" p-10 rounded-lg text-center border shadow-sm transform hover:scale-105 transition">
              <h4 className="text-2xl font-semibold mb-4 text-purple-800">Speech-to-Text and Audio</h4>
              <p>Answer questions verbally with speech-to-text, and listen to audio questions to help focus.</p>
            </div>
            <div className=" p-10 rounded-lg text-center border shadow-sm transform hover:scale-105 transition">
              <h4 className="text-2xl font-semibold mb-4 text-purple-800">Continuous Improvement</h4>
              <p>The AI provides targeted advice to refine your answers and enhance your interview skills.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16  text-center bg">
        <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
        <p className="text-lg mb-8 ">Join hundreds of users improving their interview skills with AI.</p>
        <Link href={"/dashboard"} >
          <Button> Start Your Mock Interview</Button>
        </Link>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black py-8 min-h-[150px] text-center text-white">
        <p>© 2024 AI Mock Interviewer. All rights reserved.</p>
        <p>Contact us: support@aimockinterviewer.com</p>
      </footer>
    </div>
  );
}
