import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound, Conflict } from "../errors.ts";

// Input Schema
export interface CreateGroupClusterBackupRestoreJobInput {
  groupId: string;
  clusterName: string;
  envelope?: boolean;
  pretty?: boolean;
}
export const CreateGroupClusterBackupRestoreJobInput =
  /*@__PURE__*/ Schema.Struct({
    groupId: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    envelope: Schema.optional(Schema.Boolean),
    pretty: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/atlas/v2/groups/{groupId}/clusters/{clusterName}/backup/restoreJobs",
    }),
  ) as unknown as Schema.Codec<CreateGroupClusterBackupRestoreJobInput>;

// Output Schema
export type CreateGroupClusterBackupRestoreJobOutput = void;
export const CreateGroupClusterBackupRestoreJobOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CreateGroupClusterBackupRestoreJobOutput>;

// The operation
/**
 * Create One Restore Job of One Cluster
 *
 * Restores one snapshot of one cluster from the specified project. Atlas takes on-demand snapshots immediately and scheduled snapshots at regular intervals. If an on-demand snapshot with a status of `queued` or `inProgress` exists, before taking another snapshot, wait until Atlas completes processing the previously taken on-demand snapshot.
 *
 * @param envelope - Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
 * @param groupId - Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.

**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
 * @param pretty - Flag that indicates whether the response body should be in the prettyprint format.
 * @param clusterName - Human-readable label that identifies the cluster.
 */
export const createGroupClusterBackupRestoreJob =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CreateGroupClusterBackupRestoreJobInput,
    outputSchema: CreateGroupClusterBackupRestoreJobOutput,
    errors: [BadRequest, Forbidden, NotFound, Conflict] as const,
  }));
