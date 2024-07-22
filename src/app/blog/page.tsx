import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";
import { formatDate } from "@/lib/utils"; // Correctly import the named export
import { getPost } from "@/data/blog";

// Assuming getPost returns a post object with a date property
const BlogPostPage = async ({ params }) => {
  const post = await getPost(params.slug);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{formatDate(new Date(post.date))}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">blog</h1>
      </BlurFade>
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <Link
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col">
                <p className="tracking-tight">{post.metadata.title}</p>
                <p className="h-6 text-xs text-muted-foreground">
                  {post.metadata.publishedAt}
                </p>
              </div>
            </Link>
          </BlurFade>
        ))}
    </section>
  );
}
