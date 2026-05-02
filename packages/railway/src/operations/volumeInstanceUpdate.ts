import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation volumeInstanceUpdate($environmentId: String, $input: VolumeInstanceUpdateInput!, $volumeId: String!) {\n  volumeInstanceUpdate(environmentId: $environmentId, input: $input, volumeId: $volumeId)\n}";

// Input Schema (GraphQL variables)
export const VolumeInstanceUpdateInput = Schema.Struct({
  environmentId: Schema.optional(Schema.NullOr(Schema.String)),
  input: Schema.Struct({
    mountPath: Schema.optional(Schema.NullOr(Schema.String)),
    serviceId: Schema.optional(Schema.NullOr(Schema.String)),
    state: Schema.optional(
      Schema.NullOr(
        Schema.Literals([
          "DELETED",
          "DELETING",
          "ERROR",
          "MIGRATING",
          "MIGRATION_PENDING",
          "READY",
          "RESTORING",
          "UPDATING",
        ]),
      ),
    ),
  }),
  volumeId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "volumeInstanceUpdate",
    type: "mutation",
  }),
);
export type VolumeInstanceUpdateInput = typeof VolumeInstanceUpdateInput.Type;

// Output Schema (GraphQL selection set)
export const VolumeInstanceUpdateOutput = Schema.Boolean.pipe(
  T.ResponsePath("volumeInstanceUpdate"),
);
export type VolumeInstanceUpdateOutput = typeof VolumeInstanceUpdateOutput.Type;

/**
 * Update a volume instance. If no environmentId is provided, all volume instances for the volume will be updated.
 */
export const volumeInstanceUpdate = API.make(() => ({
  inputSchema: VolumeInstanceUpdateInput,
  outputSchema: VolumeInstanceUpdateOutput,
}));
