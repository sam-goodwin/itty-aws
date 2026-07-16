import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface DeleteNLSearchModelInput {
  modelId: string;
}
export const DeleteNLSearchModelInput =
  /*@__PURE__*/ Schema.Struct({
    modelId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/nl_search_models/{modelId}" }),
  ) as unknown as Schema.Codec<DeleteNLSearchModelInput>;

// Output Schema
export interface DeleteNLSearchModelOutput {
  id: string;
}
export const DeleteNLSearchModelOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String,
  }) as unknown as Schema.Codec<DeleteNLSearchModelOutput>;

// The operation
/**
 * Delete a NL search model
 *
 * Delete a specific NL search model by its ID.
 *
 * @param modelId - The ID of the NL search model to delete
 */
export const deleteNLSearchModel = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeleteNLSearchModelInput,
  outputSchema: DeleteNLSearchModelOutput,
  errors: [NotFound] as const,
}));
