import Review from "../interfaces/ReviewType";
import * as fetcher from "../utils/Queries";

const Home = async () => {
  const reviews: Review[] = await fetcher.getAllReviews();
  console.log(reviews);

  return (
    <div>
      {reviews?.length > 0 &&
        reviews.map((review, index) => (
          // Replace this with your actual JSX for each review
          <h2 key={index}>{review.title}</h2>
        ))}
    </div>
  );
};

export default Home;
