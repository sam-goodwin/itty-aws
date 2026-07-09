import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const KeysSetRolesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  keyId: Schema.String,
  roles: Schema.Array(Schema.String),
}).pipe(T.Http({ method: "POST", path: "/v2/keys.setRoles" }));
export type KeysSetRolesInput = typeof KeysSetRolesInput.Type;

// Output Schema
export const KeysSetRolesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type KeysSetRolesOutput = typeof KeysSetRolesOutput.Type;

// The operation
/**
 * Set key roles
 *
 * Replace all roles on a key with the specified set in a single atomic operation.
 * Use this to synchronize with external systems, reset roles to a known state, or apply standardized role templates. Direct permissions are never affected.
 * **Important**: Changes take effect immediately with up to 30-second edge propagation.
 * **Required Permissions**
 * Your root key must have one of the following permissions:
 * - `api.*.update_key` (to update keys in any API)
 * - `api.<api_id>.update_key` (to update keys in a specific API)
 * **Side Effects**
 * Invalidates the key cache for immediate effect, and makes role changes available for verification within 30 seconds across all regions.
 */
export const keysSetRoles = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: KeysSetRolesInput,
  outputSchema: KeysSetRolesOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
