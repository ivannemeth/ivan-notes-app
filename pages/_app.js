import "@/styles/globals.css";
import { useState } from "react";
import { SWRConfig } from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [showNotes, setShowNotes] = useState(false);
  const [showEditNotes, setShowEditNotes] = useState(false);
  const [noteToEdit, setNoteToEdit] = useState(null);
  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <Component
        showNotes={showNotes}
        setShowNotes={setShowNotes}
        showEditNotes={showEditNotes}
        setShowEditNotes={setShowEditNotes}
        noteToEdit={noteToEdit}
        setNoteToEdit={setNoteToEdit}
        {...pageProps}
      />
    </SWRConfig>
  );
}
