import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ReachGetSegmentDetailsV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    segmentUuid: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/reach/v1/segmentation/segments/{segmentUuid}",
    }),
  );
export type ReachGetSegmentDetailsV1Input =
  typeof ReachGetSegmentDetailsV1Input.Type;

// Output Schema
export const ReachGetSegmentDetailsV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uuid: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    query: Schema.optional(Schema.Array(Schema.Unknown)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type ReachGetSegmentDetailsV1Output =
  typeof ReachGetSegmentDetailsV1Output.Type;

// The operation
/**
 * Get segment details
 *
 * Get details of a specific segment.
 * This endpoint retrieves information about a single segment identified by UUID.
 * Segments are used to organize and group contacts based on specific criteria.
 *
 * @param segmentUuid - Segment uuid parameter
 */
export const reachGetSegmentDetailsV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReachGetSegmentDetailsV1Input,
    outputSchema: ReachGetSegmentDetailsV1Output,
  }),
);
