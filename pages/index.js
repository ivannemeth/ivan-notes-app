import Navigation from "@/components/Navigation";
import NotesList from "@/components/NotesList";
import { useState } from "react";
import useSWR from "swr";
import NoteForm from "@/components/NoteForm";
import EditForm from "@/components/EditForm";
import Footer from "@/components/Footer";
import styles from "../styles/Home.module.css";

export default function Home({
  showNotes,
  setShowNotes,
  showEditNotes,
  setShowEditNotes,
  noteToEdit,
  setNoteToEdit,
}) {
  const { data, isLoading, mutate } = useSWR("/api/notes");
  /*console.log("showEditNotes", showEditNotes);*/
  /*const [showNotes, setShowNotes] = useState(false);
  const [showEditNotes, setShowEditNotes] = useState(false);
  const [noteToEdit, setNoteToEdit] = useState(null);*/

  /* console.log("showEditNotes", showEditNotes);*/

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!data) {
    return;
  }

  return (
    <>
      <Navigation setShowNotes={setShowNotes} />
      {showNotes && <NoteForm setShowNotes={setShowNotes} />}
      {showEditNotes && (
        <EditForm setShowEditNotes={setShowEditNotes} noteToEdit={noteToEdit} />
      )}

      <NotesList
        setShowEditNotes={setShowEditNotes}
        setNoteToEdit={setNoteToEdit}
        data={data}
        mutate={mutate}
        showNotes={showNotes}
        showEditNotes={showEditNotes}
      />

      <Footer />
    </>
  );
}

/* mutateNotes={mutate}*/
