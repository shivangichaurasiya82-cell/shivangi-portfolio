"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const copy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-[#06141B] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#253745] to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#11212D]/30 blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span className="font-mono text-xs text-[#4A5C6A] tracking-widest uppercase">
            05 — Contact
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-[#CCD0CF] mt-2">
            Let us Connect
          </h2>
          <div className="section-divider mt-4" />
          <p className="mt-4 text-[#9BA8AB] text-sm max-w-lg">
            Open to entry-level Data Analyst roles, internships, and learning
            opportunities. Feel free to reach out!
          </p>
        </div>

        <div className="max-w-2xl">
          {/* Contact Info */}
          <div
            className={`space-y-4 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {[
              {
                icon: <Mail size={18} />,
                label: "Email",
                value: "shivangichaurasiya82@gmail.com",
                href: "mailto:shivangichaurasiya82@gmail.com",
                copyVal: "shivangichaurasiya82@gmail.com",
              },
              {
                icon: <Phone size={18} />,
                label: "Phone",
                value: "+91 6390826108",
                href: "tel:+916390826108",
                copyVal: "+916390826108",
              },
              {
                icon: <MapPin size={18} />,
                label: "Location",
                value: "Uttar Pradesh, India",
                href: null,
                copyVal: null,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 p-4 bg-[#11212D] border border-[#253745] rounded-xl card-hover group"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[#253745] rounded-lg text-[#9BA8AB] group-hover:text-[#CCD0CF] transition-colors flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-mono text-xs text-[#4A5C6A] uppercase tracking-wider">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-[#9BA8AB] hover:text-[#CCD0CF] text-sm transition-colors truncate block mt-0.5"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[#9BA8AB] text-sm mt-0.5">
                      {item.value}
                    </p>
                  )}
                </div>
                {item.copyVal && (
                  <button
                    onClick={() => copy(item.copyVal!, item.label)}
                    className="text-xs font-mono text-[#4A5C6A] hover:text-[#9BA8AB] transition-colors flex-shrink-0 px-2 py-1 border border-[#253745] rounded"
                  >
                    {copied === item.label ? "Copied!" : "Copy"}
                  </button>
                )}
              </div>
            ))}

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {[
                {
                  icon: <Github size={18} />,
                  label: "GitHub",
                  href: "https://github.com/shivangichaurasiya82-cell",
                },
                {
                  icon: <Linkedin size={18} />,
                  label: "LinkedIn",
                  href: "https://linkedin.com/in/shivangi-chaurasiya-06470b36a",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-[#11212D] border border-[#253745] rounded-xl text-[#9BA8AB] hover:text-[#CCD0CF] hover:border-[#4A5C6A] transition-all duration-300 text-sm"
                >
                  {social.icon}
                  <span className="font-body">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Message form */}
          {/* <div className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="p-6 bg-[#11212D] border border-[#253745] rounded-xl">
              <h3 className="text-[#CCD0CF] font-medium text-sm mb-5 font-mono uppercase tracking-wider">Send a Message</h3>
              <div className="space-y-4">
                <div>
                  <label className="block font-mono text-xs text-[#4A5C6A] uppercase tracking-wider mb-1.5">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-[#06141B] border border-[#253745] rounded-lg px-4 py-2.5 text-[#9BA8AB] text-sm placeholder:text-[#253745] focus:outline-none focus:border-[#4A5C6A] transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-[#4A5C6A] uppercase tracking-wider mb-1.5">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-[#06141B] border border-[#253745] rounded-lg px-4 py-2.5 text-[#9BA8AB] text-sm placeholder:text-[#253745] focus:outline-none focus:border-[#4A5C6A] transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-[#4A5C6A] uppercase tracking-wider mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Your message..."
                    className="w-full bg-[#06141B] border border-[#253745] rounded-lg px-4 py-2.5 text-[#9BA8AB] text-sm placeholder:text-[#253745] focus:outline-none focus:border-[#4A5C6A] transition-colors resize-none"
                  />
                </div>
                <a
                  href="mailto:shivangichaurasiya82@gmail.com"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#253745] hover:bg-[#4A5C6A] text-[#CCD0CF] text-sm font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#253745]/30"
                >
                  <Send size={15} />
                  Send via Email
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
