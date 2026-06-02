import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const GetOrganizationRoleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_role_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organization_roles/{organization_role_id}",
    }),
  );
export type GetOrganizationRoleInput = typeof GetOrganizationRoleInput.Type;

// Output Schema
export const GetOrganizationRoleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Literals(["role"]),
    id: Schema.String,
    name: Schema.String,
    key: Schema.String,
    description: Schema.NullOr(Schema.String),
    is_creator_eligible: Schema.Boolean,
    permissions: Schema.Array(
      Schema.Struct({
        object: Schema.Literals(["permission"]),
        id: Schema.String,
        name: Schema.String,
        key: Schema.String,
        description: Schema.String,
        type: Schema.String,
        created_at: Schema.Number,
        updated_at: Schema.Number,
      }),
    ),
    created_at: Schema.Number,
    updated_at: Schema.Number,
  });
export type GetOrganizationRoleOutput = typeof GetOrganizationRoleOutput.Type;

// The operation
/**
 * Retrieve an organization role
 *
 * Use this request to retrieve an existing organization role by its ID.
 *
 * @param organization_role_id - The ID of the organization role
 */
export const GetOrganizationRole = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetOrganizationRoleInput,
  outputSchema: GetOrganizationRoleOutput,
  errors: [Forbidden, NotFound] as const,
}));
