import { init } from "next/dist/compiled/webpack/webpack";
import { Rule, validation } from "sanity";

export const review = {
  name: "review",
  title: "Review",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Title of show/movie reviewed",
      validation: (Rule: Rule) => [
        Rule.required().error("Title is required"),
        Rule.max(40).error("Title must be at most 40 characters"),
        Rule.min(1).error("Title must be at least 1 character"),
      ],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "This is the URL-friendly version of the title",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: Rule) => Rule.required().error("Slug is required"),
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      description: "Rate the movie from 1 to 10",
      validation: (Rule: Rule) => [
        Rule.required().error("Rating is required"),
        Rule.min(1).error("Rating must be at least 1"),
        Rule.max(10).error("Rating must be at most 10"),
      ],
    },
    {
      name: "format",
      title: "Format",
      type: "string",
      options: {
        list: [
          { title: "Film", value: "film" },
          { title: "TV", value: "tv" },
        ],
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      description: "Write a short excerpt",
      validation: (Rule: Rule) => [
        Rule.required().error("Excerpt is required"),
        Rule.min(20).error("Excerpt must be at least 20 characters"),
        Rule.max(200).error("Excerpt must be at most 200 characters"),
      ],
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          fields: [
            {
              type: "string",
              name: "alt",
              title: "Alt text",
              validation: (Rule: Rule) =>
                Rule.required().error("Alt-text is required"),
            },
          ],
        },
      ],
      description: "Write your review here",
      validation: (Rule: Rule) => Rule.required().error("Body is required"),
    },
    {
      name: "poster",
      title: "Poster",
      type: "image",
      description: "The movie/show's poster",
      fields: [
        {
          type: "string",
          name: "alt",
          title: "Alt text",
        },
      ],
      validation: (Rule: Rule) => Rule.required().error("Image is required"),
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
      validation: (Rule: Rule) => Rule.required().error("Author is required"),
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: [{ type: "tag" }] }],
      validation: (Rule: Rule) => Rule.required().error("Tags are required"),
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      description: "When was this review published?",
      validation: (Rule: Rule) => Rule.required().error("Date is required"),
      initialValue: () => new Date().toISOString(),
    },
  ],
};
