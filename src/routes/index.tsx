import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { supabase } from "@/integrations/supabase/client";
import heroStage from "@/assets/hero-stage.jpg";
import handsKeys from "@/assets/hands-keys.jpg";
import concertHall from "@/assets/concert-hall.jpg";
import portraitMain from "@/assets/portrait-main.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import { Play } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ned Yuen — Concert Pianist" },
      { name: "description", content: "Ned Yuen, internationally acclaimed classical concert pianist. Performances, recordings, and tour dates." },
      { property: "og:title", content: "Ned Yuen — Concert Pianist" },
      { property: "og:description", content: "Internationally acclaimed classical concert pianist." },
    ],
  }),
  component: HomePage,
});

type ConcertEvent = {
  id: string;
  event_date: string;
  event_name: string;
  venue: string;
  performance_piece: string;
};

function formatDate(iso: string) {
  const d = new Date(iso + "T00:00:00");
  const day = d.toLocaleDateString("en-GB", { day: "2-digit" });
  const month = d.toLocaleDateString("en-GB", { month: "short" });
  const year = d.getFullYear();
  return `${day} ${month} ${year}`;
}

function HomePage() {
  const [events, setEvents] = useState<ConcertEvent[]>([]);

  useEffect(() => {
    supabase
      .from("concert_events")
      .select("*")
      .order("event_date", { ascending: false })
      .limit(4)
      .then(({ data }) => setEvents((data as ConcertEvent[]) ?? []));
  }, []);

  return (
    <PageShell overlay>
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img
          src={heroStage}
          alt="Grand piano on a concert hall stage under a single dramatic spotlight"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/85" />
        <div className="absolute inset-0 vignette" />

        <div className="relative z-10 h-full mx-auto max-w-[1600px] px-6 md:px-12 flex flex-col justify-end pb-24 md:pb-32 text-[color:var(--ivory)]">
          <p className="eyebrow-gold fade-in">Classical Pianist</p>
          <h1 className="display-xl mt-6 fade-up fade-delay-1">
            Ned<br />
            <span className="italic font-light">Yuen</span>
          </h1>
          <p className="mt-10 max-w-xl text-base md:text-lg font-light leading-relaxed text-white/85 fade-up fade-delay-2">
            Classical pianist performing solo, concerto, and chamber repertoire across the UK and internationally.
          </p>

          <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 fade-up fade-delay-3">
            <Link to="/schedule" className="link-underline text-[11px] tracking-[0.28em] uppercase">
              View 2026 Season
            </Link>
            <Link to="/biography" className="link-underline text-[11px] tracking-[0.28em] uppercase text-white/70">
              Biography
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 right-6 md:right-12 z-10 text-[10px] tracking-[0.3em] uppercase text-white/60 fade-in fade-delay-4">
          Scroll
        </div>
      </section>

      {/* STATEMENT */}
      <section className="py-32 md:py-48">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 grid grid-cols-12 gap-8 md:gap-16">
          <div className="col-span-12 md:col-span-3">
            <p className="eyebrow-gold">Artistic Statement</p>
            <div className="gold-rule mt-6" />
          </div>
          <div className="col-span-12 md:col-span-9">
            <p className="quote-xl max-w-4xl">
              I play to bring the score to life as honestly as I can — listening closely,
              and letting the music speak on its own terms.
            </p>
            <p className="mt-10 text-sm tracking-[0.28em] uppercase text-muted-foreground">— Ned Yuen</p>
          </div>
        </div>
      </section>

      {/* FEATURED VIDEO */}
      <section className="section-dark py-28 md:py-40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="flex items-end justify-between mb-12 md:mb-16">
            <div>
              <p className="eyebrow-gold">Featured Performance</p>
              <h2 className="display-md mt-6 max-w-2xl">
                Beethoven · Sonata No. 32 in C minor, Op. 111
              </h2>
            </div>
            <Link to="/videos" className="hidden md:inline-block link-underline text-[11px] tracking-[0.28em] uppercase text-white/70">
              All Performances
            </Link>
          </div>

          <div className="relative group cursor-pointer overflow-hidden">
            <img
              src={concertHall}
              alt="Featured performance still"
              loading="lazy"
              width={1920}
              height={1080}
              className="w-full aspect-[16/9] object-cover transition-transform duration-[1800ms] group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-700" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-white/40 flex items-center justify-center backdrop-blur-sm bg-white/5 group-hover:bg-[color:var(--gold)] group-hover:border-[color:var(--gold)] transition-all duration-700">
                <Play className="w-7 h-7 md:w-10 md:h-10 text-white group-hover:text-[color:var(--onyx)] translate-x-[2px]" strokeWidth={1} />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white">
              <p className="text-[10px] tracking-[0.3em] uppercase opacity-70">Carnegie Hall · New York</p>
              <p className="font-serif italic text-xl md:text-2xl mt-2">Recorded live, March 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING */}
      <section className="py-28 md:py-40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 md:col-span-4">
              <p className="eyebrow-gold">Latest Events</p>
              <h2 className="display-md mt-6">The 2026 Season</h2>
            </div>
            <div className="col-span-12 md:col-span-7 md:col-start-6 flex items-end">
              <p className="body-lg">
                Recent and upcoming concerts, recitals, and festival appearances.
              </p>
            </div>
          </div>

          <ul className="border-t border-border">
            {events.map((c) => (
              <li
                key={c.id}
                className="grid grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 border-b border-border group hover:bg-[color:var(--secondary)] transition-colors duration-700 -mx-6 md:-mx-12 px-6 md:px-12"
              >
                <div className="col-span-12 md:col-span-2 text-[11px] tracking-[0.25em] uppercase text-muted-foreground pt-2">{formatDate(c.event_date)}</div>
                <div className="col-span-7 md:col-span-3"><h3 className="font-serif text-2xl md:text-3xl">{c.event_name}</h3></div>
                <div className="col-span-12 md:col-span-4 text-sm leading-relaxed">{c.venue}</div>
                <div className="col-span-5 md:col-span-3 text-sm italic text-muted-foreground text-right md:text-left">{c.performance_piece}</div>
              </li>
            ))}
          </ul>

          <div className="mt-14 flex justify-center">
            <Link to="/schedule" className="link-underline text-[11px] tracking-[0.28em] uppercase">
              View Complete Schedule
            </Link>
          </div>
        </div>
      </section>

      {/* PRESS QUOTE */}
      <section className="py-32 md:py-48 bg-[color:var(--secondary)]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 text-center">
          <p className="eyebrow-gold">Press</p>
          <blockquote className="quote-xl mt-12 max-w-4xl mx-auto">
            “A pianist of unusual imagination and rare intelligence — Vance plays as though
            he is uncovering the music for the first time, and inviting us to do the same.”
          </blockquote>
          <p className="mt-10 text-sm tracking-[0.28em] uppercase text-muted-foreground">
            The Times · London
          </p>
          <div className="gold-rule mt-12 mx-auto" />
          <div className="mt-10">
            <Link to="/press" className="link-underline text-[11px] tracking-[0.28em] uppercase">
              Press & Recognition
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-28 md:py-40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="eyebrow-gold">Gallery</p>
              <h2 className="display-md mt-6">Selected images</h2>
            </div>
            <Link to="/gallery" className="link-underline text-[11px] tracking-[0.28em] uppercase">
              View Gallery
            </Link>
          </div>

          <div className="grid grid-cols-12 gap-3 md:gap-5">
            <div className="col-span-12 md:col-span-7 overflow-hidden">
              <img src={gallery3} alt="Open grand piano with warm light" loading="lazy" width={1600} height={1100}
                className="w-full h-[420px] md:h-[600px] object-cover transition-transform duration-[2000ms] hover:scale-[1.04]" />
            </div>
            <div className="col-span-6 md:col-span-5 overflow-hidden">
              <img src={gallery1} alt="Pianist on stage under twin spotlights" loading="lazy" width={1200} height={1600}
                className="w-full h-[420px] md:h-[600px] object-cover transition-transform duration-[2000ms] hover:scale-[1.04]" />
            </div>
            <div className="col-span-6 md:col-span-4 overflow-hidden">
              <img src={handsKeys} alt="Pianist hands on keys" loading="lazy" width={1600} height={1200}
                className="w-full h-[260px] md:h-[360px] object-cover transition-transform duration-[2000ms] hover:scale-[1.04]" />
            </div>
            <div className="col-span-6 md:col-span-4 overflow-hidden">
              <img src={portraitMain} alt="Portrait at the piano" loading="lazy" width={1280} height={1600}
                className="w-full h-[260px] md:h-[360px] object-cover transition-transform duration-[2000ms] hover:scale-[1.04]" />
            </div>
            <div className="col-span-12 md:col-span-4 overflow-hidden">
              <img src={gallery5} alt="Sheet music under a reading light" loading="lazy" width={1200} height={1400}
                className="w-full h-[260px] md:h-[360px] object-cover transition-transform duration-[2000ms] hover:scale-[1.04]" />
            </div>
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="section-dark py-28 md:py-40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <p className="eyebrow-gold">Distinctions</p>
          <h2 className="display-md mt-6 max-w-2xl">Awards and prizes.</h2>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { year: "2024", title: "Gramophone Award", sub: "Solo Recording of the Year" },
              { year: "2022", title: "Avery Fisher Prize", sub: "Lincoln Center, New York" },
              { year: "2019", title: "Leeds Competition", sub: "First Prize · Gold Medal" },
              { year: "2017", title: "Borletti-Buitoni Trust", sub: "Fellowship Award" },
            ].map((a) => (
              <div key={a.title}>
                <p className="font-serif text-5xl md:text-6xl text-[color:var(--gold)]">{a.year}</p>
                <div className="mt-5 h-px w-12 bg-white/40" />
                <h3 className="mt-6 font-serif text-2xl">{a.title}</h3>
                <p className="mt-2 text-sm text-white/60">{a.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
