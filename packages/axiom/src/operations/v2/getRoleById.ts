import * as Schema from "effect/Schema";
import {
  roleDatasetCapabilitiesSchema,
  roleOrgCapabilitiesSchema,
  roleViewCapabilitiesSchema,
} from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export const GetRoleByIdInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/v2/rbac/roles/{id}" }));
export type GetRoleByIdInput = typeof GetRoleByIdInput.Type;

// Output Schema
export const GetRoleByIdOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  datasetCapabilities: Schema.optional(
    Schema.suspend(() => roleDatasetCapabilitiesSchema),
  ),
  description: Schema.optional(Schema.String),
  members: Schema.optional(Schema.Array(Schema.String)),
  name: Schema.String,
  orgCapabilities: Schema.optional(
    Schema.suspend(() => roleOrgCapabilitiesSchema),
  ),
  viewCapabilities: Schema.optional(
    Schema.suspend(() => roleViewCapabilitiesSchema),
  ),
  id: Schema.String,
});
export type GetRoleByIdOutput = typeof GetRoleByIdOutput.Type;

// The operation
/**
 * Get role by ID
 *
 * Retrieves detailed information about a specific role by its unique identifier.
 *
 * @param id - Unique identifier of the role to retrieve
 */
export const getRoleById = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetRoleByIdInput,
  outputSchema: GetRoleByIdOutput,
  errors: [NotFound] as const,
}));
