import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const ListApiKeysInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/apikeys" }));
export type ListApiKeysInput = typeof ListApiKeysInput.Type;

// Output Schema
export const ListApiKeysOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  api_keys: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        api_key: Schema.optional(SensitiveString),
        name: Schema.optional(Schema.String),
        expire: Schema.optional(Schema.Boolean),
        date_expire: Schema.optional(Schema.String),
      }),
    ),
  ),
});
export type ListApiKeysOutput = typeof ListApiKeysOutput.Type;

// The operation
/**
 * List API Keys
 *
 * Gets all API keys for the currently authenticated user. API keys returned by this method are masked.
 */
export const listApiKeys = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListApiKeysInput,
  outputSchema: ListApiKeysOutput,
}));
