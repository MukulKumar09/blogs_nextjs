export default async function addPost(document) {
  try {
    const response = await fetch("/api/posts/add-post", {
      method: "POST",
      body: document,
    });
    console.log(response);

    if (!response.ok) {
      throw new Error("formHandler error");
    }
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}
