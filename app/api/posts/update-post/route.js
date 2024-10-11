import dbOperation from "@/app/helpers/dbOperation";
import { put } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import { ObjectId } from "mongodb";

export async function PUT(req) {
  const formData = await req.formData();
  const _id = formData.get("id");
  const title = formData.get("title");
  const content = formData.get("content");
  let extension = "";
  let isFeatured = formData.get("isFeatured");
  isFeatured = isFeatured == "on" ? true : false;
  const image = formData.get("image");

  const document = { title, content, isFeatured, updatedAt: new Date() };
  if (!image.name == "") {
    extension = image.name.split(".").pop();
    document.extension = extension;
  }

  try {
    const res = await dbOperation("update", [
      {
        _id: ObjectId.createFromHexString(_id),
      },
      { $set: document },
    ]);

    if (!image.name == "") {
      const extension = image.name.split(".").pop();
      const fileName = `${res.id}.${extension}`;
      const blob = await put(fileName, image, {
        access: "public",
      });
      revalidatePath("/");
    }
    return Response.json(res, { status: 200 });
  } catch (error) {
    console.log(error);

    return Response.json(error, { status: 500 });
  }
}
