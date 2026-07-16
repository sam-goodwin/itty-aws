import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface GetBranchQueryInput {
  organization: string;
  database: string;
  branch: string;
  id: string;
}
export const GetBranchQueryInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization: Schema.String.pipe(T.PathParam()),
  database: Schema.String.pipe(T.PathParam()),
  branch: Schema.String.pipe(T.PathParam()),
  id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/organizations/{organization}/databases/{database}/branches/{branch}/insights/queries/{id}",
  }),
) as unknown as Schema.Codec<GetBranchQueryInput>;

// Output Schema
export interface GetBranchQueryOutput {
  id: string;
  password: Record<string, unknown>;
  tags: ReadonlyArray<Record<string, unknown>>;
  fingerprint: string;
  started_at: string | null;
  statement_type: string;
  keyspace: string;
  tables: ReadonlyArray<string>;
  username: string;
  remote_address: string;
  shard_queries: number;
  rows_read: number;
  rows_affected: number;
  rows_returned: number;
  total_duration_millis: number;
  error_message: string;
  normalized_sql: string;
  syntax_highlighted_sql: string;
  created_at: string;
  updated_at: string;
  explainable: boolean;
  truncated: boolean;
}
export const GetBranchQueryOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  password: Schema.Record(Schema.String, Schema.Unknown),
  tags: Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
  fingerprint: Schema.String,
  started_at: Schema.NullOr(Schema.String),
  statement_type: Schema.String,
  keyspace: Schema.String,
  tables: Schema.Array(Schema.String),
  username: Schema.String,
  remote_address: Schema.String,
  shard_queries: Schema.Number,
  rows_read: Schema.Number,
  rows_affected: Schema.Number,
  rows_returned: Schema.Number,
  total_duration_millis: Schema.Number,
  error_message: Schema.String,
  normalized_sql: Schema.String,
  syntax_highlighted_sql: Schema.String,
  created_at: Schema.String,
  updated_at: Schema.String,
  explainable: Schema.Boolean,
  truncated: Schema.Boolean,
}) as unknown as Schema.Codec<GetBranchQueryOutput>;

// The operation
/**
 * Retrieve a branch query
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param database - Database name slug from `list_databases`. Example: `app-db`.
 * @param branch - Branch name from `list_branches`. Example: `main`.
 * @param id - The query ID
 */
export const getBranchQuery = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetBranchQueryInput,
  outputSchema: GetBranchQueryOutput,
  errors: [Forbidden, NotFound] as const,
}));
