import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export interface GetDashboardInput {
  uid: string;
}
export const GetDashboardInput = /*@__PURE__*/ Schema.Struct({
  uid: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/v2/dashboards/uid/{uid}" }),
) as unknown as Schema.Codec<GetDashboardInput>;

// Output Schema
export interface GetDashboardOutput {
  createdAt: string;
  createdBy: string;
  dashboard: {
    name: string;
    owner: string;
    description?: string;
    charts: ReadonlyArray<
      | { id: string; type: "TimeSeries"; name?: string; query: unknown }
      | { id: string; type: "Heatmap"; name?: string; query: unknown }
      | {
          id: string;
          type: "LogStream";
          name?: string;
          query: unknown;
          tableSettings?: {
            columns?: ReadonlyArray<unknown>;
            settings?: {
              fontSize?: string;
              highlightSeverity?: boolean;
              showRaw?: boolean;
              showEvent?: boolean;
              showTimestamp?: boolean;
              wrapLines?: boolean;
              hideNulls?: boolean;
              fitColumns?: boolean;
            };
          };
        }
      | { id: string; type: "Pie"; name?: string; query: unknown }
      | { id: string; type: "Scatter"; name?: string; query: unknown }
      | {
          id: string;
          type: "Table";
          name?: string;
          query: unknown;
          tableSettings?: {
            columns?: ReadonlyArray<unknown>;
            settings?: {
              fontSize?: string;
              highlightSeverity?: boolean;
              showRaw?: boolean;
              showEvent?: boolean;
              showTimestamp?: boolean;
              wrapLines?: boolean;
              hideNulls?: boolean;
              fitColumns?: boolean;
            };
          };
        }
      | { id: string; type: "TopK"; name?: string; query: unknown }
      | {
          id: string;
          type: "Statistic";
          name?: string;
          query: unknown;
          colorScheme?:
            | "Blue"
            | "Orange"
            | "Red"
            | "Purple"
            | "Teal"
            | "Yellow"
            | "Green"
            | "Pink"
            | "Grey"
            | "Brown";
          customUnits?: string;
          showChart?: boolean | string;
          hideValue?: boolean;
          chartHeight?: string | number;
          errorThreshold?:
            | "Above"
            | "AboveOrEqual"
            | "Below"
            | "BelowOrEqual"
            | "AboveOrBelow";
          errorThresholdValue?: string;
          warningThreshold?:
            | "Above"
            | "AboveOrEqual"
            | "Below"
            | "BelowOrEqual"
            | "AboveOrBelow";
          warningThresholdValue?: string;
          invertTheme?: boolean;
          background?: string;
          textColor?: string;
          labelColor?: string;
          chartFillColor?: string;
          okColorProps?: {
            background?: string;
            chartFillColor?: string;
            labelColor?: string;
            textColor?: string;
          };
          warningColorProps?: {
            background?: string;
            chartFillColor?: string;
            labelColor?: string;
            textColor?: string;
          };
          errorColorProps?: {
            background?: string;
            chartFillColor?: string;
            labelColor?: string;
            textColor?: string;
          };
        }
      | { id: string; type: "Note"; text: string; variant?: "default" }
      | {
          id: string;
          type: "MonitorList";
          name?: string;
          selectedMonitors: ReadonlyArray<string>;
          columns: {
            status: boolean;
            history: boolean;
            dataset: boolean;
            type: boolean;
            notifiers: boolean;
          };
        }
      | {
          id: string;
          type: "SmartFilter";
          name?: string;
          filters: ReadonlyArray<unknown>;
          logo?: string;
          logoDark?: string;
        }
      | { id: string; type: "Spacer"; name?: string }
    >;
    layout: ReadonlyArray<{
      i: string;
      x: number;
      y: number | null;
      w: number;
      h: number;
      minW?: number;
      minH?: number;
      maxW?: number;
      maxH?: number;
      static?: boolean;
    }>;
    refreshTime: 15 | 60 | 300;
    schemaVersion: 2;
    against?:
      | "-1h"
      | "-3h"
      | "-6h"
      | "-12h"
      | "-1d"
      | "-3d"
      | "-7d"
      | "-1w"
      | "-2w"
      | "-3w"
      | "-30d"
      | "-60d"
      | "-90d";
    againstTimestamp?: string;
    timeWindowStart: string;
    timeWindowEnd: string;
    uid?: string;
  };
  id: string;
  uid: string;
  updatedAt: string;
  updatedBy: string;
  version: string | number;
}
export const GetDashboardOutput = /*@__PURE__*/ Schema.Struct({
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
  version: Schema.Union([Schema.String, Schema.Number]),
}) as unknown as Schema.Codec<GetDashboardOutput>;

// The operation
/**
 * Get dashboard
 *
 * Get a dashboard by UID.
 */
export const getDashboard = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetDashboardInput,
  outputSchema: GetDashboardOutput,
  errors: [NotFound] as const,
}));
