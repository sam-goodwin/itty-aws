import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export interface UpdateNLSearchModelInput {
  modelId: string;
}
export const UpdateNLSearchModelInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    modelId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "PUT", path: "/nl_search_models/{modelId}" }),
  ) as unknown as Schema.Codec<UpdateNLSearchModelInput>;

// Output Schema
export interface UpdateNLSearchModelOutput {
  id: string;
}
export const UpdateNLSearchModelOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
  }) as unknown as Schema.Codec<UpdateNLSearchModelOutput>;

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
