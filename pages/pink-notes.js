import FooterPink from "@/components/filtered/FooterPink";
import Navigation from "@/components/Navigation";
import FilteredNotes from "@/components/FilteredNotes";
import { useState } from "react";
import EditForm from "@/components/EditForm";
import useSWR from "swr";
import NoteForm from "@/components/NoteForm";

export default function PinkNotesPage({
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
        color="#f695c5"
        setShowEditNotes={setShowEditNotes}
        setNoteToEdit={setNoteToEdit}
      />
      {showNotes && <NoteForm setShowNotes={setShowNotes} />}
      {showEditNotes && (
        <EditForm
          setShowEditNotes={setShowEditNotes}
          noteToEdit={noteToEdit}
          mutate={mutate}
        />
      )}

      <FooterPink />
    </>
  );
}
