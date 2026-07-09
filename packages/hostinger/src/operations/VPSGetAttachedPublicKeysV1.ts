import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const VPSGetAttachedPublicKeysV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualMachineId: Schema.Number.pipe(T.PathParam()),
    page: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/vps/v1/virtual-machines/{virtualMachineId}/public-keys",
    }),
  );
export type VPSGetAttachedPublicKeysV1Input =
  typeof VPSGetAttachedPublicKeysV1Input.Type;

// Output Schema
export const VPSGetAttachedPublicKeysV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          name: Schema.optional(Schema.String),
          key: Schema.optional(Schema.String),
        }),
      ),
    ),
    meta: Schema.optional(
      Schema.Struct({
        current_page: Schema.optional(Schema.Number),
        per_page: Schema.optional(Schema.Number),
        total: Schema.optional(Schema.Number),
      }),
    ),
  });
export type VPSGetAttachedPublicKeysV1Output =
  typeof VPSGetAttachedPublicKeysV1Output.Type;

// The operation
/**
 * Get attached public keys
 *
 * Retrieve public keys attached to a specified virtual machine.
 * Use this endpoint to view SSH keys configured for specific VPS instances.
 *
 * @param virtualMachineId - Virtual Machine ID
 * @param page - Page number
 */
export const VPSGetAttachedPublicKeysV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VPSGetAttachedPublicKeysV1Input,
    outputSchema: VPSGetAttachedPublicKeysV1Output,
  }),
);
