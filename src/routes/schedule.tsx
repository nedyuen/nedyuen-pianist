import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: "Schedule — He lives in London." },
      { name: "description", content: "Upcoming and past concert dates: venues, programmes, collaborators, and tickets." },
      { property: "og:title", content: "Schedule — He lives in London." },
      { property: "og:description", content: "Concert dates and tour schedule." },
    ],
  }),
  component: SchedulePage,
});

type Concert = {
  date: string; year: string; city: string; country: string;
  venue: string; program: string; with?: string; tickets?: string;
};

const UPCOMING: Concert[] = [
  { date: "14 May", year: "2026", city: "Vienna", country: "Austria", venue: "Musikverein · Großer Saal", program: "Schubert · Sonata D. 960; Brahms · Op. 118", tickets: "#" },
  { date: "02 Jun", year: "2026", city: "Paris", country: "France", venue: "Philharmonie de Paris", program: "Ravel Concerto in G", with: "Orchestre de Paris · Klaus Mäkelä", tickets: "#" },
  { date: "21 Jun", year: "2026", city: "London", country: "UK", venue: "Wigmore Hall", program: "Bach · Partita No. 2; Beethoven · Op. 111", tickets: "#" },
  { date: "09 Jul", year: "2026", city: "Salzburg", country: "Austria", venue: "Festspielhaus", program: "Mozart Concerto K. 488", with: "Wiener Philharmoniker · Yannick Nézet-Séguin", tickets: "#" },
  { date: "28 Aug", year: "2026", city: "Lucerne", country: "Switzerland", venue: "KKL · Concert Hall", program: "Brahms · Piano Concerto No. 2", with: "Lucerne Festival Orchestra", tickets: "#" },
  { date: "12 Oct", year: "2026", city: "New York", country: "USA", venue: "Carnegie Hall · Stern Auditorium", program: "Solo Recital · Schumann & Debussy", tickets: "#" },
  { date: "03 Nov", year: "2026", city: "Tokyo", country: "Japan", venue: "Suntory Hall", program: "Beethoven · Concerto No. 4", with: "NHK Symphony · Fabio Luisi", tickets: "#" },
];

const PAST: Concert[] = [
  { date: "18 Mar", year: "2025", city: "New York", country: "USA", venue: "Carnegie Hall", program: "Beethoven · Op. 111; Brahms · Op. 118" },
  { date: "04 Feb", year: "2025", city: "Berlin", country: "Germany", venue: "Philharmonie · Kammermusiksaal", program: "Schubert · Final Sonatas Cycle" },
  { date: "22 Nov", year: "2024", city: "Amsterdam", country: "Netherlands", venue: "Concertgebouw", program: "Ravel · Gaspard de la nuit; Debussy · Préludes II" },
  { date: "10 Oct", year: "2024", city: "Milan", country: "Italy", venue: "Teatro alla Scala", program: "Mozart Concerto K. 466", with: "Filarmonica della Scala · Chailly" },
  { date: "06 Jun", year: "2024", city: "Aldeburgh", country: "UK", venue: "Snape Maltings", program: "Bach · Goldberg Variations" },
];

function Row({ c, past = false }: { c: Concert; past?: boolean }) {
  return (
    <li className={`grid grid-cols-12 gap-3 md:gap-6 py-8 md:py-9 border-b border-border ${past ? "opacity-70" : ""}`}>
      <div className="col-span-3 md:col-span-2">
        <p className="font-serif text-xl md:text-3xl leading-none">{c.date}</p>
        <p className="text-[10px] tracking-[0.3em] uppercase text-[color:var(--gold)] mt-2">{c.year}</p>
      </div>
      <div className="col-span-9 md:col-span-3">
        <h3 className="font-serif text-xl md:text-2xl">{c.city}</h3>
        <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground mt-1">{c.country}</p>
      </div>
      <div className="col-span-12 md:col-span-4 text-sm leading-relaxed">
        <p>{c.venue}</p>
        {c.with && <p className="text-muted-foreground mt-1">{c.with}</p>}
      </div>
      <div className="col-span-9 md:col-span-2 text-sm italic text-muted-foreground">{c.program}</div>
      <div className="col-span-3 md:col-span-1 flex md:justify-end items-start">
        {!past && c.tickets && (
          <a href={c.tickets} className="inline-flex items-center gap-1 text-[10px] tracking-[0.28em] uppercase link-underline">
            Tickets <ArrowUpRight size={12} strokeWidth={1.25} />
          </a>
        )}
      </div>
    </li>
  );
}

function SchedulePage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Schedule"
        title="Where the music goes."
        intro="The 2026 season — and a partial record of recent concerts."
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="flex items-baseline justify-between mb-10">
            <h2 className="display-md">Upcoming</h2>
            <p className="eyebrow">2026 Season</p>
          </div>
          <ul className="border-t border-border">
            {UPCOMING.map((c, i) => <Row key={i} c={c} />)}
          </ul>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[color:var(--secondary)]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="flex items-baseline justify-between mb-10">
            <h2 className="display-md">Recent</h2>
            <p className="eyebrow">Selected past concerts</p>
          </div>
          <ul className="border-t border-border">
            {PAST.map((c, i) => <Row key={i} c={c} past />)}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
