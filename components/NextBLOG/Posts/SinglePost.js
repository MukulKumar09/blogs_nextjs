"use client";
import Image from "next/image";
import ButtonRedirect from "../ButtonRedirect/ButtonRedirect";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import deletePost from "@/app/nextblog/helpers/deletePost";
import FeaturedPosts from "@/components/home/FeaturedPosts/FeaturedPosts";

export default function SinglePost(props) {
  const { push } = useRouter();
  const [shouldDelete, setShouldDelete] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    async function asyncFetch() {
      const res = await fetch(`/api/blobs/get-single/${id}`);
      const imageRes = await res.json();
      console.log("response \n\n\n\n", imageRes);
      if (imageRes[0])
        setImageUrl(imageRes[0].url + `?v=${new Date().getTime()}`);
    }
    asyncFetch();
  }, []);
  const id = props.post[0]._id.toString();
  const { title, content, isFeatured, extension, updatedAt, createdAt } =
    props.post[0];
  const formattedDate = new Date(
    updatedAt ? updatedAt : createdAt
  ).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  async function handleDelete() {
    const res = await deletePost(id);
    if (res.status == 200) push("/nextblog/");
    else console.log(res);
  }
  return (
    <article className="flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <p className="font-sans text-5xl">{title}</p>
        <div className="flex justify-between">
          <span className="text-slate-500">{formattedDate}</span>
          <span className="font-sans">{isFeatured && "Featured ⭐"}</span>
        </div>
      </div>
      <Image
        alt="placeholder"
        src={imageUrl}
        height={200}
        width={700}
        className="m-auto rounded-2xl"
      />
      <p>{content}</p>
      <div className="flex gap-3 justify-end">
        <ButtonRedirect url={`/nextblog/posts/edit/${id}`} type="btn">
          Edit Post
        </ButtonRedirect>
        <button
          className="btn-dark"
          onClick={() => (shouldDelete ? handleDelete() : setShouldDelete(1))}
        >
          {shouldDelete ? "Confirm Delete this post?" : "Delete Post"}
        </button>
      </div>
      <FeaturedPosts exclude={id} />
    </article>
  );
}
