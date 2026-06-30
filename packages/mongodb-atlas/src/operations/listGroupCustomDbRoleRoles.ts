import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface ListGroupCustomDbRoleRolesInput {
  groupId: string;
  envelope?: boolean;
  pretty?: boolean;
}
export const ListGroupCustomDbRoleRolesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groupId: Schema.String.pipe(T.PathParam()),
    envelope: Schema.optional(Schema.Boolean),
    pretty: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/atlas/v2/groups/{groupId}/customDBRoles/roles",
    }),
  ) as unknown as Schema.Codec<ListGroupCustomDbRoleRolesInput>;

// Output Schema
export type ListGroupCustomDbRoleRolesOutput = void;
export const ListGroupCustomDbRoleRolesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ListGroupCustomDbRoleRolesOutput>;

// The operation
/**
 * Return All Custom Roles in One Project
 *
 * Returns all custom roles for the specified project.
 *
 * @param envelope - Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
 * @param groupId - Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.

**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
 * @param pretty - Flag that indicates whether the response body should be in the prettyprint format.
 */
export const listGroupCustomDbRoleRoles = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListGroupCustomDbRoleRolesInput,
    outputSchema: ListGroupCustomDbRoleRolesOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
