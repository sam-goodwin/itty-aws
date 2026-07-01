import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface AuthorizationRoleAssignmentsControllerListRoleAssignmentsForResourceInput {
  resource_id: string;
  before?: string;
  after?: string;
  limit?: number;
  order?: string;
  role_slug?: string;
}
export const AuthorizationRoleAssignmentsControllerListRoleAssignmentsForResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource_id: Schema.String.pipe(T.PathParam()),
    before: Schema.optional(Schema.String),
    after: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.String),
    role_slug: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/authorization/resources/{resource_id}/role_assignments",
    }),
  ) as unknown as Schema.Codec<AuthorizationRoleAssignmentsControllerListRoleAssignmentsForResourceInput>;

// Output Schema
export interface AuthorizationRoleAssignmentsControllerListRoleAssignmentsForResourceOutput {
  object: string;
  data: ReadonlyArray<{
    object: string;
    id: string;
    organization_membership_id: string;
    role: { slug?: string };
    resource: { id: string; external_id: string; resource_type_slug: string };
    source: {
      type: "direct" | "group";
      group_role_assignment_id: string | null;
    };
    created_at: string;
    updated_at: string;
  }>;
  list_metadata: { before: string | null; after: string | null };
}
export const AuthorizationRoleAssignmentsControllerListRoleAssignmentsForResourceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    data: Schema.Array(
      Schema.Struct({
        object: Schema.String,
        id: Schema.String,
        organization_membership_id: Schema.String,
        role: Schema.Struct({
          slug: Schema.optional(Schema.String),
        }),
        resource: Schema.Struct({
          id: Schema.String,
          external_id: Schema.String,
          resource_type_slug: Schema.String,
        }),
        source: Schema.Struct({
          type: Schema.Literals(["direct", "group"]),
          group_role_assignment_id: Schema.NullOr(Schema.String),
        }),
        created_at: Schema.String,
        updated_at: Schema.String,
      }),
    ),
    list_metadata: Schema.Struct({
      before: Schema.NullOr(Schema.String),
      after: Schema.NullOr(Schema.String),
    }),
  }) as unknown as Schema.Codec<AuthorizationRoleAssignmentsControllerListRoleAssignmentsForResourceOutput>;

// The operation
/**
 * List role assignments for a resource
 *
 * List all role assignments granted on a specific resource instance. Each assignment includes the organization membership it was granted to.
 *
 * @param resource_id - The ID of the authorization resource.
 * @param before - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list. For example, if you make a list request and receive 100 objects, ending with `"obj_123"`, your subsequent call can include `before="obj_123"` to fetch a new batch of objects before `"obj_123"`.
 * @param after - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list. For example, if you make a list request and receive 100 objects, ending with `"obj_123"`, your subsequent call can include `after="obj_123"` to fetch a new batch of objects after `"obj_123"`.
 * @param limit - Upper limit on the number of objects to return, between `1` and `100`.
 * @param order - Order the results by the creation time. Supported values are `"asc"` (ascending), `"desc"` (descending), and `"normal"` (descending with reversed cursor semantics where `before` fetches older records and `after` fetches newer records).
 * @param role_slug - Filter assignments by the slug of the role.
 */
export const AuthorizationRoleAssignmentsControllerListRoleAssignmentsForResource =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      AuthorizationRoleAssignmentsControllerListRoleAssignmentsForResourceInput,
    outputSchema:
      AuthorizationRoleAssignmentsControllerListRoleAssignmentsForResourceOutput,
    errors: [Forbidden, NotFound] as const,
  }));
