export interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt?: string | null;
  content: string;
  publishedAt?: string | null;
}
