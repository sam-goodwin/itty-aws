import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const ReadReplicationInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  registryId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/registry/{registryId}/replication/{region}",
  }),
);
export type ReadReplicationInput = typeof ReadReplicationInput.Type;

// Output Schema
export const ReadReplicationOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  region: Schema.optional(Schema.String),
  namespace: Schema.optional(Schema.String),
  urn: Schema.optional(Schema.String),
});
export type ReadReplicationOutput = typeof ReadReplicationOutput.Type;

// The operation
/**
 * Read Replication Policy
 *
 * Get a single Replication Policy in a Container Registry Subscription
 *
 * @param registryId - The [Registry ID](#components/schemas/registry/properties/id). Which can be found by [List Registries](#operation/list-registries).
 * @param VCR Region - The [VCR Region](#components/schemas/replication/properties/region). Which can be found by [List Region](#operation/list-registry-regions).
 */
export const readReplication = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ReadReplicationInput,
  outputSchema: ReadReplicationOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
