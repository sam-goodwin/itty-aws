import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const InsightsTrendingRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    format: Schema.optional(Schema.Literals(["csv", "json"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/insights/trending/",
    }),
  );
export type InsightsTrendingRetrieveInput =
  typeof InsightsTrendingRetrieveInput.Type;

// Output Schema
export const InsightsTrendingRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type InsightsTrendingRetrieveOutput =
  typeof InsightsTrendingRetrieveOutput.Type;

// The operation
/**
 * Returns trending insights based on view count in the last N days (default 7).
 * Defaults to returning top 10 insights.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const insightsTrendingRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InsightsTrendingRetrieveInput,
    outputSchema: InsightsTrendingRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
