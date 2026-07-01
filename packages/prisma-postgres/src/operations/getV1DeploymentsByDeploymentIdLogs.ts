import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface GetV1DeploymentsByDeploymentIdLogsInput {
  deploymentId: string;
  tail?: number;
  from_start?: "true" | "false";
  cursor?: string;
}
export const GetV1DeploymentsByDeploymentIdLogsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deploymentId: Schema.String.pipe(T.PathParam()),
    tail: Schema.optional(Schema.Number),
    from_start: Schema.optional(Schema.Literals(["true", "false"])),
    cursor: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/deployments/{deploymentId}/logs" }),
  ) as unknown as Schema.Codec<GetV1DeploymentsByDeploymentIdLogsInput>;

// Output Schema
export type GetV1DeploymentsByDeploymentIdLogsOutput = void;
export const GetV1DeploymentsByDeploymentIdLogsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<GetV1DeploymentsByDeploymentIdLogsOutput>;

// The operation
/**
 * Stream deployment logs via WebSocket
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Upgrades to a WebSocket connection that streams log output for the specified deployment. Each message is a JSON object with `type: "log"` (log text + byte metadata) or `type: "terminal"` (end-of-segment signal with reconnect cursor). The stream ends after 10 minutes; reconnect with the `cursor` query parameter to continue.
 */
export const getV1DeploymentsByDeploymentIdLogs =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetV1DeploymentsByDeploymentIdLogsInput,
    outputSchema: GetV1DeploymentsByDeploymentIdLogsOutput,
    errors: [Forbidden, NotFound] as const,
  }));
