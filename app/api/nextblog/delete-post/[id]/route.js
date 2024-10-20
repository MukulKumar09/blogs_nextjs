import { ObjectId } from "mongodb";
import postsOperation from "@/app/helpers/postsOperation";
export async function DELETE(req, { params }) {
  const id = params.id;
  try {
    const results = await postsOperation("delete", {
      _id: ObjectId.createFromHexString(id),
    });
    return Response.json(results, { status: 200 });
  } catch (error) {
    return Response.json(error, { status: 500 });
  }
}
