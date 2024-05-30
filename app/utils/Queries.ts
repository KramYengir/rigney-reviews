import { client } from "@/sanity/lib/client";

/** UPDATED - FETCH ALL BUT LATEST... */
const ALL_QUERY = `*[_type == "review"] | order(publishedAt desc)[1..-1] {
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
  format 
}
`;

const SINGLE_QUERY = `*[_type == "review" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  rating,
  excerpt,
  body,
  head,
  heart,
  poster,
  author-> {name},
  "tagNames": tags[]->name,
  publishedAt,
  format 
}`;

const LATEST_QUERY = `*[_type == "review"] | order(publishedAt desc) [0] {
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
  format 
}`;

/** UPDATED - FETCH ALL BUT LATEST... */
const FILTER_BY_FORMAT_QUERY = `*[_type == "review" && format == $format] | order(publishedAt desc)[1..-1]  {
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
  format 
}`;

const LATEST_TV_QUERY = `*[_type == "review" && format == 'tv'] | order(publishedAt desc) [0] {
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
  format 
}`;

const LATEST_FILM_QUERY = `*[_type == "review" && format == 'film'] | order(publishedAt desc) [0] {
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
  format 
}`;

/** UPDATED - CURRENTLY REPLACED BY FILTER_BY_FORMAT... */
const FILM_QUERY = `*[_type == "review" && format == 'film'] | order(publishedAt desc){
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
  format 
}`;

/** UPDATED - CURRENTLY REPLACED BY FILTER_BY_FORMAT... */
const TV_QUERY = `*[_type == "review" && format == 'tv'] | order(publishedAt desc){
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
  format 
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
  format 
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
  format 
}`;

export async function getAllReviews() {
  const reviews = await client.fetch(ALL_QUERY);
  return reviews;
}
export async function getSingleReview(slug: string) {
  const review = await client.fetch(SINGLE_QUERY, { slug });
  return review;
}
export async function getLatestReview() {
  const review = await client.fetch(LATEST_QUERY);
  return review;
}
export async function getReviewsByFormat(format: string) {
  const reviews = await client.fetch(FILTER_BY_FORMAT_QUERY, { format });
  return reviews;
}
export async function getLatestTvReview() {
  const review = await client.fetch(LATEST_TV_QUERY);
  return review;
}
export async function getLatestFilmReview() {
  const review = await client.fetch(LATEST_FILM_QUERY);
  return review;
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
