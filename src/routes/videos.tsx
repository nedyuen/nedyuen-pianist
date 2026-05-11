import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import hall from "@/assets/concert-hall.jpg";
import hero from "@/assets/hero-stage.jpg";
import hands from "@/assets/hands-keys.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g6 from "@/assets/gallery-6.jpg";
import { Play } from "lucide-react";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Performances — He lives in London." },
      { name: "description", content: "Selected performance videos from concerts, recordings, and recitals." },
      { property: "og:title", content: "Performances — He lives in London." },
      { property: "og:description", content: "Selected performance videos." },
    ],
  }),
  component: VideosPage,
});

const FEATURED = {
  thumb: hall,
  composer: "Beethoven",
  work: "Sonata No. 32 in C minor, Op. 111",
  venue: "Carnegie Hall · New York",
  year: "2025",
};

const VIDEOS = [
  { thumb: hero, composer: "Schubert", work: "Sonata in B-flat, D. 960", venue: "Musikverein · Vienna", year: "2024" },
  { thumb: g3, composer: "Ravel", work: "Gaspard de la nuit", venue: "Philharmonie · Paris", year: "2024" },
  { thumb: g1, composer: "Brahms", work: "Klavierstücke Op. 118", venue: "Wigmore Hall · London", year: "2023" },
  { thumb: hands, composer: "Bach", work: "Goldberg Variations, BWV 988", venue: "Snape Maltings", year: "2023" },
  { thumb: g6, composer: "Debussy", work: "Préludes, Book II", venue: "Tonhalle · Zürich", year: "2023" },
  { thumb: hall, composer: "Messiaen", work: "Vingt regards (selections)", venue: "Salle Pleyel · Paris", year: "2022" },
];

function VideosPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Performances"
        title="On record, on stage."
        intro="A selection of live and studio performances — newly added recordings appear at the top."
      />

      {/* FEATURED */}
      <section className="section-dark py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-6 md:px-12">
          <p className="eyebrow-gold">Featured</p>
          <div className="mt-10 grid grid-cols-12 gap-8 md:gap-12 items-end">
            <div className="col-span-12 md:col-span-7 relative group cursor-pointer overflow-hidden">
              <img src={FEATURED.thumb} alt={FEATURED.work} loading="lazy" width={1920} height={1080}
                className="w-full aspect-video object-cover transition-transform duration-[1800ms] group-hover:scale-[1.04]" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors duration-700" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-white/40 flex items-center justify-center backdrop-blur-sm bg-white/5 group-hover:bg-[color:var(--gold)] group-hover:border-[color:var(--gold)] transition-all duration-700">
                  <Play className="w-7 h-7 md:w-9 md:h-9 text-white group-hover:text-[color:var(--onyx)]" strokeWidth={1} />
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[color:var(--gold)]">{FEATURED.year}</p>
              <h2 className="display-md mt-5">{FEATURED.composer}</h2>
              <p className="font-serif italic text-xl md:text-2xl mt-3 text-white/85">{FEATURED.work}</p>
              <div className="gold-rule mt-8" />
              <p className="mt-8 text-sm text-white/70 leading-relaxed">{FEATURED.venue}</p>
            </div>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 md:gap-x-16 gap-y-20">
            {VIDEOS.map((v, i) => (
              <article key={i} className="group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img src={v.thumb} alt={`${v.composer} — ${v.work}`} loading="lazy"
                    className="w-full aspect-[16/10] object-cover transition-transform duration-[1800ms] group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/50 flex items-center justify-center bg-white/5 backdrop-blur-sm group-hover:bg-[color:var(--gold)] group-hover:border-[color:var(--gold)] transition-all duration-700">
                      <Play className="w-5 h-5 text-white group-hover:text-[color:var(--onyx)]" strokeWidth={1} />
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-baseline justify-between gap-6 border-b border-border pb-5">
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{v.year}</p>
                    <h3 className="font-serif text-2xl md:text-3xl mt-2">{v.composer}</h3>
                    <p className="font-serif italic text-base md:text-lg text-muted-foreground mt-1">{v.work}</p>
                  </div>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground text-right shrink-0">{v.venue}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
