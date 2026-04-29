"use client";

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
} from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ScrollExpandMediaProps {
  mediaType?: "video" | "image";
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

export default function ScrollExpandMedia({
  mediaType = "video",
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaType]);

  useEffect(() => {
    const handleWheel = (e: Event) => {
      const we = e as unknown as { deltaY: number; preventDefault: () => void };
      if (mediaFullyExpanded && we.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        we.preventDefault();
      } else if (!mediaFullyExpanded) {
        we.preventDefault();
        const delta = we.deltaY * 0.0009;
        setScrollProgress((prev) => {
          const next = Math.min(Math.max(prev + delta, 0), 1);
          if (next >= 1) { setMediaFullyExpanded(true); setShowContent(true); }
          else if (next < 0.75) { setShowContent(false); }
          return next;
        });
      }
    };

    const handleTouchStart = (e: Event) => {
      const te = e as unknown as { touches: { clientY: number }[] };
      setTouchStartY(te.touches[0].clientY);
    };

    const handleTouchMove = (e: Event) => {
      const te = e as unknown as { touches: { clientY: number }[]; preventDefault: () => void };
      if (!touchStartY) return;
      const deltaY = touchStartY - te.touches[0].clientY;
      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        te.preventDefault();
      } else if (!mediaFullyExpanded) {
        te.preventDefault();
        const factor = deltaY < 0 ? 0.008 : 0.005;
        const delta = deltaY * factor;
        setScrollProgress((prev) => {
          const next = Math.min(Math.max(prev + delta, 0), 1);
          if (next >= 1) { setMediaFullyExpanded(true); setShowContent(true); }
          else if (next < 0.75) { setShowContent(false); }
          return next;
        });
        setTouchStartY(te.touches[0].clientY);
      }
    };

    const handleTouchEnd = () => setTouchStartY(0);

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const mediaWidth  = 300 + scrollProgress * (isMobile ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobile ? 200 : 400);
  const textShift   = scrollProgress * (isMobile ? 180 : 150);

  const firstWord   = title ? title.split(" ")[0] : "";
  const restOfTitle = title ? title.split(" ").slice(1).join(" ") : "";

  return (
    <div ref={sectionRef} className="overflow-x-hidden">
      <section className="relative flex flex-col items-center justify-start min-h-[100dvh]">
        <div className="relative w-full flex flex-col items-center min-h-[100dvh]">

          {/* ── Ambient background ── */}
          <motion.div
            className="absolute inset-0 z-0 h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            <Image
              src={bgImageSrc}
              alt=""
              width={1920}
              height={1080}
              className="w-screen h-screen object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>

          <div className="container mx-auto flex flex-col items-center justify-start relative z-10">
            <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">

              {/* ── Expanding media ── */}
              <div
                className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden"
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: "95vw",
                  maxHeight: "85vh",
                  boxShadow: "0 0 60px rgba(0,0,0,0.4)",
                }}
              >
                {mediaType === "video" ? (
                  mediaSrc.includes("youtube.com") || mediaSrc.includes("youtu.be") ? (
                    <div className="relative w-full h-full pointer-events-none">
                      <iframe
                        width="100%"
                        height="100%"
                        src={
                          mediaSrc.includes("embed")
                            ? mediaSrc + (mediaSrc.includes("?") ? "&" : "?") + "autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1"
                            : mediaSrc.replace("watch?v=", "embed/") + "?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=" + mediaSrc.split("v=")[1]
                        }
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                      <motion.div
                        className="absolute inset-0 bg-black/30"
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  ) : (
                    <div className="relative w-full h-full pointer-events-none">
                      <video
                        src={mediaSrc}
                        poster={posterSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                      />
                      <motion.div
                        className="absolute inset-0 bg-black/30"
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  )
                ) : (
                  <div className="relative w-full h-full">
                    <Image
                      src={mediaSrc}
                      alt={title || ""}
                      width={1280}
                      height={720}
                      className="w-full h-full object-cover"
                    />
                    <motion.div
                      className="absolute inset-0 bg-black/40"
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: 0.7 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                )}

                {/* Date + scroll hint below media */}
                <div className="absolute -bottom-10 left-0 right-0 flex flex-col items-center gap-1 transition-none">
                  {date && (
                    <p
                      className="font-mono text-xs uppercase tracking-widest"
                      style={{ color: "rgba(200,98,42,0.8)", transform: `translateX(-${textShift}vw)` }}
                    >
                      {date}
                    </p>
                  )}
                  {scrollToExpand && (
                    <p
                      className="font-sans text-xs"
                      style={{ color: "rgba(240,236,226,0.5)", transform: `translateX(${textShift}vw)` }}
                    >
                      {scrollToExpand}
                    </p>
                  )}
                </div>
              </div>

              {/* ── Split title ── */}
              {title && (
                <div
                  className={`flex items-center justify-center text-center gap-4 w-full relative z-10 flex-col ${
                    textBlend ? "mix-blend-difference" : "mix-blend-normal"
                  }`}
                >
                  <h2
                    className="font-serif font-normal"
                    style={{
                      fontSize: "clamp(2.5rem, 6vw, 5rem)",
                      color: "#f0ece2",
                      transform: `translateX(-${textShift}vw)`,
                      transition: "none",
                    }}
                  >
                    {firstWord}
                  </h2>
                  <h2
                    className="font-serif font-normal"
                    style={{
                      fontSize: "clamp(2.5rem, 6vw, 5rem)",
                      color: "#c8622a",
                      transform: `translateX(${textShift}vw)`,
                      transition: "none",
                    }}
                  >
                    {restOfTitle}
                  </h2>
                </div>
              )}
            </div>

            {/* ── Children revealed after full expansion ── */}
            {children && (
              <motion.section
                className="flex flex-col w-full px-8 py-10 md:px-16 lg:py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: showContent ? 1 : 0 }}
                transition={{ duration: 0.7 }}
              >
                {children}
              </motion.section>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
