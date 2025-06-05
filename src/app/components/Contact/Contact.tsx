import styles from "./Contact.module.scss";
import { titleH2, futuraBook, navFont } from "@/app/fonts";
import iconeTelephone from "../../../../public/assets/Icones/telephone.svg";
import iconeInformation from "../../../../public/assets/Icones/information.svg";
import Image from "next/image";

export default function Contact() {

    return (
        <section id="section_contact" className={styles.contact}>
            <h2 className={`${titleH2.className}`}>Orchidea Beach II, Sambava Centre, Madagascar</h2>
            <h3 className={`${titleH2.className} ${styles.textContact}`}>Contactez nous</h3>

            <div className={`${futuraBook.className} ${styles.contacts}`}>
                <div className={styles.telephone}>
                    <Image src={iconeTelephone} alt="Icone Téléphone" className={styles.iconeTelephone}/>
                    <a href="tel:+261320438377">++261320438377</a>
                </div>
                <div className={styles.hrContact}/>
                <div className={styles.email}>
                    <a href="mailto:Hotel@gmail.com">Hotel@gmail.com</a>
                </div>
            </div>

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
        </section>
    )
}