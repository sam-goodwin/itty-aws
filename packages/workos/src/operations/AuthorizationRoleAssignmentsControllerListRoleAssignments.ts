import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const AuthorizationRoleAssignmentsControllerListRoleAssignmentsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_membership_id: Schema.String.pipe(T.PathParam()),
    before: Schema.optional(Schema.String),
    after: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.Literals(["normal", "desc", "asc"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/authorization/organization_memberships/{organization_membership_id}/role_assignments",
    }),
  );
export type AuthorizationRoleAssignmentsControllerListRoleAssignmentsInput =
  typeof AuthorizationRoleAssignmentsControllerListRoleAssignmentsInput.Type;

// Output Schema
export const AuthorizationRoleAssignmentsControllerListRoleAssignmentsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    data: Schema.Array(
      Schema.Struct({
        object: Schema.String,
        id: Schema.String,
        role: Schema.Struct({
          slug: Schema.String,
        }),
        resource: Schema.Struct({
          id: Schema.String,
          external_id: Schema.String,
          resource_type_slug: Schema.String,
        }),
        created_at: Schema.String,
        updated_at: Schema.String,
      }),
    ),
    list_metadata: Schema.Struct({
      before: Schema.NullOr(Schema.String),
      after: Schema.NullOr(Schema.String),
    }),
  });
export type AuthorizationRoleAssignmentsControllerListRoleAssignmentsOutput =
  typeof AuthorizationRoleAssignmentsControllerListRoleAssignmentsOutput.Type;

// The operation
/**
 * List role assignments
 *
 * List all role assignments for an organization membership. This returns all roles that have been assigned to the user on resources, including organization-level and sub-resource roles.
 *
 * @param organization_membership_id - The ID of the organization membership.
 * @param before - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list. For example, if you make a list request and receive 100 objects, ending with `"obj_123"`, your subsequent call can include `before="obj_123"` to fetch a new batch of objects before `"obj_123"`.
 * @param after - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list. For example, if you make a list request and receive 100 objects, ending with `"obj_123"`, your subsequent call can include `after="obj_123"` to fetch a new batch of objects after `"obj_123"`.
 * @param limit - Upper limit on the number of objects to return, between `1` and `100`.
 * @param order - Order the results by the creation time. Supported values are `"asc"` (ascending), `"desc"` (descending), and `"normal"` (descending with reversed cursor semantics where `before` fetches older records and `after` fetches newer records). Defaults to descending.
 */
export const AuthorizationRoleAssignmentsControllerListRoleAssignments =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuthorizationRoleAssignmentsControllerListRoleAssignmentsInput,
    outputSchema:
      AuthorizationRoleAssignmentsControllerListRoleAssignmentsOutput,
    errors: [Forbidden, NotFound] as const,
  }));
