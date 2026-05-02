import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation environmentDelete($id: String!) {\n  environmentDelete(id: $id) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const EnvironmentDeleteInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "environmentDelete",
    type: "mutation",
  }),
);
export type EnvironmentDeleteInput = typeof EnvironmentDeleteInput.Type;

// Output Schema (GraphQL selection set)
export const EnvironmentDeleteOutput = Schema.Boolean.pipe(
  T.ResponsePath("environmentDelete"),
);
export type EnvironmentDeleteOutput = typeof EnvironmentDeleteOutput.Type;

/**
 * Deletes an environment.
 */
export const environmentDelete = API.make(() => ({
  inputSchema: EnvironmentDeleteInput,
  outputSchema: EnvironmentDeleteOutput,
}));
