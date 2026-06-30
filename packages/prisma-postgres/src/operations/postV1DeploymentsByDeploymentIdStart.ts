import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, Conflict } from "../errors.ts";

// Input Schema
export const PostV1DeploymentsByDeploymentIdStartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deploymentId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "POST", path: "/v1/deployments/{deploymentId}/start" }),
  );
export type PostV1DeploymentsByDeploymentIdStartInput =
  typeof PostV1DeploymentsByDeploymentIdStartInput.Type;

// Output Schema
export const PostV1DeploymentsByDeploymentIdStartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Struct({
      previewDomain: Schema.String,
    }),
  });
export type PostV1DeploymentsByDeploymentIdStartOutput =
  typeof PostV1DeploymentsByDeploymentIdStartOutput.Type;

// The operation
/**
 * Start deployment
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Requests VM creation and startup for the deployment. The artifact must be uploaded before calling this endpoint. Returns a preview domain that becomes reachable once the VM is running. Poll the status endpoint until `running` is reached.
 */
export const postV1DeploymentsByDeploymentIdStart =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostV1DeploymentsByDeploymentIdStartInput,
    outputSchema: PostV1DeploymentsByDeploymentIdStartOutput,
    errors: [Forbidden, NotFound, Conflict] as const,
  }));
