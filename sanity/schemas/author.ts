import { defineType, Rule } from "sanity";

export const author = defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "The author's name",
      validation: (Rule: Rule) => [
        Rule.required().error("A name is required."),
        Rule.min(3).error("Name must be at least 3 characters"),
        Rule.max(25).error("Name must be at most 25 characters"),
      ],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      description: "The author's image",
      fields: [
        {
          type: "string",
          name: "alt",
          title: "Alt text",
          validation: (Rule: Rule) =>
            Rule.required().error("Alt-text is required."),
        },
      ],
      validation: (Rule: Rule) => Rule.required().error("Image is required."),
    },
  ],
});
