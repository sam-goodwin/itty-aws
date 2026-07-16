import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface RetrieveStopwordsSetsInput {}
export const RetrieveStopwordsSetsInput =
  /*@__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/stopwords" }),
  ) as unknown as Schema.Codec<RetrieveStopwordsSetsInput>;

// Output Schema
export interface RetrieveStopwordsSetsOutput {
  stopwords: { id: string; stopwords: string[]; locale?: string }[];
}
export const RetrieveStopwordsSetsOutput =
  /*@__PURE__*/ Schema.Struct({
    stopwords: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        stopwords: Schema.Array(Schema.String),
        locale: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<RetrieveStopwordsSetsOutput>;

// The operation
/**
 * Retrieves all stopwords sets.
 *
 * Retrieve the details of all stopwords sets
 */
export const retrieveStopwordsSets = /*@__PURE__*/ API.make(() => ({
  inputSchema: RetrieveStopwordsSetsInput,
  outputSchema: RetrieveStopwordsSetsOutput,
}));
