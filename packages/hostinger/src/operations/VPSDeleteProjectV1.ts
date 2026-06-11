import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const VPSDeleteProjectV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualMachineId: Schema.Number.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/vps/v1/virtual-machines/{virtualMachineId}/docker/{projectName}/down",
    }),
  );
export type VPSDeleteProjectV1Input = typeof VPSDeleteProjectV1Input.Type;

// Output Schema
export const VPSDeleteProjectV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type VPSDeleteProjectV1Output = typeof VPSDeleteProjectV1Output.Type;

// The operation
/**
 * Delete project
 *
 * Completely removes a Docker Compose project from the virtual machine, stopping all containers and cleaning up
 * associated resources including networks, volumes, and images.
 * This operation is irreversible and will delete all project data.
 * Use this when you want to permanently remove a project and free up system resources.
 *
 * @param virtualMachineId - Virtual Machine ID
 * @param projectName - Docker Compose project name using alphanumeric characters, dashes, and underscores only
 */
export const VPSDeleteProjectV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VPSDeleteProjectV1Input,
  outputSchema: VPSDeleteProjectV1Output,
  errors: [UnprocessableEntity] as const,
}));
