import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const EventsingestInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  events: Schema.Array(
    Schema.Struct({
      timestamp: Schema.optional(Schema.String),
      name: Schema.String,
      organization_id: Schema.optional(Schema.NullOr(Schema.String)),
      external_id: Schema.optional(Schema.NullOr(Schema.String)),
      parent_id: Schema.optional(Schema.NullOr(Schema.String)),
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      customer_id: Schema.optional(Schema.String),
      external_customer_id: Schema.optional(Schema.String),
      member_id: Schema.optional(Schema.NullOr(Schema.String)),
      external_member_id: Schema.optional(Schema.NullOr(Schema.String)),
    }),
  ),
}).pipe(T.Http({ method: "POST", path: "/v1/events/ingest" }));
export type EventsingestInput = typeof EventsingestInput.Type;

// Output Schema
export const EventsingestOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  inserted: Schema.Number,
  duplicates: Schema.optional(Schema.Number),
});
export type EventsingestOutput = typeof EventsingestOutput.Type;

// The operation
/**
 * Ingest Events
 *
 * Ingest batch of events.
 * **Scopes**: `events:write`
 */
export const eventsingest = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EventsingestInput,
  outputSchema: EventsingestOutput,
  errors: [UnprocessableEntity] as const,
}));
