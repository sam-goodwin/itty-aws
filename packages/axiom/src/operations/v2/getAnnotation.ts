import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, NotFound } from "../../errors.ts";

// Input Schema
export const GetAnnotationInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/v2/annotations/{id}" }));
export type GetAnnotationInput = typeof GetAnnotationInput.Type;

// Output Schema
export const GetAnnotationOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  datasets: Schema.Array(Schema.String),
  description: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.NullOr(Schema.String)),
  id: Schema.String,
  time: Schema.String,
  title: Schema.optional(Schema.String),
  type: Schema.String,
  url: Schema.optional(Schema.String),
});
export type GetAnnotationOutput = typeof GetAnnotationOutput.Type;

// The operation
/**
 * Get annotation by ID
 *
 * @param id - Unique ID of the annotation
 */
export const getAnnotation = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetAnnotationInput,
  outputSchema: GetAnnotationOutput,
  errors: [BadRequest, NotFound] as const,
}));
