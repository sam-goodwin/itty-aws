import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const KeysRerollKeyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  keyId: Schema.String,
  expiration: Schema.Number,
}).pipe(T.Http({ method: "POST", path: "/v2/keys.rerollKey" }));
export type KeysRerollKeyInput = typeof KeysRerollKeyInput.Type;

// Output Schema
export const KeysRerollKeyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  meta: Schema.Struct({
    requestId: Schema.String,
  }),
  data: Schema.Struct({
    keyId: Schema.String,
    key: Schema.String,
  }),
});
export type KeysRerollKeyOutput = typeof KeysRerollKeyOutput.Type;

// The operation
/**
 * Reroll Key
 *
 * Generate a new API key while preserving the configuration from an existing key.
 * This operation creates a fresh key with a new token while maintaining all settings from the original key:
 * - Permissions and roles
 * - Custom metadata
 * - Rate limit configurations
 * - Identity associations
 * - Remaining credits
 * - Recovery settings
 * **Key Generation:**
 * - The system attempts to extract the prefix from the original key
 * - If prefix extraction fails, the default API prefix is used
 * - Key length follows the API's default byte configuration (or 16 bytes if not specified)
 * **Original Key Handling:**
 * - The original key will be revoked after the duration specified in `expiration`
 * - Set `expiration` to 0 to revoke immediately
 * - This allows for graceful key rotation with an overlap period
 * Common use cases include:
 * - Rotating keys for security compliance
 * - Issuing replacement keys for compromised credentials
 * - Creating backup keys with identical permissions
 * **Important:** Analytics and usage metrics are tracked at both the key level AND identity level. If the original key has an identity, the new key will inherit it, allowing you to track usage across both individual keys and the overall identity.
 * **Required Permissions**
 * Your root key must have:
 * - `api.*.create_key` or `api.<api_id>.create_key`
 * - `api.*.encrypt_key` or `api.<api_id>.encrypt_key` (only when the original key is recoverable)
 */
export const keysRerollKey = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: KeysRerollKeyInput,
  outputSchema: KeysRerollKeyOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
