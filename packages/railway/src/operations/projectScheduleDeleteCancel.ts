import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation projectScheduleDeleteCancel($id: String!) {\n  projectScheduleDeleteCancel(id: $id) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const ProjectScheduleDeleteCancelInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "projectScheduleDeleteCancel",
    type: "mutation",
  }),
);
export type ProjectScheduleDeleteCancelInput =
  typeof ProjectScheduleDeleteCancelInput.Type;

// Output Schema (GraphQL selection set)
export const ProjectScheduleDeleteCancelOutput = Schema.Boolean.pipe(
  T.ResponsePath("projectScheduleDeleteCancel"),
);
export type ProjectScheduleDeleteCancelOutput =
  typeof ProjectScheduleDeleteCancelOutput.Type;

/**
 * Cancel scheduled deletion of a project
 */
export const projectScheduleDeleteCancel = API.make(() => ({
  inputSchema: ProjectScheduleDeleteCancelInput,
  outputSchema: ProjectScheduleDeleteCancelOutput,
}));
