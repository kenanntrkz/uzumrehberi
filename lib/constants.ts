export const SITE_CONFIG = {
  title: 'Blog',
  description: 'Kişisel blog ve reklam platformu',
  author: 'Blog Yazarı',
  language: 'tr-TR',
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
}

export const ROUTES = {
  home: '/',
  blog: '/blog',
  about: '/about',
} as const