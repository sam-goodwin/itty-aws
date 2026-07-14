import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface LintBranchSchemaInput {
  organization: string;
  database: string;
  branch: string;
  page?: number;
  per_page?: number;
}
export const LintBranchSchemaInput = /*@__PURE__*/ Schema.Struct({
  organization: Schema.String.pipe(T.PathParam()),
  database: Schema.String.pipe(T.PathParam()),
  branch: Schema.String.pipe(T.PathParam()),
  page: Schema.optional(Schema.Number),
  per_page: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/organizations/{organization}/databases/{database}/branches/{branch}/schema/lint",
  }),
) as unknown as Schema.Codec<LintBranchSchemaInput>;

// Output Schema
export interface LintBranchSchemaOutput {
  type: string;
  current_page: number;
  next_page: number | null;
  next_page_url: string | null;
  prev_page: number | null;
  prev_page_url: string | null;
  data: {
    lint_error: string;
    subject_type: "table" | "vschema" | "routing_rules";
    keyspace_name: string;
    table_name: string;
    error_description: string;
    docs_url: string;
    column_name: string;
    foreign_key_column_names: string[];
    auto_increment_column_names: string[];
    charset_name: string;
    engine_name: string;
    vindex_name: string;
    json_path: string;
    check_constraint_name: string;
    enum_value: string;
    partitioning_type: string;
    partition_name: string;
  }[];
}
export const LintBranchSchemaOutput = /*@__PURE__*/ Schema.Struct({
  type: Schema.String,
  current_page: Schema.Number,
  next_page: Schema.NullOr(Schema.Number),
  next_page_url: Schema.NullOr(Schema.String),
  prev_page: Schema.NullOr(Schema.Number),
  prev_page_url: Schema.NullOr(Schema.String),
  data: Schema.Array(
    Schema.Struct({
      lint_error: Schema.String,
      subject_type: Schema.Literals(["table", "vschema", "routing_rules"]),
      keyspace_name: Schema.String,
      table_name: Schema.String,
      error_description: Schema.String,
      docs_url: Schema.String,
      column_name: Schema.String,
      foreign_key_column_names: Schema.Array(Schema.String),
      auto_increment_column_names: Schema.Array(Schema.String),
      charset_name: Schema.String,
      engine_name: Schema.String,
      vindex_name: Schema.String,
      json_path: Schema.String,
      check_constraint_name: Schema.String,
      enum_value: Schema.String,
      partitioning_type: Schema.String,
      partition_name: Schema.String,
    }),
  ),
}) as unknown as Schema.Codec<LintBranchSchemaOutput>;

// The operation
/**
 * Lint a branch schema
 *
 * @param organization - The name of the organization the branch belongs to
 * @param database - The name of the database the branch belongs to
 * @param branch - The name of the branch
 * @param page - If provided, specifies the page offset of returned results
 * @param per_page - If provided, specifies the number of returned results
 */
export const lintBranchSchema = /*@__PURE__*/ API.makePaginated(() => ({
  inputSchema: LintBranchSchemaInput,
  outputSchema: LintBranchSchemaOutput,
  errors: [Forbidden, NotFound] as const,
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "next_page",
    items: "data",
  },
}));
