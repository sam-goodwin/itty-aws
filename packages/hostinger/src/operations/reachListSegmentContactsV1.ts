import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ReachListSegmentContactsV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    segmentUuid: Schema.String.pipe(T.PathParam()),
    page: Schema.optional(Schema.Number),
    per_page: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/reach/v1/segmentation/segments/{segmentUuid}/contacts",
    }),
  );
export type ReachListSegmentContactsV1Input =
  typeof ReachListSegmentContactsV1Input.Type;

// Output Schema
export const ReachListSegmentContactsV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.optional(
      Schema.Array(
        Schema.Struct({
          uuid: Schema.optional(Schema.String),
          name: Schema.optional(Schema.NullOr(Schema.String)),
          surname: Schema.optional(Schema.NullOr(Schema.String)),
          email: Schema.optional(Schema.String),
          subscription_status: Schema.optional(
            Schema.Literals(["subscribed", "unsubscribed"]),
          ),
          subscribed_at: Schema.optional(Schema.String),
          source: Schema.optional(
            Schema.NullOr(Schema.Literals(["sync", "import", "manual"])),
          ),
          note: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
    ),
    meta: Schema.optional(
      Schema.Struct({
        current_page: Schema.optional(Schema.Number),
        per_page: Schema.optional(Schema.Number),
        total: Schema.optional(Schema.Number),
      }),
    ),
  });
export type ReachListSegmentContactsV1Output =
  typeof ReachListSegmentContactsV1Output.Type;

// The operation
/**
 * List segment contacts
 *
 * Retrieve contacts associated with a specific segment.
 * This endpoint allows you to fetch and filter contacts that belong to a particular segment,
 * identified by its UUID.
 *
 * @param segmentUuid - Segment uuid parameter
 * @param page - Page number
 * @param per_page - Number of items per page
 */
export const reachListSegmentContactsV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReachListSegmentContactsV1Input,
    outputSchema: ReachListSegmentContactsV1Output,
  }),
);
