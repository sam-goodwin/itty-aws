import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden } from "../errors.ts";

// Input Schema
export interface V1ListAllProjectsInput {}
export const V1ListAllProjectsInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({ method: "GET", path: "/v1/projects" }),
) as unknown as Schema.Codec<V1ListAllProjectsInput>;

// Output Schema
export type V1ListAllProjectsOutput = {
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
}[];
export const V1ListAllProjectsOutput = /*@__PURE__*/ Schema.Array(
  Schema.Struct({
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
  }),
) as unknown as Schema.Codec<V1ListAllProjectsOutput>;

// The operation
/**
 * List all projects
 *
 * Returns a list of all projects you've previously created.
 */
export const v1ListAllProjects = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1ListAllProjectsInput,
  outputSchema: V1ListAllProjectsOutput,
  errors: [Forbidden] as const,
}));
