import { list } from "@vercel/blob";

export async function GET(req) {
  const { blobs } = await list();
  return Response.json(blobs);
  return Response.json({ url: blobs });
}
