"use client";

import { useEffect, useRef, useState } from "react";

const technicalSkills = [
  { name: "Microsoft Excel", level: 70, tag: "Intermediate" },
  { name: "SQL", level: 65, tag: "Learning" },
  { name: "MS Office Suite", level: 80, tag: "Proficient" },
  { name: "Data Analysis", level: 60, tag: "Fundamentals" },
  { name: "Data Organization", level: 72, tag: "Practised" },
  { name: "Report Preparation", level: 68, tag: "Practised" },
  { name: "Data Cleaning", level: 55, tag: "Basics" },
];

const softSkills = [
  "Communication",
  "Problem Solving",
  "Analytical Thinking",
  "Attention to Detail",
  "Time Management",
  "Continuous Learning",
];

const certifications = [
  {
    title: "SQL Certification",
    desc: "Database fundamentals, data retrieval, query writing, and SQL operations.",
    badge: "SQL",
  },
  {
    title: "ADCA",
    badge: "CS",
    desc: "Advanced Diploma in Computer Applications — MS Office, internet technologies, and digital productivity.",
  },
];

function SkillBar({ name, level, tag, animate }: { name: string; level: number; tag: string; animate: boolean }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[#9BA8AB] text-sm font-body">{name}</span>
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-[#4A5C6A]">{tag}</span>
          <span className="font-mono text-xs text-[#4A5C6A]">{level}%</span>
        </div>
      </div>
      <div className="h-1 bg-[#253745] rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#4A5C6A] to-[#9BA8AB] rounded-full transition-all duration-1000 ease-out"
          style={{ width: animate ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 md:py-32 bg-[#11212D]/40">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="font-mono text-xs text-[#4A5C6A] tracking-widest uppercase">02 — Skills</span>
          <h2 className="font-display text-3xl md:text-4xl text-[#CCD0CF] mt-2">
            Tools & Capabilities
          </h2>
          <div className="section-divider mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div
            className={`transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h3 className="text-[#CCD0CF] font-medium text-sm uppercase tracking-widest mb-6 font-mono">
              Technical Skills
            </h3>
            <div className="space-y-5">
              {technicalSkills.map((skill) => (
                <SkillBar key={skill.name} {...skill} animate={visible} />
              ))}
            </div>
          </div>

          {/* Right column */}
          <div
            className={`space-y-10 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Soft Skills */}
            <div>
              <h3 className="text-[#CCD0CF] font-medium text-sm uppercase tracking-widest mb-6 font-mono">
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-[#253745]/60 border border-[#253745] text-[#9BA8AB] text-sm rounded-full hover:border-[#4A5C6A] hover:text-[#CCD0CF] transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-[#CCD0CF] font-medium text-sm uppercase tracking-widest mb-6 font-mono">
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="flex gap-4 p-4 bg-[#11212D] border border-[#253745] rounded-lg card-hover"
                  >
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[#253745] rounded font-mono text-xs text-[#9BA8AB]">
                      {cert.badge}
                    </div>
                    <div>
                      <h4 className="text-[#CCD0CF] font-medium text-sm mb-1">{cert.title}</h4>
                      <p className="text-[#4A5C6A] text-xs leading-relaxed">{cert.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div>
              <h3 className="text-[#CCD0CF] font-medium text-sm uppercase tracking-widest mb-4 font-mono">
                Interests
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "📊 Data Analytics",
                  "💼 Business Studies",
                  "📚 Reading",
                  "🖥 New Technologies",
                  "📈 Business Insights",
                  "🚀 Self Development",
                ].map((item) => (
                  <div
                    key={item}
                    className="px-3 py-2 bg-[#06141B]/60 border border-[#253745]/50 rounded text-[#9BA8AB] text-xs"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
