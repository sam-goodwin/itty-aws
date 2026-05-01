import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const InsightsPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    format: Schema.optional(Schema.Literals(["csv", "json"])),
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
          id: Schema.Number,
          dashboard_id: Schema.Number,
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
      Schema.Struct({
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
    ),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    updated_at: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Array(Schema.Unknown)),
    favorited: Schema.optional(Schema.Boolean),
    last_modified_at: Schema.optional(Schema.String),
    last_modified_by: Schema.optional(
      Schema.Struct({
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
      method: "PATCH",
      path: "/api/projects/{project_id}/insights/{id}/",
    }),
  );
export type InsightsPartialUpdateInput = typeof InsightsPartialUpdateInput.Type;

// Output Schema
export const InsightsPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type InsightsPartialUpdateOutput =
  typeof InsightsPartialUpdateOutput.Type;

// The operation
/**
 * DRF ViewSet mixin that gates coalesced responses behind permission checks.
 * The QueryCoalescingMiddleware attaches cached response data to
 * request.META["_coalesced_response"] for followers. This mixin runs DRF's
 * initial() (auth + permissions + throttling) before returning the
 * cached response, ensuring the request is authorized.
 *
 * @param id - Numeric primary key or 8-character `short_id` (for example `AaVQ8Ijw`) identifying the insight.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const insightsPartialUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InsightsPartialUpdateInput,
    outputSchema: InsightsPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
