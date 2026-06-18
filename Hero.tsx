"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, ArrowDown, Github, Linkedin } from "lucide-react";

const TYPING_WORDS = [
  "Data Analyst",
  "Problem Solver",
  "Excel Enthusiast",
  "SQL Learner",
  "Insight Seeker",
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const word = TYPING_WORDS[wordIndex];
    if (!deleting) {
      if (displayed.length < word.length) {
        timeout.current = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
      } else {
        timeout.current = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
      } else {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % TYPING_WORDS.length);
      }
    }
    return () => { if (timeout.current) clearTimeout(timeout.current); };
  }, [displayed, deleting, wordIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg pt-20"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#253745]/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#4A5C6A]/8 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#11212D]/50 blur-3xl" />
      </div>

      {/* Decorative corner lines */}
      <div className="absolute top-24 left-8 w-12 h-12 border-l border-t border-[#253745]/60" />
      <div className="absolute bottom-24 right-8 w-12 h-12 border-r border-b border-[#253745]/60" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <div
          className={`inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[#253745] bg-[#11212D]/60 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#9BA8AB] animate-pulse" />
          <span className="font-mono text-xs text-[#9BA8AB] tracking-widest uppercase">
            Open to Opportunities
          </span>
        </div>

        {/* Name */}
        <h1
          className={`font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-[#CCD0CF] leading-[1.05] mb-4 transition-all duration-700 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Shivangi
          <br />
          <span className="gradient-text">Chaurasiya</span>
        </h1>

        {/* Typewriter */}
        <div
          className={`h-10 flex items-center justify-center mb-6 transition-all duration-700 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="font-mono text-lg md:text-xl text-[#9BA8AB]">
            Aspiring <span className="text-[#CCD0CF]">{displayed}</span>
            <span className="cursor" />
          </span>
        </div>

        {/* Tagline */}
        <p
          className={`max-w-2xl mx-auto text-[#9BA8AB] text-base md:text-lg leading-relaxed mb-8 transition-all duration-700 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Turning data into meaningful insights through analysis,
          problem-solving, and continuous learning. Passionate about leveraging{" "}
          <span className="text-[#CCD0CF]">Excel</span> and{" "}
          <span className="text-[#CCD0CF]">SQL</span> to understand trends and
          support decision-making.
        </p>

        {/* Location */}
        <div
          className={`flex items-center justify-center gap-1.5 text-[#4A5C6A] text-sm mb-10 transition-all duration-700 delay-400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <MapPin size={14} />
          <span>Uttar Pradesh, India</span>
        </div>

        {/* CTAs */}
        <div
          className={`flex items-center justify-center flex-wrap gap-4 mb-12 transition-all duration-700 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-[#253745] hover:bg-[#4A5C6A] text-[#CCD0CF] text-sm font-body font-medium rounded transition-all duration-300 hover:shadow-lg hover:shadow-[#253745]/30"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-[#4A5C6A] hover:border-[#9BA8AB] text-[#9BA8AB] hover:text-[#CCD0CF] text-sm font-body rounded transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div
          className={`flex items-center justify-center gap-4 transition-all duration-700 delay-600 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center border border-[#253745] rounded hover:border-[#4A5C6A] text-[#4A5C6A] hover:text-[#9BA8AB] transition-all duration-300"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a> */}
          <a
            href="https://linkedin.com/in/shivangi-chaurasiya-06470b36a"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center border border-[#253745] rounded hover:border-[#4A5C6A] text-[#4A5C6A] hover:text-[#9BA8AB] transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#4A5C6A] hover:text-[#9BA8AB] transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <span className="font-mono text-xs tracking-widest">scroll</span>
        <ArrowDown size={14} />
      </a>
    </section>
  );
}
