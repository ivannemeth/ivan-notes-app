import useSWR from "swr";

import styles from "../styles/Form.module.css";

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" name="title" placeholder="Name your note" />

      <label htmlFor="description">Message:</label>
      <textarea
        id="description"
        name="description"
        cols="30"
        rows="10"
        placeholder="Write your note here"
      ></textarea>
      <label for="yellowRadioButton" className={styles.selectColorButton}>
        Yellow
      </label>
      <input
        type="radio"
        id="yellowRadioButton"
        name="color"
        value="#FFFAA0"
        checked
      />

      <label for="pinkRadioButton" className={styles.selectColorButton}>
        Pink
      </label>
      <input type="radio" id="pinkRadioButton" name="color" value="#f695c5" />
      <button>Add</button>
    </form>
  );
}
