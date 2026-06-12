import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation volumeInstanceBackupLock($volumeInstanceBackupId: String!, $volumeInstanceId: String!) {\n  volumeInstanceBackupLock(volumeInstanceBackupId: $volumeInstanceBackupId, volumeInstanceId: $volumeInstanceId)\n}";

// Input Schema (GraphQL variables)
export const LockVolumeInstanceBackupInput = Schema.Struct({
  volumeInstanceBackupId: Schema.String,
  volumeInstanceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "volumeInstanceBackupLock",
    type: "mutation",
  }),
);
export type LockVolumeInstanceBackupInput =
  typeof LockVolumeInstanceBackupInput.Type;

// Output Schema (GraphQL selection set)
export const LockVolumeInstanceBackupOutput = Schema.Boolean.pipe(
  T.ResponsePath("volumeInstanceBackupLock"),
);
export type LockVolumeInstanceBackupOutput =
  typeof LockVolumeInstanceBackupOutput.Type;

/**
 * Removes backup expiration date
 */
export const lockVolumeInstanceBackup = API.make(() => ({
  inputSchema: LockVolumeInstanceBackupInput,
  outputSchema: LockVolumeInstanceBackupOutput,
}));
