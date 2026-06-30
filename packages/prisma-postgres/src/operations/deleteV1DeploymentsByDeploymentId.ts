import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, Conflict } from "../errors.ts";

// Input Schema
export interface DeleteV1DeploymentsByDeploymentIdInput {
  deploymentId: string;
}
export const DeleteV1DeploymentsByDeploymentIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deploymentId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/v1/deployments/{deploymentId}" }),
  ) as unknown as Schema.Codec<DeleteV1DeploymentsByDeploymentIdInput>;

// Output Schema
export type DeleteV1DeploymentsByDeploymentIdOutput = void;
export const DeleteV1DeploymentsByDeploymentIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteV1DeploymentsByDeploymentIdOutput>;

// The operation
/**
 * Delete deployment
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Permanently deletes the deployment, its metadata, and any associated VM. The deployment must be stopped or in the `new` state before it can be deleted.
 */
export const deleteV1DeploymentsByDeploymentId =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteV1DeploymentsByDeploymentIdInput,
    outputSchema: DeleteV1DeploymentsByDeploymentIdOutput,
    errors: [Forbidden, NotFound, Conflict] as const,
  }));
