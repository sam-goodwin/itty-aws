import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const DeleteSegmentInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/segments/{id}" }));
export type DeleteSegmentInput = typeof DeleteSegmentInput.Type;

// Output Schema
export const DeleteSegmentOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  object: Schema.optional(Schema.String),
  deleted: Schema.optional(Schema.Boolean),
});
export type DeleteSegmentOutput = typeof DeleteSegmentOutput.Type;

// The operation
/**
 * Remove an existing segment
 *
 * @param id - The Segment ID.
 */
export const deleteSegment = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteSegmentInput,
  outputSchema: DeleteSegmentOutput,
  errors: [NotFound] as const,
}));
