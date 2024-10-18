import PostItem from "./PostItem";

export default function PostsGrid({ posts }) {
  {
    return (
      <div className="flex flex-wrap justify-center md:justify-start gap-10">
        {posts &&
          posts.map((item, i) => {
            return <PostItem key={i} index={i} post={item} />;
          })}
      </div>
    );
  }
}
