"use client";

import * as React from "react";
import { motion, Transition, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export interface GlowMenuItem {
  icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  href: string;
  gradient: string;
  iconColor: string;
}

interface GlowMenuBarProps {
  items: GlowMenuItem[];
  activeItem?: string;
  onItemClick?: (label: string, href: string) => void;
  className?: string;
}

const cubicEase = [0.4, 0, 0.2, 1] as [number, number, number, number];

const itemVariants: Variants = {
  initial: { rotateX: 0, opacity: 1 },
  hover:   { rotateX: -90, opacity: 0 },
};

const backVariants: Variants = {
  initial: { rotateX: 90, opacity: 0 },
  hover:   { rotateX: 0, opacity: 1 },
};

const glowVariants: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: cubicEase },
      scale:   { duration: 0.5, type: "spring" as const, stiffness: 300, damping: 25 },
    },
  },
};

const navGlowVariants: Variants = {
  initial: { opacity: 0 },
  hover:   { opacity: 1, transition: { duration: 0.5, ease: cubicEase } },
};

const sharedTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  duration: 0.5,
};

export const GlowMenuBar = React.forwardRef<HTMLElement, GlowMenuBarProps>(
  ({ className, items, activeItem, onItemClick }, ref) => {
    return (
      <motion.nav
        ref={ref as React.Ref<HTMLElement>}
        className={cn("p-1.5 rounded-2xl relative overflow-hidden", className)}
        style={{ background: "transparent" }}
        initial="initial"
        whileHover="hover"
      >
        {/* Nav-wide glow on hover */}
        <motion.div
          className="absolute -inset-2 rounded-3xl z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(200,98,42,0.12) 0%, rgba(200,98,42,0.06) 40%, transparent 70%)",
          }}
          variants={navGlowVariants}
        />

        <ul className="flex items-center gap-1 relative z-10">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = item.label === activeItem;

            return (
              <motion.li key={item.label} className="relative">
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    onItemClick?.(item.label, item.href);
                    document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="block w-full"
                >
                  <motion.div
                    className="block rounded-xl overflow-visible group relative"
                    style={{ perspective: "600px" }}
                    whileHover="hover"
                    initial="initial"
                  >
                    {/* Per-item glow */}
                    <motion.div
                      className="absolute inset-0 z-0 pointer-events-none rounded-xl"
                      variants={glowVariants}
                      animate={isActive ? "hover" : "initial"}
                      style={{ background: item.gradient, opacity: isActive ? 1 : 0 }}
                    />

                    {/* Front face */}
                    <motion.div
                      className="flex items-center gap-2 px-4 py-2 relative z-10 rounded-xl text-sm font-sans"
                      style={{
                        color: isActive ? "var(--text-primary)" : "var(--text-primary-muted)",
                        transformStyle: "preserve-3d",
                        transformOrigin: "center bottom",
                      }}
                      variants={itemVariants}
                      transition={sharedTransition}
                    >
                      <span style={{ color: isActive ? "#c8622a" : "var(--text-primary-muted)" }}>
                        <Icon className="h-4 w-4" />
                      </span>
                      <span>{item.label}</span>
                    </motion.div>

                    {/* Back face (flip) */}
                    <motion.div
                      className="flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 rounded-xl text-sm font-sans"
                      style={{
                        color: "var(--text-primary)",
                        transformStyle: "preserve-3d",
                        transformOrigin: "center top",
                        rotateX: 90,
                      }}
                      variants={backVariants}
                      transition={sharedTransition}
                    >
                      <span style={{ color: "#c8622a" }}>
                        <Icon className="h-4 w-4" />
                      </span>
                      <span>{item.label}</span>
                    </motion.div>
                  </motion.div>
                </a>
              </motion.li>
            );
          })}
        </ul>
      </motion.nav>
    );
  }
);

GlowMenuBar.displayName = "GlowMenuBar";
