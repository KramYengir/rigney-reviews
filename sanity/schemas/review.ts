import { off } from "process";
import { author } from "./author";
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
      validation: (Rule) => Rule.required().max(80),
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
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      description: "Rate the movie from 1 to 10",
      validation: (Rule) => Rule.required().min(1).max(5),
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      description: "Write a short excerpt",
      validation: (Rule) => Rule.required().min(50).max(300),
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          fields: [{ type: "string", name: "alt", title: "Alt text" }],
        },
      ],
      description: "Write your review here",
      validation: (Rule) => Rule.required().min(50).max(300),
    },
    {
      name: "poster",
      title: "Poster",
      type: "image",
      description: "The movie/show's poster",
      fields: [{ type: "string", name: "alt", title: "Alt text" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
  ],
};
