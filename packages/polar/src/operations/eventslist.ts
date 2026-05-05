import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const EventslistInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  filter: Schema.optional(Schema.String),
  start_timestamp: Schema.optional(Schema.String),
  end_timestamp: Schema.optional(Schema.String),
  organization_id: Schema.optional(Schema.String),
  customer_id: Schema.optional(Schema.String),
  external_customer_id: Schema.optional(Schema.String),
  meter_id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  source: Schema.optional(Schema.String),
  query: Schema.optional(Schema.String),
  parent_id: Schema.optional(Schema.String),
  depth: Schema.optional(Schema.String),
  page: Schema.optional(Schema.Number),
  limit: Schema.optional(Schema.Number),
  sorting: Schema.optional(Schema.String),
  metadata: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/v1/events/" }));
export type EventslistInput = typeof EventslistInput.Type;

// Output Schema
export const EventslistOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  items: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      timestamp: Schema.String,
      organization_id: Schema.String,
      customer_id: Schema.NullOr(Schema.String),
      customer: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
      external_customer_id: Schema.NullOr(Schema.String),
      member_id: Schema.optional(Schema.NullOr(Schema.String)),
      external_member_id: Schema.optional(Schema.NullOr(Schema.String)),
      child_count: Schema.optional(Schema.Number),
      parent_id: Schema.optional(Schema.NullOr(Schema.String)),
      label: Schema.String,
      source: Schema.Literals(["system", "user"]),
      name: Schema.String,
      metadata: Schema.Record(Schema.String, Schema.Unknown),
    }),
  ),
  pagination: Schema.Struct({
    total_count: Schema.Number,
    max_page: Schema.Number,
  }),
});
export type EventslistOutput = typeof EventslistOutput.Type;

// The operation
/**
 * List Events
 *
 * List events.
 * **Scopes**: `events:read` `events:write`
 *
 * @param filter - Filter events following filter clauses. JSON string following the same schema a meter filter clause.
 * @param start_timestamp - Filter events after this timestamp.
 * @param end_timestamp - Filter events before this timestamp.
 * @param organization_id - Filter by organization ID.
 * @param customer_id - Filter by customer ID.
 * @param external_customer_id - Filter by external customer ID.
 * @param meter_id - Filter by a meter filter clause.
 * @param name - Filter by event name.
 * @param source - Filter by event source.
 * @param query - Query to filter events.
 * @param parent_id - When combined with depth, use this event as the anchor instead of root events.
 * @param depth - Fetch descendants up to this depth. When set: 0=root events only, 1=roots+children, etc. Max 5. When not set, returns all events.
 * @param page - Page number, defaults to 1.
 * @param limit - Size of a page, defaults to 10. Maximum is 100.
 * @param sorting - Sorting criterion. Several criteria can be used simultaneously and will be applied in order. Add a minus sign `-` before the criteria name to sort by descending order.
 * @param metadata - Filter by metadata key-value pairs. It uses the `deepObject` style, e.g. `?metadata[key]=value`.
 */
export const eventslist = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EventslistInput,
  outputSchema: EventslistOutput,
  errors: [UnprocessableEntity] as const,
}));
