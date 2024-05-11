import React from "react";
import { getSingleReview } from "@/app/utils/Queries";
import Review from "@/app/interfaces/ReviewType";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";

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

  console.log(review?.format);
  return (
    <div className="grid py-4">
      <Link href={"/"} className="mb-12">
        &#x2039; Back
      </Link>
      <div className="mb-8 rounded-md overflow-hidden">
        <img src={posterUrl} alt={review?.poster.alt} />
      </div>
      <h2 className=" text-xl">{review?.title}</h2>
      <h3 className=" italic font-light my-4">{review.excerpt}</h3>
      <div className="prose">
        <PortableText
          value={review?.body}
          components={PortableTextImage}
        ></PortableText>
      </div>
    </div>
  );
};

export default page;
