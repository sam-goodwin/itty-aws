import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const VPSStopProjectV1Input = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  virtualMachineId: Schema.Number.pipe(T.PathParam()),
  projectName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/api/vps/v1/virtual-machines/{virtualMachineId}/docker/{projectName}/stop",
  }),
);
export type VPSStopProjectV1Input = typeof VPSStopProjectV1Input.Type;

// Output Schema
export const VPSStopProjectV1Output = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  },
);
export type VPSStopProjectV1Output = typeof VPSStopProjectV1Output.Type;

// The operation
/**
 * Stop project
 *
 * Stops all running services in a Docker Compose project while preserving
 * container configurations and data volumes.
 * This operation gracefully shuts down containers in reverse dependency order.
 * Use this to temporarily halt a project without removing data or configurations.
 *
 * @param virtualMachineId - Virtual Machine ID
 * @param projectName - Docker Compose project name using alphanumeric characters, dashes, and underscores only
 */
export const VPSStopProjectV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VPSStopProjectV1Input,
  outputSchema: VPSStopProjectV1Output,
  errors: [UnprocessableEntity] as const,
}));
