import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query templatesCount {\n  templatesCount {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const TemplatesCountInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "templatesCount",
    type: "query",
  }),
);
export type TemplatesCountInput = typeof TemplatesCountInput.Type;

// Output Schema (GraphQL selection set)
export const TemplatesCountOutput = Schema.Number.pipe(
  T.ResponsePath("templatesCount"),
);
export type TemplatesCountOutput = typeof TemplatesCountOutput.Type;

/**
 * Count all published templates.
 */
export const templatesCount = API.make(() => ({
  inputSchema: TemplatesCountInput,
  outputSchema: TemplatesCountOutput,
}));
