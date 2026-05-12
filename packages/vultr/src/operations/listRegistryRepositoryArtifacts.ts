import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const ListRegistryRepositoryArtifactsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    registryId: Schema.String.pipe(T.PathParam()),
    repositoryImage: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/registry/{registryId}/repository/{repositoryImage}/artifacts",
    }),
  );
export type ListRegistryRepositoryArtifactsInput =
  typeof ListRegistryRepositoryArtifactsInput.Type;

// Output Schema
export const ListRegistryRepositoryArtifactsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    artifacts: Schema.optional(
      Schema.Array(
        Schema.Struct({
          artifact_type: Schema.optional(Schema.String),
          digest: Schema.optional(Schema.String),
          manifest_media_type: Schema.optional(Schema.String),
          media_type: Schema.optional(Schema.String),
          pull_time: Schema.optional(Schema.String),
          push_time: Schema.optional(Schema.String),
          repository_name: Schema.optional(Schema.String),
          size: Schema.optional(Schema.Number),
          type: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Array(Schema.Unknown)),
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
export type ListRegistryRepositoryArtifactsOutput =
  typeof ListRegistryRepositoryArtifactsOutput.Type;

// The operation
/**
 * List Artifacts
 *
 * List All Artifacts in a Container Registry Repository
 *
 * @param registryId - The [Registry ID](#components/schemas/registry/properties/id). Which can be found by [List Registries](#operation/list-registries).
 * @param repositoryImage - The [Repository Image](#components/schemas/registry-repository/properties/image). Which can be found by [List Repositories](#operation/list-registry-repositories).
 */
export const listRegistryRepositoryArtifacts =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListRegistryRepositoryArtifactsInput,
    outputSchema: ListRegistryRepositoryArtifactsOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }));
