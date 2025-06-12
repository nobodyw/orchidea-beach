"use client";
import styles from "./Nav.module.scss";
import Image from "next/image";
import logoBlack from "@/../public/assets/Logo/logoBlack.svg";
import logoWhite from "@/../public/assets/Logo/logoWhite.svg";
import bmClose from "@/../public/assets/Nav/bmClose.svg";
import bmCloseWhite from "@/../public/assets/Nav/bmCloseWhite.svg";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";
import { navFont } from "@/app/fonts";

export default function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Ajout de la détection de la section active pour la modal
  const [activeSection, setActiveSection] = useState<string>("");

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  // Met à jour la section active lors du scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "section-0",
        "section-1",
        "section-2",
        "section-3",
        "section-4",
      ];
      let found = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 130 && rect.bottom > 130) {
            found = id;
            break;
          }
        }
      }
      setActiveSection(found);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fonction pour scroller avec offset
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setModalOpen(false);
  };

  return (
    <>
      <div
        className={`navbar ${navFont.className} ${styles.nav} ${
          scrolled ? styles.navScrolled : ""
        }`}
      >
        <div
          className={styles.burgerMenu}
          onClick={() => setModalOpen(true)}
          style={{ cursor: "pointer" }}
        >
          {scrolled ? (
            <Image src={bmCloseWhite} alt="Open Burger Menu" />
          ) : (
            <Image src={bmClose} alt="Open Burger Menu" />
          )}
          <span>Menu</span>
        </div>

        <div
          className={styles.logo}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ cursor: "pointer" }}
        >
          {scrolled ? (
            <Image src={logoWhite} alt="Logo Orchidea Beach" />
          ) : (
            <Image src={logoBlack} alt="Logo Orchidea Beach" />
          )}
        </div>

        <div className={styles.contact}>
          <a
            href="#section-1"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("section-1");
            }}
          >
            <span>Contact</span>
          </a>
        </div>
      </div>
      {modalOpen && (
        <div className={styles.modalOverlay} onClick={() => setModalOpen(false)}>
          <div className={styles.modalSidebar} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeButton}
              onClick={() => setModalOpen(false)}
            >
              &times;
            </button>
            <a
              href="#section-0"
              className={activeSection === "section-0" ? styles.active : ""}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("section-0");
              }}
            >
              Accueil
            </a>
            <a
              href="#section-1"
              className={activeSection === "section-1" ? styles.active : ""}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("section-1");
              }}
            >
              Contact
            </a>
            <a
              href="#section-2"
              className={activeSection === "section-2" ? styles.active : ""}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("section-2");
              }}
            >
              Expérience
            </a>
            <a
              href="#section-3"
              className={activeSection === "section-3" ? styles.active : ""}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("section-3");
              }}
            >
              Services
            </a>
            <a
              href="#section-4"
              className={activeSection === "section-4" ? styles.active : ""}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("section-4");
              }}
            >
              Excursion
            </a>
          </div>
        </div>
      )}
    </>
  );
}
