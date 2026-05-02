import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation projectScheduleDelete($id: String!) {\n  projectScheduleDelete(id: $id) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const ProjectScheduleDeleteInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "projectScheduleDelete",
    type: "mutation",
  }),
);
export type ProjectScheduleDeleteInput = typeof ProjectScheduleDeleteInput.Type;

// Output Schema (GraphQL selection set)
export const ProjectScheduleDeleteOutput = Schema.Boolean.pipe(
  T.ResponsePath("projectScheduleDelete"),
);
export type ProjectScheduleDeleteOutput =
  typeof ProjectScheduleDeleteOutput.Type;

/**
 * Deletes a project with a 48 hour grace period.
 */
export const projectScheduleDelete = API.make(() => ({
  inputSchema: ProjectScheduleDeleteInput,
  outputSchema: ProjectScheduleDeleteOutput,
}));
