import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CreateSegmentInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  audience_id: Schema.optional(Schema.String),
  filter: Schema.optional(Schema.Unknown),
}).pipe(T.Http({ method: "POST", path: "/segments" }));
export type CreateSegmentInput = typeof CreateSegmentInput.Type;

// Output Schema
export const CreateSegmentOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  object: Schema.optional(Schema.String),
});
export type CreateSegmentOutput = typeof CreateSegmentOutput.Type;

// The operation
/**
 * Create a new segment
 */
export const createSegment = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateSegmentInput,
  outputSchema: CreateSegmentOutput,
  errors: [UnprocessableEntity] as const,
}));
