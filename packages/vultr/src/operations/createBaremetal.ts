import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const CreateBaremetalInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  region: Schema.String,
  plan: Schema.String,
  script_id: Schema.optional(Schema.String),
  enable_ipv6: Schema.optional(Schema.Boolean),
  sshkey_id: Schema.optional(Schema.Array(Schema.String)),
  user_data: Schema.optional(Schema.String),
  label: Schema.optional(Schema.String),
  activation_email: Schema.optional(Schema.Boolean),
  hostname: Schema.optional(Schema.String),
  tag: Schema.optional(Schema.String),
  reserved_ipv4: Schema.optional(Schema.String),
  os_id: Schema.optional(Schema.Number),
  snapshot_id: Schema.optional(Schema.String),
  app_id: Schema.optional(Schema.Number),
  image_id: Schema.optional(Schema.String),
  persistent_pxe: Schema.optional(Schema.Boolean),
  attach_vpc2: Schema.optional(Schema.Array(Schema.String)),
  detach_vpc2: Schema.optional(Schema.Array(Schema.String)),
  enable_vpc2: Schema.optional(Schema.Boolean),
  tags: Schema.optional(Schema.Array(Schema.String)),
  user_scheme: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "POST", path: "/bare-metals" }));
export type CreateBaremetalInput = typeof CreateBaremetalInput.Type;

// Output Schema
export const CreateBaremetalOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CreateBaremetalOutput = typeof CreateBaremetalOutput.Type;

// The operation
/**
 * Create Bare Metal Instance
 *
 * Create a new Bare Metal instance in a `region` with the desired `plan`. Choose one of the following to deploy the instance:
 * * `os_id`
 * * `snapshot_id`
 * * `app_id`
 * * `image_id`
 * Supply other attributes as desired.
 */
export const createBaremetal = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateBaremetalInput,
  outputSchema: CreateBaremetalOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
