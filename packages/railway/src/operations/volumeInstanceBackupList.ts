import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query volumeInstanceBackupList($volumeInstanceId: String!) {\n  volumeInstanceBackupList(volumeInstanceId: $volumeInstanceId) {\n    createdAt\n    creatorId\n    expiresAt\n    externalId\n    id\n    name\n    referencedMB\n    scheduleId\n    usedMB\n    volumeInstanceSizeMB\n  }\n}";

// Input Schema (GraphQL variables)
export const VolumeInstanceBackupListInput = Schema.Struct({
  volumeInstanceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "volumeInstanceBackupList",
    type: "query",
  }),
);
export type VolumeInstanceBackupListInput =
  typeof VolumeInstanceBackupListInput.Type;

// Output Schema (GraphQL selection set)
export const VolumeInstanceBackupListOutput = Schema.Array(
  Schema.Struct({
    createdAt: Schema.String,
    creatorId: Schema.NullOr(Schema.String),
    expiresAt: Schema.NullOr(Schema.String),
    externalId: Schema.String,
    id: Schema.String,
    name: Schema.NullOr(Schema.String),
    referencedMB: Schema.NullOr(Schema.Number),
    scheduleId: Schema.NullOr(Schema.String),
    usedMB: Schema.NullOr(Schema.Number),
    volumeInstanceSizeMB: Schema.NullOr(Schema.Number),
  }),
).pipe(T.ResponsePath("volumeInstanceBackupList"));
export type VolumeInstanceBackupListOutput =
  typeof VolumeInstanceBackupListOutput.Type;

/**
 * List backups of a volume instance
 */
export const volumeInstanceBackupList = API.make(() => ({
  inputSchema: VolumeInstanceBackupListInput,
  outputSchema: VolumeInstanceBackupListOutput,
}));
