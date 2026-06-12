import * as Schema from "effect/Schema";
import { EndpointSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const GetProjectEndpointInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    endpoint_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/projects/{project_id}/endpoints/{endpoint_id}",
    }),
  );
export type GetProjectEndpointInput = typeof GetProjectEndpointInput.Type;

// Output Schema
export const GetProjectEndpointOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpoint: Schema.suspend(() => EndpointSchema),
  });
export type GetProjectEndpointOutput = typeof GetProjectEndpointOutput.Type;

// The operation
/**
 * Retrieve compute endpoint details
 *
 * Retrieves information about the specified compute endpoint.
 * A compute endpoint is a Neon compute instance.
 * You can obtain a `project_id` by listing the projects for your Neon account.
 * You can obtain an `endpoint_id` by listing your project's compute endpoints.
 * An `endpoint_id` has an `ep-` prefix.
 * For information about compute endpoints, see [Manage computes](https://neon.tech/docs/manage/endpoints/).
 *
 * @param project_id - The Neon project ID
 * @param endpoint_id - The endpoint ID
 */
export const getProjectEndpoint = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetProjectEndpointInput,
  outputSchema: GetProjectEndpointOutput,
  errors: [NotFound] as const,
}));
