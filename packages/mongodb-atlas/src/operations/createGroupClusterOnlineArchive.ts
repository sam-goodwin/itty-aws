import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound, Conflict } from "../errors.ts";

// Input Schema
export interface CreateGroupClusterOnlineArchiveInput {
  groupId: string;
  clusterName: string;
  envelope?: boolean;
  pretty?: boolean;
}
export const CreateGroupClusterOnlineArchiveInput =
  /*@__PURE__*/ Schema.Struct({
    groupId: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    envelope: Schema.optional(Schema.Boolean),
    pretty: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/atlas/v2/groups/{groupId}/clusters/{clusterName}/onlineArchives",
    }),
  ) as unknown as Schema.Codec<CreateGroupClusterOnlineArchiveInput>;

// Output Schema
export type CreateGroupClusterOnlineArchiveOutput = void;
export const CreateGroupClusterOnlineArchiveOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CreateGroupClusterOnlineArchiveOutput>;

// The operation
/**
 * Create One Online Archive
 *
 * Creates one online archive. This archive stores data from one cluster within one project.
 *
 * @param envelope - Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
 * @param groupId - Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.

**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
 * @param pretty - Flag that indicates whether the response body should be in the prettyprint format.
 * @param clusterName - Human-readable label that identifies the cluster that contains the collection for which you want to create one online archive.
 */
export const createGroupClusterOnlineArchive =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CreateGroupClusterOnlineArchiveInput,
    outputSchema: CreateGroupClusterOnlineArchiveOutput,
    errors: [BadRequest, Forbidden, NotFound, Conflict] as const,
  }));
