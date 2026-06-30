import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface RetrieveAllNLSearchModelsInput {}
export const RetrieveAllNLSearchModelsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/nl_search_models" }),
  ) as unknown as Schema.Codec<RetrieveAllNLSearchModelsInput>;

// Output Schema
export type RetrieveAllNLSearchModelsOutput = { id: string }[];
export const RetrieveAllNLSearchModelsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      id: Schema.String,
    }),
  ) as unknown as Schema.Codec<RetrieveAllNLSearchModelsOutput>;

// The operation
/**
 * List all NL search models
 *
 * Retrieve all NL search models.
 */
export const retrieveAllNLSearchModels = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RetrieveAllNLSearchModelsInput,
    outputSchema: RetrieveAllNLSearchModelsOutput,
  }),
);
