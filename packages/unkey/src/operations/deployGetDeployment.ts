import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeployGetDeploymentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deploymentId: Schema.String,
  }).pipe(T.Http({ method: "POST", path: "/v2/deploy.getDeployment" }));
export type DeployGetDeploymentInput = typeof DeployGetDeploymentInput.Type;

// Output Schema
export const DeployGetDeploymentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    meta: Schema.Struct({
      requestId: Schema.String,
    }),
    data: Schema.Struct({
      id: Schema.String,
      status: Schema.Literals([
        "UNSPECIFIED",
        "PENDING",
        "STARTING",
        "BUILDING",
        "DEPLOYING",
        "NETWORK",
        "FINALIZING",
        "READY",
        "FAILED",
        "SKIPPED",
        "AWAITING_APPROVAL",
        "STOPPED",
        "SUPERSEDED",
        "CANCELLED",
      ]),
      errorMessage: Schema.optional(Schema.String),
      hostnames: Schema.optional(Schema.Array(Schema.String)),
      steps: Schema.optional(
        Schema.Array(
          Schema.Struct({
            status: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
            errorMessage: Schema.optional(Schema.String),
            createdAt: Schema.optional(Schema.Number),
          }),
        ),
      ),
    }),
  });
export type DeployGetDeploymentOutput = typeof DeployGetDeploymentOutput.Type;

// The operation
/**
 * Get deployment
 *
 * **INTERNAL** - This endpoint is internal and may change without notice.
 * Not recommended for production use.
 * Retrieves deployment information including status, error messages, and steps.
 * **Authentication**: Requires a valid root key with appropriate permissions.
 */
export const deployGetDeployment = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeployGetDeploymentInput,
  outputSchema: DeployGetDeploymentOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
