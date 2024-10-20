"use client";
import { useEffect, useState } from "react";
import AllPosts from "@/components/NextBLOG/Posts/AllPosts";
// import postsOperation from "../helpers/postsOperation";

export default function AllPostsPage() {
  // const posts = await postsOperation("get", {});

  const [posts, setPosts] = useState(null);
  useEffect(() => {
    async function asyncFetch() {
      const res = await fetch(`/api/nextblog/all-posts`);
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
