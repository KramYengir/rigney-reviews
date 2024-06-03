import React from "react";
import Review from "../interfaces/ReviewType";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import DynamicLink from "./DynamicLink";
import { GetStarRating } from "../utils/GetSTarRating";

interface Props {
  review: Review;
}

const ReviewCard = ({ review }: Props) => {
  const posterUrl = urlForImage(review?.poster);
  const starRating = GetStarRating(review.rating);

  return (
    <DynamicLink review={review}>
      <article className="card-gradient relative flex flex-col min-h-40 min-w-72 sm:max-w-[310px] p-4 rounded-xl text-slate-50 shadow-md shadow-scooter-950 dark:shadow-scooter-900 hover:scale-[1.005] ">
        <header className="flex justify-between items-center text-lg font-semibold">
          <h3>{review?.title}</h3>
          {/* <p>{review.rating}</p> */}
        </header>
        <p className=" uppercase text-xs text-slate-100">{review?.format}</p>
        {/* <p className=" mt-auto mb-auto text-sm">{review.excerpt}</p> */}
        <footer className="flex justify-between items-center mt-auto">
          <small className="text-slate-100">
            {new Date(review?.publishedAt).toDateString()}
          </small>
          <div className="flex gap-1">{starRating}</div>
        </footer>

        {/* bg image */}
        <div className="absolute -z-10 inset-0 grid place-content-center overflow-hidden  rounded-xl">
          <img src={posterUrl} alt={review.poster.alt} />
        </div>
      </article>
    </DynamicLink>
  );
};

export default ReviewCard;
