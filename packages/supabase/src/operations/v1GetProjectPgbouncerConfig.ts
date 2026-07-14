import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface V1GetProjectPgbouncerConfigInput {
  ref: string;
}
export const V1GetProjectPgbouncerConfigInput =
  /*@__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/projects/{ref}/config/database/pgbouncer",
    }),
  ) as unknown as Schema.Codec<V1GetProjectPgbouncerConfigInput>;

// Output Schema
export interface V1GetProjectPgbouncerConfigOutput {
  default_pool_size?: number;
  ignore_startup_parameters?: string;
  max_client_conn?: number;
  pool_mode?: "transaction" | "session" | "statement";
  connection_string?: Redacted.Redacted<string>;
  server_idle_timeout?: number;
  server_lifetime?: number;
  query_wait_timeout?: number;
  reserve_pool_size?: number;
}
export const V1GetProjectPgbouncerConfigOutput =
  /*@__PURE__*/ Schema.Struct({
    default_pool_size: Schema.optional(Schema.Number),
    ignore_startup_parameters: Schema.optional(Schema.String),
    max_client_conn: Schema.optional(Schema.Number),
    pool_mode: Schema.optional(
      Schema.Literals(["transaction", "session", "statement"]),
    ),
    connection_string: Schema.optional(SensitiveOutputString),
    server_idle_timeout: Schema.optional(Schema.Number),
    server_lifetime: Schema.optional(Schema.Number),
    query_wait_timeout: Schema.optional(Schema.Number),
    reserve_pool_size: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<V1GetProjectPgbouncerConfigOutput>;

// The operation
/**
 * Get project's pgbouncer config
 *
 * @param ref - Project ref
 */
export const v1GetProjectPgbouncerConfig = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1GetProjectPgbouncerConfigInput,
  outputSchema: V1GetProjectPgbouncerConfigOutput,
  errors: [BadRequest, Forbidden] as const,
}));
