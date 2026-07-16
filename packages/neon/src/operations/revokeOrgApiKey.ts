import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface RevokeOrgApiKeyInput {
  org_id: string;
  key_id: number;
}
export const RevokeOrgApiKeyInput = /*@__PURE__*/ Schema.Struct({
  org_id: Schema.String.pipe(T.PathParam()),
  key_id: Schema.Number.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/organizations/{org_id}/api_keys/{key_id}",
  }),
) as unknown as Schema.Codec<RevokeOrgApiKeyInput>;

// Output Schema
export interface RevokeOrgApiKeyOutput {
  id: number;
  name: string;
  created_at: string;
  created_by: string;
  last_used_at?: string | null;
  last_used_from_addr: string;
  revoked: boolean;
  project_id?: string;
}
export const RevokeOrgApiKeyOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.Number,
  name: Schema.String,
  created_at: Schema.String,
  created_by: Schema.String,
  last_used_at: Schema.optional(Schema.NullOr(Schema.String)),
  last_used_from_addr: Schema.String,
  revoked: Schema.Boolean,
  project_id: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<RevokeOrgApiKeyOutput>;

// The operation
/**
 * Revoke organization API key
 *
 * Revokes the specified organization API key.
 * An API key that is no longer needed can be revoked.
 * This action cannot be reversed.
 * API keys can also be managed in the Neon Console.
 * See [Manage API keys](https://neon.com/docs/manage/api-keys/).
 *
 * @param org_id - The Neon organization ID
 * @param key_id - The API key ID
 */
export const revokeOrgApiKey = /*@__PURE__*/ API.make(() => ({
  inputSchema: RevokeOrgApiKeyInput,
  outputSchema: RevokeOrgApiKeyOutput,
}));
