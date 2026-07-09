import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const KeysSetPermissionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keyId: Schema.String,
    permissions: Schema.Array(Schema.String),
  }).pipe(T.Http({ method: "POST", path: "/v2/keys.setPermissions" }));
export type KeysSetPermissionsInput = typeof KeysSetPermissionsInput.Type;

// Output Schema
export const KeysSetPermissionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    meta: Schema.Struct({
      requestId: Schema.String,
    }),
    data: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        name: Schema.String,
        slug: Schema.String,
        description: Schema.optional(Schema.String),
      }),
    ),
  });
export type KeysSetPermissionsOutput = typeof KeysSetPermissionsOutput.Type;

// The operation
/**
 * Set key permissions
 *
 * Replace all permissions on a key with the specified set in a single atomic operation.
 * Use this to synchronize with external systems, reset permissions to a known state, or apply standardized permission templates. Permissions granted through roles remain unchanged.
 * **Important**: Changes take effect immediately with up to 30-second edge propagation.
 * **Required Permissions**
 * Your root key must have one of the following permissions:
 * - `api.*.update_key` (to update keys in any API)
 * - `api.<api_id>.update_key` (to update keys in a specific API)
 * **Side Effects**
 * Invalidates the key cache for immediate effect, and makes permission changes available for verification within 30 seconds across all regions.
 */
export const keysSetPermissions = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: KeysSetPermissionsInput,
  outputSchema: KeysSetPermissionsOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
