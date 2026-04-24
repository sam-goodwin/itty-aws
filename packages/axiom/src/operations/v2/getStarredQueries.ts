import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";

// Input Schema
export const GetStarredQueriesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    dataset: Schema.optional(Schema.String),
    who: Schema.optional(Schema.String),
    qs: Schema.optional(Schema.String),
  },
).pipe(T.Http({ method: "GET", path: "/v2/apl-starred-queries" }));
export type GetStarredQueriesInput = typeof GetStarredQueriesInput.Type;

// Output Schema
export const GetStarredQueriesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
    dataset: Schema.optional(Schema.String),
    kind: Schema.Literals(["apl"]),
    metadata: Schema.Record(Schema.String, Schema.String),
    name: Schema.String,
    query: Schema.Struct({
      apl: Schema.String,
      cursor: Schema.optional(Schema.String),
      defaultLimit: Schema.optional(Schema.Number),
      defaultOrder: Schema.optional(
        Schema.Array(
          Schema.Struct({
            desc: Schema.optional(Schema.Boolean),
            field: Schema.optional(Schema.String),
          }),
        ),
      ),
      endTime: Schema.optional(Schema.String),
      includeCursor: Schema.optional(Schema.Boolean),
      includeCursorField: Schema.optional(Schema.Boolean),
      libraries: Schema.optional(Schema.Array(Schema.String)),
      queryOptions: Schema.optional(
        Schema.Struct({
          disableCache: Schema.optional(Schema.Boolean),
          disableStats: Schema.optional(Schema.Boolean),
          disableTrace: Schema.optional(Schema.Boolean),
          maxDataPoints: Schema.optional(Schema.Number),
          maxSeries: Schema.optional(Schema.Number),
          noAggregation: Schema.optional(Schema.Boolean),
          noFill: Schema.optional(Schema.Boolean),
          noInterpolation: Schema.optional(Schema.Boolean),
          priority: Schema.optional(Schema.Literals(["low", "medium", "high"])),
          resolution: Schema.optional(Schema.String),
          displayNull: Schema.optional(
            Schema.Literals(["auto", "null", "span", "zero", ""]),
          ),
          overlayCharts: Schema.optional(
            Schema.Literals(["true", "false", ""]),
          ),
          shownColumns: Schema.optional(Schema.String),
          timeSeriesVariant: Schema.optional(
            Schema.Literals(["area", "bars", "line", "lines", ""]),
          ),
          timeSeriesView: Schema.optional(
            Schema.Literals([
              "charts",
              "resultsTable",
              "charts|resultsTable",
              "",
            ]),
          ),
        }),
      ),
      startTime: Schema.optional(Schema.String),
      variables: Schema.optional(Schema.Unknown),
    }),
    who: Schema.String,
    id: Schema.String,
  }),
);
export type GetStarredQueriesOutput = typeof GetStarredQueriesOutput.Type;

// The operation
/**
 *
 * @param who - - If the value of `who` is undefined, the request returns queries starred by the authenticated user.
- If the value of `who` is a user ID, the request returns queries starred by the user with this ID (this request requires elevated privileges). For example, `&who='abc123'`.
- If the value of `who` is `team`, the request returns queries starred by the team apart from the authenticated user.For example, `&who=team`.
- If the value of `who` is `all`, the request returns queries starred by all users in the team, including the authenticated user. For example, `&who=all`.
 */
export const getStarredQueries = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetStarredQueriesInput,
  outputSchema: GetStarredQueriesOutput,
}));
