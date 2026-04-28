import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-emerald-950/95 pb-10 pt-12 text-emerald-100/80">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-200/70">LeafDiagnose AI</p>
          <p className="mt-3 text-lg font-semibold text-white">Modern AI plant health diagnostics.</p>
          <p className="mt-3 text-sm text-emerald-100/70">
            Trusted by students, researchers, and growers to detect plant diseases with confidence.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Platform</p>
          <ul className="mt-4 space-y-3 text-sm text-emerald-100/70">
            <li>
              <Link to="/#detect" className="transition-colors hover:text-white">AI Detection</Link>
            </li>
            <li>
              <Link to="/history" className="transition-colors hover:text-white">Scan History</Link>
            </li>
            <li>
              <Link to="#" className="transition-colors hover:text-white">Security & Privacy</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-emerald-100/70">
            <li>
              <a href="mailto:support@leafdiagnose.ai" className="transition-colors hover:text-white">support@leafdiagnose.ai</a>
            </li>
            <li>University PFE Demo</li>
            <li>LeafDiagnose AI &copy; 2026</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
