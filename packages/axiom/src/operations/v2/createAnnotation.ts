import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, UnprocessableEntity } from "../../errors";

// Input Schema
export const CreateAnnotationInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  datasets: Schema.Array(Schema.String),
  description: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
  time: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
  type: Schema.String,
  url: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "POST", path: "/v2/annotations" }));
export type CreateAnnotationInput = typeof CreateAnnotationInput.Type;

// Output Schema
export const CreateAnnotationOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
export type CreateAnnotationOutput = typeof CreateAnnotationOutput.Type;

// The operation
/**
 * Create annotation
 */
export const createAnnotation = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateAnnotationInput,
  outputSchema: CreateAnnotationOutput,
  errors: [BadRequest, UnprocessableEntity] as const,
}));
