import {useLoaderData, type LoaderFunctionArgs} from 'react-router-dom'
import {PortableText} from '@portabletext/react'
import {motion} from 'framer-motion'
import {client, urlFor} from '../lib/sanity'
import {type PostBySlugQueryResult} from '../lib/sanity-types'

const fadeUp = {
  hidden: {opacity: 0, y: 20},
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {duration: 0.5, delay: i * 0.08, ease: [0.25, 0.4, 0.25, 1] as const},
  }),
}

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
    <motion.article
      initial="hidden"
      animate="visible"
      className="max-w-3xl mx-auto"
    >
      <motion.header variants={fadeUp} custom={0} className="mb-12">
        {post.tags && post.tags.length > 0 && (
          <div className="mb-4 flex gap-2">
            {post.tags.map((tag, i) => (
              <motion.span
                key={tag}
                variants={fadeUp}
                custom={i + 1}
                className="px-3 py-1 text-xs rounded-full bg-zinc-800 text-zinc-300"
              >
                {tag}
              </motion.span>
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
      </motion.header>

      {post.mainImage && (
        <motion.div variants={fadeUp} custom={2} className="mb-12 rounded-2xl overflow-hidden">
          <img
            src={urlFor(post.mainImage).width(800).url()}
            alt={post.title}
            className="w-full"
          />
        </motion.div>
      )}

      <motion.div variants={fadeUp} custom={3} className="prose prose-invert prose-lg max-w-none">
        {post.body && <PortableText value={post.body} components={ptComponents} />}
      </motion.div>

      <motion.div variants={fadeUp} custom={4} className="mt-16 pt-8 border-t border-zinc-800">
        <a
          href="/blog"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          ← Back to Blog
        </a>
      </motion.div>
    </motion.article>
  )
}
