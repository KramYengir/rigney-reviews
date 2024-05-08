import { client } from "@/sanity/lib/client";

const ALL_QUERY = `*[_type == "review"] {
  _id,
  title,
  slug,
  rating,
  excerpt,
  body,
  poster,
  author-> {name},
  "tagNames": tags[]->name,
  publishedAt,
  format // add the format field here
}
`;
const FILM_QUERY = `**[_type == "review" && format == 'film']{
  _id,
  title,
  slug,
  rating,
  excerpt,
  body,
  poster,
  author-> {name},
  "tagNames": tags[]->name,
  publishedAt,
  format // add the format field here
}`;
const TV_QUERY = `*[_type == "review" && format == 'tv']{
  _id,
  title,
  slug,
  rating,
  excerpt,
  body,
  poster,
  author-> {name},
  "tagNames": tags[]->name,
  publishedAt,
  format // add the format field here
}`;
const MASTERPIECES_QUERY = `*[_type == "review" && count(tags[@->name in ["masterpiece"]]) > 0 ]{
  _id,
  title,
  slug,
  rating,
  excerpt,
  body,
  poster,
  author-> {name},
  "tagNames": tags[]->name,
  publishedAt,
  format // add the format field here
}`;
const HIDDEN_GEMS_QUERY = `*[_type == "review" && count(tags[@->name in ["hidden gem"]]) > 0 ]{
  _id,
  slug,
  title,
  rating,
  excerpt,
  body,
  poster,
  author-> {name},
  "tagNames": tags[]->name,
  publishedAt,
  format // add the format field here
}`;

export async function getAllReviews() {
  const reviews = await client.fetch(ALL_QUERY);
  return reviews;
}
export async function getFilmReviews() {
  const reviews = await client.fetch(FILM_QUERY);
  return reviews;
}
export async function getTvReviews() {
  const reviews = await client.fetch(TV_QUERY);
  return reviews;
}
export async function getMasterpieces() {
  const reviews = await client.fetch(MASTERPIECES_QUERY);
  return reviews;
}
export async function getHiddenGems() {
  const reviews = await client.fetch(HIDDEN_GEMS_QUERY);
  return reviews;
}
