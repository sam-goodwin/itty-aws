import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const VPSAttachPublicKeyV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualMachineId: Schema.Number.pipe(T.PathParam()),
    ids: Schema.Array(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/vps/v1/public-keys/attach/{virtualMachineId}",
    }),
  );
export type VPSAttachPublicKeyV1Input = typeof VPSAttachPublicKeyV1Input.Type;

// Output Schema
export const VPSAttachPublicKeyV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type VPSAttachPublicKeyV1Output = typeof VPSAttachPublicKeyV1Output.Type;

// The operation
/**
 * Attach public key
 *
 * Attach existing public keys from your account to a specified virtual machine.
 * Multiple keys can be attached to a single virtual machine.
 * Use this endpoint to enable SSH key authentication for VPS instances.
 *
 * @param virtualMachineId - Virtual Machine ID
 */
export const VPSAttachPublicKeyV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VPSAttachPublicKeyV1Input,
    outputSchema: VPSAttachPublicKeyV1Output,
    errors: [UnprocessableEntity] as const,
  }),
);
