import projectsOperation from "@/app/helpers/projectsOperation";
export async function GET(req, res) {
  try {
    const results = await projectsOperation("get", {});
    return Response.json(results, { status: 200 });
  } catch (error) {
    return Response.json(error, { status: 500 });
  }
}
