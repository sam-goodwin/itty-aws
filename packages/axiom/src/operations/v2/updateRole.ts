import * as Schema from "effect/Schema";
import {
  roleDatasetCapabilitiesSchema,
  roleOrgCapabilitiesSchema,
  roleViewCapabilitiesSchema,
} from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound, UnprocessableEntity } from "../../errors.ts";

// Input Schema
export const UpdateRoleInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
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
}).pipe(T.Http({ method: "PUT", path: "/v2/rbac/roles/{id}" }));
export type UpdateRoleInput = typeof UpdateRoleInput.Type;

// Output Schema
export const UpdateRoleOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type UpdateRoleOutput = typeof UpdateRoleOutput.Type;

// The operation
/**
 * Update role
 *
 * Updates an existing role's configuration including its permissions and member assignments.
 *
 * @param id - Unique identifier of the role to update
 */
export const updateRole = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateRoleInput,
  outputSchema: UpdateRoleOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
