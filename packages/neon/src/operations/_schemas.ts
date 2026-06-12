import * as Schema from "effect/Schema";
import { SensitiveOutputString } from "../sensitive.ts";

export const AdvisorIssueSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  title: Schema.String,
  level: Schema.String,
  facing: Schema.Literals(["EXTERNAL", "INTERNAL"]),
  categories: Schema.Array(Schema.suspend(() => AdvisorCategorySchema)),
  description: Schema.String,
  detail: Schema.String,
  remediation: Schema.String,
  metadata: Schema.Record(Schema.String, Schema.Unknown),
  cache_key: Schema.String,
});
export const AdvisorCategorySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["SECURITY", "PERFORMANCE"]);
export const ApiKeysListResponseItemSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number,
    name: Schema.String,
    created_at: Schema.String,
    created_by: Schema.suspend(() => ApiKeyCreatorDataSchema),
    last_used_at: Schema.optional(Schema.NullOr(Schema.String)),
    last_used_from_addr: Schema.String,
  });
export const ApiKeyCreatorDataSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    image: Schema.String,
  });
export const OperationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  project_id: Schema.String,
  branch_id: Schema.optional(Schema.String),
  endpoint_id: Schema.optional(Schema.String),
  action: Schema.suspend(() => OperationActionSchema),
  status: Schema.suspend(() => OperationStatusSchema),
  error: Schema.optional(Schema.String),
  failures_count: Schema.Number,
  retry_at: Schema.optional(Schema.String),
  created_at: Schema.String,
  updated_at: Schema.String,
  total_duration_ms: Schema.Number,
});
export const OperationActionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "create_compute",
    "create_timeline",
    "start_compute",
    "suspend_compute",
    "apply_config",
    "check_availability",
    "delete_timeline",
    "create_branch",
    "import_data",
    "tenant_ignore",
    "tenant_attach",
    "tenant_detach",
    "tenant_reattach",
    "replace_safekeeper",
    "disable_maintenance",
    "apply_storage_config",
    "prepare_secondary_pageserver",
    "switch_pageserver",
    "detach_parent_branch",
    "timeline_archive",
    "timeline_unarchive",
    "start_reserved_compute",
    "sync_dbs_and_roles_from_compute",
    "apply_schema_from_branch",
    "timeline_mark_invisible",
    "prewarm_replica",
    "promote_replica",
    "set_storage_non_dirty",
    "swap_binding_id",
  ]);
export const OperationStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "scheduling",
    "running",
    "finished",
    "failed",
    "error",
    "cancelling",
    "cancelled",
    "skipped",
  ]);
export const ProjectListItemSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  platform_id: Schema.String,
  region_id: Schema.String,
  name: Schema.String,
  provisioner: Schema.suspend(() => ProvisionerSchema),
  default_endpoint_settings: Schema.optional(
    Schema.suspend(() => DefaultEndpointSettingsSchema),
  ),
  settings: Schema.optional(Schema.suspend(() => ProjectSettingsDataSchema)),
  pg_version: Schema.suspend(() => PgVersionSchema),
  proxy_host: Schema.String,
  branch_logical_size_limit: Schema.Number,
  branch_logical_size_limit_bytes: Schema.Number,
  store_passwords: Schema.Boolean,
  active_time: Schema.Number,
  cpu_used_sec: Schema.Number,
  maintenance_starts_at: Schema.optional(Schema.String),
  creation_source: Schema.String,
  created_at: Schema.String,
  updated_at: Schema.String,
  synthetic_storage_size: Schema.optional(Schema.Number),
  quota_reset_at: Schema.optional(Schema.String),
  owner_id: Schema.String,
  compute_last_active_at: Schema.optional(Schema.String),
  org_id: Schema.optional(Schema.String),
  org_name: Schema.optional(Schema.String),
  history_retention_seconds: Schema.optional(Schema.Number),
  hipaa_enabled_at: Schema.optional(Schema.String),
  deleted_at: Schema.optional(Schema.String),
  recoverable_until: Schema.optional(Schema.String),
});
export const ProvisionerSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export const DefaultEndpointSettingsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pg_settings: Schema.optional(Schema.suspend(() => PgSettingsDataSchema)),
    pgbouncer_settings: Schema.optional(
      Schema.suspend(() => PgbouncerSettingsDataSchema),
    ),
    autoscaling_limit_min_cu: Schema.optional(
      Schema.suspend(() => ComputeUnitSchema),
    ),
    autoscaling_limit_max_cu: Schema.optional(
      Schema.suspend(() => ComputeUnitSchema),
    ),
    suspend_timeout_seconds: Schema.optional(
      Schema.suspend(() => SuspendTimeoutSecondsSchema),
    ),
  });
export const PgSettingsDataSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Record(
  Schema.String,
  Schema.String,
);
export const PgbouncerSettingsDataSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Record(Schema.String, Schema.String);
export const ComputeUnitSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Number;
export const SuspendTimeoutSecondsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Number;
export const ProjectSettingsDataSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    quota: Schema.optional(Schema.suspend(() => ProjectQuotaSchema)),
    allowed_ips: Schema.optional(Schema.suspend(() => AllowedIpsSchema)),
    enable_logical_replication: Schema.optional(Schema.Boolean),
    maintenance_window: Schema.optional(
      Schema.suspend(() => MaintenanceWindowSchema),
    ),
    block_public_connections: Schema.optional(Schema.Boolean),
    block_vpc_connections: Schema.optional(Schema.Boolean),
    audit_log_level: Schema.optional(
      Schema.suspend(() => ProjectAuditLogLevelSchema),
    ),
    hipaa: Schema.optional(Schema.Boolean),
    preload_libraries: Schema.optional(
      Schema.suspend(() => PreloadLibrariesSchema),
    ),
  });
export const ProjectQuotaSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  active_time_seconds: Schema.optional(Schema.Number),
  compute_time_seconds: Schema.optional(Schema.Number),
  written_data_bytes: Schema.optional(Schema.Number),
  data_transfer_bytes: Schema.optional(Schema.Number),
  logical_size_bytes: Schema.optional(Schema.Number),
});
export const AllowedIpsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ips: Schema.optional(Schema.Array(Schema.String)),
  protected_branches_only: Schema.optional(Schema.Boolean),
});
export const MaintenanceWindowSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    weekdays: Schema.Array(Schema.Number),
    start_time: Schema.String,
    end_time: Schema.String,
  });
export const ProjectAuditLogLevelSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["base", "extended", "full"]);
export const PreloadLibrariesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    use_defaults: Schema.optional(Schema.Boolean),
    enabled_libraries: Schema.optional(Schema.Array(Schema.String)),
  },
);
export const PgVersionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Number;
export const PaginationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  cursor: Schema.String,
});
export const ApplicationTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "vercel",
    "github",
    "datadog",
    "opentelemetry",
  ]);
export const AnnotationValueDataSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Record(Schema.String, Schema.String);
export const ProjectSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  data_storage_bytes_hour: Schema.Number,
  data_transfer_bytes: Schema.Number,
  written_data_bytes: Schema.Number,
  compute_time_seconds: Schema.Number,
  active_time_seconds: Schema.Number,
  cpu_used_sec: Schema.Number,
  id: Schema.String,
  platform_id: Schema.String,
  region_id: Schema.String,
  name: Schema.String,
  provisioner: Schema.suspend(() => ProvisionerSchema),
  default_endpoint_settings: Schema.optional(
    Schema.suspend(() => DefaultEndpointSettingsSchema),
  ),
  settings: Schema.optional(Schema.suspend(() => ProjectSettingsDataSchema)),
  pg_version: Schema.suspend(() => PgVersionSchema),
  proxy_host: Schema.String,
  branch_logical_size_limit: Schema.Number,
  branch_logical_size_limit_bytes: Schema.Number,
  store_passwords: Schema.Boolean,
  maintenance_starts_at: Schema.optional(Schema.String),
  creation_source: Schema.String,
  history_retention_seconds: Schema.Number,
  created_at: Schema.String,
  updated_at: Schema.String,
  synthetic_storage_size: Schema.optional(Schema.Number),
  consumption_period_start: Schema.String,
  consumption_period_end: Schema.String,
  quota_reset_at: Schema.optional(Schema.String),
  owner_id: Schema.String,
  owner: Schema.optional(Schema.suspend(() => ProjectOwnerDataSchema)),
  compute_last_active_at: Schema.optional(Schema.String),
  org_id: Schema.optional(Schema.String),
  maintenance_scheduled_for: Schema.optional(Schema.String),
  hipaa_enabled_at: Schema.optional(Schema.String),
});
export const ProjectOwnerDataSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    email: Schema.String,
    name: Schema.String,
    branches_limit: Schema.Number,
    subscription_type: Schema.suspend(() => BillingSubscriptionTypeSchema),
  },
);
export const BillingSubscriptionTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "UNKNOWN",
    "direct_sales",
    "direct_sales_v3",
    "aws_marketplace",
    "free_v2",
    "free_v3",
    "launch",
    "launch_v3",
    "scale",
    "scale_v3",
    "business",
    "vercel_pg_legacy",
  ]);
export const ConnectionDetailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connection_uri: SensitiveOutputString,
    connection_parameters: Schema.suspend(() => ConnectionParametersSchema),
  });
export const ConnectionParametersSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    database: Schema.String,
    password: SensitiveOutputString,
    role: Schema.String,
    host: Schema.String,
    pooler_host: Schema.String,
  });
export const RoleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  branch_id: Schema.String,
  name: Schema.String,
  password: Schema.optional(SensitiveOutputString),
  protected: Schema.optional(Schema.Boolean),
  authentication_method: Schema.optional(Schema.String),
  created_at: Schema.String,
  updated_at: Schema.String,
});
export const DatabaseSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.Number,
  branch_id: Schema.String,
  name: Schema.String,
  owner_name: Schema.String,
  created_at: Schema.String,
  updated_at: Schema.String,
});
export const BranchSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  project_id: Schema.String,
  parent_id: Schema.optional(Schema.String),
  parent_lsn: Schema.optional(Schema.String),
  parent_timestamp: Schema.optional(Schema.String),
  name: Schema.String,
  current_state: Schema.suspend(() => BranchStateSchema),
  pending_state: Schema.optional(Schema.suspend(() => BranchStateSchema)),
  state_changed_at: Schema.String,
  logical_size: Schema.optional(Schema.Number),
  creation_source: Schema.String,
  primary: Schema.optional(Schema.Boolean),
  default: Schema.Boolean,
  protected: Schema.Boolean,
  cpu_used_sec: Schema.Number,
  compute_time_seconds: Schema.Number,
  active_time_seconds: Schema.Number,
  written_data_bytes: Schema.Number,
  data_transfer_bytes: Schema.Number,
  created_at: Schema.String,
  updated_at: Schema.String,
  ttl_interval_seconds: Schema.optional(Schema.Number),
  expires_at: Schema.optional(Schema.String),
  last_reset_at: Schema.optional(Schema.String),
  created_by: Schema.optional(
    Schema.Struct({
      name: Schema.optional(Schema.String),
      image: Schema.optional(Schema.String),
    }),
  ),
  init_source: Schema.optional(Schema.String),
  restore_status: Schema.optional(
    Schema.suspend(() => BranchRestoreStatusSchema),
  ),
  restored_from: Schema.optional(Schema.String),
  restored_as: Schema.optional(Schema.String),
  restricted_actions: Schema.optional(
    Schema.Array(Schema.suspend(() => BranchRestrictedActionSchema)),
  ),
});
export const BranchStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export const BranchRestoreStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export const BranchRestrictedActionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    reason: Schema.String,
  });
export const EndpointSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  host: Schema.String,
  id: Schema.String,
  name: Schema.optional(Schema.String),
  project_id: Schema.String,
  branch_id: Schema.String,
  autoscaling_limit_min_cu: Schema.suspend(() => ComputeUnitSchema),
  autoscaling_limit_max_cu: Schema.suspend(() => ComputeUnitSchema),
  region_id: Schema.String,
  type: Schema.suspend(() => EndpointTypeSchema),
  current_state: Schema.suspend(() => EndpointStateSchema),
  pending_state: Schema.optional(Schema.suspend(() => EndpointStateSchema)),
  settings: Schema.suspend(() => EndpointSettingsDataSchema),
  pooler_enabled: Schema.Boolean,
  pooler_mode: Schema.suspend(() => EndpointPoolerModeSchema),
  disabled: Schema.Boolean,
  passwordless_access: Schema.Boolean,
  last_active: Schema.optional(Schema.String),
  creation_source: Schema.String,
  created_at: Schema.String,
  updated_at: Schema.String,
  started_at: Schema.optional(Schema.String),
  suspended_at: Schema.optional(Schema.String),
  proxy_host: Schema.String,
  suspend_timeout_seconds: Schema.suspend(() => SuspendTimeoutSecondsSchema),
  provisioner: Schema.suspend(() => ProvisionerSchema),
  compute_release_version: Schema.optional(Schema.String),
});
export const EndpointTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "read_only",
  "read_write",
]);
export const EndpointStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "init",
  "active",
  "idle",
]);
export const EndpointSettingsDataSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pg_settings: Schema.optional(Schema.suspend(() => PgSettingsDataSchema)),
    pgbouncer_settings: Schema.optional(
      Schema.suspend(() => PgbouncerSettingsDataSchema),
    ),
    preload_libraries: Schema.optional(
      Schema.suspend(() => PreloadLibrariesSchema),
    ),
  });
export const EndpointPoolerModeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["transaction"]);
export const ProjectPermissionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    granted_to_email: Schema.String,
    granted_at: Schema.String,
    revoked_at: Schema.optional(Schema.String),
  });
export const AvailablePreloadLibrarySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    library_name: Schema.String,
    description: Schema.String,
    is_default: Schema.Boolean,
    is_experimental: Schema.Boolean,
    version: Schema.String,
  });
export const JWKSSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  project_id: Schema.String,
  branch_id: Schema.optional(Schema.String),
  jwks_url: Schema.String,
  provider_name: Schema.String,
  created_at: Schema.String,
  updated_at: Schema.String,
  jwt_audience: Schema.optional(Schema.String),
  role_names: Schema.optional(Schema.Array(Schema.String)),
});
export const DataAPISettingsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export const NeonAuthSupportedAuthProviderSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "mock",
    "stack",
    "stack_v2",
    "better_auth",
  ]);
export const NeonAuthProviderProjectOwnedBySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["user", "neon"]);
export const NeonAuthProviderProjectTransferStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["initiated", "finished"]);
export const NeonAuthRedirectURIWhitelistDomainSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domain: Schema.String,
    auth_provider: Schema.suspend(() => NeonAuthSupportedAuthProviderSchema),
  });
export const NeonAuthDeleteDomainFromRedirectURIWhitelistItemSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domain: Schema.String,
  });
export const NeonAuthOauthProviderSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.suspend(() => NeonAuthOauthProviderIdSchema),
    type: Schema.suspend(() => NeonAuthOauthProviderTypeSchema),
    client_id: Schema.optional(Schema.String),
    client_secret: Schema.optional(SensitiveOutputString),
  });
export const NeonAuthOauthProviderIdSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "google",
    "github",
    "microsoft",
    "vercel",
  ]);
export const NeonAuthOauthProviderTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["standard", "shared"]);
export const NeonAuthEmailVerificationMethodSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["link", "otp"]);
export const NeonAuthOrganizationConfigSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    organization_limit: Schema.Number,
    membership_limit: Schema.Number,
    creator_role: Schema.Literals(["admin", "owner"]),
    send_invitation_email: Schema.Boolean,
  });
export const NeonAuthEmailServerConfigSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export const NeonAuthEmailAndPasswordConfigSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    email_verification_method: Schema.suspend(
      () => NeonAuthEmailVerificationMethodSchema,
    ),
    require_email_verification: Schema.Boolean,
    auto_sign_in_after_verification: Schema.Boolean,
    send_verification_email_on_sign_up: Schema.Boolean,
    send_verification_email_on_sign_in: Schema.Boolean,
    disable_sign_up: Schema.Boolean,
  });
export const AnnotationDataSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.suspend(() => AnnotationObjectDataSchema),
  value: Schema.suspend(() => AnnotationValueDataSchema),
  created_at: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
});
export const AnnotationObjectDataSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.String,
    id: Schema.String,
  });
export const CursorPaginationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    next: Schema.optional(Schema.String),
    sort_by: Schema.optional(Schema.String),
    sort_order: Schema.optional(Schema.String),
  },
);
export const BranchCreateRequestEndpointOptionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.suspend(() => EndpointTypeSchema),
    settings: Schema.optional(Schema.suspend(() => EndpointSettingsDataSchema)),
    autoscaling_limit_min_cu: Schema.optional(
      Schema.suspend(() => ComputeUnitSchema),
    ),
    autoscaling_limit_max_cu: Schema.optional(
      Schema.suspend(() => ComputeUnitSchema),
    ),
    provisioner: Schema.optional(Schema.suspend(() => ProvisionerSchema)),
    suspend_timeout_seconds: Schema.optional(
      Schema.suspend(() => SuspendTimeoutSecondsSchema),
    ),
  });
export const BranchCreateRequestSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpoints: Schema.optional(
      Schema.Array(
        Schema.suspend(() => BranchCreateRequestEndpointOptionsSchema),
      ),
    ),
    branch: Schema.optional(
      Schema.Struct({
        parent_id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        parent_lsn: Schema.optional(Schema.String),
        parent_timestamp: Schema.optional(Schema.String),
        protected: Schema.optional(Schema.Boolean),
        archived: Schema.optional(Schema.Boolean),
        init_source: Schema.optional(Schema.String),
        expires_at: Schema.optional(Schema.String),
      }),
    ),
  });
export const MaskingRuleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  database_name: Schema.String,
  schema_name: Schema.String,
  table_name: Schema.String,
  column_name: Schema.String,
  masking_function: Schema.optional(Schema.String),
  masking_value: Schema.optional(Schema.String),
});
export const BranchSchemaJSONSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    tables: Schema.Array(
      Schema.Struct({
        schema: Schema.String,
        name: Schema.String,
        columns: Schema.Array(
          Schema.Struct({
            name: Schema.String,
            type: Schema.String,
            nullable: Schema.optional(Schema.Boolean),
            generated: Schema.optional(Schema.Boolean),
          }),
        ),
        constraints: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.String,
              columns: Schema.Array(Schema.String),
              name: Schema.optional(Schema.String),
              referenced_table: Schema.optional(
                Schema.Struct({
                  schema: Schema.String,
                  table: Schema.String,
                  columns: Schema.Array(Schema.String),
                }),
              ),
            }),
          ),
        ),
      }),
    ),
  },
);
export const AnonymizationRunMetadataSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    started_at: Schema.optional(Schema.String),
    completed_at: Schema.optional(Schema.String),
    triggered_by: Schema.optional(Schema.String),
    triggered_by_username: Schema.optional(Schema.String),
    masked_columns: Schema.optional(Schema.Number),
  });
export const VPCEndpointSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  vpc_endpoint_id: Schema.String,
  label: Schema.String,
});
export const ConsumptionHistoryPerProjectSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String,
    periods: Schema.Array(
      Schema.suspend(() => ConsumptionHistoryPerPeriodSchema),
    ),
  });
export const ConsumptionHistoryPerPeriodSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    period_id: Schema.String,
    period_plan: Schema.String,
    period_start: Schema.String,
    period_end: Schema.optional(Schema.String),
    consumption: Schema.Array(
      Schema.suspend(() => ConsumptionHistoryPerTimeframeSchema),
    ),
  });
export const ConsumptionHistoryPerTimeframeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    timeframe_start: Schema.String,
    timeframe_end: Schema.String,
    active_time_seconds: Schema.Number,
    compute_time_seconds: Schema.Number,
    written_data_bytes: Schema.Number,
    synthetic_storage_size_bytes: Schema.Number,
    data_storage_bytes_hour: Schema.optional(Schema.Number),
    logical_size_bytes: Schema.optional(Schema.Number),
    logical_size_bytes_hour: Schema.optional(Schema.Number),
  });
export const ConsumptionHistoryPerProjectV2Schema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String,
    periods: Schema.Array(
      Schema.suspend(() => ConsumptionHistoryPerPeriodV2Schema),
    ),
  });
export const ConsumptionHistoryPerPeriodV2Schema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    period_id: Schema.String,
    period_plan: Schema.String,
    period_start: Schema.String,
    period_end: Schema.optional(Schema.String),
    consumption: Schema.Array(
      Schema.suspend(() => ConsumptionHistoryPerTimeframeV2Schema),
    ),
  });
export const ConsumptionHistoryPerTimeframeV2Schema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    timeframe_start: Schema.optional(Schema.String),
    timeframe_end: Schema.optional(Schema.String),
    metrics: Schema.optional(
      Schema.Array(Schema.suspend(() => ConsumptionMetricValueSchema)),
    ),
  });
export const ConsumptionMetricValueSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metric_name: Schema.String,
    value: Schema.Number,
  });
export const OrgApiKeysListResponseItemSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number,
    name: Schema.String,
    created_at: Schema.String,
    created_by: Schema.suspend(() => ApiKeyCreatorDataSchema),
    last_used_at: Schema.optional(Schema.NullOr(Schema.String)),
    last_used_from_addr: Schema.String,
    project_id: Schema.optional(Schema.String),
  });
export const MemberWithUserSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  member: Schema.suspend(() => MemberSchema),
  user: Schema.suspend(() => MemberUserInfoSchema),
});
export const MemberSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  user_id: Schema.String,
  org_id: Schema.String,
  role: Schema.suspend(() => MemberRoleSchema),
  joined_at: Schema.optional(Schema.String),
});
export const MemberRoleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "admin",
  "member",
]);
export const MemberUserInfoSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  email: Schema.String,
  has_mfa: Schema.optional(Schema.Boolean),
});
export const InvitationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  email: Schema.String,
  org_id: Schema.String,
  invited_by: Schema.String,
  invited_at: Schema.String,
  role: Schema.suspend(() => MemberRoleSchema),
});
export const OrganizationInviteCreateRequestSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.String,
    role: Schema.suspend(() => MemberRoleSchema),
  });
export const VPCEndpointWithRegionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vpc_endpoint_id: Schema.String,
    label: Schema.String,
    region_id: Schema.String,
  });
export const RegionResponseSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  region_id: Schema.String,
  name: Schema.String,
  default: Schema.Boolean,
  geo_lat: Schema.String,
  geo_long: Schema.String,
});
export const BillingAccountSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  state: Schema.suspend(() => BillingAccountStateSchema),
  payment_source: Schema.suspend(() => PaymentSourceSchema),
  subscription_type: Schema.suspend(() => BillingSubscriptionTypeSchema),
  payment_method: Schema.suspend(() => BillingPaymentMethodSchema),
  quota_reset_at_last: Schema.String,
  name: Schema.String,
  email: Schema.String,
  address_city: Schema.String,
  address_country: Schema.String,
  address_country_name: Schema.optional(Schema.String),
  address_line1: Schema.String,
  address_line2: Schema.String,
  address_postal_code: Schema.String,
  address_state: Schema.String,
  orb_portal_url: Schema.optional(Schema.String),
  tax_id: Schema.optional(Schema.String),
  tax_id_type: Schema.optional(Schema.String),
  plan_details: Schema.optional(Schema.suspend(() => PlanDetailsSchema)),
});
export const BillingAccountStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "UNKNOWN",
    "active",
    "suspended",
    "deactivated",
    "deleted",
  ]);
export const PaymentSourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.String,
  card: Schema.optional(Schema.suspend(() => PaymentSourceBankCardSchema)),
});
export const PaymentSourceBankCardSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    last4: Schema.String,
    brand: Schema.optional(
      Schema.Literals([
        "amex",
        "diners",
        "discover",
        "jcb",
        "mastercard",
        "unionpay",
        "unknown",
        "visa",
      ]),
    ),
    exp_month: Schema.optional(Schema.Number),
    exp_year: Schema.optional(Schema.Number),
  });
export const BillingPaymentMethodSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "UNKNOWN",
    "none",
    "stripe",
    "direct_payment",
    "aws_mp",
    "azure_mp",
    "vercel_mp",
    "staff",
    "trial",
    "sponsorship",
  ]);
export const PlanDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  version: Schema.optional(Schema.suspend(() => PlanVersionSchema)),
});
export const PlanVersionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  major: Schema.Number,
  minor: Schema.Number,
});
export const CurrentUserAuthAccountSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.String,
    image: Schema.String,
    login: Schema.String,
    name: Schema.String,
    provider: Schema.suspend(() => IdentityProviderIdSchema),
  });
export const IdentityProviderIdSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "github",
    "google",
    "hasura",
    "microsoft",
    "microsoftv2",
    "vercelmp",
    "keycloak",
  ]);
export const OrganizationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  name: Schema.String,
  handle: Schema.String,
  plan: Schema.String,
  created_at: Schema.String,
  managed_by: Schema.String,
  updated_at: Schema.String,
  allow_hipaa_projects: Schema.optional(Schema.Boolean),
});
export const SnapshotSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  name: Schema.String,
  lsn: Schema.optional(Schema.String),
  timestamp: Schema.optional(Schema.String),
  source_branch_id: Schema.optional(Schema.String),
  created_at: Schema.String,
  expires_at: Schema.optional(Schema.String),
  manual: Schema.optional(Schema.Boolean),
});
export const BackupScheduleItemSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    frequency: Schema.String,
    hour: Schema.optional(Schema.Number),
    day: Schema.optional(Schema.Number),
    month: Schema.optional(Schema.Number),
    retention_seconds: Schema.optional(Schema.Number),
  });
