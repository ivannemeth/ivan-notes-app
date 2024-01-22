import Footer from "@/components/Footer";
import { RiHomeFill } from "react-icons/ri";
import { GiPlainCircle } from "react-icons/gi";
import Navigation from "@/components/Navigation";
import styles from "../styles/Home.module.css";
import FilteredNotes from "@/components/FilteredNotes";
import Link from "next/link";
import { useState } from "react";

export default function yellowNotesPage() {
  return (
    <>
      <Navigation />
      <FilteredNotes color="#FFD100" />

      <Footer />
    </>
  );
}
