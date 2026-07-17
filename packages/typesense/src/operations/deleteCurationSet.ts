import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface DeleteCurationSetInput {
  curationSetName: string;
}
export const DeleteCurationSetInput = /*@__PURE__*/ Schema.Struct({
  curationSetName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "DELETE", path: "/curation_sets/{curationSetName}" }),
) as unknown as Schema.Codec<DeleteCurationSetInput>;

// Output Schema
export interface DeleteCurationSetOutput {
  name: string;
}
export const DeleteCurationSetOutput =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String,
  }) as unknown as Schema.Codec<DeleteCurationSetOutput>;

// The operation
/**
 * Delete a curation set
 *
 * Delete a specific curation set by its name
 *
 * @param curationSetName - The name of the curation set to delete
 */
export const deleteCurationSet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeleteCurationSetInput,
  outputSchema: DeleteCurationSetOutput,
  errors: [NotFound] as const,
}));
