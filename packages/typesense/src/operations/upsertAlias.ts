import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export interface UpsertAliasInput {
  aliasName: string;
  collection_name: string;
}
export const UpsertAliasInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  aliasName: Schema.String.pipe(T.PathParam()),
  collection_name: Schema.String,
}).pipe(
  T.Http({ method: "PUT", path: "/aliases/{aliasName}" }),
) as unknown as Schema.Codec<UpsertAliasInput>;

// Output Schema
export interface UpsertAliasOutput {
  name: string;
  collection_name: string;
}
export const UpsertAliasOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  collection_name: Schema.String,
}) as unknown as Schema.Codec<UpsertAliasOutput>;

// The operation
/**
 * Create or update a collection alias
 *
 * Create or update a collection alias. An alias is a virtual collection name that points to a real collection. If you're familiar with symbolic links on Linux, it's very similar to that. Aliases are useful when you want to reindex your data in the background on a new collection and switch your application to it without any changes to your code.
 *
 * @param aliasName - The name of the alias to create/update
 */
export const upsertAlias = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpsertAliasInput,
  outputSchema: UpsertAliasOutput,
  errors: [BadRequest, NotFound] as const,
}));
