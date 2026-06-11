import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query getVolumeInstanceBackupScheduleList($volumeInstanceId: String!) {\n  volumeInstanceBackupScheduleList(volumeInstanceId: $volumeInstanceId) {\n    createdAt\n    cron\n    id\n    kind\n    name\n    retentionSeconds\n  }\n}";

// Input Schema (GraphQL variables)
export const GetVolumeInstanceBackupScheduleListInput = Schema.Struct({
  volumeInstanceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "getVolumeInstanceBackupScheduleList",
    type: "query",
  }),
);
export type GetVolumeInstanceBackupScheduleListInput =
  typeof GetVolumeInstanceBackupScheduleListInput.Type;

// Output Schema (GraphQL selection set)
export const GetVolumeInstanceBackupScheduleListOutput = Schema.Array(
  Schema.Struct({
    createdAt: Schema.String,
    cron: Schema.String,
    id: Schema.String,
    kind: Schema.Literals(["DAILY", "MONTHLY", "WEEKLY"]),
    name: Schema.String,
    retentionSeconds: Schema.NullOr(Schema.Number),
  }),
).pipe(T.ResponsePath("volumeInstanceBackupScheduleList"));
export type GetVolumeInstanceBackupScheduleListOutput =
  typeof GetVolumeInstanceBackupScheduleListOutput.Type;

/**
 * List backups schedules of a volume instance
 */
export const getVolumeInstanceBackupScheduleList = API.make(() => ({
  inputSchema: GetVolumeInstanceBackupScheduleListInput,
  outputSchema: GetVolumeInstanceBackupScheduleListOutput,
}));
