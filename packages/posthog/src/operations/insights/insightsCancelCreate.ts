import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface InsightsCancelCreateInput {
  project_id: string;
  format?: "csv" | "json";
  id?: number;
  short_id?: string;
  name?: string | null;
  derived_name?: string | null;
  query?: unknown | null;
  order?: number | null;
  deleted?: boolean;
  dashboards?: number[];
  dashboard_tiles?: {
    id?: number;
    dashboard_id?: number;
    deleted?: boolean | null;
  }[];
  last_refresh?: string | null;
  cache_target_age?: string | null;
  next_allowed_client_refresh?: string | null;
  result?: unknown;
  hasMore?: boolean | null;
  columns?: string[] | null;
  created_at?: string | null;
  created_by?: {
    id?: number;
    uuid?: string;
    distinct_id?: string | null;
    first_name?: string;
    last_name?: string;
    email?: string;
    is_email_verified?: boolean | null;
    hedgehog_config?: Record<string, unknown> | null;
    role_at_organization?:
      | "engineering"
      | "data"
      | "product"
      | "founder"
      | "leadership"
      | "marketing"
      | "sales"
      | "other"
      | ""
      | null;
  } | null;
  description?: string | null;
  updated_at?: string;
  tags?: unknown[];
  favorited?: boolean;
  last_modified_at?: string;
  last_modified_by?: {
    id?: number;
    uuid?: string;
    distinct_id?: string | null;
    first_name?: string;
    last_name?: string;
    email?: string;
    is_email_verified?: boolean | null;
    hedgehog_config?: Record<string, unknown> | null;
    role_at_organization?:
      | "engineering"
      | "data"
      | "product"
      | "founder"
      | "leadership"
      | "marketing"
      | "sales"
      | "other"
      | ""
      | null;
  } | null;
  is_sample?: boolean;
  effective_restriction_level?: 21 | 37;
  effective_privilege_level?: 21 | 37;
  user_access_level?: string | null;
  timezone?: string | null;
  is_cached?: boolean;
  query_status?: unknown;
  hogql?: string | null;
  types?: unknown[] | null;
  resolved_date_range?: { date_from?: string; date_to?: string } | null;
  _create_in_folder?: string;
  alerts?: unknown[];
  last_viewed_at?: string | null;
  search_match_type?: "exact" | "similar" | null;
}
export const InsightsCancelCreateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    format: Schema.optional(Schema.Literals(["csv", "json"])),
    id: Schema.optional(Schema.Number),
    short_id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.NullOr(Schema.String)),
    derived_name: Schema.optional(Schema.NullOr(Schema.String)),
    query: Schema.optional(Schema.NullOr(Schema.Unknown)),
    order: Schema.optional(Schema.NullOr(Schema.Number)),
    deleted: Schema.optional(Schema.Boolean),
    dashboards: Schema.optional(Schema.Array(Schema.Number)),
    dashboard_tiles: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          dashboard_id: Schema.optional(Schema.Number),
          deleted: Schema.optional(Schema.NullOr(Schema.Boolean)),
        }),
      ),
    ),
    last_refresh: Schema.optional(Schema.NullOr(Schema.String)),
    cache_target_age: Schema.optional(Schema.NullOr(Schema.String)),
    next_allowed_client_refresh: Schema.optional(Schema.NullOr(Schema.String)),
    result: Schema.optional(Schema.Unknown),
    hasMore: Schema.optional(Schema.NullOr(Schema.Boolean)),
    columns: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
    created_at: Schema.optional(Schema.NullOr(Schema.String)),
    created_by: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          uuid: Schema.optional(Schema.String),
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          role_at_organization: Schema.optional(
            Schema.NullOr(
              Schema.Union([
                Schema.Literals([
                  "engineering",
                  "data",
                  "product",
                  "founder",
                  "leadership",
                  "marketing",
                  "sales",
                  "other",
                ]),
                Schema.Literals([""]),
              ]),
            ),
          ),
        }),
      ),
    ),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    updated_at: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Array(Schema.Unknown)),
    favorited: Schema.optional(Schema.Boolean),
    last_modified_at: Schema.optional(Schema.String),
    last_modified_by: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          uuid: Schema.optional(Schema.String),
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          role_at_organization: Schema.optional(
            Schema.NullOr(
              Schema.Union([
                Schema.Literals([
                  "engineering",
                  "data",
                  "product",
                  "founder",
                  "leadership",
                  "marketing",
                  "sales",
                  "other",
                ]),
                Schema.Literals([""]),
              ]),
            ),
          ),
        }),
      ),
    ),
    is_sample: Schema.optional(Schema.Boolean),
    effective_restriction_level: Schema.optional(Schema.Literals([21, 37])),
    effective_privilege_level: Schema.optional(Schema.Literals([21, 37])),
    user_access_level: Schema.optional(Schema.NullOr(Schema.String)),
    timezone: Schema.optional(Schema.NullOr(Schema.String)),
    is_cached: Schema.optional(Schema.Boolean),
    query_status: Schema.optional(Schema.Unknown),
    hogql: Schema.optional(Schema.NullOr(Schema.String)),
    types: Schema.optional(Schema.NullOr(Schema.Array(Schema.Unknown))),
    resolved_date_range: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          date_from: Schema.optional(Schema.String),
          date_to: Schema.optional(Schema.String),
        }),
      ),
    ),
    _create_in_folder: Schema.optional(Schema.String),
    alerts: Schema.optional(Schema.Array(Schema.Unknown)),
    last_viewed_at: Schema.optional(Schema.NullOr(Schema.String)),
    search_match_type: Schema.optional(
      Schema.NullOr(Schema.Literals(["exact", "similar"])),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/insights/cancel/",
    }),
  ) as unknown as Schema.Codec<InsightsCancelCreateInput>;

// Output Schema
export type InsightsCancelCreateOutput = void;
export const InsightsCancelCreateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<InsightsCancelCreateOutput>;

// The operation
/**
 * DRF ViewSet mixin that gates coalesced responses behind permission checks.
 * The QueryCoalescingMiddleware attaches cached response data to
 * request.META["_coalesced_response"] for followers. This mixin runs DRF's
 * initial() (auth + permissions + throttling) before returning the
 * cached response, ensuring the request is authorized.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const insightsCancelCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: InsightsCancelCreateInput,
  outputSchema: InsightsCancelCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
