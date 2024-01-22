import Link from "next/link";
import { IoIosAddCircle } from "react-icons/io";
import styles from "../styles/Home.module.css";

export default function Navigation({ setShowNotes }) {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <h1 className={styles.h1Title}>StickyMe*</h1>
      </Link>
      <IoIosAddCircle
        size="30px"
        color="white"
        onClick={() => setShowNotes((toggle) => !toggle)}
      />
    </nav>
  );
}
