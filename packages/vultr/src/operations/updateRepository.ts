import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const UpdateRepositoryInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  registryId: Schema.String.pipe(T.PathParam()),
  repositoryImage: Schema.String.pipe(T.PathParam()),
  description: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/registry/{registryId}/repository/{repositoryImage}",
  }),
);
export type UpdateRepositoryInput = typeof UpdateRepositoryInput.Type;

// Output Schema
export const UpdateRepositoryOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    name: Schema.optional(Schema.String),
    image: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    added_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    pull_count: Schema.optional(Schema.Number),
    artifact_count: Schema.optional(Schema.Number),
  },
);
export type UpdateRepositoryOutput = typeof UpdateRepositoryOutput.Type;

// The operation
/**
 * Update Repository
 *
 * Update a Repository in a Container Registry Subscription
 *
 * @param registryId - The [Registry ID](#components/schemas/registry/properties/id). Which can be found by [List Registries](#operation/list-registries).
 * @param repositoryImage - The [Repository Image](#components/schemas/registry-repository/properties/image). Which can be found by [List Repositories](#operation/list-registry-repositories).
 */
export const updateRepository = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateRepositoryInput,
  outputSchema: UpdateRepositoryOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
