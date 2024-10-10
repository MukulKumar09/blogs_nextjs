import dbOperation from "@/app/helpers/dbOperation";
import fs from "fs";
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
    const res = await dbOperation("new", document);
    if (!image.name == "") {
      const extension = image.name.split(".").pop();
      const stream = fs.createWriteStream(
        `public/images/posts/${res.id}.${extension}`
      );
      const bufferedImage = await image.arrayBuffer();
      stream.write(
        Buffer.from(bufferedImage, (error) => {
          if (error) {
            throw new Error("Image failed!");
          }
        })
      );
    }
    return Response.json(res, { status: 200 });
  } catch (error) {
    console.log(error);

    return Response.json(error, { status: 500 });
  }
}
