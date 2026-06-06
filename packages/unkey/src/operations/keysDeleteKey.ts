import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const KeysDeleteKeyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  keyId: Schema.String,
  permanent: Schema.optional(Schema.Boolean),
}).pipe(T.Http({ method: "POST", path: "/v2/keys.deleteKey" }));
export type KeysDeleteKeyInput = typeof KeysDeleteKeyInput.Type;

// Output Schema
export const KeysDeleteKeyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  meta: Schema.Struct({
    requestId: Schema.String,
  }),
  data: Schema.Unknown,
});
export type KeysDeleteKeyOutput = typeof KeysDeleteKeyOutput.Type;

// The operation
/**
 * Delete API keys
 *
 * Delete API keys permanently from user accounts or for cleanup purposes.
 * Use this for user-requested key deletion, account deletion workflows, or cleaning up unused keys. Keys are immediately invalidated. Two modes: soft delete (default, preserves audit records) and permanent delete.
 * **Important**: For temporary access control, use `updateKey` with `enabled: false` instead of deletion.
 * **Required Permissions**
 * Your root key must have one of the following permissions:
 * - `api.*.delete_key` (to delete keys in any API)
 * - `api.<api_id>.delete_key` (to delete keys in a specific API)
 */
export const keysDeleteKey = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: KeysDeleteKeyInput,
  outputSchema: KeysDeleteKeyOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
