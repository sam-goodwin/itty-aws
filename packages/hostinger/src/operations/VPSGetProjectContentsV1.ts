import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const VPSGetProjectContentsV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualMachineId: Schema.Number.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/vps/v1/virtual-machines/{virtualMachineId}/docker/{projectName}",
    }),
  );
export type VPSGetProjectContentsV1Input =
  typeof VPSGetProjectContentsV1Input.Type;

// Output Schema
export const VPSGetProjectContentsV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    content: Schema.optional(Schema.String),
    environment: Schema.optional(Schema.NullOr(Schema.String)),
  });
export type VPSGetProjectContentsV1Output =
  typeof VPSGetProjectContentsV1Output.Type;

// The operation
/**
 * Get project contents
 *
 * Retrieves the complete project information including the docker-compose.yml
 * file contents, project metadata, and current deployment status.
 * This endpoint provides the full configuration and state details of a specific Docker Compose project.
 * Use this to inspect project settings, review the compose file, or check the overall project health.
 *
 * @param virtualMachineId - Virtual Machine ID
 * @param projectName - Docker Compose project name using alphanumeric characters, dashes, and underscores only
 */
export const VPSGetProjectContentsV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VPSGetProjectContentsV1Input,
    outputSchema: VPSGetProjectContentsV1Output,
    errors: [UnprocessableEntity] as const,
  }),
);
