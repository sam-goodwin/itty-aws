import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface EventslistNamesInput {
  organization_id?: string | ReadonlyArray<string> | null;
  customer_id?: string | ReadonlyArray<string> | null;
  external_customer_id?: string | ReadonlyArray<string> | null;
  source?: "system" | "user" | ReadonlyArray<"system" | "user"> | null;
  query?: string | null;
  page?: number;
  limit?: number;
  sorting?: ReadonlyArray<
    | "name"
    | "-name"
    | "occurrences"
    | "-occurrences"
    | "first_seen"
    | "-first_seen"
    | "last_seen"
    | "-last_seen"
  > | null;
}
export const EventslistNamesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  customer_id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  external_customer_id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  source: Schema.optional(
    Schema.NullOr(
      Schema.Union([
        Schema.Literals(["system", "user"]),
        Schema.Array(Schema.Literals(["system", "user"])),
      ]),
    ),
  ),
  query: Schema.optional(Schema.NullOr(Schema.String)),
  page: Schema.optional(Schema.Number),
  limit: Schema.optional(Schema.Number),
  sorting: Schema.optional(
    Schema.NullOr(
      Schema.Array(
        Schema.Literals([
          "name",
          "-name",
          "occurrences",
          "-occurrences",
          "first_seen",
          "-first_seen",
          "last_seen",
          "-last_seen",
        ]),
      ),
    ),
  ),
}).pipe(
  T.Http({ method: "GET", path: "/v1/events/names" }),
) as unknown as Schema.Codec<EventslistNamesInput>;

// Output Schema
export interface EventslistNamesOutput {
  items: ReadonlyArray<{
    name: string;
    label: string;
    source: "system" | "user";
    occurrences: number;
    first_seen: string;
    last_seen: string;
  }>;
  pagination: { total_count: number; max_page: number };
}
export const EventslistNamesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  items: Schema.Array(
    Schema.Struct({
      name: Schema.String,
      label: Schema.String,
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
}) as unknown as Schema.Codec<EventslistNamesOutput>;

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
}));
