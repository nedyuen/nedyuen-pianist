import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHeader } from "@/components/site/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ned Yuen" },
      { name: "description", content: "Management, booking, press, and general enquiries." },
      { property: "og:title", content: "Contact — Ned Yuen" },
      { property: "og:description", content: "Management and booking enquiries." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <PageShell>
      <PageHeader
        eyebrow="Contact"
        title="In correspondence."
        intro="For management, bookings, and press, the relevant contacts are below. For everything else, the form is read."
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 grid grid-cols-12 gap-12 md:gap-16">
          {/* Contacts */}
          <div className="col-span-12 md:col-span-4 space-y-14">
            <div>
              <p className="eyebrow-gold">Worldwide Management</p>
              <h3 className="font-serif text-2xl mt-5">Harriman Artists</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                257 West 52nd Street<br />
                New York, NY 10019, USA
              </p>
              <a href="mailto:booking@harriman-artists.com" className="link-underline mt-4 inline-block text-sm">
                booking@harriman-artists.com
              </a>
            </div>

            <div>
              <p className="eyebrow-gold">European Representation</p>
              <h3 className="font-serif text-2xl mt-5">Askonas Holt</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                15 Fetter Lane<br />
                London EC4A 1BW, UK
              </p>
              <a href="mailto:europe@askonasholt.com" className="link-underline mt-4 inline-block text-sm">
                europe@askonasholt.com
              </a>
            </div>

            <div>
              <p className="eyebrow-gold">Press & Publicity</p>
              <h3 className="font-serif text-2xl mt-5">Rebecca Liu</h3>
              <a href="mailto:press@nedyuen.com" className="link-underline mt-3 inline-block text-sm">
                press@nedyuen.com
              </a>
            </div>

            <div>
              <p className="eyebrow-gold">Follow</p>
              <ul className="mt-5 space-y-2 text-sm">
                <li><a href="#" className="link-underline">Instagram</a></li>
                <li><a href="#" className="link-underline">YouTube</a></li>
                <li><a href="#" className="link-underline">Spotify</a></li>
                <li><a href="#" className="link-underline">Apple Music</a></li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <p className="eyebrow-gold">General Enquiries</p>
            <h2 className="display-md mt-6">Write a note.</h2>

            {sent ? (
              <div className="mt-16 py-20 border-t border-border">
                <p className="font-serif italic text-2xl md:text-3xl max-w-xl">
                  Thank you — your message has been received. A reply will follow in due course.
                </p>
              </div>
            ) : (
              <form
                className="mt-14 space-y-10"
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              >
                <Field label="Name" name="name" />
                <Field label="Email" name="email" type="email" />
                <Field label="Subject" name="subject" />

                <label className="block">
                  <span className="eyebrow">Message</span>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="mt-4 w-full bg-transparent border-b border-border focus:border-[color:var(--gold)] outline-none py-3 font-serif text-xl resize-none transition-colors duration-500"
                  />
                </label>

                <button
                  type="submit"
                  className="mt-6 group inline-flex items-center gap-4 text-[11px] tracking-[0.32em] uppercase border border-foreground px-10 py-5 hover:bg-foreground hover:text-background transition-all duration-700"
                >
                  Send Message
                  <span className="w-8 h-px bg-current transition-all duration-700 group-hover:w-12" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label className="block">
      <span className="eyebrow">{label}</span>
      <input
        type={type}
        name={name}
        required
        className="mt-4 w-full bg-transparent border-b border-border focus:border-[color:var(--gold)] outline-none py-3 font-serif text-xl transition-colors duration-500"
      />
    </label>
  );
}
