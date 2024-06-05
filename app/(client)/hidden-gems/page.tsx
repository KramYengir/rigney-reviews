import Reviews from "@/app/components/Reviews";
import React from "react";
import { getHiddenGems } from "@/app/utils/Queries";
import { Metadata } from "next";

export const revalidate = 3600; //re fetch data every hour

export const metadata: Metadata = {
  title: "Hidden Gems - RigneyReviews",
  description: "Reviews of Films and TV Shows which I consider Hidden Gems.",
  openGraph: {
    title: `Hidden Gems`,
    description: `Films and TV Shows which I consider Hidden Gems.`,
    locale: "en_EN",
    type: "website",
    url: `https://rigneyreviews.com/hidden-gems`,
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

const HiddenGemsPage = async () => {
  const reviews = await getHiddenGems();

  console.log(reviews);

  return (
    <section className=" py-16">
      <h1 className=" uppercase text-4xl tracking-wider font-medium text-scooter-700 dark:text-scooter-100">
        Hidden Gems
      </h1>
      <p className=" my-6 text-balance">
        Here you can find the Films and TV Shows which I consider &quot;Hidden
        Gems&quot;, the ones that I expected to be more widely known and
        appreciated, but for whatever reason, are not.
      </p>
      {reviews?.length > 0 ? (
        <Reviews reviews={reviews} format="hidden gems" />
      ) : (
        <p className=" italic">Sorry, could not find any reviews :(</p>
      )}
    </section>
  );
};

export default HiddenGemsPage;
