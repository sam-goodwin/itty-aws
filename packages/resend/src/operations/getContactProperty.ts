import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const GetContactPropertyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/contact-properties/{id}" }));
export type GetContactPropertyInput = typeof GetContactPropertyInput.Type;

// Output Schema
export const GetContactPropertyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    key: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    fallback_value: Schema.optional(Schema.Unknown),
    created_at: Schema.optional(Schema.String),
  });
export type GetContactPropertyOutput = typeof GetContactPropertyOutput.Type;

// The operation
/**
 * Retrieve a single contact property
 *
 * @param id - The Contact Property ID.
 */
export const getContactProperty = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetContactPropertyInput,
  outputSchema: GetContactPropertyOutput,
  errors: [NotFound] as const,
}));
