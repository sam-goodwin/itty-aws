import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const UpdateContactPropertyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    fallback_value: Schema.optional(Schema.Unknown),
  }).pipe(T.Http({ method: "PATCH", path: "/contact-properties/{id}" }));
export type UpdateContactPropertyInput = typeof UpdateContactPropertyInput.Type;

// Output Schema
export const UpdateContactPropertyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    object: Schema.optional(Schema.String),
  });
export type UpdateContactPropertyOutput =
  typeof UpdateContactPropertyOutput.Type;

// The operation
/**
 * Update an existing contact property
 *
 * @param id - The Contact Property ID.
 */
export const updateContactProperty = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UpdateContactPropertyInput,
    outputSchema: UpdateContactPropertyOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }),
);
