import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation deleteVolume($volumeId: String!) {\n  volumeDelete(volumeId: $volumeId) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const DeleteVolumeInput = Schema.Struct({
  volumeId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "deleteVolume",
    type: "mutation",
  }),
);
export type DeleteVolumeInput = typeof DeleteVolumeInput.Type;

// Output Schema (GraphQL selection set)
export const DeleteVolumeOutput = Schema.Boolean.pipe(
  T.ResponsePath("volumeDelete"),
);
export type DeleteVolumeOutput = typeof DeleteVolumeOutput.Type;

/**
 * Delete a persistent volume in a project
 */
export const deleteVolume = API.make(() => ({
  inputSchema: DeleteVolumeInput,
  outputSchema: DeleteVolumeOutput,
}));
