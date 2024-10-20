"use client";
import { useState, useEffect } from "react";
import PostsGrid from "@/components/NextBLOG/Posts/PostsGrid";
export default function FeaturedPosts({ id }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function asyncFetch() {
      const res = await fetch(`/api/nextblog/featured-posts/`);
      const res_featured = await res.json();
      setPosts(res_featured);
    }
    asyncFetch();
  }, []);
  return (
    <div className="flex flex-col gap-10">
      <p className="font-sans text-3xl">⭐ Featured Posts</p>
      <PostsGrid posts={posts} />
    </div>
  );
}
