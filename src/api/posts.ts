import { api } from ".";

export function getPosts() {
  return api.get("/api/articles");
}

export function getPostBySlug(slug: string) {
  return api.get(`/api/articles?filters[slug][$eq]=${slug}`);
}
