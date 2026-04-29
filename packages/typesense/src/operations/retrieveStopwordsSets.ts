import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const RetrieveStopwordsSetsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/stopwords" }),
  );
export type RetrieveStopwordsSetsInput = typeof RetrieveStopwordsSetsInput.Type;

// Output Schema
export const RetrieveStopwordsSetsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stopwords: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        stopwords: Schema.Array(Schema.String),
        locale: Schema.optional(Schema.String),
      }),
    ),
  });
export type RetrieveStopwordsSetsOutput =
  typeof RetrieveStopwordsSetsOutput.Type;

// The operation
/**
 * Retrieves all stopwords sets.
 *
 * Retrieve the details of all stopwords sets
 */
export const retrieveStopwordsSets = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RetrieveStopwordsSetsInput,
    outputSchema: RetrieveStopwordsSetsOutput,
  }),
);
