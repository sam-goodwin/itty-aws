import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface ListGroupClusterBackupSnapshotsInput {
  groupId: string;
  clusterName: string;
  envelope?: boolean;
  includeCount?: boolean;
  itemsPerPage?: number;
  pageNum?: number;
  pretty?: boolean;
  pointInTimeUtcSeconds?: number;
  oplogTs?: number;
  oplogInc?: number;
}
export const ListGroupClusterBackupSnapshotsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groupId: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    envelope: Schema.optional(Schema.Boolean),
    includeCount: Schema.optional(Schema.Boolean),
    itemsPerPage: Schema.optional(Schema.Number),
    pageNum: Schema.optional(Schema.Number),
    pretty: Schema.optional(Schema.Boolean),
    pointInTimeUtcSeconds: Schema.optional(Schema.Number),
    oplogTs: Schema.optional(Schema.Number),
    oplogInc: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/atlas/v2/groups/{groupId}/clusters/{clusterName}/backup/snapshots",
    }),
  ) as unknown as Schema.Codec<ListGroupClusterBackupSnapshotsInput>;

// Output Schema
export type ListGroupClusterBackupSnapshotsOutput = void;
export const ListGroupClusterBackupSnapshotsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ListGroupClusterBackupSnapshotsOutput>;

// The operation
/**
 * Return All Replica Set Cloud Backups
 *
 * Returns all snapshots of one cluster from the specified project.
 *
 * @param envelope - Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
 * @param groupId - Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.

**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
 * @param includeCount - Flag that indicates whether the response returns the total number of items (`totalCount`) in the response.
 * @param itemsPerPage - Number of items that the response returns per page.
 * @param pageNum - Number of the page that displays the current set of the total objects that the response returns.
 * @param pretty - Flag that indicates whether the response body should be in the prettyprint format.
 * @param clusterName - Human-readable label that identifies the cluster.
 * @param pointInTimeUtcSeconds - Desired point in time, expressed as the number of seconds that have elapsed since the UNIX epoch. If specified, returns the closest snapshot created before that point in time. Mutually exclusive with `oplogTs` and `oplogInc`.
 * @param oplogTs - Oplog timestamp that represents the desired point in time. This is the first part of an Oplog timestamp. Must be used with `oplogInc`. Mutually exclusive with `pointInTimeUtcSeconds`.
 * @param oplogInc - Oplog operation number that represents the desired point in time. This is the second part of an Oplog timestamp. Must be used with `oplogTs`. Mutually exclusive with `pointInTimeUtcSeconds`.
 */
export const listGroupClusterBackupSnapshots =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListGroupClusterBackupSnapshotsInput,
    outputSchema: ListGroupClusterBackupSnapshotsOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
