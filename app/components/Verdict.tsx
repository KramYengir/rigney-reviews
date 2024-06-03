import React from "react";
import { GetStarRating } from "../utils/GetSTarRating";

const Verdict = ({ rating, excerpt }: { rating: number; excerpt: string }) => {
  const ratingLabel = Math.floor(rating) / 2;
  return (
    <div className="grid justify-center text-center gap-4 my-4 max-w-2xl px-4 py-6 rounded text-scooter-50 bg-scooter-900 dark:text-scooter-900 dark:bg-scooter-50">
      <div
        className="flex justify-center items-center gap-1 text-3xl sm:text-4xl"
        aria-label={`Rating of ${ratingLabel} out of 5 stars`}
      >
        {GetStarRating(rating)}
      </div>

      <hr className="border-b border-slate-300 w-full" />
      <p className="text-balance italic max-w-md ">{excerpt}</p>
    </div>
  );
};

export default Verdict;
