import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const ListRegistryRepositoriesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    registryId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/registry/{registryId}/repositories" }),
  );
export type ListRegistryRepositoriesInput =
  typeof ListRegistryRepositoriesInput.Type;

// Output Schema
export const ListRegistryRepositoriesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    repositories: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          image: Schema.optional(Schema.String),
          description: Schema.optional(Schema.String),
          added_at: Schema.optional(Schema.String),
          updated_at: Schema.optional(Schema.String),
          pull_count: Schema.optional(Schema.Number),
          artifact_count: Schema.optional(Schema.Number),
        }),
      ),
    ),
    meta: Schema.optional(
      Schema.Struct({
        total: Schema.optional(Schema.Number),
        links: Schema.optional(
          Schema.Struct({
            next: Schema.optional(Schema.String),
            prev: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  });
export type ListRegistryRepositoriesOutput =
  typeof ListRegistryRepositoriesOutput.Type;

// The operation
/**
 * List Repositories
 *
 * List All Repositories in a Container Registry Subscription
 *
 * @param registryId - The [Registry ID](#components/schemas/registry/properties/id). Which can be found by [List Registries](#operation/list-registries).
 */
export const listRegistryRepositories = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListRegistryRepositoriesInput,
    outputSchema: ListRegistryRepositoriesOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }),
);
