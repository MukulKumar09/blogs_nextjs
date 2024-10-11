import dbOperation from "@/app/helpers/dbOperation";
import { put, list, del } from "@vercel/blob";
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
    const { blobs } = await list({ limit: 1, prefix: _id });
    console.log("blobs: ", blobs);
    if (blobs[0]) {
      const oldImage = blobs[0].url;
      const deleteImage = await del(oldImage);
    }

    if (!image.name == "") {
      const extension = image.name.split(".").pop();
      const fileName = `${_id}.${extension}`;
      console.log(res);

      const blob = await put(fileName, image, {
        access: "public",
        addRandomSuffix: false,
      });
      revalidatePath("/");
    }
    return Response.json(res, { status: 200 });
  } catch (error) {
    console.log(error);

    return Response.json(error, { status: 500 });
  }
}
