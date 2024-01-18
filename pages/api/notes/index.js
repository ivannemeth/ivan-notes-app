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
      console.error("error", error);
      return response.status(400).json({ error: error.message });
    }
  } else if (request.method === "GET") {
    const notes = await Note.find();
    /*console.log("notes", notes);*/
    return response.status(200).json(notes);
  }
}
