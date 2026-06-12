import * as Schema from "effect/Schema";
import { ThresholdWithAlertSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const InsightsThresholdsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    insight_id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/insights/{insight_id}/thresholds/",
    }),
  );
export type InsightsThresholdsListInput =
  typeof InsightsThresholdsListInput.Type;

// Output Schema
export const InsightsThresholdsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(Schema.suspend(() => ThresholdWithAlertSchema)),
    ),
  });
export type InsightsThresholdsListOutput =
  typeof InsightsThresholdsListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const insightsThresholdsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InsightsThresholdsListInput,
    outputSchema: InsightsThresholdsListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
