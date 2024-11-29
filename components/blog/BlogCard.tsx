import { formatDate } from '@/utils/date';
import Link from 'next/link';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

export function BlogCard({ title, excerpt, date, slug }: BlogCardProps) {
  return (
    <article className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <Link href={`/blog/${slug}`}>
        <h2 className="text-xl font-semibold mb-2 hover:text-blue-600">{title}</h2>
      </Link>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <time className="text-sm text-gray-500">{formatDate(date)}</time>
    </article>
  );
}