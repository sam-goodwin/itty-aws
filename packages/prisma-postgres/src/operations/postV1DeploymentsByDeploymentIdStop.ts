import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, Conflict } from "../errors.ts";

// Input Schema
export interface PostV1DeploymentsByDeploymentIdStopInput {
  deploymentId: string;
}
export const PostV1DeploymentsByDeploymentIdStopInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deploymentId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "POST", path: "/v1/deployments/{deploymentId}/stop" }),
  ) as unknown as Schema.Codec<PostV1DeploymentsByDeploymentIdStopInput>;

// Output Schema
export type PostV1DeploymentsByDeploymentIdStopOutput = void;
export const PostV1DeploymentsByDeploymentIdStopOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PostV1DeploymentsByDeploymentIdStopOutput>;

// The operation
/**
 * Stop deployment
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Requests VM shutdown for the deployment. The deployment record and metadata are retained. Poll the status endpoint until `stopped` is reached.
 */
export const postV1DeploymentsByDeploymentIdStop =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostV1DeploymentsByDeploymentIdStopInput,
    outputSchema: PostV1DeploymentsByDeploymentIdStopOutput,
    errors: [Forbidden, NotFound, Conflict] as const,
  }));
