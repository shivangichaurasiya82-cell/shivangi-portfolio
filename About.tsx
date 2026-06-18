"use client";

import { useEffect, useRef, useState } from "react";
import { Target, TrendingUp, BookOpen } from "lucide-react";

const highlights = [
  {
    icon: <Target size={18} />,
    label: "Goal-Oriented",
    desc: "Focused on becoming a Data Analyst who drives business value through insights.",
  },
  {
    icon: <TrendingUp size={18} />,
    label: "Data-Driven",
    desc: "Passionate about identifying patterns and transforming raw data into decisions.",
  },
  {
    icon: <BookOpen size={18} />,
    label: "Lifelong Learner",
    desc: "Continuously seeking new tools and techniques in the evolving data landscape.",
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 md:py-32 bg-[#06141B]">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="font-mono text-xs text-[#4A5C6A] tracking-widest uppercase">01 — About</span>
          <h2 className="font-display text-3xl md:text-4xl text-[#CCD0CF] mt-2">
            The Person Behind the Data
          </h2>
          <div className="section-divider mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div
            className={`space-y-5 transition-all duration-700 delay-150 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-[#9BA8AB] leading-relaxed text-base">
              I am a{" "}
              <span className="text-[#CCD0CF] font-medium">B.Com graduate</span>{" "}
              with a growing interest in Data Analytics and Business Intelligence.
              My academic background has given me a strong understanding of business
              concepts, while my technical skills in{" "}
              <span className="text-[#CCD0CF] font-medium">Excel, SQL, and MS Office</span>{" "}
              have helped me explore the world of data-driven decision-making.
            </p>
            <p className="text-[#9BA8AB] leading-relaxed text-base">
              I enjoy working with data, identifying patterns, and transforming
              information into meaningful insights. As a lifelong learner, I
              continuously seek opportunities to enhance my analytical abilities
              and stay updated with emerging technologies in the data field.
            </p>
            <p className="text-[#9BA8AB] leading-relaxed text-base">
              My goal is to build a successful career in Data Analytics, where I
              can contribute to solving business problems through data-driven
              solutions while continuing to develop my technical and professional
              skills.
            </p>

            {/* Achievement callout */}
            <div className="mt-6 p-4 border-l-2 border-[#4A5C6A] bg-[#11212D]/50 rounded-r">
              <p className="text-[#CCD0CF] text-sm font-medium">🏆 Scholarship Recipient</p>
              <p className="text-[#9BA8AB] text-sm mt-1">
                Recognized for academic performance and dedication during higher education.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div
            className={`space-y-4 transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {highlights.map((item) => (
              <div
                key={item.label}
                className="p-5 bg-[#11212D] border border-[#253745] rounded-lg card-hover group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-[#9BA8AB] mt-0.5 group-hover:text-[#CCD0CF] transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-[#CCD0CF] font-medium text-sm mb-1">{item.label}</h3>
                    <p className="text-[#4A5C6A] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-3 mt-2">
              {[
                { value: "B.Com", label: "Degree" },
                { value: "2026", label: "Grad Year" },
                { value: "68%", label: "Academic Score" },
                { value: "7+", label: "CGPA" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 bg-[#11212D] border border-[#253745] rounded-lg text-center"
                >
                  <p className="font-display text-2xl text-[#CCD0CF] font-semibold">
                    {stat.value}
                  </p>
                  <p className="font-mono text-xs text-[#4A5C6A] mt-1 uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
