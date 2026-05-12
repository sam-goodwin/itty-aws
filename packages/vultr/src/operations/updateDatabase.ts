import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const UpdateDatabaseInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  databaseId: Schema.String.pipe(T.PathParam()),
  region: Schema.optional(Schema.String),
  plan: Schema.optional(Schema.String),
  label: Schema.optional(Schema.String),
  tag: Schema.optional(Schema.String),
  vpc_id: Schema.optional(Schema.String),
  maintenance_dow: Schema.optional(Schema.String),
  maintenance_time: Schema.optional(Schema.String),
  backup_hour: Schema.optional(Schema.String),
  backup_minute: Schema.optional(Schema.String),
  pending_charges: Schema.optional(Schema.Number),
  cluster_time_zone: Schema.optional(Schema.String),
  trusted_ips: Schema.optional(Schema.Array(Schema.String)),
  mysql_sql_modes: Schema.optional(Schema.Array(Schema.String)),
  mysql_require_primary_key: Schema.optional(Schema.Boolean),
  mysql_slow_query_log: Schema.optional(Schema.Boolean),
  mysql_long_query_time: Schema.optional(Schema.Number),
  redis_eviction_policy: Schema.optional(Schema.String),
  eviction_policy: Schema.optional(Schema.String),
  enable_kafka_rest: Schema.optional(Schema.Boolean),
  enable_schema_registry: Schema.optional(Schema.Boolean),
  enable_kafka_connect: Schema.optional(Schema.Boolean),
}).pipe(T.Http({ method: "PUT", path: "/databases/{databaseId}" }));
export type UpdateDatabaseInput = typeof UpdateDatabaseInput.Type;

// Output Schema
export const UpdateDatabaseOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateDatabaseOutput = typeof UpdateDatabaseOutput.Type;

// The operation
/**
 * Update Managed Database
 *
 * Update information for a Managed Database. All attributes are optional. If not set, the attributes will retain their original values.
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 */
export const updateDatabase = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateDatabaseInput,
  outputSchema: UpdateDatabaseOutput,
  errors: [BadRequest, NotFound, UnprocessableEntity] as const,
}));
