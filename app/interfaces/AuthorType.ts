interface Author {
  _id: string;
  name: string;
  image: Image;
}

interface Image {
  asset: {
    _ref: string;
    _type: string;
  };
  alt: string;
}

export default Author;
