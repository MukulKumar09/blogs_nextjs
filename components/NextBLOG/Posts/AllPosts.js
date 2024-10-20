import PostsGrid from "./PostsGrid";

export default function AllPosts({ posts }) {
  return (
    <section className="flex flex-col gap-10">
      <span className="font-sans text-4xl border-b-2 border-gray-800">
        All Posts
      </span>
      <PostsGrid posts={posts} />
    </section>
  );
}
