export default function Footer() {
  return (
    <footer className="py-8 bg-[#06141B] border-t border-[#253745]/30">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <span className="font-mono text-xs text-[#4A5C6A]">
          © {new Date().getFullYear()} Shivangi Chaurasiya
        </span>
        <span className="font-mono text-xs text-[#253745]">
          Aspiring Data Analyst · Uttar Pradesh, India
        </span>
      </div>
    </footer>
  );
}
