import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ListApiKeysInput {}
export const ListApiKeysInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({ method: "GET", path: "/api_keys" }),
) as unknown as Schema.Codec<ListApiKeysInput>;

// Output Schema
export type ListApiKeysOutput = {
  id: number;
  name: string;
  created_at: string;
  created_by: { id: string; name: string; image: string };
  last_used_at?: string | null;
  last_used_from_addr: string;
}[];
export const ListApiKeysOutput = /*@__PURE__*/ Schema.Array(
  Schema.Struct({
    id: Schema.Number,
    name: Schema.String,
    created_at: Schema.String,
    created_by: Schema.Struct({
      id: Schema.String,
      name: Schema.String,
      image: Schema.String,
    }),
    last_used_at: Schema.optional(Schema.NullOr(Schema.String)),
    last_used_from_addr: Schema.String,
  }),
) as unknown as Schema.Codec<ListApiKeysOutput>;

// The operation
/**
 * List API keys
 *
 * Retrieves the API keys for your Neon account.
 * The response does not include API key tokens. A token is only provided when creating an API key.
 * API keys can also be managed in the Neon Console.
 * For more information, see [Manage API keys](https://neon.com/docs/manage/api-keys/).
 */
export const listApiKeys = /*@__PURE__*/ API.make(() => ({
  inputSchema: ListApiKeysInput,
  outputSchema: ListApiKeysOutput,
}));
