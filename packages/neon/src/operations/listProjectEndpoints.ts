import * as Schema from "effect/Schema";
import { EndpointSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const ListProjectEndpointsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/projects/{project_id}/endpoints" }));
export type ListProjectEndpointsInput = typeof ListProjectEndpointsInput.Type;

// Output Schema
export const ListProjectEndpointsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpoints: Schema.Array(Schema.suspend(() => EndpointSchema)),
  });
export type ListProjectEndpointsOutput = typeof ListProjectEndpointsOutput.Type;

// The operation
/**
 * List compute endpoints
 *
 * Retrieves a list of compute endpoints for the specified project.
 * A compute endpoint is a Neon compute instance.
 * You can obtain a `project_id` by listing the projects for your Neon account.
 * For information about compute endpoints, see [Manage computes](https://neon.tech/docs/manage/endpoints/).
 *
 * @param project_id - The Neon project ID
 */
export const listProjectEndpoints = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListProjectEndpointsInput,
    outputSchema: ListProjectEndpointsOutput,
    errors: [NotFound] as const,
  }),
);
