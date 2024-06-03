import React from "react";
import { getSingleReview } from "@/app/utils/Queries";
import Review from "@/app/interfaces/ReviewType";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import ProductionInfo from "@/app/components/ProductionInfo";
import { PortableTextStyles } from "@/app/utils/PortableTextStyles";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import QuickSynopsis from "@/app/components/QuickSynopsis";
import Verdict from "@/app/components/Verdict";
import DynamicBackLink from "@/app/components/DynamicBackLink";

export const metadata: Metadata = {
  title: "RReviews",
  description: "Rigney Reviews - The best reviews on the internet",
};

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 3600; //re fetch data every hour

const page = async ({ params }: Props) => {
  const review: Review = await getSingleReview(params.slug);

  // ERROR HANDLING FOR NON-EXISTENT REVIEWS OR INCORRECT HARD URLS - 404
  if (!review || !review.tagNames?.includes("masterpiece")) {
    notFound();
  }

  const posterUrl = urlForImage(review?.poster);

  // determine format type for OMDb APi request
  const type = review.format === "tv" ? "series" : "movie";

  return (
    <article className="grid pt-2 pb-10">
      <DynamicBackLink review={review} />

      <h2 className="mt-12 text-2xl md:text-4xl font-semibold text-scooter-800 dark:text-scooter-50">
        {review?.title}
      </h2>
      <small className=" font-light">
        {new Date(review?.publishedAt).toDateString()}
      </small>
      <div className="my-8 rounded-md overflow-hidden">
        <img src={posterUrl} alt={review?.poster.alt} />
      </div>
      {review.head && <QuickSynopsis head={review.head} heart={review.heart} />}
      <hr className="mt-4 mb-6 border-b border-slate-300" />
      <div className="leading-relaxed max-w-2xl text-scooter-900 dark:text-scooter-50">
        <PortableText
          value={review?.body}
          components={PortableTextStyles}
        ></PortableText>
      </div>
      <Verdict rating={review.rating.toString()} excerpt={review.excerpt} />
      <hr className="my-4 border-b border-slate-300" />
      {/* tetsing api integration */}
      <ProductionInfo title={review.title} format={type} />
      <hr className="my-4 border-b border-slate-300" />
      <DynamicBackLink review={review} />
    </article>
  );
};

export default page;
