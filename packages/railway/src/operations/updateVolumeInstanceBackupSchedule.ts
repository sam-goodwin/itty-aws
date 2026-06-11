import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation volumeInstanceBackupScheduleUpdate($kinds: [VolumeInstanceBackupScheduleKind!]!, $volumeInstanceId: String!) {\n  volumeInstanceBackupScheduleUpdate(kinds: $kinds, volumeInstanceId: $volumeInstanceId) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const UpdateVolumeInstanceBackupScheduleInput = Schema.Struct({
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
export type UpdateVolumeInstanceBackupScheduleInput =
  typeof UpdateVolumeInstanceBackupScheduleInput.Type;

// Output Schema (GraphQL selection set)
export const UpdateVolumeInstanceBackupScheduleOutput = Schema.Boolean.pipe(
  T.ResponsePath("volumeInstanceBackupScheduleUpdate"),
);
export type UpdateVolumeInstanceBackupScheduleOutput =
  typeof UpdateVolumeInstanceBackupScheduleOutput.Type;

/**
 * Manage schedule for backups of a volume instance
 */
export const updateVolumeInstanceBackupSchedule = API.make(() => ({
  inputSchema: UpdateVolumeInstanceBackupScheduleInput,
  outputSchema: UpdateVolumeInstanceBackupScheduleOutput,
}));
