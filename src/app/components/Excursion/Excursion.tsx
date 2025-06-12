import styles from "./Excursion.module.scss";
import { titleH2 } from "@/app/fonts";
import Carousel from "./Carousel/Carousel";


export default function Excursion(){
    return (
            <div className={styles.excursions}>
                <h2 className={`${titleH2.className}`}>
                    Excrusions
                </h2>
                <Carousel />
            </div>
    )
}