"use client";
import { useEffect } from "react";

interface SectionScrollProps {
  sectionSelector?: string; // Par défaut : "section[id^='section-']"
  offset?: number; // Décalage pour la navbar (en px)
  scrollDelay?: number; // Durée du scroll (en ms)
}

export default function SectionScroll({ sectionSelector = "section[id^='section-']", offset = 0, scrollDelay = 700 }: SectionScrollProps) {
  useEffect(() => {
    const getSections = () => Array.from(document.querySelectorAll(sectionSelector));
    let isScrolling = false;

    const onWheel = (e: WheelEvent) => {
      if (isScrolling) return;
      const sections = getSections();
      // Trouver la section la plus proche du haut (en tenant compte de l'offset)
      const current = sections.findIndex(sec => {
        const rect = sec.getBoundingClientRect();
        return rect.top <= offset + 1 && rect.bottom > offset + 1;
      });
      if (current === -1) return;
      let next = current;
      if (e.deltaY > 0 && current < sections.length - 1) next = current + 1;
      if (e.deltaY < 0 && current > 0) next = current - 1;
      if (next !== current && sections[next]) {
        isScrolling = true;
        const top = sections[next].getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
        setTimeout(() => { isScrolling = false; }, scrollDelay);
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [sectionSelector, offset, scrollDelay]);

  return null;
}
