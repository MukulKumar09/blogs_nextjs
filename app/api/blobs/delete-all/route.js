import { list, del } from "@vercel/blob";

export async function GET() {
  let cursor;
  try {
    do {
      const listResult = await list({
        cursor,
        limit: 1000,
      });

      if (listResult.blobs.length > 0) {
        await del(listResult.blobs.map((blob) => blob.url));
      }

      cursor = listResult.cursor;
    } while (cursor);

    return Response.json({ stats: "All blobs deleted" });
  } catch (error) {
    console.log(error);

    return Response.json({ stats: "Error" });
  }
}
