import useSWR from "swr";
import { useRouter } from "next/router";

export default function EditForm() {
  const router = useRouter();
  const { id } = router.query;
  /*console.log("id", id);*/
  const { data, isLoading, mutate } = useSWR(`/api/notes/${id}`);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!data) {
    return;
  }
  /*console.log("data", data);*/

  async function handleEdit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const noteData = Object.fromEntries(formData);

    const response = await fetch(`/api/notes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(noteData),
    });

    if (response.ok) {
      mutate();
      router.push("/");
    }
  }

  return (
    <form onSubmit={handleEdit}>
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" name="title" defaultValue={data?.title} />
      <label htmlFor="description">Message:</label>
      <textarea
        id="description"
        name="description"
        cols="30"
        rows="10"
        placeholder="Write your note here"
        defaultValue={data?.description}
      ></textarea>
      <button>Save</button>
    </form>
  );
}
