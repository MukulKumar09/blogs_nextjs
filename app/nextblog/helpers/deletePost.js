export default async function deletePost(id) {
  try {
    const response = await fetch("/api/nextblog/delete-post/" + id, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("delete error");
    }
    const result = await response.json();
    return response;
  } catch (error) {
    return error;
  }
}
