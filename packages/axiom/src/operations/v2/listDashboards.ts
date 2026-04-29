import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const ListDashboardsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
}).pipe(T.Http({ method: "GET", path: "/v2/dashboards" }));
export type ListDashboardsInput = typeof ListDashboardsInput.Type;

// Output Schema
export const ListDashboardsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
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
);
export type ListDashboardsOutput = typeof ListDashboardsOutput.Type;

// The operation
/**
 * List dashboards
 *
 * List dashboards visible to the caller.
 */
export const listDashboards = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListDashboardsInput,
  outputSchema: ListDashboardsOutput,
}));
