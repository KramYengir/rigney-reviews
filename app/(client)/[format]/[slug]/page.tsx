import React from "react";
import { getSingleReview } from "@/app/utils/Queries";
import Review from "@/app/interfaces/ReviewType";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import ProductionInfo from "@/app/components/ProductionInfo";

interface Props {
  params: {
    slug: string;
  };
}

// A component so we can display the images in our review body
const PortableTextImage = {
  types: {
    image: ({ value }: any) => {
      return (
        <img src={urlForImage(value)} alt={value.alt} className="rounded-md" />
      );
    },
  },
};

const page = async ({ params }: Props) => {
  const review: Review = await getSingleReview(params.slug);
  const posterUrl = urlForImage(review?.poster);

  return (
    <article className="grid py-4">
      <Link href={"/"} className="mb-12">
        &#x2039; Back
      </Link>
      <h2 className=" text-2xl font-semibold text-scooter-800 dark:text-scooter-50">
        {review?.title}
      </h2>
      <small className=" font-light">
        {new Date(review?.publishedAt).toDateString()}
      </small>
      <div className="my-8 rounded-md overflow-hidden">
        <img src={posterUrl} alt={review?.poster.alt} />
      </div>
      <div className="prose text-scooter-900 dark:text-scooter-50">
        <PortableText
          value={review?.body}
          components={PortableTextImage}
        ></PortableText>
      </div>
      <div className=" my-4 p-4 rounded text-scooter-50 bg-scooter-900 dark:text-scooter-900 dark:bg-scooter-50">
        <p className=" uppercase font-semibold">Rating: {review.rating}</p>
        <p className=" italic my-2">{review.excerpt}</p>
      </div>
      <hr className="my-4 border-b border-slate-300" />
      {/* tetsing api integration */}
      <ProductionInfo title={review.title} />
    </article>
  );
};

export default page;
