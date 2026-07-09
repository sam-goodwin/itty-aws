import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const GetContactImportInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/contacts/imports/{id}" }));
export type GetContactImportInput = typeof GetContactImportInput.Type;

// Output Schema
export const GetContactImportOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals(["queued", "in_progress", "completed", "failed"]),
    ),
    created_at: Schema.optional(Schema.String),
    completed_at: Schema.optional(Schema.NullOr(Schema.String)),
    counts: Schema.optional(
      Schema.Struct({
        total: Schema.optional(Schema.Number),
        created: Schema.optional(Schema.Number),
        updated: Schema.optional(Schema.Number),
        skipped: Schema.optional(Schema.Number),
        failed: Schema.optional(Schema.Number),
      }),
    ),
  },
);
export type GetContactImportOutput = typeof GetContactImportOutput.Type;

// The operation
/**
 * Retrieve a single contact import
 *
 * @param id - The Contact Import ID.
 */
export const getContactImport = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetContactImportInput,
  outputSchema: GetContactImportOutput,
  errors: [NotFound] as const,
}));
