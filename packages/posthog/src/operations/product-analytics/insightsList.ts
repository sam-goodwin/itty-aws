import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const InsightsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  basic: Schema.optional(Schema.Boolean),
  created_by: Schema.optional(Schema.String),
  created_date_from: Schema.optional(Schema.String),
  created_date_to: Schema.optional(Schema.String),
  dashboards: Schema.optional(Schema.String),
  date_from: Schema.optional(Schema.String),
  date_to: Schema.optional(Schema.String),
  favorited: Schema.optional(Schema.Boolean),
  format: Schema.optional(Schema.Literals(["csv", "json"])),
  insight: Schema.optional(
    Schema.Literals([
      "FUNNELS",
      "JSON",
      "LIFECYCLE",
      "PATHS",
      "RETENTION",
      "SQL",
      "STICKINESS",
      "TRENDS",
    ]),
  ),
  last_viewed_date_from: Schema.optional(Schema.String),
  last_viewed_date_to: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
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
  saved: Schema.optional(Schema.Boolean),
  search: Schema.optional(Schema.String),
  short_id: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.String),
  user: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/insights/" }),
);
export type InsightsListInput = typeof InsightsListInput.Type;

// Output Schema
export const InsightsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.Number,
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.Array(
    Schema.Struct({
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
    }),
  ),
});
export type InsightsListOutput = typeof InsightsListOutput.Type;

// The operation
/**
 * DRF ViewSet mixin that gates coalesced responses behind permission checks.
 * The QueryCoalescingMiddleware attaches cached response data to
 * request.META["_coalesced_response"] for followers. This mixin runs DRF's
 * initial() (auth + permissions + throttling) before returning the
 * cached response, ensuring the request is authorized.
 *
 * @param basic - Return basic insight metadata only (no results, faster).
 * @param created_by - JSON-encoded array of user IDs. Only returns insights whose `created_by` is in the list, e.g. `[1,42]`.
 * @param created_date_from - Filter by `created_at > created_date_from`. Accepts absolute or relative dates.
 * @param created_date_to - Filter by `created_at < created_date_to`. Accepts absolute or relative dates.
 * @param dashboards - JSON-encoded array of dashboard IDs. Returns insights attached to every listed dashboard (AND).
 * @param date_from - Filter by `last_modified_at > date_from`. Accepts absolute dates (`2025-04-23`) or relative strings (`-7d`, `-1m`).
 * @param date_to - Filter by `last_modified_at < date_to`. Accepts absolute dates or relative strings.
 * @param favorited - Include this parameter (any value) to restrict results to insights marked as favorited.
 * @param insight - Restrict to a single insight type. `JSON` matches non-wrapper query insights; `SQL` matches HogQL queries.
 * @param last_viewed_date_from - Filter by `last_viewed_at > last_viewed_date_from`. Accepts absolute or relative dates.
 * @param last_viewed_date_to - Filter by `last_viewed_at < last_viewed_date_to`. Accepts absolute or relative dates.
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param refresh - 
Whether to refresh the retrieved insights, how aggressively, and if sync or async:
- `'force_cache'` - return cached data or a cache miss; always completes immediately as it never calculates
- `'blocking'` - calculate synchronously (returning only when the query is done), UNLESS there are very fresh results in the cache
- `'async'` - kick off background calculation (returning immediately with a query status), UNLESS there are very fresh results in the cache
- `'lazy_async'` - kick off background calculation, UNLESS there are somewhat fresh results in the cache
- `'force_blocking'` - calculate synchronously, even if fresh results are already cached
- `'force_async'` - kick off background calculation, even if fresh results are already cached
Background calculation can be tracked using the `query_status` response field.
 * @param saved - When truthy, restricts results to insights that are saved (or attached to a visible dashboard). When falsy, only unsaved insights.
 * @param search - Case-insensitive substring match across name, derived_name, description, and tag names.
 * @param tags - JSON-encoded array of tag names. Returns insights with any of the listed tags.
 * @param user - Include this parameter (any value) to restrict results to insights created by the authenticated user.
 */
export const insightsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: InsightsListInput,
  outputSchema: InsightsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
