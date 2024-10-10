import { ObjectId } from "mongodb";
import dbOperation from "@/app/helpers/dbOperation";
export async function DELETE(req, { params }) {
  const id = params.id;
  try {
    const results = await dbOperation("delete", {
      _id: ObjectId.createFromHexString(id),
    });
    return Response.json(results, { status: 200 });
  } catch (error) {
    return Response.json(error, { status: 500 });
  }
}
