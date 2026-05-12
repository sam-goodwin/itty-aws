import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const ListDatabasesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  label: Schema.optional(Schema.String),
  tag: Schema.optional(Schema.String),
  region: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/databases" }));
export type ListDatabasesInput = typeof ListDatabasesInput.Type;

// Output Schema
export const ListDatabasesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  databases: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        date_created: Schema.optional(Schema.String),
        plan: Schema.optional(Schema.String),
        plan_disk: Schema.optional(Schema.Number),
        plan_ram: Schema.optional(Schema.Number),
        plan_vcpus: Schema.optional(Schema.Number),
        plan_replicas: Schema.optional(Schema.Number),
        region: Schema.optional(Schema.String),
        database_engine: Schema.optional(Schema.String),
        database_engine_version: Schema.optional(Schema.String),
        vpc_id: Schema.optional(Schema.String),
        status: Schema.optional(Schema.String),
        label: Schema.optional(Schema.String),
        tag: Schema.optional(Schema.String),
        dbname: Schema.optional(Schema.String),
        ferretdb_credentials: Schema.optional(
          Schema.Struct({
            host: Schema.optional(Schema.String),
            port: Schema.optional(Schema.Unknown),
            username: Schema.optional(Schema.String),
            password: Schema.optional(SensitiveString),
            public_ip: Schema.optional(Schema.String),
            private_ip: Schema.optional(Schema.String),
          }),
        ),
        host: Schema.optional(Schema.String),
        public_host: Schema.optional(Schema.String),
        user: Schema.optional(Schema.String),
        password: Schema.optional(SensitiveString),
        port: Schema.optional(Schema.String),
        maintenance_dow: Schema.optional(Schema.String),
        maintenance_time: Schema.optional(Schema.String),
        latest_backup: Schema.optional(Schema.String),
        trusted_ips: Schema.optional(Schema.Array(Schema.String)),
        mysql_sql_modes: Schema.optional(Schema.Array(Schema.String)),
        mysql_require_primary_key: Schema.optional(Schema.Boolean),
        mysql_slow_query_log: Schema.optional(Schema.Boolean),
        mysql_long_query_time: Schema.optional(Schema.Number),
        pg_available_extensions: Schema.optional(Schema.Array(Schema.Unknown)),
        redis_eviction_policy: Schema.optional(Schema.String),
        cluster_time_zone: Schema.optional(Schema.String),
        read_replicas: Schema.optional(Schema.Array(Schema.Unknown)),
      }),
    ),
  ),
  meta: Schema.optional(
    Schema.Struct({
      total: Schema.optional(Schema.Number),
    }),
  ),
});
export type ListDatabasesOutput = typeof ListDatabasesOutput.Type;

// The operation
/**
 * List Managed Databases
 *
 * List all Managed Databases in your account.
 *
 * @param label - Filter by label.
 * @param tag - Filter by specific tag.
 * @param region - Filter by [Region id](#operation/list-regions).
 */
export const listDatabases = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListDatabasesInput,
  outputSchema: ListDatabasesOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
