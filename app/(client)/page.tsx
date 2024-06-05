import Review from "../interfaces/ReviewType";
import { getAllReviews } from "../utils/Queries";
import ReviewCard from "../components/ReviewCard";
import LatestReview from "../components/LatestReview";
import FilterBar from "../components/FilterBar";
import Reviews from "../components/Reviews";
import { Suspense } from "react";

export const revalidate = 3600; //re fetch data every hour

const Home = async () => {
  const reviews: Review[] = await getAllReviews();

  return (
    <>
      <FilterBar />
      <LatestReview />
      <Suspense fallback={<p>Loading reviews...</p>}>
        <Reviews reviews={reviews} format="All" />
      </Suspense>
    </>
  );
};

export default Home;
