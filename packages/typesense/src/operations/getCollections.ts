import * as Schema from "effect/Schema";
import { CollectionResponseSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetCollectionsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  getCollectionsParameters: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/collections" }));
export type GetCollectionsInput = typeof GetCollectionsInput.Type;

// Output Schema
export const GetCollectionsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.suspend(() => CollectionResponseSchema),
);
export type GetCollectionsOutput = typeof GetCollectionsOutput.Type;

// The operation
/**
 * List all collections
 *
 * Returns a summary of all your collections. The collections are returned sorted by creation date, with the most recent collections appearing first.
 */
export const getCollections = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetCollectionsInput,
  outputSchema: GetCollectionsOutput,
}));
