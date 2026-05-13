import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { supabase } from "@/integrations/supabase/client";

type PressQuote = { id: string; source: string; text: string };

export const Route = createFileRoute("/press")({
  head: () => ({
    meta: [
      { title: "Press & Recognition — Ned Yuen" },
      { name: "description", content: "Critical reception, awards, and distinctions across a decade of performances and recordings." },
      { property: "og:title", content: "Press & Recognition — Ned Yuen" },
      { property: "og:description", content: "Critical reception and awards." },
    ],
  }),
  component: PressPage,
});

const AWARDS = [
  { year: "2024", title: "Gramophone Award", sub: "Solo Recording of the Year — Brahms Op. 116–119" },
  { year: "2024", title: "Diapason d’Or de l’année", sub: "France · Brahms Album" },
  { year: "2022", title: "Avery Fisher Prize", sub: "Lincoln Center · New York" },
  { year: "2021", title: "Editor’s Choice", sub: "Gramophone · Schubert Final Sonatas" },
  { year: "2020", title: "BBC Music Magazine Award", sub: "Newcomer of the Year" },
  { year: "2019", title: "Leeds International Piano Competition", sub: "First Prize · Gold Medal" },
  { year: "2017", title: "Borletti-Buitoni Trust", sub: "Fellowship Award" },
  { year: "2015", title: "Royal Philharmonic Society", sub: "Young Artist of the Year" },
];

function PressPage() {
  const [quotes, setQuotes] = useState<PressQuote[]>([]);

  useEffect(() => {
    supabase
      .from("press_quotes")
      .select("*")
      .order("sort_order", { ascending: true })
      .then(({ data }) => setQuotes((data as PressQuote[]) ?? []));
  }, []);

  return (
    <PageShell>
      <PageHeader
        eyebrow="Press & Recognition"
        title="What has been written."
        intro="A small selection of voices from established musicians."
      />

      {/* Quotes */}
      <section className="py-24 md:py-36">
        <div className="mx-auto max-w-[1300px] px-6 md:px-12 space-y-28 md:space-y-40">
          {quotes.map((q, i) => (
            <figure key={q.id} className={i % 2 === 0 ? "md:pr-24" : "md:pl-24 md:text-right"}>
              <blockquote className="quote-xl">“{q.text}”</blockquote>
              <figcaption className="mt-10 flex items-center gap-4 text-[11px] tracking-[0.3em] uppercase text-muted-foreground"
                style={{ justifyContent: i % 2 === 0 ? "flex-start" : "flex-end" }}>
                <span className="h-px w-10 bg-[color:var(--gold)]" />
                <span>{q.source}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Awards timeline */}
      <section className="section-dark py-28 md:py-40">
        <div className="mx-auto max-w-[1300px] px-6 md:px-12">
          <p className="eyebrow-gold">Distinctions</p>
          <h2 className="display-md mt-6 max-w-2xl">A chronology, briefly.</h2>

          <ul className="mt-20 relative">
            <span className="absolute left-[80px] md:left-[120px] top-0 bottom-0 w-px bg-white/15" aria-hidden />
            {AWARDS.map((a) => (
              <li key={a.year + a.title} className="relative grid grid-cols-12 gap-4 md:gap-10 py-7 md:py-9 border-b border-white/10">
                <div className="col-span-3 md:col-span-2 font-serif text-3xl md:text-4xl text-[color:var(--gold)]">{a.year}</div>
                <div className="col-span-9 md:col-span-10 pl-4 md:pl-8 relative">
                  <span className="absolute -left-[5px] top-3 w-2.5 h-2.5 rounded-full bg-[color:var(--gold)]" />
                  <h3 className="font-serif text-2xl md:text-3xl">{a.title}</h3>
                  <p className="mt-2 text-sm text-white/65">{a.sub}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
