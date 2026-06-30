import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface GetQueryPatternsReportInput {
  organization: string;
  database: string;
  branch: string;
  id: string;
}
export const GetQueryPatternsReportInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    branch: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{organization}/databases/{database}/branches/{branch}/query-patterns/{id}/download",
    }),
  ) as unknown as Schema.Codec<GetQueryPatternsReportInput>;

// Output Schema
export type GetQueryPatternsReportOutput = void;
export const GetQueryPatternsReportOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<GetQueryPatternsReportOutput>;

// The operation
/**
 * Download a finished query patterns report
 *
 * @param organization - The name of the organization the branch belongs to
 * @param database - The name of the database the branch belongs to
 * @param branch - The name of the branch
 * @param id - The ID of the query patterns report
 */
export const getQueryPatternsReport = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetQueryPatternsReportInput,
    outputSchema: GetQueryPatternsReportOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
