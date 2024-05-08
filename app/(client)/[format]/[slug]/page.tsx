import React from "react";
import { getSingleReview } from "@/app/utils/Queries";

interface Props {
  params: {
    slug: string;
  };
}

const page = async ({ params }: Props) => {
  const review = await getSingleReview(params.slug);
  console.log(review);
  return <div>page</div>;
};

export default page;
