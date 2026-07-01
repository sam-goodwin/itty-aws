import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface GetGroupClusterBackupSnapshotShardedClusterInput {
  groupId: string;
  clusterName: string;
  snapshotId: string;
  envelope?: boolean;
  pretty?: boolean;
}
export const GetGroupClusterBackupSnapshotShardedClusterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groupId: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    snapshotId: Schema.String.pipe(T.PathParam()),
    envelope: Schema.optional(Schema.Boolean),
    pretty: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/atlas/v2/groups/{groupId}/clusters/{clusterName}/backup/snapshots/shardedCluster/{snapshotId}",
    }),
  ) as unknown as Schema.Codec<GetGroupClusterBackupSnapshotShardedClusterInput>;

// Output Schema
export type GetGroupClusterBackupSnapshotShardedClusterOutput = void;
export const GetGroupClusterBackupSnapshotShardedClusterOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<GetGroupClusterBackupSnapshotShardedClusterOutput>;

// The operation
/**
 * Return One Sharded Cluster Cloud Backup
 *
 * Returns one snapshot of one sharded cluster from the specified project.
 *
 * @param envelope - Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
 * @param groupId - Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.

**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
 * @param pretty - Flag that indicates whether the response body should be in the prettyprint format.
 * @param clusterName - Human-readable label that identifies the cluster.
 * @param snapshotId - Unique 24-hexadecimal digit string that identifies the desired snapshot.
 */
export const getGroupClusterBackupSnapshotShardedCluster =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetGroupClusterBackupSnapshotShardedClusterInput,
    outputSchema: GetGroupClusterBackupSnapshotShardedClusterOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
