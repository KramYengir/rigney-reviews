import { Rule } from "sanity";

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
      validation: (Rule: Rule) => Rule.required().error("A name is required."),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      description: "The author's image",
      fields: [{ type: "string", name: "alt", title: "Alt text" }],
      validation: (Rule: Rule) =>
        Rule.required().error("Alt text is required."),
    },
  ],
};
