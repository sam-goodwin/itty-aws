import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CreateApiKeyInput {
  key_name: string;
}
export const CreateApiKeyInput = /*@__PURE__*/ Schema.Struct({
  key_name: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/api_keys" }),
) as unknown as Schema.Codec<CreateApiKeyInput>;

// Output Schema
export interface CreateApiKeyOutput {
  id: number;
  key: string;
  name: string;
  created_at: string;
  created_by: string;
}
export const CreateApiKeyOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.Number,
  key: Schema.String,
  name: Schema.String,
  created_at: Schema.String,
  created_by: Schema.String,
}) as unknown as Schema.Codec<CreateApiKeyOutput>;

// The operation
/**
 * Create API key
 *
 * Creates an API key.
 * The `key_name` is a user-specified name for the key.
 * Returns an `id` and `key`; the `key` is a randomly generated, 64-bit token required to access the Neon API.
 * Store the key securely — it is only returned once.
 * API keys can also be managed in the Neon Console.
 * See [Manage API keys](https://neon.com/docs/manage/api-keys/).
 */
export const createApiKey = /*@__PURE__*/ API.make(() => ({
  inputSchema: CreateApiKeyInput,
  outputSchema: CreateApiKeyOutput,
}));
