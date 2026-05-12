import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const CreateIsoInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  url: Schema.String,
  description: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "POST", path: "/iso" }));
export type CreateIsoInput = typeof CreateIsoInput.Type;

// Output Schema
export const CreateIsoOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  iso: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      date_created: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
      filename: Schema.optional(Schema.String),
      size: Schema.optional(Schema.Number),
      md5sum: Schema.optional(Schema.String),
      sha512sum: Schema.optional(Schema.String),
      status: Schema.optional(Schema.String),
    }),
  ),
});
export type CreateIsoOutput = typeof CreateIsoOutput.Type;

// The operation
/**
 * Create ISO
 *
 * Create a new ISO in your account from `url`.
 */
export const createIso = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateIsoInput,
  outputSchema: CreateIsoOutput,
  errors: [BadRequest, NotFound] as const,
}));
