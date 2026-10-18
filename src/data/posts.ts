export type Post = {
  id: number;
  title: string;
  date: string;
  tags: string[];
  content: string;
};

export const posts: Post[] = [
  {
    id: 1,
    title: "Getting Started with React",
    date: "18 October 2026",
    tags: ["React", "TypeScript"],
    content:
      "React helps developers build interactive user interfaces using reusable components.",
  },
  {
    id: 2,
    title: "Learning TypeScript",
    date: "17 October 2026",
    tags: ["TypeScript", "Programming"],
    content:
      "TypeScript adds types to JavaScript and helps developers catch errors earlier.",
  },
  {
    id: 3,
    title: "My Web Development Journey",
    date: "16 October 2026",
    tags: ["Web Development", "Learning"],
    content:
      "I am learning to build websites with React and improve my programming skills.",
  },
];