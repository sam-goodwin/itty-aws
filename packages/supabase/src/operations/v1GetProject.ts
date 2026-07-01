import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1GetProjectInput {
  ref: string;
}
export const V1GetProjectInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ref: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/v1/projects/{ref}" }),
) as unknown as Schema.Codec<V1GetProjectInput>;

// Output Schema
export interface V1GetProjectOutput {
  id: string;
  ref: string;
  organization_id: string;
  organization_slug: string;
  name: string;
  region: string;
  created_at: string;
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
  database: {
    host: string;
    version: string;
    postgres_engine: string;
    release_channel: string;
  };
}
export const V1GetProjectOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<V1GetProjectOutput>;

// The operation
/**
 * Gets a specific project that belongs to the authenticated user
 *
 * @param ref - Project ref
 */
export const v1GetProject = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: V1GetProjectInput,
  outputSchema: V1GetProjectOutput,
  errors: [BadRequest, Forbidden] as const,
}));
