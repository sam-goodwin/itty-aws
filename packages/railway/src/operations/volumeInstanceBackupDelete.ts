import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation volumeInstanceBackupDelete($volumeInstanceBackupId: String!, $volumeInstanceId: String!) {\n  volumeInstanceBackupDelete(volumeInstanceBackupId: $volumeInstanceBackupId, volumeInstanceId: $volumeInstanceId) {\n    workflowId\n  }\n}";

// Input Schema (GraphQL variables)
export const VolumeInstanceBackupDeleteInput = Schema.Struct({
  volumeInstanceBackupId: Schema.String,
  volumeInstanceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "volumeInstanceBackupDelete",
    type: "mutation",
  }),
);
export type VolumeInstanceBackupDeleteInput =
  typeof VolumeInstanceBackupDeleteInput.Type;

// Output Schema (GraphQL selection set)
export const VolumeInstanceBackupDeleteOutput = Schema.Struct({
  workflowId: Schema.NullOr(Schema.String),
}).pipe(T.ResponsePath("volumeInstanceBackupDelete"));
export type VolumeInstanceBackupDeleteOutput =
  typeof VolumeInstanceBackupDeleteOutput.Type;

/**
 * Deletes volume instance backup
 */
export const volumeInstanceBackupDelete = API.make(() => ({
  inputSchema: VolumeInstanceBackupDeleteInput,
  outputSchema: VolumeInstanceBackupDeleteOutput,
}));
