import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { X } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Ned Yuen" },
      { name: "description", content: "A visual archive of performances, portraits, and moments from the road." },
      { property: "og:title", content: "Gallery — Ned Yuen" },
      { property: "og:description", content: "Performance photography and portraits." },
    ],
  }),
  component: GalleryPage,
});

const IMAGE_URLS: string[] = [
  "https://i.postimg.cc/Dm8FN7rD/A1.jpg",
  "https://i.postimg.cc/V5d1hzqx/A2.jpg",
  "https://i.postimg.cc/5j61rf5c/A3.jpg",
  "https://i.postimg.cc/v1N2xw47/B1.jpg",
  "https://i.postimg.cc/NyzC2vK6/B2.jpg",
  "https://i.postimg.cc/v1N2xw4L/B3.jpg",
  "https://i.postimg.cc/xJNxKpmJ/B4.jpg",
  "https://i.postimg.cc/sQG6pHWG/B5.jpg",
  "https://i.postimg.cc/zbHtn2hg/B6.jpg",
  "https://i.postimg.cc/zbHtn2hK/B7.jpg",
  "https://i.postimg.cc/XGBHw158/B8.jpg",
  "https://i.postimg.cc/BLPYx7F2/B9.jpg",
  "https://i.postimg.cc/8JfKhXvB/B10.jpg",
  "https://i.postimg.cc/TL57rNbc/C1.jpg",
  "https://i.postimg.cc/qh6b8DKj/C2-092018.jpg",
  "https://i.postimg.cc/JDH6bYXT/C3-092018.jpg",
  "https://i.postimg.cc/hzQy9Zm3/C4-112018.jpg",
  "https://i.postimg.cc/tZnShv6S/C5-122019.jpg",
  "https://i.postimg.cc/JDH6bYXY/C6-092021.jpg",
  "https://i.postimg.cc/MMfPy3Rk/C7.jpg",
  "https://i.postimg.cc/Vr0GjZMP/C8.jpg",
  "https://i.postimg.cc/Hc8ZQvMf/D1.jpg",
  "https://i.postimg.cc/xJNxKpHD/D2.jpg",
  "https://i.postimg.cc/wRKWF554/D3.jpg",
  "https://i.postimg.cc/GT0MzPPV/D4.jpg",
  "https://i.postimg.cc/SY0ZVLL5/D5.jpg",
  "https://i.postimg.cc/jnV8v6Q0/D6.jpg",
  "https://i.postimg.cc/64sHzVVk/E1.jpg",
  "https://i.postimg.cc/YLcX8NfM/E2.jpg",
  "https://i.postimg.cc/BPWhN5cs/E3.jpg",
  "https://i.postimg.cc/4HC8wvbX/F1.jpg",
  "https://i.postimg.cc/hQFCM8bD/F2.jpg",
  "https://i.postimg.cc/xNrsgGyk/F3.jpg",
  "https://i.postimg.cc/PvG6Kbzp/F4.jpg",
  "https://i.postimg.cc/y3qfnhXd/F5.jpg",
  "https://i.postimg.cc/Cnjc2Zmw/F6.jpg",
  "https://i.postimg.cc/dZ85f74V/F7.jpg",
  "https://i.postimg.cc/JHbpFyPt/F8.jpg",
  "https://i.postimg.cc/BPxmz8Mj/F9.jpg",
  "https://i.postimg.cc/Mfy9Lcdj/G1.jpg",
  "https://i.postimg.cc/XBwsPZQ9/G2.jpg",
  "https://i.postimg.cc/4HzW0KBH/G3.jpg",
  "https://i.postimg.cc/fSx8P3BX/G4.jpg",
  "https://i.postimg.cc/SYWgPXD7/G5.jpg",
  "https://i.postimg.cc/xNK6ZktP/G6.jpg",
  "https://i.postimg.cc/XBwsPZQx/G7.jpg",
  "https://i.postimg.cc/xqHp87YB/G8.jpg",
  "https://i.postimg.cc/RJcgY3Xg/G9.jpg",
];

const IMAGES: { src: string; alt: string }[] = IMAGE_URLS.map((src, i) => ({
  src,
  alt: `Gallery image ${i + 1}`,
}));

function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <PageShell>
      <PageHeader
        eyebrow="Gallery"
        title="Gallery."
        intro="Photographs from rehearsals, recitals, and performances."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-4 md:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6 [column-fill:_balance]">
            {IMAGES.map((img, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="group block w-full mb-4 md:mb-6 break-inside-avoid overflow-hidden cursor-zoom-in"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-[1800ms] group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-700" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {active !== null && (
        <div
          className="fixed inset-0 z-[100] bg-[color:var(--onyx)]/97 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 fade-in"
          onClick={() => setActive(null)}
        >
          <button
            onClick={() => setActive(null)}
            aria-label="Close"
            className="absolute top-6 right-6 text-white/80 hover:text-[color:var(--gold)] transition-colors"
          >
            <X size={28} strokeWidth={1} />
          </button>
          <figure className="max-w-[90vw] max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={IMAGES[active].src}
              alt={IMAGES[active].alt}
              className="max-w-[90vw] max-h-[85vh] object-contain"
            />
          </figure>
        </div>
      )}
    </PageShell>
  );
}
