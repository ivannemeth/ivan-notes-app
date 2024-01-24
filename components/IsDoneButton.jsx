import { ImCheckmark } from "react-icons/im";
import styles from "../styles/Home.module.css";

export default function IsDoneButton({ id, mutate, isDone }) {
  /*console.log("id", id);*/
  const toggledIsDone = !isDone;
  async function handleIsDone() {
    const response = await fetch(`/api/notes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isDone: toggledIsDone }),
    });

    if (response.ok) {
      mutate();
    }

    /*isDone ? styles.noteTitleStrike : styles.noteTitle;*/
  }

  return <ImCheckmark onClick={handleIsDone} className={styles.isDoneButton} />;
}
