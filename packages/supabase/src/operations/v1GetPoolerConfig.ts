import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface V1GetPoolerConfigInput {
  ref: string;
}
export const V1GetPoolerConfigInput = /*@__PURE__*/ Schema.Struct({
  ref: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/v1/projects/{ref}/config/database/pooler" }),
) as unknown as Schema.Codec<V1GetPoolerConfigInput>;

// Output Schema
export type V1GetPoolerConfigOutput = {
  identifier: string;
  database_type: "PRIMARY" | "READ_REPLICA";
  is_using_scram_auth: boolean;
  db_user: string;
  db_host: string;
  db_port: number;
  db_name: string;
  connection_string: Redacted.Redacted<string>;
  connectionString: Redacted.Redacted<string>;
  default_pool_size: number | null;
  max_client_conn: number | null;
  pool_mode: "transaction" | "session";
}[];
export const V1GetPoolerConfigOutput = /*@__PURE__*/ Schema.Array(
  Schema.Struct({
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
  }),
) as unknown as Schema.Codec<V1GetPoolerConfigOutput>;

// The operation
/**
 * Gets project's supavisor config
 *
 * @param ref - Project ref
 */
export const v1GetPoolerConfig = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1GetPoolerConfigInput,
  outputSchema: V1GetPoolerConfigOutput,
  errors: [BadRequest, Forbidden] as const,
}));
