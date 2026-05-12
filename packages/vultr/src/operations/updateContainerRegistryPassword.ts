import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const UpdateContainerRegistryPasswordInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    registryId: Schema.String.pipe(T.PathParam()),
    old_password: Schema.optional(SensitiveString),
    new_password: Schema.optional(SensitiveString),
  }).pipe(
    T.Http({ method: "PUT", path: "/registry/{registryId}/user/password" }),
  );
export type UpdateContainerRegistryPasswordInput =
  typeof UpdateContainerRegistryPasswordInput.Type;

// Output Schema
export const UpdateContainerRegistryPasswordOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    success: Schema.optional(Schema.String),
  });
export type UpdateContainerRegistryPasswordOutput =
  typeof UpdateContainerRegistryPasswordOutput.Type;

// The operation
/**
 * Update Container Registry Password
 *
 * Update the Container Registy Password for this Container Registry Subscription
 *
 * @param registryId - The [Registry ID](#components/schemas/registry/properties/id). Which can be found by [List Registries](#operation/list-registries).
 */
export const updateContainerRegistryPassword =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UpdateContainerRegistryPasswordInput,
    outputSchema: UpdateContainerRegistryPasswordOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }));
