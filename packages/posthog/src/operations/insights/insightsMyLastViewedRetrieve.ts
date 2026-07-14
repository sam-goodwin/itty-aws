import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface InsightsMyLastViewedRetrieveInput {
  project_id: string;
  format?: "csv" | "json";
}
export const InsightsMyLastViewedRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    format: Schema.optional(Schema.Literals(["csv", "json"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/insights/my_last_viewed/",
    }),
  ) as unknown as Schema.Codec<InsightsMyLastViewedRetrieveInput>;

// Output Schema
export type InsightsMyLastViewedRetrieveOutput = void;
export const InsightsMyLastViewedRetrieveOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<InsightsMyLastViewedRetrieveOutput>;

// The operation
/**
 * Returns basic details about the last 5 insights viewed by this user. Most recently viewed first.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const insightsMyLastViewedRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: InsightsMyLastViewedRetrieveInput,
    outputSchema: InsightsMyLastViewedRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
