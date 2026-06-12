import * as Schema from "effect/Schema";
import { FieldSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const UpdateCollectionInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  collectionName: Schema.String.pipe(T.PathParam()),
  fields: Schema.Array(Schema.suspend(() => FieldSchema)),
  synonym_sets: Schema.optional(Schema.Array(Schema.String)),
  metadata: Schema.optional(Schema.Unknown),
}).pipe(T.Http({ method: "PATCH", path: "/collections/{collectionName}" }));
export type UpdateCollectionInput = typeof UpdateCollectionInput.Type;

// Output Schema
export const UpdateCollectionOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    fields: Schema.Array(Schema.suspend(() => FieldSchema)),
    synonym_sets: Schema.optional(Schema.Array(Schema.String)),
    metadata: Schema.optional(Schema.Unknown),
  },
);
export type UpdateCollectionOutput = typeof UpdateCollectionOutput.Type;

// The operation
/**
 * Update a collection
 *
 * Update a collection's schema to modify the fields and their types.
 *
 * @param collectionName - The name of the collection to update
 */
export const updateCollection = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateCollectionInput,
  outputSchema: UpdateCollectionOutput,
  errors: [BadRequest, NotFound] as const,
}));
