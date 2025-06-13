"use client";
import styles from "./Contact.module.scss";
import { titleH2, futuraBook, navFont } from "@/app/fonts";
import iconeTelephone from "../../../../public/assets/Icones/telephone.svg";
import iconeInformation from "../../../../public/assets/Icones/information.svg";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className={`${titleH2.className}`}>
          Orchidea Beach II, Sambava Centre, Madagascar
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h3 className={`${titleH2.className} ${styles.textContact}`}>
          Contactez nous
        </h3>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className={`${futuraBook.className} ${styles.contacts}`}>
          <div className={styles.telephone}>
            <Image
              src={iconeTelephone}
              alt="Icone Téléphone"
              className={styles.iconeTelephone}
            />
            <a href="tel:+261320438377">+261320438377</a>
          </div>
          <div className={styles.hrContact} />
          <div className={styles.email}>
            <a href="mailto:Hotel@gmail.com">ORCHIDEABEACH2@GMAIL.COM</a>
          </div>
        </div>
      </motion.div>

      <div className={styles.info}>
        <p className={navFont.className}>
          <Image
            src={iconeInformation}
            alt="Icone Information"
            className={styles.iconeInformation}
          />
          Les réservations se font exclusivement par téléphone
        </p>
      </div>
    </div>
  );
}
