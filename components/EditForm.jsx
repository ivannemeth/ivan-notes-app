import useSWR from "swr";
import styles from "../styles/Home.module.css";
import { CgLaptop } from "react-icons/cg";

export default function EditForm({ setShowEditNotes, noteToEdit, mutate }) {
  /* const router = useRouter();
  const { id } = router.query;
console.log("id", id);*/
  const { data, isLoading } = useSWR(`/api/notes/${noteToEdit}`);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!data) {
    return;
  }
  //console.log("data", data);

  async function handleEdit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const noteData = Object.fromEntries(formData);

    const response = await fetch(`/api/notes/${noteToEdit}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(noteData),
    });

    if (response.ok) {
      mutate();
      setShowEditNotes(false);
      /*router.push("/") */
    }
  }

  return (
    <form onSubmit={handleEdit} className={styles.noteForm}>
      <div class="title" className={styles.formHeader}>
        Edit your sticky!
      </div>
      <label htmlFor="title" className={styles.inputLabel}>
        Title:
      </label>
      <input type="text" id="title" name="title" defaultValue={data?.title} />
      <label htmlFor="description" className={styles.inputLabel}>
        Message:
      </label>
      <textarea
        id="description"
        name="description"
        cols="30"
        rows="10"
        placeholder="Write your note here"
        defaultValue={data?.description}
      ></textarea>

      <button className={styles.addButton}>Save</button>
    </form>
  );
}
