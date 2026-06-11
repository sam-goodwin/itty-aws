import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const HostingListWebsitesV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    page: Schema.optional(Schema.Number),
    per_page: Schema.optional(Schema.Number),
    username: Schema.optional(Schema.String),
    order_id: Schema.optional(Schema.Number),
    is_enabled: Schema.optional(Schema.Boolean),
    domain: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/api/hosting/v1/websites" }));
export type HostingListWebsitesV1Input = typeof HostingListWebsitesV1Input.Type;

// Output Schema
export const HostingListWebsitesV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.optional(
      Schema.Array(
        Schema.Struct({
          domain: Schema.optional(Schema.String),
          vhost_type: Schema.optional(
            Schema.Literals(["main", "addon", "parked", "subdomain"]),
          ),
          is_enabled: Schema.optional(Schema.Boolean),
          username: Schema.optional(Schema.String),
          client_id: Schema.optional(Schema.Number),
          order_id: Schema.optional(Schema.Number),
          created_at: Schema.optional(Schema.String),
          root_directory: Schema.optional(Schema.String),
          parent_domain: Schema.optional(Schema.NullOr(Schema.String)),
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
export type HostingListWebsitesV1Output =
  typeof HostingListWebsitesV1Output.Type;

// The operation
/**
 * List websites
 *
 * Retrieve a paginated list of websites (main and addon types) accessible to the authenticated client.
 * This endpoint returns websites from your hosting accounts as well as
 * websites from other client hosting accounts that have shared access
 * with you.
 * Use the available query parameters to filter results by username,
 * order ID, enabled status, or domain name for more targeted results.
 *
 * @param page - Page number
 * @param per_page - Number of items per page
 * @param username - Filter by specific username
 * @param order_id - Order ID
 * @param is_enabled - Filter by enabled status
 * @param domain - Filter by domain name (exact match)
 */
export const hostingListWebsitesV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HostingListWebsitesV1Input,
    outputSchema: HostingListWebsitesV1Output,
  }),
);
