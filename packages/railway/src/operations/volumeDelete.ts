import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation volumeDelete($volumeId: String!) {\n  volumeDelete(volumeId: $volumeId) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const VolumeDeleteInput = Schema.Struct({
  volumeId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "volumeDelete",
    type: "mutation",
  }),
);
export type VolumeDeleteInput = typeof VolumeDeleteInput.Type;

// Output Schema (GraphQL selection set)
export const VolumeDeleteOutput = Schema.Boolean.pipe(
  T.ResponsePath("volumeDelete"),
);
export type VolumeDeleteOutput = typeof VolumeDeleteOutput.Type;

/**
 * Delete a persistent volume in a project
 */
export const volumeDelete = API.make(() => ({
  inputSchema: VolumeDeleteInput,
  outputSchema: VolumeDeleteOutput,
}));
