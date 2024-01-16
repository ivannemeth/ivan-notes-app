import useSWR from "swr";
import Link from "next/link";
import DeleteButton from "./DeleteButton";

export default function NotesList() {
  const { data, isLoading } = useSWR("/api/notes");
  console.log("data from client", data);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!data) {
    return;
  }

  return (
    <p>hi</p>

    /* {data.map((note) => (
      <div key={note._id} >
        
        <div>
          <h2>{note.title}</h2>
          <div>{note.description}</div>
        </div>

        <div>
          <DeleteButton id={note._id} />
          <Link href="/api/notes/ABC">
          </Link>
        </div>
      </div>
    ))} */
  );
}
