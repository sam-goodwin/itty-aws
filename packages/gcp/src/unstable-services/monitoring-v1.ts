// ==========================================================================
// Cloud Monitoring API (monitoring v1)
// DO NOT EDIT - Generated from GCP Discovery Document
// ==========================================================================

import * as Schema from "effect/Schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import type { DefaultErrors } from "../errors.ts";
import type * as HttpClient from "effect/unstable/http/HttpClient";

// Service metadata
const svc = T.Service({
  name: "monitoring",
  version: "v1",
  rootUrl: "https://monitoring.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface Parameter {
  /** An integer parameter value. */
  intValue?: string;
  /** A floating-point parameter value. */
  doubleValue?: number;
}

export const Parameter = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  intValue: Schema.optional(Schema.String),
  doubleValue: Schema.optional(Schema.Number),
}).annotate({ identifier: "Parameter" });

export interface AggregationFunction {
  /** Required. The type of aggregation function, must be one of the following: "none" - no function. "percentile" - APPROX_QUANTILES() - 1 parameter numeric value "average" - AVG() "count" - COUNT() "count-distinct" - COUNT(DISTINCT) "count-distinct-approx" - APPROX_COUNT_DISTINCT() "max" - MAX() "min" - MIN() "sum" - SUM() */
  type?: string;
  /** Optional. Parameters applied to the aggregation function. Only used for functions that require them. */
  parameters?: ReadonlyArray<Parameter>;
}

export const AggregationFunction = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
  parameters: Schema.optional(Schema.Array(Parameter)),
}).annotate({ identifier: "AggregationFunction" });

export interface StatisticalTimeSeriesFilter {
  /** How many time series to output. */
  numTimeSeries?: number;
  /** rankingMethod is applied to a set of time series, and then the produced value for each individual time series is used to compare a given time series to others. These are methods that cannot be applied stream-by-stream, but rather require the full context of a request to evaluate time series. */
  rankingMethod?:
    | "METHOD_UNSPECIFIED"
    | "METHOD_CLUSTER_OUTLIER"
    | (string & {});
}

export const StatisticalTimeSeriesFilter =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    numTimeSeries: Schema.optional(Schema.Number),
    rankingMethod: Schema.optional(Schema.String),
  }).annotate({ identifier: "StatisticalTimeSeriesFilter" });

export interface OperationMetadata {
  /** Current state of the batch operation. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATED"
    | "RUNNING"
    | "DONE"
    | "CANCELLED"
    | (string & {});
  /** The time when the operation result was last updated. */
  updateTime?: string;
  /** The time when the batch request was received. */
  createTime?: string;
}

export const OperationMetadata = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  state: Schema.optional(Schema.String),
  updateTime: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
}).annotate({ identifier: "OperationMetadata" });

export interface ColumnSortingOptions {
  /** Optional. Column name to sort data by */
  column?: string;
  /** Optional. A sorting direction that determines ascending or descending order. This is a legacy field kept for backwards compatibility with table. */
  direction?:
    | "SORT_ORDER_UNSPECIFIED"
    | "SORT_ORDER_NONE"
    | "SORT_ORDER_ASCENDING"
    | "SORT_ORDER_DESCENDING"
    | (string & {});
}

export const ColumnSortingOptions = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  column: Schema.optional(Schema.String),
  direction: Schema.optional(Schema.String),
}).annotate({ identifier: "ColumnSortingOptions" });

export interface Measure {
  /** Required. The column name within in the dataset used for the measure. */
  column?: string;
  /** Required. The aggregation function applied to the input column. This must not be set to "none" unless binning is disabled on the dimension. The aggregation function is used to group points on the dimension bins. */
  aggregationFunction?: AggregationFunction;
}

export const Measure = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  column: Schema.optional(Schema.String),
  aggregationFunction: Schema.optional(AggregationFunction),
}).annotate({ identifier: "Measure" });

export interface OpsAnalyticsQuery {
  /** A SQL query to fetch time series, category series, or numeric series data. */
  sql?: string;
}

export const OpsAnalyticsQuery = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sql: Schema.optional(Schema.String),
}).annotate({ identifier: "OpsAnalyticsQuery" });

export interface Interval {
  /** Optional. Inclusive start of the interval.If specified, a Timestamp matching this interval will have to be the same or after the start. */
  startTime?: string;
  /** Optional. Exclusive end of the interval.If specified, a Timestamp matching this interval will have to be before the end. */
  endTime?: string;
}

export const Interval = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  startTime: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
}).annotate({ identifier: "Interval" });

export interface PickTimeSeriesFilter {
  /** How many time series to allow to pass through the filter. */
  numTimeSeries?: number;
  /** ranking_method is applied to each time series independently to produce the value which will be used to compare the time series to other time series. */
  rankingMethod?:
    | "METHOD_UNSPECIFIED"
    | "METHOD_MEAN"
    | "METHOD_MAX"
    | "METHOD_MIN"
    | "METHOD_SUM"
    | "METHOD_LATEST"
    | (string & {});
  /** Select the top N streams/time series within this time interval */
  interval?: Interval;
  /** How to use the ranking to select time series that pass through the filter. */
  direction?: "DIRECTION_UNSPECIFIED" | "TOP" | "BOTTOM" | (string & {});
}

export const PickTimeSeriesFilter = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  numTimeSeries: Schema.optional(Schema.Number),
  rankingMethod: Schema.optional(Schema.String),
  interval: Schema.optional(Interval),
  direction: Schema.optional(Schema.String),
}).annotate({ identifier: "PickTimeSeriesFilter" });

export interface Aggregation {
  /** The alignment_period specifies a time interval, in seconds, that is used to divide the data in all the time series into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.The value must be at least 60 seconds. If a per-series aligner other than ALIGN_NONE is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner ALIGN_NONE is specified, then this field is ignored.The maximum value of the alignment_period is 2 years, or 104 weeks. */
  alignmentPeriod?: string;
  /** An Aligner describes how to bring the data points in a single time series into temporal alignment. Except for ALIGN_NONE, all alignments cause all the data points in an alignment_period to be mathematically grouped together, resulting in a single data point for each alignment_period with end timestamp at the end of the period.Not all alignment operations may be applied to all time series. The valid choices depend on the metric_kind and value_type of the original time series. Alignment can change the metric_kind or the value_type of the time series.Time series data must be aligned in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified and not equal to ALIGN_NONE and alignment_period must be specified; otherwise, an error is returned. */
  perSeriesAligner?:
    | "ALIGN_NONE"
    | "ALIGN_DELTA"
    | "ALIGN_RATE"
    | "ALIGN_INTERPOLATE"
    | "ALIGN_NEXT_OLDER"
    | "ALIGN_MIN"
    | "ALIGN_MAX"
    | "ALIGN_MEAN"
    | "ALIGN_COUNT"
    | "ALIGN_SUM"
    | "ALIGN_STDDEV"
    | "ALIGN_COUNT_TRUE"
    | "ALIGN_COUNT_FALSE"
    | "ALIGN_FRACTION_TRUE"
    | "ALIGN_PERCENTILE_99"
    | "ALIGN_PERCENTILE_95"
    | "ALIGN_PERCENTILE_50"
    | "ALIGN_PERCENTILE_05"
    | "ALIGN_PERCENT_CHANGE"
    | (string & {});
  /** The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.Not all reducer operations can be applied to all time series. The valid choices depend on the metric_kind and the value_type of the original time series. Reduction can yield a time series with a different metric_kind or value_type than the input time series.Time series data must first be aligned (see per_series_aligner) in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified, and must not be ALIGN_NONE. An alignment_period must also be specified; otherwise, an error is returned. */
  crossSeriesReducer?:
    | "REDUCE_NONE"
    | "REDUCE_MEAN"
    | "REDUCE_MIN"
    | "REDUCE_MAX"
    | "REDUCE_SUM"
    | "REDUCE_STDDEV"
    | "REDUCE_COUNT"
    | "REDUCE_COUNT_TRUE"
    | "REDUCE_COUNT_FALSE"
    | "REDUCE_FRACTION_TRUE"
    | "REDUCE_PERCENTILE_99"
    | "REDUCE_PERCENTILE_95"
    | "REDUCE_PERCENTILE_50"
    | "REDUCE_PERCENTILE_05"
    | (string & {});
  /** The set of fields to preserve when cross_series_reducer is specified. The group_by_fields determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The cross_series_reducer is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains resource.type. Fields not specified in group_by_fields are aggregated away. If group_by_fields is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If cross_series_reducer is not defined, this field is ignored. */
  groupByFields?: ReadonlyArray<string>;
}

export const Aggregation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  alignmentPeriod: Schema.optional(Schema.String),
  perSeriesAligner: Schema.optional(Schema.String),
  crossSeriesReducer: Schema.optional(Schema.String),
  groupByFields: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "Aggregation" });

export interface RatioPart {
  /** Required. The monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
  filter?: string;
  /** By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data. */
  aggregation?: Aggregation;
}

export const RatioPart = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  filter: Schema.optional(Schema.String),
  aggregation: Schema.optional(Aggregation),
}).annotate({ identifier: "RatioPart" });

export interface TimeSeriesFilterRatio {
  /** Ranking based time series filter. */
  pickTimeSeriesFilter?: PickTimeSeriesFilter;
  /** Apply a second aggregation after the ratio is computed. */
  secondaryAggregation?: Aggregation;
  /** Statistics based time series filter. Note: This field is deprecated and completely ignored by the API. */
  statisticalTimeSeriesFilter?: StatisticalTimeSeriesFilter;
  /** The numerator of the ratio. */
  numerator?: RatioPart;
  /** The denominator of the ratio. */
  denominator?: RatioPart;
}

export const TimeSeriesFilterRatio = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pickTimeSeriesFilter: Schema.optional(PickTimeSeriesFilter),
  secondaryAggregation: Schema.optional(Aggregation),
  statisticalTimeSeriesFilter: Schema.optional(StatisticalTimeSeriesFilter),
  numerator: Schema.optional(RatioPart),
  denominator: Schema.optional(RatioPart),
}).annotate({ identifier: "TimeSeriesFilterRatio" });

export interface TimeSeriesFilter {
  /** Ranking based time series filter. */
  pickTimeSeriesFilter?: PickTimeSeriesFilter;
  /** Apply a second aggregation after aggregation is applied. */
  secondaryAggregation?: Aggregation;
  /** By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data. */
  aggregation?: Aggregation;
  /** Statistics based time series filter. Note: This field is deprecated and completely ignored by the API. */
  statisticalTimeSeriesFilter?: StatisticalTimeSeriesFilter;
  /** Required. The monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
  filter?: string;
}

export const TimeSeriesFilter = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pickTimeSeriesFilter: Schema.optional(PickTimeSeriesFilter),
  secondaryAggregation: Schema.optional(Aggregation),
  aggregation: Schema.optional(Aggregation),
  statisticalTimeSeriesFilter: Schema.optional(StatisticalTimeSeriesFilter),
  filter: Schema.optional(Schema.String),
}).annotate({ identifier: "TimeSeriesFilter" });

export interface TimeSeriesQuery {
  /** Preview: A query used to fetch a time series, category series, or numeric series with SQL. This is a preview feature and may be subject to change before final release. */
  opsAnalyticsQuery?: OpsAnalyticsQuery;
  /** Parameters to fetch a ratio between two time series filters. */
  timeSeriesFilterRatio?: TimeSeriesFilterRatio;
  /** Filter parameters to fetch time series. */
  timeSeriesFilter?: TimeSeriesFilter;
  /** The unit of data contained in fetched time series. If non-empty, this unit will override any unit that accompanies fetched data. The format is the same as the unit (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors) field in MetricDescriptor. */
  unitOverride?: string;
  /** Optional. If set, Cloud Monitoring will treat the full query duration as the alignment period so that there will be only 1 output value.*Note: This could override the configured alignment period except for the cases where a series of data points are expected, like - XyChart - Scorecard's spark chart */
  outputFullDuration?: boolean;
  /** A query used to fetch time series with MQL. */
  timeSeriesQueryLanguage?: string;
  /** A query used to fetch time series with PromQL. */
  prometheusQuery?: string;
}

export const TimeSeriesQuery = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  opsAnalyticsQuery: Schema.optional(OpsAnalyticsQuery),
  timeSeriesFilterRatio: Schema.optional(TimeSeriesFilterRatio),
  timeSeriesFilter: Schema.optional(TimeSeriesFilter),
  unitOverride: Schema.optional(Schema.String),
  outputFullDuration: Schema.optional(Schema.Boolean),
  timeSeriesQueryLanguage: Schema.optional(Schema.String),
  prometheusQuery: Schema.optional(Schema.String),
}).annotate({ identifier: "TimeSeriesQuery" });

export interface Dimension {
  /** The column name to sort on for binning. This column can be the same column as this dimension or any other column used as a measure in the results. If sort_order is set to NONE, then this value is not used. */
  sortColumn?: string;
  /** Optional. The type of the dimension column. This is relevant only if one of the bin_size fields is set. If it is empty, the type TIMESTAMP or INT64 will be assumed based on which bin_size field is set. If populated, this should be set to one of the following types: DATE, TIME, DATETIME, TIMESTAMP, BIGNUMERIC, INT64, NUMERIC, FLOAT64. */
  columnType?: string;
  /** The sort order applied to the sort column. */
  sortOrder?:
    | "SORT_ORDER_UNSPECIFIED"
    | "SORT_ORDER_NONE"
    | "SORT_ORDER_ASCENDING"
    | "SORT_ORDER_DESCENDING"
    | (string & {});
  /** Optional. float_bin_size is used when the column type used for a dimension is a floating point numeric column. */
  floatBinSize?: number;
  /** For widgets that use SQL queries, the limit to the number of bins to generate. When 0 is specified, the maximum count is not enforced. For a histogram that uses a time series query, the exact number of bins to generate. If not specified or the value is 0, then the histogram determines the number of bins to use. */
  maxBinCount?: number;
  /** time_bin_size is used when the data type of the specified dimension is a time type and the bin size is determined by a time duration. If column_type is DATE, this must be a whole value multiple of 1 day. If column_type is TIME, this must be less than or equal to 24 hours. */
  timeBinSize?: string;
  /** Required. For widgets that use SQL queries, set the value to the name of the column in the results table whose data is charted. For a histogram that uses a time series query, set the value of this field to metric_value. */
  column?: string;
  /** numeric_bin_size is used when the column type used for a dimension is numeric or string. If the column field is set to metric_value, then numericBinSize overrides maxBinCount. */
  numericBinSize?: number;
}

export const Dimension = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sortColumn: Schema.optional(Schema.String),
  columnType: Schema.optional(Schema.String),
  sortOrder: Schema.optional(Schema.String),
  floatBinSize: Schema.optional(Schema.Number),
  maxBinCount: Schema.optional(Schema.Number),
  timeBinSize: Schema.optional(Schema.String),
  column: Schema.optional(Schema.String),
  numericBinSize: Schema.optional(Schema.Number),
}).annotate({ identifier: "Dimension" });

export interface PieChartDataSet {
  /** Optional. A template for the name of the slice. This name will be displayed in the legend and the tooltip of the pie chart. It replaces the auto-generated names for the slices. For example, if the template is set to ${resource.labels.zone}, the zone's value will be used for the name instead of the default name. */
  sliceNameTemplate?: string;
  /** Optional. The lower bound on data point frequency for this data set, implemented by specifying the minimum alignment period to use in a time series query. For example, if the data is published once every 10 minutes, the min_alignment_period should be at least 10 minutes. It would not make sense to fetch and align data at one minute intervals. */
  minAlignmentPeriod?: string;
  /** A measure is a measured value of a property in your data. For example, rainfall in inches, number of units sold, revenue gained, etc. */
  measures?: ReadonlyArray<Measure>;
  /** Required. The query for the PieChart. See, google.monitoring.dashboard.v1.TimeSeriesQuery. */
  timeSeriesQuery?: TimeSeriesQuery;
  /** A dimension is a structured label, class, or category for a set of measurements in your data. */
  dimensions?: ReadonlyArray<Dimension>;
}

export const PieChartDataSet = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sliceNameTemplate: Schema.optional(Schema.String),
  minAlignmentPeriod: Schema.optional(Schema.String),
  measures: Schema.optional(Schema.Array(Measure)),
  timeSeriesQuery: Schema.optional(TimeSeriesQuery),
  dimensions: Schema.optional(Schema.Array(Dimension)),
}).annotate({ identifier: "PieChartDataSet" });

export interface PieChart {
  /** Required. Indicates the visualization type for the PieChart. */
  chartType?: "PIE_CHART_TYPE_UNSPECIFIED" | "PIE" | "DONUT" | (string & {});
  /** Optional. Indicates whether or not the pie chart should show slices' labels */
  showLabels?: boolean;
  /** Required. The queries for the chart's data. */
  dataSets?: ReadonlyArray<PieChartDataSet>;
}

export const PieChart = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  chartType: Schema.optional(Schema.String),
  showLabels: Schema.optional(Schema.Boolean),
  dataSets: Schema.optional(Schema.Array(PieChartDataSet)),
}).annotate({ identifier: "PieChart" });

export interface TemplateVariableCondition {
  /** The value to compare the template variable to. For example, if the comparator is REGEX_FULL_MATCH, this field should contain a regex. */
  templateVariableValue?: string;
  /** The template variable whose value is evaluated. */
  templateVariable?: string;
  /** Comparator to use to evaluate whether the value of the template variable matches the template_variable_value. For example, if the comparator is REGEX_FULL_MATCH, template_variable_value would contain a regex that is matched against the value of the template variable. */
  comparator?: "COMPARATOR_UNSPECIFIED" | "REGEX_FULL_MATCH" | (string & {});
}

export const TemplateVariableCondition =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    templateVariableValue: Schema.optional(Schema.String),
    templateVariable: Schema.optional(Schema.String),
    comparator: Schema.optional(Schema.String),
  }).annotate({ identifier: "TemplateVariableCondition" });

export interface VisibilityCondition {
  /** A condition whose evaluation is based on the value of a template variable. */
  templateVariableCondition?: TemplateVariableCondition;
}

export const VisibilityCondition = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  templateVariableCondition: Schema.optional(TemplateVariableCondition),
}).annotate({ identifier: "VisibilityCondition" });

export interface Empty {}

export const Empty = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
  identifier: "Empty",
});

export interface TextStyle {
  /** The background color as a hex string. "#RRGGBB" or "#RGB" */
  backgroundColor?: string;
  /** Font sizes for both the title and content. The title will still be larger relative to the content. */
  fontSize?:
    | "FONT_SIZE_UNSPECIFIED"
    | "FS_EXTRA_SMALL"
    | "FS_SMALL"
    | "FS_MEDIUM"
    | "FS_LARGE"
    | "FS_EXTRA_LARGE"
    | (string & {});
  /** The pointer location for this widget (also sometimes called a "tail") */
  pointerLocation?:
    | "POINTER_LOCATION_UNSPECIFIED"
    | "PL_TOP"
    | "PL_RIGHT"
    | "PL_BOTTOM"
    | "PL_LEFT"
    | "PL_TOP_LEFT"
    | "PL_TOP_RIGHT"
    | "PL_RIGHT_TOP"
    | "PL_RIGHT_BOTTOM"
    | "PL_BOTTOM_RIGHT"
    | "PL_BOTTOM_LEFT"
    | "PL_LEFT_BOTTOM"
    | "PL_LEFT_TOP"
    | (string & {});
  /** The vertical alignment of both the title and content */
  verticalAlignment?:
    | "VERTICAL_ALIGNMENT_UNSPECIFIED"
    | "V_TOP"
    | "V_CENTER"
    | "V_BOTTOM"
    | (string & {});
  /** The text color as a hex string. "#RRGGBB" or "#RGB" */
  textColor?: string;
  /** The amount of padding around the widget */
  padding?:
    | "PADDING_SIZE_UNSPECIFIED"
    | "P_EXTRA_SMALL"
    | "P_SMALL"
    | "P_MEDIUM"
    | "P_LARGE"
    | "P_EXTRA_LARGE"
    | (string & {});
  /** The horizontal alignment of both the title and content */
  horizontalAlignment?:
    | "HORIZONTAL_ALIGNMENT_UNSPECIFIED"
    | "H_LEFT"
    | "H_CENTER"
    | "H_RIGHT"
    | (string & {});
}

export const TextStyle = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  backgroundColor: Schema.optional(Schema.String),
  fontSize: Schema.optional(Schema.String),
  pointerLocation: Schema.optional(Schema.String),
  verticalAlignment: Schema.optional(Schema.String),
  textColor: Schema.optional(Schema.String),
  padding: Schema.optional(Schema.String),
  horizontalAlignment: Schema.optional(Schema.String),
}).annotate({ identifier: "TextStyle" });

export interface Text {
  /** The text content to be displayed. */
  content?: string;
  /** How the text content is formatted. */
  format?: "FORMAT_UNSPECIFIED" | "MARKDOWN" | "RAW" | (string & {});
  /** How the text is styled */
  style?: TextStyle;
}

export const Text = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  content: Schema.optional(Schema.String),
  format: Schema.optional(Schema.String),
  style: Schema.optional(TextStyle),
}).annotate({ identifier: "Text" });

export interface AlertChart {
  /** Required. The resource name of the alert policy. The format is: projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[ALERT_POLICY_ID] */
  name?: string;
}

export const AlertChart = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
}).annotate({ identifier: "AlertChart" });

export interface SectionHeader {
  /** The subtitle of the section */
  subtitle?: string;
  /** Whether to insert a divider below the section in the table of contents */
  dividerBelow?: boolean;
}

export const SectionHeader = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subtitle: Schema.optional(Schema.String),
  dividerBelow: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "SectionHeader" });

export interface SingleViewGroup {
  /** Optional. Determines how the widget selector will be displayed. */
  displayType?: "DISPLAY_TYPE_UNSPECIFIED" | "DROPDOWN" | "TAB" | (string & {});
}

export const SingleViewGroup = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  displayType: Schema.optional(Schema.String),
}).annotate({ identifier: "SingleViewGroup" });

export interface FilterControl {
  /** Name of the template variable the widget affects. */
  templateVariable?: string;
}

export const FilterControl = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  templateVariable: Schema.optional(Schema.String),
}).annotate({ identifier: "FilterControl" });

export interface Breakdown {
  /** Required. The sort order is applied to the values of the breakdown column. */
  sortOrder?:
    | "SORT_ORDER_UNSPECIFIED"
    | "SORT_ORDER_NONE"
    | "SORT_ORDER_ASCENDING"
    | "SORT_ORDER_DESCENDING"
    | (string & {});
  /** Required. The name of the column in the dataset containing the breakdown values. */
  column?: string;
  /** Required. The Aggregation function is applied across all data in each breakdown created. */
  aggregationFunction?: AggregationFunction;
  /** Required. A limit to the number of breakdowns. If set to zero then all possible breakdowns are applied. The list of breakdowns is dependent on the value of the sort_order field. */
  limit?: number;
}

export const Breakdown = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sortOrder: Schema.optional(Schema.String),
  column: Schema.optional(Schema.String),
  aggregationFunction: Schema.optional(AggregationFunction),
  limit: Schema.optional(Schema.Number),
}).annotate({ identifier: "Breakdown" });

export interface TreemapDataSet {
  /** Optional. A collection of measures. A measure is a measured value of a property in your data. For example, rainfall in inches, number of units sold, revenue gained, etc. */
  measures?: ReadonlyArray<Measure>;
  /** Optional. The collection of breakdowns to be applied to the dataset. A breakdown is a way to slice the data. For example, you can break down the data by region. */
  breakdowns?: ReadonlyArray<Breakdown>;
  /** Required. The query that fetches the relevant data. See google.monitoring.dashboard.v1.TimeSeriesQuery */
  timeSeriesQuery?: TimeSeriesQuery;
}

export const TreemapDataSet = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  measures: Schema.optional(Schema.Array(Measure)),
  breakdowns: Schema.optional(Schema.Array(Breakdown)),
  timeSeriesQuery: Schema.optional(TimeSeriesQuery),
}).annotate({ identifier: "TreemapDataSet" });

export interface Treemap {
  /** Required. Ordered labels representing the hierarchical treemap structure. */
  treemapHierarchy?: ReadonlyArray<string>;
  /** Required. The collection of datasets used to construct and populate the treemap. For the rendered treemap rectangles: Color is determined by the aggregated value for each grouping. Size is proportional to the count of time series aggregated within that rectangle's segment. */
  dataSets?: ReadonlyArray<TreemapDataSet>;
}

export const Treemap = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  treemapHierarchy: Schema.optional(Schema.Array(Schema.String)),
  dataSets: Schema.optional(Schema.Array(TreemapDataSet)),
}).annotate({ identifier: "Treemap" });

export interface Axis {
  /** The label of the axis. */
  label?: string;
  /** The axis scale. By default, a linear scale is used. */
  scale?: "SCALE_UNSPECIFIED" | "LINEAR" | "LOG10" | (string & {});
}

export const Axis = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  label: Schema.optional(Schema.String),
  scale: Schema.optional(Schema.String),
}).annotate({ identifier: "Axis" });

export interface Threshold {
  /** The direction for the current threshold. Direction is not allowed in a XyChart. */
  direction?: "DIRECTION_UNSPECIFIED" | "ABOVE" | "BELOW" | (string & {});
  /** A label for the threshold. */
  label?: string;
  /** The state color for this threshold. Color is not allowed in a XyChart. */
  color?: "COLOR_UNSPECIFIED" | "YELLOW" | "RED" | (string & {});
  /** The target axis to use for plotting the threshold. Target axis is not allowed in a Scorecard. */
  targetAxis?: "TARGET_AXIS_UNSPECIFIED" | "Y1" | "Y2" | (string & {});
  /** The value of the threshold. The value should be defined in the native scale of the metric. */
  value?: number;
}

export const Threshold = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  direction: Schema.optional(Schema.String),
  label: Schema.optional(Schema.String),
  color: Schema.optional(Schema.String),
  targetAxis: Schema.optional(Schema.String),
  value: Schema.optional(Schema.Number),
}).annotate({ identifier: "Threshold" });

export interface DataSet {
  /** Optional. A collection of sort options, affects the order of the data and legend. */
  sort?: ReadonlyArray<ColumnSortingOptions>;
  /** Required. Fields for querying time series data from the Stackdriver metrics API. */
  timeSeriesQuery?: TimeSeriesQuery;
  /** A template string for naming TimeSeries in the resulting data set. This should be a string with interpolations of the form ${label_name}, which will resolve to the label's value. */
  legendTemplate?: string;
  /** Optional. The lower bound on data point frequency for this data set, implemented by specifying the minimum alignment period to use in a time series query. For example, if the data is published once every 10 minutes, the min_alignment_period should be at least 10 minutes. It would not make sense to fetch and align data at one minute intervals.For PromQL queries, this field is used to set the minimum interval for the query step, controlling data granularity. Larger values can improve performance on long time ranges. See Querying Basics and Range Queries for more details on the PromQL step. */
  minAlignmentPeriod?: string;
  /** Optional. The target axis to use for plotting the metric. */
  targetAxis?: "TARGET_AXIS_UNSPECIFIED" | "Y1" | "Y2" | (string & {});
  /** Optional. A collection of measures. */
  measures?: ReadonlyArray<Measure>;
  /** Optional. The collection of breakdowns to be applied to the dataset. */
  breakdowns?: ReadonlyArray<Breakdown>;
  /** How this data should be plotted on the chart. */
  plotType?:
    | "PLOT_TYPE_UNSPECIFIED"
    | "LINE"
    | "STACKED_AREA"
    | "STACKED_BAR"
    | "HEATMAP"
    | (string & {});
  /** Optional. A collection of dimension columns. */
  dimensions?: ReadonlyArray<Dimension>;
}

export const DataSet = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sort: Schema.optional(Schema.Array(ColumnSortingOptions)),
  timeSeriesQuery: Schema.optional(TimeSeriesQuery),
  legendTemplate: Schema.optional(Schema.String),
  minAlignmentPeriod: Schema.optional(Schema.String),
  targetAxis: Schema.optional(Schema.String),
  measures: Schema.optional(Schema.Array(Measure)),
  breakdowns: Schema.optional(Schema.Array(Breakdown)),
  plotType: Schema.optional(Schema.String),
  dimensions: Schema.optional(Schema.Array(Dimension)),
}).annotate({ identifier: "DataSet" });

export interface ChartOptions {
  /** The chart mode. */
  mode?: "MODE_UNSPECIFIED" | "COLOR" | "X_RAY" | "STATS" | (string & {});
  /** Preview: Configures whether the charted values are shown on the horizontal or vertical axis. By default, values are represented the vertical axis. This is a preview feature and may be subject to change before final release. */
  displayHorizontal?: boolean;
}

export const ChartOptions = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  mode: Schema.optional(Schema.String),
  displayHorizontal: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "ChartOptions" });

export interface XyChart {
  /** The properties applied to the y2-axis. */
  y2Axis?: Axis;
  /** Threshold lines drawn horizontally across the chart. */
  thresholds?: ReadonlyArray<Threshold>;
  /** Required. The data displayed in this chart. */
  dataSets?: ReadonlyArray<DataSet>;
  /** The properties applied to the x-axis. */
  xAxis?: Axis;
  /** The properties applied to the y-axis. */
  yAxis?: Axis;
  /** The duration used to display a comparison chart. A comparison chart simultaneously shows values from two similar-length time periods (e.g., week-over-week metrics). The duration must be positive, and it can only be applied to charts with data sets of LINE plot type. */
  timeshiftDuration?: string;
  /** Display options for the chart. */
  chartOptions?: ChartOptions;
}

export const XyChart = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  y2Axis: Schema.optional(Axis),
  thresholds: Schema.optional(Schema.Array(Threshold)),
  dataSets: Schema.optional(Schema.Array(DataSet)),
  xAxis: Schema.optional(Axis),
  yAxis: Schema.optional(Axis),
  timeshiftDuration: Schema.optional(Schema.String),
  chartOptions: Schema.optional(ChartOptions),
}).annotate({ identifier: "XyChart" });

export interface CollapsibleGroup {
  /** The collapsed state of the widget on first page load. */
  collapsed?: boolean;
}

export const CollapsibleGroup = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  collapsed: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "CollapsibleGroup" });

export interface ErrorReportingPanel {
  /** An identifier of the service, such as the name of the executable, job, or Google App Engine service name. This field is expected to have a low number of values that are relatively stable over time, as opposed to version, which can be changed whenever new code is deployed.Contains the service name for error reports extracted from Google App Engine logs or default if the App Engine default service is used. */
  services?: ReadonlyArray<string>;
  /** Represents the source code version that the developer provided, which could represent a version label or a Git SHA-1 hash, for example. For App Engine standard environment, the version is set to the version of the app. */
  versions?: ReadonlyArray<string>;
  /** The resource name of the Google Cloud Platform project. Written as projects/{projectID} or projects/{projectNumber}, where {projectID} and {projectNumber} can be found in the Google Cloud console (https://support.google.com/cloud/answer/6158840).Examples: projects/my-project-123, projects/5551234. */
  projectNames?: ReadonlyArray<string>;
}

export const ErrorReportingPanel = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  services: Schema.optional(Schema.Array(Schema.String)),
  versions: Schema.optional(Schema.Array(Schema.String)),
  projectNames: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "ErrorReportingPanel" });

export interface TableDisplayOptions {
  /** Optional. This field is unused and has been replaced by TimeSeriesTable.column_settings */
  shownColumns?: ReadonlyArray<string>;
}

export const TableDisplayOptions = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  shownColumns: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "TableDisplayOptions" });

export interface TableDataSet {
  /** Optional. A template string for naming TimeSeries in the resulting data set. This should be a string with interpolations of the form ${label_name}, which will resolve to the label's value i.e. "${resource.labels.project_id}." */
  tableTemplate?: string;
  /** Required. Fields for querying time series data from the Stackdriver metrics API. */
  timeSeriesQuery?: TimeSeriesQuery;
  /** Optional. Table display options for configuring how the table is rendered. */
  tableDisplayOptions?: TableDisplayOptions;
  /** Optional. The lower bound on data point frequency for this data set, implemented by specifying the minimum alignment period to use in a time series query For example, if the data is published once every 10 minutes, the min_alignment_period should be at least 10 minutes. It would not make sense to fetch and align data at one minute intervals. */
  minAlignmentPeriod?: string;
}

export const TableDataSet = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tableTemplate: Schema.optional(Schema.String),
  timeSeriesQuery: Schema.optional(TimeSeriesQuery),
  tableDisplayOptions: Schema.optional(TableDisplayOptions),
  minAlignmentPeriod: Schema.optional(Schema.String),
}).annotate({ identifier: "TableDataSet" });

export interface ColumnSettings {
  /** Optional. Whether the column should be left / middle / right aligned */
  alignment?:
    | "CELL_ALIGNMENT_UNSPECIFIED"
    | "LEFT"
    | "CENTER"
    | "RIGHT"
    | (string & {});
  /** Optional. The thresholds used to determine how the table cell should be rendered given the time series' current value. */
  thresholds?: ReadonlyArray<Threshold>;
  /** Required. The id of the column. */
  column?: string;
  /** Required. Whether the column should be visible on page load. */
  visible?: boolean;
  /** Optional. Display name of the column */
  displayName?: string;
}

export const ColumnSettings = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  alignment: Schema.optional(Schema.String),
  thresholds: Schema.optional(Schema.Array(Threshold)),
  column: Schema.optional(Schema.String),
  visible: Schema.optional(Schema.Boolean),
  displayName: Schema.optional(Schema.String),
}).annotate({ identifier: "ColumnSettings" });

export interface TimeSeriesTable {
  /** Required. The data displayed in this table. */
  dataSets?: ReadonlyArray<TableDataSet>;
  /** Optional. The list of the persistent column settings for the table. */
  columnSettings?: ReadonlyArray<ColumnSettings>;
  /** Optional. Store rendering strategy */
  metricVisualization?:
    | "METRIC_VISUALIZATION_UNSPECIFIED"
    | "NUMBER"
    | "BAR"
    | (string & {});
}

export const TimeSeriesTable = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dataSets: Schema.optional(Schema.Array(TableDataSet)),
  columnSettings: Schema.optional(Schema.Array(ColumnSettings)),
  metricVisualization: Schema.optional(Schema.String),
}).annotate({ identifier: "TimeSeriesTable" });

export interface LogsPanel {
  /** A filter that chooses which log entries to return. See Advanced Logs Queries (https://cloud.google.com/logging/docs/view/advanced-queries). Only log entries that match the filter are returned. An empty filter matches all log entries. */
  filter?: string;
  /** The names of logging resources to collect logs for. Currently projects and storage views are supported. If empty, the widget will default to the host project. */
  resourceNames?: ReadonlyArray<string>;
}

export const LogsPanel = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  filter: Schema.optional(Schema.String),
  resourceNames: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "LogsPanel" });

export interface MonitoredResource {
  /** Required. The monitored resource type. This field must match the type field of a MonitoredResourceDescriptor object. For example, the type of a Compute Engine VM instance is gce_instance. For a list of types, see Monitoring resource types (https://cloud.google.com/monitoring/api/resources) and Logging resource types (https://cloud.google.com/logging/docs/api/v2/resource-list). */
  type?: string;
  /** Required. Values for all of the labels listed in the associated monitored resource descriptor. For example, Compute Engine VM instances use the labels "project_id", "instance_id", and "zone". */
  labels?: Record<string, string>;
}

export const MonitoredResource = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).annotate({ identifier: "MonitoredResource" });

export interface IncidentList {
  /** Optional. A list of alert policy names to filter the incident list by. Don't include the project ID prefix in the policy name. For example, use alertPolicies/utilization. */
  policyNames?: ReadonlyArray<string>;
  /** Optional. The monitored resource for which incidents are listed. The resource doesn't need to be fully specified. That is, you can specify the resource type but not the values of the resource labels. The resource type and labels are used for filtering. */
  monitoredResources?: ReadonlyArray<MonitoredResource>;
}

export const IncidentList = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  policyNames: Schema.optional(Schema.Array(Schema.String)),
  monitoredResources: Schema.optional(Schema.Array(MonitoredResource)),
}).annotate({ identifier: "IncidentList" });

export interface GaugeView {
  /** The upper bound for this gauge chart. The value of the chart should always be less than or equal to this. */
  upperBound?: number;
  /** The lower bound for this gauge chart. The value of the chart should always be greater than or equal to this. */
  lowerBound?: number;
}

export const GaugeView = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  upperBound: Schema.optional(Schema.Number),
  lowerBound: Schema.optional(Schema.Number),
}).annotate({ identifier: "GaugeView" });

export interface SparkChartView {
  /** Required. The type of sparkchart to show in this chartView. */
  sparkChartType?:
    | "SPARK_CHART_TYPE_UNSPECIFIED"
    | "SPARK_LINE"
    | "SPARK_BAR"
    | (string & {});
  /** The lower bound on data point frequency in the chart implemented by specifying the minimum alignment period to use in a time series query. For example, if the data is published once every 10 minutes it would not make sense to fetch and align data at one minute intervals. This field is optional and exists only as a hint.For PromQL queries, this field is used to set the minimum interval for the query step, controlling data granularity. Larger values can improve performance on long time ranges. See Querying Basics and Range Queries for more details on the PromQL step. */
  minAlignmentPeriod?: string;
}

export const SparkChartView = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sparkChartType: Schema.optional(Schema.String),
  minAlignmentPeriod: Schema.optional(Schema.String),
}).annotate({ identifier: "SparkChartView" });

export interface Scorecard {
  /** Will cause the scorecard to show a gauge chart. */
  gaugeView?: GaugeView;
  /** Will cause the scorecard to show a spark chart. */
  sparkChartView?: SparkChartView;
  /** Optional. A dimension is a structured label, class, or category for a set of measurements in your data. */
  dimensions?: ReadonlyArray<Dimension>;
  /** Required. Fields for querying time series data from the Stackdriver metrics API. */
  timeSeriesQuery?: TimeSeriesQuery;
  /** Will cause the Scorecard to show only the value, with no indicator to its value relative to its thresholds. */
  blankView?: Empty;
  /** Optional. A measure is a measured value of a property in your data. For example, rainfall in inches, number of units sold, revenue gained, etc. */
  measures?: ReadonlyArray<Measure>;
  /** Optional. The collection of breakdowns to be applied to the dataset. A breakdown is a way to slice the data. For example, you can break down the data by region. */
  breakdowns?: ReadonlyArray<Breakdown>;
  /** The thresholds used to determine the state of the scorecard given the time series' current value. For an actual value x, the scorecard is in a danger state if x is less than or equal to a danger threshold that triggers below, or greater than or equal to a danger threshold that triggers above. Similarly, if x is above/below a warning threshold that triggers above/below, then the scorecard is in a warning state - unless x also puts it in a danger state. (Danger trumps warning.)As an example, consider a scorecard with the following four thresholds: { value: 90, category: 'DANGER', trigger: 'ABOVE', }, { value: 70, category: 'WARNING', trigger: 'ABOVE', }, { value: 10, category: 'DANGER', trigger: 'BELOW', }, { value: 20, category: 'WARNING', trigger: 'BELOW', } Then: values less than or equal to 10 would put the scorecard in a DANGER state, values greater than 10 but less than or equal to 20 a WARNING state, values strictly between 20 and 70 an OK state, values greater than or equal to 70 but less than 90 a WARNING state, and values greater than or equal to 90 a DANGER state. */
  thresholds?: ReadonlyArray<Threshold>;
}

export const Scorecard = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  gaugeView: Schema.optional(GaugeView),
  sparkChartView: Schema.optional(SparkChartView),
  dimensions: Schema.optional(Schema.Array(Dimension)),
  timeSeriesQuery: Schema.optional(TimeSeriesQuery),
  blankView: Schema.optional(Empty),
  measures: Schema.optional(Schema.Array(Measure)),
  breakdowns: Schema.optional(Schema.Array(Breakdown)),
  thresholds: Schema.optional(Schema.Array(Threshold)),
}).annotate({ identifier: "Scorecard" });

export interface Widget {
  /** A widget that displays timeseries data as a pie chart. */
  pieChart?: PieChart;
  /** Optional. If set, this widget is rendered only when the condition is evaluated to true. */
  visibilityCondition?: VisibilityCondition;
  /** A blank space. */
  blank?: Empty;
  /** Optional. The title of the widget. */
  title?: string;
  /** A raw string or markdown displaying textual content. */
  text?: Text;
  /** A chart of alert policy data. */
  alertChart?: AlertChart;
  /** A widget that defines a section header for easier navigation of the dashboard. */
  sectionHeader?: SectionHeader;
  /** A widget that groups the other widgets by using a dropdown menu. */
  singleViewGroup?: SingleViewGroup;
  /** A widget that displays an input field to change the value of a template variable. */
  filterControl?: FilterControl;
  /** A widget that displays data as a treemap. */
  treemap?: Treemap;
  /** A chart of time series data. */
  xyChart?: XyChart;
  /** A widget that groups the other widgets. All widgets that are within the area spanned by the grouping widget are considered member widgets. */
  collapsibleGroup?: CollapsibleGroup;
  /** A widget that displays a list of error groups. */
  errorReportingPanel?: ErrorReportingPanel;
  /** A widget that displays time series data in a tabular format. */
  timeSeriesTable?: TimeSeriesTable;
  /** A widget that shows a stream of logs. */
  logsPanel?: LogsPanel;
  /** A widget that shows list of incidents. */
  incidentList?: IncidentList;
  /** Optional. The widget id. Ids may be made up of alphanumerics, dashes and underscores. Widget ids are optional. */
  id?: string;
  /** A scorecard summarizing time series data. */
  scorecard?: Scorecard;
}

export const Widget = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pieChart: Schema.optional(PieChart),
  visibilityCondition: Schema.optional(VisibilityCondition),
  blank: Schema.optional(Empty),
  title: Schema.optional(Schema.String),
  text: Schema.optional(Text),
  alertChart: Schema.optional(AlertChart),
  sectionHeader: Schema.optional(SectionHeader),
  singleViewGroup: Schema.optional(SingleViewGroup),
  filterControl: Schema.optional(FilterControl),
  treemap: Schema.optional(Treemap),
  xyChart: Schema.optional(XyChart),
  collapsibleGroup: Schema.optional(CollapsibleGroup),
  errorReportingPanel: Schema.optional(ErrorReportingPanel),
  timeSeriesTable: Schema.optional(TimeSeriesTable),
  logsPanel: Schema.optional(LogsPanel),
  incidentList: Schema.optional(IncidentList),
  id: Schema.optional(Schema.String),
  scorecard: Schema.optional(Scorecard),
}).annotate({ identifier: "Widget" });

export interface EventAnnotation {
  /** string filtering the events - event dependant. Example values: "resource.labels.pod_name = 'pod-1'" "protoPayload.authenticationInfo.principalEmail='user@example.com'" */
  filter?: string;
  /** Per annotation level override for the names of logging resources to search for events. Currently only projects are supported. If both this field and the per annotation field is empty, it will default to the host project. Limit: 50 projects. For example: “projects/another-project-id” */
  resourceNames?: ReadonlyArray<string>;
  /** Whether or not to show the events on the dashboard by default */
  enabled?: boolean;
  /** The type of event to display. */
  eventType?:
    | "EVENT_TYPE_UNSPECIFIED"
    | "GKE_WORKLOAD_DEPLOYMENT"
    | "GKE_POD_CRASH"
    | "GKE_POD_UNSCHEDULABLE"
    | "GKE_CONTAINER_CREATION_FAILED"
    | "GKE_CLUSTER_CREATE_DELETE"
    | "GKE_CLUSTER_UPDATE"
    | "GKE_NODE_POOL_UPDATE"
    | "GKE_CLUSTER_AUTOSCALER"
    | "GKE_POD_AUTOSCALER"
    | "VM_TERMINATION"
    | "VM_GUEST_OS_ERROR"
    | "VM_START_FAILED"
    | "MIG_UPDATE"
    | "MIG_AUTOSCALER"
    | "CLOUD_RUN_DEPLOYMENT"
    | "CLOUD_SQL_FAILOVER"
    | "CLOUD_SQL_START_STOP"
    | "CLOUD_SQL_STORAGE"
    | "UPTIME_CHECK_FAILURE"
    | "CLOUD_ALERTING_ALERT"
    | "SERVICE_HEALTH_INCIDENT"
    | "SAP_BACKINT"
    | "SAP_AVAILABILITY"
    | "SAP_OPERATIONS"
    | (string & {});
  /** Solely for UI display. Should not be used programmatically. */
  displayName?: string;
}

export const EventAnnotation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  filter: Schema.optional(Schema.String),
  resourceNames: Schema.optional(Schema.Array(Schema.String)),
  enabled: Schema.optional(Schema.Boolean),
  eventType: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
}).annotate({ identifier: "EventAnnotation" });

export interface DashboardAnnotations {
  /** Dashboard level defaults for names of logging resources to search for events. Currently only projects are supported. Each individual EventAnnotation may have its own overrides. If both this field and the per annotation field is empty, then the scoping project is used. Limit: 50 projects. For example: “projects/some-project-id” */
  defaultResourceNames?: ReadonlyArray<string>;
  /** List of annotation configurations for this dashboard. Each entry specifies one event type. */
  eventAnnotations?: ReadonlyArray<EventAnnotation>;
}

export const DashboardAnnotations = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  defaultResourceNames: Schema.optional(Schema.Array(Schema.String)),
  eventAnnotations: Schema.optional(Schema.Array(EventAnnotation)),
}).annotate({ identifier: "DashboardAnnotations" });

export interface QueryExemplarsRequest {
  /** The start time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp. */
  start?: string;
  /** A PromQL query string. Query language documentation: https://prometheus.io/docs/prometheus/latest/querying/basics/. */
  query?: string;
  /** The end time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp. */
  end?: string;
}

export const QueryExemplarsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  start: Schema.optional(Schema.String),
  query: Schema.optional(Schema.String),
  end: Schema.optional(Schema.String),
}).annotate({ identifier: "QueryExemplarsRequest" });

export interface Status {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const Status = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  code: Schema.optional(Schema.Number),
  message: Schema.optional(Schema.String),
  details: Schema.optional(
    Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
  ),
}).annotate({ identifier: "Status" });

export interface Operation {
  /** If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available. */
  done?: boolean;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse. */
  response?: Record<string, unknown>;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique_id}. */
  name?: string;
}

export const Operation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  done: Schema.optional(Schema.Boolean),
  response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  error: Schema.optional(Status),
  name: Schema.optional(Schema.String),
}).annotate({ identifier: "Operation" });

export interface Tile {
  /** The height of the tile, measured in grid blocks. Tiles must have a minimum height of 1. */
  height?: number;
  /** The informational widget contained in the tile. For example an XyChart. */
  widget?: Widget;
  /** The width of the tile, measured in grid blocks. Tiles must have a minimum width of 1. */
  width?: number;
  /** The zero-indexed position of the tile in grid blocks relative to the top edge of the grid. y_pos cannot be negative. */
  yPos?: number;
  /** The zero-indexed position of the tile in grid blocks relative to the left edge of the grid. Tiles must be contained within the specified number of columns. x_pos cannot be negative. */
  xPos?: number;
}

export const Tile = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  height: Schema.optional(Schema.Number),
  widget: Schema.optional(Widget),
  width: Schema.optional(Schema.Number),
  yPos: Schema.optional(Schema.Number),
  xPos: Schema.optional(Schema.Number),
}).annotate({ identifier: "Tile" });

export interface SourceContext {
  /** The path-qualified name of the .proto file that contained the associated protobuf element. For example: "google/protobuf/source_context.proto". */
  fileName?: string;
}

export const SourceContext = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fileName: Schema.optional(Schema.String),
}).annotate({ identifier: "SourceContext" });

export interface Column {
  /** The relative weight of this column. The column weight is used to adjust the width of columns on the screen (relative to peers). Greater the weight, greater the width of the column on the screen. If omitted, a value of 1 is used while rendering. */
  weight?: string;
  /** The display widgets arranged vertically in this column. */
  widgets?: ReadonlyArray<Widget>;
}

export const Column = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  weight: Schema.optional(Schema.String),
  widgets: Schema.optional(Schema.Array(Widget)),
}).annotate({ identifier: "Column" });

export interface Row {
  /** The relative weight of this row. The row weight is used to adjust the height of rows on the screen (relative to peers). Greater the weight, greater the height of the row on the screen. If omitted, a value of 1 is used while rendering. */
  weight?: string;
  /** The display widgets arranged horizontally in this row. */
  widgets?: ReadonlyArray<Widget>;
}

export const Row = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  weight: Schema.optional(Schema.String),
  widgets: Schema.optional(Schema.Array(Widget)),
}).annotate({ identifier: "Row" });

export interface QueryRangeRequest {
  /** An upper bound timeout for the query. Either a Prometheus duration string (https://prometheus.io/docs/prometheus/latest/querying/basics/#time-durations) or floating point seconds. This non-standard encoding must be used for compatibility with the open source API. Clients may still implement timeouts at the connection level while ignoring this field. */
  timeout?: string;
  /** The start time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp. */
  start?: string;
  /** The resolution of query result. Either a Prometheus duration string (https://prometheus.io/docs/prometheus/latest/querying/basics/#time-durations) or floating point seconds. This non-standard encoding must be used for compatibility with the open source API. Clients may still implement timeouts at the connection level while ignoring this field. */
  step?: string;
  /** The end time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp. */
  end?: string;
  /** A PromQL query string. Query language documentation: https://prometheus.io/docs/prometheus/latest/querying/basics/. */
  query?: string;
}

export const QueryRangeRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  timeout: Schema.optional(Schema.String),
  start: Schema.optional(Schema.String),
  step: Schema.optional(Schema.String),
  end: Schema.optional(Schema.String),
  query: Schema.optional(Schema.String),
}).annotate({ identifier: "QueryRangeRequest" });

export interface StringArray {
  /** The values of the array */
  values?: ReadonlyArray<string>;
}

export const StringArray = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  values: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "StringArray" });

export interface DashboardFilter {
  /** A variable-length string value. If this field is set, value_type must be set to STRING or VALUE_TYPE_UNSPECIFIED */
  stringValue?: string;
  /** An array of variable-length string values. If this field is set, value_type must be set to STRING_ARRAY or VALUE_TYPE_UNSPECIFIED */
  stringArrayValue?: StringArray;
  /** A query to run to fetch possible values for the filter. Only OpsAnalyticsQueries are supported */
  timeSeriesQuery?: TimeSeriesQuery;
  /** The specified filter type */
  filterType?:
    | "FILTER_TYPE_UNSPECIFIED"
    | "RESOURCE_LABEL"
    | "METRIC_LABEL"
    | "USER_METADATA_LABEL"
    | "SYSTEM_METADATA_LABEL"
    | "GROUP"
    | "VALUE_ONLY"
    | (string & {});
  /** Optional. The key for the label. This must be omitted if the filter_type is VALUE_ONLY but is required otherwise. */
  labelKey?: string;
  /** The placeholder text that can be referenced in a filter string or MQL query. If omitted, the dashboard filter will be applied to all relevant widgets in the dashboard. */
  templateVariable?: string;
  /** A list of possible string values for the filter */
  stringArray?: StringArray;
  /** The type of the filter value. If value_type is not provided, it will be inferred from the default_value. If neither value_type nor default_value is provided, value_type will be set to STRING by default. */
  valueType?:
    | "VALUE_TYPE_UNSPECIFIED"
    | "STRING"
    | "STRING_ARRAY"
    | (string & {});
}

export const DashboardFilter = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  stringValue: Schema.optional(Schema.String),
  stringArrayValue: Schema.optional(StringArray),
  timeSeriesQuery: Schema.optional(TimeSeriesQuery),
  filterType: Schema.optional(Schema.String),
  labelKey: Schema.optional(Schema.String),
  templateVariable: Schema.optional(Schema.String),
  stringArray: Schema.optional(StringArray),
  valueType: Schema.optional(Schema.String),
}).annotate({ identifier: "DashboardFilter" });

export interface GridLayout {
  /** The number of columns into which the view's width is divided. If omitted or set to zero, a system default will be used while rendering. */
  columns?: string;
  /** The informational elements that are arranged into the columns row-first. */
  widgets?: ReadonlyArray<Widget>;
}

export const GridLayout = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  columns: Schema.optional(Schema.String),
  widgets: Schema.optional(Schema.Array(Widget)),
}).annotate({ identifier: "GridLayout" });

export interface RowLayout {
  /** The rows of content to display. */
  rows?: ReadonlyArray<Row>;
}

export const RowLayout = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  rows: Schema.optional(Schema.Array(Row)),
}).annotate({ identifier: "RowLayout" });

export interface ColumnLayout {
  /** The columns of content to display. */
  columns?: ReadonlyArray<Column>;
}

export const ColumnLayout = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  columns: Schema.optional(Schema.Array(Column)),
}).annotate({ identifier: "ColumnLayout" });

export interface MosaicLayout {
  /** The number of columns in the mosaic grid. The number of columns must be between 1 and 48, inclusive. */
  columns?: number;
  /** The tiles to display. */
  tiles?: ReadonlyArray<Tile>;
}

export const MosaicLayout = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  columns: Schema.optional(Schema.Number),
  tiles: Schema.optional(Schema.Array(Tile)),
}).annotate({ identifier: "MosaicLayout" });

export interface Dashboard {
  /** etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. An etag is returned in the response to GetDashboard, and users are expected to put that etag in the request to UpdateDashboard to ensure that their change will be applied to the same version of the Dashboard configuration. The field should not be passed during dashboard creation. */
  etag?: string;
  /** Required. The mutable, human-readable name. */
  displayName?: string;
  /** Filters to reduce the amount of data charted based on the filter criteria. */
  dashboardFilters?: ReadonlyArray<DashboardFilter>;
  /** Content is arranged with a basic layout that re-flows a simple list of informational elements like widgets or tiles. */
  gridLayout?: GridLayout;
  /** Labels applied to the dashboard */
  labels?: Record<string, string>;
  /** The content is divided into equally spaced rows and the widgets are arranged horizontally. */
  rowLayout?: RowLayout;
  /** Identifier. The resource name of the dashboard. */
  name?: string;
  /** The content is divided into equally spaced columns and the widgets are arranged vertically. */
  columnLayout?: ColumnLayout;
  /** The content is arranged as a grid of tiles, with each content widget occupying one or more grid blocks. */
  mosaicLayout?: MosaicLayout;
  /** Configuration for event annotations to display on this dashboard. */
  annotations?: DashboardAnnotations;
}

export const Dashboard = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  etag: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  dashboardFilters: Schema.optional(Schema.Array(DashboardFilter)),
  gridLayout: Schema.optional(GridLayout),
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  rowLayout: Schema.optional(RowLayout),
  name: Schema.optional(Schema.String),
  columnLayout: Schema.optional(ColumnLayout),
  mosaicLayout: Schema.optional(MosaicLayout),
  annotations: Schema.optional(DashboardAnnotations),
}).annotate({ identifier: "Dashboard" });

export interface Option {
  /** The option's name. For protobuf built-in options (options defined in descriptor.proto), this is the short name. For example, "map_entry". For custom options, it should be the fully-qualified name. For example, "google.api.http". */
  name?: string;
  /** The option's value packed in an Any message. If the value is a primitive, the corresponding wrapper type defined in google/protobuf/wrappers.proto should be used. If the value is an enum, it should be stored as an int32 value using the google.protobuf.Int32Value type. */
  value?: Record<string, unknown>;
}

export const Option = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  value: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
}).annotate({ identifier: "Option" });

export interface SpanContext {
  /** The resource name of the span. The format is: projects/[PROJECT_ID_OR_NUMBER]/traces/[TRACE_ID]/spans/[SPAN_ID] [TRACE_ID] is a unique identifier for a trace within a project; it is a 32-character hexadecimal encoding of a 16-byte array.[SPAN_ID] is a unique identifier for a span within a trace; it is a 16-character hexadecimal encoding of an 8-byte array. */
  spanName?: string;
}

export const SpanContext = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  spanName: Schema.optional(Schema.String),
}).annotate({ identifier: "SpanContext" });

export interface Field {
  /** The field type URL, without the scheme, for message or enumeration types. Example: "type.googleapis.com/google.protobuf.Timestamp". */
  typeUrl?: string;
  /** The field JSON name. */
  jsonName?: string;
  /** The string value of the default value of this field. Proto2 syntax only. */
  defaultValue?: string;
  /** Whether to use alternative packed wire representation. */
  packed?: boolean;
  /** The protocol buffer options. */
  options?: ReadonlyArray<Option>;
  /** The field type. */
  kind?:
    | "TYPE_UNKNOWN"
    | "TYPE_DOUBLE"
    | "TYPE_FLOAT"
    | "TYPE_INT64"
    | "TYPE_UINT64"
    | "TYPE_INT32"
    | "TYPE_FIXED64"
    | "TYPE_FIXED32"
    | "TYPE_BOOL"
    | "TYPE_STRING"
    | "TYPE_GROUP"
    | "TYPE_MESSAGE"
    | "TYPE_BYTES"
    | "TYPE_UINT32"
    | "TYPE_ENUM"
    | "TYPE_SFIXED32"
    | "TYPE_SFIXED64"
    | "TYPE_SINT32"
    | "TYPE_SINT64"
    | (string & {});
  /** The index of the field type in Type.oneofs, for message or enumeration types. The first type has index 1; zero means the type is not in the list. */
  oneofIndex?: number;
  /** The field number. */
  number?: number;
  /** The field name. */
  name?: string;
  /** The field cardinality. */
  cardinality?:
    | "CARDINALITY_UNKNOWN"
    | "CARDINALITY_OPTIONAL"
    | "CARDINALITY_REQUIRED"
    | "CARDINALITY_REPEATED"
    | (string & {});
}

export const Field = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  typeUrl: Schema.optional(Schema.String),
  jsonName: Schema.optional(Schema.String),
  defaultValue: Schema.optional(Schema.String),
  packed: Schema.optional(Schema.Boolean),
  options: Schema.optional(Schema.Array(Option)),
  kind: Schema.optional(Schema.String),
  oneofIndex: Schema.optional(Schema.Number),
  number: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  cardinality: Schema.optional(Schema.String),
}).annotate({ identifier: "Field" });

export interface Type {
  /** The protocol buffer options. */
  options?: ReadonlyArray<Option>;
  /** The source context. */
  sourceContext?: SourceContext;
  /** The list of fields. */
  fields?: ReadonlyArray<Field>;
  /** The list of types appearing in oneof definitions in this type. */
  oneofs?: ReadonlyArray<string>;
  /** The source syntax. */
  syntax?:
    | "SYNTAX_PROTO2"
    | "SYNTAX_PROTO3"
    | "SYNTAX_EDITIONS"
    | (string & {});
  /** The fully qualified message name. */
  name?: string;
  /** The source edition string, only valid when syntax is SYNTAX_EDITIONS. */
  edition?: string;
}

export const Type = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  options: Schema.optional(Schema.Array(Option)),
  sourceContext: Schema.optional(SourceContext),
  fields: Schema.optional(Schema.Array(Field)),
  oneofs: Schema.optional(Schema.Array(Schema.String)),
  syntax: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  edition: Schema.optional(Schema.String),
}).annotate({ identifier: "Type" });

export interface QueryInstantRequest {
  /** The single point in time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp. */
  time?: string;
  /** A PromQL query string. Query language documentation: https://prometheus.io/docs/prometheus/latest/querying/basics/. */
  query?: string;
  /** An upper bound timeout for the query. Either a Prometheus duration string (https://prometheus.io/docs/prometheus/latest/querying/basics/#time-durations) or floating point seconds. This non-standard encoding must be used for compatibility with the open source API. Clients may still implement timeouts at the connection level while ignoring this field. */
  timeout?: string;
}

export const QueryInstantRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  time: Schema.optional(Schema.String),
  query: Schema.optional(Schema.String),
  timeout: Schema.optional(Schema.String),
}).annotate({ identifier: "QueryInstantRequest" });

export interface ListDashboardsResponse {
  /** The list of requested dashboards. */
  dashboards?: ReadonlyArray<Dashboard>;
  /** If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method. */
  nextPageToken?: string;
}

export const ListDashboardsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    dashboards: Schema.optional(Schema.Array(Dashboard)),
    nextPageToken: Schema.optional(Schema.String),
  },
).annotate({ identifier: "ListDashboardsResponse" });

export interface MonitoredProject {
  /** Output only. The time when this MonitoredProject was created. */
  createTime?: string;
  /** Output only. Set if the project has been tombstoned by the user. */
  isTombstoned?: boolean;
  /** Immutable. The resource name of the MonitoredProject. On input, the resource name includes the scoping project ID and monitored project ID. On output, it contains the equivalent project numbers. Example: locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER}/projects/{MONITORED_PROJECT_ID_OR_NUMBER} */
  name?: string;
}

export const MonitoredProject = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  createTime: Schema.optional(Schema.String),
  isTombstoned: Schema.optional(Schema.Boolean),
  name: Schema.optional(Schema.String),
}).annotate({ identifier: "MonitoredProject" });

export interface MetricsScope {
  /** Output only. The time when this Metrics Scope record was last updated. */
  updateTime?: string;
  /** Output only. The list of projects monitored by this Metrics Scope. */
  monitoredProjects?: ReadonlyArray<MonitoredProject>;
  /** Immutable. The resource name of the Monitoring Metrics Scope. On input, the resource name can be specified with the scoping project ID or number. On output, the resource name is specified with the scoping project number. Example: locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER} */
  name?: string;
  /** Output only. The time when this Metrics Scope was created. */
  createTime?: string;
}

export const MetricsScope = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  updateTime: Schema.optional(Schema.String),
  monitoredProjects: Schema.optional(Schema.Array(MonitoredProject)),
  name: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
}).annotate({ identifier: "MetricsScope" });

export interface QueryLabelsRequest {
  /** The start time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp. */
  start?: string;
  /** The end time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp. */
  end?: string;
  /** A list of matchers encoded in the Prometheus label matcher format to constrain the values to series that satisfy them. */
  match?: string;
}

export const QueryLabelsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  start: Schema.optional(Schema.String),
  end: Schema.optional(Schema.String),
  match: Schema.optional(Schema.String),
}).annotate({ identifier: "QueryLabelsRequest" });

export interface QuerySeriesRequest {
  /** The start time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp. */
  start?: string;
  /** The end time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp. */
  end?: string;
}

export const QuerySeriesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  start: Schema.optional(Schema.String),
  end: Schema.optional(Schema.String),
}).annotate({ identifier: "QuerySeriesRequest" });

export interface ListMetricsScopesByMonitoredProjectResponse {
  /** A set of all metrics scopes that the specified monitored project has been added to. */
  metricsScopes?: ReadonlyArray<MetricsScope>;
}

export const ListMetricsScopesByMonitoredProjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metricsScopes: Schema.optional(Schema.Array(MetricsScope)),
  }).annotate({ identifier: "ListMetricsScopesByMonitoredProjectResponse" });

export interface DroppedLabels {
  /** Map from label to its value, for all labels dropped in any aggregation. */
  label?: Record<string, string>;
}

export const DroppedLabels = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  label: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).annotate({ identifier: "DroppedLabels" });

export interface HttpBody {
  /** The HTTP Content-Type header value specifying the content type of the body. */
  contentType?: string;
  /** The HTTP request/response body as raw binary. */
  data?: string;
  /** Application specific response metadata. Must be set in the first response for streaming APIs. */
  extensions?: ReadonlyArray<Record<string, unknown>>;
}

export const HttpBody = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  contentType: Schema.optional(Schema.String),
  data: Schema.optional(Schema.String),
  extensions: Schema.optional(
    Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
  ),
}).annotate({ identifier: "HttpBody" });

// ==========================================================================
// Errors
// ==========================================================================

export class NotFound extends Schema.TaggedErrorClass<NotFound>()("NotFound", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
}) {}
T.applyErrorMatchers(NotFound, [{ httpStatus: 404 }]);

export class Forbidden extends Schema.TaggedErrorClass<Forbidden>()(
  "Forbidden",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
  },
) {}
T.applyErrorMatchers(Forbidden, [{ httpStatus: 403 }]);

export class BadRequest extends Schema.TaggedErrorClass<BadRequest>()(
  "BadRequest",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
  },
) {}
T.applyErrorMatchers(BadRequest, [{ httpStatus: 400 }]);

export class Conflict extends Schema.TaggedErrorClass<Conflict>()("Conflict", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
}) {}
T.applyErrorMatchers(Conflict, [{ httpStatus: 409 }]);

// ==========================================================================
// Operations
// ==========================================================================

export interface GetOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetOperationsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
}).pipe(
  T.Http({ method: "GET", path: "v1/{+name}" }),
  svc,
) as unknown as Schema.Schema<GetOperationsRequest>;

export type GetOperationsResponse = Operation;
export const GetOperationsResponse = /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GetOperationsError = DefaultErrors | NotFound | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getOperations: API.OperationMethod<
  GetOperationsRequest,
  GetOperationsResponse,
  GetOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOperationsRequest,
  output: GetOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetLocationsGlobalMetricsScopesRequest {
  /** Required. The resource name of the Metrics Scope. Example: locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER} */
  name: string;
}

export const GetLocationsGlobalMetricsScopesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetLocationsGlobalMetricsScopesRequest>;

export type GetLocationsGlobalMetricsScopesResponse = MetricsScope;
export const GetLocationsGlobalMetricsScopesResponse =
  /*@__PURE__*/ /*#__PURE__*/ MetricsScope;

export type GetLocationsGlobalMetricsScopesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns a specific Metrics Scope, including the list of projects monitored by the specified Metrics Scope. */
export const getLocationsGlobalMetricsScopes: API.OperationMethod<
  GetLocationsGlobalMetricsScopesRequest,
  GetLocationsGlobalMetricsScopesResponse,
  GetLocationsGlobalMetricsScopesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetLocationsGlobalMetricsScopesRequest,
  output: GetLocationsGlobalMetricsScopesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListMetricsScopesByMonitoredProjectLocationsGlobalMetricsScopesRequest {
  /** Required. The resource name of the Monitored Project being requested. Example: projects/{MONITORED_PROJECT_ID_OR_NUMBER} */
  monitoredResourceContainer?: string;
}

export const ListMetricsScopesByMonitoredProjectLocationsGlobalMetricsScopesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    monitoredResourceContainer: Schema.optional(Schema.String).pipe(
      T.HttpQuery("monitoredResourceContainer"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/locations/global/metricsScopes:listMetricsScopesByMonitoredProject",
    }),
    svc,
  ) as unknown as Schema.Schema<ListMetricsScopesByMonitoredProjectLocationsGlobalMetricsScopesRequest>;

export type ListMetricsScopesByMonitoredProjectLocationsGlobalMetricsScopesResponse =
  ListMetricsScopesByMonitoredProjectResponse;
export const ListMetricsScopesByMonitoredProjectLocationsGlobalMetricsScopesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListMetricsScopesByMonitoredProjectResponse;

export type ListMetricsScopesByMonitoredProjectLocationsGlobalMetricsScopesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns a list of every Metrics Scope that a specific MonitoredProject has been added to. The metrics scope representing the specified monitored project will always be the first entry in the response. */
export const listMetricsScopesByMonitoredProjectLocationsGlobalMetricsScopes: API.OperationMethod<
  ListMetricsScopesByMonitoredProjectLocationsGlobalMetricsScopesRequest,
  ListMetricsScopesByMonitoredProjectLocationsGlobalMetricsScopesResponse,
  ListMetricsScopesByMonitoredProjectLocationsGlobalMetricsScopesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListMetricsScopesByMonitoredProjectLocationsGlobalMetricsScopesRequest,
  output:
    ListMetricsScopesByMonitoredProjectLocationsGlobalMetricsScopesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateLocationsGlobalMetricsScopesProjectsRequest {
  /** Required. The resource name of the existing Metrics Scope that will monitor this project. Example: locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER} */
  parent: string;
  /** Request body */
  body?: MonitoredProject;
}

export const CreateLocationsGlobalMetricsScopesProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(MonitoredProject).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/projects", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateLocationsGlobalMetricsScopesProjectsRequest>;

export type CreateLocationsGlobalMetricsScopesProjectsResponse = Operation;
export const CreateLocationsGlobalMetricsScopesProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateLocationsGlobalMetricsScopesProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds a MonitoredProject with the given project ID to the specified Metrics Scope. */
export const createLocationsGlobalMetricsScopesProjects: API.OperationMethod<
  CreateLocationsGlobalMetricsScopesProjectsRequest,
  CreateLocationsGlobalMetricsScopesProjectsResponse,
  CreateLocationsGlobalMetricsScopesProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateLocationsGlobalMetricsScopesProjectsRequest,
  output: CreateLocationsGlobalMetricsScopesProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteLocationsGlobalMetricsScopesProjectsRequest {
  /** Required. The resource name of the MonitoredProject. Example: locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER}/projects/{MONITORED_PROJECT_ID_OR_NUMBER}Authorization requires the following Google IAM (https://cloud.google.com/iam) permissions on both the Metrics Scope and on the MonitoredProject: monitoring.metricsScopes.link */
  name: string;
}

export const DeleteLocationsGlobalMetricsScopesProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteLocationsGlobalMetricsScopesProjectsRequest>;

export type DeleteLocationsGlobalMetricsScopesProjectsResponse = Operation;
export const DeleteLocationsGlobalMetricsScopesProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteLocationsGlobalMetricsScopesProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a MonitoredProject from the specified Metrics Scope. */
export const deleteLocationsGlobalMetricsScopesProjects: API.OperationMethod<
  DeleteLocationsGlobalMetricsScopesProjectsRequest,
  DeleteLocationsGlobalMetricsScopesProjectsResponse,
  DeleteLocationsGlobalMetricsScopesProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteLocationsGlobalMetricsScopesProjectsRequest,
  output: DeleteLocationsGlobalMetricsScopesProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsDashboardsRequest {
  /** A positive number that is the maximum number of results to return. If unspecified, a default of 1000 is used. */
  pageSize?: number;
  /** Required. The scope of the dashboards to list. The format is: projects/[PROJECT_ID_OR_NUMBER] */
  parent: string;
  /** Optional. If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call. */
  pageToken?: string;
}

export const ListProjectsDashboardsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/dashboards" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsDashboardsRequest>;

export type ListProjectsDashboardsResponse = ListDashboardsResponse;
export const ListProjectsDashboardsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDashboardsResponse;

export type ListProjectsDashboardsError = DefaultErrors | NotFound | Forbidden;

/** Lists the existing dashboards.This method requires the monitoring.dashboards.list permission on the specified project. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam). */
export const listProjectsDashboards: API.PaginatedOperationMethod<
  ListProjectsDashboardsRequest,
  ListProjectsDashboardsResponse,
  ListProjectsDashboardsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsDashboardsRequest,
  output: ListProjectsDashboardsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsDashboardsRequest {
  /** Required. The resource name of the Dashboard. The format is one of: dashboards/[DASHBOARD_ID] (for system dashboards) projects/[PROJECT_ID_OR_NUMBER]/dashboards/[DASHBOARD_ID] (for custom dashboards). */
  name: string;
}

export const GetProjectsDashboardsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsDashboardsRequest>;

export type GetProjectsDashboardsResponse = Dashboard;
export const GetProjectsDashboardsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Dashboard;

export type GetProjectsDashboardsError = DefaultErrors | NotFound | Forbidden;

/** Fetches a specific dashboard.This method requires the monitoring.dashboards.get permission on the specified dashboard. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam). */
export const getProjectsDashboards: API.OperationMethod<
  GetProjectsDashboardsRequest,
  GetProjectsDashboardsResponse,
  GetProjectsDashboardsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsDashboardsRequest,
  output: GetProjectsDashboardsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsDashboardsRequest {
  /** Identifier. The resource name of the dashboard. */
  name: string;
  /** If set, validate the request and preview the review, but do not actually save it. */
  validateOnly?: boolean;
  /** Request body */
  body?: Dashboard;
}

export const PatchProjectsDashboardsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(Dashboard).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsDashboardsRequest>;

export type PatchProjectsDashboardsResponse = Dashboard;
export const PatchProjectsDashboardsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Dashboard;

export type PatchProjectsDashboardsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Replaces an existing custom dashboard with a new definition.This method requires the monitoring.dashboards.update permission on the specified dashboard. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam). */
export const patchProjectsDashboards: API.OperationMethod<
  PatchProjectsDashboardsRequest,
  PatchProjectsDashboardsResponse,
  PatchProjectsDashboardsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsDashboardsRequest,
  output: PatchProjectsDashboardsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsDashboardsRequest {
  /** Required. The project on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER] The [PROJECT_ID_OR_NUMBER] must match the dashboard resource name. */
  parent: string;
  /** If set, validate the request and preview the review, but do not actually save it. */
  validateOnly?: boolean;
  /** Request body */
  body?: Dashboard;
}

export const CreateProjectsDashboardsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(Dashboard).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/dashboards", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsDashboardsRequest>;

export type CreateProjectsDashboardsResponse = Dashboard;
export const CreateProjectsDashboardsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Dashboard;

export type CreateProjectsDashboardsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new custom dashboard. For examples on how you can use this API to create dashboards, see Managing dashboards by API (https://cloud.google.com/monitoring/dashboards/api-dashboard). This method requires the monitoring.dashboards.create permission on the specified project. For more information about permissions, see Cloud Identity and Access Management (https://cloud.google.com/iam). */
export const createProjectsDashboards: API.OperationMethod<
  CreateProjectsDashboardsRequest,
  CreateProjectsDashboardsResponse,
  CreateProjectsDashboardsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsDashboardsRequest,
  output: CreateProjectsDashboardsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsDashboardsRequest {
  /** Required. The resource name of the Dashboard. The format is: projects/[PROJECT_ID_OR_NUMBER]/dashboards/[DASHBOARD_ID] */
  name: string;
}

export const DeleteProjectsDashboardsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsDashboardsRequest>;

export type DeleteProjectsDashboardsResponse = Empty;
export const DeleteProjectsDashboardsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsDashboardsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an existing custom dashboard.This method requires the monitoring.dashboards.delete permission on the specified dashboard. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam). */
export const deleteProjectsDashboards: API.OperationMethod<
  DeleteProjectsDashboardsRequest,
  DeleteProjectsDashboardsResponse,
  DeleteProjectsDashboardsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsDashboardsRequest,
  output: DeleteProjectsDashboardsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface LabelsProjectsLocationPrometheusApiV1Request {
  /** Required. The workspace on which to execute the request. It is not part of the open source API but used as a request path prefix to distinguish different virtual Prometheus instances of Google Prometheus Engine. The format is: projects/PROJECT_ID_OR_NUMBER. */
  name: string;
  /** Location of the resource information. Has to be "global" now. */
  location: string;
  /** Request body */
  body?: QueryLabelsRequest;
}

export const LabelsProjectsLocationPrometheusApiV1Request =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    location: Schema.String.pipe(T.HttpPath("location")),
    body: Schema.optional(QueryLabelsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}/location/{location}/prometheus/api/v1/labels",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<LabelsProjectsLocationPrometheusApiV1Request>;

export type LabelsProjectsLocationPrometheusApiV1Response = HttpBody;
export const LabelsProjectsLocationPrometheusApiV1Response =
  /*@__PURE__*/ /*#__PURE__*/ HttpBody;

export type LabelsProjectsLocationPrometheusApiV1Error =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Lists labels for metrics. */
export const labelsProjectsLocationPrometheusApiV1: API.OperationMethod<
  LabelsProjectsLocationPrometheusApiV1Request,
  LabelsProjectsLocationPrometheusApiV1Response,
  LabelsProjectsLocationPrometheusApiV1Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: LabelsProjectsLocationPrometheusApiV1Request,
  output: LabelsProjectsLocationPrometheusApiV1Response,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface Query_rangeProjectsLocationPrometheusApiV1Request {
  /** Required. The project on which to execute the request. Data associcated with the project's workspace stored under the The format is: projects/PROJECT_ID_OR_NUMBER. Open source API but used as a request path prefix to distinguish different virtual Prometheus instances of Google Prometheus Engine. */
  name: string;
  /** Location of the resource information. Has to be "global" now. */
  location: string;
  /** Request body */
  body?: QueryRangeRequest;
}

export const Query_rangeProjectsLocationPrometheusApiV1Request =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    location: Schema.String.pipe(T.HttpPath("location")),
    body: Schema.optional(QueryRangeRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}/location/{location}/prometheus/api/v1/query_range",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<Query_rangeProjectsLocationPrometheusApiV1Request>;

export type Query_rangeProjectsLocationPrometheusApiV1Response = HttpBody;
export const Query_rangeProjectsLocationPrometheusApiV1Response =
  /*@__PURE__*/ /*#__PURE__*/ HttpBody;

export type Query_rangeProjectsLocationPrometheusApiV1Error =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Evaluate a PromQL query with start, end time range. */
export const query_rangeProjectsLocationPrometheusApiV1: API.OperationMethod<
  Query_rangeProjectsLocationPrometheusApiV1Request,
  Query_rangeProjectsLocationPrometheusApiV1Response,
  Query_rangeProjectsLocationPrometheusApiV1Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: Query_rangeProjectsLocationPrometheusApiV1Request,
  output: Query_rangeProjectsLocationPrometheusApiV1Response,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface Query_exemplarsProjectsLocationPrometheusApiV1Request {
  /** Required. The project on which to execute the request. Data associcated with the project's workspace stored under the The format is: projects/PROJECT_ID_OR_NUMBER. Open source API but used as a request path prefix to distinguish different virtual Prometheus instances of Google Prometheus Engine. */
  name: string;
  /** Location of the resource information. Has to be "global" now. */
  location: string;
  /** Request body */
  body?: QueryExemplarsRequest;
}

export const Query_exemplarsProjectsLocationPrometheusApiV1Request =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    location: Schema.String.pipe(T.HttpPath("location")),
    body: Schema.optional(QueryExemplarsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}/location/{location}/prometheus/api/v1/query_exemplars",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<Query_exemplarsProjectsLocationPrometheusApiV1Request>;

export type Query_exemplarsProjectsLocationPrometheusApiV1Response = HttpBody;
export const Query_exemplarsProjectsLocationPrometheusApiV1Response =
  /*@__PURE__*/ /*#__PURE__*/ HttpBody;

export type Query_exemplarsProjectsLocationPrometheusApiV1Error =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Lists exemplars relevant to a given PromQL query, */
export const query_exemplarsProjectsLocationPrometheusApiV1: API.OperationMethod<
  Query_exemplarsProjectsLocationPrometheusApiV1Request,
  Query_exemplarsProjectsLocationPrometheusApiV1Response,
  Query_exemplarsProjectsLocationPrometheusApiV1Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: Query_exemplarsProjectsLocationPrometheusApiV1Request,
  output: Query_exemplarsProjectsLocationPrometheusApiV1Response,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface QueryProjectsLocationPrometheusApiV1Request {
  /** Required. The project on which to execute the request. Data associcated with the project's workspace stored under the The format is: projects/PROJECT_ID_OR_NUMBER. Open source API but used as a request path prefix to distinguish different virtual Prometheus instances of Google Prometheus Engine. */
  name: string;
  /** Location of the resource information. Has to be "global" now. */
  location: string;
  /** Request body */
  body?: QueryInstantRequest;
}

export const QueryProjectsLocationPrometheusApiV1Request =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    location: Schema.String.pipe(T.HttpPath("location")),
    body: Schema.optional(QueryInstantRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}/location/{location}/prometheus/api/v1/query",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<QueryProjectsLocationPrometheusApiV1Request>;

export type QueryProjectsLocationPrometheusApiV1Response = HttpBody;
export const QueryProjectsLocationPrometheusApiV1Response =
  /*@__PURE__*/ /*#__PURE__*/ HttpBody;

export type QueryProjectsLocationPrometheusApiV1Error =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Evaluate a PromQL query at a single point in time. */
export const queryProjectsLocationPrometheusApiV1: API.OperationMethod<
  QueryProjectsLocationPrometheusApiV1Request,
  QueryProjectsLocationPrometheusApiV1Response,
  QueryProjectsLocationPrometheusApiV1Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: QueryProjectsLocationPrometheusApiV1Request,
  output: QueryProjectsLocationPrometheusApiV1Response,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SeriesProjectsLocationPrometheusApiV1Request {
  /** Required. The workspace on which to execute the request. It is not part of the open source API but used as a request path prefix to distinguish different virtual Prometheus instances of Google Prometheus Engine. The format is: projects/PROJECT_ID_OR_NUMBER. */
  name: string;
  /** Location of the resource information. Has to be "global" for now. */
  location: string;
  /** Request body */
  body?: QuerySeriesRequest;
}

export const SeriesProjectsLocationPrometheusApiV1Request =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    location: Schema.String.pipe(T.HttpPath("location")),
    body: Schema.optional(QuerySeriesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}/location/{location}/prometheus/api/v1/series",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SeriesProjectsLocationPrometheusApiV1Request>;

export type SeriesProjectsLocationPrometheusApiV1Response = HttpBody;
export const SeriesProjectsLocationPrometheusApiV1Response =
  /*@__PURE__*/ /*#__PURE__*/ HttpBody;

export type SeriesProjectsLocationPrometheusApiV1Error =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Lists metadata for metrics. */
export const seriesProjectsLocationPrometheusApiV1: API.OperationMethod<
  SeriesProjectsLocationPrometheusApiV1Request,
  SeriesProjectsLocationPrometheusApiV1Response,
  SeriesProjectsLocationPrometheusApiV1Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SeriesProjectsLocationPrometheusApiV1Request,
  output: SeriesProjectsLocationPrometheusApiV1Response,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationPrometheusApiV1MetadataRequest {
  /** Maximum number of metrics to return. */
  limit?: string;
  /** The metric name for which to query metadata. If unset, all metric metadata is returned. */
  metric?: string;
  /** Required. The workspace on which to execute the request. It is not part of the open source API but used as a request path prefix to distinguish different virtual Prometheus instances of Google Prometheus Engine. The format is: projects/PROJECT_ID_OR_NUMBER. */
  name: string;
  /** Location of the resource information. Has to be "global" for now. */
  location: string;
}

export const ListProjectsLocationPrometheusApiV1MetadataRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    limit: Schema.optional(Schema.String).pipe(T.HttpQuery("limit")),
    metric: Schema.optional(Schema.String).pipe(T.HttpQuery("metric")),
    name: Schema.String.pipe(T.HttpPath("name")),
    location: Schema.String.pipe(T.HttpPath("location")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+name}/location/{location}/prometheus/api/v1/metadata",
    }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationPrometheusApiV1MetadataRequest>;

export type ListProjectsLocationPrometheusApiV1MetadataResponse = HttpBody;
export const ListProjectsLocationPrometheusApiV1MetadataResponse =
  /*@__PURE__*/ /*#__PURE__*/ HttpBody;

export type ListProjectsLocationPrometheusApiV1MetadataError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists metadata for metrics. */
export const listProjectsLocationPrometheusApiV1Metadata: API.OperationMethod<
  ListProjectsLocationPrometheusApiV1MetadataRequest,
  ListProjectsLocationPrometheusApiV1MetadataResponse,
  ListProjectsLocationPrometheusApiV1MetadataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListProjectsLocationPrometheusApiV1MetadataRequest,
  output: ListProjectsLocationPrometheusApiV1MetadataResponse,
  errors: [NotFound, Forbidden],
}));

export interface ValuesProjectsLocationPrometheusApiV1LabelRequest {
  /** The label name for which values are queried. */
  label: string;
  /** Required. The workspace on which to execute the request. It is not part of the open source API but used as a request path prefix to distinguish different virtual Prometheus instances of Google Prometheus Engine. The format is: projects/PROJECT_ID_OR_NUMBER. */
  name: string;
  /** The end time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp. */
  end?: string;
  /** The start time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp. */
  start?: string;
  /** Location of the resource information. Has to be "global" now. */
  location: string;
  /** A list of matchers encoded in the Prometheus label matcher format to constrain the values to series that satisfy them. */
  match?: string;
}

export const ValuesProjectsLocationPrometheusApiV1LabelRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    label: Schema.String.pipe(T.HttpPath("label")),
    name: Schema.String.pipe(T.HttpPath("name")),
    end: Schema.optional(Schema.String).pipe(T.HttpQuery("end")),
    start: Schema.optional(Schema.String).pipe(T.HttpQuery("start")),
    location: Schema.String.pipe(T.HttpPath("location")),
    match: Schema.optional(Schema.String).pipe(T.HttpQuery("match")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+name}/location/{location}/prometheus/api/v1/label/{label}/values",
    }),
    svc,
  ) as unknown as Schema.Schema<ValuesProjectsLocationPrometheusApiV1LabelRequest>;

export type ValuesProjectsLocationPrometheusApiV1LabelResponse = HttpBody;
export const ValuesProjectsLocationPrometheusApiV1LabelResponse =
  /*@__PURE__*/ /*#__PURE__*/ HttpBody;

export type ValuesProjectsLocationPrometheusApiV1LabelError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists possible values for a given label name. */
export const valuesProjectsLocationPrometheusApiV1Label: API.OperationMethod<
  ValuesProjectsLocationPrometheusApiV1LabelRequest,
  ValuesProjectsLocationPrometheusApiV1LabelResponse,
  ValuesProjectsLocationPrometheusApiV1LabelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ValuesProjectsLocationPrometheusApiV1LabelRequest,
  output: ValuesProjectsLocationPrometheusApiV1LabelResponse,
  errors: [NotFound, Forbidden],
}));
