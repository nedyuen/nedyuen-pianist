import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { X } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import hall from "@/assets/concert-hall.jpg";
import hands from "@/assets/hands-keys.jpg";
import hero from "@/assets/hero-stage.jpg";
import portrait from "@/assets/portrait-main.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Ned Yuen" },
      { name: "description", content: "A visual archive of performances, portraits, and moments from the road." },
      { property: "og:title", content: "Gallery — Ned Yuen" },
      { property: "og:description", content: "Performance photography and portraits." },
    ],
  }),
  component: GalleryPage,
});

const IMAGES: { src: string; alt: string; caption: string; ratio: string }[] = [
  { src: hero, alt: "Grand piano under a single spotlight", caption: "Musikverein · Vienna, 2024", ratio: "aspect-[3/4]" },
  { src: g1, alt: "Pianist on stage", caption: "La Scala · Milan, 2023", ratio: "aspect-[3/4]" },
  { src: hands, alt: "Hands on piano keys", caption: "Studio · Berlin, 2024", ratio: "aspect-[4/3]" },
  { src: g3, alt: "Open piano with warm light", caption: "Aldeburgh, Snape Maltings, 2024", ratio: "aspect-[16/11]" },
  { src: g2, alt: "Profile portrait", caption: "London, 2024", ratio: "aspect-[4/5]" },
  { src: portrait, alt: "Portrait at the Steinway", caption: "Hamburg · Steinway, 2025", ratio: "aspect-[3/4]" },
  { src: hall, alt: "Empty European concert hall", caption: "Teatro alla Scala, 2023", ratio: "aspect-[16/9]" },
  { src: g5, alt: "Sheet music under a lamp", caption: "Backstage · Paris, 2024", ratio: "aspect-[5/6]" },
  { src: g4, alt: "Pianist taking a bow", caption: "Carnegie Hall · New York, 2025", ratio: "aspect-[4/5]" },
  { src: g6, alt: "Pianist in profile in low light", caption: "Tonhalle · Zürich, 2023", ratio: "aspect-[7/6]" },
];

function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <PageShell>
      <PageHeader
        eyebrow="Gallery"
        title="Gallery."
        intro="Photographs from rehearsals, recitals, and performances."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-4 md:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6 [column-fill:_balance]">
            {IMAGES.map((img, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="group block w-full mb-4 md:mb-6 break-inside-avoid overflow-hidden cursor-zoom-in"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className={`w-full ${img.ratio} object-cover transition-transform duration-[1800ms] group-hover:scale-[1.05]`}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-700" />
                </div>
                <p className="mt-3 text-[10px] tracking-[0.3em] uppercase text-muted-foreground text-left">
                  {img.caption}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {active !== null && (
        <div
          className="fixed inset-0 z-[100] bg-[color:var(--onyx)]/97 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 fade-in"
          onClick={() => setActive(null)}
        >
          <button
            onClick={() => setActive(null)}
            aria-label="Close"
            className="absolute top-6 right-6 text-white/80 hover:text-[color:var(--gold)] transition-colors"
          >
            <X size={28} strokeWidth={1} />
          </button>
          <figure className="max-w-[90vw] max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={IMAGES[active].src}
              alt={IMAGES[active].alt}
              className="max-w-[90vw] max-h-[80vh] object-contain"
            />
            <figcaption className="mt-5 text-center text-[10px] tracking-[0.3em] uppercase text-white/65">
              {IMAGES[active].caption}
            </figcaption>
          </figure>
        </div>
      )}
    </PageShell>
  );
}
