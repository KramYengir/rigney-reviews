import { notFound } from "next/navigation";
import FilterBar from "@/app/components/FilterBar";
import LatestReview from "@/app/components/LatestReview";
import Reviews from "@/app/components/Reviews";
import Review from "@/app/interfaces/ReviewType";
import { getReviewsByFormat } from "@/app/utils/Queries";
import React from "react";
import type { Metadata } from "next";

export const revalidate = 3600; //re fetch data every hour

interface Props {
  params: {
    format: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const format = params.format == "tv" ? "TV" : "Film";
  return {
    title: `${format} Reviews | RigneyReviews`,
    description: `A list of all ${format} Reviews on RigneyReviews.`,
    openGraph: {
      title: `${format}`,
      description: `${format} Reviews`,
      locale: "en_EN",
      type: "website",
      url: `https://rigneyreviews.com/${params.format}`,
      siteName: "RigneyReviews",
      images: [
        {
          url: "https://rigneyreviews.com/opengraph-image.png",
          width: 1200,
          height: 675,
          alt: "Rigney Reviews Logo and Title",
        },
      ],
    },
  };
}

const FORMATS = ["tv", "film"];

const FilterPage = async ({ params }: Props) => {
  // ERROR HANDLING FOR BAD ROUTES
  if (!FORMATS.includes(params.format)) {
    return notFound();
  }

  let reviews: Review[] = await getReviewsByFormat(params.format);

  // Capitalize the first letter of each word
  const capitalizeWords = (str: string) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  let h1Text = `Rigney Reviews - ${capitalizeWords(params.format)} Reviews`;

  return (
    <>
      <FilterBar />
      <h1 className="sr-only">{h1Text}</h1>
      <LatestReview format={params.format} />
      <Reviews reviews={reviews} format={params.format} />
    </>
  );
};

export default FilterPage;
