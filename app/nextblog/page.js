"use client";
import { useEffect, useState } from "react";
import AllPosts from "@/components/NextBLOG/Posts/AllPosts";
// import postsOperation from "../helpers/postsOperation";

export default function AllPostsPage() {
  // const posts = await postsOperation("get", {});

  const [posts, setPosts] = useState(null);
  useEffect(() => {
    async function asyncFetch() {
      const res = await fetch(`/api/nextblog/all-posts`);
      const posts = await res.json();
      setPosts(posts);
    }
    asyncFetch();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <span className="text-4xl border-b-2 border-gray-800">
            Welcome to NextBLOG
          </span>
          I&apos;ve developed NextBLOG, a cutting-edge fullstack webapp built
          using NextJS, MongoDB, Vercel Blob.
          <br /> This project showcases my ability to build fullstack
          applications with a focus on user experience and scalability. It
          harnesses server and client hybrid capabilities of NextJS.
          <div className="flex flex-wrap gap-8 w-full justify-center">
            <img
              alt="placeholder"
              src="/images/site/nextjs.png"
              style={{ height: "50px", width: "auto" }}
            />
            <img
              alt="placeholder"
              src="/images/site/tailwindcss.png"
              style={{ height: "50px", width: "auto" }}
            />
            <img
              alt="placeholder"
              src="/images/site/react.png"
              style={{ height: "50px", width: "auto" }}
            />
            <img
              alt="placeholder"
              src="/images/site/mongodb.png"
              style={{ height: "50px", width: "auto" }}
            />
          </div>
          Key features include:
          <ul>
            <li>
              ✨ Efficient integration of server-side, client-side components
            </li>
            <li>🔄 APIs built in NextJS api route.</li>
            <li>
              🚀 Using NextJS useRouter hook for fast and optimized page
              switching
            </li>
            <li>🛠️ Debouncing Search, DOM Manipulation using React hooks.</li>
            <li>📷 Using Vercel Blob to store and fetch images.</li>
            <li>🌈 Using TailwindCSS for UI Tooling.</li>
            <li>⚡ Using MongoDB to store all blogs.</li>
          </ul>
        </div>
        {Array.isArray(posts) && posts.length > 0 ? (
          <AllPosts posts={posts} />
        ) : (
          <>No posts yet</>
        )}
      </div>
    </>
  );
}
