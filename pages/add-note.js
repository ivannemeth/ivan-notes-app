import NoteForm from "@/components/NoteForm";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function AddNotePage() {
  return (
    <>
      <nav className={styles.navbar}>
        <Link className={styles.navbarHomelink} href="/">
          <h2>StickyMe*</h2>
        </Link>
      </nav>
      <NoteForm />
    </>
  );
}
