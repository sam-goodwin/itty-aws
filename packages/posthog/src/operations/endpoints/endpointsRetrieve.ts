import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const EndpointsRetrieveInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    name: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/api/projects/{project_id}/endpoints/{name}/",
  }),
);
export type EndpointsRetrieveInput = typeof EndpointsRetrieveInput.Type;

// Output Schema
export const EndpointsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    description: Schema.NullOr(Schema.String),
    query: Schema.Unknown,
    is_active: Schema.Boolean,
    cache_age_seconds: Schema.NullOr(Schema.Number),
    endpoint_path: Schema.String,
    url: Schema.NullOr(Schema.String),
    ui_url: Schema.NullOr(Schema.String),
    created_at: Schema.String,
    updated_at: Schema.String,
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
    is_materialized: Schema.Boolean,
    current_version: Schema.Number,
    current_version_id: Schema.optional(Schema.NullOr(Schema.String)),
    versions_count: Schema.Number,
    derived_from_insight: Schema.NullOr(Schema.String),
    last_executed_at: Schema.NullOr(Schema.String),
    materialization: Schema.Struct({
      name: Schema.String,
      status: Schema.optional(Schema.String),
      can_materialize: Schema.Boolean,
      reason: Schema.optional(Schema.NullOr(Schema.String)),
      last_materialized_at: Schema.optional(Schema.NullOr(Schema.String)),
      error: Schema.optional(Schema.String),
      sync_frequency: Schema.optional(Schema.NullOr(Schema.String)),
      saved_query_id: Schema.optional(Schema.NullOr(Schema.String)),
    }),
    bucket_overrides: Schema.NullOr(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    columns: Schema.Array(
      Schema.Struct({
        name: Schema.String,
        type: Schema.String,
      }),
    ),
    version: Schema.Number,
    version_id: Schema.String,
    endpoint_is_active: Schema.Boolean,
    version_created_at: Schema.String,
    version_updated_at: Schema.NullOr(Schema.String),
    version_created_by: Schema.NullOr(
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
  });
export type EndpointsRetrieveOutput = typeof EndpointsRetrieveOutput.Type;

// The operation
/**
 * Retrieve an endpoint, or a specific version via ?version=N.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const endpointsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EndpointsRetrieveInput,
  outputSchema: EndpointsRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));
