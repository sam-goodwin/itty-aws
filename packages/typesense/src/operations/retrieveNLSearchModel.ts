import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const RetrieveNLSearchModelInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    modelId: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/nl_search_models/{modelId}" }));
export type RetrieveNLSearchModelInput = typeof RetrieveNLSearchModelInput.Type;

// Output Schema
export const RetrieveNLSearchModelOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
  });
export type RetrieveNLSearchModelOutput =
  typeof RetrieveNLSearchModelOutput.Type;

// The operation
/**
 * Retrieve a NL search model
 *
 * Retrieve a specific NL search model by its ID.
 *
 * @param modelId - The ID of the NL search model to retrieve
 */
export const retrieveNLSearchModel = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RetrieveNLSearchModelInput,
    outputSchema: RetrieveNLSearchModelOutput,
    errors: [NotFound] as const,
  }),
);
