import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface GetGroupProcessDiskInput {
  partitionName: string;
  groupId: string;
  processId: string;
  envelope?: boolean;
}
export const GetGroupProcessDiskInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    partitionName: Schema.String.pipe(T.PathParam()),
    groupId: Schema.String.pipe(T.PathParam()),
    processId: Schema.String.pipe(T.PathParam()),
    envelope: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/atlas/v2/groups/{groupId}/processes/{processId}/disks/{partitionName}",
    }),
  ) as unknown as Schema.Codec<GetGroupProcessDiskInput>;

// Output Schema
export type GetGroupProcessDiskOutput = void;
export const GetGroupProcessDiskOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<GetGroupProcessDiskOutput>;

// The operation
/**
 * Return Measurements for One Disk
 *
 * Returns measurement details for one disk or partition for the specified host for the specified project.
 *
 * @param envelope - Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
 * @param partitionName - Human-readable label of the disk or partition to which the measurements apply.
 * @param groupId - Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.

**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
 * @param processId - Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (`mongod` or `mongos`). The port must be the IANA port on which the MongoDB process listens for requests.
 */
export const getGroupProcessDisk = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetGroupProcessDiskInput,
  outputSchema: GetGroupProcessDiskOutput,
  errors: [Forbidden, NotFound] as const,
}));
