import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface GetQueryPatternsReportStatusInput {
  organization: string;
  database: string;
  branch: string;
  id: string;
}
export const GetQueryPatternsReportStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    branch: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{organization}/databases/{database}/branches/{branch}/query-patterns/{id}",
    }),
  ) as unknown as Schema.Codec<GetQueryPatternsReportStatusInput>;

// Output Schema
export interface GetQueryPatternsReportStatusOutput {
  id: string;
  state: "pending" | "completed" | "failed";
  created_at: string;
  finished_at: string | null;
  url: string;
  download_url: string;
  actor: { id: string; display_name: string; avatar_url: string };
}
export const GetQueryPatternsReportStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    state: Schema.Literals(["pending", "completed", "failed"]),
    created_at: Schema.String,
    finished_at: Schema.NullOr(Schema.String),
    url: Schema.String,
    download_url: Schema.String,
    actor: Schema.Struct({
      id: Schema.String,
      display_name: Schema.String,
      avatar_url: Schema.String,
    }),
  }) as unknown as Schema.Codec<GetQueryPatternsReportStatusOutput>;

// The operation
/**
 * Show the status of a query patterns report
 *
 * @param organization - The name of the organization the branch belongs to
 * @param database - The name of the database the branch belongs to
 * @param branch - The name of the branch
 * @param id - The ID of the query patterns report
 */
export const getQueryPatternsReportStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetQueryPatternsReportStatusInput,
    outputSchema: GetQueryPatternsReportStatusOutput,
    errors: [Forbidden, NotFound] as const,
  }));
