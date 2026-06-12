import * as Schema from "effect/Schema";
import { OperationSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const GetProjectOperationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    operation_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/projects/{project_id}/operations/{operation_id}",
    }),
  );
export type GetProjectOperationInput = typeof GetProjectOperationInput.Type;

// Output Schema
export const GetProjectOperationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operation: Schema.suspend(() => OperationSchema),
  });
export type GetProjectOperationOutput = typeof GetProjectOperationOutput.Type;

// The operation
/**
 * Retrieve operation details
 *
 * Retrieves details for the specified operation.
 * An operation is an action performed on a Neon project resource.
 * You can obtain a `project_id` by listing the projects for your Neon account.
 * You can obtain a `operation_id` by listing operations for the project.
 *
 * @param project_id - The Neon project ID
 * @param operation_id - The operation ID
 */
export const getProjectOperation = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetProjectOperationInput,
  outputSchema: GetProjectOperationOutput,
  errors: [NotFound] as const,
}));
