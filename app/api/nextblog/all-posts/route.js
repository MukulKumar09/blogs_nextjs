import postsOperation from "@/app/nextblog/helpers/postsOperation";
export async function GET(req, res) {
  try {
    const results = await postsOperation("get", {});
    return Response.json(results, { status: 200 });
  } catch (error) {
    return Response.json(error, { status: 500 });
  }
}
