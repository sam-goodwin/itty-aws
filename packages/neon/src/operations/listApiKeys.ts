import * as Schema from "effect/Schema";
import { ApiKeysListResponseItemSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListApiKeysInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/api_keys" }));
export type ListApiKeysInput = typeof ListApiKeysInput.Type;

// Output Schema
export const ListApiKeysOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.suspend(() => ApiKeysListResponseItemSchema),
);
export type ListApiKeysOutput = typeof ListApiKeysOutput.Type;

// The operation
/**
 * List API keys
 *
 * Retrieves the API keys for your Neon account.
 * The response does not include API key tokens. A token is only provided when creating an API key.
 * API keys can also be managed in the Neon Console.
 * For more information, see [Manage API keys](https://neon.tech/docs/manage/api-keys/).
 */
export const listApiKeys = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListApiKeysInput,
  outputSchema: ListApiKeysOutput,
}));
