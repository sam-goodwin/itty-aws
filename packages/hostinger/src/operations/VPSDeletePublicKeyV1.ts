import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const VPSDeletePublicKeyV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    publicKeyId: Schema.Number.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/api/vps/v1/public-keys/{publicKeyId}" }),
  );
export type VPSDeletePublicKeyV1Input = typeof VPSDeletePublicKeyV1Input.Type;

// Output Schema
export const VPSDeletePublicKeyV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  });
export type VPSDeletePublicKeyV1Output = typeof VPSDeletePublicKeyV1Output.Type;

// The operation
/**
 * Delete public key
 *
 * Delete a public key from your account.
 * **Deleting public key from account does not remove it from virtual machine**
 * Use this endpoint to remove unused SSH keys from account.
 *
 * @param publicKeyId - Public Key ID
 */
export const VPSDeletePublicKeyV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VPSDeletePublicKeyV1Input,
    outputSchema: VPSDeletePublicKeyV1Output,
  }),
);
