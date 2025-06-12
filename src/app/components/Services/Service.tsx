"use client";
import styles from "./Service.module.scss";
import Cards from "../Cards/Cards";
import { titleH2 } from "@/app/fonts";
import { dataCards } from "../Cards/DataCards";
import { motion } from "framer-motion";

export default function Service() {
  return (
    <div className={styles.services}>
      <h2 className={`${titleH2.className}`}>Nos Services</h2>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className={styles.blockCards}>
          {dataCards.map((card, index: number) => (
            <Cards
              key={index}
              image={card.image}
              name={card.name}
              description={card.description}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
