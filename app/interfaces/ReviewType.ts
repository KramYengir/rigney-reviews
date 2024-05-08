interface Review {
  _id: string;
  title: string;
  rating: number;
  format: "movie" | "tv_show";
  excerpt: string;
  body: Block[];
  poster: Image;
  author: Author;
  tags: Tag[];
  publishedAt: string;
}

interface Block {
  _type: string;
  children: Text[];
}

interface Text {
  _type: string;
  text: string;
}

interface Image {
  asset: {
    _ref: string;
    _type: string;
  };
  alt: string;
}

interface Author {
  _ref: string;
  _type: string;
}

interface Tag {
  _ref: string;
  _type: string;
}

export default Review;
