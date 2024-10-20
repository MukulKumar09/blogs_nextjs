import postsOperation from "@/app/nextblog/helpers/postsOperation";
import { put } from "@vercel/blob";
import { revalidatePath } from "next/cache";

export async function POST(req) {
  const formData = await req.formData();
  const title = formData.get("title");
  const content = formData.get("content");
  let isFeatured = formData.get("isFeatured");
  isFeatured = isFeatured == "on" ? true : false;
  const image = formData.get("image");

  const document = { title, content, isFeatured, createdAt: new Date() };
  if (!image.name == "") {
    const extension = image.name.split(".").pop();
    document.extension = extension;
  }

  try {
    const res = await postsOperation("new", document);
    if (!image.name == "") {
      const imageFile = formData.get("image");
      const extension = image.name.split(".").pop();
      const fileName = `${res.id}.${extension}`;
      const blob = await put(fileName, imageFile, {
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
