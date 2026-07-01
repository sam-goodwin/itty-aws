import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface DeleteSynonymSetInput {
  synonymSetName: string;
}
export const DeleteSynonymSetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  synonymSetName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "DELETE", path: "/synonym_sets/{synonymSetName}" }),
) as unknown as Schema.Codec<DeleteSynonymSetInput>;

// Output Schema
export interface DeleteSynonymSetOutput {
  name: string;
}
export const DeleteSynonymSetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    name: Schema.String,
  },
) as unknown as Schema.Codec<DeleteSynonymSetOutput>;

// The operation
/**
 * Delete a synonym set
 *
 * Delete a specific synonym set by its name
 *
 * @param synonymSetName - The name of the synonym set to delete
 */
export const deleteSynonymSet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteSynonymSetInput,
  outputSchema: DeleteSynonymSetOutput,
  errors: [NotFound] as const,
}));
