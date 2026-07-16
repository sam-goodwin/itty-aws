import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface AuthorizationGroupRoleAssignmentsControllerListInput {
  group_id: string;
  before?: string;
  after?: string;
  limit?: number;
  order?: string;
}
export const AuthorizationGroupRoleAssignmentsControllerListInput =
  /*@__PURE__*/ Schema.Struct({
    group_id: Schema.String.pipe(T.PathParam()),
    before: Schema.optional(Schema.String),
    after: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/authorization/groups/{group_id}/role_assignments",
    }),
  ) as unknown as Schema.Codec<AuthorizationGroupRoleAssignmentsControllerListInput>;

// Output Schema
export interface AuthorizationGroupRoleAssignmentsControllerListOutput {
  object: string;
  data: ReadonlyArray<{
    object: string;
    id: string;
    group_id: string;
    role: { slug?: string };
    resource: { id: string; external_id: string; resource_type_slug: string };
    created_at: string;
    updated_at: string;
  }>;
  list_metadata: { before: string | null; after: string | null };
}
export const AuthorizationGroupRoleAssignmentsControllerListOutput =
  /*@__PURE__*/ Schema.Struct({
    object: Schema.String,
    data: Schema.Array(
      Schema.Struct({
        object: Schema.String,
        id: Schema.String,
        group_id: Schema.String,
        role: Schema.Struct({
          slug: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<AuthorizationGroupRoleAssignmentsControllerListOutput>;

// The operation
/**
 * List role assignments for a group
 *
 * List all role assignments granted to a group. Each assignment represents a role granted to the group on a resource.
 *
 * @param group_id - The ID of the group.
 * @param before - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list. For example, if you make a list request and receive 100 objects, ending with `"obj_123"`, your subsequent call can include `before="obj_123"` to fetch a new batch of objects before `"obj_123"`.
 * @param after - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list. For example, if you make a list request and receive 100 objects, ending with `"obj_123"`, your subsequent call can include `after="obj_123"` to fetch a new batch of objects after `"obj_123"`.
 * @param limit - Upper limit on the number of objects to return, between `1` and `100`.
 * @param order - Order the results by the creation time. Supported values are `"asc"` (ascending), `"desc"` (descending), and `"normal"` (descending with reversed cursor semantics where `before` fetches older records and `after` fetches newer records).
 */
export const AuthorizationGroupRoleAssignmentsControllerList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AuthorizationGroupRoleAssignmentsControllerListInput,
    outputSchema: AuthorizationGroupRoleAssignmentsControllerListOutput,
    errors: [Forbidden, NotFound] as const,
  }));
