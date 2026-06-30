import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface DeleteStopwordsSetInput {
  setId: string;
}
export const DeleteStopwordsSetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    setId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/stopwords/{setId}" }),
  ) as unknown as Schema.Codec<DeleteStopwordsSetInput>;

// Output Schema
export interface DeleteStopwordsSetOutput {
  id: string;
}
export const DeleteStopwordsSetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
  }) as unknown as Schema.Codec<DeleteStopwordsSetOutput>;

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
