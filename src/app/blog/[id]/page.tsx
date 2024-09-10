import { getPost } from "@/lib/contentful";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Image from 'next/image';
import { parseContent } from '@/lib/contentParser'; 

export async function generateMetadata({
  params,
}: {
  params: {
    id: string;
  };
}): Promise<Metadata | undefined> {
  let post = await getPost(params.id);

  if (!post) {
    return;
  }

  let {
    title,
    publishedAt,
    content: description,
    slug,
  } = post;
  let ogImage = `${DATA.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: publishedAt,
      url: `${DATA.url}/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({
  params,
}: {
  params: {
    id: string;
  };
}) {
  let post = await getPost(params.id);

  if (!post) {
    notFound();
  }

  const parsedContent = parseContent(post.content);

  return (
    <section id="blog">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            datePublished: post.publishedAt,
            dateModified: post.publishedAt,
            description: post.content,
            image: `${DATA.url}/og?title=${post.title}`,
            url: `${DATA.url}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: DATA.name,
            },
          }),
        }}
      />
      <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
        {post.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {post.publishedAt ? formatDate(post.publishedAt) : ''}
          </p>
        </Suspense>
      </div>
      <article className="prose dark:prose-invert">
        {parsedContent.map((item, index) => {
          if (item.type === 'text') {
            return <div key={index} dangerouslySetInnerHTML={{ __html: item.content ?? '' }} />;
          } else if (item.type === 'image') {
            return (
              <Image
                key={index}
                src={item.src || ''}
                alt={item.alt || ''}
                width={item.width || 800}
                height={item.height || 600}
                layout="responsive"
              />
            );
          }
        })}
      </article>
    </section>
  );
}
