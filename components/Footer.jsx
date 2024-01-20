import styles from "../styles/Footer.module.css";

import { GiPlainCircle } from "react-icons/gi";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <GiPlainCircle size="25px" color="#f695c5" />
      <GiPlainCircle size="25px" color="#FFD100" />
      <GiPlainCircle size="25px" color="#1985A1" />
    </footer>
  );
}
