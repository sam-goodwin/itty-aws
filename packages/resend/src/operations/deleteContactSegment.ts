import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const DeleteContactSegmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contact_id: Schema.String.pipe(T.PathParam()),
    segment_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/contacts/{contact_id}/segments/{segment_id}",
    }),
  );
export type DeleteContactSegmentInput = typeof DeleteContactSegmentInput.Type;

// Output Schema
export const DeleteContactSegmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    contact_id: Schema.optional(Schema.String),
    segment_id: Schema.optional(Schema.String),
    deleted: Schema.optional(Schema.Boolean),
  });
export type DeleteContactSegmentOutput = typeof DeleteContactSegmentOutput.Type;

// The operation
/**
 * Remove a contact from a segment
 *
 * @param contact_id - The Contact ID or email address.
 * @param segment_id - The Segment ID.
 */
export const deleteContactSegment = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteContactSegmentInput,
    outputSchema: DeleteContactSegmentOutput,
    errors: [NotFound] as const,
  }),
);
