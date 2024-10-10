import dbOperation from "@/app/helpers/dbOperation";
export async function GET(req) {
  try {
    const results = await dbOperation("get", { isFeatured: true });
    return Response.json(results, { status: 200 });
  } catch (error) {
    return Response.json(error, { status: 500 });
  }
}
