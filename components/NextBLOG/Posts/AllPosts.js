import PostsGrid from "./PostsGrid";

export default function AllPosts({ posts }) {
  return (
    <section className="flex flex-col gap-10">
      <p className="text-3xl">All posts</p>
      <PostsGrid posts={posts} />
    </section>
  );
}
