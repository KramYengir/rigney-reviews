import Review from "../interfaces/ReviewType";
import { getAllReviews } from "../utils/Queries";
import ReviewCard from "../components/ReviewCard";
import LatestReview from "../components/LatestReview";
import FilterBar from "../components/FilterBar";
import Reviews from "../components/Reviews";

export const revalidate = 60; //re fetch data every minute

const Home = async () => {
  const reviews: Review[] = await getAllReviews();

  return (
    <>
      <FilterBar />
      <LatestReview />
      <Reviews reviews={reviews} format="All" />
    </>
  );
};

export default Home;
