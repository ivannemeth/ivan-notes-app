import useSWR from "swr";
import Link from "next/link";
import DeleteButton from "./DeleteButton";
import { ImCheckmark } from "react-icons/im";
import { MdEdit } from "react-icons/md";

import styles from "../styles/Home.module.css";

export default function NotesList({
  setShowEditNotes,
  setNoteToEdit,
  data,
  mutate,
}) {
  //  const { data, isLoading, mutate } = useSWR("/api/notes");
  /*console.log("data from client", data);*/
  /*  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!data) {
    return;
  }*/

  return (
    <>
      <div className={styles.noteListContainer}>
        {data.map((note) => (
          <div
            key={note._id}
            className={styles.note}
            style={{ backgroundColor: note.color }}
          >
            <div>
              <h3 className={styles.noteTitle}>{note.title}</h3>
              <p>{note.description}</p>
            </div>

            <div className={styles.noteButtons}>
              <MdEdit
                size="18px"
                color="black"
                onClick={() => {
                  setNoteToEdit(note._id);
                  setShowEditNotes((toggle) => !toggle);
                }}
              />

              <ImCheckmark size="18px" />
              <DeleteButton id={note._id} mutate={mutate} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/*<Link href={`/${note._id}`}>*/
