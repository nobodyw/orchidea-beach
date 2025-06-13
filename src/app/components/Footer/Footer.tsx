import styles from "./Footer.module.scss";
import Image from "next/image";
import iconeTelpehone from "../../../../public/assets/Icones/telephoneFooter.svg";
import logo from "../../../../public/assets/Logo/logoBlack.svg";
import { futuraBook, navFont } from "@/app/fonts";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <Image src={logo} alt="Logo Orchidea Beach Footer" width={200} height={200} />
      </div>

      <div className={`${styles.footerCopyright} ${futuraBook.className}`}>
        <p>&copy; {new Date().getFullYear()} Orchidea Beach II. Tous droits réservés.</p>
        <p>Conçu par Michael W</p>
      </div>

      <div className={styles.footerContact}>
        <a href="tel:+261320438377" className={`${styles.footerLink} ${navFont.className}`}>
        <div className={styles.footerContactInfo}>
            <span className={styles.telNumber}>
                <Image src={iconeTelpehone} alt="Icone Téléphone"/>+261320438377
            </span>
        </div>
        <p className={`${styles.endText} ${futuraBook.className}`}>Réservez dès maintenant</p>
        </a>
      </div>
    </footer>
  );
}
