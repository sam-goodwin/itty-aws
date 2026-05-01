import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const EndpointsPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    query: Schema.optional(Schema.NullOr(Schema.Unknown)),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    cache_age_seconds: Schema.optional(Schema.NullOr(Schema.Number)),
    is_active: Schema.optional(Schema.NullOr(Schema.Boolean)),
    is_materialized: Schema.optional(Schema.NullOr(Schema.Boolean)),
    sync_frequency: Schema.optional(Schema.NullOr(Schema.String)),
    derived_from_insight: Schema.optional(Schema.NullOr(Schema.String)),
    version: Schema.optional(Schema.NullOr(Schema.Number)),
    bucket_overrides: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    deleted: Schema.optional(Schema.NullOr(Schema.Boolean)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/endpoints/{name}/",
    }),
  );
export type EndpointsPartialUpdateInput =
  typeof EndpointsPartialUpdateInput.Type;

// Output Schema
export const EndpointsPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    query: Schema.optional(Schema.Unknown),
    is_active: Schema.optional(Schema.Boolean),
    cache_age_seconds: Schema.optional(Schema.NullOr(Schema.Number)),
    endpoint_path: Schema.optional(Schema.String),
    url: Schema.optional(Schema.NullOr(Schema.String)),
    ui_url: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
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
    is_materialized: Schema.optional(Schema.Boolean),
    current_version: Schema.optional(Schema.Number),
    current_version_id: Schema.optional(Schema.NullOr(Schema.String)),
    versions_count: Schema.optional(Schema.Number),
    derived_from_insight: Schema.optional(Schema.NullOr(Schema.String)),
    last_executed_at: Schema.optional(Schema.NullOr(Schema.String)),
    materialization: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        status: Schema.optional(Schema.String),
        can_materialize: Schema.optional(Schema.Boolean),
        reason: Schema.optional(Schema.NullOr(Schema.String)),
        last_materialized_at: Schema.optional(Schema.NullOr(Schema.String)),
        error: Schema.optional(Schema.String),
        sync_frequency: Schema.optional(Schema.NullOr(Schema.String)),
        saved_query_id: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
    bucket_overrides: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    columns: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  });
export type EndpointsPartialUpdateOutput =
  typeof EndpointsPartialUpdateOutput.Type;

// The operation
/**
 * Update an existing endpoint.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const endpointsPartialUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EndpointsPartialUpdateInput,
    outputSchema: EndpointsPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
