import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const DeleteAliasInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  aliasName: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/aliases/{aliasName}" }));
export type DeleteAliasInput = typeof DeleteAliasInput.Type;

// Output Schema
export const DeleteAliasOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  collection_name: Schema.String,
});
export type DeleteAliasOutput = typeof DeleteAliasOutput.Type;

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
