import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation volumeInstanceBackupRestore($volumeInstanceBackupId: String!, $volumeInstanceId: String!) {\n  volumeInstanceBackupRestore(volumeInstanceBackupId: $volumeInstanceBackupId, volumeInstanceId: $volumeInstanceId) {\n    workflowId\n  }\n}";

// Input Schema (GraphQL variables)
export const VolumeInstanceBackupRestoreInput = Schema.Struct({
  volumeInstanceBackupId: Schema.String,
  volumeInstanceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "volumeInstanceBackupRestore",
    type: "mutation",
  }),
);
export type VolumeInstanceBackupRestoreInput =
  typeof VolumeInstanceBackupRestoreInput.Type;

// Output Schema (GraphQL selection set)
export const VolumeInstanceBackupRestoreOutput = Schema.Struct({
  workflowId: Schema.NullOr(Schema.String),
}).pipe(T.ResponsePath("volumeInstanceBackupRestore"));
export type VolumeInstanceBackupRestoreOutput =
  typeof VolumeInstanceBackupRestoreOutput.Type;

/**
 * Restore a volume instance from a backup
 */
export const volumeInstanceBackupRestore = API.make(() => ({
  inputSchema: VolumeInstanceBackupRestoreInput,
  outputSchema: VolumeInstanceBackupRestoreOutput,
}));
