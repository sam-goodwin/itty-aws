import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const GetInstanceInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  instanceId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/instances/{instanceId}" }));
export type GetInstanceInput = typeof GetInstanceInput.Type;

// Output Schema
export const GetInstanceOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  instance: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      os: Schema.optional(Schema.String),
      ram: Schema.optional(Schema.Number),
      disk: Schema.optional(Schema.Number),
      main_ip: Schema.optional(Schema.String),
      vcpu_count: Schema.optional(Schema.Number),
      region: Schema.optional(Schema.String),
      default_password: Schema.optional(SensitiveString),
      date_created: Schema.optional(Schema.String),
      status: Schema.optional(Schema.String),
      power_status: Schema.optional(Schema.String),
      server_status: Schema.optional(Schema.String),
      allowed_bandwidth: Schema.optional(Schema.Number),
      netmask_v4: Schema.optional(Schema.String),
      gateway_v4: Schema.optional(Schema.String),
      v6_networks: Schema.optional(
        Schema.Array(
          Schema.Struct({
            network: Schema.optional(Schema.String),
            main_ip: Schema.optional(Schema.String),
            network_size: Schema.optional(Schema.Number),
          }),
        ),
      ),
      hostname: Schema.optional(Schema.String),
      label: Schema.optional(Schema.String),
      tag: Schema.optional(Schema.String),
      internal_ip: Schema.optional(Schema.String),
      kvm: Schema.optional(Schema.String),
      os_id: Schema.optional(Schema.Number),
      app_id: Schema.optional(Schema.Number),
      image_id: Schema.optional(Schema.String),
      firewall_group_id: Schema.optional(Schema.String),
      features: Schema.optional(Schema.Array(Schema.String)),
      plan: Schema.optional(Schema.String),
      tags: Schema.optional(Schema.Array(Schema.String)),
      user_scheme: Schema.optional(Schema.String),
    }),
  ),
});
export type GetInstanceOutput = typeof GetInstanceOutput.Type;

// The operation
/**
 * Get Instance
 *
 * Get information about an Instance.
 *
 * @param instanceId - The [Instance ID](#operation/list-instances).
 */
export const getInstance = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetInstanceInput,
  outputSchema: GetInstanceOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
