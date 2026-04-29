import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export const GetDashboardInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  uid: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/v2/dashboards/uid/{uid}" }));
export type GetDashboardInput = typeof GetDashboardInput.Type;

// Output Schema
export const GetDashboardOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type GetDashboardOutput = typeof GetDashboardOutput.Type;

// The operation
/**
 * Get dashboard
 *
 * Get a dashboard by UID.
 */
export const getDashboard = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetDashboardInput,
  outputSchema: GetDashboardOutput,
  errors: [NotFound] as const,
}));
