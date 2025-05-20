import styles from './HeroBackground.module.scss';
import { titleH1 } from "@/app/fonts";
// import Image from 'next/image';

export default function HeroBackground(){
    return (
        <div className={styles.background}>
            <div className={`${styles.backgroundImage} titleH1`}>
                <h1 className={titleH1.className}>{`Bienvenue à l'hôtel`}<br />{`ORCHIDEA BEACH II`}</h1>
            </div>
        </div>

    )
}