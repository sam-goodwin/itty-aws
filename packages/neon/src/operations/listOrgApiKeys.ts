import * as Schema from "effect/Schema";
import { OrgApiKeysListResponseItemSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListOrgApiKeysInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  org_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/organizations/{org_id}/api_keys" }));
export type ListOrgApiKeysInput = typeof ListOrgApiKeysInput.Type;

// Output Schema
export const ListOrgApiKeysOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.suspend(() => OrgApiKeysListResponseItemSchema),
);
export type ListOrgApiKeysOutput = typeof ListOrgApiKeysOutput.Type;

// The operation
/**
 * List organization API keys
 *
 * Retrieves the API keys for the specified organization.
 * The response does not include API key tokens. A token is only provided when creating an API key.
 * API keys can also be managed in the Neon Console.
 * For more information, see [Manage API keys](https://neon.tech/docs/manage/api-keys/).
 *
 * @param org_id - The Neon organization ID
 */
export const listOrgApiKeys = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListOrgApiKeysInput,
  outputSchema: ListOrgApiKeysOutput,
}));
