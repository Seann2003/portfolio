import Link from 'next/link';

type RelatedItem = {
  slug: string;
  title: string;
  description?: string;
};

export function RelatedPosts({ items }: { items: RelatedItem[] }) {
  if (!items.length) return null;

  return (
    <section className="mt-16 border-t border-sand-300 pt-12">
      <h2 className="mb-6 text-title font-medium text-ink-400 tracking-tight">
        Related content
      </h2>
      <ul className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.slug}>
            <Link
              href={`/blog/${item.slug}`}
              className="group block anthropic-card rounded-xl p-5 no-underline"
            >
              <span className="text-title font-medium text-ink-300 transition-colors group-hover:text-coral-600">
                {item.title}
              </span>
              {item.description ? (
                <p className="mt-2 line-clamp-2 text-small text-ink-50">
                  {item.description}
                </p>
              ) : null}
              <span className="mt-3 inline-block text-small font-medium text-coral-600">
                Read more
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
