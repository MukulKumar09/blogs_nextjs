"use client";
import { useEffect, useState } from "react";
const { default: SinglePost } = require("@/components/Posts/SinglePost");

export default function SinglePostPage({ params }) {
  const [post, setPost] = useState(null);
  const id = params.id;

  useEffect(() => {
    async function asyncFetch() {
      const res = await fetch(`/api/posts/single-post/${id}`);
      const post = await res.json();
      setPost(post);
    }
    asyncFetch();
  }, []);

  return <>{post && <SinglePost post={post} />}</>;
}
