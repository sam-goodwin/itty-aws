import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const VPSGetProjectContainersV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualMachineId: Schema.Number.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/vps/v1/virtual-machines/{virtualMachineId}/docker/{projectName}/containers",
    }),
  );
export type VPSGetProjectContainersV1Input =
  typeof VPSGetProjectContainersV1Input.Type;

// Output Schema
export const VPSGetProjectContainersV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
      image: Schema.optional(Schema.String),
      command: Schema.optional(Schema.String),
      status: Schema.optional(Schema.String),
      state: Schema.optional(
        Schema.Literals([
          "created",
          "running",
          "restarting",
          "exited",
          "paused",
          "dead",
          "stopping",
        ]),
      ),
      health: Schema.optional(
        Schema.Literals(["starting", "healthy", "unhealthy", ""]),
      ),
      ports: Schema.optional(
        Schema.Array(
          Schema.Struct({
            type: Schema.optional(
              Schema.Literals([
                "published",
                "published_range",
                "exposed",
                "exposed_range",
              ]),
            ),
            protocol: Schema.optional(Schema.Literals(["tcp", "udp"])),
            host_ip: Schema.optional(Schema.NullOr(Schema.String)),
            host_port: Schema.optional(Schema.NullOr(Schema.Number)),
            container_port: Schema.optional(Schema.NullOr(Schema.Number)),
            host_port_start: Schema.optional(Schema.NullOr(Schema.Number)),
            host_port_end: Schema.optional(Schema.NullOr(Schema.Number)),
            container_port_start: Schema.optional(Schema.NullOr(Schema.Number)),
            container_port_end: Schema.optional(Schema.NullOr(Schema.Number)),
          }),
        ),
      ),
      stats: Schema.optional(Schema.Unknown),
    }),
  );
export type VPSGetProjectContainersV1Output =
  typeof VPSGetProjectContainersV1Output.Type;

// The operation
/**
 * Get project containers
 *
 * Retrieves a list of all containers belonging to a specific Docker Compose project on the virtual machine.
 * This endpoint returns detailed information about each container including
 * their current status, port mappings, and runtime configuration.
 * Use this to monitor the health and state of all services within your Docker Compose project.
 *
 * @param virtualMachineId - Virtual Machine ID
 * @param projectName - Docker Compose project name using alphanumeric characters, dashes, and underscores only
 */
export const VPSGetProjectContainersV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VPSGetProjectContainersV1Input,
    outputSchema: VPSGetProjectContainersV1Output,
    errors: [UnprocessableEntity] as const,
  }),
);
