import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, NotFound, UnprocessableEntity } from "../../errors";

// Input Schema
export const UpdateAnnotationInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  datasets: Schema.optional(Schema.Array(Schema.String)),
  description: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
  time: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "PUT", path: "/v2/annotations/{id}" }));
export type UpdateAnnotationInput = typeof UpdateAnnotationInput.Type;

// Output Schema
export const UpdateAnnotationOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    datasets: Schema.Array(Schema.String),
    description: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.NullOr(Schema.String)),
    id: Schema.String,
    time: Schema.String,
    title: Schema.optional(Schema.String),
    type: Schema.String,
    url: Schema.optional(Schema.String),
  },
);
export type UpdateAnnotationOutput = typeof UpdateAnnotationOutput.Type;

// The operation
/**
 * Update annotation
 *
 * @param id - Unique ID of the annotation
 */
export const updateAnnotation = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateAnnotationInput,
  outputSchema: UpdateAnnotationOutput,
  errors: [BadRequest, NotFound, UnprocessableEntity] as const,
}));
