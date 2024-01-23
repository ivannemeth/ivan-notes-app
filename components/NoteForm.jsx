import useSWR from "swr";
import { TiDelete } from "react-icons/ti";
/*import styles from "../styles/Form.module.css";*/
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

      <div className={styles.formHeader}>Create a sticky!</div>
      <label htmlFor="title" className={styles.inputLabel}>
        Title:
      </label>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Name your note"
        maxlength="30"
      />

      <label htmlFor="description" className={styles.inputLabel}>
        Message:
      </label>
      <textarea
        id="description"
        name="description"
        cols="15"
        rows="8"
        placeholder="Write more text here"
        maxlength="170"
        className={styles.inputDecription}
      ></textarea>
      <label htmlFor="yellowRadioButton" className={styles.selectColorButton}>
        Yellow
      </label>
      <input
        type="radio"
        id="yellowRadioButton"
        name="color"
        value="#FFD100"
        defaultChecked
      />

      <label htmlFor="pinkRadioButton" className={styles.selectColorButton}>
        Pink
      </label>
      <input type="radio" id="pinkRadioButton" name="color" value="#f695c5" />
      <label htmlFor="blueRadioButton" className={styles.selectColorButton}>
        Blue
      </label>
      <input type="radio" id="blueRadioButton" name="color" value="#1985A1" />
      <button className={styles.submitButton}>Add</button>
    </form>
  );
}
