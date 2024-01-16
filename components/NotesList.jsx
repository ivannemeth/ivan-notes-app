import Link from "next/link";
import DeleteButton from "./DeleteButton";

export default function NotesList() {
  return (
    <>
      <div>
        <div>
          <div>Your title</div>
          <div>Your Description</div>
        </div>
        <div>
          <DeleteButton />
          <Link href="/edit-note/ID">EditNote</Link>
        </div>
      </div>
    </>
  );
}
