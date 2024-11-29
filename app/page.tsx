import { BlogCard } from '@/components/blog/BlogCard'
import { AdBanner } from '@/components/ads/AdBanner'
import type { Post } from '@/types/blog'

const recentPosts: Post[] = [
  {
    title: "İlk Blog Yazısı",
    excerpt: "Blog'a hoş geldiniz! Bu ilk yazımızda...",
    date: "2024-01-10",
    slug: "ilk-blog-yazisi"
  },
  {
    title: "İkinci Blog Yazısı",
    excerpt: "Bu yazımızda farklı konulara değineceğiz...",
    date: "2024-01-11",
    slug: "ikinci-blog-yazisi"
  }
];

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <AdBanner position="top" className="mb-8" />
      
      <h1 className="text-4xl font-bold mb-8">Son Yazılar</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        {recentPosts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
      
      <AdBanner position="content" className="mt-8" />
    </div>
  )
}