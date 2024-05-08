import { defineType } from "sanity";

export const tag = defineType({
  name: "tag",
  title: "Tag",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "The tag's name",
      validation: (Rule) => [
        Rule.required().error("A name is required."),
        Rule.min(3).error("Tag must be at least 3 characters"),
        Rule.max(25).error("Tag must be at most 25 characters"),
      ],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "This is the URL-friendly version of the name",
      options: {
        source: "name",
        maxLength: 16,
      },
      validation: (Rule) => Rule.required().error("Slug is required."),
    },
  ],
});
