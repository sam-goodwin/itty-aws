import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface GetAliasInput {
  aliasName: string;
}
export const GetAliasInput = /*@__PURE__*/ Schema.Struct({
  aliasName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/aliases/{aliasName}" }),
) as unknown as Schema.Codec<GetAliasInput>;

// Output Schema
export interface GetAliasOutput {
  name: string;
  collection_name: string;
}
export const GetAliasOutput = /*@__PURE__*/ Schema.Struct({
  name: Schema.String,
  collection_name: Schema.String,
}) as unknown as Schema.Codec<GetAliasOutput>;

// The operation
/**
 * Retrieve an alias
 *
 * Find out which collection an alias points to by fetching it
 *
 * @param aliasName - The name of the alias to retrieve
 */
export const getAlias = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetAliasInput,
  outputSchema: GetAliasOutput,
  errors: [NotFound] as const,
}));
