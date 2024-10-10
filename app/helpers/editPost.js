export default async function editPost(document) {
  try {
    const response = await fetch("/api/posts/update-post", {
      method: "PUT",
      body: document,
    });

    if (!response.ok) {
      throw new Error("formHandler error");
    }
    return response;
  } catch (error) {
    console.log(error);

    return error;
  }
}
