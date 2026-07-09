import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const VPSUpdateProjectV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualMachineId: Schema.Number.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/vps/v1/virtual-machines/{virtualMachineId}/docker/{projectName}/update",
    }),
  );
export type VPSUpdateProjectV1Input = typeof VPSUpdateProjectV1Input.Type;

// Output Schema
export const VPSUpdateProjectV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type VPSUpdateProjectV1Output = typeof VPSUpdateProjectV1Output.Type;

// The operation
/**
 * Update project
 *
 * Updates a Docker Compose project by pulling the latest image versions and
 * recreating containers with new configurations.
 * This operation preserves data volumes while applying changes from the compose file.
 * Use this to deploy application updates, apply configuration changes, or
 * refresh container images to their latest versions.
 *
 * @param virtualMachineId - Virtual Machine ID
 * @param projectName - Docker Compose project name using alphanumeric characters, dashes, and underscores only
 */
export const VPSUpdateProjectV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VPSUpdateProjectV1Input,
  outputSchema: VPSUpdateProjectV1Output,
  errors: [UnprocessableEntity] as const,
}));
