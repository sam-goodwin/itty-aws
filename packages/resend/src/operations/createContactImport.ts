import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CreateContactImportInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    file: Schema.String,
    column_map: Schema.optional(Schema.String),
    on_conflict: Schema.optional(Schema.Literals(["upsert", "skip"])),
    segments: Schema.optional(Schema.String),
    topics: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/contacts/imports",
      contentType: "multipart",
    }),
  );
export type CreateContactImportInput = typeof CreateContactImportInput.Type;

// Output Schema
export const CreateContactImportOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  });
export type CreateContactImportOutput = typeof CreateContactImportOutput.Type;

// The operation
/**
 * Create a contact import
 */
export const createContactImport = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateContactImportInput,
  outputSchema: CreateContactImportOutput,
  errors: [UnprocessableEntity] as const,
}));
