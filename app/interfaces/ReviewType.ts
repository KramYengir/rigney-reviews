interface Review {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  rating: number;
  format: "film" | "tv";
  excerpt: string;
  body: Block[];
  head: string;
  heart: string;
  poster: {
    _type: string;
    alt: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  author: Author;
  tagNames: String[];
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
  name: string;
  _ref: string;
  _type: string;
}

interface Tag {
  name: string;
  _ref: string;
  _type: string;
}

export default Review;
