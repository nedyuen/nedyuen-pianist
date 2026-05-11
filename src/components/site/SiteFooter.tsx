import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="section-dark border-t border-white/10">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="eyebrow-gold">He lives in London.</p>
            <h3 className="display-md mt-6 max-w-md">
              Music, drawn slowly from silence.
            </h3>
            <div className="gold-rule mt-8" />
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-white/60">Management</p>
            <p className="mt-5 text-sm leading-relaxed text-white/75">
              Harriman Artists<br />
              257 West 52nd Street<br />
              New York, NY 10019
            </p>
            <a href="mailto:booking@harriman-artists.com" className="link-underline mt-4 inline-block text-sm text-white/85">
              booking@harriman-artists.com
            </a>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow text-white/60">Navigate</p>
            <ul className="mt-5 space-y-2.5 text-sm text-white/75">
              <li><Link to="/biography" className="link-underline">Biography</Link></li>
              <li><Link to="/schedule" className="link-underline">Schedule</Link></li>
              <li><Link to="/press" className="link-underline">Press</Link></li>
              <li><Link to="/contact" className="link-underline">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow text-white/60">Follow</p>
            <ul className="mt-5 space-y-2.5 text-sm text-white/75">
              <li><a href="#" className="link-underline">Instagram</a></li>
              <li><a href="#" className="link-underline">YouTube</a></li>
              <li><a href="#" className="link-underline">Spotify</a></li>
              <li><a href="#" className="link-underline">Apple Music</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-[11px] tracking-[0.22em] uppercase text-white/50">
          <span>© {new Date().getFullYear()} He lives in London.</span>
          <span>All rights reserved · Crafted with restraint</span>
        </div>
      </div>
    </footer>
  );
}
