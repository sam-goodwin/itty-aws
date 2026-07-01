import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface ListGroupStreamPrivateLinkConnectionsInput {
  groupId: string;
  envelope?: boolean;
  itemsPerPage?: number;
  pageNum?: number;
  pretty?: boolean;
}
export const ListGroupStreamPrivateLinkConnectionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groupId: Schema.String.pipe(T.PathParam()),
    envelope: Schema.optional(Schema.Boolean),
    itemsPerPage: Schema.optional(Schema.Number),
    pageNum: Schema.optional(Schema.Number),
    pretty: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/atlas/v2/groups/{groupId}/streams/privateLinkConnections",
    }),
  ) as unknown as Schema.Codec<ListGroupStreamPrivateLinkConnectionsInput>;

// Output Schema
export type ListGroupStreamPrivateLinkConnectionsOutput = void;
export const ListGroupStreamPrivateLinkConnectionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ListGroupStreamPrivateLinkConnectionsOutput>;

// The operation
/**
 * Return All Private Link Connections
 *
 * Returns all Private Link connections for the specified project.
 *
 * @param groupId - Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.

**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
 * @param envelope - Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
 * @param itemsPerPage - Number of items that the response returns per page.
 * @param pageNum - Number of the page that displays the current set of the total objects that the response returns.
 * @param pretty - Flag that indicates whether the response body should be in the prettyprint format.
 */
export const listGroupStreamPrivateLinkConnections =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListGroupStreamPrivateLinkConnectionsInput,
    outputSchema: ListGroupStreamPrivateLinkConnectionsOutput,
    errors: [Forbidden, NotFound] as const,
  }));
