import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation convexTeamConnection {\n  convexTeamConnection\n}";

// Input Schema (GraphQL variables)
export const ConvexTeamConnectionInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "convexTeamConnection",
    type: "mutation",
  }),
);
export type ConvexTeamConnectionInput = typeof ConvexTeamConnectionInput.Type;

// Output Schema (GraphQL selection set)
export const ConvexTeamConnectionOutput = Schema.Unknown;
export type ConvexTeamConnectionOutput = typeof ConvexTeamConnectionOutput.Type;

export const convexTeamConnection = API.make(() => ({
  inputSchema: ConvexTeamConnectionInput,
  outputSchema: ConvexTeamConnectionOutput,
}));
