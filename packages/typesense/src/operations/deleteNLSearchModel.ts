import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const DeleteNLSearchModelInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    modelId: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "DELETE", path: "/nl_search_models/{modelId}" }));
export type DeleteNLSearchModelInput = typeof DeleteNLSearchModelInput.Type;

// Output Schema
export const DeleteNLSearchModelOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
  });
export type DeleteNLSearchModelOutput = typeof DeleteNLSearchModelOutput.Type;

// The operation
/**
 * Delete a NL search model
 *
 * Delete a specific NL search model by its ID.
 *
 * @param modelId - The ID of the NL search model to delete
 */
export const deleteNLSearchModel = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteNLSearchModelInput,
  outputSchema: DeleteNLSearchModelOutput,
  errors: [NotFound] as const,
}));
