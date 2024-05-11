import LatestReview from "@/app/components/LatestReview";
import ReviewCard from "@/app/components/ReviewCard";
import Review from "@/app/interfaces/ReviewType";
import { getTvReviews } from "@/app/utils/Queries";
import React from "react";

export const revalidate = 3600; //re fetch data every hour

const TVReviewsPage = async () => {
  const reviews: Review[] = await getTvReviews();

  return (
    <>
      <LatestReview format="tv" />
      <hr className=" border-b border-slate-300 my-10" />
      <div className="grid gap-4">
        {reviews?.length > 0 &&
          reviews.map((review) => (
            <ReviewCard key={review._id} review={review} />
          ))}
      </div>
    </>
  );
};

export default TVReviewsPage;
