import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ReachListSegmentsV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/reach/v1/segmentation/segments" }),
  );
export type ReachListSegmentsV1Input = typeof ReachListSegmentsV1Input.Type;

// Output Schema
export const ReachListSegmentsV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      uuid: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
      created_at: Schema.optional(Schema.String),
      updated_at: Schema.optional(Schema.String),
    }),
  );
export type ReachListSegmentsV1Output = typeof ReachListSegmentsV1Output.Type;

// The operation
/**
 * List segments
 *
 * Get a list of all contact segments.
 * This endpoint returns a list of contact segments that can be used to organize contacts.
 */
export const reachListSegmentsV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ReachListSegmentsV1Input,
  outputSchema: ReachListSegmentsV1Output,
}));
