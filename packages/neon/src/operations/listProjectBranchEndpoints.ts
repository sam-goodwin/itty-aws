import * as Schema from "effect/Schema";
import { EndpointSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const ListProjectBranchEndpointsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/projects/{project_id}/branches/{branch_id}/endpoints",
    }),
  );
export type ListProjectBranchEndpointsInput =
  typeof ListProjectBranchEndpointsInput.Type;

// Output Schema
export const ListProjectBranchEndpointsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpoints: Schema.Array(Schema.suspend(() => EndpointSchema)),
  });
export type ListProjectBranchEndpointsOutput =
  typeof ListProjectBranchEndpointsOutput.Type;

// The operation
/**
 * List branch endpoints
 *
 * Retrieves a list of compute endpoints for the specified branch.
 * Neon permits only one read-write compute endpoint per branch.
 * A branch can have multiple read-only compute endpoints.
 * You can obtain a `project_id` by listing the projects for your Neon account.
 * You can obtain the `branch_id` by listing the project's branches.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The branch ID
 */
export const listProjectBranchEndpoints = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListProjectBranchEndpointsInput,
    outputSchema: ListProjectBranchEndpointsOutput,
    errors: [NotFound] as const,
  }),
);
