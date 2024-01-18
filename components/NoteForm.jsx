import useSWR from "swr";

export default function NoteForm({ setShowNotes }) {
  const { mutate } = useSWR("/api/notes");

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const noteData = Object.fromEntries(formData);

    const response = await fetch("/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(noteData),
    });

    if (!response.ok) {
      console.error(response.status);
      return;
    }

    mutate();
    setShowNotes(false);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" name="title" placeholder="Name your note" />

      <label htmlFor="description">Message:</label>
      <textarea
        id="description"
        name="description"
        cols="30"
        rows="10"
        placeholder="Write your note here"
      ></textarea>
      <button>Add</button>
    </form>
  );
}
