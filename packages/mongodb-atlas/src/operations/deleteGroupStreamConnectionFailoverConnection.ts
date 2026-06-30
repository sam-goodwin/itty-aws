import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteGroupStreamConnectionFailoverConnectionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groupId: Schema.String.pipe(T.PathParam()),
    tenantName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
    failoverConnectionId: Schema.String.pipe(T.PathParam()),
    envelope: Schema.optional(Schema.Boolean),
    pretty: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/atlas/v2/groups/{groupId}/streams/{tenantName}/connections/{connectionName}/failoverConnections/{failoverConnectionId}",
    }),
  );
export type DeleteGroupStreamConnectionFailoverConnectionInput =
  typeof DeleteGroupStreamConnectionFailoverConnectionInput.Type;

// Output Schema
export const DeleteGroupStreamConnectionFailoverConnectionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteGroupStreamConnectionFailoverConnectionOutput =
  typeof DeleteGroupStreamConnectionFailoverConnectionOutput.Type;

// The operation
/**
 * Delete One Stream Failover Connection
 *
 * Delete one failover connection of the specified stream workspace.
 *
 * @param envelope - Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
 * @param pretty - Flag that indicates whether the response body should be in the prettyprint format.
 * @param groupId - Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.

**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
 * @param tenantName - Label that identifies the stream workspace.
 * @param connectionName - Label that identifies the stream connection.
 * @param failoverConnectionId - Label that identifies the stream failover connection id.
 */
export const deleteGroupStreamConnectionFailoverConnection =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteGroupStreamConnectionFailoverConnectionInput,
    outputSchema: DeleteGroupStreamConnectionFailoverConnectionOutput,
    errors: [Forbidden, NotFound] as const,
  }));
