import Reviews from "@/app/components/Reviews";
import React from "react";
import { getHiddenGems } from "@/app/utils/Queries";

export const revalidate = 60; //re fetch data every minute

const HiddenGemsPage = async () => {
  const reviews = await getHiddenGems();

  console.log(reviews);

  return (
    <section className=" py-8">
      <h1 className=" uppercase text-2xl tracking-wider font-medium text-scooter-600 dark:text-scooter-100">
        Hidden-Gems
      </h1>
      <p className=" mt-2 mb-6 text-balance">
        Here you can find the Films and TV Shows which I consider Hidden-Gems,
        the ones that I expected to be more widely known and appreciated, but
        for some reason are not.
      </p>
      {reviews?.length > 0 ? (
        <Reviews reviews={reviews} />
      ) : (
        <p className=" italic">Sorry, could not find any reviews :(</p>
      )}
    </section>
  );
};

export default HiddenGemsPage;
