import FooterYellow from "@/components/filtered/FooterYellow";
import Navigation from "@/components/Navigation";
import FilteredNotes from "@/components/FilteredNotes";
import { useState } from "react";
import EditForm from "@/components/EditForm";
import useSWR from "swr";
import NoteForm from "@/components/NoteForm";

export default function YellowNotesPage({
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
        color="#FFD100"
        setShowEditNotes={setShowEditNotes}
        setNoteToEdit={setNoteToEdit}
      />
      {showNotes && <NoteForm setShowNotes={setShowNotes} />}
      {showEditNotes && (
        <EditForm setShowEditNotes={setShowEditNotes} noteToEdit={noteToEdit} />
      )}

      <FooterYellow />
    </>
  );
}
