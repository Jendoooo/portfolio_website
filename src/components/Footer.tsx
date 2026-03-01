export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-[#162947] text-center">
      <p className="text-blue-300 text-sm">
        © {new Date().getFullYear()} Olajide Ayeola · Built with Next.js &amp; Tailwind CSS
      </p>
    </footer>
  );
}
