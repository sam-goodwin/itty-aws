import * as Schema from "effect/Schema";
import {
  CheckStatusSchema,
  ImageRefSchema,
  MachineEventSchema,
  fly_MachineConfigSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const MachinesShowInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  app_name: Schema.String.pipe(T.PathParam()),
  machine_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/apps/{app_name}/machines/{machine_id}" }),
);
export type MachinesShowInput = typeof MachinesShowInput.Type;

// Output Schema
export const MachinesShowOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type MachinesShowOutput = typeof MachinesShowOutput.Type;

// The operation
/**
 * Get Machine
 *
 * Get details of a specific Machine within an app by the Machine ID.
 *
 * @param app_name - Fly App Name
 * @param machine_id - Machine ID
 */
export const MachinesShow = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MachinesShowInput,
  outputSchema: MachinesShowOutput,
  errors: [Forbidden, NotFound] as const,
}));
