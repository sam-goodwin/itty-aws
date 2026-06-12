import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "query templatesCount {\n  templatesCount\n}";

// Input Schema (GraphQL variables)
export const GetTemplatesCountInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "templatesCount",
    type: "query",
  }),
);
export type GetTemplatesCountInput = typeof GetTemplatesCountInput.Type;

// Output Schema (GraphQL selection set)
export const GetTemplatesCountOutput = Schema.Number.pipe(
  T.ResponsePath("templatesCount"),
);
export type GetTemplatesCountOutput = typeof GetTemplatesCountOutput.Type;

/**
 * Count all published templates.
 */
export const getTemplatesCount = API.make(() => ({
  inputSchema: GetTemplatesCountInput,
  outputSchema: GetTemplatesCountOutput,
}));
