import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation volumeInstanceBackupCreate($name: String, $volumeInstanceId: String!) {\n  volumeInstanceBackupCreate(name: $name, volumeInstanceId: $volumeInstanceId) {\n    workflowId\n  }\n}";

// Input Schema (GraphQL variables)
export const VolumeInstanceBackupCreateInput = Schema.Struct({
  name: Schema.optional(Schema.NullOr(Schema.String)),
  volumeInstanceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "volumeInstanceBackupCreate",
    type: "mutation",
  }),
);
export type VolumeInstanceBackupCreateInput =
  typeof VolumeInstanceBackupCreateInput.Type;

// Output Schema (GraphQL selection set)
export const VolumeInstanceBackupCreateOutput = Schema.Struct({
  workflowId: Schema.NullOr(Schema.String),
}).pipe(T.ResponsePath("volumeInstanceBackupCreate"));
export type VolumeInstanceBackupCreateOutput =
  typeof VolumeInstanceBackupCreateOutput.Type;

/**
 * Create backup of a volume instance
 */
export const volumeInstanceBackupCreate = API.make(() => ({
  inputSchema: VolumeInstanceBackupCreateInput,
  outputSchema: VolumeInstanceBackupCreateOutput,
}));
