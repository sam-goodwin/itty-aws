import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation projectScheduleDeleteCancel($id: String!) {\n  projectScheduleDeleteCancel(id: $id)\n}";

// Input Schema (GraphQL variables)
export const CancelProjectScheduleDeleteInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "projectScheduleDeleteCancel",
    type: "mutation",
  }),
);
export type CancelProjectScheduleDeleteInput =
  typeof CancelProjectScheduleDeleteInput.Type;

// Output Schema (GraphQL selection set)
export const CancelProjectScheduleDeleteOutput = Schema.Boolean.pipe(
  T.ResponsePath("projectScheduleDeleteCancel"),
);
export type CancelProjectScheduleDeleteOutput =
  typeof CancelProjectScheduleDeleteOutput.Type;

/**
 * Cancel scheduled deletion of a project
 */
export const cancelProjectScheduleDelete = API.make(() => ({
  inputSchema: CancelProjectScheduleDeleteInput,
  outputSchema: CancelProjectScheduleDeleteOutput,
}));
