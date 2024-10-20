import PostsGrid from "@/components/NextBLOG/Posts/PostsGrid";
export default function Projects({ projects }) {
  return (
    <div className="flex flex-col gap-10">
      <span className="text-4xl border-b-2 border-gray-800">My Projects</span>
      <PostsGrid posts={projects} />
    </div>
  );
}
