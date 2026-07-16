import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, NotFound } from "../../errors.ts";

// Input Schema
export interface GetAnnotationInput {
  id: string;
}
export const GetAnnotationInput = /*@__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/v2/annotations/{id}" }),
) as unknown as Schema.Codec<GetAnnotationInput>;

// Output Schema
export interface GetAnnotationOutput {
  datasets: ReadonlyArray<string>;
  description?: string;
  endTime?: string | null;
  id: string;
  time: string;
  title?: string;
  type: string;
  url?: string;
}
export const GetAnnotationOutput = /*@__PURE__*/ Schema.Struct({
  datasets: Schema.Array(Schema.String),
  description: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.NullOr(Schema.String)),
  id: Schema.String,
  time: Schema.String,
  title: Schema.optional(Schema.String),
  type: Schema.String,
  url: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<GetAnnotationOutput>;

// The operation
/**
 * Get annotation by ID
 *
 * @param id - Unique ID of the annotation
 */
export const getAnnotation = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetAnnotationInput,
  outputSchema: GetAnnotationOutput,
  errors: [BadRequest, NotFound] as const,
}));
