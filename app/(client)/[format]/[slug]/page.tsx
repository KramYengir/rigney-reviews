import React from "react";
import { getSingleReview } from "@/app/utils/Queries";
import Review from "@/app/interfaces/ReviewType";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import ProductionInfo from "@/app/components/ProductionInfo";
import { PortableTextStyles } from "@/app/utils/PortableTextStyles";
import { notFound } from "next/navigation";
import BackButton from "@/app/components/BackButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RReviews",
  description: "Rigney Reviews - The best reviews on the internet",
};

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 60; //re fetch data every minute

const page = async ({ params }: Props) => {
  const review: Review = await getSingleReview(params.slug);

  // ERROR HANDLING FOR NON-EXISTENT REVIEWS - 404
  if (!review) {
    notFound();
  }
  const posterUrl = urlForImage(review?.poster);

  // determine format type for OMDb APi request
  const type = review.format === "tv" ? "series" : "movie";

  return (
    <article className="grid pt-2 pb-10">
      <div className="flex justify-start">
        <BackButton />
      </div>
      <h2 className="mt-12 text-2xl md:text-4xl font-semibold text-scooter-800 dark:text-scooter-50">
        {review?.title}
      </h2>
      <small className=" font-light">
        {new Date(review?.publishedAt).toDateString()}
      </small>
      <div className="my-8 rounded-md overflow-hidden">
        <img src={posterUrl} alt={review?.poster.alt} />
      </div>
      <div className="leading-relaxed max-w-2xl text-scooter-900 dark:text-scooter-50">
        <PortableText
          value={review?.body}
          components={PortableTextStyles}
        ></PortableText>
      </div>
      <div className="flex flex-wrap justify-start sm:justify-evenly text-left  my-4 max-w-2xl p-4 rounded text-scooter-50 bg-scooter-900 dark:text-scooter-900 dark:bg-scooter-50">
        <p className="flex items-center uppercase font-semibold text-4xl">
          {review.rating}
          <span className="font-medium text-sm">/10</span>
        </p>
        <p className="text-balance italic my-2 max-w-md">{review.excerpt}</p>
      </div>
      <hr className="my-4 border-b border-slate-300" />
      {/* tetsing api integration */}
      <ProductionInfo title={review.title} format={type} />
      <hr className="my-4 border-b border-slate-300" />
      <div className="flex justify-start">
        <BackButton />
      </div>
    </article>
  );
};

export default page;
