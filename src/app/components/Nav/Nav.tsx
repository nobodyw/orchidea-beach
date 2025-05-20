"use client";
import styles from "./Nav.module.scss";
import Image from "next/image";
import logoBlack from "../../../../public/assets/Logo/logoBlack.svg";
import logoWhite from "../../../../public/assets/Logo/logoWhite.svg";
import bmClose from "../../../../public/assets/Nav/bmClose.svg";
import bmCloseWhite from "../../../../public/assets/Nav/bmCloseWhite.svg";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { navFont } from "@/app/fonts";


export default function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <div
      className={`navbar ${navFont.className} ${styles.nav} ${
        scrolled ? styles.navScrolled : ""
      }`}
    >
      <div className={styles.burgerMenu}>
        {scrolled ? (
          <Image src={bmCloseWhite} alt="Open Burger Menu" />
        ) : (
          <Image src={bmClose} alt="Open Burger Menu" />
        )}
        <span>Menu</span>
      </div>

      <div className={styles.logo}>
        {scrolled ? (
          <Image src={logoWhite} alt="Logo Orchidea Beach" />
        ) : (
          <Image src={logoBlack} alt="Logo Orchidea Beach" />
        )}
      </div>

      <div className={styles.contact}>
        <span>Contact</span>
      </div>
    </div>
  );
}
