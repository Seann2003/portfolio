import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Blog | Sean Hoe',
  description: 'Writing on engineering, finance, and experiments.',
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen pt-14">
      <div className="mx-auto max-w-5xl px-6 pb-20 sm:px-12 lg:px-16">
        <header className="border-b border-sand-300 py-12 sm:py-16">
          <p className="mb-3 text-small font-medium uppercase tracking-wider text-ink-50">
            Blog
          </p>
          <h1 className="text-display-sm font-medium text-ink-400 tracking-tight text-balance">
            Notes and essays
          </h1>
          <p className="mt-4 max-w-2xl text-body text-ink-100">
            Longer-form writing—research-style posts, project write-ups, and
            things learned along the way.
          </p>
        </header>

        <ul className="divide-y divide-sand-300">
          {posts.map((post) => {
            const dateLabel = new Date(
              post.frontmatter.date
            ).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            });
            return (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block py-8 no-underline"
                >
                  {post.frontmatter.kicker ? (
                    <p className="mb-2 text-small font-medium text-ink-50">
                      {post.frontmatter.kicker}
                    </p>
                  ) : null}
                  <h2 className="text-headline font-medium text-ink-400 tracking-tight transition-colors group-hover:text-coral-600">
                    {post.frontmatter.title}
                  </h2>
                  <p className="mt-2 text-small text-ink-50">{dateLabel}</p>
                  {post.frontmatter.description ? (
                    <p className="mt-3 max-w-2xl text-body text-ink-100">
                      {post.frontmatter.description}
                    </p>
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
