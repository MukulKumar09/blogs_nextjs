import dbOperation from "@/app/helpers/dbOperation";
export async function GET(req, { params }) {
  const keyword = params.keyword;
  try {
    const results = await dbOperation("get", {
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
