import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const QueryDraftSqlRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/query/draft_sql/",
    }),
  );
export type QueryDraftSqlRetrieveInput = typeof QueryDraftSqlRetrieveInput.Type;

// Output Schema
export const QueryDraftSqlRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Record(Schema.String, Schema.Unknown);
export type QueryDraftSqlRetrieveOutput =
  typeof QueryDraftSqlRetrieveOutput.Type;

// The operation
/**
 * DRF ViewSet mixin that gates coalesced responses behind permission checks.
 * The QueryCoalescingMiddleware attaches cached response data to
 * request.META["_coalesced_response"] for followers. This mixin runs DRF's
 * initial() (auth + permissions + throttling) before returning the
 * cached response, ensuring the request is authorized.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const queryDraftSqlRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: QueryDraftSqlRetrieveInput,
    outputSchema: QueryDraftSqlRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
