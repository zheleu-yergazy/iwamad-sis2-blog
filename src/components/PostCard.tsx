import { useState } from "react";
import type { Post } from "../data/posts";

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  const [likes, setLikes] = useState(0);

  return (
    <article className="post-card">
      <p className="post-date">{post.date}</p>
      <h2>{post.title}</h2>
      <p>{post.content}</p>

      <div className="tags">
        {post.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>

      <button onClick={() => setLikes(likes + 1)}>
        ♥ Like ({likes})
      </button>
    </article>
  );
}