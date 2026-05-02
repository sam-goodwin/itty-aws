import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation volumeInstanceBackupLock($volumeInstanceBackupId: String!, $volumeInstanceId: String!) {\n  volumeInstanceBackupLock(volumeInstanceBackupId: $volumeInstanceBackupId, volumeInstanceId: $volumeInstanceId)\n}";

// Input Schema (GraphQL variables)
export const VolumeInstanceBackupLockInput = Schema.Struct({
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
export type VolumeInstanceBackupLockInput =
  typeof VolumeInstanceBackupLockInput.Type;

// Output Schema (GraphQL selection set)
export const VolumeInstanceBackupLockOutput = Schema.Boolean.pipe(
  T.ResponsePath("volumeInstanceBackupLock"),
);
export type VolumeInstanceBackupLockOutput =
  typeof VolumeInstanceBackupLockOutput.Type;

/**
 * Removes backup expiration date
 */
export const volumeInstanceBackupLock = API.make(() => ({
  inputSchema: VolumeInstanceBackupLockInput,
  outputSchema: VolumeInstanceBackupLockOutput,
}));
