import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, NotFound } from "../../errors.ts";

// Input Schema
export const PatchDashboardChartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uid: Schema.String.pipe(T.PathParam()),
    chartId: Schema.String.pipe(T.PathParam()),
    chart: Schema.Record(Schema.String, Schema.Unknown),
    message: Schema.optional(Schema.String),
    overwrite: Schema.optional(Schema.Boolean),
    version: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/v2/dashboards/uid/{uid}/charts/{chartId}",
    }),
  );
export type PatchDashboardChartInput = typeof PatchDashboardChartInput.Type;

// Output Schema
export const PatchDashboardChartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dashboard: Schema.Struct({
      createdAt: Schema.String,
      createdBy: Schema.String,
      dashboard: Schema.Struct({
        name: Schema.String,
        owner: Schema.String,
        description: Schema.optional(Schema.String),
        charts: Schema.Array(Schema.Unknown),
        layout: Schema.Array(
          Schema.Struct({
            i: Schema.String,
            x: Schema.Number,
            y: Schema.NullOr(Schema.Number),
            w: Schema.Number,
            h: Schema.Number,
            minW: Schema.optional(Schema.Number),
            minH: Schema.optional(Schema.Number),
            maxW: Schema.optional(Schema.Number),
            maxH: Schema.optional(Schema.Number),
            static: Schema.optional(Schema.Boolean),
          }),
        ),
        refreshTime: Schema.Literals([15, 60, 300]),
        schemaVersion: Schema.Literals([2]),
        against: Schema.optional(
          Schema.Literals([
            "-1h",
            "-3h",
            "-6h",
            "-12h",
            "-1d",
            "-3d",
            "-7d",
            "-1w",
            "-2w",
            "-3w",
            "-30d",
            "-60d",
            "-90d",
          ]),
        ),
        againstTimestamp: Schema.optional(Schema.String),
        timeWindowStart: Schema.String,
        timeWindowEnd: Schema.String,
        uid: Schema.optional(Schema.String),
      }),
      id: Schema.String,
      uid: Schema.String,
      updatedAt: Schema.String,
      updatedBy: Schema.String,
      version: Schema.Unknown,
    }),
    overwritten: Schema.optional(Schema.Boolean),
    status: Schema.Literals(["created", "updated"]),
  });
export type PatchDashboardChartOutput = typeof PatchDashboardChartOutput.Type;

// The operation
/**
 * Patch dashboard chart
 *
 * Patch a single chart in a dashboard by chart ID.
 */
export const patchDashboardChart = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PatchDashboardChartInput,
  outputSchema: PatchDashboardChartOutput,
  errors: [BadRequest, NotFound] as const,
}));
