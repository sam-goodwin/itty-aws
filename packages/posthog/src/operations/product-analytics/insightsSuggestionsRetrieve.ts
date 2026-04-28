import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const InsightsSuggestionsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    format: Schema.optional(Schema.Literals(["csv", "json"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/insights/{id}/suggestions/",
    }),
  );
export type InsightsSuggestionsRetrieveInput =
  typeof InsightsSuggestionsRetrieveInput.Type;

// Output Schema
export const InsightsSuggestionsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type InsightsSuggestionsRetrieveOutput =
  typeof InsightsSuggestionsRetrieveOutput.Type;

// The operation
/**
 * DRF ViewSet mixin that gates coalesced responses behind permission checks.
 * The QueryCoalescingMiddleware attaches cached response data to
 * request.META["_coalesced_response"] for followers. This mixin runs DRF's
 * initial() (auth + permissions + throttling) before returning the
 * cached response, ensuring the request is authorized.
 *
 * @param id - A unique integer value identifying this insight.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const insightsSuggestionsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InsightsSuggestionsRetrieveInput,
    outputSchema: InsightsSuggestionsRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
