export default function AddNotePage() {
  return (
    <form>
      <label htmlFor="title">Title:</label>
      <input type="text" id="name" name="name" placeholder="Name your note" />

      <label htmlFor="description">Message:</label>
      <textarea
        id="description"
        name="description"
        cols="30"
        rows="10"
        placeholder="Write your note here"
      ></textarea>
      <button>Submit</button>
    </form>
  );
}
