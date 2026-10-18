import { posts } from "../data/posts";
import PostCard from "../components/PostCard";

export default function Posts() {
  return (
    <section>
      <h2>Blog Posts</h2>

      <div className="posts">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
