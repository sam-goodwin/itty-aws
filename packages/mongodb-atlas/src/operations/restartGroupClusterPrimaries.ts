import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface RestartGroupClusterPrimariesInput {
  groupId: string;
  clusterName: string;
  envelope?: boolean;
  pretty?: boolean;
}
export const RestartGroupClusterPrimariesInput =
  /*@__PURE__*/ Schema.Struct({
    groupId: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    envelope: Schema.optional(Schema.Boolean),
    pretty: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/atlas/v2/groups/{groupId}/clusters/{clusterName}/restartPrimaries",
    }),
  ) as unknown as Schema.Codec<RestartGroupClusterPrimariesInput>;

// Output Schema
export type RestartGroupClusterPrimariesOutput = void;
export const RestartGroupClusterPrimariesOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<RestartGroupClusterPrimariesOutput>;

// The operation
/**
 * Test Failover for One Cluster
 *
 * Starts a failover test for the specified cluster in the specified project. Clusters contain a group of hosts that maintain the same data set. A failover test checks how MongoDB Cloud handles the failure of the cluster's primary node. During the test, MongoDB Cloud shuts down the primary node and elects a new primary. Deprecated versions: v2-{2023-01-01}
 *
 * @param envelope - Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
 * @param groupId - Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.

**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
 * @param pretty - Flag that indicates whether the response body should be in the prettyprint format.
 * @param clusterName - Human-readable label that identifies the cluster.
 */
export const restartGroupClusterPrimaries =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RestartGroupClusterPrimariesInput,
    outputSchema: RestartGroupClusterPrimariesOutput,
    errors: [Forbidden, NotFound] as const,
  }));
