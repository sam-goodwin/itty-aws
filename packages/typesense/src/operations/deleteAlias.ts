import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface DeleteAliasInput {
  aliasName: string;
}
export const DeleteAliasInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  aliasName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "DELETE", path: "/aliases/{aliasName}" }),
) as unknown as Schema.Codec<DeleteAliasInput>;

// Output Schema
export interface DeleteAliasOutput {
  name: string;
  collection_name: string;
}
export const DeleteAliasOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  collection_name: Schema.String,
}) as unknown as Schema.Codec<DeleteAliasOutput>;

// The operation
/**
 * Delete an alias
 *
 * @param aliasName - The name of the alias to delete
 */
export const deleteAlias = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteAliasInput,
  outputSchema: DeleteAliasOutput,
  errors: [NotFound] as const,
}));
