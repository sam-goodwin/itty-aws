import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface DeleteQueryPatternsReportInput {
  organization: string;
  database: string;
  branch: string;
  id: string;
}
export const DeleteQueryPatternsReportInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    branch: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/organizations/{organization}/databases/{database}/branches/{branch}/query-patterns/{id}",
    }),
  ) as unknown as Schema.Codec<DeleteQueryPatternsReportInput>;

// Output Schema
export type DeleteQueryPatternsReportOutput = void;
export const DeleteQueryPatternsReportOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteQueryPatternsReportOutput>;

// The operation
/**
 * Delete a query patterns report
 *
 * @param organization - The name of the organization the branch belongs to
 * @param database - The name of the database the branch belongs to
 * @param branch - The name of the branch
 * @param id - The ID of the query patterns report
 */
export const deleteQueryPatternsReport = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteQueryPatternsReportInput,
    outputSchema: DeleteQueryPatternsReportOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
