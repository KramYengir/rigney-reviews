import React from "react";
import Review from "../interfaces/ReviewType";
import ReviewCard from "./ReviewCard";

interface ReviewsProps {
  reviews: Review[];
  format?: string;
}

const Reviews = ({ reviews, format }: ReviewsProps) => {
  return (
    <section className="grid mt-20">
      <h2 className=" uppercase tracking-wider font-medium pb-1 border-b border-slate-300 mb-4">
        {format} Reviews
      </h2>
      <ul className="flex flex-wrap justify-start gap-6 min-w-full">
        {reviews?.length > 0 &&
          reviews.map((review) => (
            <li key={review._id} className="flex-1 sm:max-w-[310px]">
              <ReviewCard review={review} />
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Reviews;
