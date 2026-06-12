import * as Schema from "effect/Schema";
import {
  CheckStatusSchema,
  ImageRefSchema,
  MachineEventSchema,
  fly_ContainerConfigSchema,
  fly_DNSConfigSchema,
  fly_FileSchema,
  fly_MachineCacheDriveSchema,
  fly_MachineCheckSchema,
  fly_MachineConfigSchema,
  fly_MachineGuestSchema,
  fly_MachineInitSchema,
  fly_MachineMetricsSchema,
  fly_MachineMountSchema,
  fly_MachineProcessSchema,
  fly_MachineRestartSchema,
  fly_MachineRootfsSchema,
  fly_MachineServiceSchema,
  fly_StaticSchema,
  fly_StopConfigSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const MachinesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  app_name: Schema.String.pipe(T.PathParam()),
  machine_id: Schema.String.pipe(T.PathParam()),
  config: Schema.optional(
    Schema.Struct({
      auto_destroy: Schema.optional(Schema.Boolean),
      cache_drive: Schema.optional(
        Schema.suspend(() => fly_MachineCacheDriveSchema),
      ),
      checks: Schema.optional(
        Schema.Record(
          Schema.String,
          Schema.suspend(() => fly_MachineCheckSchema),
        ),
      ),
      containers: Schema.optional(
        Schema.Array(Schema.suspend(() => fly_ContainerConfigSchema)),
      ),
      disable_machine_autostart: Schema.optional(Schema.Boolean),
      dns: Schema.optional(Schema.suspend(() => fly_DNSConfigSchema)),
      env: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      files: Schema.optional(
        Schema.Array(Schema.suspend(() => fly_FileSchema)),
      ),
      guest: Schema.optional(Schema.suspend(() => fly_MachineGuestSchema)),
      image: Schema.optional(Schema.String),
      init: Schema.optional(Schema.suspend(() => fly_MachineInitSchema)),
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      metrics: Schema.optional(Schema.suspend(() => fly_MachineMetricsSchema)),
      mounts: Schema.optional(
        Schema.Array(Schema.suspend(() => fly_MachineMountSchema)),
      ),
      processes: Schema.optional(
        Schema.Array(Schema.suspend(() => fly_MachineProcessSchema)),
      ),
      restart: Schema.optional(Schema.suspend(() => fly_MachineRestartSchema)),
      rootfs: Schema.optional(Schema.suspend(() => fly_MachineRootfsSchema)),
      schedule: Schema.optional(Schema.String),
      services: Schema.optional(
        Schema.Array(Schema.suspend(() => fly_MachineServiceSchema)),
      ),
      size: Schema.optional(Schema.String),
      standbys: Schema.optional(Schema.Array(Schema.String)),
      statics: Schema.optional(
        Schema.Array(Schema.suspend(() => fly_StaticSchema)),
      ),
      stop_config: Schema.optional(Schema.suspend(() => fly_StopConfigSchema)),
    }),
  ),
  current_version: Schema.optional(Schema.String),
  lease_ttl: Schema.optional(Schema.Number),
  lsvd: Schema.optional(Schema.Boolean),
  min_secrets_version: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  region: Schema.optional(Schema.String),
  skip_launch: Schema.optional(Schema.Boolean),
  skip_secrets: Schema.optional(Schema.Boolean),
  skip_service_registration: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({ method: "POST", path: "/apps/{app_name}/machines/{machine_id}" }),
);
export type MachinesUpdateInput = typeof MachinesUpdateInput.Type;

// Output Schema
export const MachinesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  checks: Schema.optional(
    Schema.Array(Schema.suspend(() => CheckStatusSchema)),
  ),
  config: Schema.optional(Schema.suspend(() => fly_MachineConfigSchema)),
  created_at: Schema.optional(Schema.String),
  events: Schema.optional(
    Schema.Array(Schema.suspend(() => MachineEventSchema)),
  ),
  host_status: Schema.optional(
    Schema.Literals(["ok", "unknown", "unreachable"]),
  ),
  id: Schema.optional(Schema.String),
  image_ref: Schema.optional(Schema.suspend(() => ImageRefSchema)),
  incomplete_config: Schema.optional(
    Schema.suspend(() => fly_MachineConfigSchema),
  ),
  instance_id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  nonce: Schema.optional(Schema.String),
  private_ip: Schema.optional(Schema.String),
  region: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
});
export type MachinesUpdateOutput = typeof MachinesUpdateOutput.Type;

// The operation
/**
 * Update Machine
 *
 * Update a Machine's configuration using the details provided in the request body.
 *
 * @param app_name - Fly App Name
 * @param machine_id - Machine ID
 */
export const MachinesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MachinesUpdateInput,
  outputSchema: MachinesUpdateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
