import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const IdentitiesDeleteIdentityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    identity: Schema.String,
  }).pipe(T.Http({ method: "POST", path: "/v2/identities.deleteIdentity" }));
export type IdentitiesDeleteIdentityInput =
  typeof IdentitiesDeleteIdentityInput.Type;

// Output Schema
export const IdentitiesDeleteIdentityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    meta: Schema.Struct({
      requestId: Schema.String,
    }),
  });
export type IdentitiesDeleteIdentityOutput =
  typeof IdentitiesDeleteIdentityOutput.Type;

// The operation
/**
 * Delete Identity
 *
 * Permanently delete an identity. This operation cannot be undone.
 * Use this for data cleanup, compliance requirements, or when removing entities from your system.
 * > **Important**
 * > Requires `identity.*.delete_identity` permission
 * > Associated API keys remain functional but lose shared resources
 * > External ID becomes available for reuse immediately
 */
export const identitiesDeleteIdentity = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IdentitiesDeleteIdentityInput,
    outputSchema: IdentitiesDeleteIdentityOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
