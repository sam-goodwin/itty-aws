import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const CreateContactSegmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contact_id: Schema.String.pipe(T.PathParam()),
    segment_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/contacts/{contact_id}/segments/{segment_id}",
    }),
  );
export type CreateContactSegmentInput = typeof CreateContactSegmentInput.Type;

// Output Schema
export const CreateContactSegmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    contact_id: Schema.optional(Schema.String),
    segment_id: Schema.optional(Schema.String),
  });
export type CreateContactSegmentOutput = typeof CreateContactSegmentOutput.Type;

// The operation
/**
 * Add a contact to a segment
 *
 * @param contact_id - The Contact ID or email address.
 * @param segment_id - The Segment ID.
 */
export const createContactSegment = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateContactSegmentInput,
    outputSchema: CreateContactSegmentOutput,
    errors: [NotFound] as const,
  }),
);
