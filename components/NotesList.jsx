import Link from "next/link";
import DeleteButton from "./DeleteButton";
import { FaRegEdit } from "react-icons/fa";

export default function ProductList() {
  return (
    <>
      <div>
        <div>
          <div>Your title</div>
          <div>Your Description</div>
        </div>
        <div>
          <DeleteButton />
          <Link href="/editNote/ID">EditNoteLink</Link>
        </div>
      </div>
    </>
  );
}
