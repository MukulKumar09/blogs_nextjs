"use client";
import { useEffect, useState } from "react";
import AllPosts from "@/components/Posts/AllPosts";
// import dbOperation from "../helpers/dbOperation";

export default function AllPostsPage() {
  // const posts = await dbOperation("get", {});

  const [posts, setPosts] = useState(null);
  useEffect(() => {
    async function asyncFetch() {
      const res = await fetch(`/api/posts/all-posts`);
      const posts = await res.json();
      setPosts(posts);
    }
    asyncFetch();
  }, []);

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
