import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CreateReplicationInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    registryId: Schema.String.pipe(T.PathParam()),
    region: Schema.String,
  },
).pipe(T.Http({ method: "POST", path: "/registry/{registryId}/replication" }));
export type CreateReplicationInput = typeof CreateReplicationInput.Type;

// Output Schema
export const CreateReplicationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    region: Schema.optional(Schema.String),
    namespace: Schema.optional(Schema.String),
    urn: Schema.optional(Schema.String),
  });
export type CreateReplicationOutput = typeof CreateReplicationOutput.Type;

// The operation
/**
 * Create Replication Policy
 *
 * Create a new Replication Policy for a Container Registry Subscription
 *
 * @param registryId - The [Registry ID](#components/schemas/registry/properties/id). Which can be found by [List Registries](#operation/list-registries).
 */
export const createReplication = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateReplicationInput,
  outputSchema: CreateReplicationOutput,
  errors: [UnprocessableEntity] as const,
}));
