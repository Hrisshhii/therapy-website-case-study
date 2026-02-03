
import { posts } from "../blog-components/data";
import { notFound } from "next/navigation";
import BlogPostClient from "./components/BlogPostClient";

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;

  const index = posts.findIndex(p => p.slug === slug);
  if (index === -1) notFound();

  const post = posts[index];
  const prev = posts[index - 1];
  const next = posts[index + 1];

  return(
    <main>
      <BlogPostClient post={post} prev={prev} next={next} />
    </main>
  );
}