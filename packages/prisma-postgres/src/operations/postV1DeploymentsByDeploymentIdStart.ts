import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, Conflict } from "../errors.ts";

// Input Schema
export interface PostV1DeploymentsByDeploymentIdStartInput {
  deploymentId: string;
}
export const PostV1DeploymentsByDeploymentIdStartInput =
  /*@__PURE__*/ Schema.Struct({
    deploymentId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "POST", path: "/v1/deployments/{deploymentId}/start" }),
  ) as unknown as Schema.Codec<PostV1DeploymentsByDeploymentIdStartInput>;

// Output Schema
export interface PostV1DeploymentsByDeploymentIdStartOutput {
  data: { previewDomain: string };
}
export const PostV1DeploymentsByDeploymentIdStartOutput =
  /*@__PURE__*/ Schema.Struct({
    data: Schema.Struct({
      previewDomain: Schema.String,
    }),
  }) as unknown as Schema.Codec<PostV1DeploymentsByDeploymentIdStartOutput>;

// The operation
/**
 * Start deployment
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Requests VM creation and startup for the deployment. The artifact must be uploaded before calling this endpoint. Returns a preview domain that becomes reachable once the VM is running. Poll the status endpoint until `running` is reached.
 */
export const postV1DeploymentsByDeploymentIdStart =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PostV1DeploymentsByDeploymentIdStartInput,
    outputSchema: PostV1DeploymentsByDeploymentIdStartOutput,
    errors: [Forbidden, NotFound, Conflict] as const,
  }));
