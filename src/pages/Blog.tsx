import {Link, useLoaderData} from 'react-router-dom'
import {client, urlFor} from '../lib/sanity'
import {type PostsQueryResult} from '../lib/sanity-types'

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
    <div className="py-12">
      <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Blog
      </h1>
      <p className="text-gray-400 mb-12 text-lg">
        Thoughts on development, design, and everything in between.
      </p>

      {fetchError && (
        <div className="mb-8 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-amber-200">
          Could not load posts from Sanity right now. Check your Sanity project
          settings, dataset permissions, and CORS origins, then refresh.
        </div>
      )}

      {posts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">No posts yet.</p>
          <p className="text-gray-600 mt-2">
            Check back soon or add posts in the Sanity Studio.
          </p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post._id}
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
          ))}
        </div>
      )}
    </div>
  )
}
