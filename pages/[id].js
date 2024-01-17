import EditForm from "@/components/EditForm";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function EditNotePage() {
  return (
    <>
      <nav className={styles.navbar}>
        <Link className={styles.navbarHomelink} href="/">
          <h2>StickyMe*</h2>
        </Link>
      </nav>
      <EditForm />
    </>
  );
}
