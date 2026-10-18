import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import PostCard from "../components/PostCard";
import type { Post } from "../data/posts";
import "@testing-library/jest-dom/vitest";

const post: Post = {
  id: 1,
  title: "Test Post",
  date: "18 October 2026",
  tags: ["React"],
  content: "This is a test post.",
};

describe("PostCard", () => {
  it("shows the post title", () => {
    render(<PostCard post={post} />);
    expect(screen.getByText("Test Post")).toBeInTheDocument();
  });

  it("increases likes when clicked", () => {
    render(<PostCard post={post} />);
    fireEvent.click(screen.getByRole("button", { name: /like/i }));
    expect(screen.getByText("♥ Like (1)")).toBeInTheDocument();
  });
});