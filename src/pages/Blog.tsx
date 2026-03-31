import {motion} from 'framer-motion'
import {Link, useLoaderData} from 'react-router-dom'
import {client, urlFor} from '../lib/sanity'
import {type PostsQueryResult} from '../lib/sanity-types'

const fadeUp = {
  hidden: {opacity: 0, y: 20},
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {duration: 0.5, delay: i * 0.08, ease: [0.25, 0.4, 0.25, 1] as const},
  }),
}

export async function loader() {
  try {
    const posts = await client.fetch<PostsQueryResult>(`
      *[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        publishedAt,
        excerpt,
        mainImage,
        tags
      }
    `)
    return {posts, fetchError: false}
  } catch {
    return {posts: [], fetchError: true}
  }
}

export default function Blog() {
  const {posts, fetchError} = useLoaderData<typeof loader>()

  return (
    <motion.section initial="hidden" animate="visible">
      <motion.h2
        variants={fadeUp}
        custom={0}
        className="text-3xl font-bold tracking-tight"
      >
        Blog
      </motion.h2>
      <motion.p
        variants={fadeUp}
        custom={1}
        className="mt-5 text-base leading-relaxed text-zinc-400"
      >
        Thoughts on development, design, and everything in between.
      </motion.p>

      <div className="mt-10">
        {fetchError && (
          <motion.div
            variants={fadeUp}
            custom={2}
            className="mb-8 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-amber-200"
          >
            Could not load posts from Sanity right now. Check your Sanity project
            settings, dataset permissions, and CORS origins, then refresh.
          </motion.div>
        )}

        {posts.length === 0 ? (
          <motion.div variants={fadeUp} custom={3} className="py-20 text-center">
            <p className="text-gray-500 text-lg">No posts yet.</p>
            <p className="text-gray-600 mt-2">
              Check back soon or add posts in the Sanity Studio.
            </p>
          </motion.div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <motion.div key={post._id} variants={fadeUp} custom={3 + i}>
                <Link
                  to={`/blog/${post.slug.current}`}
                  className="group block bg-zinc-900/50 border border-zinc-800/50 rounded-2xl overflow-hidden hover:border-zinc-700/50 transition-all duration-300"
                >
                  {post.mainImage && (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={urlFor(post.mainImage)
                          .width(400)
                          .height(300)
                          .url()}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h2 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-gray-400 mt-2 line-clamp-2">
                        {post.excerpt}
                      </p>
                    )}
                    <div className="flex items-center justify-between mt-4">
                      <p className="text-sm text-gray-500">
                        {post.publishedAt
                          ? new Date(post.publishedAt).toLocaleDateString(
                              'en-US',
                              {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                              }
                            )
                          : ''}
                      </p>
                      {post.tags && post.tags.length > 0 && (
                        <span className="text-xs text-gray-500">
                          {post.tags.slice(0, 2).join(', ')}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.section>
  )
}
