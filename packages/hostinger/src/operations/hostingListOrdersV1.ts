import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const HostingListOrdersV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    page: Schema.optional(Schema.Number),
    per_page: Schema.optional(Schema.Number),
    statuses: Schema.optional(Schema.String),
    order_ids: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/api/hosting/v1/orders" }));
export type HostingListOrdersV1Input = typeof HostingListOrdersV1Input.Type;

// Output Schema
export const HostingListOrdersV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          client_id: Schema.optional(Schema.Number),
          subscription_id: Schema.optional(Schema.NullOr(Schema.String)),
          created_at: Schema.optional(Schema.String),
          plan: Schema.optional(
            Schema.Struct({
              name: Schema.optional(Schema.String),
            }),
          ),
          status: Schema.optional(Schema.String),
        }),
      ),
    ),
    meta: Schema.optional(
      Schema.Struct({
        current_page: Schema.optional(Schema.Number),
        per_page: Schema.optional(Schema.Number),
        total: Schema.optional(Schema.Number),
      }),
    ),
  });
export type HostingListOrdersV1Output = typeof HostingListOrdersV1Output.Type;

// The operation
/**
 * List orders
 *
 * Retrieve a paginated list of orders accessible to the authenticated client.
 * This endpoint returns orders of your hosting accounts as well as orders
 * of other client hosting accounts that have shared access with you.
 * Use the available query parameters to filter results by order statuses
 * or specific order IDs for more targeted results.
 *
 * @param page - Page number
 * @param per_page - Number of items per page
 * @param statuses - Filter by order statuses
 * @param order_ids - Filter by specific order IDs
 */
export const hostingListOrdersV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HostingListOrdersV1Input,
  outputSchema: HostingListOrdersV1Output,
}));
