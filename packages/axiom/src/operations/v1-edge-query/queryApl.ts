import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const QueryAplInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  format: Schema.Literals(["legacy", "tabular", "tabular-rows"]),
  nocache: Schema.optional(Schema.Boolean),
  saveAsKind: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  "streaming-duration": Schema.optional(Schema.String),
  "apl-source": Schema.optional(Schema.String),
  "apl-source-id": Schema.optional(Schema.String),
  totals: Schema.optional(Schema.Boolean),
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
  maxBinAutoGroups: Schema.optional(Schema.Number),
  queryEdgeDeployment: Schema.optional(Schema.String),
  queryOptions: Schema.optional(
    Schema.Struct({
      against: Schema.optional(Schema.String),
      againstStart: Schema.optional(Schema.String),
      againstTimestamp: Schema.optional(Schema.String),
      aggChartOpts: Schema.optional(Schema.String),
      caseSensitive: Schema.optional(Schema.String),
      containsTimeFilter: Schema.optional(Schema.String),
      datasets: Schema.optional(Schema.String),
      displayNull: Schema.optional(Schema.String),
      editorContent: Schema.optional(Schema.String),
      endColumn: Schema.optional(Schema.String),
      endLineNumber: Schema.optional(Schema.String),
      endTime: Schema.optional(Schema.String),
      integrationsFilter: Schema.optional(Schema.String),
      nanosecondPrecision: Schema.optional(Schema.String),
      openIntervals: Schema.optional(Schema.String),
      overlayCharts: Schema.optional(Schema.String),
      queryObject: Schema.optional(Schema.String),
      quickRange: Schema.optional(Schema.String),
      resolution: Schema.optional(Schema.String),
      resultsHistogram: Schema.optional(Schema.String),
      selection: Schema.optional(Schema.String),
      shownColumns: Schema.optional(Schema.String),
      startColumn: Schema.optional(Schema.String),
      startLineNumber: Schema.optional(Schema.String),
      startTime: Schema.optional(Schema.String),
      timeSeriesVariant: Schema.optional(Schema.String),
      timeSeriesView: Schema.optional(Schema.String),
    }),
  ),
  queryRegion: Schema.optional(Schema.String),
  startTime: Schema.optional(Schema.String),
  variables: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
}).pipe(T.Http({ method: "POST", path: "/v1/datasets/_apl?format=tabular" }));
export type QueryAplInput = typeof QueryAplInput.Type;

// Output Schema
export const QueryAplOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type QueryAplOutput = typeof QueryAplOutput.Type;

// The operation
/**
 *
 * @param id - when saveAsKind is true, this parameter indicates the id of the associated dataset
 * @param apl-source - contains the source of the APL query (for example console, dashboard, etc.)
 * @param apl-source-id - contains the id of the source, for example dashboard_id
 * @param totals - Include a totals table (only supported in MetricsDB)
 */
export const queryApl = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: QueryAplInput,
  outputSchema: QueryAplOutput,
}));
