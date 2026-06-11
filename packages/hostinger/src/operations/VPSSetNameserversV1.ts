import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const VPSSetNameserversV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualMachineId: Schema.Number.pipe(T.PathParam()),
    ns1: Schema.String,
    ns2: Schema.optional(Schema.NullOr(Schema.String)),
    ns3: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/vps/v1/virtual-machines/{virtualMachineId}/nameservers",
    }),
  );
export type VPSSetNameserversV1Input = typeof VPSSetNameserversV1Input.Type;

// Output Schema
export const VPSSetNameserversV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type VPSSetNameserversV1Output = typeof VPSSetNameserversV1Output.Type;

// The operation
/**
 * Set nameservers
 *
 * Set nameservers for a specified virtual machine.
 * Be aware, that improper nameserver configuration can lead to the virtual
 * machine being unable to resolve domain names.
 * Use this endpoint to configure custom DNS resolvers for VPS instances.
 *
 * @param virtualMachineId - Virtual Machine ID
 */
export const VPSSetNameserversV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VPSSetNameserversV1Input,
  outputSchema: VPSSetNameserversV1Output,
  errors: [UnprocessableEntity] as const,
}));
