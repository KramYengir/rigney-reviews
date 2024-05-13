import React from "react";
import Review from "../interfaces/ReviewType";
import ReviewCard from "./ReviewCard";

interface ReviewsProps {
  reviews: Review[];
  format: string;
}

const Reviews = ({ reviews, format }: ReviewsProps) => {
  return (
    <section className="grid gap-4 py-10">
      <h2 className=" uppercase font-medium pb-1 border-b border-slate-300 mb-4">
        {format} Reviews
      </h2>
      {reviews?.length > 0 &&
        reviews.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
    </section>
  );
};

export default Reviews;
