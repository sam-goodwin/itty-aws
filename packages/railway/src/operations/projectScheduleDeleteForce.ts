import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation projectScheduleDeleteForce($id: String!) {\n  projectScheduleDeleteForce(id: $id)\n}";

// Input Schema (GraphQL variables)
export const ProjectScheduleDeleteForceInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "projectScheduleDeleteForce",
    type: "mutation",
  }),
);
export type ProjectScheduleDeleteForceInput =
  typeof ProjectScheduleDeleteForceInput.Type;

// Output Schema (GraphQL selection set)
export const ProjectScheduleDeleteForceOutput = Schema.Boolean.pipe(
  T.ResponsePath("projectScheduleDeleteForce"),
);
export type ProjectScheduleDeleteForceOutput =
  typeof ProjectScheduleDeleteForceOutput.Type;

/**
 * Force delete a scheduled deletion of a project (skips the grace period)
 */
export const projectScheduleDeleteForce = API.make(() => ({
  inputSchema: ProjectScheduleDeleteForceInput,
  outputSchema: ProjectScheduleDeleteForceOutput,
}));
