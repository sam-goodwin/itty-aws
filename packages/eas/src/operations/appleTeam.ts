import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation appleTeam {\n  appleTeam\n}";

// Input Schema (GraphQL variables)
export const AppleTeamInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "appleTeam",
    type: "mutation",
  }),
);
export type AppleTeamInput = typeof AppleTeamInput.Type;

// Output Schema (GraphQL selection set)
export const AppleTeamOutput = Schema.Unknown;
export type AppleTeamOutput = typeof AppleTeamOutput.Type;

/**
 * Mutations that modify an Apple Team
 */
export const appleTeam = API.make(() => ({
  inputSchema: AppleTeamInput,
  outputSchema: AppleTeamOutput,
}));
