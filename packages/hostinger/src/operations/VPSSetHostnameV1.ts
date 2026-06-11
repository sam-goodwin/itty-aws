import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const VPSSetHostnameV1Input = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  virtualMachineId: Schema.Number.pipe(T.PathParam()),
  hostname: Schema.String,
}).pipe(
  T.Http({
    method: "PUT",
    path: "/api/vps/v1/virtual-machines/{virtualMachineId}/hostname",
  }),
);
export type VPSSetHostnameV1Input = typeof VPSSetHostnameV1Input.Type;

// Output Schema
export const VPSSetHostnameV1Output = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  },
);
export type VPSSetHostnameV1Output = typeof VPSSetHostnameV1Output.Type;

// The operation
/**
 * Set hostname
 *
 * Set hostname for a specified virtual machine.
 * Changing hostname does not update PTR record automatically.
 * If you want your virtual machine to be reachable by a hostname,
 * you need to point your domain A/AAAA records to virtual machine IP as well.
 * Use this endpoint to configure custom hostnames for VPS instances.
 *
 * @param virtualMachineId - Virtual Machine ID
 */
export const VPSSetHostnameV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VPSSetHostnameV1Input,
  outputSchema: VPSSetHostnameV1Output,
  errors: [UnprocessableEntity] as const,
}));
