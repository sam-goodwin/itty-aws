import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface GetV1DeploymentsByDeploymentIdInput {
  deploymentId: string;
}
export const GetV1DeploymentsByDeploymentIdInput =
  /*@__PURE__*/ Schema.Struct({
    deploymentId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/deployments/{deploymentId}" }),
  ) as unknown as Schema.Codec<GetV1DeploymentsByDeploymentIdInput>;

// Output Schema
export interface GetV1DeploymentsByDeploymentIdOutput {
  data: {
    id: string;
    type: string;
    url: string;
    foundryVersionId: string;
    status: string;
    previewDomain: string | null;
    envVars?: Record<string, string>;
    portMapping?: { http?: number };
    createdAt: string;
  };
}
export const GetV1DeploymentsByDeploymentIdOutput =
  /*@__PURE__*/ Schema.Struct({
    data: Schema.Struct({
      id: Schema.String,
      type: Schema.String,
      url: Schema.String,
      foundryVersionId: Schema.String,
      status: Schema.String,
      previewDomain: Schema.NullOr(Schema.String),
      envVars: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      portMapping: Schema.optional(
        Schema.Struct({
          http: Schema.optional(Schema.Number),
        }),
      ),
      createdAt: Schema.String,
    }),
  }) as unknown as Schema.Codec<GetV1DeploymentsByDeploymentIdOutput>;

// The operation
/**
 * Get deployment
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Returns a deployment by ID, including its current status derived from the underlying VM state.
 */
export const getV1DeploymentsByDeploymentId =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GetV1DeploymentsByDeploymentIdInput,
    outputSchema: GetV1DeploymentsByDeploymentIdOutput,
    errors: [Forbidden, NotFound] as const,
  }));
