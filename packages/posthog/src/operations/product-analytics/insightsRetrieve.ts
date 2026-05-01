import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const InsightsRetrieveInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
  format: Schema.optional(Schema.Literals(["csv", "json"])),
  from_dashboard: Schema.optional(Schema.Number),
  refresh: Schema.optional(
    Schema.Literals([
      "async",
      "async_except_on_cache_miss",
      "blocking",
      "force_async",
      "force_blocking",
      "force_cache",
      "lazy_async",
    ]),
  ),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/insights/{id}/" }),
);
export type InsightsRetrieveInput = typeof InsightsRetrieveInput.Type;

// Output Schema
export const InsightsRetrieveOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.Number,
    short_id: Schema.String,
    name: Schema.optional(Schema.NullOr(Schema.String)),
    derived_name: Schema.optional(Schema.NullOr(Schema.String)),
    query: Schema.optional(Schema.Unknown),
    order: Schema.optional(Schema.NullOr(Schema.Number)),
    deleted: Schema.optional(Schema.Boolean),
    dashboards: Schema.optional(Schema.Array(Schema.Number)),
    dashboard_tiles: Schema.Array(
      Schema.Struct({
        id: Schema.Number,
        dashboard_id: Schema.Number,
        deleted: Schema.optional(Schema.NullOr(Schema.Boolean)),
      }),
    ),
    last_refresh: Schema.NullOr(Schema.String),
    cache_target_age: Schema.NullOr(Schema.String),
    next_allowed_client_refresh: Schema.NullOr(Schema.String),
    result: Schema.Unknown,
    hasMore: Schema.NullOr(Schema.Boolean),
    columns: Schema.NullOr(Schema.Array(Schema.String)),
    created_at: Schema.NullOr(Schema.String),
    created_by: Schema.Struct({
      id: Schema.Number,
      uuid: Schema.String,
      distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
      first_name: Schema.optional(Schema.String),
      last_name: Schema.optional(Schema.String),
      email: Schema.String,
      is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
      hedgehog_config: Schema.NullOr(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      role_at_organization: Schema.optional(Schema.Unknown),
    }),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    updated_at: Schema.String,
    tags: Schema.optional(Schema.Array(Schema.Unknown)),
    favorited: Schema.optional(Schema.Boolean),
    last_modified_at: Schema.String,
    last_modified_by: Schema.Struct({
      id: Schema.Number,
      uuid: Schema.String,
      distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
      first_name: Schema.optional(Schema.String),
      last_name: Schema.optional(Schema.String),
      email: Schema.String,
      is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
      hedgehog_config: Schema.NullOr(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      role_at_organization: Schema.optional(Schema.Unknown),
    }),
    is_sample: Schema.Boolean,
    effective_restriction_level: Schema.Literals([21, 37]),
    effective_privilege_level: Schema.Literals([21, 37]),
    user_access_level: Schema.NullOr(Schema.String),
    timezone: Schema.NullOr(Schema.String),
    is_cached: Schema.Boolean,
    query_status: Schema.Unknown,
    hogql: Schema.NullOr(Schema.String),
    types: Schema.NullOr(Schema.Array(Schema.Unknown)),
    resolved_date_range: Schema.NullOr(
      Schema.Struct({
        date_from: Schema.optional(Schema.String),
        date_to: Schema.optional(Schema.String),
      }),
    ),
    _create_in_folder: Schema.optional(Schema.String),
    alerts: Schema.Array(Schema.Unknown),
    last_viewed_at: Schema.NullOr(Schema.String),
  },
);
export type InsightsRetrieveOutput = typeof InsightsRetrieveOutput.Type;

// The operation
/**
 * DRF ViewSet mixin that gates coalesced responses behind permission checks.
 * The QueryCoalescingMiddleware attaches cached response data to
 * request.META["_coalesced_response"] for followers. This mixin runs DRF's
 * initial() (auth + permissions + throttling) before returning the
 * cached response, ensuring the request is authorized.
 *
 * @param from_dashboard - 
Only if loading an insight in the context of a dashboard: The relevant dashboard's ID.
When set, the specified dashboard's filters and date range override will be applied.
 * @param id - Numeric primary key or 8-character `short_id` (for example `AaVQ8Ijw`) identifying the insight.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param refresh - 
Whether to refresh the insight, how aggresively, and if sync or async:
- `'force_cache'` - return cached data or a cache miss; always completes immediately as it never calculates
- `'blocking'` - calculate synchronously (returning only when the query is done), UNLESS there are very fresh results in the cache
- `'async'` - kick off background calculation (returning immediately with a query status), UNLESS there are very fresh results in the cache
- `'lazy_async'` - kick off background calculation, UNLESS there are somewhat fresh results in the cache
- `'force_blocking'` - calculate synchronously, even if fresh results are already cached
- `'force_async'` - kick off background calculation, even if fresh results are already cached
Background calculation can be tracked using the `query_status` response field.
 */
export const insightsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: InsightsRetrieveInput,
  outputSchema: InsightsRetrieveOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
