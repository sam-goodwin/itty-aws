import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound, Conflict } from "../errors.ts";

// Input Schema
export interface DeleteGroupContainerInput {
  groupId: string;
  containerId: string;
  envelope?: boolean;
  pretty?: boolean;
}
export const DeleteGroupContainerInput =
  /*@__PURE__*/ Schema.Struct({
    groupId: Schema.String.pipe(T.PathParam()),
    containerId: Schema.String.pipe(T.PathParam()),
    envelope: Schema.optional(Schema.Boolean),
    pretty: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/atlas/v2/groups/{groupId}/containers/{containerId}",
    }),
  ) as unknown as Schema.Codec<DeleteGroupContainerInput>;

// Output Schema
export type DeleteGroupContainerOutput = void;
export const DeleteGroupContainerOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteGroupContainerOutput>;

// The operation
/**
 * Remove One Network Peering Container
 *
 * Removes one network peering container in the specified project.
 *
 * @param envelope - Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
 * @param groupId - Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.

**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
 * @param pretty - Flag that indicates whether the response body should be in the prettyprint format.
 * @param containerId - Unique 24-hexadecimal digit string that identifies the MongoDB Cloud network container that you want to remove.
 */
export const deleteGroupContainer = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeleteGroupContainerInput,
  outputSchema: DeleteGroupContainerOutput,
  errors: [BadRequest, Forbidden, NotFound, Conflict] as const,
}));
