import Review from "../interfaces/ReviewType";
import { getAllReviews } from "../utils/Queries";
import ReviewCard from "../components/ReviewCard";
import LatestReview from "../components/LatestReview";
import FilterBar from "../components/FilterBar";
import Reviews from "../components/Reviews";

export const revalidate = 3600; //re fetch data every hour

const Home = async () => {
  const reviews: Review[] = await getAllReviews();

  return (
    <>
      <FilterBar />
      <LatestReview />
      {/* <hr className=" border-b border-slate-300 my-10" /> */}
      <Reviews reviews={reviews} format="All" />
    </>
  );
};

export default Home;
