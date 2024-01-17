import { useRouter } from "next/router";

export default function DeleteButton() {
  const router = useRouter();
  const { id } = router.query;

  async function handleDelete() {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      try {
        const response = await fetch(`/api/notes/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          alert("Note deleted successfully.");
          router.replace("/");
        } else {
          alert("Failed to delete the note.");
        }
      } catch (error) {
        console.error("An error occurred:", error);
        alert("An error occurred while deleting the note.");
      }
    }
  }

  return <button onClick={() => handleDelete()}>Delete</button>;
}
