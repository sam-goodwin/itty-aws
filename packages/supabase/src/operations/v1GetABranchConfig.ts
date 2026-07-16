import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface V1GetABranchConfigInput {
  branch_id_or_ref: string;
}
export const V1GetABranchConfigInput =
  /*@__PURE__*/ Schema.Struct({
    branch_id_or_ref: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/branches/{branch_id_or_ref}" }),
  ) as unknown as Schema.Codec<V1GetABranchConfigInput>;

// Output Schema
export interface V1GetABranchConfigOutput {
  ref: string;
  postgres_version: string;
  postgres_engine: string;
  release_channel: string;
  status:
    | "INACTIVE"
    | "ACTIVE_HEALTHY"
    | "ACTIVE_UNHEALTHY"
    | "COMING_UP"
    | "UNKNOWN"
    | "GOING_DOWN"
    | "INIT_FAILED"
    | "REMOVED"
    | "RESTORING"
    | "UPGRADING"
    | "PAUSING"
    | "RESTORE_FAILED"
    | "RESTARTING"
    | "PAUSE_FAILED"
    | "RESIZING";
  db_host: string;
  db_port: number;
  db_user?: string;
  db_pass?: string;
  jwt_secret?: Redacted.Redacted<string>;
}
export const V1GetABranchConfigOutput =
  /*@__PURE__*/ Schema.Struct({
    ref: Schema.String,
    postgres_version: Schema.String,
    postgres_engine: Schema.String,
    release_channel: Schema.String,
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
    db_host: Schema.String,
    db_port: Schema.Number,
    db_user: Schema.optional(Schema.String),
    db_pass: Schema.optional(Schema.String),
    jwt_secret: Schema.optional(SensitiveOutputString),
  }) as unknown as Schema.Codec<V1GetABranchConfigOutput>;

// The operation
/**
 * Get database branch config
 *
 * Fetches configurations of the specified database branch
 *
 * @param branch_id_or_ref - Branch ref or deprecated branch ID
 */
export const v1GetABranchConfig = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1GetABranchConfigInput,
  outputSchema: V1GetABranchConfigOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
