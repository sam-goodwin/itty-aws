import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const DeleteReplicationInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    registryId: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "/registry/{registryId}/replication/{region}",
  }),
);
export type DeleteReplicationInput = typeof DeleteReplicationInput.Type;

// Output Schema
export const DeleteReplicationOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteReplicationOutput = typeof DeleteReplicationOutput.Type;

// The operation
/**
 * Delete Replication Policy
 *
 * Deletes a Replication Policy from a Container Registry Subscription
 *
 * @param registryId - The [Registry ID](#components/schemas/registry/properties/id). Which can be found by [List Registries](#operation/list-registries).
 * @param VCR Region - The [VCR Region](#components/schemas/replication/properties/region). Which can be found by [List Region](#operation/list-registry-regions).
 */
export const deleteReplication = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteReplicationInput,
  outputSchema: DeleteReplicationOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
