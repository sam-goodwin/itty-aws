import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetSchemaChangesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/operations/schema_changes" }));
export type GetSchemaChangesInput = typeof GetSchemaChangesInput.Type;

// Output Schema
export const GetSchemaChangesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
    collection: Schema.optional(Schema.String),
    validated_docs: Schema.optional(Schema.Number),
    altered_docs: Schema.optional(Schema.Number),
  }),
);
export type GetSchemaChangesOutput = typeof GetSchemaChangesOutput.Type;

// The operation
/**
 * Get the status of in-progress schema change operations
 *
 * Returns the status of any ongoing schema change operations. If no schema changes are in progress, returns an empty response.
 */
export const getSchemaChanges = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetSchemaChangesInput,
  outputSchema: GetSchemaChangesOutput,
}));
