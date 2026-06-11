import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const VPSGetProjectLogsV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualMachineId: Schema.Number.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/vps/v1/virtual-machines/{virtualMachineId}/docker/{projectName}/logs",
    }),
  );
export type VPSGetProjectLogsV1Input = typeof VPSGetProjectLogsV1Input.Type;

// Output Schema
export const VPSGetProjectLogsV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      service: Schema.optional(Schema.String),
      entries: Schema.optional(
        Schema.Array(
          Schema.Struct({
            timestamp: Schema.optional(Schema.String),
            line: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
  );
export type VPSGetProjectLogsV1Output = typeof VPSGetProjectLogsV1Output.Type;

// The operation
/**
 * Get project logs
 *
 * Retrieves aggregated log entries from all services within a Docker Compose project.
 * This endpoint returns recent log output from each container, organized by service name with timestamps.
 * The response contains the last 300 log entries across all services.
 * Use this for debugging, monitoring application behavior, and
 * troubleshooting issues across your entire project stack.
 *
 * @param virtualMachineId - Virtual Machine ID
 * @param projectName - Docker Compose project name using alphanumeric characters, dashes, and underscores only
 */
export const VPSGetProjectLogsV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VPSGetProjectLogsV1Input,
  outputSchema: VPSGetProjectLogsV1Output,
  errors: [UnprocessableEntity] as const,
}));
