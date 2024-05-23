import { notFound } from "next/navigation";
import FilterBar from "@/app/components/FilterBar";
import LatestReview from "@/app/components/LatestReview";
import ReviewCard from "@/app/components/ReviewCard";
import Reviews from "@/app/components/Reviews";
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

const FORMATS = ["tv", "film"];

const FilterPage = async ({ params }: Props) => {
  // ERROR HANDLING FOR BAD ROUTES
  if (!FORMATS.includes(params.format)) {
    return notFound();
  }

  let reviews: Review[] = await getReviewsByFormat(params.format);
  console.log("FORMATTTTTT:", params.format);

  return (
    <>
      <FilterBar />
      <LatestReview format={params.format} />
      <hr className=" border-b border-slate-300 my-10" />
      <Reviews reviews={reviews} format={params.format} />
    </>
  );
};

export default FilterPage;
