import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const DatabaseForkInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  databaseId: Schema.String.pipe(T.PathParam()),
  label: Schema.String,
  region: Schema.String,
  plan: Schema.String,
  vpc_id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  date: Schema.optional(Schema.String),
  time: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "POST", path: "/databases/{databaseId}/fork" }));
export type DatabaseForkInput = typeof DatabaseForkInput.Type;

// Output Schema
export const DatabaseForkOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  database: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      date_created: Schema.optional(Schema.String),
      plan: Schema.optional(Schema.String),
      plan_disk: Schema.optional(Schema.Number),
      plan_ram: Schema.optional(Schema.Number),
      plan_vcpus: Schema.optional(Schema.Number),
      plan_replicas: Schema.optional(Schema.Number),
      plan_brokers: Schema.optional(Schema.Number),
      region: Schema.optional(Schema.String),
      database_engine: Schema.optional(Schema.String),
      database_engine_version: Schema.optional(Schema.String),
      vpc_id: Schema.optional(Schema.String),
      status: Schema.optional(Schema.String),
      label: Schema.optional(Schema.String),
      tag: Schema.optional(Schema.String),
      dbname: Schema.optional(Schema.String),
      host: Schema.optional(Schema.String),
      public_host: Schema.optional(Schema.String),
      user: Schema.optional(Schema.String),
      password: Schema.optional(SensitiveString),
      access_key: Schema.optional(Schema.String),
      access_cert: Schema.optional(Schema.String),
      port: Schema.optional(Schema.String),
      sasl_port: Schema.optional(Schema.String),
      enable_kafka_rest: Schema.optional(Schema.Boolean),
      kafka_rest_uri: Schema.optional(Schema.Boolean),
      enable_schema_registry: Schema.optional(Schema.Boolean),
      schema_registry_uri: Schema.optional(Schema.Boolean),
      enable_kafka_connect: Schema.optional(Schema.Boolean),
      maintenance_dow: Schema.optional(Schema.String),
      maintenance_time: Schema.optional(Schema.String),
      backup_hour: Schema.optional(Schema.String),
      backup_minute: Schema.optional(Schema.String),
      latest_backup: Schema.optional(Schema.String),
      pending_charges: Schema.optional(Schema.Number),
      trusted_ips: Schema.optional(Schema.Array(Schema.String)),
      ca_certificate: Schema.optional(Schema.String),
      mysql_sql_modes: Schema.optional(Schema.Array(Schema.String)),
      mysql_require_primary_key: Schema.optional(Schema.Boolean),
      mysql_slow_query_log: Schema.optional(Schema.Boolean),
      mysql_long_query_time: Schema.optional(Schema.Number),
      pg_available_extensions: Schema.optional(Schema.Array(Schema.Unknown)),
      redis_eviction_policy: Schema.optional(Schema.String),
      eviction_policy: Schema.optional(Schema.String),
      cluster_time_zone: Schema.optional(Schema.String),
      read_replicas: Schema.optional(Schema.Array(Schema.Unknown)),
    }),
  ),
});
export type DatabaseForkOutput = typeof DatabaseForkOutput.Type;

// The operation
/**
 * Fork Managed Database
 *
 * Fork a Managed Database to a new subscription from a backup.
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 */
export const databaseFork = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DatabaseForkInput,
  outputSchema: DatabaseForkOutput,
  errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
}));
