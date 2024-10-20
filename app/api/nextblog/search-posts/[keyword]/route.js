import postsOperation from "@/app/nextblog/helpers/postsOperation";
export async function GET(req, { params }) {
  const keyword = params.keyword;
  try {
    const results = await postsOperation("get", {
      $or: [
        { content: { $regex: keyword, $options: "i" } },
        { title: { $regex: keyword, $options: "i" } },
      ],
    });
    return Response.json(results, { status: 200 });
  } catch (error) {
    return Response.json(error, { status: 500 });
  }
}
