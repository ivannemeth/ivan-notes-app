import FooterBlue from "@/components/filtered/FooterBlue";
import Navigation from "@/components/Navigation";
import FilteredNotes from "@/components/FilteredNotes";
import { useState } from "react";
import EditForm from "@/components/EditForm";
import useSWR from "swr";
import NoteForm from "@/components/NoteForm";

export default function BlueNotesPage({
  showEditNotes,
  setShowEditNotes,
  noteToEdit,
  setNoteToEdit,
  setShowNotes,
  showNotes,
}) {
  const { data, isLoading, mutate } = useSWR("/api/notes");
  /*const [showEditNotes, setShowEditNotes] = useState(false);
  const [noteToEdit, setNoteToEdit] = useState(null);*/
  return (
    <>
      <Navigation setShowNotes={setShowNotes} />
      <FilteredNotes
        isLoading={isLoading}
        mutate={mutate}
        data={data}
        color="#1985A1"
        setShowEditNotes={setShowEditNotes}
        setNoteToEdit={setNoteToEdit}
        showNotes={showNotes}
        showEditNotes={showEditNotes}
      />
      {showNotes && <NoteForm setShowNotes={setShowNotes} />}
      {showEditNotes && (
        <EditForm setShowEditNotes={setShowEditNotes} noteToEdit={noteToEdit} />
      )}

      <FooterBlue />
    </>
  );
}
