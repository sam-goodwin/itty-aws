import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CreateProjectBranchDataAPIInput {
  project_id: string;
  branch_id: string;
  database_name: string;
  auth_provider?: "neon_auth" | "external";
  jwks_url?: string;
  provider_name?: string;
  jwt_audience?: string;
  add_default_grants?: boolean;
  skip_auth_schema?: boolean;
  settings?: {
    db_aggregates_enabled?: boolean;
    db_anon_role?: string;
    db_extra_search_path?: string;
    db_max_rows?: number;
    db_schemas?: string[];
    jwt_role_claim_key?: string;
    jwt_cache_max_lifetime?: number;
    openapi_mode?: string;
    server_cors_allowed_origins?: string;
    server_timing_enabled?: boolean;
  };
}
export const CreateProjectBranchDataAPIInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
    database_name: Schema.String.pipe(T.PathParam()),
    auth_provider: Schema.optional(Schema.Literals(["neon_auth", "external"])),
    jwks_url: Schema.optional(Schema.String),
    provider_name: Schema.optional(Schema.String),
    jwt_audience: Schema.optional(Schema.String),
    add_default_grants: Schema.optional(Schema.Boolean),
    skip_auth_schema: Schema.optional(Schema.Boolean),
    settings: Schema.optional(
      Schema.Struct({
        db_aggregates_enabled: Schema.optional(Schema.Boolean),
        db_anon_role: Schema.optional(Schema.String),
        db_extra_search_path: Schema.optional(Schema.String),
        db_max_rows: Schema.optional(Schema.Number),
        db_schemas: Schema.optional(Schema.Array(Schema.String)),
        jwt_role_claim_key: Schema.optional(Schema.String),
        jwt_cache_max_lifetime: Schema.optional(Schema.Number),
        openapi_mode: Schema.optional(Schema.String),
        server_cors_allowed_origins: Schema.optional(Schema.String),
        server_timing_enabled: Schema.optional(Schema.Boolean),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/projects/{project_id}/branches/{branch_id}/data-api/{database_name}",
    }),
  ) as unknown as Schema.Codec<CreateProjectBranchDataAPIInput>;

// Output Schema
export interface CreateProjectBranchDataAPIOutput {
  url: string;
}
export const CreateProjectBranchDataAPIOutput =
  /*@__PURE__*/ Schema.Struct({
    url: Schema.String,
  }) as unknown as Schema.Codec<CreateProjectBranchDataAPIOutput>;

// The operation
/**
 * Create Neon Data API
 *
 * Creates a new instance of Neon Data API in the specified branch.
 * The Data API exposes a REST interface over the branch database. The `database_name` path parameter determines which database the API serves.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The Neon branch ID
 * @param database_name - The database name
 */
export const createProjectBranchDataAPI = /*@__PURE__*/ API.make(() => ({
  inputSchema: CreateProjectBranchDataAPIInput,
  outputSchema: CreateProjectBranchDataAPIOutput,
}));
