import Review from "../interfaces/ReviewType";
import { getAllReviews } from "../utils/Queries";
import ReviewCard from "../components/ReviewCard";
import LatestReview from "../components/LatestReview";

export const revalidate = 3600; //re fetch data every hour

const Home = async () => {
  const reviews: Review[] = await getAllReviews();

  return (
    <>
      <LatestReview />
      <hr className=" border-b border-slate-300 my-10" />
      <div className="grid gap-4">
        {reviews?.length > 0 &&
          reviews.map((review) => (
            <ReviewCard key={review._id} review={review} />
          ))}
      </div>
    </>
  );
};

export default Home;
