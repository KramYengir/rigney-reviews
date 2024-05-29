import React from "react";
import {
  getLatestFilmReview,
  getLatestTvReview,
  getLatestReview,
} from "../utils/Queries";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";

interface Props {
  format?: string;
}

export const revalidate = 60; //re fetch data every minute

const LatestReview = async ({ format }: Props) => {
  let latestReview;

  // Check if the format prop is valid
  if (format && !["tv", "film"].includes(format)) {
    throw new Error(`Invalid format prop: ${format}`);
  }

  switch (format) {
    case "tv":
      latestReview = await getLatestTvReview();
      break;
    case "film":
      latestReview = await getLatestFilmReview();
      break;
    default:
      latestReview = await getLatestReview();
  }

  const posterUrl = urlForImage(latestReview?.poster);

  return (
    <section className="grid my-12 py-2 ">
      <div className="flex justify-between items-center mb-2">
        <h2 className="uppercase md:text-lg">Latest {format} Review</h2>
        <small className=" text-xs font-normal">
          {new Date(latestReview.publishedAt).toDateString()}
        </small>
      </div>
      <div className="mb-3 rounded-md overflow-hidden">
        <img src={posterUrl} alt={latestReview.poster.alt} />
      </div>
      <div className="flex justify-between ">
        <h3 className=" text-lg md:text-2xl  text-scooter-800 dark:text-scooter-50">
          {latestReview.title}
        </h3>
        <p className="md:text-2xl">{latestReview.rating}/10</p>
      </div>
      <small className="uppercase text-xs font-light mb-2">
        {latestReview.format}
      </small>
      <p className=" max-w-[90%] font-light">{latestReview.excerpt}</p>
      <Link
        href={`/${latestReview.format}/${latestReview.slug.current}`}
        className="btn-primary mt-6"
      >
        Read Review
      </Link>
    </section>
  );
};

export default LatestReview;
