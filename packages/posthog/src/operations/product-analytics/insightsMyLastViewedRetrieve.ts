import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const InsightsMyLastViewedRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    format: Schema.optional(Schema.Literals(["csv", "json"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/insights/my_last_viewed/",
    }),
  );
export type InsightsMyLastViewedRetrieveInput =
  typeof InsightsMyLastViewedRetrieveInput.Type;

// Output Schema
export const InsightsMyLastViewedRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type InsightsMyLastViewedRetrieveOutput =
  typeof InsightsMyLastViewedRetrieveOutput.Type;

// The operation
/**
 * Returns basic details about the last 5 insights viewed by this user. Most recently viewed first.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const insightsMyLastViewedRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: InsightsMyLastViewedRetrieveInput,
    outputSchema: InsightsMyLastViewedRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
