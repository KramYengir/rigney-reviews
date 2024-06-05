import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

export const GetStarRating = (rating: number) => {
  const stars = [];
  let starRating = Math.floor(rating) / 2;

  for (let i = 1; i <= 5; i++) {
    if (i <= starRating) {
      stars.push(<FaStar key={i} />);
    } else if (i - starRating == 0.5) {
      stars.push(<FaStarHalfAlt key={i} />);
    } else {
      stars.push(<FaRegStar key={i} />);
    }
  }
  return stars;
};
