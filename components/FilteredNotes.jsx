import useSWR from "swr";
import Navigation from "./Navigation";
import Footer from "./Footer";
import styles from "../styles/Home.module.css";
import DeleteButton from "./DeleteButton";
import { ImCheckmark } from "react-icons/im";
import { MdEdit } from "react-icons/md";
import { useState } from "react";

export default function FilteredNotes({
  color,
  setShowEditNotes,
  setNoteToEdit,
}) {
  const { data, isLoading, mutate } = useSWR("/api/notes");

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
      <div className={styles.noteListContainer}>
        {filteredNotes.map((note) => (
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