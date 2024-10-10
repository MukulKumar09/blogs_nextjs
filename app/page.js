import FeaturedPosts from "@/components/home/FeaturedPosts/FeaturedPosts";
import Hero from "@/components/home/Hero/Hero";
import dbOperation from "@/app/helpers/dbOperation";

export default async function Home(props) {
  const res = await dbOperation("get", { isFeatured: true });

  return (
    <div className="flex flex-col gap-20">
      <Hero />
      {Array.isArray(res) && res.length > 0 ? (
        <FeaturedPosts posts={res} />
      ) : (
        <>No posts yet</>
      )}
    </div>
  );
}
