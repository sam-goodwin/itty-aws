import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const VPSRestartProjectV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualMachineId: Schema.Number.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/vps/v1/virtual-machines/{virtualMachineId}/docker/{projectName}/restart",
    }),
  );
export type VPSRestartProjectV1Input = typeof VPSRestartProjectV1Input.Type;

// Output Schema
export const VPSRestartProjectV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type VPSRestartProjectV1Output = typeof VPSRestartProjectV1Output.Type;

// The operation
/**
 * Restart project
 *
 * Restarts all services in a Docker Compose project by stopping and starting
 * containers in the correct dependency order.
 * This operation preserves data volumes and network configurations while refreshing the running containers.
 * Use this to apply configuration changes or recover from service failures.
 *
 * @param virtualMachineId - Virtual Machine ID
 * @param projectName - Docker Compose project name using alphanumeric characters, dashes, and underscores only
 */
export const VPSRestartProjectV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VPSRestartProjectV1Input,
  outputSchema: VPSRestartProjectV1Output,
  errors: [UnprocessableEntity] as const,
}));
