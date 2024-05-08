import { type SchemaTypeDefinition } from "sanity";
import { review } from "./schemas/review";
import { author } from "./schemas/author";
import { tag } from "./schemas/tag";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [review, author, tag],
};
