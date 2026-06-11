import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation forceDeleteProjectSchedule($id: String!) {\n  projectScheduleDeleteForce(id: $id) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const ForceDeleteProjectScheduleInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "forceDeleteProjectSchedule",
    type: "mutation",
  }),
);
export type ForceDeleteProjectScheduleInput =
  typeof ForceDeleteProjectScheduleInput.Type;

// Output Schema (GraphQL selection set)
export const ForceDeleteProjectScheduleOutput = Schema.Boolean.pipe(
  T.ResponsePath("projectScheduleDeleteForce"),
);
export type ForceDeleteProjectScheduleOutput =
  typeof ForceDeleteProjectScheduleOutput.Type;

/**
 * Force delete a scheduled deletion of a project (skips the grace period)
 */
export const forceDeleteProjectSchedule = API.make(() => ({
  inputSchema: ForceDeleteProjectScheduleInput,
  outputSchema: ForceDeleteProjectScheduleOutput,
}));
