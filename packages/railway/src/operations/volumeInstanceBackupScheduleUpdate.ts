import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation volumeInstanceBackupScheduleUpdate($kinds: [VolumeInstanceBackupScheduleKind!]!, $volumeInstanceId: String!) {\n  volumeInstanceBackupScheduleUpdate(kinds: $kinds, volumeInstanceId: $volumeInstanceId)\n}";

// Input Schema (GraphQL variables)
export const VolumeInstanceBackupScheduleUpdateInput = Schema.Struct({
  kinds: Schema.Array(Schema.Literals(["DAILY", "MONTHLY", "WEEKLY"])),
  volumeInstanceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "volumeInstanceBackupScheduleUpdate",
    type: "mutation",
  }),
);
export type VolumeInstanceBackupScheduleUpdateInput =
  typeof VolumeInstanceBackupScheduleUpdateInput.Type;

// Output Schema (GraphQL selection set)
export const VolumeInstanceBackupScheduleUpdateOutput = Schema.Boolean.pipe(
  T.ResponsePath("volumeInstanceBackupScheduleUpdate"),
);
export type VolumeInstanceBackupScheduleUpdateOutput =
  typeof VolumeInstanceBackupScheduleUpdateOutput.Type;

/**
 * Manage schedule for backups of a volume instance
 */
export const volumeInstanceBackupScheduleUpdate = API.make(() => ({
  inputSchema: VolumeInstanceBackupScheduleUpdateInput,
  outputSchema: VolumeInstanceBackupScheduleUpdateOutput,
}));
