import PostItem from "./PostItem";

export default function PostsGrid({ posts }) {
  {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center md:justify-start gap-10">
        {posts &&
          posts.map((item, i) => {
            return <PostItem key={i} index={i} post={item} />;
          })}
      </div>
    );
  }
}
