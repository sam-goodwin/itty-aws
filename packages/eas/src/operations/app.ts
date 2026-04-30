import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation app($appId: ID) {\n  app(appId: $appId)\n}";

// Input Schema (GraphQL variables)
export const AppInput = Schema.Struct({
  appId: Schema.optional(Schema.NullOr(Schema.String)),
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "app",
    type: "mutation",
  }),
);
export type AppInput = typeof AppInput.Type;

// Output Schema (GraphQL selection set)
export const AppOutput = Schema.NullOr(Schema.Unknown);
export type AppOutput = typeof AppOutput.Type;

/**
 * Mutations that modify an App
 */
export const app = API.make(() => ({
  inputSchema: AppInput,
  outputSchema: AppOutput,
}));
