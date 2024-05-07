import { type SchemaTypeDefinition } from "sanity";
import { review } from "./schemas/review";
import { author } from "./schemas/author";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [review, author],
};
