export const author = {
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "The author's name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      description: "The author's image",
      validation: (Rule) => Rule.required(),
    },
  ],
};
