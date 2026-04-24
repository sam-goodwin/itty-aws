import * as Schema from "effect/Schema";
import { API } from "../client";
import * as T from "../traits";
import { BadRequest, Forbidden, NotFound } from "../errors";

// Input Schema
export const CreateGroupPrivateNetworkSettingEndpointIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groupId: Schema.String.pipe(T.PathParam()),
    envelope: Schema.optional(Schema.Boolean),
    pretty: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/atlas/v2/groups/{groupId}/privateNetworkSettings/endpointIds",
    }),
  );
export type CreateGroupPrivateNetworkSettingEndpointIdInput =
  typeof CreateGroupPrivateNetworkSettingEndpointIdInput.Type;

// Output Schema
export const CreateGroupPrivateNetworkSettingEndpointIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CreateGroupPrivateNetworkSettingEndpointIdOutput =
  typeof CreateGroupPrivateNetworkSettingEndpointIdOutput.Type;

// The operation
/**
 * Create One Federated Database Instance and Online Archive Private Endpoint for One Project
 *
 * Adds one private endpoint for Federated Database Instances and Online Archives to the specified projects. If the endpoint ID already exists and the associated comment is unchanged, Atlas Data Federation makes no change to the endpoint ID list. If the endpoint ID already exists and the associated comment is changed, Atlas Data Federation updates the comment value only in the endpoint ID list. If the endpoint ID doesn't exist, Atlas Data Federation appends the new endpoint to the list of endpoints in the endpoint ID list. Each region has an associated service name for the various endpoints. For the latest list of supported regions and their service names, see the external documentation. To use this resource, the requesting Service Account or API Key must have the Project Owner or Project Charts Admin roles.
 *
 * @param envelope - Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
 * @param groupId - Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.

**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
 * @param pretty - Flag that indicates whether the response body should be in the prettyprint format.
 */
export const createGroupPrivateNetworkSettingEndpointId =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateGroupPrivateNetworkSettingEndpointIdInput,
    outputSchema: CreateGroupPrivateNetworkSettingEndpointIdOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
