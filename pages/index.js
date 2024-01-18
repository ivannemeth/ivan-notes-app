import Navigation from "@/components/Navigation";
import NotesList from "@/components/NotesList";
import { useState } from "react";
import NoteForm from "@/components/NoteForm";

export default function Home() {
  const [showNotes, setShowNotes] = useState(false);
  return (
    <>
      <Navigation setShowNotes={setShowNotes} />
      <NotesList />
      {showNotes && <NoteForm setShowNotes={setShowNotes} />}
    </>
  );
}
