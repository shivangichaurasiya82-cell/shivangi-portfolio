"use client";

import { useEffect, useRef, useState } from "react";
import { BarChart2, Users, FileText, ExternalLink } from "lucide-react";

const projects = [
  {
    icon: <BarChart2 size={22} />,
    title: "Sales Performance Dashboard",
    tools: ["Excel"],
    toolColors: "bg-[#253745] text-[#9BA8AB]",
    category: "Data Visualization",
    desc: "Created an interactive dashboard to analyze monthly sales trends, revenue performance, and product-wise sales distribution.",
    highlights: [
      "Pivot tables for dynamic summarization",
      "Interactive charts and slicers",
      "KPI tracking across product lines",
      "Month-over-month trend analysis",
    ],
    status: "Portfolio Project",
  },
  {
    icon: <Users size={22} />,
    title: "Customer Data Analysis",
    tools: ["SQL"],
    toolColors: "bg-[#253745] text-[#9BA8AB]",
    category: "Data Analysis",
    desc: "Performed data querying and analysis on customer datasets to identify behavior patterns, segment records, and generate meaningful business insights.",
    highlights: [
      "Customer segmentation queries",
      "Behavioral pattern identification",
      "Data cleaning with SQL",
      "Insight reporting from query results",
    ],
    status: "Portfolio Project",
  },
  {
    icon: <FileText size={22} />,
    title: "Business Performance Report",
    tools: ["Excel", "SQL"],
    toolColors: "bg-[#253745] text-[#9BA8AB]",
    category: "Reporting",
    desc: "Analyzed sample business data to track performance indicators, summarize trends, and prepare reports that support informed decision-making.",
    highlights: [
      "Multi-source data consolidation",
      "Performance indicator tracking",
      "Executive summary preparation",
      "Actionable insight documentation",
    ],
    status: "Portfolio Project",
  },
];

export default function Projects() {
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
    <section id="projects" className="py-24 md:py-32 bg-[#06141B]">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="font-mono text-xs text-[#4A5C6A] tracking-widest uppercase">03 — Projects</span>
          <h2 className="font-display text-3xl md:text-4xl text-[#CCD0CF] mt-2">
            Portfolio Work
          </h2>
          <div className="section-divider mt-4" />
          <p className="mt-4 text-[#9BA8AB] text-sm max-w-xl">
            Beginner-level projects showcasing practical application of Excel and SQL in real-world business scenarios.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group relative bg-[#11212D] border border-[#253745] rounded-xl overflow-hidden card-hover transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Top bar */}
              <div className="h-1 bg-gradient-to-r from-[#253745] via-[#4A5C6A] to-[#9BA8AB] opacity-60 group-hover:opacity-100 transition-opacity" />

              <div className="p-6">
                {/* Icon + category */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#253745] rounded-lg text-[#9BA8AB] group-hover:text-[#CCD0CF] transition-colors">
                    {project.icon}
                  </div>
                  <span className="font-mono text-xs text-[#4A5C6A] uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                <h3 className="font-display text-lg text-[#CCD0CF] mb-2 leading-snug">
                  {project.title}
                </h3>

                <p className="text-[#9BA8AB] text-sm leading-relaxed mb-5">
                  {project.desc}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-5">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-xs text-[#4A5C6A]">
                      <span className="mt-1 w-1 h-1 rounded-full bg-[#4A5C6A] flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-[#253745]/60">
                  <div className="flex gap-1.5">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-0.5 bg-[#253745] text-[#9BA8AB] text-xs rounded font-mono"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <span className="flex items-center gap-1 text-xs text-[#253745] group-hover:text-[#4A5C6A] transition-colors cursor-default">
                    <ExternalLink size={10} />
                    {project.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p
          className={`mt-8 text-center text-[#4A5C6A] text-xs font-mono transition-all duration-700 delay-500 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          — More projects coming soon as skills develop —
        </p>
      </div>
    </section>
  );
}
