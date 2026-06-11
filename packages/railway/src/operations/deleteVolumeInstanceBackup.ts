import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation deleteVolumeInstanceBackup($volumeInstanceBackupId: String!, $volumeInstanceId: String!) {\n  volumeInstanceBackupDelete(volumeInstanceBackupId: $volumeInstanceBackupId, volumeInstanceId: $volumeInstanceId) {\n    workflowId\n  }\n}";

// Input Schema (GraphQL variables)
export const DeleteVolumeInstanceBackupInput = Schema.Struct({
  volumeInstanceBackupId: Schema.String,
  volumeInstanceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "deleteVolumeInstanceBackup",
    type: "mutation",
  }),
);
export type DeleteVolumeInstanceBackupInput =
  typeof DeleteVolumeInstanceBackupInput.Type;

// Output Schema (GraphQL selection set)
export const DeleteVolumeInstanceBackupOutput = Schema.Struct({
  workflowId: Schema.NullOr(Schema.String),
}).pipe(T.ResponsePath("volumeInstanceBackupDelete"));
export type DeleteVolumeInstanceBackupOutput =
  typeof DeleteVolumeInstanceBackupOutput.Type;

/**
 * Deletes volume instance backup
 */
export const deleteVolumeInstanceBackup = API.make(() => ({
  inputSchema: DeleteVolumeInstanceBackupInput,
  outputSchema: DeleteVolumeInstanceBackupOutput,
}));
