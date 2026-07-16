import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1GetServicesHealthInput {
  ref: string;
  services: string;
  timeout_ms?: number;
}
export const V1GetServicesHealthInput =
  /*@__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    services: Schema.String,
    timeout_ms: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/projects/{ref}/health" }),
  ) as unknown as Schema.Codec<V1GetServicesHealthInput>;

// Output Schema
export type V1GetServicesHealthOutput = {
  name:
    | "auth"
    | "db"
    | "db_postgres_user"
    | "pooler"
    | "realtime"
    | "rest"
    | "storage"
    | "pg_bouncer";
  healthy: boolean;
  status: "COMING_UP" | "ACTIVE_HEALTHY" | "UNHEALTHY";
  info?:
    | { name: "GoTrue"; version: string; description: string }
    | {
        healthy: boolean;
        db_connected: boolean;
        replication_connected: boolean;
        connected_cluster: number;
      }
    | { db_schema: string };
  error?: string;
}[];
export const V1GetServicesHealthOutput =
  /*@__PURE__*/ Schema.Array(
    Schema.Struct({
      name: Schema.Literals([
        "auth",
        "db",
        "db_postgres_user",
        "pooler",
        "realtime",
        "rest",
        "storage",
        "pg_bouncer",
      ]),
      healthy: Schema.Boolean,
      status: Schema.Literals(["COMING_UP", "ACTIVE_HEALTHY", "UNHEALTHY"]),
      info: Schema.optional(
        Schema.Union([
          Schema.Struct({
            name: Schema.Literals(["GoTrue"]),
            version: Schema.String,
            description: Schema.String,
          }),
          Schema.Struct({
            healthy: Schema.Boolean,
            db_connected: Schema.Boolean,
            replication_connected: Schema.Boolean,
            connected_cluster: Schema.Number,
          }),
          Schema.Struct({
            db_schema: Schema.String,
          }),
        ]),
      ),
      error: Schema.optional(Schema.String),
    }),
  ) as unknown as Schema.Codec<V1GetServicesHealthOutput>;

// The operation
/**
 * Gets project's service health status
 *
 * @param ref - Project ref
 */
export const v1GetServicesHealth = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1GetServicesHealthInput,
  outputSchema: V1GetServicesHealthOutput,
  errors: [BadRequest, Forbidden] as const,
}));
