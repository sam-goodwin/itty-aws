import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const UpdateNLSearchModelInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    modelId: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "PUT", path: "/nl_search_models/{modelId}" }));
export type UpdateNLSearchModelInput = typeof UpdateNLSearchModelInput.Type;

// Output Schema
export const UpdateNLSearchModelOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
  });
export type UpdateNLSearchModelOutput = typeof UpdateNLSearchModelOutput.Type;

// The operation
/**
 * Update a NL search model
 *
 * Update an existing NL search model.
 *
 * @param modelId - The ID of the NL search model to update
 */
export const updateNLSearchModel = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateNLSearchModelInput,
  outputSchema: UpdateNLSearchModelOutput,
  errors: [BadRequest, NotFound] as const,
}));
