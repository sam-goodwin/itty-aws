import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const KeysRemovePermissionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keyId: Schema.String,
    permissions: Schema.Array(Schema.String),
  }).pipe(T.Http({ method: "POST", path: "/v2/keys.removePermissions" }));
export type KeysRemovePermissionsInput = typeof KeysRemovePermissionsInput.Type;

// Output Schema
export const KeysRemovePermissionsOutput =
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
export type KeysRemovePermissionsOutput =
  typeof KeysRemovePermissionsOutput.Type;

// The operation
/**
 * Remove key permissions
 *
 * Remove permissions from a key without affecting existing roles or other permissions.
 * Use this for privilege downgrades, removing temporary access, or plan changes that revoke specific capabilities. Permissions granted through roles remain unchanged.
 * **Important**: Changes take effect immediately with up to 30-second edge propagation.
 * **Required Permissions**
 * Your root key must have one of the following permissions:
 * - `api.*.update_key` (to update keys in any API)
 * - `api.<api_id>.update_key` (to update keys in a specific API)
 * **Side Effects**
 * Invalidates the key cache for immediate effect, and makes permission changes available for verification within 30 seconds across all regions.
 */
export const keysRemovePermissions = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: KeysRemovePermissionsInput,
    outputSchema: KeysRemovePermissionsOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
