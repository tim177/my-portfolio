import path from "path";
import fs from "fs";
import matter from "gray-matter";
import glob from "fast-glob";

const BLOG_DIR = path.join(process.cwd(), "src/app/blog");

type BlogPost = {
  slug: string;
  date: string;
  title: string;
  description: string;
  image?: string;
  tags?: string[];
};

export async function importBlog(slug: string) {
  const possiblePaths = [path.join(BLOG_DIR, `${slug}`)];

  const mdxPath = possiblePaths.find((p) => fs.existsSync(p));

  if (!mdxPath) {
    throw new Error(`No MDX file found for slug: ${slug}`);
  }

  const fileContent = fs.readFileSync(mdxPath, "utf8");
  const { data: meta } = matter(fileContent);

  return {
    slug: slug.replace(/(\/content)?\.mdx$/, ""),
    date: meta.date,
    title: meta.title,
    description: meta.description,
    image: meta.image,
    tags: meta.tags || [],
  };
}

export async function getAllBlogs() {
  const blogFileNames = await glob(["*.mdx", "*/content.mdx"], {
    cwd: path.join(process.cwd(), "src/app/blog"),
  });

  const blogs: BlogPost[] = await Promise.all(blogFileNames.map(importBlog));

  return blogs.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
}
