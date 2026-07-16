import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface GetProjectBranchSchemaComparisonInput {
  project_id: string;
  branch_id: string;
  base_branch_id?: string;
  db_name: string;
  lsn?: string;
  timestamp?: string;
  base_lsn?: string;
  base_timestamp?: string;
}
export const GetProjectBranchSchemaComparisonInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
    base_branch_id: Schema.optional(Schema.String),
    db_name: Schema.String,
    lsn: Schema.optional(Schema.String),
    timestamp: Schema.optional(Schema.String),
    base_lsn: Schema.optional(Schema.String),
    base_timestamp: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/projects/{project_id}/branches/{branch_id}/compare_schema",
    }),
  ) as unknown as Schema.Codec<GetProjectBranchSchemaComparisonInput>;

// Output Schema
export interface GetProjectBranchSchemaComparisonOutput {
  diff?: string;
}
export const GetProjectBranchSchemaComparisonOutput =
  /*@__PURE__*/ Schema.Struct({
    diff: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<GetProjectBranchSchemaComparisonOutput>;

// The operation
/**
 * Compare database schema
 *
 * Compares the schema from the specified database with another branch's schema.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The branch ID
 * @param base_branch_id - The branch ID to compare the schema with
 * @param db_name - Name of the database for which the schema is retrieved
 * @param lsn - The Log Sequence Number (LSN) for which the schema is retrieved

 * @param timestamp - The point in time for which the schema is retrieved

 * @param base_lsn - The Log Sequence Number (LSN) for the base branch schema

 * @param base_timestamp - The point in time for the base branch schema

 */
export const getProjectBranchSchemaComparison =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GetProjectBranchSchemaComparisonInput,
    outputSchema: GetProjectBranchSchemaComparisonOutput,
    errors: [NotFound] as const,
  }));
