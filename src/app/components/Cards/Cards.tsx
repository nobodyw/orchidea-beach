import styles from "./Cards.module.scss";
import Image, { StaticImageData } from "next/image";
import { navFont } from "@/app/fonts";

interface CardsProps {
  name: string;
  description: string;
  image: StaticImageData;
}

export default function Cards({ name, description, image }: CardsProps) {
  return (
    <div className={styles.cards}>
      <Image src={image} alt={name} />
      <div className={styles.textName}>
        <p className={navFont.className}>{name}</p>
      </div>
      <p className={`${navFont.className} ${styles.description}`}>{description}</p>
    </div>
  );
}
