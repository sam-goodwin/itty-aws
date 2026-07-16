import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface ListDatabasesInput {
  organization: string;
  q?: string;
  page?: number;
  per_page?: number;
}
export const ListDatabasesInput = /*@__PURE__*/ Schema.Struct({
  organization: Schema.String.pipe(T.PathParam()),
  q: Schema.optional(Schema.String),
  page: Schema.optional(Schema.Number),
  per_page: Schema.optional(Schema.Number),
}).pipe(
  T.Http({ method: "GET", path: "/organizations/{organization}/databases" }),
) as unknown as Schema.Codec<ListDatabasesInput>;

// Output Schema
export interface ListDatabasesOutput {
  type: string;
  current_page: number;
  next_page: number | null;
  next_page_url: string | null;
  prev_page: number | null;
  prev_page_url: string | null;
  data: ReadonlyArray<{
    id: string;
    url: string;
    branches_url: string;
    branches_count?: number;
    open_schema_recommendations_count?: number;
    development_branches_count?: number;
    production_branches_count?: number;
    issues_count?: number | null;
    multiple_admins_required_for_deletion?: boolean;
    ready: boolean;
    at_backup_restore_branches_limit?: boolean;
    at_development_branch_usage_limit?: boolean;
    data_import?: {
      state: string;
      import_check_errors: string;
      started_at: string | null;
      finished_at: string | null;
      data_source: { hostname: string; port: number; database: string };
    } | null;
    region: {
      id: string;
      provider: string;
      enabled: boolean;
      public_ip_addresses: ReadonlyArray<string>;
      display_name: string;
      location: string;
      slug: string;
      current_default: boolean;
      mysql_supported: boolean;
      postgresql_supported: boolean;
    };
    html_url: string;
    name: string;
    state:
      | "pending"
      | "importing"
      | "sleep_in_progress"
      | "sleeping"
      | "awakening"
      | "import_ready"
      | "ready";
    sharded?: boolean;
    default_branch_shard_count?: number;
    default_branch_read_only_regions_count?: number;
    default_branch_table_count?: number;
    default_branch?: string;
    require_approval_for_deploy?: boolean;
    resizing?: boolean;
    resize_queued?: boolean;
    config_changing?: boolean;
    config_change_queued?: boolean;
    allow_data_branching?: boolean;
    foreign_keys_enabled?: boolean;
    automatic_migrations?: boolean | null;
    restrict_branch_region?: boolean;
    insights_raw_queries?: boolean;
    plan?: string;
    insights_enabled?: boolean;
    production_branch_web_console?: boolean;
    migration_table_name?: string | null;
    migration_framework?: string | null;
    created_at: string;
    updated_at: string;
    schema_last_updated_at?: string | null;
    kind: "mysql" | "postgresql";
  }>;
}
export const ListDatabasesOutput = /*@__PURE__*/ Schema.Struct({
  type: Schema.String,
  current_page: Schema.Number,
  next_page: Schema.NullOr(Schema.Number),
  next_page_url: Schema.NullOr(Schema.String),
  prev_page: Schema.NullOr(Schema.Number),
  prev_page_url: Schema.NullOr(Schema.String),
  data: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      url: Schema.String,
      branches_url: Schema.String,
      branches_count: Schema.optional(Schema.Number),
      open_schema_recommendations_count: Schema.optional(Schema.Number),
      development_branches_count: Schema.optional(Schema.Number),
      production_branches_count: Schema.optional(Schema.Number),
      issues_count: Schema.optional(Schema.NullOr(Schema.Number)),
      multiple_admins_required_for_deletion: Schema.optional(Schema.Boolean),
      ready: Schema.Boolean,
      at_backup_restore_branches_limit: Schema.optional(Schema.Boolean),
      at_development_branch_usage_limit: Schema.optional(Schema.Boolean),
      data_import: Schema.optional(
        Schema.NullOr(
          Schema.Struct({
            state: Schema.String,
            import_check_errors: Schema.String,
            started_at: Schema.NullOr(Schema.String),
            finished_at: Schema.NullOr(Schema.String),
            data_source: Schema.Struct({
              hostname: Schema.String,
              port: Schema.Number,
              database: Schema.String,
            }),
          }),
        ),
      ),
      region: Schema.Struct({
        id: Schema.String,
        provider: Schema.String,
        enabled: Schema.Boolean,
        public_ip_addresses: Schema.Array(Schema.String),
        display_name: Schema.String,
        location: Schema.String,
        slug: Schema.String,
        current_default: Schema.Boolean,
        mysql_supported: Schema.Boolean,
        postgresql_supported: Schema.Boolean,
      }),
      html_url: Schema.String,
      name: Schema.String,
      state: Schema.Literals([
        "pending",
        "importing",
        "sleep_in_progress",
        "sleeping",
        "awakening",
        "import_ready",
        "ready",
      ]),
      sharded: Schema.optional(Schema.Boolean),
      default_branch_shard_count: Schema.optional(Schema.Number),
      default_branch_read_only_regions_count: Schema.optional(Schema.Number),
      default_branch_table_count: Schema.optional(Schema.Number),
      default_branch: Schema.optional(Schema.String),
      require_approval_for_deploy: Schema.optional(Schema.Boolean),
      resizing: Schema.optional(Schema.Boolean),
      resize_queued: Schema.optional(Schema.Boolean),
      config_changing: Schema.optional(Schema.Boolean),
      config_change_queued: Schema.optional(Schema.Boolean),
      allow_data_branching: Schema.optional(Schema.Boolean),
      foreign_keys_enabled: Schema.optional(Schema.Boolean),
      automatic_migrations: Schema.optional(Schema.NullOr(Schema.Boolean)),
      restrict_branch_region: Schema.optional(Schema.Boolean),
      insights_raw_queries: Schema.optional(Schema.Boolean),
      plan: Schema.optional(Schema.String),
      insights_enabled: Schema.optional(Schema.Boolean),
      production_branch_web_console: Schema.optional(Schema.Boolean),
      migration_table_name: Schema.optional(Schema.NullOr(Schema.String)),
      migration_framework: Schema.optional(Schema.NullOr(Schema.String)),
      created_at: Schema.String,
      updated_at: Schema.String,
      schema_last_updated_at: Schema.optional(Schema.NullOr(Schema.String)),
      kind: Schema.Literals(["mysql", "postgresql"]),
    }),
  ),
}) as unknown as Schema.Codec<ListDatabasesOutput>;

// The operation
/**
 * List databases
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param q - Search term to filter databases by name
 * @param page - If provided, specifies the page offset of returned results
 * @param per_page - If provided, specifies the number of returned results
 */
export const listDatabases = /*@__PURE__*/ API.makePaginated(() => ({
  inputSchema: ListDatabasesInput,
  outputSchema: ListDatabasesOutput,
  errors: [Forbidden, NotFound] as const,
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "next_page",
    items: "data",
  },
}));
