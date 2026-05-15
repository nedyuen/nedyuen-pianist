import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Performances — Ned Yuen" },
      { name: "description", content: "Selected performance videos from concerts, recordings, and recitals." },
      { property: "og:title", content: "Performances — Ned Yuen" },
      { property: "og:description", content: "Selected performance videos." },
    ],
  }),
  component: VideosPage,
});

type Video = {
  id: string;
  title: string;
  composer: string;
  work: string;
  venue: string;
};

const FEATURED: Video = {
  id: "7DGezXG8oMI",
  title: "London Piano Meetup Group Concert",
  composer: "Piazzolla",
  work: "Libertango",
  venue: "Henry Wood Hall",
};

const VIDEOS: Video[] = [
  {
    id: "z9nPCiTgXyE",
    title: "Channel 4's The Piano",
    composer: "Poulenc",
    work: "Novelette No. 1",
    venue: "Leeds train station",
  },
  {
    id: "W2UoHAgI_e8",
    title: "JP Morgan Music Evening",
    composer: "Mendelssohn",
    work: "Songs Without Words, Op. 38 No. 6",
    venue: "The Great Hall at JP Morgan",
  },
  {
    id: "NCk6KmzqMyA",
    title: "London Piano Meetup Group Concert",
    composer: "Chopin",
    work: "Berceuse, Op. 57",
    venue: "Henry Wood Hall",
  },
  {
    id: "Ayq6hYuVgVs",
    title: "Home recording",
    composer: "Chopin",
    work: "Etude, Op. 10 No. 3",
    venue: "Home",
  },
  {
    id: "TxBB-X2zKAU",
    title: "Concord College Talent Show 2009",
    composer: "Rachmaninoff",
    work: "Six Hands Waltz",
    venue: "Concord College Concert Hall",
  },
  {
    id: "_IkGfD50ODg",
    title: "Hong Kong Schools Music Festival Winners Concert 2007",
    composer: "Dvořák",
    work: "Legends, Op. 59 No. 4",
    venue: "Hong Kong City Hall",
  },
];

function YouTubeEmbed({ id, title }: { id: string; title: string }) {
  return (
    <div className="relative w-full aspect-video overflow-hidden bg-black">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}

function VideosPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Performances"
        title="Performances."
        intro="Live and studio recordings."
      />

      {/* FEATURED */}
      <section className="section-dark py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-6 md:px-12">
          <p className="eyebrow-gold">Featured</p>
          <div className="mt-10 grid grid-cols-12 gap-8 md:gap-12 items-end">
            <div className="col-span-12 md:col-span-7">
              <YouTubeEmbed id={FEATURED.id} title={`${FEATURED.composer} — ${FEATURED.work}`} />
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[color:var(--gold)]">{FEATURED.title}</p>
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
            {VIDEOS.map((v) => (
              <article key={v.id}>
                <YouTubeEmbed id={v.id} title={`${v.composer} — ${v.work}`} />
                <div className="mt-6 flex items-baseline justify-between gap-6 border-b border-border pb-5">
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{v.title}</p>
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
