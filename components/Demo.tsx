"use client";

import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2, Volume1, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ShineBorder } from "@/components/ui/shine-border";

/* ── Helpers ── */
const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};

/* ── Custom progress / volume slider ── */
const CustomSlider = ({
  value,
  onChange,
  className,
}: {
  value: number;
  onChange: (value: number) => void;
  className?: string;
}) => (
  <motion.div
    className={cn("relative w-full h-1 bg-white/20 rounded-full cursor-pointer", className)}
    onClick={(e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      onChange(Math.min(Math.max(percentage, 0), 100));
    }}
  >
    <motion.div
      className="absolute top-0 left-0 h-full rounded-full"
      style={{ backgroundColor: "#d4783a", width: `${value}%` }}
      animate={{ width: `${value}%` }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    />
  </motion.div>
);

/* ── Video player ── */
function VideoPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [showControls, setShowControls] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) videoRef.current.pause();
    else videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (value: number) => {
    if (!videoRef.current) return;
    const newVolume = value / 100;
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const p = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(isFinite(p) ? p : 0);
    setCurrentTime(videoRef.current.currentTime);
    setDuration(videoRef.current.duration);
  };

  const handleSeek = (value: number) => {
    if (!videoRef.current?.duration) return;
    const time = (value / 100) * videoRef.current.duration;
    if (isFinite(time)) {
      videoRef.current.currentTime = time;
      setProgress(value);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
    if (!isMuted) {
      setVolume(0);
    } else {
      setVolume(1);
      videoRef.current.volume = 1;
    }
  };

  const setSpeed = (speed: number) => {
    if (!videoRef.current) return;
    videoRef.current.playbackRate = speed;
    setPlaybackSpeed(speed);
  };

  return (
    <motion.div
      className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.4)]"
      style={{ backgroundColor: "rgba(17,17,17,0.6)", backdropFilter: "blur(4px)" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        className="w-full cursor-pointer"
        onTimeUpdate={handleTimeUpdate}
        src={src}
        onClick={togglePlay}
        onEnded={() => setIsPlaying(false)}
      />

      {/* Play overlay when paused */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.button
            className="absolute inset-0 flex items-center justify-center"
            onClick={togglePlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "rgba(212,120,58,0.9)", boxShadow: "0 0 40px rgba(212,120,58,0.5)" }}
            >
              <Play className="h-7 w-7 text-white ml-1" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Controls bar */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-4 m-2 rounded-2xl"
            style={{ backgroundColor: "rgba(17,17,17,0.85)", backdropFilter: "blur(12px)" }}
            initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: 20, opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Progress bar */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-white/70 text-xs font-mono">{formatTime(currentTime)}</span>
              <CustomSlider value={progress} onChange={handleSeek} className="flex-1" />
              <span className="text-white/70 text-xs font-mono">{formatTime(duration)}</span>
            </div>

            {/* Controls row */}
            <div className="flex items-center justify-between">
              {/* Left — play + volume */}
              <div className="flex items-center gap-2">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    onClick={togglePlay}
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/10 hover:text-white"
                  >
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                  </Button>
                </motion.div>

                <div className="flex items-center gap-1">
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      onClick={toggleMute}
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/10 hover:text-white"
                    >
                      {isMuted ? <VolumeX className="h-5 w-5" /> : volume > 0.5 ? <Volume2 className="h-5 w-5" /> : <Volume1 className="h-5 w-5" />}
                    </Button>
                  </motion.div>
                  <div className="w-20">
                    <CustomSlider value={isMuted ? 0 : volume * 100} onChange={handleVolumeChange} />
                  </div>
                </div>
              </div>

              {/* Right — speed */}
              <div className="flex items-center gap-1">
                {[0.5, 1, 1.5, 2].map((speed) => (
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} key={speed}>
                    <Button
                      onClick={() => setSpeed(speed)}
                      variant="ghost"
                      size="sm"
                      className={cn(
                        "text-white text-xs hover:bg-white/10 hover:text-white px-2",
                        playbackSpeed === speed && "text-[#d4783a]"
                      )}
                    >
                      {speed}x
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ── Section wrapper ── */
export default function Demo() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: "var(--section-bg-primary)" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="label block mb-4">Démonstration</span>
          <h2
            className="font-serif leading-tight"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 400, color: "var(--text-primary)" }}
          >
            Les sujets abordés lors de{" "}
            <em style={{ color: "#c8622a", fontStyle: "italic" }}>la formation</em>
          </h2>
        </div>

        <ShineBorder
          borderRadius={16}
          borderWidth={4}
          duration={5}
        >
          <VideoPlayer src="/demo.mp4" />
        </ShineBorder>
      </div>
    </section>
  );
}
