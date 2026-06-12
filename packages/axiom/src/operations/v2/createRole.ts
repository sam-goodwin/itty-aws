import * as Schema from "effect/Schema";
import {
  roleDatasetCapabilitiesSchema,
  roleOrgCapabilitiesSchema,
  roleViewCapabilitiesSchema,
} from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { UnprocessableEntity } from "../../errors.ts";

// Input Schema
export const CreateRoleInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}).pipe(T.Http({ method: "POST", path: "/v2/rbac/roles" }));
export type CreateRoleInput = typeof CreateRoleInput.Type;

// Output Schema
export const CreateRoleOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type CreateRoleOutput = typeof CreateRoleOutput.Type;

// The operation
/**
 * Create role
 *
 * Creates a new role in the organization with the specified permissions and member assignments.
 */
export const createRole = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateRoleInput,
  outputSchema: CreateRoleOutput,
  errors: [UnprocessableEntity] as const,
}));
