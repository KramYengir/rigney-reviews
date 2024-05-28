import Reviews from "@/app/components/Reviews";
import React from "react";
import { getMasterpieces } from "@/app/utils/Queries";

export const revalidate = 60; //re fetch data every minute

const MasterpiecesPage = async () => {
  const reviews = await getMasterpieces();

  return (
    <section className=" py-8">
      <h1 className=" uppercase text-2xl tracking-wider font-medium text-scooter-600 dark:text-scooter-100">
        Masterpieces
      </h1>
      <p className=" mt-2 mb-6 text-balance">
        Here you can find the Films and TV Shows which I consider Masterpieces
        of the craft. These are not simply reviews with a 10/10 Rating, because
        they may not be perfect, but rather they are films/shows which excel in
        one or more areas of the craft, and are worth watching for that reason.
      </p>
      {reviews.length > 0 ? (
        <Reviews reviews={reviews} />
      ) : (
        <p className=" italic">Sorry, could not find any reviews :(</p>
      )}
    </section>
  );
};

export default MasterpiecesPage;
