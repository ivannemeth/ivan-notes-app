import useSWR from "swr";
import Navigation from "./Navigation";
import Footer from "./Footer";
import styles from "../styles/Home.module.css";
import DeleteButton from "./DeleteButton";
import { ImCheckmark } from "react-icons/im";
import { MdEdit } from "react-icons/md";
import { useState } from "react";
import IsDoneButton from "./IsDoneButton";

export default function FilteredNotes({
  color,
  setShowEditNotes,
  setNoteToEdit,
  data,
  isLoading,
  mutate,
  showNotes,
  showEditNotes,
}) {
  //const { data, isLoading, mutate } = useSWR("/api/notes");

  /*const colors = ["#FFD100", "#f695c5", "#1985A1"];*/

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!data) {
    return;
  }

  const filteredNotes = data.filter((note) => {
    return note.color === color;
  });

  return (
    <>
      <div
        className={
          showNotes || showEditNotes
            ? styles.noteListContainerOpacity
            : styles.noteListContainer
        }
      >
        {filteredNotes.map((note) => (
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
