import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <Link href="/">YourNotes</Link>
      <Link href="/add-note">Add a note</Link>
    </>
  );
}
