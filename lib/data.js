import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "_content");

export function getAllPosts() {
  const allPosts = fs.readdirSync(contentDirectory);

  return allPosts.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const fileContents = fs.readFileSync(
      path.join(contentDirectory, fileName),
      "utf8"
    );
    const { data, content } = matter(fileContents);

    return {
      data,
      content,
      slug,
    };
  });
}

export const blogPosts = [
  {
    headline: "im the first one",
    slug: "first",
    date: new Date().toISOString(),
    body: "Lorem first",
  },
  {
    headline: "im the second one",
    slug: "second",
    date: new Date().toISOString(),
    body: "Lorem second",
  },
  {
    headline: "im the third one",
    slug: "third",
    date: new Date().toISOString(),
    body: "Lorem third",
  },
];
