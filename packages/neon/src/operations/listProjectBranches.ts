import * as Schema from "effect/Schema";
import {
  AnnotationDataSchema,
  BranchSchema,
  CursorPaginationSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const ListProjectBranchesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    search: Schema.optional(Schema.String),
    sort_by: Schema.optional(
      Schema.Literals(["name", "created_at", "updated_at"]),
    ),
    cursor: Schema.optional(Schema.String),
    sort_order: Schema.optional(Schema.Literals(["asc", "desc"])),
    limit: Schema.optional(Schema.Number),
  }).pipe(T.Http({ method: "GET", path: "/projects/{project_id}/branches" }));
export type ListProjectBranchesInput = typeof ListProjectBranchesInput.Type;

// Output Schema
export const ListProjectBranchesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    branches: Schema.Array(Schema.suspend(() => BranchSchema)),
    annotations: Schema.Record(
      Schema.String,
      Schema.suspend(() => AnnotationDataSchema),
    ),
    pagination: Schema.optional(Schema.suspend(() => CursorPaginationSchema)),
  });
export type ListProjectBranchesOutput = typeof ListProjectBranchesOutput.Type;

// The operation
/**
 * List branches
 *
 * Retrieves a list of branches for the specified project.
 * You can obtain a `project_id` by listing the projects for your Neon account.
 * Each Neon project has a root branch named `main`.
 * A `branch_id` value has a `br-` prefix.
 * A project may contain child branches that were branched from `main` or from another branch.
 * A parent branch is identified by the `parent_id` value, which is the `id` of the parent branch.
 * For related information, see [Manage branches](https://neon.tech/docs/manage/branches/).
 *
 * @param project_id - The Neon project ID
 * @param search - Search by branch `name` or `id`. You can specify partial `name` or `id` values to filter results.
 * @param sort_by - Sort the branches by sort_field. If not provided, branches will be sorted by updated_at descending order
 * @param cursor - A cursor to use in pagination. A cursor defines your place in the data list. Include `response.pagination.next` in subsequent API calls to fetch next page of the list.
 * @param sort_order - Defines the sorting order of entities.
 * @param limit - The maximum number of records to be returned in the response
 */
export const listProjectBranches =
  /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
    inputSchema: ListProjectBranchesInput,
    outputSchema: ListProjectBranchesOutput,
    errors: [NotFound] as const,
    pagination: {
      mode: "cursor",
      inputToken: "cursor",
      outputToken: "pagination.next",
      items: "branches",
    },
  }));
