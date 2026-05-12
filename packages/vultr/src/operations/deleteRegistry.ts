import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const DeleteRegistryInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  registryId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/registry/{registryId}" }));
export type DeleteRegistryInput = typeof DeleteRegistryInput.Type;

// Output Schema
export const DeleteRegistryOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteRegistryOutput = typeof DeleteRegistryOutput.Type;

// The operation
/**
 * Delete Container Registry
 *
 * Deletes a Container Registry Subscription
 *
 * @param registryId - The [Registry ID](#components/schemas/registry/properties/id). Which can be found by [List Registries](#operation/list-registries).
 */
export const deleteRegistry = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteRegistryInput,
  outputSchema: DeleteRegistryOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
