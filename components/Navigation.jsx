import Link from "next/link";
import { IoIosAddCircle } from "react-icons/io";
import styles from "../styles/Home.module.css";

export default function Navigation({ setShowNotes, setNoteColor }) {
  function handleClick(color) {
    setShowNotes((toggle) => !toggle);
    setNoteColor(color);
  }

  return (
    <nav className={styles.navbar}>
      <Link className={styles.navbarHomelink} href="/">
        <h1>StickyMe*</h1>
      </Link>
      <div>
        <IoIosAddCircle
          size="25px"
          color="yellow"
          onClick={() => handleClick("yellow")}
        />

        <IoIosAddCircle
          size="25px"
          color="#f695c5"
          onClick={() => handleClick("#f695c5")}
        />
      </div>
    </nav>
  );
}
