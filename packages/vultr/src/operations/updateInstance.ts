import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const UpdateInstanceInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  instanceId: Schema.String.pipe(T.PathParam()),
  app_id: Schema.optional(Schema.Number),
  image_id: Schema.optional(Schema.String),
  backups: Schema.optional(Schema.String),
  firewall_group_id: Schema.optional(Schema.String),
  enable_ipv6: Schema.optional(Schema.Boolean),
  os_id: Schema.optional(Schema.String),
  user_data: Schema.optional(Schema.String),
  tag: Schema.optional(Schema.String),
  plan: Schema.optional(Schema.String),
  ddos_protection: Schema.optional(Schema.Boolean),
  attach_private_network: Schema.optional(Schema.Array(Schema.String)),
  attach_vpc: Schema.optional(Schema.Array(Schema.String)),
  attach_vpc2: Schema.optional(Schema.Array(Schema.String)),
  detach_private_network: Schema.optional(Schema.Array(Schema.String)),
  detach_vpc: Schema.optional(Schema.Array(Schema.String)),
  detach_vpc2: Schema.optional(Schema.Array(Schema.String)),
  enable_private_network: Schema.optional(Schema.Boolean),
  enable_vpc: Schema.optional(Schema.Boolean),
  enable_vpc2: Schema.optional(Schema.Boolean),
  label: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Array(Schema.String)),
  user_scheme: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "PATCH", path: "/instances/{instanceId}" }));
export type UpdateInstanceInput = typeof UpdateInstanceInput.Type;

// Output Schema
export const UpdateInstanceOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateInstanceOutput = typeof UpdateInstanceOutput.Type;

// The operation
/**
 * Update Instance
 *
 * Update information for an Instance. All attributes are optional. If not set, the attributes will retain their original values.
 * **Note:** Changing `os_id`, `app_id` or `image_id` may take a few extra seconds to complete.
 *
 * @param instanceId - The [Instance ID](#operation/list-instances).
 */
export const updateInstance = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateInstanceInput,
  outputSchema: UpdateInstanceOutput,
  errors: [BadRequest, NotFound] as const,
}));
