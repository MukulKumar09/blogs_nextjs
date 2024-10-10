import AllPosts from "@/components/Posts/AllPosts";
import dbOperation from "../helpers/dbOperation";

export default async function AllPostsPage() {
  const posts = await dbOperation("get", {});

  return (
    <>
      {Array.isArray(posts) && posts.length > 0 ? (
        <AllPosts posts={posts} />
      ) : (
        <>No posts yet</>
      )}
    </>
  );
}
