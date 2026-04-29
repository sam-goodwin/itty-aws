import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const RetrieveStopwordsSetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    setId: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/stopwords/{setId}" }));
export type RetrieveStopwordsSetInput = typeof RetrieveStopwordsSetInput.Type;

// Output Schema
export const RetrieveStopwordsSetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stopwords: Schema.Struct({
      id: Schema.String,
      stopwords: Schema.Array(Schema.String),
      locale: Schema.optional(Schema.String),
    }),
  });
export type RetrieveStopwordsSetOutput = typeof RetrieveStopwordsSetOutput.Type;

// The operation
/**
 * Retrieves a stopwords set.
 *
 * Retrieve the details of a stopwords set, given it's name.
 *
 * @param setId - The ID of the stopwords set to retrieve.
 */
export const retrieveStopwordsSet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RetrieveStopwordsSetInput,
    outputSchema: RetrieveStopwordsSetOutput,
    errors: [NotFound] as const,
  }),
);
