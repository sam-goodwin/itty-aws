import * as Schema from "effect/Schema";
import { EndpointSchema, OperationSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const DeleteProjectEndpointInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    endpoint_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/projects/{project_id}/endpoints/{endpoint_id}",
    }),
  );
export type DeleteProjectEndpointInput = typeof DeleteProjectEndpointInput.Type;

// Output Schema
export const DeleteProjectEndpointOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpoint: Schema.suspend(() => EndpointSchema),
    operations: Schema.Array(Schema.suspend(() => OperationSchema)),
  });
export type DeleteProjectEndpointOutput =
  typeof DeleteProjectEndpointOutput.Type;

// The operation
/**
 * Delete compute endpoint
 *
 * Delete the specified compute endpoint.
 * A compute endpoint is a Neon compute instance.
 * Deleting a compute endpoint drops existing network connections to the compute endpoint.
 * The deletion is completed when last operation in the chain finishes successfully.
 * You can obtain a `project_id` by listing the projects for your Neon account.
 * You can obtain an `endpoint_id` by listing your project's compute endpoints.
 * An `endpoint_id` has an `ep-` prefix.
 * For information about compute endpoints, see [Manage computes](https://neon.tech/docs/manage/endpoints/).
 *
 * @param project_id - The Neon project ID
 * @param endpoint_id - The endpoint ID
 */
export const deleteProjectEndpoint = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteProjectEndpointInput,
    outputSchema: DeleteProjectEndpointOutput,
    errors: [NotFound] as const,
  }),
);
