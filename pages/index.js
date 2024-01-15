import Image from "next/image";
import Navigation from "@/components/Navigation";
import NotesList from "@/components/NotesList";

export default function Home() {
  return (
    <>
      <Navigation />
      <NotesList />
    </>
  );
}
