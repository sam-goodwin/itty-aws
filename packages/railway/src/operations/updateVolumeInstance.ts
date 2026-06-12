import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotAuthorized } from "./errors.ts";

const __document =
  "mutation volumeInstanceUpdate($environmentId: String, $input: VolumeInstanceUpdateInput!, $volumeId: String!) {\n  volumeInstanceUpdate(environmentId: $environmentId, input: $input, volumeId: $volumeId)\n}";

// Input Schema (GraphQL variables)
export const UpdateVolumeInstanceInput = Schema.Struct({
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
export type UpdateVolumeInstanceInput = typeof UpdateVolumeInstanceInput.Type;

// Output Schema (GraphQL selection set)
export const UpdateVolumeInstanceOutput = Schema.Boolean.pipe(
  T.ResponsePath("volumeInstanceUpdate"),
);
export type UpdateVolumeInstanceOutput = typeof UpdateVolumeInstanceOutput.Type;

/**
 * Update a volume instance. If no environmentId is provided, all volume instances for the volume will be updated.
 */
export const updateVolumeInstance = API.make(() => ({
  inputSchema: UpdateVolumeInstanceInput,
  outputSchema: UpdateVolumeInstanceOutput,
  errors: [NotAuthorized],
}));
