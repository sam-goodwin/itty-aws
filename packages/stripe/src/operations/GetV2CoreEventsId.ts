import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetV2CoreEventsIdInput {
  id: string;
}
export const GetV2CoreEventsIdInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({ method: "GET", path: "/v2/core/events/{id}" }),
) as unknown as Schema.Codec<GetV2CoreEventsIdInput>;

// Output Schema
export interface GetV2CoreEventsIdOutput {
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
}
export const GetV2CoreEventsIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<GetV2CoreEventsIdOutput>;

// The operation
/**
 * Retrieve an Event
 *
 * Retrieves the details of an event if it was created in the last 30 days. Supply the unique
 * identifier of the event, which might have been delivered to your event destination.
 *
 * @param id - Unique identifier for the object.
 */
export const GetV2CoreEventsId = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetV2CoreEventsIdInput,
  outputSchema: GetV2CoreEventsIdOutput,
}));
