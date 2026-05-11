import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function PageShell({
  children,
  overlay = false,
}: {
  children: React.ReactNode;
  overlay?: boolean;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader overlay={overlay} />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="pt-40 pb-20 md:pt-52 md:pb-28 border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <p className="eyebrow-gold fade-in">{eyebrow}</p>
        <h1 className="display-xl mt-6 fade-up fade-delay-1 max-w-5xl">{title}</h1>
        {intro && (
          <p className="body-lg mt-10 max-w-2xl fade-up fade-delay-2">{intro}</p>
        )}
      </div>
    </section>
  );
}
