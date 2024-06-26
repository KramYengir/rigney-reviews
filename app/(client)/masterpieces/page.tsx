import Reviews from "@/app/components/Reviews";
import React from "react";
import { getMasterpieces } from "@/app/utils/Queries";
import { Metadata } from "next";

export const revalidate = 3600; //re fetch data every hour

export const metadata: Metadata = {
  title: "Masterpieces",
  description:
    "Reviews of Films and TV Shows which I consider Masterpieces of the craft.",
  openGraph: {
    title: `Masterpieces - RigneyReviews`,
    description: `Reviews for Films and TV Shows which I consider Masterpieces of the craft.`,
    locale: "en_EN",
    type: "website",
    url: `https://rigneyreviews.com/masterpieces`,
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

const MasterpiecesPage = async () => {
  const reviews = await getMasterpieces();

  return (
    <section className=" py-16">
      <h1 className=" uppercase text-4xl tracking-wider font-medium text-scooter-700 dark:text-scooter-100">
        Masterpieces
      </h1>
      <p className=" my-6 text-balance">
        Here you can find the Films and TV Shows which I consider Masterpieces
        of the craft. These are not simply reviews with a 10/10 Rating, because
        they may not be perfect, but rather they are films/shows which excel in
        one or more areas of the craft, so much so that they stand out from
        everything else and are worth watching for that reason alone.
      </p>
      {reviews.length > 0 ? (
        <Reviews reviews={reviews} format="masterpieces" />
      ) : (
        <p className=" italic">Sorry, could not find any reviews :(</p>
      )}
    </section>
  );
};

export default MasterpiecesPage;
