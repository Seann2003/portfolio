import ReactMarkdown, { type Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';

const components: Components = {
  h2: (props) => (
    <h2
      className="mt-12 mb-4 text-headline font-medium text-ink-400 tracking-tight first:mt-0"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-8 mb-3 text-title font-medium text-ink-300 tracking-tight"
      {...props}
    />
  ),
  h4: (props) => (
    <h4
      className="mt-6 mb-2 text-small font-medium uppercase tracking-wider text-ink-50"
      {...props}
    />
  ),
  p: (props) => (
    <p className="mb-4 text-body leading-relaxed text-ink-200" {...props} />
  ),
  a: (props) => (
    <a
      className="text-coral-600 underline decoration-coral-600/30 underline-offset-2 transition-colors hover:text-coral-500 hover:decoration-coral-500/40"
      {...props}
    />
  ),
  strong: (props) => (
    <strong className="font-medium text-ink-400" {...props} />
  ),
  em: (props) => <em className="italic text-ink-200" {...props} />,
  ul: (props) => (
    <ul className="my-4 list-disc space-y-2 pl-6 text-body text-ink-200" {...props} />
  ),
  ol: (props) => (
    <ol className="my-4 list-decimal space-y-2 pl-6 text-body text-ink-200" {...props} />
  ),
  li: (props) => <li className="leading-relaxed [&>p]:mb-0" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-2 border-sand-400 pl-4 text-ink-100 italic"
      {...props}
    />
  ),
  hr: () => <hr className="my-10 border-sand-300" />,
  img: ({ alt, ...props }) => (
    <figure className="my-8">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        {...props}
        alt={alt ?? ''}
        className="w-full rounded-lg border border-sand-300 bg-sand-100"
      />
      {alt ? (
        <figcaption className="mt-3 text-center text-small text-ink-50">
          {alt}
        </figcaption>
      ) : null}
    </figure>
  ),
  pre: (props) => (
    <pre
      className="my-6 overflow-x-auto rounded-lg border border-sand-300 bg-sand-100 p-4 font-mono text-small text-ink-300"
      {...props}
    />
  ),
  code: ({ className, children, ...rest }) => {
    const inline =
      !className &&
      typeof children === 'string' &&
      !String(children).includes('\n');
    if (inline) {
      return (
        <code
          className="rounded bg-sand-200/80 px-1.5 py-0.5 font-mono text-small text-coral-800"
          {...rest}
        >
          {children}
        </code>
      );
    }
    return (
      <code className="font-mono text-small leading-relaxed" {...rest}>
        {children}
      </code>
    );
  },
  table: (props) => (
    <div className="my-6 overflow-x-auto rounded-lg border border-sand-300">
      <table className="w-full border-collapse text-small text-ink-200" {...props} />
    </div>
  ),
  thead: (props) => <thead className="bg-sand-100" {...props} />,
  th: (props) => (
    <th
      className="border-b border-sand-300 px-3 py-2 text-left font-medium text-ink-300"
      {...props}
    />
  ),
  td: (props) => (
    <td className="border-b border-sand-200 px-3 py-2 align-top" {...props} />
  ),
  sup: (props) => (
    <sup className="text-caption text-coral-600 [&_a]:text-coral-600 [&_a]:no-underline" {...props} />
  ),
  section: (props) => {
    if (
      typeof props === 'object' &&
      props !== null &&
      'data-footnotes' in props &&
      (props as { 'data-footnotes'?: unknown })['data-footnotes'] !== undefined
    ) {
      return (
        <section
          {...props}
          className="mt-14 border-t border-sand-300 pt-8 text-small leading-relaxed text-ink-100 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:my-2 [&_a]:text-coral-600 [&_a]:underline-offset-2"
        />
      );
    }
    return <section {...props} />;
  },
};

export function ArticleMarkdown({ content }: { content: string }) {
  return (
    <div className="[&>p:first-of-type]:text-[1.05rem] [&>p:first-of-type]:leading-[1.7]">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
