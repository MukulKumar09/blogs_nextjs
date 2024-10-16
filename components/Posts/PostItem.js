import postImage from "@/app/helpers/postImage";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PostItem({ post, index }) {
  const { _id, title, extension, createdAt } = post;
  const id = _id.toString();
  const postUrl = `/posts/${id}`;
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
        className="w-full md:w-1/2 lg:w-1/3 bg-slate-900 overflow-hidden rounded-3xl"
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
          <div className="p-5">
            <p className="text-lg">{title}</p>
            <p className="text-sm text-slate-500">{formattedDate}</p>
          </div>
        </Link>
      </div>
    );
  }
}
