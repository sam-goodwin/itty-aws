import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface DeleteGroupStreamPrivateLinkConnectionInput {
  groupId: string;
  connectionId: string;
  envelope?: boolean;
  pretty?: boolean;
}
export const DeleteGroupStreamPrivateLinkConnectionInput =
  /*@__PURE__*/ Schema.Struct({
    groupId: Schema.String.pipe(T.PathParam()),
    connectionId: Schema.String.pipe(T.PathParam()),
    envelope: Schema.optional(Schema.Boolean),
    pretty: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/atlas/v2/groups/{groupId}/streams/privateLinkConnections/{connectionId}",
    }),
  ) as unknown as Schema.Codec<DeleteGroupStreamPrivateLinkConnectionInput>;

// Output Schema
export type DeleteGroupStreamPrivateLinkConnectionOutput = void;
export const DeleteGroupStreamPrivateLinkConnectionOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteGroupStreamPrivateLinkConnectionOutput>;

// The operation
/**
 * Delete One Private Link Connection
 *
 * Deletes one Private Link in the specified project.
 *
 * @param envelope - Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
 * @param pretty - Flag that indicates whether the response body should be in the prettyprint format.
 * @param groupId - Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.

**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
 * @param connectionId - Unique ID that identifies the Private Link connection.
 */
export const deleteGroupStreamPrivateLinkConnection =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DeleteGroupStreamPrivateLinkConnectionInput,
    outputSchema: DeleteGroupStreamPrivateLinkConnectionOutput,
    errors: [Forbidden, NotFound] as const,
  }));
