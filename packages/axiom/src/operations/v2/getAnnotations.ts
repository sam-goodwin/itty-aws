import * as Schema from "effect/Schema";
import { AnnotationSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const GetAnnotationsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  datasets: Schema.optional(Schema.String),
  start: Schema.optional(Schema.String),
  end: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/v2/annotations" }));
export type GetAnnotationsInput = typeof GetAnnotationsInput.Type;

// Output Schema
export const GetAnnotationsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.suspend(() => AnnotationSchema),
);
export type GetAnnotationsOutput = typeof GetAnnotationsOutput.Type;

// The operation
/**
 * Get annotations
 *
 * @param datasets - Optional: Filter for dataset names.
 * @param start - Optional: Filter for events after this date. Use RFC3339 time format.
 * @param end - Optional: Filter for events before this date. Use RFC3339 time format.
 */
export const getAnnotations = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetAnnotationsInput,
  outputSchema: GetAnnotationsOutput,
}));
