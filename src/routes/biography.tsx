import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import portraitMain from "@/assets/portrait-main.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import { Download } from "lucide-react";

export const Route = createFileRoute("/biography")({
  head: () => ({
    meta: [
      { title: "Biography — Ned Yuen" },
      { name: "description", content: "The biography of pianist Ned Yuen — training, repertoire, and a decade of international engagements." },
      { property: "og:title", content: "Biography — Ned Yuen" },
      { property: "og:description", content: "The biography of pianist Ned Yuen." },
    ],
  }),
  component: BiographyPage,
});

function BiographyPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Biography"
        title="Biography."
        intro="Training, competitions, broadcast appearances, and ensemble work."
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 grid grid-cols-12 gap-8 md:gap-16">
          <aside className="col-span-12 md:col-span-4 md:sticky md:top-32 self-start">
            <img
              src={portraitMain}
              alt="Portrait of Ned Yuen at the Steinway"
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
              Ned Yuen is a classical pianist based in the UK, with over two decades of
              performance experience across solo, chamber, and concerto repertoire.
            </p>

            <p className="body-lg">
              Ned began studying the piano at the age of three. His principal teachers included 
              Richard Uttley and Mary Wu, and he later attended a masterclass given by 
              internationally acclaimed pianist Lang Lang.
            </p>

            <p className="body-lg">
              Throughout his musical development, Ned received numerous awards and distinctions. 
              He was a First Prize winner at the Rochester Music Festival, Devon Performing Arts Festival, 
              St Cecilia International Music Challenge, Hong Kong Schools Music Festival, 
              Hong Kong District Music Competition, and Concord Talent Show. He was also awarded 
              the Kathleen Rose, Rose Sears Cup, Susan Hinde Cup, RMKMD Gold Model, SMSA Gold Medal, 
              and the Harry Ore Memorial Prize in Music.
            </p>

            <div className="hairline my-12" />

            <h2 className="font-serif text-3xl md:text-4xl">Public & TV Performances</h2>

            <p className="body-lg">
              Ned was frequently invited to perform as a soloist at festivals and gala events, 
              including the Hong Kong Winterfest (2004–2006), the Hong Kong Schools Music Festival Winners’ Concert (2007), 
              the Hong Kong District Arts Festival Opening Ceremony (2007), the BBC Radio 3 Pianothon (2008), 
              St Chad’s Church Concerts in the Round (2009–2010), and the Devon Performing Arts Festival Gala Concert (2013). 
              He also appeared regularly in charity concerts, Christmas performances, and high-profile corporate events, 
              including the UBS Education Conference and the UBS New Building Inauguration Ceremony (2017).
            </p>

            <p className="body-lg">
              Ned has also made numerous television and radio appearances, with performances and 
              interviews broadcast on major networks including TVB, ATV, RTHK, and ETV. 
              Notable appearances included the Jade Solid Gold Best Ten Music Awards Presentation, 
              the Cathay Pacific International Chinese New Year Night Parade, and the Miss Hong Kong Pageant.
            </p>

            <p className="body-lg">
              More recently, Ned was selected to participate in <em>The Piano</em>, the acclaimed 
              Channel 4 series showcasing outstanding amateur pianists across the United Kingdom. 
              As part of the programme, he was interviewed by Claudia Winkleman, performed publicly 
              at a major railway station venue, and appeared alongside internationally renowned 
              musicians Lang Lang and Mika.
            </p>

            <figure className="my-16">
              <img
                src={gallery6}
                alt="Ned Yuen rehearsal"
                loading="lazy"
                width={1400}
                height={1200}
                className="w-full aspect-[7/6] object-cover"
              />
              <figcaption className="mt-3 text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                REHEARSAL · PHILHARMONIE DE PARIS · 2023
              </figcaption>
            </figure>

            <h2 className="font-serif text-3xl md:text-4xl">Early Years & Collaborations</h2>

            <p className="body-lg">
              During his school years, Ned was recognised as one of the institution’s leading 
              young musicians. In addition to representing the college in the BBC Shropshire 
              Musician of the Year Concerto Competition, he performed Haydn’s Piano Concerto No. 11 
              at the International Mayors Concert celebrating the school’s 60th anniversary. 
              In recognition of his musical achievements and contributions to school life, 
              he was awarded Student of the Year in 2010.
            </p>

            <p className="body-lg">
              Alongside his work as a solo pianist, Ned collaborated extensively with choirs, 
              ensembles, and orchestras. He served as pianist for the Boheme Youth Choir, 
              Concord Choir, Concord Ensemble, La Salle Senior Choir, and La Salle String Orchestra. 
              He also participated in theatrical productions including <em>Touching Hearts: St La Salle Musical</em> 
              (world premiere) and <em>Les Misérables</em> (School Edition).
            </p>

            <div className="hairline my-12" />

            <h2 className="font-serif text-3xl md:text-4xl">Beyond the Piano</h2>

            <p className="body-lg">
              Beyond the piano, Ned is a multi-instrumentalist and has performed on the 
              violin, viola, harmonica, melodica, and recorder. Since 2002, he has also 
              held a Guinness World Record as part of the world’s largest percussion ensemble.
            </p>

            <figure className="my-16">
              <img
                src={gallery2}
                alt="Ned Yuen studio"
                loading="lazy"
                width={1200}
                height={1500}
                className="w-full aspect-[4/5] object-cover"
              />
              <figcaption className="mt-3 text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                STUDIO · LONDON · 2024
              </figcaption>
            </figure>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
