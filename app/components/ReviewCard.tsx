import React from "react";
import Review from "../interfaces/ReviewType";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";

interface Props {
  review: Review;
}

const ReviewCard = ({ review }: Props) => {
  const posterUrl = urlForImage(review?.poster);

  return (
    <article className="card-gradient relative flex flex-col min-h-40 min-w-72 max-w-md p-4 rounded-xl text-slate-50">
      <header className="flex justify-between items-center text-lg font-semibold">
        <h3>{review?.title}</h3>
        <p>{review.rating}</p>
      </header>
      <p className=" uppercase text-xs text-slate-100">{review?.format}</p>
      {/* <p className=" mt-auto mb-auto text-sm">{review.excerpt}</p> */}
      <footer className="flex justify-between items-center mt-auto">
        <small className="text-slate-100">
          {new Date(review?.publishedAt).toDateString()}
        </small>
        <Link
          href={`/${review.format}/${review?.slug?.current}`}
          className="btn-secondary"
        >
          Read
        </Link>
      </footer>

      {/* bg image */}
      <div className="absolute -z-10 inset-0 grid place-content-baseline overflow-hidden  rounded-xl">
        <img src={posterUrl} alt={review.poster.alt} />
      </div>
    </article>
  );
};

export default ReviewCard;
