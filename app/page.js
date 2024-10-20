"use client";
import { useEffect, useState } from "react";
// import FeaturedPosts from "@/components/home/FeaturedPosts/FeaturedPosts";
import Hero from "@/components/home/Hero/Hero";
import Projects from "@/components/home/Projects/Projects";

export default function Home() {
  // const [posts, setPosts] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function asyncFetch() {
      const res = await fetch(`/api/projects/all-projects/`);
      const res_projects = await res.json();
      setProjects(res_projects);
    }
    asyncFetch();
  }, []);

  return (
    <div className="flex flex-col gap-20 w-3/4 lg:w-1/2 mt-20 m-auto">
      <Hero />
      {projects.length > 0 && <Projects projects={projects} />}
      <div className="py-10 lg:py-60">
        <span className="font-sans text-5xl border-b-2 border-gray-800">
          Let&apos;s Connect & Build for the future.
        </span>
      </div>
    </div>
  );
}
