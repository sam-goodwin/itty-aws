import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const CreateInstanceInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  region: Schema.String,
  plan: Schema.String,
  os_id: Schema.optional(Schema.Number),
  ipxe_chain_url: Schema.optional(Schema.String),
  iso_id: Schema.optional(Schema.String),
  script_id: Schema.optional(Schema.String),
  snapshot_id: Schema.optional(Schema.String),
  enable_ipv6: Schema.optional(Schema.Boolean),
  disable_public_ipv4: Schema.optional(Schema.Boolean),
  attach_private_network: Schema.optional(Schema.Array(Schema.String)),
  attach_vpc: Schema.optional(Schema.Array(Schema.String)),
  attach_vpc2: Schema.optional(Schema.Array(Schema.String)),
  label: Schema.optional(Schema.String),
  sshkey_id: Schema.optional(Schema.Array(Schema.String)),
  backups: Schema.optional(Schema.String),
  block_devices: Schema.optional(Schema.Array(Schema.Unknown)),
  app_id: Schema.optional(Schema.Number),
  image_id: Schema.optional(Schema.String),
  user_data: Schema.optional(Schema.String),
  ddos_protection: Schema.optional(Schema.Boolean),
  activation_email: Schema.optional(Schema.Boolean),
  hostname: Schema.optional(Schema.String),
  tag: Schema.optional(Schema.String),
  firewall_group_id: Schema.optional(Schema.String),
  reserved_ipv4: Schema.optional(Schema.String),
  enable_private_network: Schema.optional(Schema.Boolean),
  enable_vpc: Schema.optional(Schema.Boolean),
  enable_vpc2: Schema.optional(Schema.Boolean),
  vpc_only: Schema.optional(Schema.Boolean),
  tags: Schema.optional(Schema.Array(Schema.String)),
  user_scheme: Schema.optional(Schema.String),
  app_variables: Schema.optional(Schema.Unknown),
}).pipe(T.Http({ method: "POST", path: "/instances" }));
export type CreateInstanceInput = typeof CreateInstanceInput.Type;

// Output Schema
export const CreateInstanceOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CreateInstanceOutput = typeof CreateInstanceOutput.Type;

// The operation
/**
 * Create Instance
 *
 * Create a new VPS Instance in a `region` with the desired `plan`. Choose one of the following to deploy the instance:
 * * `os_id`
 * * `iso_id`
 * * `snapshot_id`
 * * `app_id`
 * * `image_id`
 * Supply other attributes as desired.
 */
export const createInstance = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateInstanceInput,
  outputSchema: CreateInstanceOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
