import styles from "./Experience.module.scss";
import { titleH2 } from "@/app/fonts";
import Carousel from "./Carousel/Carousel";

export default function Experience() {
  return (
    <div className={styles.experience}>
        <h2 className={titleH2.className}>Vivez une experience unique</h2>
      <Carousel />
    </div>
  );
}
