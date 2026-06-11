import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation createVolumeInstanceBackup($name: String, $volumeInstanceId: String!) {\n  volumeInstanceBackupCreate(name: $name, volumeInstanceId: $volumeInstanceId) {\n    workflowId\n  }\n}";

// Input Schema (GraphQL variables)
export const CreateVolumeInstanceBackupInput = Schema.Struct({
  name: Schema.optional(Schema.NullOr(Schema.String)),
  volumeInstanceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "createVolumeInstanceBackup",
    type: "mutation",
  }),
);
export type CreateVolumeInstanceBackupInput =
  typeof CreateVolumeInstanceBackupInput.Type;

// Output Schema (GraphQL selection set)
export const CreateVolumeInstanceBackupOutput = Schema.Struct({
  workflowId: Schema.NullOr(Schema.String),
}).pipe(T.ResponsePath("volumeInstanceBackupCreate"));
export type CreateVolumeInstanceBackupOutput =
  typeof CreateVolumeInstanceBackupOutput.Type;

/**
 * Create backup of a volume instance
 */
export const createVolumeInstanceBackup = API.make(() => ({
  inputSchema: CreateVolumeInstanceBackupInput,
  outputSchema: CreateVolumeInstanceBackupOutput,
}));
