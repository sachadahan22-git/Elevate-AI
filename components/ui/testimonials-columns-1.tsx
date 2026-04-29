"use client";

import React from "react";
import { motion } from "motion/react";

export type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-5 pb-5"
      >
        {[...new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div
                key={i}
                className="p-7 rounded-sm max-w-xs w-full flex flex-col gap-4"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                }}
              >
                {/* Stars */}
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, si) => (
                    <svg key={si} width="12" height="12" viewBox="0 0 12 12" fill="#c8622a">
                      <path d="M6 1l1.236 2.506L10 4l-2 1.95.472 2.75L6 7.5l-2.472 1.2L4 5.95 2 4l2.764-.494z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p
                  className="font-serif text-base leading-relaxed"
                  style={{ color: "var(--text-primary)", fontWeight: 400 }}
                >
                  &ldquo;{text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 mt-2">
                  <img
                    width={36}
                    height={36}
                    src={image}
                    alt={name}
                    className="rounded-sm flex-shrink-0"
                    style={{
                      width: 36,
                      height: 36,
                      objectFit: "cover",
                      border: "1px solid rgba(200,98,42,0.2)",
                    }}
                  />
                  <div>
                    <p
                      className="font-sans text-sm font-medium leading-tight"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {name}
                    </p>
                    <p
                      className="font-mono text-xs uppercase tracking-wider leading-tight mt-0.5"
                      style={{ color: "rgba(200,98,42,0.7)" }}
                    >
                      {role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))]}
      </motion.div>
    </div>
  );
};
