import * as Schema from "effect/Schema";
import { ApiKeySchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetKeysInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
  T.Http({ method: "GET", path: "/keys" }),
);
export type GetKeysInput = typeof GetKeysInput.Type;

// Output Schema
export const GetKeysOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  keys: Schema.Array(Schema.suspend(() => ApiKeySchema)),
});
export type GetKeysOutput = typeof GetKeysOutput.Type;

// The operation
/**
 * Retrieve (metadata about) all keys.
 */
export const getKeys = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetKeysInput,
  outputSchema: GetKeysOutput,
}));
