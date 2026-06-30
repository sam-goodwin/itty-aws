import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const InsightsTrendingRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type InsightsTrendingRetrieveInput =
  typeof InsightsTrendingRetrieveInput.Type;

// Output Schema
export const InsightsTrendingRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
        created_at: Schema.NullOr(Schema.String),
        last_modified_at: Schema.optional(Schema.String),
        favorited: Schema.optional(Schema.Boolean),
        user_access_level: Schema.NullOr(Schema.String),
        last_viewed_at: Schema.NullOr(Schema.String),
        search_match_type: Schema.Unknown,
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
            role_at_organization: Schema.optional(Schema.Unknown),
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
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
      }),
    ),
  });
export type InsightsTrendingRetrieveOutput =
  typeof InsightsTrendingRetrieveOutput.Type;

// The operation
/**
 * Returns insights ranked by view count over the last N days (default 7), highest first. Each result includes the same metadata as the standard insights list, plus a `view_count` and up to 3 recent `viewers`. Useful for surfacing the most-used insights in a project.
 *
 * @param days - Time window in days to compute view counts over. Defaults to 7. Larger windows surface consistently popular insights; smaller windows surface what's hot right now.
 * @param limit - Maximum number of insights to return. Defaults to 10. Capped at 100.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const insightsTrendingRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InsightsTrendingRetrieveInput,
    outputSchema: InsightsTrendingRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
