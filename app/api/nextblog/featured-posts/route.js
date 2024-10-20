import postsOperation from "@/app/helpers/postsOperation";
export async function GET(req) {
  try {
    const results = await postsOperation("get", { isFeatured: true });
    return Response.json(results, { status: 200 });
  } catch (error) {
    return Response.json(error, { status: 500 });
  }
}
