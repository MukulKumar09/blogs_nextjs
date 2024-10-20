"use client";
import SinglePost from "@/components/NextBLOG/Posts/SinglePost";
import { useEffect, useState } from "react";

export default function SinglePostPage({ params }) {
  const [post, setPost] = useState(null);
  const id = params.id;

  useEffect(() => {
    async function asyncFetch() {
      const res = await fetch(`/api/nextblog/single-post/${id}`);
      const post = await res.json();
      setPost(post);
    }
    asyncFetch();
  }, [id]);

  return <>{post && <SinglePost post={post} />}</>;
}
