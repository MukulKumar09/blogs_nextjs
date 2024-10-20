"use client";
import EditPost from "@/components/NextBLOG/Posts/EditPost";
import { useEffect, useState } from "react";
export default function EditPostPage({ params }) {
  const [post, setPost] = useState(null);
  const id = params.id;
  useEffect(() => {
    async function asyncFetch() {
      const res = await fetch("/api/nextblog/single-post/" + id);
      const post = await res.json();
      post[0]._id = id;
      setPost(post);
    }
    asyncFetch();
  }, [id]);

  return <>{post && <EditPost post={post[0]} />}</>;
}
