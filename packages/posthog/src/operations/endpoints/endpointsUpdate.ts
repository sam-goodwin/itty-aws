import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface EndpointsUpdateInput {
  name: string;
  project_id: string;
  query?: unknown;
  description?: string | null;
  data_freshness_seconds?: number | null;
  is_active?: boolean | null;
  is_materialized?: boolean | null;
  derived_from_insight?: string | null;
  version?: number | null;
  bucket_overrides?: Record<string, unknown> | null;
  deleted?: boolean | null;
  tags?: string[] | null;
}
export const EndpointsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
  query: Schema.optional(Schema.Unknown),
  description: Schema.optional(Schema.NullOr(Schema.String)),
  data_freshness_seconds: Schema.optional(Schema.NullOr(Schema.Number)),
  is_active: Schema.optional(Schema.NullOr(Schema.Boolean)),
  is_materialized: Schema.optional(Schema.NullOr(Schema.Boolean)),
  derived_from_insight: Schema.optional(Schema.NullOr(Schema.String)),
  version: Schema.optional(Schema.NullOr(Schema.Number)),
  bucket_overrides: Schema.optional(
    Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
  ),
  deleted: Schema.optional(Schema.NullOr(Schema.Boolean)),
  tags: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/api/projects/{project_id}/endpoints/{name}/",
  }),
) as unknown as Schema.Codec<EndpointsUpdateInput>;

// Output Schema
export interface EndpointsUpdateOutput {
  id?: string;
  name?: string;
  description?: string | null;
  query?: unknown;
  is_active?: boolean;
  data_freshness_seconds?: number;
  endpoint_path?: string;
  url?: string | null;
  ui_url?: string | null;
  created_at?: string;
  updated_at?: string;
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
  is_materialized?: boolean;
  current_version?: number;
  current_version_id?: string | null;
  versions_count?: number;
  derived_from_insight?: string | null;
  last_executed_at?: string | null;
  materialization?: {
    name?: string;
    status?: string;
    can_materialize?: boolean;
    reason?: string | null;
    last_materialized_at?: string | null;
    error?: string;
    saved_query_id?: string | null;
  };
  bucket_overrides?: Record<string, unknown> | null;
  columns?: { name?: string; type?: string }[];
  tags?: string[];
}
export const EndpointsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  description: Schema.optional(Schema.NullOr(Schema.String)),
  query: Schema.optional(Schema.Unknown),
  is_active: Schema.optional(Schema.Boolean),
  data_freshness_seconds: Schema.optional(Schema.Number),
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
  tags: Schema.optional(Schema.Array(Schema.String)),
}) as unknown as Schema.Codec<EndpointsUpdateOutput>;

// The operation
/**
 * Update an existing endpoint. Parameters are optional. Pass version in body or ?version=N query param to target a specific version.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const endpointsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EndpointsUpdateInput,
  outputSchema: EndpointsUpdateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
