import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query volumeInstanceBackupScheduleList($volumeInstanceId: String!) {\n  volumeInstanceBackupScheduleList(volumeInstanceId: $volumeInstanceId) {\n    createdAt\n    cron\n    id\n    kind\n    name\n    retentionSeconds\n  }\n}";

// Input Schema (GraphQL variables)
export const VolumeInstanceBackupScheduleListInput = Schema.Struct({
  volumeInstanceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "volumeInstanceBackupScheduleList",
    type: "query",
  }),
);
export type VolumeInstanceBackupScheduleListInput =
  typeof VolumeInstanceBackupScheduleListInput.Type;

// Output Schema (GraphQL selection set)
export const VolumeInstanceBackupScheduleListOutput = Schema.Array(
  Schema.Struct({
    createdAt: Schema.String,
    cron: Schema.String,
    id: Schema.String,
    kind: Schema.Literals(["DAILY", "MONTHLY", "WEEKLY"]),
    name: Schema.String,
    retentionSeconds: Schema.NullOr(Schema.Number),
  }),
).pipe(T.ResponsePath("volumeInstanceBackupScheduleList"));
export type VolumeInstanceBackupScheduleListOutput =
  typeof VolumeInstanceBackupScheduleListOutput.Type;

/**
 * List backups schedules of a volume instance
 */
export const volumeInstanceBackupScheduleList = API.make(() => ({
  inputSchema: VolumeInstanceBackupScheduleListInput,
  outputSchema: VolumeInstanceBackupScheduleListOutput,
}));
