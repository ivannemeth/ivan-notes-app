import Navigation from "@/components/Navigation";
import NotesList from "@/components/NotesList";
import { useState } from "react";
import useSWR from "swr";
import NoteForm from "@/components/NoteForm";
import EditForm from "@/components/EditForm";

export default function Home() {
  const { data, isLoading, mutate } = useSWR("/api/notes");

  const [showNotes, setShowNotes] = useState(false);
  const [showEditNotes, setShowEditNotes] = useState(false);
  const [noteToEdit, setNoteToEdit] = useState(null);

  console.log("showEditNotes", showEditNotes);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!data) {
    return;
  }

  return (
    <>
      <Navigation setShowNotes={setShowNotes} />
      <NotesList
        setShowEditNotes={setShowEditNotes}
        setNoteToEdit={setNoteToEdit}
        data={data}
        mutate={mutate}
      />
      {showNotes && <NoteForm setShowNotes={setShowNotes} />}
      {showEditNotes && (
        <EditForm
          setShowEditNotes={setShowEditNotes}
          noteToEdit={noteToEdit}
          mutate={mutate}
        />
      )}
    </>
  );
}
