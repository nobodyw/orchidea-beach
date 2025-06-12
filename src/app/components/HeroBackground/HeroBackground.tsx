"use client";
import styles from "./HeroBackground.module.scss";
import { titleH1 } from "@/app/fonts";
import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className={styles.background}>
      <div className={`${styles.backgroundImage} titleH1`}>
        <motion.div
          initial={{ opacity: 0, y: 40 }} // Départ invisible et décalé vers le bas
          whileInView={{ opacity: 1, y: 0 }} // Quand l’élément entre dans la vue : visible et à sa place
          transition={{ duration: 0.6 }} // Durée de l’animation
        >
          <h1 className={titleH1.className}>
            {`Bienvenue à l'hôtel`}
            <br />
            {`ORCHIDEA BEACH II`}
          </h1>
        </motion.div>
      </div>
    </div>
  );
}
