import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation robot {\n  robot\n}";

// Input Schema (GraphQL variables)
export const RobotInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "robot",
    type: "mutation",
  }),
);
export type RobotInput = typeof RobotInput.Type;

// Output Schema (GraphQL selection set)
export const RobotOutput = Schema.Unknown;
export type RobotOutput = typeof RobotOutput.Type;

/**
 * Mutations that create, update, and delete Robots
 */
export const robot = API.make(() => ({
  inputSchema: RobotInput,
  outputSchema: RobotOutput,
}));
