import * as Schema from "effect/Schema";
import { CollectionAliasSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetAliasesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/aliases" }));
export type GetAliasesInput = typeof GetAliasesInput.Type;

// Output Schema
export const GetAliasesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  aliases: Schema.Array(Schema.suspend(() => CollectionAliasSchema)),
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
