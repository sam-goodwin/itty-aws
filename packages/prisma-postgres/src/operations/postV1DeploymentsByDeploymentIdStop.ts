import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, Conflict } from "../errors.ts";

// Input Schema
export const PostV1DeploymentsByDeploymentIdStopInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deploymentId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "POST", path: "/v1/deployments/{deploymentId}/stop" }),
  );
export type PostV1DeploymentsByDeploymentIdStopInput =
  typeof PostV1DeploymentsByDeploymentIdStopInput.Type;

// Output Schema
export const PostV1DeploymentsByDeploymentIdStopOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PostV1DeploymentsByDeploymentIdStopOutput =
  typeof PostV1DeploymentsByDeploymentIdStopOutput.Type;

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
