import { list } from "@vercel/blob";

export async function GET(req, { params }) {
  const prefix = params.prefix;
  const { blobs } = await list({ limit: 1, prefix });
  return Response.json(blobs);
  return Response.json({ url: blobs });
}
