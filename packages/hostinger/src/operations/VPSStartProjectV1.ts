import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const VPSStartProjectV1Input = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    virtualMachineId: Schema.Number.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/api/vps/v1/virtual-machines/{virtualMachineId}/docker/{projectName}/start",
  }),
);
export type VPSStartProjectV1Input = typeof VPSStartProjectV1Input.Type;

// Output Schema
export const VPSStartProjectV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type VPSStartProjectV1Output = typeof VPSStartProjectV1Output.Type;

// The operation
/**
 * Start project
 *
 * Starts all services in a Docker Compose project that are currently stopped.
 * This operation brings up containers in the correct dependency order as defined in the compose file.
 * Use this to resume a project that was previously stopped or to start services after a system reboot.
 *
 * @param virtualMachineId - Virtual Machine ID
 * @param projectName - Docker Compose project name using alphanumeric characters, dashes, and underscores only
 */
export const VPSStartProjectV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VPSStartProjectV1Input,
  outputSchema: VPSStartProjectV1Output,
  errors: [UnprocessableEntity] as const,
}));
