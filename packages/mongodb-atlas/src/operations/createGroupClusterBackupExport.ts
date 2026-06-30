import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound, Conflict } from "../errors.ts";

// Input Schema
export interface CreateGroupClusterBackupExportInput {
  groupId: string;
  clusterName: string;
  envelope?: boolean;
}
export const CreateGroupClusterBackupExportInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groupId: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    envelope: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/atlas/v2/groups/{groupId}/clusters/{clusterName}/backup/exports",
    }),
  ) as unknown as Schema.Codec<CreateGroupClusterBackupExportInput>;

// Output Schema
export type CreateGroupClusterBackupExportOutput = void;
export const CreateGroupClusterBackupExportOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<CreateGroupClusterBackupExportOutput>;

// The operation
/**
 * Create One Snapshot Export Job
 *
 * Exports one backup Snapshot for dedicated Atlas cluster using Cloud Backups to an Export Bucket.
 *
 * @param envelope - Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
 * @param groupId - Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.

**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
 * @param clusterName - Human-readable label that identifies the cluster.
 */
export const createGroupClusterBackupExport =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateGroupClusterBackupExportInput,
    outputSchema: CreateGroupClusterBackupExportOutput,
    errors: [BadRequest, Forbidden, NotFound, Conflict] as const,
  }));
