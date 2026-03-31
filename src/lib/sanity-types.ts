import type {SanityImageSource} from '@sanity/image-url'

export interface Post {
  _id: string
  title: string
  slug: {current: string}
  publishedAt: string
  excerpt?: string
  mainImage?: SanityImageSource
  tags?: string[]
}

export interface PostWithBody extends Post {
  body: any[]
}

export type PostsQueryResult = Post[]

export type PostBySlugQueryResult = PostWithBody | null
