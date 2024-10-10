import postImage from "@/app/helpers/postImage";
import Image from "next/image";
import Link from "next/link";

export default function PostItem({ post, index }) {
  const { _id, title, extension, createdAt } = post;
  const id = _id.toString();
  const postUrl = `/posts/${id}`;
  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  {
    return (
      <div
        key={index}
        style={{ width: 300 }}
        className="bg-slate-900 overflow-hidden rounded-3xl"
      >
        <Link href={postUrl}>
          <div className="w-full h-40 overflow-hidden">
            <Image src={postImage(id, extension)} height={200} width={300} />
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
