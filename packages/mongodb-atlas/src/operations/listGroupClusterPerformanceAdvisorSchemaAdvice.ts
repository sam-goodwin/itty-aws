import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface ListGroupClusterPerformanceAdvisorSchemaAdviceInput {
  groupId: string;
  clusterName: string;
}
export const ListGroupClusterPerformanceAdvisorSchemaAdviceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groupId: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/atlas/v2/groups/{groupId}/clusters/{clusterName}/performanceAdvisor/schemaAdvice",
    }),
  ) as unknown as Schema.Codec<ListGroupClusterPerformanceAdvisorSchemaAdviceInput>;

// Output Schema
export type ListGroupClusterPerformanceAdvisorSchemaAdviceOutput = void;
export const ListGroupClusterPerformanceAdvisorSchemaAdviceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ListGroupClusterPerformanceAdvisorSchemaAdviceOutput>;

// The operation
/**
 * Return Schema Advice
 *
 * Returns the schema suggestions that the Performance Advisor detects. The Performance Advisor provides holistic schema recommendations for your cluster by sampling documents in your most active collections and collections with slow-running queries.
 *
 * @param groupId - Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.

**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
 * @param clusterName - Human-readable label that identifies the cluster.
 */
export const listGroupClusterPerformanceAdvisorSchemaAdvice =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListGroupClusterPerformanceAdvisorSchemaAdviceInput,
    outputSchema: ListGroupClusterPerformanceAdvisorSchemaAdviceOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
