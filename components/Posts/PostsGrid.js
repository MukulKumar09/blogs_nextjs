import PostItem from "./PostItem";

export default function PostsGrid({ posts }) {
  {
    return (
      <div className="grid grid-cols-3 gap-10">
        {posts &&
          posts.map((item, i) => {
            return <PostItem key={i} index={i} post={item} />;
          })}
      </div>
    );
  }
}
