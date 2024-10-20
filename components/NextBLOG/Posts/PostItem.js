import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PostItem({ post, index }) {
  const { _id, title, content, url, isFeatured, createdAt } = post;
  const id = _id.toString();
  const postUrl = url ? url : `/nextblog/posts/${id}`;
  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    async function asyncFetch() {
      const res = await fetch(`/api/blobs/get-single/${id}`);
      const imageRes = await res.json();
      console.log("response \n\n\n\n", imageRes);
      if (imageRes[0]) setImageUrl(imageRes[0].url);
    }
    asyncFetch();
  }, []);
  {
    return (
      <div
        key={index}
        // style={{ width: 300 }}
        className="w-full bg-slate-900 overflow-hidden rounded-3xl"
      >
        <Link href={postUrl}>
          <div className="w-full h-40 relative overflow-hidden">
            <Image
              alt="placeholder"
              src={imageUrl}
              objectFit="cover"
              layout="fill"
            />
          </div>
          <div className="flex flex-col gap-3 p-5">
            <p className="leading-5 font-bold line-clamp-2 text-lg">{title}</p>
            <div className="flex justify-between">
              <span className="text-sm text-slate-500">{formattedDate}</span>
              <span className="text-sm text-slate-500">
                {isFeatured && `⭐ Featured`}
              </span>
            </div>
            <p className="text-sm line-clamp-2">{content}</p>
          </div>
        </Link>
      </div>
    );
  }
}
