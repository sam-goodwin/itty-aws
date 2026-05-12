import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const UpdateBaremetalInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  baremetalId: Schema.String.pipe(T.PathParam()),
  user_data: Schema.optional(Schema.String),
  label: Schema.optional(Schema.String),
  tag: Schema.optional(Schema.String),
  os_id: Schema.optional(Schema.Number),
  app_id: Schema.optional(Schema.Number),
  image_id: Schema.optional(Schema.String),
  enable_ipv6: Schema.optional(Schema.Boolean),
  attach_vpc2: Schema.optional(Schema.Array(Schema.String)),
  detach_vpc2: Schema.optional(Schema.Array(Schema.String)),
  enable_vpc2: Schema.optional(Schema.Boolean),
  tags: Schema.optional(Schema.Array(Schema.String)),
  user_scheme: Schema.optional(Schema.String),
  mdisk_mode: Schema.optional(Schema.String),
  ipxe_chain_url: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "PATCH", path: "/bare-metals/{baremetalId}" }));
export type UpdateBaremetalInput = typeof UpdateBaremetalInput.Type;

// Output Schema
export const UpdateBaremetalOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateBaremetalOutput = typeof UpdateBaremetalOutput.Type;

// The operation
/**
 * Update Bare Metal
 *
 * Update a Bare Metal instance. All attributes are optional. If not set, the attributes will retain their original values.
 * **Note:** Changing `os_id`, `app_id` or `image_id` may take a few extra seconds to complete.
 *
 * @param baremetalId - The [Bare Metal id](#operation/list-baremetals).
 */
export const updateBaremetal = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateBaremetalInput,
  outputSchema: UpdateBaremetalOutput,
  errors: [BadRequest, NotFound] as const,
}));
