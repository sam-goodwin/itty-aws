import * as Schema from "effect/Schema";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";

export const V1ProjectWithDatabaseResponseSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    ref: Schema.String,
    organization_id: Schema.String,
    organization_slug: Schema.String,
    name: Schema.String,
    region: Schema.String,
    created_at: Schema.String,
    status: Schema.Literals([
      "INACTIVE",
      "ACTIVE_HEALTHY",
      "ACTIVE_UNHEALTHY",
      "COMING_UP",
      "UNKNOWN",
      "GOING_DOWN",
      "INIT_FAILED",
      "REMOVED",
      "RESTORING",
      "UPGRADING",
      "PAUSING",
      "RESTORE_FAILED",
      "RESTARTING",
      "PAUSE_FAILED",
      "RESIZING",
    ]),
    database: Schema.Struct({
      host: Schema.String,
      version: Schema.String,
      postgres_engine: Schema.String,
      release_channel: Schema.String,
    }),
  });
export const OrganizationResponseV1Schema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    slug: Schema.String,
    name: Schema.String,
  });
export const ApiKeyResponseSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  api_key: Schema.optional(SensitiveOutputNullableString),
  id: Schema.optional(Schema.NullOr(Schema.String)),
  type: Schema.optional(
    Schema.NullOr(Schema.Literals(["legacy", "publishable", "secret"])),
  ),
  prefix: Schema.optional(Schema.NullOr(Schema.String)),
  name: Schema.String,
  description: Schema.optional(Schema.NullOr(Schema.String)),
  hash: Schema.optional(Schema.NullOr(Schema.String)),
  secret_jwt_template: Schema.optional(
    Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
  ),
  inserted_at: Schema.optional(Schema.NullOr(Schema.String)),
  updated_at: Schema.optional(Schema.NullOr(Schema.String)),
});
export const BranchResponseSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  name: Schema.String,
  project_ref: Schema.String,
  parent_project_ref: Schema.String,
  is_default: Schema.Boolean,
  git_branch: Schema.optional(Schema.String),
  pr_number: Schema.optional(Schema.Number),
  latest_check_run_id: Schema.optional(Schema.Number),
  persistent: Schema.Boolean,
  status: Schema.Literals([
    "CREATING_PROJECT",
    "RUNNING_MIGRATIONS",
    "MIGRATIONS_PASSED",
    "MIGRATIONS_FAILED",
    "FUNCTIONS_DEPLOYED",
    "FUNCTIONS_FAILED",
  ]),
  created_at: Schema.String,
  updated_at: Schema.String,
  review_requested_at: Schema.optional(Schema.String),
  with_data: Schema.Boolean,
  notify_url: Schema.optional(Schema.String),
  deletion_scheduled_at: Schema.optional(Schema.String),
  preview_project_status: Schema.optional(
    Schema.Literals([
      "INACTIVE",
      "ACTIVE_HEALTHY",
      "ACTIVE_UNHEALTHY",
      "COMING_UP",
      "UNKNOWN",
      "GOING_DOWN",
      "INIT_FAILED",
      "REMOVED",
      "RESTORING",
      "UPGRADING",
      "PAUSING",
      "RESTORE_FAILED",
      "RESTARTING",
      "PAUSE_FAILED",
      "RESIZING",
    ]),
  ),
});
export const SecretResponseSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  value: Schema.String,
  updated_at: Schema.optional(Schema.String),
});
export const V1ServiceHealthResponseSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.Literals([
      "auth",
      "db",
      "db_postgres_user",
      "pooler",
      "realtime",
      "rest",
      "storage",
      "pg_bouncer",
    ]),
    healthy: Schema.Boolean,
    status: Schema.Literals(["COMING_UP", "ACTIVE_HEALTHY", "UNHEALTHY"]),
    info: Schema.optional(Schema.Unknown),
    error: Schema.optional(Schema.String),
  });
export const ThirdPartyAuthSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  type: Schema.String,
  oidc_issuer_url: Schema.optional(Schema.NullOr(Schema.String)),
  jwks_url: Schema.optional(Schema.NullOr(Schema.String)),
  custom_jwks: Schema.optional(Schema.NullOr(Schema.Unknown)),
  resolved_jwks: Schema.optional(Schema.NullOr(Schema.Unknown)),
  inserted_at: Schema.String,
  updated_at: Schema.String,
  resolved_at: Schema.optional(Schema.NullOr(Schema.String)),
});
export const FunctionResponseSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.String,
    slug: Schema.String,
    name: Schema.String,
    status: Schema.Literals(["ACTIVE", "REMOVED", "THROTTLED"]),
    version: Schema.Number,
    created_at: Schema.Number,
    updated_at: Schema.Number,
    verify_jwt: Schema.optional(Schema.Boolean),
    import_map: Schema.optional(Schema.Boolean),
    entrypoint_path: Schema.optional(Schema.String),
    import_map_path: Schema.optional(Schema.String),
    ezbr_sha256: Schema.optional(Schema.String),
  },
);
export const V1StorageBucketResponseSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    owner: Schema.String,
    created_at: Schema.String,
    updated_at: Schema.String,
    public: Schema.Boolean,
  });
export const SupavisorConfigResponseSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    identifier: Schema.String,
    database_type: Schema.Literals(["PRIMARY", "READ_REPLICA"]),
    is_using_scram_auth: Schema.Boolean,
    db_user: Schema.String,
    db_host: Schema.String,
    db_port: Schema.Number,
    db_name: Schema.String,
    connection_string: SensitiveOutputString,
    connectionString: SensitiveOutputString,
    default_pool_size: Schema.NullOr(Schema.Number),
    max_client_conn: Schema.NullOr(Schema.Number),
    pool_mode: Schema.Literals(["transaction", "session"]),
  });
export const V1OrganizationMemberResponseSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    user_id: Schema.String,
    user_name: Schema.String,
    email: Schema.optional(Schema.String),
    role_name: Schema.String,
    mfa_enabled: Schema.Boolean,
  });
