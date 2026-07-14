import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface RevokeApiKeyInput {
  key_id: number;
}
export const RevokeApiKeyInput = /*@__PURE__*/ Schema.Struct({
  key_id: Schema.Number.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "DELETE", path: "/api_keys/{key_id}" }),
) as unknown as Schema.Codec<RevokeApiKeyInput>;

// Output Schema
export interface RevokeApiKeyOutput {
  id: number;
  name: string;
  created_at: string;
  created_by: string;
  last_used_at?: string | null;
  last_used_from_addr: string;
  revoked: boolean;
}
export const RevokeApiKeyOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.Number,
  name: Schema.String,
  created_at: Schema.String,
  created_by: Schema.String,
  last_used_at: Schema.optional(Schema.NullOr(Schema.String)),
  last_used_from_addr: Schema.String,
  revoked: Schema.Boolean,
}) as unknown as Schema.Codec<RevokeApiKeyOutput>;

// The operation
/**
 * Revoke API key
 *
 * Revokes the specified API key.
 * An API key that is no longer needed can be revoked.
 * This action cannot be reversed.
 * API keys can also be managed in the Neon Console.
 * See [Manage API keys](https://neon.com/docs/manage/api-keys/).
 *
 * @param key_id - The API key ID
 */
export const revokeApiKey = /*@__PURE__*/ API.make(() => ({
  inputSchema: RevokeApiKeyInput,
  outputSchema: RevokeApiKeyOutput,
  errors: [NotFound] as const,
}));
