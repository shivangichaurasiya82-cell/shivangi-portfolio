"use client";

import { useEffect, useRef, useState } from "react";
import { GraduationCap, Award, MapPin } from "lucide-react";

export default function Education() {
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
    <section id="education" className="py-24 md:py-32 bg-[#11212D]/40">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className={`mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="font-mono text-xs text-[#4A5C6A] tracking-widest uppercase">04 — Education</span>
          <h2 className="font-display text-3xl md:text-4xl text-[#CCD0CF] mt-2">Academic Background</h2>
          <div className="section-divider mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Card */}
          <div className={`transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="p-6 bg-[#11212D] border border-[#253745] rounded-xl card-hover h-full">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-[#253745] rounded-xl text-[#9BA8AB]">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <span className="font-mono text-xs text-[#4A5C6A] uppercase tracking-wider">Degree</span>
                  <h3 className="text-[#CCD0CF] font-display text-xl mt-0.5">Bachelor of Commerce</h3>
                  <p className="text-[#9BA8AB] text-sm">(B.Com)</p>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2 text-[#9BA8AB]">
                  <span className="text-[#4A5C6A] mt-0.5"><MapPin size={14} /></span>
                  <div>
                    <p className="text-[#CCD0CF] font-medium">Girls Government Degree College</p>
                    <p className="text-[#4A5C6A] text-xs mt-0.5">Affiliated with Maharaja Suheldev State University</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mt-6 pt-4 border-t border-[#253745]/60">
                  {[
                    { label: "Grad Year", value: "2026" },
                    { label: "Score", value: "68%" },
                    { label: "CGPA", value: "7+" },
                  ].map((item) => (
                    <div key={item.label} className="text-center p-3 bg-[#06141B]/50 rounded-lg">
                      <p className="font-display text-xl text-[#CCD0CF]">{item.value}</p>
                      <p className="font-mono text-xs text-[#4A5C6A] mt-1 uppercase">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right column: Achievement + Career Objective */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Achievement */}
            <div className="p-6 bg-[#11212D] border border-[#253745] rounded-xl card-hover">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#253745] rounded-xl text-[#9BA8AB]">
                  <Award size={22} />
                </div>
                <div>
                  <span className="font-mono text-xs text-[#4A5C6A] uppercase tracking-wider">Achievement</span>
                  <h3 className="text-[#CCD0CF] font-medium mt-0.5">Scholarship Recipient</h3>
                  <p className="text-[#9BA8AB] text-sm mt-2 leading-relaxed">
                    Recognized for academic performance and dedication to studies through scholarship support during higher education.
                  </p>
                </div>
              </div>
            </div>

            {/* Career Objective */}
            <div className="p-6 bg-[#11212D] border border-[#253745] rounded-xl">
              <span className="font-mono text-xs text-[#4A5C6A] uppercase tracking-wider">Career Objective</span>
              <p className="text-[#9BA8AB] text-sm leading-relaxed mt-3">
                To begin my professional journey as a{" "}
                <span className="text-[#CCD0CF]">Data Analyst</span> and apply my analytical, technical, and
                problem-solving skills to support data-driven decision-making. I aim to continuously learn new tools
                and technologies while contributing to organizational growth through meaningful insights and effective reporting.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Data Analysis", "SQL", "Excel", "Business Intelligence", "Reporting"].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 bg-[#253745]/60 border border-[#253745] text-[#4A5C6A] text-xs rounded-full font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
