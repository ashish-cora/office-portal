import { createClient } from "@sanity/client";
import type { NewsArticle } from "../types/news";

export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID ?? "pmcpg0al",
  dataset: import.meta.env.PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2026-03-01",
  useCdn: false,
});

export const NEWS_QUERY = `*[
  _type == "post" &&
  defined(slug.current)
] | order(coalesce(publishedAt, _createdAt) desc) {
  "id": _id,
  "slug": slug.current,
  title,
  "content": body,
  "date": coalesce(publishedAt, _createdAt),
  "author": author->name,
  "category": categories[0]->title,
  "mainImage": {
    "url": mainImage.asset->url,
    "alt": mainImage.alt
  }
}`;

export async function getNews(): Promise<NewsArticle[]> {
  const articles = await sanityClient.fetch(NEWS_QUERY);
  return articles;
}