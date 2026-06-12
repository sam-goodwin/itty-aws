import * as Schema from "effect/Schema";
import { OperationSchema, PaginationSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const ListProjectOperationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    cursor: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
  }).pipe(T.Http({ method: "GET", path: "/projects/{project_id}/operations" }));
export type ListProjectOperationsInput = typeof ListProjectOperationsInput.Type;

// Output Schema
export const ListProjectOperationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operations: Schema.Array(Schema.suspend(() => OperationSchema)),
    pagination: Schema.optional(Schema.suspend(() => PaginationSchema)),
  });
export type ListProjectOperationsOutput =
  typeof ListProjectOperationsOutput.Type;

// The operation
/**
 * List operations
 *
 * Retrieves a list of operations for the specified Neon project.
 * You can obtain a `project_id` by listing the projects for your Neon account.
 * The number of operations returned can be large.
 * To paginate the response, issue an initial request with a `limit` value.
 * Then, add the `cursor` value that was returned in the response to the next request.
 * Operations older than 6 months may be deleted from our systems.
 * If you need more history than that, you should store your own history.
 *
 * @param cursor - Specify the cursor value from the previous response to get the next batch of operations
 * @param limit - Specify a value from 1 to 1000 to limit number of operations in the response
 * @param project_id - The Neon project ID
 */
export const listProjectOperations =
  /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
    inputSchema: ListProjectOperationsInput,
    outputSchema: ListProjectOperationsOutput,
    errors: [NotFound] as const,
    pagination: {
      mode: "cursor",
      inputToken: "cursor",
      outputToken: "pagination.cursor",
      items: "operations",
    },
  }));
