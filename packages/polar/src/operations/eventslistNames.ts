import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const EventslistNamesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.optional(Schema.String),
  customer_id: Schema.optional(Schema.String),
  external_customer_id: Schema.optional(Schema.String),
  source: Schema.optional(Schema.String),
  query: Schema.optional(Schema.String),
  page: Schema.optional(Schema.Number),
  limit: Schema.optional(Schema.Number),
  sorting: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/v1/events/names" }));
export type EventslistNamesInput = typeof EventslistNamesInput.Type;

// Output Schema
export const EventslistNamesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  items: Schema.Array(
    Schema.Struct({
      name: Schema.String,
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
export type EventslistNamesOutput = typeof EventslistNamesOutput.Type;

// The operation
/**
 * List Event Names
 *
 * List event names.
 * **Scopes**: `events:read` `events:write`
 *
 * @param organization_id - Filter by organization ID.
 * @param customer_id - Filter by customer ID.
 * @param external_customer_id - Filter by external customer ID.
 * @param source - Filter by event source.
 * @param query - Query to filter event names.
 * @param page - Page number, defaults to 1.
 * @param limit - Size of a page, defaults to 10. Maximum is 100.
 * @param sorting - Sorting criterion. Several criteria can be used simultaneously and will be applied in order. Add a minus sign `-` before the criteria name to sort by descending order.
 */
export const eventslistNames = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EventslistNamesInput,
  outputSchema: EventslistNamesOutput,
  errors: [UnprocessableEntity] as const,
}));
