"use client";
import { useEffect, useState } from "react";
import EditPost from "@/components/Posts/EditPost";
import SnackbarProvider from "react-simple-snackbar";
export default function EditPostPage({ params }) {
  const [post, setPost] = useState(null);
  const id = params.id;
  useEffect(() => {
    async function asyncFetch() {
      const res = await fetch("/api/posts/single-post/" + id);
      const post = await res.json();
      post[0]._id = id;
      setPost(post);
    }
    asyncFetch();
  }, []);

  return (
    <SnackbarProvider>{post && <EditPost post={post[0]} />}</SnackbarProvider>
  );
}
