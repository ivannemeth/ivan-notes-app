import Link from "next/link";
import { RiHomeFill } from "react-icons/ri";
import { GiPlainCircle } from "react-icons/gi";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="/">
        <RiHomeFill size="25px" color="white" />
      </Link>
      <Link href="/yellow-notes">
        <GiPlainCircle size="25px" color="#FFD100" />
      </Link>
      <GiPlainCircle size="25px" color="#f695c5" />
      <GiPlainCircle size="25px" color="#1985A1" />
    </footer>
  );
}
