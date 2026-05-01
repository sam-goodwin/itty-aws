import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const InsightsGenerateMetadataCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    format: Schema.optional(Schema.Literals(["csv", "json"])),
    id: Schema.optional(Schema.Number),
    short_id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.NullOr(Schema.String)),
    derived_name: Schema.optional(Schema.NullOr(Schema.String)),
    query: Schema.optional(Schema.Unknown),
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
          role_at_organization: Schema.optional(Schema.Unknown),
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
          role_at_organization: Schema.optional(Schema.Unknown),
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
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/insights/generate_metadata/",
    }),
  );
export type InsightsGenerateMetadataCreateInput =
  typeof InsightsGenerateMetadataCreateInput.Type;

// Output Schema
export const InsightsGenerateMetadataCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type InsightsGenerateMetadataCreateOutput =
  typeof InsightsGenerateMetadataCreateOutput.Type;

// The operation
/**
 * Generate an AI-suggested name and description for an insight based on its query configuration.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const insightsGenerateMetadataCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: InsightsGenerateMetadataCreateInput,
    outputSchema: InsightsGenerateMetadataCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
