import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface InsightsViewedCreateInput {
  project_id: string;
  format?: "csv" | "json";
  insight_ids: number[];
}
export const InsightsViewedCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    format: Schema.optional(Schema.Literals(["csv", "json"])),
    insight_ids: Schema.Array(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/insights/viewed/",
    }),
  ) as unknown as Schema.Codec<InsightsViewedCreateInput>;

// Output Schema
export type InsightsViewedCreateOutput = void;
export const InsightsViewedCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<InsightsViewedCreateOutput>;

// The operation
/**
 * Record that the current user has just viewed one or more insights. Submitted ids that do not belong to the current project or that point at deleted insights are silently dropped. Returns 201 on success regardless of how many ids were retained.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const insightsViewedCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InsightsViewedCreateInput,
    outputSchema: InsightsViewedCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
