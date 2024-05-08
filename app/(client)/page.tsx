import Review from "../interfaces/ReviewType";
import * as fetcher from "../utils/Queries";
import ReviewCard from "../components/ReviewCard";

export const revalidate = 3600; //re fetch data every hour

const Home = async () => {
  const reviews: Review[] = await fetcher.getAllReviews();
  console.log(reviews);

  return (
    <div className="grid gap-4">
      {reviews?.length > 0 &&
        reviews.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
    </div>
  );
};

export default Home;
