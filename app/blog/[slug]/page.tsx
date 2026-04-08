import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArticleMarkdown } from '@/components/blog/article-markdown';
import { RelatedPosts } from '@/components/blog/related-posts';
import {
  getAllPosts,
  getPostBySlug,
  getPostSlugs,
  resolveRelated,
} from '@/lib/posts';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return { title: 'Post not found' };
  }
  return {
    title: `${post.frontmatter.title} | Sean Hoe`,
    description: post.frontmatter.description,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const dateLabel = new Date(post.frontmatter.date).toLocaleDateString(
    'en-US',
    {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }
  );

  const all = getAllPosts();
  const related = resolveRelated(post.frontmatter.related, all).filter(
    (r) => r.slug !== post.slug
  );

  return (
    <main className="min-h-screen pt-14">
      <article className="mx-auto max-w-2xl px-6 pb-24 sm:px-12 lg:px-8">
        <header className="border-b border-sand-300 pb-10 pt-10 sm:pt-14">
          <p className="mb-3">
            <Link
              href="/blog"
              className="text-small font-medium text-ink-50 transition-colors hover:text-coral-600"
            >
              ← Blog
            </Link>
          </p>
          {post.frontmatter.kicker ? (
            <p className="mb-3 text-small font-medium uppercase tracking-wider text-ink-50">
              {post.frontmatter.kicker}
            </p>
          ) : null}
          <h1 className="text-display-sm font-medium text-ink-400 tracking-tight text-balance">
            {post.frontmatter.title}
          </h1>
          <time
            dateTime={post.frontmatter.date}
            className="mt-4 block text-small text-ink-50"
          >
            {dateLabel}
          </time>
          {post.frontmatter.description ? (
            <p className="mt-6 text-body leading-relaxed text-ink-100">
              {post.frontmatter.description}
            </p>
          ) : null}
        </header>

        <div className="pt-10">
          <ArticleMarkdown content={post.content} />
        </div>

        <RelatedPosts items={related} />
      </article>
    </main>
  );
}
