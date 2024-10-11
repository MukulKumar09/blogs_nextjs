"use client";
import { useEffect, useState } from "react";
import FeaturedPosts from "@/components/home/FeaturedPosts/FeaturedPosts";
import Hero from "@/components/home/Hero/Hero";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function asyncFetch() {
      const res = await fetch(`/api/posts/featured-posts/`);
      const posts = await res.json();
      setPosts(posts);
    }
    asyncFetch();
  }, []);

  return (
    <div className="flex flex-col gap-20">
      <Hero />
      {posts.length > 0 && <FeaturedPosts posts={posts} />}
    </div>
  );
}
