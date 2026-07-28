import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface EventslistInput {
  filter?: string | null;
  start_timestamp?: string | null;
  end_timestamp?: string | null;
  organization_id?: string | ReadonlyArray<string> | null;
  customer_id?: string | ReadonlyArray<string> | null;
  external_customer_id?: string | ReadonlyArray<string> | null;
  meter_id?: string | null;
  name?: string | ReadonlyArray<string> | null;
  source?: "system" | "user" | ReadonlyArray<"system" | "user"> | null;
  query?: string | null;
  parent_id?: string | null;
  depth?: number | null;
  page?: number;
  limit?: number;
  sorting?: ReadonlyArray<"timestamp" | "-timestamp"> | null;
  metadata?: Record<
    string,
    | string
    | number
    | boolean
    | ReadonlyArray<string>
    | ReadonlyArray<number>
    | ReadonlyArray<boolean>
  > | null;
}
export const EventslistInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  filter: Schema.optional(Schema.NullOr(Schema.String)),
  start_timestamp: Schema.optional(Schema.NullOr(Schema.String)),
  end_timestamp: Schema.optional(Schema.NullOr(Schema.String)),
  organization_id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  customer_id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  external_customer_id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  meter_id: Schema.optional(Schema.NullOr(Schema.String)),
  name: Schema.optional(
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
  parent_id: Schema.optional(Schema.NullOr(Schema.String)),
  depth: Schema.optional(Schema.NullOr(Schema.Number)),
  page: Schema.optional(Schema.Number),
  limit: Schema.optional(Schema.Number),
  sorting: Schema.optional(
    Schema.NullOr(Schema.Array(Schema.Literals(["timestamp", "-timestamp"]))),
  ),
  metadata: Schema.optional(
    Schema.NullOr(
      Schema.Record(
        Schema.String,
        Schema.Union([
          Schema.String,
          Schema.Number,
          Schema.Boolean,
          Schema.Array(Schema.String),
          Schema.Array(Schema.Number),
          Schema.Array(Schema.Boolean),
        ]),
      ),
    ),
  ),
}).pipe(
  T.Http({ method: "GET", path: "/v1/events/" }),
) as unknown as Schema.Codec<EventslistInput>;

// Output Schema
export type EventslistOutput =
  | {
      items: ReadonlyArray<
        | unknown
        | {
            id: string;
            timestamp: string;
            organization_id: string;
            customer_id: string | null;
            customer:
              | {
                  id: string;
                  created_at: string;
                  modified_at: string | null;
                  metadata: Record<string, string | number | boolean>;
                  external_id?: string | null;
                  email: string;
                  email_verified: boolean;
                  type: string;
                  name: string | null;
                  billing_name: string | null;
                  billing_address: unknown;
                  tax_id: unknown;
                  locale?: string | null;
                  organization_id: string;
                  default_payment_method_id?: string | null;
                  deleted_at: string | null;
                  avatar_url: string | null;
                }
              | {
                  id: string;
                  created_at: string;
                  modified_at: string | null;
                  metadata: Record<string, string | number | boolean>;
                  external_id?: string | null;
                  email?: string | null;
                  email_verified: boolean;
                  type: string;
                  name: string | null;
                  billing_name: string | null;
                  billing_address: unknown;
                  tax_id: unknown;
                  locale?: string | null;
                  organization_id: string;
                  default_payment_method_id?: string | null;
                  deleted_at: string | null;
                  avatar_url: string | null;
                }
              | null;
            external_customer_id: string | null;
            member_id?: string | null;
            external_member_id?: string | null;
            child_count?: number;
            parent_id?: string | null;
            label: string;
            name: string;
            source: string;
            metadata: {
              _cost?: { amount: string; currency: string };
              _llm?: {
                vendor: string;
                model: string;
                prompt?: string | null;
                response?: string | null;
                input_tokens: number;
                cached_input_tokens?: number;
                output_tokens: number;
                total_tokens: number;
              };
            };
          }
      >;
      pagination: { total_count: number; max_page: number };
    }
  | {
      items: ReadonlyArray<
        | unknown
        | {
            id: string;
            timestamp: string;
            organization_id: string;
            customer_id: string | null;
            customer:
              | {
                  id: string;
                  created_at: string;
                  modified_at: string | null;
                  metadata: Record<string, string | number | boolean>;
                  external_id?: string | null;
                  email: string;
                  email_verified: boolean;
                  type: string;
                  name: string | null;
                  billing_name: string | null;
                  billing_address: unknown;
                  tax_id: unknown;
                  locale?: string | null;
                  organization_id: string;
                  default_payment_method_id?: string | null;
                  deleted_at: string | null;
                  avatar_url: string | null;
                }
              | {
                  id: string;
                  created_at: string;
                  modified_at: string | null;
                  metadata: Record<string, string | number | boolean>;
                  external_id?: string | null;
                  email?: string | null;
                  email_verified: boolean;
                  type: string;
                  name: string | null;
                  billing_name: string | null;
                  billing_address: unknown;
                  tax_id: unknown;
                  locale?: string | null;
                  organization_id: string;
                  default_payment_method_id?: string | null;
                  deleted_at: string | null;
                  avatar_url: string | null;
                }
              | null;
            external_customer_id: string | null;
            member_id?: string | null;
            external_member_id?: string | null;
            child_count?: number;
            parent_id?: string | null;
            label: string;
            name: string;
            source: string;
            metadata: {
              _cost?: { amount: string; currency: string };
              _llm?: {
                vendor: string;
                model: string;
                prompt?: string | null;
                response?: string | null;
                input_tokens: number;
                cached_input_tokens?: number;
                output_tokens: number;
                total_tokens: number;
              };
            };
          }
      >;
      pagination: { has_next_page: boolean };
    };
export const EventslistOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown as unknown as Schema.Codec<EventslistOutput>;

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
}));
