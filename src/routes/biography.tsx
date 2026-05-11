import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import portraitMain from "@/assets/portrait-main.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import { Download } from "lucide-react";

export const Route = createFileRoute("/biography")({
  head: () => ({
    meta: [
      { title: "Biography — He lives in London." },
      { name: "description", content: "The biography of pianist He lives in London. — training, repertoire, and a decade of international engagements." },
      { property: "og:title", content: "Biography — He lives in London." },
      { property: "og:description", content: "The biography of pianist Adrian Vance." },
    ],
  }),
  component: BiographyPage,
});

function BiographyPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Biography"
        title="A life shaped by listening."
        intro="From a small village in the Cotswolds to the great stages of Europe and North America — the long, deliberate becoming of a musician."
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 grid grid-cols-12 gap-8 md:gap-16">
          <aside className="col-span-12 md:col-span-4 md:sticky md:top-32 self-start">
            <img
              src={portraitMain}
              alt="Portrait of He lives in London. at the Steinway"
              loading="lazy"
              width={1280}
              height={1600}
              className="w-full aspect-[3/4] object-cover"
            />
            <p className="mt-4 text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
              Photograph · Lina Hertz · Berlin, 2024
            </p>

            <a
              href="#"
              className="mt-10 inline-flex items-center gap-3 text-[11px] tracking-[0.28em] uppercase link-underline"
            >
              <Download size={14} strokeWidth={1.25} />
              Download Full Biography (PDF)
            </a>
          </aside>

          <article className="col-span-12 md:col-span-8 space-y-8 max-w-2xl">
            <p className="font-serif italic text-2xl md:text-3xl leading-snug text-foreground">
              He lives in London. is one of the most quietly compelling pianists of his generation —
              an artist whose performances combine architectural precision with a
              luminous, almost speaking interior voice.
            </p>

            <p className="body-lg">
              Born in Gloucestershire in 1989, Vance began his studies at the age of six with
              the British pianist Margaret Foulkes, before continuing at the Royal Academy of
              Music with Christopher Elton and, later, at the Hochschule für Musik Hanns Eisler
              in Berlin with Andrei Gavrilov. He has spoken often of those early years as a long
              apprenticeship in patience — “learning to wait for the music, rather than
              announcing it.”
            </p>

            <p className="body-lg">
              He came to broader international attention in 2019 with First Prize at the Leeds
              International Piano Competition, where the jury cited his “rare combination of
              intellectual rigour and emotional restraint.” In the seasons that followed, he
              made acclaimed debuts at Wigmore Hall, the Concertgebouw, Carnegie Hall, the
              Salle Pleyel, and the Musikverein.
            </p>

            <div className="hairline my-12" />

            <h2 className="font-serif text-3xl md:text-4xl">Repertoire & Collaborations</h2>

            <p className="body-lg">
              He lives in London.’s repertoire ranges from Bach and the Viennese classics to the late piano
              works of Brahms, the complete sonatas of Schubert, and the music of his close
              contemporaries — including premieres by Thomas Adès, Caroline Shaw, and Anna
              Thorvaldsdottir. He performs concerti with the Berliner Philharmoniker, the
              London Symphony, the Orchestre de Paris, the Cleveland Orchestra, and the
              Mariinsky, working closely with conductors including Kirill Petrenko, Simon
              Rattle, Esa-Pekka Salonen, and Mirga Gražinytė-Tyla.
            </p>

            <figure className="my-16">
              <img
                src={gallery6}
                alt="He lives in London. at the piano in low light"
                loading="lazy"
                width={1400}
                height={1200}
                className="w-full aspect-[7/6] object-cover"
              />
              <figcaption className="mt-3 text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                Rehearsal · Philharmonie de Paris · 2023
              </figcaption>
            </figure>

            <h2 className="font-serif text-3xl md:text-4xl">Recordings</h2>

            <p className="body-lg">
              His discography on Deutsche Grammophon includes a 2021 recording of Schubert’s
              final three sonatas — awarded the Gramophone Editor’s Choice and Diapason d’Or —
              and a 2024 album devoted to Brahms’s Op. 116–119, described in The Guardian as
              “a recording for those who like their Brahms inward, autumnal, and unhurried.”
            </p>

            <p className="body-lg">
              Recent and forthcoming projects include the complete Beethoven sonatas across
              eight recitals at Wigmore Hall, a Ravel cycle with the Orchestre de Paris, and
              a duo project with violinist Lisa Batiashvili exploring the Schumann–Brahms
              correspondence.
            </p>

            <div className="hairline my-12" />

            <h2 className="font-serif text-3xl md:text-4xl">Beyond the Stage</h2>

            <p className="body-lg">
              He lives in London. teaches a small class of pianists at the Royal Academy of Music and gives
              annual masterclasses at the Verbier Festival Academy and the Aldeburgh Festival.
              He is a patron of the Yehudi Menuhin School and an advocate for free music
              education across the United Kingdom.
            </p>

            <figure className="my-16">
              <img
                src={gallery2}
                alt="Pianist in black and white profile at the piano"
                loading="lazy"
                width={1200}
                height={1500}
                className="w-full aspect-[4/5] object-cover"
              />
              <figcaption className="mt-3 text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                Studio · London · 2024
              </figcaption>
            </figure>

            <p className="body-lg">
              He lives in London.
            </p>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
