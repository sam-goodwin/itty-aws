import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation restoreVolumeInstancePITR($newServiceName: String, $sourceRepoPath: String, $targetTimestamp: DateTime!, $volumeInstanceId: String!) {\n  volumeInstancePITRRestore(newServiceName: $newServiceName, sourceRepoPath: $sourceRepoPath, targetTimestamp: $targetTimestamp, volumeInstanceId: $volumeInstanceId) {\n    workflowId\n  }\n}";

// Input Schema (GraphQL variables)
export const RestoreVolumeInstancePITRInput = Schema.Struct({
  newServiceName: Schema.optional(Schema.NullOr(Schema.String)),
  sourceRepoPath: Schema.optional(Schema.NullOr(Schema.String)),
  targetTimestamp: Schema.String,
  volumeInstanceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "restoreVolumeInstancePITR",
    type: "mutation",
  }),
);
export type RestoreVolumeInstancePITRInput =
  typeof RestoreVolumeInstancePITRInput.Type;

// Output Schema (GraphQL selection set)
export const RestoreVolumeInstancePITROutput = Schema.Struct({
  workflowId: Schema.NullOr(Schema.String),
}).pipe(T.ResponsePath("volumeInstancePITRRestore"));
export type RestoreVolumeInstancePITROutput =
  typeof RestoreVolumeInstancePITROutput.Type;

/**
 * Point-in-time restore. Creates a brand-new Postgres service in the project. The image populates the new service's volume from the source bucket via `pgbackrest restore --type=time --target=<T>` on first boot, replays WAL forward, and promotes. Source service stays online and untouched.
 */
export const restoreVolumeInstancePITR = API.make(() => ({
  inputSchema: RestoreVolumeInstancePITRInput,
  outputSchema: RestoreVolumeInstancePITROutput,
}));
