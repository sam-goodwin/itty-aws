import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const KeysAddPermissionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keyId: Schema.String,
    permissions: Schema.Array(Schema.String),
  }).pipe(T.Http({ method: "POST", path: "/v2/keys.addPermissions" }));
export type KeysAddPermissionsInput = typeof KeysAddPermissionsInput.Type;

// Output Schema
export const KeysAddPermissionsOutput =
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
export type KeysAddPermissionsOutput = typeof KeysAddPermissionsOutput.Type;

// The operation
/**
 * Add key permissions
 *
 * Add permissions to a key without affecting existing permissions.
 * Use this for privilege upgrades, enabling new features, or plan changes that grant additional capabilities. Permissions granted through roles remain unchanged.
 * **Important**: Changes take effect immediately with up to 30-second edge propagation.
 * **Required Permissions**
 * Your root key must have one of the following permissions:
 * - `api.*.update_key` (to update keys in any API)
 * - `api.<api_id>.update_key` (to update keys in a specific API)
 * **Side Effects**
 * Invalidates the key cache for immediate effect, and makes permissions available for verification within 30 seconds across all regions.
 */
export const keysAddPermissions = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: KeysAddPermissionsInput,
  outputSchema: KeysAddPermissionsOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
