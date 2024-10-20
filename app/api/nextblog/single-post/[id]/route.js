import { ObjectId } from "mongodb";
import postsOperation from "@/app/nextblog/helpers/postsOperation";
export async function GET(req, { params }) {
  const id = params.id;
  try {
    const results = await postsOperation("get", {
      _id: ObjectId.createFromHexString(id),
    });

    return Response.json(results, { status: 200 });
  } catch (error) {
    return Response.json(error, { status: 500 });
  }
}
