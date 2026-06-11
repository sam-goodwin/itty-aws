import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation restoreVolumeInstanceBackup($volumeInstanceBackupId: String!, $volumeInstanceId: String!) {\n  volumeInstanceBackupRestore(volumeInstanceBackupId: $volumeInstanceBackupId, volumeInstanceId: $volumeInstanceId) {\n    workflowId\n  }\n}";

// Input Schema (GraphQL variables)
export const RestoreVolumeInstanceBackupInput = Schema.Struct({
  volumeInstanceBackupId: Schema.String,
  volumeInstanceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "restoreVolumeInstanceBackup",
    type: "mutation",
  }),
);
export type RestoreVolumeInstanceBackupInput =
  typeof RestoreVolumeInstanceBackupInput.Type;

// Output Schema (GraphQL selection set)
export const RestoreVolumeInstanceBackupOutput = Schema.Struct({
  workflowId: Schema.NullOr(Schema.String),
}).pipe(T.ResponsePath("volumeInstanceBackupRestore"));
export type RestoreVolumeInstanceBackupOutput =
  typeof RestoreVolumeInstanceBackupOutput.Type;

/**
 * Restore a volume instance from a backup
 */
export const restoreVolumeInstanceBackup = API.make(() => ({
  inputSchema: RestoreVolumeInstanceBackupInput,
  outputSchema: RestoreVolumeInstanceBackupOutput,
}));
