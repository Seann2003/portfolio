import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export type RelatedEntry =
  | string
  | { slug: string; title?: string };

export type PostFrontmatter = {
  title: string;
  date: string;
  description?: string;
  kicker?: string;
  draft?: boolean;
  related?: RelatedEntry[];
};

export type Post = {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
};

function includeDrafts(): boolean {
  return process.env.NODE_ENV !== 'production';
}

function readPostRaw(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const source = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(source);
  return {
    slug,
    frontmatter: data as PostFrontmatter,
    content,
  };
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
    .filter((slug) => {
      const post = readPostRaw(slug);
      if (!post) return false;
      if (post.frontmatter.draft && !includeDrafts()) return false;
      return true;
    });
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) return [];
  const slugs = fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));

  const posts: Post[] = [];
  for (const slug of slugs) {
    const post = readPostRaw(slug);
    if (!post) continue;
    if (post.frontmatter.draft && !includeDrafts()) continue;
    posts.push(post);
  }

  posts.sort((a, b) => {
    const da = new Date(a.frontmatter.date).getTime();
    const db = new Date(b.frontmatter.date).getTime();
    return db - da;
  });
  return posts;
}

export function getPostBySlug(slug: string): Post | null {
  const post = readPostRaw(slug);
  if (!post) return null;
  if (post.frontmatter.draft && !includeDrafts()) return null;
  return post;
}

export function resolveRelated(
  related: RelatedEntry[] | undefined,
  allPosts: Post[]
): { slug: string; title: string; description?: string }[] {
  if (!related?.length) return [];
  const bySlug = Object.fromEntries(allPosts.map((p) => [p.slug, p]));
  return related.map((r) => {
    if (typeof r === 'string') {
      const p = bySlug[r];
      return {
        slug: r,
        title: p?.frontmatter.title ?? r,
        description: p?.frontmatter.description,
      };
    }
    const p = bySlug[r.slug];
    return {
      slug: r.slug,
      title: r.title ?? p?.frontmatter.title ?? r.slug,
      description: p?.frontmatter.description,
    };
  });
}
