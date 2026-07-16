import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface ListGroupPrivateNetworkSettingEndpointIdsInput {
  groupId: string;
  envelope?: boolean;
  includeCount?: boolean;
  itemsPerPage?: number;
  pageNum?: number;
  pretty?: boolean;
}
export const ListGroupPrivateNetworkSettingEndpointIdsInput =
  /*@__PURE__*/ Schema.Struct({
    groupId: Schema.String.pipe(T.PathParam()),
    envelope: Schema.optional(Schema.Boolean),
    includeCount: Schema.optional(Schema.Boolean),
    itemsPerPage: Schema.optional(Schema.Number),
    pageNum: Schema.optional(Schema.Number),
    pretty: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/atlas/v2/groups/{groupId}/privateNetworkSettings/endpointIds",
    }),
  ) as unknown as Schema.Codec<ListGroupPrivateNetworkSettingEndpointIdsInput>;

// Output Schema
export type ListGroupPrivateNetworkSettingEndpointIdsOutput = void;
export const ListGroupPrivateNetworkSettingEndpointIdsOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ListGroupPrivateNetworkSettingEndpointIdsOutput>;

// The operation
/**
 * Return All Federated Database Instance and Online Archive Private Endpoints in One Project
 *
 * Returns all private endpoints for Federated Database Instances and Online Archives in the specified project.
 *
 * @param envelope - Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
 * @param groupId - Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.

**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
 * @param includeCount - Flag that indicates whether the response returns the total number of items (`totalCount`) in the response.
 * @param itemsPerPage - Number of items that the response returns per page.
 * @param pageNum - Number of the page that displays the current set of the total objects that the response returns.
 * @param pretty - Flag that indicates whether the response body should be in the prettyprint format.
 */
export const listGroupPrivateNetworkSettingEndpointIds =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ListGroupPrivateNetworkSettingEndpointIdsInput,
    outputSchema: ListGroupPrivateNetworkSettingEndpointIdsOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
