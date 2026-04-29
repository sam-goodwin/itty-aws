import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetAliasesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/aliases" }));
export type GetAliasesInput = typeof GetAliasesInput.Type;

// Output Schema
export const GetAliasesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  aliases: Schema.Array(
    Schema.Struct({
      name: Schema.String,
      collection_name: Schema.String,
    }),
  ),
});
export type GetAliasesOutput = typeof GetAliasesOutput.Type;

// The operation
/**
 * List all aliases
 *
 * List all aliases and the corresponding collections that they map to.
 */
export const getAliases = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetAliasesInput,
  outputSchema: GetAliasesOutput,
}));
