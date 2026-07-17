import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetAliasesInput {}
export const GetAliasesInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({ method: "GET", path: "/aliases" }),
) as unknown as Schema.Codec<GetAliasesInput>;

// Output Schema
export interface GetAliasesOutput {
  aliases: { name: string; collection_name: string }[];
}
export const GetAliasesOutput = /*@__PURE__*/ Schema.Struct({
  aliases: Schema.Array(
    Schema.Struct({
      name: Schema.String,
      collection_name: Schema.String,
    }),
  ),
}) as unknown as Schema.Codec<GetAliasesOutput>;

// The operation
/**
 * List all aliases
 *
 * List all aliases and the corresponding collections that they map to.
 */
export const getAliases = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetAliasesInput,
  outputSchema: GetAliasesOutput,
}));
