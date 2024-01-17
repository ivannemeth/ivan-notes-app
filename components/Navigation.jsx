import Link from "next/link";
import { IoIosAddCircle } from "react-icons/io";
import styles from "../styles/Home.module.css";

export default function Navigation() {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.navbarHomelink} href="/">
        <h1>StickyMe*</h1>
      </Link>
      <Link className={styles.navbarAddlink} href="/add-note">
        <IoIosAddCircle size="25px" color="white" />
      </Link>
    </nav>
  );
}
