import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const DeleteContactPropertyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "DELETE", path: "/contact-properties/{id}" }));
export type DeleteContactPropertyInput = typeof DeleteContactPropertyInput.Type;

// Output Schema
export const DeleteContactPropertyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    object: Schema.optional(Schema.String),
    deleted: Schema.optional(Schema.Boolean),
  });
export type DeleteContactPropertyOutput =
  typeof DeleteContactPropertyOutput.Type;

// The operation
/**
 * Remove an existing contact property
 *
 * @param id - The Contact Property ID.
 */
export const deleteContactProperty = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteContactPropertyInput,
    outputSchema: DeleteContactPropertyOutput,
    errors: [NotFound] as const,
  }),
);
