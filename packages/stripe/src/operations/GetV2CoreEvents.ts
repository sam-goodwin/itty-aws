import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetV2CoreEventsInput {
  created?: string;
  limit?: number;
  object_id?: string;
  types?: string;
}
export const GetV2CoreEventsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  created: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  object_id: Schema.optional(Schema.String),
  types: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "GET", path: "/v2/core/events" }),
) as unknown as Schema.Codec<GetV2CoreEventsInput>;

// Output Schema
export interface GetV2CoreEventsOutput {
  data: {
    changes?: unknown;
    context?: string;
    created: string;
    id: string;
    livemode: boolean;
    object: "v2.core.event";
    reason?: {
      request?: { id: string; idempotency_key: string };
      type: "request";
    };
    type: string;
  }[];
  next_page_url: string | null;
  previous_page_url: string | null;
}
export const GetV2CoreEventsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  data: Schema.Array(
    Schema.Struct({
      changes: Schema.optional(Schema.Unknown),
      context: Schema.optional(Schema.String),
      created: Schema.String,
      id: Schema.String,
      livemode: Schema.Boolean,
      object: Schema.Literals(["v2.core.event"]),
      reason: Schema.optional(
        Schema.Struct({
          request: Schema.optional(
            Schema.Struct({
              id: Schema.String,
              idempotency_key: Schema.String,
            }),
          ),
          type: Schema.Literals(["request"]),
        }),
      ),
      type: Schema.String,
    }),
  ),
  next_page_url: Schema.NullOr(Schema.String),
  previous_page_url: Schema.NullOr(Schema.String),
}) as unknown as Schema.Codec<GetV2CoreEventsOutput>;

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
