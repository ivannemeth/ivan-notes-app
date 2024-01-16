import dbConnect from "../../../db/connect";
import Note from "../../../db/models/Note.js";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "POST") {
    try {
      const noteData = request.body;
      const note = new Note(noteData);
      await note.save();
      return response.status(201).json({ status: "Note created." });
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: error.message });
    }
  }

  if (request.method === "GET") {
    const notes = await Note.find();
    return response.status(200).json(notes);
  }

  if (request.method === "DELETE") {
    await Note.findByIdAndDelete(id);

    response.status(200).json({ status: `Note successfully deleted.` });
  }
}
