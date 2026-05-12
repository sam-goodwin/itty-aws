import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const DeleteRepositoryInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  registryId: Schema.String.pipe(T.PathParam()),
  repositoryImage: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/registry/{registryId}/repository/{repositoryImage}",
  }),
);
export type DeleteRepositoryInput = typeof DeleteRepositoryInput.Type;

// Output Schema
export const DeleteRepositoryOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteRepositoryOutput = typeof DeleteRepositoryOutput.Type;

// The operation
/**
 * Delete Repository
 *
 * Deletes a Repository from a Container Registry Subscription
 *
 * @param registryId - The [Registry ID](#components/schemas/registry/properties/id). Which can be found by [List Registries](#operation/list-registries).
 * @param repositoryImage - The [Repository Image](#components/schemas/registry-repository/properties/image). Which can be found by [List Repositories](#operation/list-registry-repositories).
 */
export const deleteRepository = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteRepositoryInput,
  outputSchema: DeleteRepositoryOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
