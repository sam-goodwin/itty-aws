import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, UnprocessableEntity } from "../../errors.ts";

// Input Schema
export interface CreateAnnotationInput {
  datasets: ReadonlyArray<string>;
  description?: string;
  endTime?: string;
  time?: string;
  title?: string;
  type: string;
  url?: string;
}
export const CreateAnnotationInput = /*@__PURE__*/ Schema.Struct({
  datasets: Schema.Array(Schema.String),
  description: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
  time: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
  type: Schema.String,
  url: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "POST", path: "/v2/annotations" }),
) as unknown as Schema.Codec<CreateAnnotationInput>;

// Output Schema
export interface CreateAnnotationOutput {
  datasets: ReadonlyArray<string>;
  description?: string;
  endTime?: string | null;
  id: string;
  time: string;
  title?: string;
  type: string;
  url?: string;
}
export const CreateAnnotationOutput = /*@__PURE__*/ Schema.Struct({
  datasets: Schema.Array(Schema.String),
  description: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.NullOr(Schema.String)),
  id: Schema.String,
  time: Schema.String,
  title: Schema.optional(Schema.String),
  type: Schema.String,
  url: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<CreateAnnotationOutput>;

// The operation
/**
 * Create annotation
 */
export const createAnnotation = /*@__PURE__*/ API.make(() => ({
  inputSchema: CreateAnnotationInput,
  outputSchema: CreateAnnotationOutput,
  errors: [BadRequest, UnprocessableEntity] as const,
}));
