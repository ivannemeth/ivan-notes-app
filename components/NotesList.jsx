import useSWR from "swr";
import Link from "next/link";
import DeleteButton from "./DeleteButton";
import { ImCheckmark } from "react-icons/im";
import { MdEdit } from "react-icons/md";
import IsDoneButton from "./IsDoneButton";

import styles from "../styles/Home.module.css";

export default function NotesList({
  setShowEditNotes,
  setNoteToEdit,
  data,
  mutate,
  showNotes,
  showEditNotes,
}) {
  //  const { data, isLoading, mutate } = useSWR("/api/notes");
  /*console.log("data from client", data);*/
  /*  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!data) {
    return;
  }*/
  /*console.log("showEditNotes", showEditNotes);*/
  return (
    <>
      <div
        className={
          showNotes || showEditNotes
            ? styles.noteListContainerOpacity
            : styles.noteListContainer
        }
      >
        {data.map((note) => (
          <div
            key={note._id}
            className={styles.note}
            style={{ backgroundColor: note.color }}
          >
            <div className={note.isDone ? styles.isDone : ""}>
              <h3 className={styles.noteTitle}>{note.title}</h3>
              <p>{note.description}</p>
            </div>

            <div className={styles.noteButtons}>
              <MdEdit
                className={
                  note.isDone ? styles.editButtonNoShow : styles.editButton
                }
                onClick={() => {
                  setNoteToEdit(note._id);
                  setShowEditNotes((toggle) => !toggle);
                }}
              />

              <IsDoneButton
                id={note._id}
                mutate={mutate}
                isDone={note.isDone}
              />
              <DeleteButton id={note._id} mutate={mutate} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
