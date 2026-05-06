import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const EventTypeslistInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.optional(Schema.String).pipe(T.QueryParam()),
  customer_id: Schema.optional(Schema.String).pipe(T.QueryParam()),
  external_customer_id: Schema.optional(Schema.String).pipe(T.QueryParam()),
  query: Schema.optional(Schema.String).pipe(T.QueryParam()),
  root_events: Schema.optional(Schema.Boolean).pipe(T.QueryParam()),
  parent_id: Schema.optional(Schema.String).pipe(T.QueryParam()),
  source: Schema.optional(Schema.String).pipe(T.QueryParam()),
  page: Schema.optional(Schema.Number).pipe(T.QueryParam()),
  limit: Schema.optional(Schema.Number).pipe(T.QueryParam()),
  sorting: Schema.optional(Schema.String).pipe(T.QueryParam()),
}).pipe(T.Http({ method: "GET", path: "/v1/event-types/" }));
export type EventTypeslistInput = typeof EventTypeslistInput.Type;

// Output Schema
export const EventTypeslistOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  items: Schema.Array(
    Schema.Struct({
      id: Schema.optional(Schema.NullOr(Schema.String)),
      created_at: Schema.optional(Schema.NullOr(Schema.String)),
      modified_at: Schema.optional(Schema.NullOr(Schema.String)),
      name: Schema.String,
      label: Schema.String,
      label_property_selector: Schema.optional(Schema.NullOr(Schema.String)),
      organization_id: Schema.String,
      source: Schema.Literals(["system", "user"]),
      occurrences: Schema.Number,
      first_seen: Schema.String,
      last_seen: Schema.String,
    }),
  ),
  pagination: Schema.Struct({
    total_count: Schema.Number,
    max_page: Schema.Number,
  }),
});
export type EventTypeslistOutput = typeof EventTypeslistOutput.Type;

// The operation
/**
 * List Event Types
 *
 * List event types with aggregated statistics.
 * **Scopes**: `events:read` `events:write`
 *
 * @param organization_id - Filter by organization ID.
 * @param customer_id - Filter by customer ID.
 * @param external_customer_id - Filter by external customer ID.
 * @param query - Query to filter event types by name or label.
 * @param root_events - When true, only return event types with root events (parent_id IS NULL).
 * @param parent_id - Filter by specific parent event ID.
 * @param source - Filter by event source (system or user).
 * @param page - Page number, defaults to 1.
 * @param limit - Size of a page, defaults to 10. Maximum is 100.
 * @param sorting - Sorting criterion. Several criteria can be used simultaneously and will be applied in order. Add a minus sign `-` before the criteria name to sort by descending order.
 */
export const eventTypeslist = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EventTypeslistInput,
  outputSchema: EventTypeslistOutput,
  errors: [UnprocessableEntity] as const,
}));
