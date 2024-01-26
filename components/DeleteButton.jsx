import { TiDelete } from "react-icons/ti";
import styles from "../styles/Home.module.css";

export default function DeleteButton({ id, mutate }) {
  /*console.log("id", id);*/

  async function handleDelete() {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      try {
        const response = await fetch(`/api/notes/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          mutate();
          /*setTimeout(() => {
            alert("Note deleted successfully.");
          }, 500);
          //router.replace("/");*/
        } else {
          alert("Failed to delete the note.");
        }
      } catch (error) {
        console.error("An error occurred:", error);
        alert("An error occurred while deleting the note.");
      }
    }
  }

  return (
    <TiDelete
      onClick={() => handleDelete()}
      className={styles.deleteButtonNote}
    />
  );

  /*button onClick={() => handleDelete()}>Delete</TiDelete>;*/
}
