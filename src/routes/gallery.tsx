import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

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

// Edit this list to add/remove images.
const IMAGES: string[] = [
  "https://i.postimg.cc/wjJk7S8k/A1.jpg",
  "https://i.postimg.cc/tJxsBGzc/A2.jpg",
  "https://i.postimg.cc/7h25KrNW/A3.jpg",
  "https://i.postimg.cc/7h25KrNB/B1.jpg",
  "https://i.postimg.cc/Hnyr61tv/B2.jpg",
  "https://i.postimg.cc/7brfctBB/B3.jpg",
  "https://i.postimg.cc/141fT7WY/B4.jpg",
  "https://i.postimg.cc/jCYL938M/B5.jpg",
  "https://i.postimg.cc/MXJv43sP/B6.jpg",
  "https://i.postimg.cc/nMfC5SdW/B7.jpg",
  "https://i.postimg.cc/3WQd6fSh/B8.jpg",
  "https://i.postimg.cc/dDcLXNHM/B9.jpg",
  "https://i.postimg.cc/xqVc7pxD/B10.jpg",
  "https://i.postimg.cc/xqVc7pxV/C1.jpg",
  "https://i.postimg.cc/s1Cv8H6R/C2-092018.jpg",
  "https://i.postimg.cc/F1X7qCWN/C3-092018.jpg",
  "https://i.postimg.cc/jCYL93gS/C4-112018.jpg",
  "https://i.postimg.cc/XX6ph1Hn/C5-122019.jpg",
  "https://i.postimg.cc/WtchKYWb/C6-092021.jpg",
  "https://i.postimg.cc/mhWtqpXD/C7.jpg",
  "https://i.postimg.cc/66y1fWDY/C8.jpg",
  "https://i.postimg.cc/YjBhVDn0/D1.jpg",
  "https://i.postimg.cc/BZXwBSdh/D2.jpg",
  "https://i.postimg.cc/QNHnJ8R4/D3.jpg",
  "https://i.postimg.cc/jqLk4xpV/D4.jpg",
  "https://i.postimg.cc/dQLSjsbF/D5.jpg",
  "https://i.postimg.cc/KcRsDG6S/D6.jpg",
  "https://i.postimg.cc/zDVPFz99/E1.jpg",
  "https://i.postimg.cc/QNwY4LDj/E2.jpg",
  "https://i.postimg.cc/J7Gd5rft/E3.jpg",
  "https://i.postimg.cc/NGSCJhtY/F1.jpg",
  "https://i.postimg.cc/05FXWgvj/F2.jpg",
  "https://i.postimg.cc/ZY2s7km0/F3.jpg",
  "https://i.postimg.cc/QNwY4LDH/F4.jpg",
  "https://i.postimg.cc/tRwvS0bR/F5.jpg",
  "https://i.postimg.cc/G3Vg70RD/F6.jpg",
  "https://i.postimg.cc/y6tpQqKF/F7.jpg",
  "https://i.postimg.cc/qBSDbfrX/F8.jpg",
  "https://i.postimg.cc/fWpq24sf/F9.jpg",
  "https://i.postimg.cc/kXS1LjM8/G1.jpg",
  "https://i.postimg.cc/ncmRNdVB/G2.jpg",
  "https://i.postimg.cc/fTd21HW9/G3.jpg",
  "https://i.postimg.cc/L6PCGy4T/G4.jpg",
  "https://i.postimg.cc/dtCHgWQn/G5.jpg",
  "https://i.postimg.cc/tC6S8rRv/G6.jpg",
  "https://i.postimg.cc/qMKbWmBb/G7.jpg",
  "https://i.postimg.cc/Qx74v6Nw/G8.jpg",
  "https://i.postimg.cc/jdfgB8qp/G9.jpg",
];

function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);
  const total = IMAGES.length;

  const open = useCallback((i: number) => setActive(i), []);
  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % total)),
    [total],
  );
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + total) % total)),
    [total],
  );

  return (
    <PageShell>
      <PageHeader
        eyebrow="Gallery"
        title="Gallery."
        intro="Photographs from rehearsals, recitals, and performances."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1600px] px-4 md:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-5">
            {IMAGES.map((src, i) => (
              <button
                key={src}
                onClick={() => open(i)}
                aria-label={`Open image ${i + 1} of ${total}`}
                className="group relative block aspect-square overflow-hidden bg-muted cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gold,theme(colors.primary.DEFAULT))]"
              >
                <img
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 group-hover:shadow-2xl" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {active !== null && (
        <Lightbox
          images={IMAGES}
          index={active}
          onClose={close}
          onNext={next}
          onPrev={prev}
        />
      )}
    </PageShell>
  );
}

function Lightbox({
  images,
  index,
  onClose,
  onNext,
  onPrev,
}: {
  images: string[];
  index: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  const total = images.length;
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Keyboard handling
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") onNext();
      else if (e.key === "ArrowLeft") onPrev();
      else if (e.key === "Tab") {
        // Focus trap: keep focus within the modal
        const focusables = containerRef.current?.querySelectorAll<HTMLElement>(
          "button",
        );
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onNext, onPrev]);

  // Lock body scroll while open
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  // Initial focus
  useEffect(() => {
    closeBtnRef.current?.focus();
  }, []);

  // Preload adjacent images
  useEffect(() => {
    const preload = (i: number) => {
      const img = new Image();
      img.src = images[i];
    };
    preload((index + 1) % total);
    preload((index - 1 + total) % total);
  }, [index, images, total]);

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Image ${index + 1} of ${total}`}
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 md:p-6 text-white/90 z-10">
        <span className="text-xs md:text-sm tracking-[0.25em] uppercase tabular-nums">
          {index + 1} / {total}
        </span>
        <button
          ref={closeBtnRef}
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Close gallery"
          className="rounded-full p-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <X size={24} strokeWidth={1.5} />
        </button>
      </div>

      {/* Prev */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous image"
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 md:p-3 text-white/80 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <ChevronLeft size={32} strokeWidth={1.5} />
      </button>

      {/* Image */}
      <div
        className="relative max-w-[92vw] max-h-[85vh] flex items-center justify-center animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={images[index]}
          src={images[index]}
          alt={`Gallery image ${index + 1} of ${total}`}
          className="max-w-[92vw] max-h-[85vh] object-contain select-none"
          draggable={false}
        />
      </div>

      {/* Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 md:p-3 text-white/80 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <ChevronRight size={32} strokeWidth={1.5} />
      </button>
    </div>
  );
}
