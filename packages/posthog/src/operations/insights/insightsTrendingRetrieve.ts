import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface InsightsTrendingRetrieveInput {
  project_id: string;
  days?: number;
  format?: "csv" | "json";
  limit?: number;
  offset?: number;
}
export const InsightsTrendingRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    days: Schema.optional(Schema.Number),
    format: Schema.optional(Schema.Literals(["csv", "json"])),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/insights/trending/",
    }),
  ) as unknown as Schema.Codec<InsightsTrendingRetrieveInput>;

// Output Schema
export interface InsightsTrendingRetrieveOutput {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: {
    id: number;
    short_id: string;
    name?: string | null;
    derived_name?: string | null;
    query?: unknown;
    dashboards: number[];
    dashboard_tiles: {
      id?: number;
      dashboard_id?: number;
      deleted?: boolean | null;
    }[];
    description?: string | null;
    last_refresh: string | null;
    refreshing: boolean;
    tags?: unknown[];
    updated_at: string;
    created_by: {
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
    };
    created_at: string | null;
    last_modified_at?: string;
    favorited?: boolean;
    user_access_level: string | null;
    last_viewed_at: string | null;
    search_match_type: "exact" | "similar" | null;
    view_count: number;
    viewers: {
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
    }[];
    last_modified_by: {
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
    };
  }[];
}
export const InsightsTrendingRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
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
        dashboards: Schema.Array(Schema.Number),
        dashboard_tiles: Schema.Array(
          Schema.Struct({
            id: Schema.optional(Schema.Number),
            dashboard_id: Schema.optional(Schema.Number),
            deleted: Schema.optional(Schema.NullOr(Schema.Boolean)),
          }),
        ),
        description: Schema.optional(Schema.NullOr(Schema.String)),
        last_refresh: Schema.NullOr(Schema.String),
        refreshing: Schema.Boolean,
        tags: Schema.optional(Schema.Array(Schema.Unknown)),
        updated_at: Schema.String,
        created_by: Schema.Struct({
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
        created_at: Schema.NullOr(Schema.String),
        last_modified_at: Schema.optional(Schema.String),
        favorited: Schema.optional(Schema.Boolean),
        user_access_level: Schema.NullOr(Schema.String),
        last_viewed_at: Schema.NullOr(Schema.String),
        search_match_type: Schema.NullOr(Schema.Literals(["exact", "similar"])),
        view_count: Schema.Number,
        viewers: Schema.Array(
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
        last_modified_by: Schema.Struct({
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
      }),
    ),
  }) as unknown as Schema.Codec<InsightsTrendingRetrieveOutput>;

// The operation
/**
 * Returns insights ranked by view count over the last N days (default 7), highest first. Each result includes the same metadata as the standard insights list, plus a `view_count` and up to 3 recent `viewers`. Useful for surfacing the most-used insights in a project.
 *
 * @param days - Time window in days to compute view counts over. Defaults to 7. Larger windows surface consistently popular insights; smaller windows surface what's hot right now.
 * @param limit - Maximum number of insights to return. Defaults to 10. Capped at 100.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const insightsTrendingRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: InsightsTrendingRetrieveInput,
  outputSchema: InsightsTrendingRetrieveOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
