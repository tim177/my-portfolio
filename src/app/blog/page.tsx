import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Blogs } from "@/components/Blogs";
import { Metadata } from "next";
import { getAllBlogs } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blogs | Amit Singh",
  description:
    "Amit Singh is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

export default async function Blog() {
  const blogs = await getAllBlogs();
  const data = blogs.map(({ ...meta }) => meta);

  return (
    <Container>
      <span className="text-4xl">📝</span>
      <Heading className="font-black pb-4">I write about technology</Heading>
      <Paragraph className="pb-10">
        Ever since <Highlight> I was a kid</Highlight>, I&apos;ve been
        fascinated by technology.
      </Paragraph>
      <Blogs blogs={data} />
    </Container>
  );
}
