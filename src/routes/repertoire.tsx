import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Plus, Minus } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/repertoire")({
  head: () => ({
    meta: [
      { title: "Repertoire — Ned Yuen" },
      { name: "description", content: "A working repertoire — solo, concerto, and chamber works." },
      { property: "og:title", content: "Repertoire — Ned Yuen" },
      { property: "og:description", content: "A working repertoire across solo, concerto, and chamber music." },
    ],
  }),
  component: RepertoirePage,
});

type Piece = { id: string; composer: string; piece: string; category: string };

const GROUPS: { id: string; title: string; intro: string }[] = [
  { id: "Solo Works", title: "Solo Works", intro: "From Bach's polyphony to Romantic and modern voices — the centre of a long, continuing study." },
  { id: "Concertos", title: "Concertos", intro: "Concerto repertoire chosen for its conversational nature." },
  { id: "Chamber Music", title: "Chamber Music", intro: "Duos, trios, and works for two pianos returned to over many seasons." },
];

function RepertoirePage() {
  const [open, setOpen] = useState<string>("Solo Works");
  const [pieces, setPieces] = useState<Piece[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("repertoire_pieces")
      .select("*")
      .order("composer", { ascending: true })
      .order("piece", { ascending: true })
      .then(({ data }) => {
        setPieces((data as Piece[]) ?? []);
        setLoading(false);
      });
  }, []);

  const grouped = useMemo(() => {
    const map: Record<string, { composer: string; works: string[] }[]> = {};
    for (const g of GROUPS) map[g.id] = [];
    for (const p of pieces) {
      if (!map[p.category]) map[p.category] = [];
      const arr = map[p.category];
      let entry = arr.find((e) => e.composer === p.composer);
      if (!entry) {
        entry = { composer: p.composer, works: [] };
        arr.push(entry);
      }
      entry.works.push(p.piece);
    }
    return map;
  }, [pieces]);

  return (
    <PageShell>
      <PageHeader
        eyebrow="Repertoire"
        title="A working library."
        intro="The repertoire below is current rather than complete — works actively in rotation across recital, concerto, and chamber programmes."
      />

      <section className="py-24 md:py-32 bg-[color:var(--secondary)]">
        <div className="mx-auto max-w-[1300px] px-6 md:px-12">
          {loading ? (
            <p className="text-sm text-muted-foreground">Loading…</p>
          ) : (
            <ul className="border-t border-border">
              {GROUPS.map((group, idx) => {
                const isOpen = open === group.id;
                const items = grouped[group.id] ?? [];
                return (
                  <li key={group.id} className="border-b border-border">
                    <button
                      onClick={() => setOpen(isOpen ? "" : group.id)}
                      className="w-full grid grid-cols-12 gap-6 py-10 md:py-14 text-left items-baseline group"
                    >
                      <span className="col-span-1 text-[11px] tracking-[0.28em] uppercase text-muted-foreground pt-2">
                        0{idx + 1}
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
                            {items.map((item) => (
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
          )}
        </div>
      </section>
    </PageShell>
  );
}
