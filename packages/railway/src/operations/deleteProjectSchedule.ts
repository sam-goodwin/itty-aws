import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation deleteProjectSchedule($id: String!) {\n  projectScheduleDelete(id: $id) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const DeleteProjectScheduleInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "deleteProjectSchedule",
    type: "mutation",
  }),
);
export type DeleteProjectScheduleInput = typeof DeleteProjectScheduleInput.Type;

// Output Schema (GraphQL selection set)
export const DeleteProjectScheduleOutput = Schema.Boolean.pipe(
  T.ResponsePath("projectScheduleDelete"),
);
export type DeleteProjectScheduleOutput =
  typeof DeleteProjectScheduleOutput.Type;

/**
 * Deletes a project with a 48 hour grace period.
 */
export const deleteProjectSchedule = API.make(() => ({
  inputSchema: DeleteProjectScheduleInput,
  outputSchema: DeleteProjectScheduleOutput,
}));
