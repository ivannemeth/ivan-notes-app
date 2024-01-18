import useSWR from "swr";
import Link from "next/link";
import DeleteButton from "./DeleteButton";
import { FaEdit } from "react-icons/fa";
import IsFavouriteButton from "./IsFavouriteButton";
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
              <h3>{note.title}</h3>
              <p>{note.description}</p>
            </div>

            <div>
              <DeleteButton id={note._id} mutate={mutate} />

              <FaEdit
                size="25px"
                color="black"
                onClick={() => {
                  setNoteToEdit(note._id);
                  setShowEditNotes((toggle) => !toggle);
                }}
              />

              <IsFavouriteButton />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/*<Link href={`/${note._id}`}>*/
