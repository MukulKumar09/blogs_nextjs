"use client";
import NewPost from "@/components/Posts/NewPost";
import SnackbarProvider from "react-simple-snackbar";
export default function NewPostPage() {
  return (
    <SnackbarProvider>
      <NewPost />
    </SnackbarProvider>
  );
}
