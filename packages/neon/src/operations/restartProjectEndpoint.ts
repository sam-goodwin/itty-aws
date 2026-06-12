import * as Schema from "effect/Schema";
import { EndpointSchema, OperationSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const RestartProjectEndpointInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    endpoint_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/projects/{project_id}/endpoints/{endpoint_id}/restart",
    }),
  );
export type RestartProjectEndpointInput =
  typeof RestartProjectEndpointInput.Type;

// Output Schema
export const RestartProjectEndpointOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpoint: Schema.suspend(() => EndpointSchema),
    operations: Schema.Array(Schema.suspend(() => OperationSchema)),
  });
export type RestartProjectEndpointOutput =
  typeof RestartProjectEndpointOutput.Type;

// The operation
/**
 * Restart compute endpoint
 *
 * Restart the specified compute endpoint: suspend immediately followed by start operations.
 * You can obtain a `project_id` by listing the projects for your Neon account.
 * You can obtain an `endpoint_id` by listing your project's compute endpoints.
 * An `endpoint_id` has an `ep-` prefix.
 * For information about compute endpoints, see [Manage computes](https://neon.tech/docs/manage/endpoints/).
 *
 * @param project_id - The Neon project ID
 * @param endpoint_id - The endpoint ID
 */
export const restartProjectEndpoint = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RestartProjectEndpointInput,
    outputSchema: RestartProjectEndpointOutput,
    errors: [NotFound] as const,
  }),
);
