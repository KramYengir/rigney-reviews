import FilterBar from "@/app/components/FilterBar";
import LatestReview from "@/app/components/LatestReview";
import ReviewCard from "@/app/components/ReviewCard";
import Review from "@/app/interfaces/ReviewType";
import { getReviewsByFormat } from "@/app/utils/Queries";
import { error } from "console";
import React from "react";

export const revalidate = 3600; //re fetch data every hour

interface Props {
  params: {
    format: string;
  };
}

const FilterPage = async ({ params }: Props) => {
  let reviews: Review[] = await getReviewsByFormat(params.format);
  console.log("FORMATTTTTT:", params.format);

  return (
    <>
      <FilterBar />
      <LatestReview format={params.format} />
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

export default FilterPage;
