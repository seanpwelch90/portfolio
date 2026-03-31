import {useLoaderData, type LoaderFunctionArgs} from 'react-router-dom'
import {PortableText} from '@portabletext/react'
import {client, urlFor} from '../lib/sanity'
import {type PostBySlugQueryResult} from '../lib/sanity-types'

export async function loader({params}: LoaderFunctionArgs) {
  if (!params.slug) {
    throw new Response('Not Found', {status: 404})
  }

  let post: PostBySlugQueryResult
  try {
    post = await client.fetch<PostBySlugQueryResult>(
      `*[_type == "post" && slug.current == $slug][0] {
        title,
        slug,
        publishedAt,
        excerpt,
        mainImage,
        body,
        tags
      }`,
      {slug: params.slug}
    )
  } catch {
    throw new Response('Service Unavailable', {status: 503})
  }

  if (!post) {
    throw new Response('Not Found', {status: 404})
  }

  return {post}
}

// Custom components for PortableText
const ptComponents = {
  types: {
    image: ({value}: {value: {alt?: string; asset?: any}}) => {
      if (!value?.asset) return null
      return (
        <figure className="my-8">
          <img
            src={urlFor(value.asset).width(800).url()}
            alt={value.alt || ''}
            className="w-full rounded-lg"
          />
          {value.alt && (
            <figcaption className="text-center text-sm text-gray-500 mt-2">
              {value.alt}
            </figcaption>
          )}
        </figure>
      )
    },
  },
  block: {
    h1: ({children}: {children?: React.ReactNode}) => (
      <h1 className="text-4xl font-bold mt-12 mb-6">{children}</h1>
    ),
    h2: ({children}: {children?: React.ReactNode}) => (
      <h2 className="text-3xl font-bold mt-10 mb-5">{children}</h2>
    ),
    h3: ({children}: {children?: React.ReactNode}) => (
      <h3 className="text-2xl font-semibold mt-8 mb-4">{children}</h3>
    ),
    blockquote: ({children}: {children?: React.ReactNode}) => (
      <blockquote className="border-l-4 border-blue-500 pl-6 py-2 my-6 italic text-gray-300">
        {children}
      </blockquote>
    ),
  },
}

export default function BlogPost() {
  const {post} = useLoaderData<typeof loader>()

  return (
    <article className="py-12 max-w-3xl mx-auto">
      {/* Header */}
      <header className="mb-12">
        {post.tags && post.tags.length > 0 && (
          <div className="flex gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-zinc-800 text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
        {post.excerpt && (
          <p className="text-xl text-gray-400">{post.excerpt}</p>
        )}
        <p className="text-gray-500 mt-4">
          {post.publishedAt
            ? new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })
            : ''}
        </p>
      </header>

      {/* Featured Image */}
      {post.mainImage && (
        <div className="mb-12 rounded-2xl overflow-hidden">
          <img
            src={urlFor(post.mainImage).width(800).url()}
            alt={post.title}
            className="w-full"
          />
        </div>
      )}

      {/* Content */}
      <div className="prose prose-invert prose-lg max-w-none">
        {post.body && <PortableText value={post.body} components={ptComponents} />}
      </div>

      {/* Back Link */}
      <div className="mt-16 pt-8 border-t border-zinc-800">
        <a
          href="/blog"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          ← Back to Blog
        </a>
      </div>
    </article>
  )
}
