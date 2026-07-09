import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const VPSGetProjectListV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualMachineId: Schema.Number.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/vps/v1/virtual-machines/{virtualMachineId}/docker",
    }),
  );
export type VPSGetProjectListV1Input = typeof VPSGetProjectListV1Input.Type;

// Output Schema
export const VPSGetProjectListV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      name: Schema.optional(Schema.String),
      status: Schema.optional(Schema.String),
      state: Schema.optional(
        Schema.Literals(["running", "stopped", "created", "mixed", "unknown"]),
      ),
      path: Schema.optional(Schema.String),
      containers: Schema.optional(
        Schema.Array(
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
                  host_port_start: Schema.optional(
                    Schema.NullOr(Schema.Number),
                  ),
                  host_port_end: Schema.optional(Schema.NullOr(Schema.Number)),
                  container_port_start: Schema.optional(
                    Schema.NullOr(Schema.Number),
                  ),
                  container_port_end: Schema.optional(
                    Schema.NullOr(Schema.Number),
                  ),
                }),
              ),
            ),
            stats: Schema.optional(Schema.Unknown),
          }),
        ),
      ),
    }),
  );
export type VPSGetProjectListV1Output = typeof VPSGetProjectListV1Output.Type;

// The operation
/**
 * Get project list
 *
 * Retrieves a list of all Docker Compose projects currently deployed on the virtual machine.
 * This endpoint returns basic information about each project including name,
 * status, file path and list of containers with details about their names,
 * image, status, health and ports. Container stats are omitted in this
 * endpoint. If you need to get detailed information about container with
 * stats included, use the `Get project containers` endpoint.
 * Use this to get an overview of all Docker projects on your VPS instance.
 *
 * @param virtualMachineId - Virtual Machine ID
 */
export const VPSGetProjectListV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VPSGetProjectListV1Input,
  outputSchema: VPSGetProjectListV1Output,
  errors: [UnprocessableEntity] as const,
}));
