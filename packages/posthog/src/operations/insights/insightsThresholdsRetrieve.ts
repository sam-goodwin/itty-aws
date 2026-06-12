import * as Schema from "effect/Schema";
import {
  AlertSchema,
  InsightThresholdTypeSchema,
  InsightsThresholdBoundsSchema,
} from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const InsightsThresholdsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    insight_id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/insights/{insight_id}/thresholds/{id}/",
    }),
  );
export type InsightsThresholdsRetrieveInput =
  typeof InsightsThresholdsRetrieveInput.Type;

// Output Schema
export const InsightsThresholdsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    configuration: Schema.optional(
      Schema.Struct({
        bounds: Schema.optional(
          Schema.suspend(() => InsightsThresholdBoundsSchema),
        ),
        type: Schema.optional(Schema.suspend(() => InsightThresholdTypeSchema)),
      }),
    ),
    alerts: Schema.optional(Schema.Array(Schema.suspend(() => AlertSchema))),
  });
export type InsightsThresholdsRetrieveOutput =
  typeof InsightsThresholdsRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this threshold.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const insightsThresholdsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InsightsThresholdsRetrieveInput,
    outputSchema: InsightsThresholdsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
