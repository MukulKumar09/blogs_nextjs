import PostsGrid from "@/components/NextBLOG/Posts/PostsGrid";
export default function FeaturedPosts({ posts }) {
  return (
    <div className="flex flex-col gap-10">
      <p className="text-2xl">⭐ Featured Posts</p>
      <PostsGrid posts={posts} />
    </div>
  );
}
