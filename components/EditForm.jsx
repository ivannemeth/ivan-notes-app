import useSWR, { mutate } from "swr";
import styles from "../styles/Home.module.css";
import { CgLaptop } from "react-icons/cg";
import { TiDelete } from "react-icons/ti";
import { useEffect } from "react";
import MoonLoader from "react-spinners/MoonLoader";

export default function EditForm({ setShowEditNotes, noteToEdit }) {
  const { data, isLoading } = useSWR(`/api/notes/${noteToEdit}`);
  if (isLoading) {
    return (
      <div className={styles.loader}>
        <MoonLoader color="#ffffff" />
      </div>
    );
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
      mutate((key) => key == "/api/notes" || key == `/api/notes/${noteToEdit}`);
      /*mutate({...data,...noteData});
      /*mutateNotes();*/
      setShowEditNotes(false);
    }
  }

  return (
    <>
      <form onSubmit={handleEdit} className={styles.noteForm}>
        <TiDelete
          className={styles.deleteButton}
          onClick={() => setShowEditNotes(false)}
        />
        <div className={styles.formHeader}>edit your sticky*</div>
        <label htmlFor="title" className={styles.inputLabel}>
          title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={data?.title}
          className={styles.inputTitle}
          maxLength="30"
          required
        />
        <label htmlFor="description" className={styles.inputLabel}>
          description:
        </label>
        <textarea
          className={styles.inputDescription}
          id="description"
          name="description"
          cols="15"
          rows="8"
          defaultValue={data?.description}
          maxLength="220"
        ></textarea>

        <button className={styles.submitButton}>Save</button>
      </form>{" "}
    </>
  );
}

/*undefined,
        { revalidate: true }*/
