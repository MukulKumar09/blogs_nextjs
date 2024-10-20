"use client";
import { useEffect, useState } from "react";
import FeaturedPosts from "@/components/NextBLOG/home/FeaturedPosts/FeaturedPosts";
import Hero from "@/components/NextBLOG/home/Hero/Hero";
import Projects from "@/components/NextBLOG/home/Projects/Projects";

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
    <div className="flex flex-col gap-20">
      <Hero />
      {projects.length > 0 && <Projects projects={projects} />}
      {/* {posts.length > 0 && <FeaturedPosts posts={posts} />} */}
    </div>
  );
}
