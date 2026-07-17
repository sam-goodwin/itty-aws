import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, Conflict } from "../errors.ts";

// Input Schema
export interface DeleteGroupPeerInput {
  groupId: string;
  peerId: string;
  envelope?: boolean;
  pretty?: boolean;
}
export const DeleteGroupPeerInput = /*@__PURE__*/ Schema.Struct({
  groupId: Schema.String.pipe(T.PathParam()),
  peerId: Schema.String.pipe(T.PathParam()),
  envelope: Schema.optional(Schema.Boolean),
  pretty: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/api/atlas/v2/groups/{groupId}/peers/{peerId}",
  }),
) as unknown as Schema.Codec<DeleteGroupPeerInput>;

// Output Schema
export type DeleteGroupPeerOutput = void;
export const DeleteGroupPeerOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteGroupPeerOutput>;

// The operation
/**
 * Remove One Network Peering Connection
 *
 * Removes one network peering connection in the specified project. If you remove the last network peering connection associated with a project, MongoDB Cloud also removes any AWS security groups from the project IP access list.
 *
 * @param envelope - Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
 * @param groupId - Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.

**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
 * @param pretty - Flag that indicates whether the response body should be in the prettyprint format.
 * @param peerId - Unique 24-hexadecimal digit string that identifies the network peering connection that you want to delete.
 */
export const deleteGroupPeer = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeleteGroupPeerInput,
  outputSchema: DeleteGroupPeerOutput,
  errors: [Forbidden, NotFound, Conflict] as const,
}));
