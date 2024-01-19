import Link from "next/link";
import { IoIosAddCircle } from "react-icons/io";
import styles from "../styles/Home.module.css";

export default function Navigation({ setShowNotes }) {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.navbarHomelink} href="/">
        <h1>StickyMe*</h1>
      </Link>

      <IoIosAddCircle
        size="25px"
        color="white"
        onClick={() => setShowNotes((toggle) => !toggle)}
      />
    </nav>
  );
}
