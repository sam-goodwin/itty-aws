import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const ReadRegistryRepositoryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    registryId: Schema.String.pipe(T.PathParam()),
    repositoryImage: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/registry/{registryId}/repository/{repositoryImage}",
    }),
  );
export type ReadRegistryRepositoryInput =
  typeof ReadRegistryRepositoryInput.Type;

// Output Schema
export const ReadRegistryRepositoryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    image: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    added_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    pull_count: Schema.optional(Schema.Number),
    artifact_count: Schema.optional(Schema.Number),
  });
export type ReadRegistryRepositoryOutput =
  typeof ReadRegistryRepositoryOutput.Type;

// The operation
/**
 * Read Repository
 *
 * Get a single Repository in a Container Registry Subscription
 *
 * @param registryId - The [Registry ID](#components/schemas/registry/properties/id). Which can be found by [List Registries](#operation/list-registries).
 * @param repositoryImage - The [Repository Image](#components/schemas/registry-repository/properties/image). Which can be found by [List Repositories](#operation/list-registry-repositories).
 */
export const readRegistryRepository = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReadRegistryRepositoryInput,
    outputSchema: ReadRegistryRepositoryOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }),
);
