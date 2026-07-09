import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const KeysRemoveRolesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  keyId: Schema.String,
  roles: Schema.Array(Schema.String),
}).pipe(T.Http({ method: "POST", path: "/v2/keys.removeRoles" }));
export type KeysRemoveRolesInput = typeof KeysRemoveRolesInput.Type;

// Output Schema
export const KeysRemoveRolesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  meta: Schema.Struct({
    requestId: Schema.String,
  }),
  data: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      name: Schema.String,
      description: Schema.optional(Schema.String),
      permissions: Schema.optional(
        Schema.Array(
          Schema.Struct({
            id: Schema.String,
            name: Schema.String,
            slug: Schema.String,
            description: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
  ),
});
export type KeysRemoveRolesOutput = typeof KeysRemoveRolesOutput.Type;

// The operation
/**
 * Remove key roles
 *
 * Remove roles from a key without affecting direct permissions or other roles.
 * Use this for privilege downgrades, removing temporary access, or subscription changes that revoke specific role-based capabilities. Direct permissions remain unchanged.
 * **Important**: Changes take effect immediately with up to 30-second edge propagation.
 * **Required Permissions**
 * Your root key must have one of the following permissions:
 * - `api.*.update_key` (to update keys in any API)
 * - `api.<api_id>.update_key` (to update keys in a specific API)
 * **Side Effects**
 * Invalidates the key cache for immediate effect, and makes role changes available for verification within 30 seconds across all regions.
 */
export const keysRemoveRoles = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: KeysRemoveRolesInput,
  outputSchema: KeysRemoveRolesOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
