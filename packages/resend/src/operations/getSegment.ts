import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const GetSegmentInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/segments/{id}" }));
export type GetSegmentInput = typeof GetSegmentInput.Type;

// Output Schema
export const GetSegmentOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  object: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  audience_id: Schema.optional(Schema.String),
  filter: Schema.optional(Schema.Unknown),
  created_at: Schema.optional(Schema.String),
});
export type GetSegmentOutput = typeof GetSegmentOutput.Type;

// The operation
/**
 * Retrieve a single segment
 *
 * @param id - The Segment ID.
 */
export const getSegment = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetSegmentInput,
  outputSchema: GetSegmentOutput,
  errors: [NotFound] as const,
}));
