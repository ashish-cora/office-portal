import { getNews } from './sanity';
import { NEWS } from '../data/news';
import type { NewsArticle } from '../types/news';

export async function getNewsOrFallback(): Promise<NewsArticle[]> {
  try {
    return await getNews();
  } catch {
    return NEWS;
  }
}
