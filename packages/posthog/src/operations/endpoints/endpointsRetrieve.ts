import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface EndpointsRetrieveInput {
  name: string;
  project_id: string;
}
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
) as unknown as Schema.Codec<EndpointsRetrieveInput>;

// Output Schema
export interface EndpointsRetrieveOutput {
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
  version?: number;
  version_id?: string;
  endpoint_is_active?: boolean;
  version_created_at?: string;
  version_updated_at?: string | null;
  version_created_by?: {
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
}
export const EndpointsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    version: Schema.optional(Schema.Number),
    version_id: Schema.optional(Schema.String),
    endpoint_is_active: Schema.optional(Schema.Boolean),
    version_created_at: Schema.optional(Schema.String),
    version_updated_at: Schema.optional(Schema.NullOr(Schema.String)),
    version_created_by: Schema.optional(
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
  }) as unknown as Schema.Codec<EndpointsRetrieveOutput>;

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
