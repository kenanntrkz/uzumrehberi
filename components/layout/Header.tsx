import Link from 'next/link';
import { ROUTES } from '@/lib/constants';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href={ROUTES.home} className="text-2xl font-bold text-gray-800">
            Blog
          </Link>
          <div className="space-x-4">
            <Link href={ROUTES.blog} className="text-gray-600 hover:text-gray-900">
              Yazılar
            </Link>
            <Link href={ROUTES.about} className="text-gray-600 hover:text-gray-900">
              Hakkında
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}