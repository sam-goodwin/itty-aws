import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeployCreateDeploymentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.String,
    app: Schema.String,
    keyspaceId: Schema.optional(Schema.String),
    branch: Schema.String,
    environmentSlug: Schema.String,
    dockerImage: Schema.String,
    gitCommit: Schema.optional(
      Schema.Struct({
        commitSha: Schema.optional(Schema.String),
        commitMessage: Schema.optional(Schema.String),
        authorHandle: Schema.optional(Schema.String),
        authorAvatarUrl: Schema.optional(Schema.String),
        timestamp: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(T.Http({ method: "POST", path: "/v2/deploy.createDeployment" }));
export type DeployCreateDeploymentInput =
  typeof DeployCreateDeploymentInput.Type;

// Output Schema
export const DeployCreateDeploymentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    meta: Schema.Struct({
      requestId: Schema.String,
    }),
    data: Schema.Struct({
      deploymentId: Schema.String,
    }),
  });
export type DeployCreateDeploymentOutput =
  typeof DeployCreateDeploymentOutput.Type;

// The operation
/**
 * Create deployment
 *
 * **INTERNAL** - This endpoint is internal and may change without notice.
 * Not recommended for production use.
 * Creates a new deployment for a project using either a pre-built Docker image or build context.
 * **Authentication**: Requires a valid root key with appropriate permissions.
 */
export const deployCreateDeployment = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeployCreateDeploymentInput,
    outputSchema: DeployCreateDeploymentOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
