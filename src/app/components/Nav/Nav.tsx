import styles from './Nav.module.scss';
import Image from 'next/image';
import logoBlack from '../../../../public/assets/Logo/logoBlack.svg';
import bmClose from '../../../../public/assets/Nav/bmClose.svg';
export default function Nav() {
  return (
    <div className={`navbar navFont ${styles.nav}`}>
        <div className={styles.burgerMenu}>
            <Image src={bmClose} alt="Open Burger Menu"/>
            <span>Menu</span>
        </div>
        <div className={styles.logo}>
            <Image src={logoBlack} alt="Logo Orchidea Beach"/>
        </div>
        <div className={styles.contact}>
            <span>Contact</span>
        </div>
    </div>
  );
}
