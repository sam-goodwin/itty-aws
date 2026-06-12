import * as Schema from "effect/Schema";
import { EndpointSchema, OperationSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const StartProjectEndpointInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    endpoint_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/projects/{project_id}/endpoints/{endpoint_id}/start",
    }),
  );
export type StartProjectEndpointInput = typeof StartProjectEndpointInput.Type;

// Output Schema
export const StartProjectEndpointOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpoint: Schema.suspend(() => EndpointSchema),
    operations: Schema.Array(Schema.suspend(() => OperationSchema)),
  });
export type StartProjectEndpointOutput = typeof StartProjectEndpointOutput.Type;

// The operation
/**
 * Start compute endpoint
 *
 * Starts a compute endpoint. The compute endpoint is ready to use
 * after the last operation in chain finishes successfully.
 * You can obtain a `project_id` by listing the projects for your Neon account.
 * You can obtain an `endpoint_id` by listing your project's compute endpoints.
 * An `endpoint_id` has an `ep-` prefix.
 * For information about compute endpoints, see [Manage computes](https://neon.tech/docs/manage/endpoints/).
 *
 * @param project_id - The Neon project ID
 * @param endpoint_id - The endpoint ID
 */
export const startProjectEndpoint = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: StartProjectEndpointInput,
    outputSchema: StartProjectEndpointOutput,
    errors: [NotFound] as const,
  }),
);
