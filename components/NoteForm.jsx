import useSWR from "swr";
import { TiDelete } from "react-icons/ti";
import styles from "../styles/Home.module.css";

export default function NoteForm({ setShowNotes }) {
  const { mutate } = useSWR("/api/notes");

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const noteData = Object.fromEntries(formData);

    const response = await fetch("/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(noteData),
    });

    if (!response.ok) {
      console.error(response.status);
      return;
    }

    mutate();
    setShowNotes(false);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.noteForm}>
      <TiDelete
        className={styles.deleteButton}
        onClick={() => setShowNotes(false)}
      />

      <div className={styles.formHeader}>create a sticky*</div>
      <label htmlFor="title" className={styles.inputLabel}>
        title:
      </label>
      <input
        className={styles.inputTitle}
        type="text"
        id="title"
        name="title"
        placeholder="write down just a quick note... "
        maxLength="30"
        required
      />

      <label htmlFor="description" className={styles.inputLabel}>
        description:
      </label>
      <textarea
        id="description"
        name="description"
        cols="15"
        rows="8"
        placeholder="write more here if you need to..."
        maxLength="220"
        className={styles.inputDescription}
      ></textarea>
      <label htmlFor="yellowRadioButton" className={styles.selectColorButton}>
        color:
      </label>

      <input
        type="radio"
        id="yellowRadioButton"
        name="color"
        value="#FFD100"
        className={styles.inputRadioYellow}
        defaultChecked
      />

      <input
        type="radio"
        id="pinkRadioButton"
        name="color"
        value="#f695c5"
        className={styles.inputRadioPink}
      />

      <input
        type="radio"
        id="blueRadioButton"
        name="color"
        value="#1985A1"
        className={styles.inputRadioBlue}
      />
      <button className={styles.submitButton}>Add</button>
    </form>
  );
}
