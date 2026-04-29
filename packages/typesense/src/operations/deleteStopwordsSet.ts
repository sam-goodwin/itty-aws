import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const DeleteStopwordsSetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    setId: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "DELETE", path: "/stopwords/{setId}" }));
export type DeleteStopwordsSetInput = typeof DeleteStopwordsSetInput.Type;

// Output Schema
export const DeleteStopwordsSetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
  });
export type DeleteStopwordsSetOutput = typeof DeleteStopwordsSetOutput.Type;

// The operation
/**
 * Delete a stopwords set.
 *
 * Permanently deletes a stopwords set, given it's name.
 *
 * @param setId - The ID of the stopwords set to delete.
 */
export const deleteStopwordsSet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteStopwordsSetInput,
  outputSchema: DeleteStopwordsSetOutput,
  errors: [NotFound] as const,
}));
