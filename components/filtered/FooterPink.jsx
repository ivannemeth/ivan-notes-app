import Link from "next/link";
import { CgArrowLeftO } from "react-icons/cg";
import { GiPlainCircle } from "react-icons/gi";
import styles from "../../styles/Footer.module.css";

export default function FooterPink() {
  return (
    <footer className={styles.footer}>
      <Link href="/">
        <CgArrowLeftO
          size="25px"
          color="white"
          className={styles.linkNewPageIcon}
        />
      </Link>
      <Link href="/yellow-notes">
        <GiPlainCircle
          size="25px"
          color="#FFD100"
          className={styles.linkNewPageIcon}
        />
      </Link>
      <Link href="/blue-notes">
        <GiPlainCircle
          size="25px"
          color="#1985A1"
          className={styles.linkNewPageIcon}
        />
      </Link>
    </footer>
  );
}
