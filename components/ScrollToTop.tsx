"use client";

import { useLayoutEffect } from "react";

export default function ScrollToTop() {
  useLayoutEffect(() => {
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    requestAnimationFrame(() => {
      document.documentElement.style.scrollBehavior = "";
    });
  }, []);
  return null;
}
