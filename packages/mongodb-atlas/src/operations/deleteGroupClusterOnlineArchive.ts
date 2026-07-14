import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface DeleteGroupClusterOnlineArchiveInput {
  groupId: string;
  archiveId: string;
  clusterName: string;
  envelope?: boolean;
  pretty?: boolean;
}
export const DeleteGroupClusterOnlineArchiveInput =
  /*@__PURE__*/ Schema.Struct({
    groupId: Schema.String.pipe(T.PathParam()),
    archiveId: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    envelope: Schema.optional(Schema.Boolean),
    pretty: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/atlas/v2/groups/{groupId}/clusters/{clusterName}/onlineArchives/{archiveId}",
    }),
  ) as unknown as Schema.Codec<DeleteGroupClusterOnlineArchiveInput>;

// Output Schema
export type DeleteGroupClusterOnlineArchiveOutput = void;
export const DeleteGroupClusterOnlineArchiveOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteGroupClusterOnlineArchiveOutput>;

// The operation
/**
 * Remove One Online Archive
 *
 * Removes one online archive. This archive stores data from one cluster within one project.
 *
 * @param groupId - Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.

**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
 * @param envelope - Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
 * @param pretty - Flag that indicates whether the response body should be in the prettyprint format.
 * @param archiveId - Unique 24-hexadecimal digit string that identifies the online archive to delete.
 * @param clusterName - Human-readable label that identifies the cluster that contains the collection from which you want to remove an online archive.
 */
export const deleteGroupClusterOnlineArchive =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DeleteGroupClusterOnlineArchiveInput,
    outputSchema: DeleteGroupClusterOnlineArchiveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
