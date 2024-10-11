import FeaturedPosts from "@/components/home/FeaturedPosts/FeaturedPosts";
import Hero from "@/components/home/Hero/Hero";
import dbOperation from "@/app/helpers/dbOperation";

export default async function Home() {
  const res = await dbOperation("get", { isFeatured: true });
  console.log(res);

  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <FeaturedPosts posts={res} />
      {/* {Array.isArray(res) && res.length > 0 ? (
      <FeaturedPosts posts={res} />
      ) : (
        <>No posts yet</>
      )} */}
    </div>
  );
}
