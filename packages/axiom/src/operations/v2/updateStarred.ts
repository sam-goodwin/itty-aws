import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { NotFound, UnprocessableEntity } from "../../errors";

// Input Schema
export const UpdateStarredInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
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
        overlayCharts: Schema.optional(Schema.Literals(["true", "false", ""])),
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
}).pipe(T.Http({ method: "PUT", path: "/v2/apl-starred-queries/{id}" }));
export type UpdateStarredInput = typeof UpdateStarredInput.Type;

// Output Schema
export const UpdateStarredOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
        overlayCharts: Schema.optional(Schema.Literals(["true", "false", ""])),
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
});
export type UpdateStarredOutput = typeof UpdateStarredOutput.Type;

// The operation
export const updateStarred = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateStarredInput,
  outputSchema: UpdateStarredOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
