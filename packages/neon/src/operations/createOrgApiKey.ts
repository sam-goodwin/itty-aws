import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CreateOrgApiKeyInput {
  org_id: string;
  key_name: string;
  project_id?: string;
}
export const CreateOrgApiKeyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  org_id: Schema.String.pipe(T.PathParam()),
  key_name: Schema.String,
  project_id: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "POST", path: "/organizations/{org_id}/api_keys" }),
) as unknown as Schema.Codec<CreateOrgApiKeyInput>;

// Output Schema
export interface CreateOrgApiKeyOutput {
  id: number;
  key: string;
  name: string;
  created_at: string;
  created_by: string;
  project_id?: string;
}
export const CreateOrgApiKeyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.Number,
  key: Schema.String,
  name: Schema.String,
  created_at: Schema.String,
  created_by: Schema.String,
  project_id: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<CreateOrgApiKeyOutput>;

// The operation
/**
 * Create organization API key
 *
 * Creates an API key for the specified organization.
 * The `key_name` is a user-specified name for the key.
 * Returns an `id` and `key`; the `key` is a randomly generated, 64-bit token required to access the Neon API.
 * Store the key securely — it is only returned once.
 * API keys can also be managed in the Neon Console.
 * See [Manage API keys](https://neon.com/docs/manage/api-keys/).
 *
 * @param org_id - The Neon organization ID
 */
export const createOrgApiKey = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateOrgApiKeyInput,
  outputSchema: CreateOrgApiKeyOutput,
}));
