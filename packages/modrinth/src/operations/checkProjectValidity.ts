import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const CheckProjectValidityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id_or_slug: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/project/{id_or_slug}/check" }));
export type CheckProjectValidityInput = typeof CheckProjectValidityInput.Type;

// Output Schema
export const CheckProjectValidityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
  });
export type CheckProjectValidityOutput = typeof CheckProjectValidityOutput.Type;

// The operation
/**
 * Check project slug/ID validity
 *
 * @param id_or_slug - The ID or slug of the project
 */
export const checkProjectValidity = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CheckProjectValidityInput,
    outputSchema: CheckProjectValidityOutput,
    errors: [NotFound] as const,
  }),
);
