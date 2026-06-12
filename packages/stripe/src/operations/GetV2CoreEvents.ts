import * as Schema from "effect/Schema";
import { v2_core_eventSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetV2CoreEventsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  created: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  object_id: Schema.optional(Schema.String),
  types: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/v2/core/events" }));
export type GetV2CoreEventsInput = typeof GetV2CoreEventsInput.Type;

// Output Schema
export const GetV2CoreEventsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  data: Schema.Array(Schema.suspend(() => v2_core_eventSchema)),
  next_page_url: Schema.NullOr(Schema.String),
  previous_page_url: Schema.NullOr(Schema.String),
});
export type GetV2CoreEventsOutput = typeof GetV2CoreEventsOutput.Type;

// The operation
/**
 * List Events
 *
 * List events, going back up to 30 days.
 *
 * @param created - Set of filters to query events within a range of `created` timestamps.
 * @param limit - The page size.
 * @param object_id - Primary object ID used to retrieve related events.
 * @param types - An array of up to 20 strings containing specific event names.
 */
export const GetV2CoreEvents = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetV2CoreEventsInput,
  outputSchema: GetV2CoreEventsOutput,
}));
