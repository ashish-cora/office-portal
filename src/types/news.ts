export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  content: any[]; // Sanity Portable Text
  date: string;
  author: string;
  category: string;
  mainImage?: {
    url: string;
    alt?: string;
  };
}