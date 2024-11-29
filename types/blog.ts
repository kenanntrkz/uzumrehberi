export interface Post {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  content?: string;
}

export interface Category {
  name: string;
  slug: string;
  description?: string;
}