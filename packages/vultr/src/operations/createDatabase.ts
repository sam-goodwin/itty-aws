import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../errors.ts";

// Input Schema
export const CreateDatabaseInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  database_engine: Schema.String,
  database_engine_version: Schema.String,
  region: Schema.String,
  plan: Schema.String,
  label: Schema.String,
  tag: Schema.optional(Schema.String),
  vpc_id: Schema.optional(Schema.String),
  maintenance_dow: Schema.optional(Schema.String),
  maintenance_time: Schema.optional(Schema.String),
  trusted_ips: Schema.optional(Schema.Array(Schema.String)),
  mysql_sql_modes: Schema.optional(Schema.Array(Schema.String)),
  mysql_require_primary_key: Schema.optional(Schema.Boolean),
  mysql_slow_query_log: Schema.optional(Schema.Boolean),
  mysql_long_query_time: Schema.optional(Schema.Number),
  redis_eviction_policy: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "POST", path: "/databases" }));
export type CreateDatabaseInput = typeof CreateDatabaseInput.Type;

// Output Schema
export const CreateDatabaseOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CreateDatabaseOutput = typeof CreateDatabaseOutput.Type;

// The operation
/**
 * Create Managed Database
 *
 * Create a new Managed Database in a `region` with the desired `plan`. Supply optional attributes as desired.
 */
export const createDatabase = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateDatabaseInput,
  outputSchema: CreateDatabaseOutput,
  errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
}));
