import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: "Schedule — Ned Yuen" },
      { name: "description", content: "Concert dates: venues, programmes, and performance pieces." },
      { property: "og:title", content: "Schedule — Ned Yuen" },
      { property: "og:description", content: "Concert dates and tour schedule." },
    ],
  }),
  component: SchedulePage,
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
  const month = d.toLocaleDateString("en-GB", { month: "short" }).toUpperCase();
  const year = d.getFullYear().toString();
  return { day, month, year };
}

function Row({ c }: { c: ConcertEvent }) {
  const { day, month, year } = formatDate(c.event_date);
  return (
    <li className="grid grid-cols-12 gap-3 md:gap-6 py-8 md:py-9 border-b border-border">
      <div className="col-span-3 md:col-span-2">
        <p className="font-serif text-xl md:text-3xl leading-none">
          {day} {month}
        </p>
        <p className="text-[10px] tracking-[0.3em] uppercase text-[color:var(--gold)] mt-2">{year}</p>
      </div>
      <div className="col-span-9 md:col-span-4">
        <h3 className="font-serif text-xl md:text-2xl leading-snug">{c.event_name}</h3>
      </div>
      <div className="col-span-12 md:col-span-3 text-sm leading-relaxed">
        <p>{c.venue}</p>
      </div>
      <div className="col-span-12 md:col-span-3 text-sm italic text-muted-foreground">
        {c.performance_piece}
      </div>
    </li>
  );
}

function SchedulePage() {
  const [events, setEvents] = useState<ConcertEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("concert_events")
      .select("*")
      .order("event_date", { ascending: false })
      .then(({ data }) => {
        setEvents((data as ConcertEvent[]) ?? []);
        setLoading(false);
      });
  }, []);

  return (
    <PageShell>
      <PageHeader
        eyebrow="Schedule"
        title="Schedule."
        intro="Concerts, recitals, and appearances."
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="flex items-baseline justify-between mb-10">
            <h2 className="display-md">Concerts</h2>
            <p className="eyebrow">All events</p>
          </div>
          {loading ? (
            <p className="text-sm text-muted-foreground">Loading…</p>
          ) : (
            <ul className="border-t border-border">
              {events.map((c) => (
                <Row key={c.id} c={c} />
              ))}
            </ul>
          )}
        </div>
      </section>
    </PageShell>
  );
}
