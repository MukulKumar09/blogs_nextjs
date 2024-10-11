import FeaturedPosts from "@/components/home/FeaturedPosts/FeaturedPosts";
import Hero from "@/components/home/Hero/Hero";
import dbOperation from "@/app/helpers/dbOperation";

async function getFeaturedPosts() {
  const res = await dbOperation("get", { isFeatured: true });
  return Array.isArray(res) ? res : [];
}

export default async function Home() {
  const posts = await getFeaturedPosts();

  return (
    <div className="flex flex-col gap-20">
      <Hero />
      {posts.length > 0 ? <FeaturedPosts posts={posts} /> : <>No posts yet</>}
    </div>
  );
}
