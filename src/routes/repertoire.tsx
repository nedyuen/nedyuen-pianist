import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Plus, Minus } from "lucide-react";

export const Route = createFileRoute("/repertoire")({
  head: () => ({
    meta: [
      { title: "Repertoire — Adrian Vance" },
      { name: "description", content: "A working repertoire — solo, concerto, chamber, and contemporary works." },
      { property: "og:title", content: "Repertoire — Adrian Vance" },
      { property: "og:description", content: "A working repertoire across solo, concerto, chamber, and contemporary music." },
    ],
  }),
  component: RepertoirePage,
});

type Group = { id: string; title: string; intro: string; items: { composer: string; works: string[] }[] };

const REPERTOIRE: Group[] = [
  {
    id: "solo",
    title: "Solo Works",
    intro: "From Bach’s polyphony to the inward late Brahms — the centre of a long, continuing study.",
    items: [
      { composer: "Johann Sebastian Bach", works: ["Goldberg Variations, BWV 988", "Partita No. 2 in C minor, BWV 826", "Well-Tempered Clavier, Book I (selections)"] },
      { composer: "Ludwig van Beethoven", works: ["Sonata No. 30 in E, Op. 109", "Sonata No. 31 in A-flat, Op. 110", "Sonata No. 32 in C minor, Op. 111", "Diabelli Variations, Op. 120"] },
      { composer: "Franz Schubert", works: ["Sonata in C minor, D. 958", "Sonata in A, D. 959", "Sonata in B-flat, D. 960", "Drei Klavierstücke, D. 946"] },
      { composer: "Robert Schumann", works: ["Kreisleriana, Op. 16", "Fantasie in C, Op. 17", "Davidsbündlertänze, Op. 6"] },
      { composer: "Johannes Brahms", works: ["Klavierstücke Op. 116", "Drei Intermezzi Op. 117", "Klavierstücke Op. 118", "Vier Klavierstücke Op. 119"] },
      { composer: "Claude Debussy", works: ["Préludes, Books I & II", "Études (selections)", "Images, Books I & II"] },
      { composer: "Maurice Ravel", works: ["Gaspard de la nuit", "Miroirs", "Le Tombeau de Couperin"] },
    ],
  },
  {
    id: "concertos",
    title: "Concertos",
    intro: "A repertoire chosen for its conversational nature — works that ask the orchestra to listen as much as to speak.",
    items: [
      { composer: "Mozart", works: ["Concerto No. 20 in D minor, K. 466", "Concerto No. 23 in A, K. 488", "Concerto No. 27 in B-flat, K. 595"] },
      { composer: "Beethoven", works: ["Concerto No. 3 in C minor, Op. 37", "Concerto No. 4 in G, Op. 58", "Concerto No. 5 in E-flat, Op. 73 “Emperor”"] },
      { composer: "Schumann", works: ["Concerto in A minor, Op. 54"] },
      { composer: "Brahms", works: ["Concerto No. 1 in D minor, Op. 15", "Concerto No. 2 in B-flat, Op. 83"] },
      { composer: "Ravel", works: ["Concerto in G major", "Concerto for the Left Hand"] },
      { composer: "Bartók", works: ["Concerto No. 3, Sz. 119"] },
    ],
  },
  {
    id: "chamber",
    title: "Chamber Music",
    intro: "Long-standing partnerships shape this list — duos and trios returned to over many seasons.",
    items: [
      { composer: "Beethoven", works: ["Violin Sonatas Op. 96 & Op. 47 “Kreutzer”", "Cello Sonatas Op. 102"] },
      { composer: "Schubert", works: ["Piano Trios in B-flat (D. 898) and E-flat (D. 929)", "“Arpeggione” Sonata, D. 821"] },
      { composer: "Schumann", works: ["Piano Quintet in E-flat, Op. 44", "Fantasiestücke Op. 73"] },
      { composer: "Brahms", works: ["Piano Quartet in G minor, Op. 25", "Violin Sonatas Op. 78, 100, 108", "Clarinet Trio Op. 114"] },
      { composer: "Fauré", works: ["Piano Quartet in C minor, Op. 15"] },
    ],
  },
  {
    id: "contemporary",
    title: "Contemporary Works",
    intro: "Premieres, commissions, and the music of friends — a continually opening field.",
    items: [
      { composer: "Thomas Adès", works: ["Concerto (2018) — UK & US tour engagements", "Darknesse Visible"] },
      { composer: "Caroline Shaw", works: ["Gustave Le Gray", "Piano Suite (commission, 2024)"] },
      { composer: "Anna Thorvaldsdottir", works: ["Scape", "Aequora (piano version)"] },
      { composer: "Kaija Saariaho", works: ["Ballade", "Prelude"] },
      { composer: "György Kurtág", works: ["Játékok — selected volumes"] },
      { composer: "John Adams", works: ["China Gates", "Phrygian Gates"] },
    ],
  },
];

function RepertoirePage() {
  const [open, setOpen] = useState<string>("solo");

  return (
    <PageShell>
      <PageHeader
        eyebrow="Repertoire"
        title="A working library."
        intro="The repertoire below is current rather than complete — works actively in rotation across recital, concerto, and chamber programmes."
      />

      <section className="py-24 md:py-32 bg-[color:var(--secondary)]">
        <div className="mx-auto max-w-[1300px] px-6 md:px-12">
          <ul className="border-t border-border">
            {REPERTOIRE.map((group) => {
              const isOpen = open === group.id;
              return (
                <li key={group.id} className="border-b border-border">
                  <button
                    onClick={() => setOpen(isOpen ? "" : group.id)}
                    className="w-full grid grid-cols-12 gap-6 py-10 md:py-14 text-left items-baseline group"
                  >
                    <span className="col-span-1 text-[11px] tracking-[0.28em] uppercase text-muted-foreground pt-2">
                      0{REPERTOIRE.indexOf(group) + 1}
                    </span>
                    <h2 className="col-span-9 md:col-span-9 font-serif text-3xl md:text-5xl">
                      <span className={isOpen ? "text-[color:var(--gold)] transition-colors duration-500" : "transition-colors duration-500"}>
                        {group.title}
                      </span>
                    </h2>
                    <span className="col-span-2 flex justify-end pt-3">
                      {isOpen ? <Minus strokeWidth={1} /> : <Plus strokeWidth={1} />}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-700 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-14 md:pb-20 grid grid-cols-12 gap-6 md:gap-10">
                        <p className="col-span-12 md:col-span-4 md:col-start-2 body-lg italic font-serif text-xl md:text-2xl leading-snug text-foreground">
                          {group.intro}
                        </p>
                        <div className="col-span-12 md:col-span-7 space-y-10">
                          {group.items.map((item) => (
                            <div key={item.composer} className="grid grid-cols-12 gap-4">
                              <h3 className="col-span-12 md:col-span-4 font-serif text-xl md:text-2xl">{item.composer}</h3>
                              <ul className="col-span-12 md:col-span-8 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
                                {item.works.map((w) => <li key={w}>{w}</li>)}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
