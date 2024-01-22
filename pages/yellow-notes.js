import Footer from "@/components/Footer";
import { RiHomeFill } from "react-icons/ri";
import { GiPlainCircle } from "react-icons/gi";
import Navigation from "@/components/Navigation";
import styles from "../styles/Home.module.css";
import FilteredNotes from "@/components/FilteredNotes";
import Link from "next/link";
import { useState } from "react";
import NoteForm from "@/components/NoteForm";
import EditForm from "@/components/EditForm";
import useSWR from "swr";

export default function YellowNotesPage({
  showEditNotes,
  setShowEditNotes,
  noteToEdit,
  setNoteToEdit,
}) {
  const { data, isLoading, mutate } = useSWR("/api/notes");
  /*const [showEditNotes, setShowEditNotes] = useState(false);
  const [noteToEdit, setNoteToEdit] = useState(null);*/
  return (
    <>
      <Navigation />
      <FilteredNotes
        isLoading={isLoading}
        mutate={mutate}
        data={data}
        color="#FFD100"
        setShowEditNotes={setShowEditNotes}
        setNoteToEdit={setNoteToEdit}
      />

      {showEditNotes && (
        <EditForm
          setShowEditNotes={setShowEditNotes}
          noteToEdit={noteToEdit}
          mutate={mutate}
        />
      )}

      <Footer />
    </>
  );
}
