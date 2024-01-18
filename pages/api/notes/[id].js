import dbConnect from "../../../db/connect";
import Note from "../../../db/models/Note.js";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  if (!id) return;

  /*console.log("id server", id);*/

  if (request.method === "GET") {
    const note = await Note.findById(id);
    /*console.log("note", note);*/
    return response.status(200).json(note);
  }

  if (request.method === "PUT") {
    await Note.findByIdAndUpdate(id, {
      $set: request.body,
    });

    response.status(200).json({ status: `Note updated!` });
  }

  if (request.method === "DELETE") {
    console.log("server id", id);
    await Note.findByIdAndDelete(id);

    response.status(200).json({ status: `Note successfully deleted.` });
  }
}
