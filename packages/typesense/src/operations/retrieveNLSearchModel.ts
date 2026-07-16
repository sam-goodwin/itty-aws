import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface RetrieveNLSearchModelInput {
  modelId: string;
}
export const RetrieveNLSearchModelInput =
  /*@__PURE__*/ Schema.Struct({
    modelId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/nl_search_models/{modelId}" }),
  ) as unknown as Schema.Codec<RetrieveNLSearchModelInput>;

// Output Schema
export interface RetrieveNLSearchModelOutput {
  id: string;
}
export const RetrieveNLSearchModelOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String,
  }) as unknown as Schema.Codec<RetrieveNLSearchModelOutput>;

// The operation
/**
 * Retrieve a NL search model
 *
 * Retrieve a specific NL search model by its ID.
 *
 * @param modelId - The ID of the NL search model to retrieve
 */
export const retrieveNLSearchModel = /*@__PURE__*/ API.make(() => ({
  inputSchema: RetrieveNLSearchModelInput,
  outputSchema: RetrieveNLSearchModelOutput,
  errors: [NotFound] as const,
}));
