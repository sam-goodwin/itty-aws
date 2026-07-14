import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostV2CoreEventDestinationsIdPingInput {
  id: string;
}
export const PostV2CoreEventDestinationsIdPingInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "POST", path: "/v2/core/event_destinations/{id}/ping" }),
  ) as unknown as Schema.Codec<PostV2CoreEventDestinationsIdPingInput>;

// Output Schema
export interface PostV2CoreEventDestinationsIdPingOutput {
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
export const PostV2CoreEventDestinationsIdPingOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PostV2CoreEventDestinationsIdPingOutput>;

// The operation
/**
 * Ping an Event Destination
 *
 * Send a `ping` event to an event destination.
 *
 * @param id - Identifier for the event destination to ping.
 */
export const PostV2CoreEventDestinationsIdPing =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PostV2CoreEventDestinationsIdPingInput,
    outputSchema: PostV2CoreEventDestinationsIdPingOutput,
  }));
