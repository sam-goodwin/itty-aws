// ==========================================================================
// Cloud Monitoring API (monitoring v3)
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
  version: "v3",
  rootUrl: "https://monitoring.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface PingConfig {
  /** Number of ICMP pings. A maximum of 3 ICMP pings is currently supported. */
  pingsCount?: number;
}

export const PingConfig: Schema.Schema<PingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pingsCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "PingConfig" });

export interface TcpCheck {
  /** The TCP port on the server against which to run the check. Will be combined with host (specified within the monitored_resource) to construct the full URL. Required. */
  port?: number;
  /** Contains information needed to add pings to a TCP check. */
  pingConfig?: PingConfig;
}

export const TcpCheck: Schema.Schema<TcpCheck> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    port: Schema.optional(Schema.Number),
    pingConfig: Schema.optional(PingConfig),
  }).annotate({ identifier: "TcpCheck" });

export interface Hourly {
  /** Required. The number of hours between runs. Must be greater than or equal to 1 hour and less than or equal to 48 hours. */
  periodicity?: number;
  /** Optional. The number of minutes after the hour (in UTC) to run the query. Must be greater than or equal to 0 minutes and less than or equal to 59 minutes. If left unspecified, then an arbitrary offset is used. */
  minuteOffset?: number;
}

export const Hourly: Schema.Schema<Hourly> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    periodicity: Schema.optional(Schema.Number),
    minuteOffset: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Hourly" });

export interface GkeService {
  /** The location of the parent cluster. This may be a zone or region. */
  location?: string;
  /** Output only. The project this resource lives in. For legacy services migrated from the Custom type, this may be a distinct project from the one parenting the service itself. */
  projectId?: string;
  /** The name of the parent cluster. */
  clusterName?: string;
  /** The name of the parent namespace. */
  namespaceName?: string;
  /** The name of this service. */
  serviceName?: string;
}

export const GkeService: Schema.Schema<GkeService> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
    clusterName: Schema.optional(Schema.String),
    namespaceName: Schema.optional(Schema.String),
    serviceName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GkeService" });

export interface BooleanTest {
  /** Required. The name of the column containing the boolean value. If the value in a row is NULL, that row is ignored. */
  column?: string;
}

export const BooleanTest: Schema.Schema<BooleanTest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    column: Schema.optional(Schema.String),
  }).annotate({ identifier: "BooleanTest" });

export interface Minutes {
  /** Required. Number of minutes between runs. The interval must be greater than or equal to 5 minutes and less than or equal to 1440 minutes. */
  periodicity?: number;
}

export const Minutes: Schema.Schema<Minutes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    periodicity: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Minutes" });

export interface RowCountTest {
  /** Required. The comparison to apply between the number of rows returned by the query and the threshold. */
  comparison?:
    | "COMPARISON_UNSPECIFIED"
    | "COMPARISON_GT"
    | "COMPARISON_GE"
    | "COMPARISON_LT"
    | "COMPARISON_LE"
    | "COMPARISON_EQ"
    | "COMPARISON_NE"
    | (string & {});
  /** Required. The value against which to compare the row count. */
  threshold?: string;
}

export const RowCountTest: Schema.Schema<RowCountTest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    comparison: Schema.optional(Schema.String),
    threshold: Schema.optional(Schema.String),
  }).annotate({ identifier: "RowCountTest" });

export interface TimeOfDay {
  /** Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. */
  minutes?: number;
  /** Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999. */
  nanos?: number;
  /** Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
  hours?: number;
  /** Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds. */
  seconds?: number;
}

export const TimeOfDay: Schema.Schema<TimeOfDay> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minutes: Schema.optional(Schema.Number),
    nanos: Schema.optional(Schema.Number),
    hours: Schema.optional(Schema.Number),
    seconds: Schema.optional(Schema.Number),
  }).annotate({ identifier: "TimeOfDay" });

export interface Daily {
  /** Required. The number of days between runs. Must be greater than or equal to 1 day and less than or equal to 31 days. */
  periodicity?: number;
  /** Optional. The time of day (in UTC) at which the query should run. If left unspecified, the server picks an arbitrary time of day and runs the query at the same time each day. */
  executionTime?: TimeOfDay;
}

export const Daily: Schema.Schema<Daily> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    periodicity: Schema.optional(Schema.Number),
    executionTime: Schema.optional(TimeOfDay),
  }).annotate({ identifier: "Daily" });

export interface SqlCondition {
  /** Test the boolean value in the indicated column. */
  booleanTest?: BooleanTest;
  /** Required. The Log Analytics SQL query to run, as a string. The query must conform to the required shape. Specifically, the query must not try to filter the input by time. A filter will automatically be applied to filter the input so that the query receives all rows received since the last time the query was run.For example, the following query extracts all log entries containing an HTTP request: SELECT timestamp, log_name, severity, http_request, resource, labels FROM my-project.global._Default._AllLogs WHERE http_request IS NOT NULL */
  query?: string;
  /** Schedule the query to execute every so many minutes. */
  minutes?: Minutes;
  /** Schedule the query to execute every so many hours. */
  hourly?: Hourly;
  /** Test the row count against a threshold. */
  rowCountTest?: RowCountTest;
  /** Schedule the query to execute every so many days. */
  daily?: Daily;
}

export const SqlCondition: Schema.Schema<SqlCondition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    booleanTest: Schema.optional(BooleanTest),
    query: Schema.optional(Schema.String),
    minutes: Schema.optional(Minutes),
    hourly: Schema.optional(Hourly),
    rowCountTest: Schema.optional(RowCountTest),
    daily: Schema.optional(Daily),
  }).annotate({ identifier: "SqlCondition" });

export interface Aggregation {
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
  /** The alignment_period specifies a time interval, in seconds, that is used to divide the data in all the time series into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.The value must be at least 60 seconds. If a per-series aligner other than ALIGN_NONE is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner ALIGN_NONE is specified, then this field is ignored.The maximum value of the alignment_period is 104 weeks (2 years) for charts, and 90,000 seconds (25 hours) for alerting policies. */
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
}

export const Aggregation: Schema.Schema<Aggregation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    crossSeriesReducer: Schema.optional(Schema.String),
    groupByFields: Schema.optional(Schema.Array(Schema.String)),
    alignmentPeriod: Schema.optional(Schema.String),
    perSeriesAligner: Schema.optional(Schema.String),
  }).annotate({ identifier: "Aggregation" });

export interface ForecastOptions {
  /** Required. The length of time into the future to forecast whether a time series will violate the threshold. If the predicted value is found to violate the threshold, and the violation is observed in all forecasts made for the configured duration, then the time series is considered to be failing. The forecast horizon can range from 1 hour to 60 hours. */
  forecastHorizon?: string;
}

export const ForecastOptions: Schema.Schema<ForecastOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    forecastHorizon: Schema.optional(Schema.String),
  }).annotate({ identifier: "ForecastOptions" });

export interface Trigger {
  /** The absolute number of time series that must fail the predicate for the condition to be triggered. */
  count?: number;
  /** The percentage of time series that must fail the predicate for the condition to be triggered. */
  percent?: number;
}

export const Trigger: Schema.Schema<Trigger> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    percent: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Trigger" });

export interface MetricThreshold {
  /** Required. A filter (https://cloud.google.com/monitoring/api/v3/filters) that identifies which time series should be compared with the threshold.The filter is similar to the one that is specified in the ListTimeSeries request (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list) (that call is useful to verify the time series that will be retrieved / processed). The filter must specify the metric type and the resource type. Optionally, it can specify resource labels and metric labels. This field must not exceed 2048 Unicode characters in length. */
  filter?: string;
  /** A value against which to compare the time series. */
  thresholdValue?: number;
  /** Specifies the alignment of data points in individual time series as well as how to combine the retrieved time series together (such as when aggregating multiple streams on each resource to a single stream for each resource or when aggregating streams across all members of a group of resources). Multiple aggregations are applied in the order specified.This field is similar to the one in the ListTimeSeries request (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list). It is advisable to use the ListTimeSeries method when debugging this field. */
  aggregations?: ReadonlyArray<Aggregation>;
  /** A condition control that determines how metric-threshold conditions are evaluated when data stops arriving. To use this control, the value of the duration field must be greater than or equal to 60 seconds. */
  evaluationMissingData?:
    | "EVALUATION_MISSING_DATA_UNSPECIFIED"
    | "EVALUATION_MISSING_DATA_INACTIVE"
    | "EVALUATION_MISSING_DATA_ACTIVE"
    | "EVALUATION_MISSING_DATA_NO_OP"
    | (string & {});
  /** Specifies the alignment of data points in individual time series selected by denominatorFilter as well as how to combine the retrieved time series together (such as when aggregating multiple streams on each resource to a single stream for each resource or when aggregating streams across all members of a group of resources).When computing ratios, the aggregations and denominator_aggregations fields must use the same alignment period and produce time series that have the same periodicity and labels. */
  denominatorAggregations?: ReadonlyArray<Aggregation>;
  /** When this field is present, the MetricThreshold condition forecasts whether the time series is predicted to violate the threshold within the forecast_horizon. When this field is not set, the MetricThreshold tests the current value of the timeseries against the threshold. */
  forecastOptions?: ForecastOptions;
  /** The comparison to apply between the time series (indicated by filter and aggregation) and the threshold (indicated by threshold_value). The comparison is applied on each time series, with the time series on the left-hand side and the threshold on the right-hand side.Only COMPARISON_LT and COMPARISON_GT are supported currently. */
  comparison?:
    | "COMPARISON_UNSPECIFIED"
    | "COMPARISON_GT"
    | "COMPARISON_GE"
    | "COMPARISON_LT"
    | "COMPARISON_LE"
    | "COMPARISON_EQ"
    | "COMPARISON_NE"
    | (string & {});
  /** Required. The amount of time that a time series must violate the threshold to be considered failing. Currently, only values that are a multiple of a minute--e.g., 0, 60, 120, or 300 seconds--are supported. If an invalid value is given, an error will be returned. When choosing a duration, it is useful to keep in mind the frequency of the underlying time series data (which may also be affected by any alignments specified in the aggregations field); a good duration is long enough so that a single outlier does not generate spurious alerts, but short enough that unhealthy states are detected and alerted on quickly. */
  duration?: string;
  /** The number/percent of time series for which the comparison must hold in order for the condition to trigger. If unspecified, then the condition will trigger if the comparison is true for any of the time series that have been identified by filter and aggregations, or by the ratio, if denominator_filter and denominator_aggregations are specified. */
  trigger?: Trigger;
  /** A filter (https://cloud.google.com/monitoring/api/v3/filters) that identifies a time series that should be used as the denominator of a ratio that will be compared with the threshold. If a denominator_filter is specified, the time series specified by the filter field will be used as the numerator.The filter must specify the metric type and optionally may contain restrictions on resource type, resource labels, and metric labels. This field may not exceed 2048 Unicode characters in length. */
  denominatorFilter?: string;
}

export const MetricThreshold: Schema.Schema<MetricThreshold> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String),
    thresholdValue: Schema.optional(Schema.Number),
    aggregations: Schema.optional(Schema.Array(Aggregation)),
    evaluationMissingData: Schema.optional(Schema.String),
    denominatorAggregations: Schema.optional(Schema.Array(Aggregation)),
    forecastOptions: Schema.optional(ForecastOptions),
    comparison: Schema.optional(Schema.String),
    duration: Schema.optional(Schema.String),
    trigger: Schema.optional(Trigger),
    denominatorFilter: Schema.optional(Schema.String),
  }).annotate({ identifier: "MetricThreshold" });

export interface MetricAbsence {
  /** Specifies the alignment of data points in individual time series as well as how to combine the retrieved time series together (such as when aggregating multiple streams on each resource to a single stream for each resource or when aggregating streams across all members of a group of resources). Multiple aggregations are applied in the order specified.This field is similar to the one in the ListTimeSeries request (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list). It is advisable to use the ListTimeSeries method when debugging this field. */
  aggregations?: ReadonlyArray<Aggregation>;
  /** Required. A filter (https://cloud.google.com/monitoring/api/v3/filters) that identifies which time series should be compared with the threshold.The filter is similar to the one that is specified in the ListTimeSeries request (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list) (that call is useful to verify the time series that will be retrieved / processed). The filter must specify the metric type and the resource type. Optionally, it can specify resource labels and metric labels. This field must not exceed 2048 Unicode characters in length. */
  filter?: string;
  /** Required. The amount of time that a time series must fail to report new data to be considered failing. The minimum value of this field is 120 seconds. Larger values that are a multiple of a minute--for example, 240 or 300 seconds--are supported. If an invalid value is given, an error will be returned. */
  duration?: string;
  /** The number/percent of time series for which the comparison must hold in order for the condition to trigger. If unspecified, then the condition will trigger if the comparison is true for any of the time series that have been identified by filter and aggregations. */
  trigger?: Trigger;
}

export const MetricAbsence: Schema.Schema<MetricAbsence> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    aggregations: Schema.optional(Schema.Array(Aggregation)),
    filter: Schema.optional(Schema.String),
    duration: Schema.optional(Schema.String),
    trigger: Schema.optional(Trigger),
  }).annotate({ identifier: "MetricAbsence" });

export interface MonitoringQueryLanguageCondition {
  /** A condition control that determines how metric-threshold conditions are evaluated when data stops arriving. */
  evaluationMissingData?:
    | "EVALUATION_MISSING_DATA_UNSPECIFIED"
    | "EVALUATION_MISSING_DATA_INACTIVE"
    | "EVALUATION_MISSING_DATA_ACTIVE"
    | "EVALUATION_MISSING_DATA_NO_OP"
    | (string & {});
  /** Monitoring Query Language (https://cloud.google.com/monitoring/mql) query that outputs a boolean stream. */
  query?: string;
  /** Optional. The amount of time that a time series must violate the threshold to be considered failing. Currently, only values that are a multiple of a minute--e.g., 0, 60, 120, or 300 seconds--are supported. If an invalid value is given, an error will be returned. When choosing a duration, it is useful to keep in mind the frequency of the underlying time series data (which may also be affected by any alignments specified in the aggregations field); a good duration is long enough so that a single outlier does not generate spurious alerts, but short enough that unhealthy states are detected and alerted on quickly. The default value is zero. */
  duration?: string;
  /** The number/percent of time series for which the comparison must hold in order for the condition to trigger. If unspecified, then the condition will trigger if the comparison is true for any of the time series that have been identified by filter and aggregations, or by the ratio, if denominator_filter and denominator_aggregations are specified. */
  trigger?: Trigger;
}

export const MonitoringQueryLanguageCondition: Schema.Schema<MonitoringQueryLanguageCondition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    evaluationMissingData: Schema.optional(Schema.String),
    query: Schema.optional(Schema.String),
    duration: Schema.optional(Schema.String),
    trigger: Schema.optional(Trigger),
  }).annotate({ identifier: "MonitoringQueryLanguageCondition" });

export interface LogMatch {
  /** Required. A logs-based filter. See Advanced Logs Queries (https://cloud.google.com/logging/docs/view/advanced-queries) for how this filter should be constructed. */
  filter?: string;
  /** Optional. A map from a label key to an extractor expression, which is used to extract the value for this label key. Each entry in this map is a specification for how data should be extracted from log entries that match filter. Each combination of extracted values is treated as a separate rule for the purposes of triggering notifications. Label keys and corresponding values can be used in notifications generated by this condition.Please see the documentation on logs-based metric valueExtractors (https://cloud.google.com/logging/docs/reference/v2/rest/v2/projects.metrics#LogMetric.FIELDS.value_extractor) for syntax and examples. */
  labelExtractors?: Record<string, string>;
}

export const LogMatch: Schema.Schema<LogMatch> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String),
    labelExtractors: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  }).annotate({ identifier: "LogMatch" });

export interface PrometheusQueryLanguageCondition {
  /** Optional. Labels to add to or overwrite in the PromQL query result. Label names must be valid (https://prometheus.io/docs/concepts/data_model/#metric-names-and-labels). Label values can be templatized by using variables (https://cloud.google.com/monitoring/alerts/doc-variables#doc-vars). The only available variable names are the names of the labels in the PromQL result, including "__name__" and "value". "labels" may be empty. */
  labels?: Record<string, string>;
  /** Optional. Whether to disable metric existence validation for this condition.This allows alerting policies to be defined on metrics that do not yet exist, improving advanced customer workflows such as configuring alerting policies using Terraform.Users with the monitoring.alertPolicyViewer role are able to see the name of the non-existent metric in the alerting policy condition. */
  disableMetricValidation?: boolean;
  /** Optional. The alerting rule name of this alert in the corresponding Prometheus configuration file.Some external tools may require this field to be populated correctly in order to refer to the original Prometheus configuration file. The rule group name and the alert name are necessary to update the relevant AlertPolicies in case the definition of the rule group changes in the future.This field is optional. If this field is not empty, then it must be a valid Prometheus label name (https://prometheus.io/docs/concepts/data_model/#metric-names-and-labels). This field may not exceed 2048 Unicode characters in length. */
  alertRule?: string;
  /** Optional. How often this rule should be evaluated. Must be a positive multiple of 30 seconds or missing. This field is optional. Its default value is 30 seconds. If this PrometheusQueryLanguageCondition was generated from a Prometheus alerting rule, then this value should be taken from the enclosing rule group. */
  evaluationInterval?: string;
  /** Required. The PromQL expression to evaluate. Every evaluation cycle this expression is evaluated at the current time, and all resultant time series become pending/firing alerts. This field must not be empty. */
  query?: string;
  /** Optional. Alerts are considered firing once their PromQL expression was evaluated to be "true" for this long. Alerts whose PromQL expression was not evaluated to be "true" for long enough are considered pending. Must be a non-negative duration or missing. This field is optional. Its default value is zero. */
  duration?: string;
  /** Optional. The rule group name of this alert in the corresponding Prometheus configuration file.Some external tools may require this field to be populated correctly in order to refer to the original Prometheus configuration file. The rule group name and the alert name are necessary to update the relevant AlertPolicies in case the definition of the rule group changes in the future.This field is optional. If this field is not empty, then it must contain a valid UTF-8 string. This field may not exceed 2048 Unicode characters in length. */
  ruleGroup?: string;
}

export const PrometheusQueryLanguageCondition: Schema.Schema<PrometheusQueryLanguageCondition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    disableMetricValidation: Schema.optional(Schema.Boolean),
    alertRule: Schema.optional(Schema.String),
    evaluationInterval: Schema.optional(Schema.String),
    query: Schema.optional(Schema.String),
    duration: Schema.optional(Schema.String),
    ruleGroup: Schema.optional(Schema.String),
  }).annotate({ identifier: "PrometheusQueryLanguageCondition" });

export interface Condition {
  /** A condition that periodically evaluates a SQL query result. */
  conditionSql?: SqlCondition;
  /** A short name or phrase used to identify the condition in dashboards, notifications, and incidents. To avoid confusion, don't use the same display name for multiple conditions in the same policy. */
  displayName?: string;
  /** A condition that compares a time series against a threshold. */
  conditionThreshold?: MetricThreshold;
  /** A condition that checks that a time series continues to receive new data points. */
  conditionAbsent?: MetricAbsence;
  /** A condition that uses the Monitoring Query Language to define alerts. */
  conditionMonitoringQueryLanguage?: MonitoringQueryLanguageCondition;
  /** Required if the condition exists. The unique resource name for this condition. Its format is: projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[POLICY_ID]/conditions/[CONDITION_ID] [CONDITION_ID] is assigned by Cloud Monitoring when the condition is created as part of a new or updated alerting policy.When calling the alertPolicies.create method, do not include the name field in the conditions of the requested alerting policy. Cloud Monitoring creates the condition identifiers and includes them in the new policy.When calling the alertPolicies.update method to update a policy, including a condition name causes the existing condition to be updated. Conditions without names are added to the updated policy. Existing conditions are deleted if they are not updated.Best practice is to preserve [CONDITION_ID] if you make only small changes, such as those to condition thresholds, durations, or trigger values. Otherwise, treat the change as a new condition and let the existing condition be deleted. */
  name?: string;
  /** A condition that checks for log messages matching given constraints. If set, no other conditions can be present. */
  conditionMatchedLog?: LogMatch;
  /** A condition that uses the Prometheus query language to define alerts. */
  conditionPrometheusQueryLanguage?: PrometheusQueryLanguageCondition;
}

export const Condition: Schema.Schema<Condition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conditionSql: Schema.optional(SqlCondition),
    displayName: Schema.optional(Schema.String),
    conditionThreshold: Schema.optional(MetricThreshold),
    conditionAbsent: Schema.optional(MetricAbsence),
    conditionMonitoringQueryLanguage: Schema.optional(
      MonitoringQueryLanguageCondition,
    ),
    name: Schema.optional(Schema.String),
    conditionMatchedLog: Schema.optional(LogMatch),
    conditionPrometheusQueryLanguage: Schema.optional(
      PrometheusQueryLanguageCondition,
    ),
  }).annotate({ identifier: "Condition" });

export interface LabelDescriptor {
  /** The key for this label. The key must meet the following criteria: Does not exceed 100 characters. Matches the following regular expression: [a-zA-Z][a-zA-Z0-9_]* The first character must be an upper- or lower-case letter. The remaining characters must be letters, digits, or underscores. */
  key?: string;
  /** A human-readable description for the label. */
  description?: string;
  /** The type of data that can be assigned to the label. */
  valueType?: "STRING" | "BOOL" | "INT64" | (string & {});
}

export const LabelDescriptor: Schema.Schema<LabelDescriptor> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    valueType: Schema.optional(Schema.String),
  }).annotate({ identifier: "LabelDescriptor" });

export interface MonitoredResourceDescriptor {
  /** Required. The monitored resource type. For example, the type "cloudsql_database" represents databases in Google Cloud SQL. For a list of types, see Monitored resource types (https://cloud.google.com/monitoring/api/resources) and Logging resource types (https://cloud.google.com/logging/docs/api/v2/resource-list). */
  type?: string;
  /** Optional. The launch stage of the monitored resource definition. */
  launchStage?:
    | "LAUNCH_STAGE_UNSPECIFIED"
    | "UNIMPLEMENTED"
    | "PRELAUNCH"
    | "EARLY_ACCESS"
    | "ALPHA"
    | "BETA"
    | "GA"
    | "DEPRECATED"
    | (string & {});
  /** Optional. The resource name of the monitored resource descriptor: "projects/{project_id}/monitoredResourceDescriptors/{type}" where {type} is the value of the type field in this object and {project_id} is a project ID that provides API-specific context for accessing the type. APIs that do not use project information can use the resource name format "monitoredResourceDescriptors/{type}". */
  name?: string;
  /** Optional. A detailed description of the monitored resource type that might be used in documentation. */
  description?: string;
  /** Optional. A concise name for the monitored resource type that might be displayed in user interfaces. It should be a Title Cased Noun Phrase, without any article or other determiners. For example, "Google Cloud SQL Database". */
  displayName?: string;
  /** Required. A set of labels used to describe instances of this monitored resource type. For example, an individual Google Cloud SQL database is identified by values for the labels "database_id" and "zone". */
  labels?: ReadonlyArray<LabelDescriptor>;
}

export const MonitoredResourceDescriptor: Schema.Schema<MonitoredResourceDescriptor> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    launchStage: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Array(LabelDescriptor)),
  }).annotate({ identifier: "MonitoredResourceDescriptor" });

export interface LogMetadata {
  /** The labels extracted from the log. */
  extractedLabels?: Record<string, string>;
}

export const LogMetadata: Schema.Schema<LogMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    extractedLabels: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  }).annotate({ identifier: "LogMetadata" });

export interface Criteria {
  /** The specific AlertPolicy names for the alert that should be snoozed. The format is: projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[POLICY_ID] There is a limit of 16 policies per snooze. This limit is checked during snooze creation. Exactly 1 alert policy is required if filter is specified at the same time. */
  policies?: ReadonlyArray<string>;
  /** Optional. When you define a snooze, you can also define a filter for that snooze. The filter is a string containing one or more key-value pairs. The string uses the standard https://google.aip.dev/160 filter syntax. If you define a filter for a snooze, then the snooze can only apply to one alert policy. When the snooze is active, incidents won't be created when the incident would have key-value pairs (labels) that match those specified by the filter in the snooze.Snooze filters support resource, metric, and metadata labels. If multiple labels are used, then they must be connected with an AND operator. For example, the following filter applies the snooze to incidents that have a resource label with an instance ID of 1234567890, a metric label with an instance name of test_group, a metadata user label with a key of foo and a value of bar, and a metadata system label with a key of region and a value of us-central1: "filter": "resource.labels.instance_id=\"1234567890\" AND metric.labels.instance_name=\"test_group\" AND metadata.user_labels.foo=\"bar\" AND metadata.system_labels.region=\"us-central1\"" */
  filter?: string;
}

export const Criteria: Schema.Schema<Criteria> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policies: Schema.optional(Schema.Array(Schema.String)),
    filter: Schema.optional(Schema.String),
  }).annotate({ identifier: "Criteria" });

export interface TimeInterval {
  /** Required. The end of the time interval. */
  endTime?: string;
  /** Optional. The beginning of the time interval. The default value for the start time is the end time. The start time must not be later than the end time. */
  startTime?: string;
}

export const TimeInterval: Schema.Schema<TimeInterval> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "TimeInterval" });

export interface Snooze {
  /** Required. Identifier. The name of the Snooze. The format is: projects/[PROJECT_ID_OR_NUMBER]/snoozes/[SNOOZE_ID] The ID of the Snooze will be generated by the system. */
  name?: string;
  /** Required. This defines the criteria for applying the Snooze. See Criteria for more information. */
  criteria?: Criteria;
  /** Required. The Snooze will be active from interval.start_time through interval.end_time. interval.start_time cannot be in the past. There is a 15 second clock skew to account for the time it takes for a request to reach the API from the UI. */
  interval?: TimeInterval;
  /** Required. A display name for the Snooze. This can be, at most, 512 unicode characters. */
  displayName?: string;
}

export const Snooze: Schema.Schema<Snooze> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    criteria: Schema.optional(Criteria),
    interval: Schema.optional(TimeInterval),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Snooze" });

export interface DroppedLabels {
  /** Map from label to its value, for all labels dropped in any aggregation. */
  label?: Record<string, string>;
}

export const DroppedLabels: Schema.Schema<DroppedLabels> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    label: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "DroppedLabels" });

export interface MonitoredResourceMetadata {
  /** Output only. Values for predefined system metadata labels. System labels are a kind of metadata extracted by Google, including "machine_image", "vpc", "subnet_id", "security_group", "name", etc. System label values can be only strings, Boolean values, or a list of strings. For example: { "name": "my-test-instance", "security_group": ["a", "b", "c"], "spot_instance": false } */
  systemLabels?: Record<string, unknown>;
  /** Output only. A map of user-defined metadata labels. */
  userLabels?: Record<string, string>;
}

export const MonitoredResourceMetadata: Schema.Schema<MonitoredResourceMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    systemLabels: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    userLabels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "MonitoredResourceMetadata" });

export interface Metric {
  /** An existing metric type, see google.api.MetricDescriptor. For example, custom.googleapis.com/invoice/paid/amount. */
  type?: string;
  /** The set of label values that uniquely identify this metric. All labels listed in the MetricDescriptor must be assigned values. */
  labels?: Record<string, string>;
}

export const Metric: Schema.Schema<Metric> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "Metric" });

export interface MonitoredResource {
  /** Required. The monitored resource type. This field must match the type field of a MonitoredResourceDescriptor object. For example, the type of a Compute Engine VM instance is gce_instance. For a list of types, see Monitoring resource types (https://cloud.google.com/monitoring/api/resources) and Logging resource types (https://cloud.google.com/logging/docs/api/v2/resource-list). */
  type?: string;
  /** Required. Values for all of the labels listed in the associated monitored resource descriptor. For example, Compute Engine VM instances use the labels "project_id", "instance_id", and "zone". */
  labels?: Record<string, string>;
}

export const MonitoredResource: Schema.Schema<MonitoredResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "MonitoredResource" });

export interface Range {
  /** The maximum of the population values. */
  max?: number;
  /** The minimum of the population values. */
  min?: number;
}

export const Range: Schema.Schema<Range> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    max: Schema.optional(Schema.Number),
    min: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Range" });

export interface Exponential {
  /** Must be greater than 0. */
  numFiniteBuckets?: number;
  /** Must be greater than 0. */
  scale?: number;
  /** Must be greater than 1. */
  growthFactor?: number;
}

export const Exponential: Schema.Schema<Exponential> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    numFiniteBuckets: Schema.optional(Schema.Number),
    scale: Schema.optional(Schema.Number),
    growthFactor: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Exponential" });

export interface Linear {
  /** Must be greater than 0. */
  numFiniteBuckets?: number;
  /** Lower bound of the first bucket. */
  offset?: number;
  /** Must be greater than 0. */
  width?: number;
}

export const Linear: Schema.Schema<Linear> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    numFiniteBuckets: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    width: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Linear" });

export interface Explicit {
  /** The values must be monotonically increasing. */
  bounds?: ReadonlyArray<number>;
}

export const Explicit: Schema.Schema<Explicit> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bounds: Schema.optional(Schema.Array(Schema.Number)),
  }).annotate({ identifier: "Explicit" });

export interface BucketOptions {
  /** The exponential buckets. */
  exponentialBuckets?: Exponential;
  /** The linear bucket. */
  linearBuckets?: Linear;
  /** The explicit buckets. */
  explicitBuckets?: Explicit;
}

export const BucketOptions: Schema.Schema<BucketOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exponentialBuckets: Schema.optional(Exponential),
    linearBuckets: Schema.optional(Linear),
    explicitBuckets: Schema.optional(Explicit),
  }).annotate({ identifier: "BucketOptions" });

export interface Exemplar {
  /** Contextual information about the example value. Examples are:Trace: type.googleapis.com/google.monitoring.v3.SpanContextLiteral string: type.googleapis.com/google.protobuf.StringValueLabels dropped during aggregation: type.googleapis.com/google.monitoring.v3.DroppedLabelsThere may be only a single attachment of any given message type in a single exemplar, and this is enforced by the system. */
  attachments?: ReadonlyArray<Record<string, unknown>>;
  /** Value of the exemplar point. This value determines to which bucket the exemplar belongs. */
  value?: number;
  /** The observation (sampling) time of the above value. */
  timestamp?: string;
}

export const Exemplar: Schema.Schema<Exemplar> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attachments: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    value: Schema.optional(Schema.Number),
    timestamp: Schema.optional(Schema.String),
  }).annotate({ identifier: "Exemplar" });

export interface Distribution {
  /** The sum of squared deviations from the mean of the values in the population. For values x_i this is: Sum[i=1..n]((x_i - mean)^2) Knuth, "The Art of Computer Programming", Vol. 2, page 232, 3rd edition describes Welford's method for accumulating this sum in one pass.If count is zero then this field must be zero. */
  sumOfSquaredDeviation?: number;
  /** The number of values in the population. Must be non-negative. This value must equal the sum of the values in bucket_counts if a histogram is provided. */
  count?: string;
  /** The arithmetic mean of the values in the population. If count is zero then this field must be zero. */
  mean?: number;
  /** If specified, contains the range of the population values. The field must not be present if the count is zero. This field is presently ignored by the Cloud Monitoring API v3. */
  range?: Range;
  /** Required in the Cloud Monitoring API v3. Defines the histogram bucket boundaries. */
  bucketOptions?: BucketOptions;
  /** Required in the Cloud Monitoring API v3. The values for each bucket specified in bucket_options. The sum of the values in bucketCounts must equal the value in the count field of the Distribution object. The order of the bucket counts follows the numbering schemes described for the three bucket types. The underflow bucket has number 0; the finite buckets, if any, have numbers 1 through N-2; and the overflow bucket has number N-1. The size of bucket_counts must not be greater than N. If the size is less than N, then the remaining buckets are assigned values of zero. */
  bucketCounts?: ReadonlyArray<string>;
  /** Must be in increasing order of value field. */
  exemplars?: ReadonlyArray<Exemplar>;
}

export const Distribution: Schema.Schema<Distribution> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sumOfSquaredDeviation: Schema.optional(Schema.Number),
    count: Schema.optional(Schema.String),
    mean: Schema.optional(Schema.Number),
    range: Schema.optional(Range),
    bucketOptions: Schema.optional(BucketOptions),
    bucketCounts: Schema.optional(Schema.Array(Schema.String)),
    exemplars: Schema.optional(Schema.Array(Exemplar)),
  }).annotate({ identifier: "Distribution" });

export interface TypedValue {
  /** A 64-bit double-precision floating-point number. Its magnitude is approximately ±10±300 and it has 16 significant digits of precision. */
  doubleValue?: number;
  /** A variable-length string value. */
  stringValue?: string;
  /** A 64-bit integer. Its range is approximately ±9.2x1018. */
  int64Value?: string;
  /** A distribution value. */
  distributionValue?: Distribution;
  /** A Boolean value: true or false. */
  boolValue?: boolean;
}

export const TypedValue: Schema.Schema<TypedValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    doubleValue: Schema.optional(Schema.Number),
    stringValue: Schema.optional(Schema.String),
    int64Value: Schema.optional(Schema.String),
    distributionValue: Schema.optional(Distribution),
    boolValue: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "TypedValue" });

export interface Point {
  /** The time interval to which the data point applies. For GAUGE metrics, the start time is optional, but if it is supplied, it must equal the end time. For DELTA metrics, the start and end time should specify a non-zero interval, with subsequent points specifying contiguous and non-overlapping intervals. For CUMULATIVE metrics, the start and end time should specify a non-zero interval, with subsequent points specifying the same start time and increasing end times, until an event resets the cumulative value to zero and sets a new start time for the following points. */
  interval?: TimeInterval;
  /** The value of the data point. */
  value?: TypedValue;
}

export const Point: Schema.Schema<Point> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    interval: Schema.optional(TimeInterval),
    value: Schema.optional(TypedValue),
  }).annotate({ identifier: "Point" });

export interface TimeSeries {
  /** Input only. A detailed description of the time series that will be associated with the google.api.MetricDescriptor for the metric. Once set, this field cannot be changed through CreateTimeSeries. */
  description?: string;
  /** Output only. The associated monitored resource metadata. When reading a time series, this field will include metadata labels that are explicitly named in the reduction. When creating a time series, this field is ignored. */
  metadata?: MonitoredResourceMetadata;
  /** The associated metric. A fully-specified metric used to identify the time series. */
  metric?: Metric;
  /** The metric kind of the time series. When listing time series, this metric kind might be different from the metric kind of the associated metric if this time series is an alignment or reduction of other time series.When creating a time series, this field is optional. If present, it must be the same as the metric kind of the associated metric. If the associated metric's descriptor must be auto-created, then this field specifies the metric kind of the new descriptor and must be either GAUGE (the default) or CUMULATIVE. */
  metricKind?:
    | "METRIC_KIND_UNSPECIFIED"
    | "GAUGE"
    | "DELTA"
    | "CUMULATIVE"
    | (string & {});
  /** The associated monitored resource. Custom metrics can use only certain monitored resource types in their time series data. For more information, see Monitored resources for custom metrics (https://cloud.google.com/monitoring/custom-metrics/creating-metrics#custom-metric-resources). */
  resource?: MonitoredResource;
  /** The data points of this time series. When listing time series, points are returned in reverse time order.When creating a time series, this field must contain exactly one point and the point's type must be the same as the value type of the associated metric. If the associated metric's descriptor must be auto-created, then the value type of the descriptor is determined by the point's type, which must be BOOL, INT64, DOUBLE, or DISTRIBUTION. */
  points?: ReadonlyArray<Point>;
  /** The units in which the metric value is reported. It is only applicable if the value_type is INT64, DOUBLE, or DISTRIBUTION. The unit defines the representation of the stored metric values. This field can only be changed through CreateTimeSeries when it is empty. */
  unit?: string;
  /** The value type of the time series. When listing time series, this value type might be different from the value type of the associated metric if this time series is an alignment or reduction of other time series.When creating a time series, this field is optional. If present, it must be the same as the type of the data in the points field. */
  valueType?:
    | "VALUE_TYPE_UNSPECIFIED"
    | "BOOL"
    | "INT64"
    | "DOUBLE"
    | "STRING"
    | "DISTRIBUTION"
    | "MONEY"
    | (string & {});
}

export const TimeSeries: Schema.Schema<TimeSeries> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    metadata: Schema.optional(MonitoredResourceMetadata),
    metric: Schema.optional(Metric),
    metricKind: Schema.optional(Schema.String),
    resource: Schema.optional(MonitoredResource),
    points: Schema.optional(Schema.Array(Point)),
    unit: Schema.optional(Schema.String),
    valueType: Schema.optional(Schema.String),
  }).annotate({ identifier: "TimeSeries" });

export interface Status {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.Number),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "Status" });

export interface NotificationRateLimit {
  /** Not more than one notification per period. */
  period?: string;
}

export const NotificationRateLimit: Schema.Schema<NotificationRateLimit> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    period: Schema.optional(Schema.String),
  }).annotate({ identifier: "NotificationRateLimit" });

export interface NotificationChannelStrategy {
  /** The full REST resource name for the notification channels that these settings apply to. Each of these correspond to the name field in one of the NotificationChannel objects referenced in the notification_channels field of this AlertPolicy. The format is: projects/[PROJECT_ID_OR_NUMBER]/notificationChannels/[CHANNEL_ID] */
  notificationChannelNames?: ReadonlyArray<string>;
  /** The frequency at which to send reminder notifications for open incidents. The value must be between 30 minutes and 24 hours. */
  renotifyInterval?: string;
}

export const NotificationChannelStrategy: Schema.Schema<NotificationChannelStrategy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    notificationChannelNames: Schema.optional(Schema.Array(Schema.String)),
    renotifyInterval: Schema.optional(Schema.String),
  }).annotate({ identifier: "NotificationChannelStrategy" });

export interface AlertStrategy {
  /** If an alerting policy that was active has no data for this long, any open incidents will close */
  autoClose?: string;
  /** For log-based alert policies, the notification prompts is always OPENED. For non log-based alert policies, the notification prompts can be OPENED or OPENED, CLOSED. */
  notificationPrompts?: ReadonlyArray<
    "NOTIFICATION_PROMPT_UNSPECIFIED" | "OPENED" | "CLOSED" | (string & {})
  >;
  /** Required for log-based alerting policies, i.e. policies with a LogMatch condition.This limit is not implemented for alerting policies that do not have a LogMatch condition. */
  notificationRateLimit?: NotificationRateLimit;
  /** Control how notifications will be sent out, on a per-channel basis. */
  notificationChannelStrategy?: ReadonlyArray<NotificationChannelStrategy>;
}

export const AlertStrategy: Schema.Schema<AlertStrategy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    autoClose: Schema.optional(Schema.String),
    notificationPrompts: Schema.optional(Schema.Array(Schema.String)),
    notificationRateLimit: Schema.optional(NotificationRateLimit),
    notificationChannelStrategy: Schema.optional(
      Schema.Array(NotificationChannelStrategy),
    ),
  }).annotate({ identifier: "AlertStrategy" });

export interface Link {
  /** The url of a webpage. A url can be templatized by using variables in the path or the query parameters. The total length of a URL should not exceed 2083 characters before and after variable expansion. Example: "https://my_domain.com/playbook?name=${resource.name}" */
  url?: string;
  /** A short display name for the link. The display name must not be empty or exceed 63 characters. Example: "playbook". */
  displayName?: string;
}

export const Link: Schema.Schema<Link> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Link" });

export interface Documentation {
  /** Optional. The subject line of the notification. The subject line may not exceed 10,240 bytes. In notifications generated by this policy, the contents of the subject line after variable expansion will be truncated to 255 bytes or shorter at the latest UTF-8 character boundary. The 255-byte limit is recommended by this thread (https://stackoverflow.com/questions/1592291/what-is-the-email-subject-length-limit). It is both the limit imposed by some third-party ticketing products and it is common to define textual fields in databases as VARCHAR(255).The contents of the subject line can be templatized by using variables (https://cloud.google.com/monitoring/alerts/doc-variables#doc-vars). If this field is missing or empty, a default subject line will be generated. */
  subject?: string;
  /** The format of the content field. Presently, only the value "text/markdown" is supported. See Markdown (https://en.wikipedia.org/wiki/Markdown) for more information. */
  mimeType?: string;
  /** Optional. Links to content such as playbooks, repositories, and other resources. This field can contain up to 3 entries. */
  links?: ReadonlyArray<Link>;
  /** The body of the documentation, interpreted according to mime_type. The content may not exceed 8,192 Unicode characters and may not exceed more than 10,240 bytes when encoded in UTF-8 format, whichever is smaller. This text can be templatized by using variables (https://cloud.google.com/monitoring/alerts/doc-variables#doc-vars). */
  content?: string;
}

export const Documentation: Schema.Schema<Documentation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subject: Schema.optional(Schema.String),
    mimeType: Schema.optional(Schema.String),
    links: Schema.optional(Schema.Array(Link)),
    content: Schema.optional(Schema.String),
  }).annotate({ identifier: "Documentation" });

export interface MutationRecord {
  /** When the change occurred. */
  mutateTime?: string;
  /** The email address of the user making the change. */
  mutatedBy?: string;
}

export const MutationRecord: Schema.Schema<MutationRecord> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mutateTime: Schema.optional(Schema.String),
    mutatedBy: Schema.optional(Schema.String),
  }).annotate({ identifier: "MutationRecord" });

export interface AlertPolicy {
  /** Identifies the notification channels to which notifications should be sent when incidents are opened or closed or when new violations occur on an already opened incident. Each element of this array corresponds to the name field in each of the NotificationChannel objects that are returned from the ListNotificationChannels method. The format of the entries in this field is: projects/[PROJECT_ID_OR_NUMBER]/notificationChannels/[CHANNEL_ID] */
  notificationChannels?: ReadonlyArray<string>;
  /** A list of conditions for the policy. The conditions are combined by AND or OR according to the combiner field. If the combined conditions evaluate to true, then an incident is created. A policy can have from one to six conditions. If condition_time_series_query_language is present, it must be the only condition. If condition_monitoring_query_language is present, it must be the only condition. */
  conditions?: ReadonlyArray<Condition>;
  /** Read-only description of how the alerting policy is invalid. This field is only set when the alerting policy is invalid. An invalid alerting policy will not generate incidents. */
  validity?: Status;
  /** Optional. The severity of an alerting policy indicates how important incidents generated by that policy are. The severity level will be displayed on the Incident detail page and in notifications. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "CRITICAL"
    | "ERROR"
    | "WARNING"
    | (string & {});
  /** Control over how this alerting policy's notification channels are notified. */
  alertStrategy?: AlertStrategy;
  /** User-supplied key/value data to be used for organizing and identifying the AlertPolicy objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.Note that Prometheus {alert name} is a valid Prometheus label names (https://prometheus.io/docs/concepts/data_model/#metric-names-and-labels), whereas Prometheus {rule group} is an unrestricted UTF-8 string. This means that they cannot be stored as-is in user labels, because they may contain characters that are not allowed in user-label values. */
  userLabels?: Record<string, string>;
  /** Identifier. Required if the policy exists. The resource name for this policy. The format is: projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[ALERT_POLICY_ID] [ALERT_POLICY_ID] is assigned by Cloud Monitoring when the policy is created. When calling the alertPolicies.create method, do not include the name field in the alerting policy passed as part of the request. */
  name?: string;
  /** How to combine the results of multiple conditions to determine if an incident should be opened. If condition_time_series_query_language is present, this must be COMBINE_UNSPECIFIED. */
  combiner?:
    | "COMBINE_UNSPECIFIED"
    | "AND"
    | "OR"
    | "AND_WITH_MATCHING_RESOURCE"
    | (string & {});
  /** Whether or not the policy is enabled. On write, the default interpretation if unset is that the policy is enabled. On read, clients should not make any assumption about the state if it has not been populated. The field should always be populated on List and Get operations, unless a field projection has been specified that strips it out. */
  enabled?: boolean;
  /** Documentation that is included with notifications and incidents related to this policy. Best practice is for the documentation to include information to help responders understand, mitigate, escalate, and correct the underlying problems detected by the alerting policy. Notification channels that have limited capacity might not show this documentation. */
  documentation?: Documentation;
  /** A read-only record of the creation of the alerting policy. If provided in a call to create or update, this field will be ignored. */
  creationRecord?: MutationRecord;
  /** A short name or phrase used to identify the policy in dashboards, notifications, and incidents. To avoid confusion, don't use the same display name for multiple policies in the same project. The name is limited to 512 Unicode characters.The convention for the display_name of a PrometheusQueryLanguageCondition is "{rule group name}/{alert name}", where the {rule group name} and {alert name} should be taken from the corresponding Prometheus configuration file. This convention is not enforced. In any case the display_name is not a unique key of the AlertPolicy. */
  displayName?: string;
  /** A read-only record of the most recent change to the alerting policy. If provided in a call to create or update, this field will be ignored. */
  mutationRecord?: MutationRecord;
}

export const AlertPolicy: Schema.Schema<AlertPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    notificationChannels: Schema.optional(Schema.Array(Schema.String)),
    conditions: Schema.optional(Schema.Array(Condition)),
    validity: Schema.optional(Status),
    severity: Schema.optional(Schema.String),
    alertStrategy: Schema.optional(AlertStrategy),
    userLabels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    combiner: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    documentation: Schema.optional(Documentation),
    creationRecord: Schema.optional(MutationRecord),
    displayName: Schema.optional(Schema.String),
    mutationRecord: Schema.optional(MutationRecord),
  }).annotate({ identifier: "AlertPolicy" });

export interface AppEngine {
  /** The ID of the App Engine module underlying this service. Corresponds to the module_id resource label in the gae_app monitored resource (https://cloud.google.com/monitoring/api/resources#tag_gae_app). */
  moduleId?: string;
}

export const AppEngine: Schema.Schema<AppEngine> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    moduleId: Schema.optional(Schema.String),
  }).annotate({ identifier: "AppEngine" });

export interface LatencyCriteria {
  /** Good service is defined to be the count of requests made to this service that return in no more than threshold. */
  threshold?: string;
}

export const LatencyCriteria: Schema.Schema<LatencyCriteria> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    threshold: Schema.optional(Schema.String),
  }).annotate({ identifier: "LatencyCriteria" });

export interface AvailabilityCriteria {}

export const AvailabilityCriteria: Schema.Schema<AvailabilityCriteria> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AvailabilityCriteria",
  });

export interface BasicSli {
  /** OPTIONAL: The set of locations to which this SLI is relevant. Telemetry from other locations will not be used to calculate performance for this SLI. If omitted, this SLI applies to all locations in which the Service has activity. For service types that don't support breaking down by location, setting this field will result in an error. */
  location?: ReadonlyArray<string>;
  /** OPTIONAL: The set of API versions to which this SLI is relevant. Telemetry from other API versions will not be used to calculate performance for this SLI. If omitted, this SLI applies to all API versions. For service types that don't support breaking down by version, setting this field will result in an error. */
  version?: ReadonlyArray<string>;
  /** Good service is defined to be the count of requests made to this service that are fast enough with respect to latency.threshold. */
  latency?: LatencyCriteria;
  /** Good service is defined to be the count of requests made to this service that return successfully. */
  availability?: AvailabilityCriteria;
  /** OPTIONAL: The set of RPCs to which this SLI is relevant. Telemetry from other methods will not be used to calculate performance for this SLI. If omitted, this SLI applies to all the Service's methods. For service types that don't support breaking down by method, setting this field will result in an error. */
  method?: ReadonlyArray<string>;
}

export const BasicSli: Schema.Schema<BasicSli> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.Array(Schema.String)),
    version: Schema.optional(Schema.Array(Schema.String)),
    latency: Schema.optional(LatencyCriteria),
    availability: Schema.optional(AvailabilityCriteria),
    method: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "BasicSli" });

export interface TimeSeriesRatio {
  /** A monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) specifying a TimeSeries quantifying bad service, either demanded service that was not provided or demanded service that was of inadequate quality. Must have ValueType = DOUBLE or ValueType = INT64 and must have MetricKind = DELTA or MetricKind = CUMULATIVE. */
  badServiceFilter?: string;
  /** A monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) specifying a TimeSeries quantifying total demanded service. Must have ValueType = DOUBLE or ValueType = INT64 and must have MetricKind = DELTA or MetricKind = CUMULATIVE. */
  totalServiceFilter?: string;
  /** A monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) specifying a TimeSeries quantifying good service provided. Must have ValueType = DOUBLE or ValueType = INT64 and must have MetricKind = DELTA or MetricKind = CUMULATIVE. */
  goodServiceFilter?: string;
}

export const TimeSeriesRatio: Schema.Schema<TimeSeriesRatio> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    badServiceFilter: Schema.optional(Schema.String),
    totalServiceFilter: Schema.optional(Schema.String),
    goodServiceFilter: Schema.optional(Schema.String),
  }).annotate({ identifier: "TimeSeriesRatio" });

export interface GoogleMonitoringV3Range {
  /** Range maximum. */
  max?: number;
  /** Range minimum. */
  min?: number;
}

export const GoogleMonitoringV3Range: Schema.Schema<GoogleMonitoringV3Range> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    max: Schema.optional(Schema.Number),
    min: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleMonitoringV3Range" });

export interface DistributionCut {
  /** Range of values considered "good." For a one-sided range, set one bound to an infinite value. */
  range?: GoogleMonitoringV3Range;
  /** A monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) specifying a TimeSeries aggregating values. Must have ValueType = DISTRIBUTION and MetricKind = DELTA or MetricKind = CUMULATIVE. */
  distributionFilter?: string;
}

export const DistributionCut: Schema.Schema<DistributionCut> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    range: Schema.optional(GoogleMonitoringV3Range),
    distributionFilter: Schema.optional(Schema.String),
  }).annotate({ identifier: "DistributionCut" });

export interface RequestBasedSli {
  /** good_total_ratio is used when the ratio of good_service to total_service is computed from two TimeSeries. */
  goodTotalRatio?: TimeSeriesRatio;
  /** distribution_cut is used when good_service is a count of values aggregated in a Distribution that fall into a good range. The total_service is the total count of all values aggregated in the Distribution. */
  distributionCut?: DistributionCut;
}

export const RequestBasedSli: Schema.Schema<RequestBasedSli> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    goodTotalRatio: Schema.optional(TimeSeriesRatio),
    distributionCut: Schema.optional(DistributionCut),
  }).annotate({ identifier: "RequestBasedSli" });

export interface PerformanceThreshold {
  /** RequestBasedSli to evaluate to judge window quality. */
  performance?: RequestBasedSli;
  /** BasicSli to evaluate to judge window quality. */
  basicSliPerformance?: BasicSli;
  /** If window performance >= threshold, the window is counted as good. */
  threshold?: number;
}

export const PerformanceThreshold: Schema.Schema<PerformanceThreshold> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    performance: Schema.optional(RequestBasedSli),
    basicSliPerformance: Schema.optional(BasicSli),
    threshold: Schema.optional(Schema.Number),
  }).annotate({ identifier: "PerformanceThreshold" });

export interface MetricRange {
  /** Range of values considered "good." For a one-sided range, set one bound to an infinite value. */
  range?: GoogleMonitoringV3Range;
  /** A monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) specifying the TimeSeries to use for evaluating window quality. */
  timeSeries?: string;
}

export const MetricRange: Schema.Schema<MetricRange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    range: Schema.optional(GoogleMonitoringV3Range),
    timeSeries: Schema.optional(Schema.String),
  }).annotate({ identifier: "MetricRange" });

export interface WindowsBasedSli {
  /** A monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) specifying a TimeSeries with ValueType = BOOL. The window is good if any true values appear in the window. */
  goodBadMetricFilter?: string;
  /** Duration over which window quality is evaluated. Must be an integer fraction of a day and at least 60s. */
  windowPeriod?: string;
  /** A window is good if its performance is high enough. */
  goodTotalRatioThreshold?: PerformanceThreshold;
  /** A window is good if the metric's value is in a good range, summed across returned streams. */
  metricSumInRange?: MetricRange;
  /** A window is good if the metric's value is in a good range, averaged across returned streams. */
  metricMeanInRange?: MetricRange;
}

export const WindowsBasedSli: Schema.Schema<WindowsBasedSli> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    goodBadMetricFilter: Schema.optional(Schema.String),
    windowPeriod: Schema.optional(Schema.String),
    goodTotalRatioThreshold: Schema.optional(PerformanceThreshold),
    metricSumInRange: Schema.optional(MetricRange),
    metricMeanInRange: Schema.optional(MetricRange),
  }).annotate({ identifier: "WindowsBasedSli" });

export interface ServiceLevelIndicator {
  /** Basic SLI on a well-known service type. */
  basicSli?: BasicSli;
  /** Windows-based SLIs */
  windowsBased?: WindowsBasedSli;
  /** Request-based SLIs */
  requestBased?: RequestBasedSli;
}

export const ServiceLevelIndicator: Schema.Schema<ServiceLevelIndicator> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    basicSli: Schema.optional(BasicSli),
    windowsBased: Schema.optional(WindowsBasedSli),
    requestBased: Schema.optional(RequestBasedSli),
  }).annotate({ identifier: "ServiceLevelIndicator" });

export interface ServiceLevelObjective {
  /** The definition of good service, used to measure and calculate the quality of the Service's performance with respect to a single aspect of service quality. */
  serviceLevelIndicator?: ServiceLevelIndicator;
  /** A rolling time period, semantically "in the past ". Must be an integer multiple of 1 day no larger than 30 days. */
  rollingPeriod?: string;
  /** Labels which have been used to annotate the service-level objective. Label keys must start with a letter. Label keys and values may contain lowercase letters, numbers, underscores, and dashes. Label keys and values have a maximum length of 63 characters, and must be less than 128 bytes in size. Up to 64 label entries may be stored. For labels which do not have a semantic value, the empty string may be supplied for the label value. */
  userLabels?: Record<string, string>;
  /** The fraction of service that must be good in order for this objective to be met. 0 < goal <= 0.9999. */
  goal?: number;
  /** A calendar period, semantically "since the start of the current ". At this time, only DAY, WEEK, FORTNIGHT, and MONTH are supported. */
  calendarPeriod?:
    | "CALENDAR_PERIOD_UNSPECIFIED"
    | "DAY"
    | "WEEK"
    | "FORTNIGHT"
    | "MONTH"
    | "QUARTER"
    | "HALF"
    | "YEAR"
    | (string & {});
  /** Name used for UI elements listing this SLO. */
  displayName?: string;
  /** Identifier. Resource name for this ServiceLevelObjective. The format is: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID]/serviceLevelObjectives/[SLO_NAME] */
  name?: string;
}

export const ServiceLevelObjective: Schema.Schema<ServiceLevelObjective> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceLevelIndicator: Schema.optional(ServiceLevelIndicator),
    rollingPeriod: Schema.optional(Schema.String),
    userLabels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    goal: Schema.optional(Schema.Number),
    calendarPeriod: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServiceLevelObjective" });

export interface Group {
  /** The name of the group's parent, if it has one. The format is: projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID] For groups with no parent, parent_name is the empty string, "". */
  parentName?: string;
  /** The filter used to determine which monitored resources belong to this group. */
  filter?: string;
  /** If true, the members of this group are considered to be a cluster. The system can perform additional analysis on groups that are clusters. */
  isCluster?: boolean;
  /** Output only. The name of this group. The format is: projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID] When creating a group, this field is ignored and a new name is created consisting of the project specified in the call to CreateGroup and a unique [GROUP_ID] that is generated automatically. */
  name?: string;
  /** A user-assigned name for this group, used only for display purposes. */
  displayName?: string;
}

export const Group: Schema.Schema<Group> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parentName: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
    isCluster: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Group" });

export interface ListGroupsResponse {
  /** The groups that match the specified filters. */
  group?: ReadonlyArray<Group>;
  /** If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method. */
  nextPageToken?: string;
}

export const ListGroupsResponse: Schema.Schema<ListGroupsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    group: Schema.optional(Schema.Array(Group)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListGroupsResponse" });

export interface SendNotificationChannelVerificationCodeRequest {}

export const SendNotificationChannelVerificationCodeRequest: Schema.Schema<SendNotificationChannelVerificationCodeRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "SendNotificationChannelVerificationCodeRequest",
  });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface ClusterIstio {
  /** The namespace of the Istio service underlying this service. Corresponds to the destination_service_namespace metric label in Istio metrics. */
  serviceNamespace?: string;
  /** The name of the Istio service underlying this service. Corresponds to the destination_service_name metric label in Istio metrics. */
  serviceName?: string;
  /** The location of the Kubernetes cluster in which this Istio service is defined. Corresponds to the location resource label in k8s_cluster resources. */
  location?: string;
  /** The name of the Kubernetes cluster in which this Istio service is defined. Corresponds to the cluster_name resource label in k8s_cluster resources. */
  clusterName?: string;
}

export const ClusterIstio: Schema.Schema<ClusterIstio> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceNamespace: Schema.optional(Schema.String),
    serviceName: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    clusterName: Schema.optional(Schema.String),
  }).annotate({ identifier: "ClusterIstio" });

export interface CreateTimeSeriesRequest {
  /** Required. The new data to be added to a list of time series. Adds at most one data point to each of several time series. The new data point must be more recent than any other point in its time series. Each TimeSeries value must fully specify a unique time series by supplying all label values for the metric and the monitored resource.The maximum number of TimeSeries objects per Create request is 200. */
  timeSeries?: ReadonlyArray<TimeSeries>;
}

export const CreateTimeSeriesRequest: Schema.Schema<CreateTimeSeriesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    timeSeries: Schema.optional(Schema.Array(TimeSeries)),
  }).annotate({ identifier: "CreateTimeSeriesRequest" });

export interface MetricDescriptorMetadata {
  /** The scope of the timeseries data of the metric. */
  timeSeriesResourceHierarchyLevel?: ReadonlyArray<
    | "TIME_SERIES_RESOURCE_HIERARCHY_LEVEL_UNSPECIFIED"
    | "PROJECT"
    | "ORGANIZATION"
    | "FOLDER"
    | (string & {})
  >;
  /** Deprecated. Must use the MetricDescriptor.launch_stage instead. */
  launchStage?:
    | "LAUNCH_STAGE_UNSPECIFIED"
    | "UNIMPLEMENTED"
    | "PRELAUNCH"
    | "EARLY_ACCESS"
    | "ALPHA"
    | "BETA"
    | "GA"
    | "DEPRECATED"
    | (string & {});
  /** The sampling period of metric data points. For metrics which are written periodically, consecutive data points are stored at this time interval, excluding data loss due to errors. Metrics with a higher granularity have a smaller sampling period. */
  samplePeriod?: string;
  /** The delay of data points caused by ingestion. Data points older than this age are guaranteed to be ingested and available to be read, excluding data loss due to errors. */
  ingestDelay?: string;
}

export const MetricDescriptorMetadata: Schema.Schema<MetricDescriptorMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    timeSeriesResourceHierarchyLevel: Schema.optional(
      Schema.Array(Schema.String),
    ),
    launchStage: Schema.optional(Schema.String),
    samplePeriod: Schema.optional(Schema.String),
    ingestDelay: Schema.optional(Schema.String),
  }).annotate({ identifier: "MetricDescriptorMetadata" });

export interface MetricDescriptor {
  /** Whether the measurement is an integer, a floating-point number, etc. Some combinations of metric_kind and value_type might not be supported. */
  valueType?:
    | "VALUE_TYPE_UNSPECIFIED"
    | "BOOL"
    | "INT64"
    | "DOUBLE"
    | "STRING"
    | "DISTRIBUTION"
    | "MONEY"
    | (string & {});
  /** The set of labels that can be used to describe a specific instance of this metric type. For example, the appengine.googleapis.com/http/server/response_latencies metric type has a label for the HTTP response code, response_code, so you can look at latencies for successful responses or just for responses that failed. */
  labels?: ReadonlyArray<LabelDescriptor>;
  /** Whether the metric records instantaneous values, changes to a value, etc. Some combinations of metric_kind and value_type might not be supported. */
  metricKind?:
    | "METRIC_KIND_UNSPECIFIED"
    | "GAUGE"
    | "DELTA"
    | "CUMULATIVE"
    | (string & {});
  /** Optional. Metadata which can be used to guide usage of the metric. */
  metadata?: MetricDescriptorMetadata;
  /** The resource name of the metric descriptor. */
  name?: string;
  /** A detailed description of the metric, which can be used in documentation. */
  description?: string;
  /** Read-only. If present, then a time series, which is identified partially by a metric type and a MonitoredResourceDescriptor, that is associated with this metric type can only be associated with one of the monitored resource types listed here. */
  monitoredResourceTypes?: ReadonlyArray<string>;
  /** The metric type, including its DNS name prefix. The type is not URL-encoded. All user-defined metric types have the DNS name custom.googleapis.com or external.googleapis.com. Metric types should use a natural hierarchical grouping. For example: "custom.googleapis.com/invoice/paid/amount" "external.googleapis.com/prometheus/up" "appengine.googleapis.com/http/server/response_latencies" */
  type?: string;
  /** Optional. The launch stage of the metric definition. */
  launchStage?:
    | "LAUNCH_STAGE_UNSPECIFIED"
    | "UNIMPLEMENTED"
    | "PRELAUNCH"
    | "EARLY_ACCESS"
    | "ALPHA"
    | "BETA"
    | "GA"
    | "DEPRECATED"
    | (string & {});
  /** The units in which the metric value is reported. It is only applicable if the value_type is INT64, DOUBLE, or DISTRIBUTION. The unit defines the representation of the stored metric values.Different systems might scale the values to be more easily displayed (so a value of 0.02kBy might be displayed as 20By, and a value of 3523kBy might be displayed as 3.5MBy). However, if the unit is kBy, then the value of the metric is always in thousands of bytes, no matter how it might be displayed.If you want a custom metric to record the exact number of CPU-seconds used by a job, you can create an INT64 CUMULATIVE metric whose unit is s{CPU} (or equivalently 1s{CPU} or just s). If the job uses 12,005 CPU-seconds, then the value is written as 12005.Alternatively, if you want a custom metric to record data in a more granular way, you can create a DOUBLE CUMULATIVE metric whose unit is ks{CPU}, and then write the value 12.005 (which is 12005/1000), or use Kis{CPU} and write 11.723 (which is 12005/1024).The supported units are a subset of The Unified Code for Units of Measure (https://unitsofmeasure.org/ucum.html) standard:Basic units (UNIT) bit bit By byte s second min minute h hour d day 1 dimensionlessPrefixes (PREFIX) k kilo (10^3) M mega (10^6) G giga (10^9) T tera (10^12) P peta (10^15) E exa (10^18) Z zetta (10^21) Y yotta (10^24) m milli (10^-3) u micro (10^-6) n nano (10^-9) p pico (10^-12) f femto (10^-15) a atto (10^-18) z zepto (10^-21) y yocto (10^-24) Ki kibi (2^10) Mi mebi (2^20) Gi gibi (2^30) Ti tebi (2^40) Pi pebi (2^50)GrammarThe grammar also includes these connectors: / division or ratio (as an infix operator). For examples, kBy/{email} or MiBy/10ms (although you should almost never have /s in a metric unit; rates should always be computed at query time from the underlying cumulative or delta value). . multiplication or composition (as an infix operator). For examples, GBy.d or k{watt}.h.The grammar for a unit is as follows: Expression = Component { "." Component } { "/" Component } ; Component = ( [ PREFIX ] UNIT | "%" ) [ Annotation ] | Annotation | "1" ; Annotation = "{" NAME "}" ; Notes: Annotation is just a comment if it follows a UNIT. If the annotation is used alone, then the unit is equivalent to 1. For examples, {request}/s == 1/s, By{transmitted}/s == By/s. NAME is a sequence of non-blank printable ASCII characters not containing { or }. 1 represents a unitary dimensionless unit (https://en.wikipedia.org/wiki/Dimensionless_quantity) of 1, such as in 1/s. It is typically used when none of the basic units are appropriate. For example, "new users per day" can be represented as 1/d or {new-users}/d (and a metric value 5 would mean "5 new users). Alternatively, "thousands of page views per day" would be represented as 1000/d or k1/d or k{page_views}/d (and a metric value of 5.3 would mean "5300 page views per day"). % represents dimensionless value of 1/100, and annotates values giving a percentage (so the metric values are typically in the range of 0..100, and a metric value 3 means "3 percent"). 10^2.% indicates a metric contains a ratio, typically in the range 0..1, that will be multiplied by 100 and displayed as a percentage (so a metric value 0.03 means "3 percent"). */
  unit?: string;
  /** A concise name for the metric, which can be displayed in user interfaces. Use sentence case without an ending period, for example "Request count". This field is optional but it is recommended to be set for any metrics associated with user-visible concepts, such as Quota. */
  displayName?: string;
}

export const MetricDescriptor: Schema.Schema<MetricDescriptor> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    valueType: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Array(LabelDescriptor)),
    metricKind: Schema.optional(Schema.String),
    metadata: Schema.optional(MetricDescriptorMetadata),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    monitoredResourceTypes: Schema.optional(Schema.Array(Schema.String)),
    type: Schema.optional(Schema.String),
    launchStage: Schema.optional(Schema.String),
    unit: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "MetricDescriptor" });

export interface ListMetricDescriptorsResponse {
  /** The metric descriptors that are available to the project and that match the value of filter, if present. */
  metricDescriptors?: ReadonlyArray<MetricDescriptor>;
  /** If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method. */
  nextPageToken?: string;
}

export const ListMetricDescriptorsResponse: Schema.Schema<ListMetricDescriptorsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metricDescriptors: Schema.optional(Schema.Array(MetricDescriptor)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListMetricDescriptorsResponse" });

export interface NotificationChannel {
  /** Whether notifications are forwarded to the described channel. This makes it possible to disable delivery of notifications to a particular channel without removing the channel from all alerting policies that reference the channel. This is a more convenient approach when the change is temporary and you want to receive notifications from the same set of alerting policies on the channel at some point in the future. */
  enabled?: boolean;
  /** The type of the notification channel. This field matches the value of the NotificationChannelDescriptor.type field. */
  type?: string;
  /** Record of the creation of this channel. */
  creationRecord?: MutationRecord;
  /** An optional human-readable name for this notification channel. It is recommended that you specify a non-empty and unique name in order to make it easier to identify the channels in your project, though this is not enforced. The display name is limited to 512 Unicode characters. */
  displayName?: string;
  /** Records of the modification of this channel. */
  mutationRecords?: ReadonlyArray<MutationRecord>;
  /** User-supplied key/value data that does not need to conform to the corresponding NotificationChannelDescriptor's schema, unlike the labels field. This field is intended to be used for organizing and identifying the NotificationChannel objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter. */
  userLabels?: Record<string, string>;
  /** Identifier. The full REST resource name for this channel. The format is: projects/[PROJECT_ID_OR_NUMBER]/notificationChannels/[CHANNEL_ID] The [CHANNEL_ID] is automatically assigned by the server on creation. */
  name?: string;
  /** An optional human-readable description of this notification channel. This description may provide additional details, beyond the display name, for the channel. This may not exceed 1024 Unicode characters. */
  description?: string;
  /** Indicates whether this channel has been verified or not. On a ListNotificationChannels or GetNotificationChannel operation, this field is expected to be populated.If the value is UNVERIFIED, then it indicates that the channel is non-functioning (it both requires verification and lacks verification); otherwise, it is assumed that the channel works.If the channel is neither VERIFIED nor UNVERIFIED, it implies that the channel is of a type that does not require verification or that this specific channel has been exempted from verification because it was created prior to verification being required for channels of this type.This field cannot be modified using a standard UpdateNotificationChannel operation. To change the value of this field, you must call VerifyNotificationChannel. */
  verificationStatus?:
    | "VERIFICATION_STATUS_UNSPECIFIED"
    | "UNVERIFIED"
    | "VERIFIED"
    | (string & {});
  /** Configuration fields that define the channel and its behavior. The permissible and required labels are specified in the NotificationChannelDescriptor.labels of the NotificationChannelDescriptor corresponding to the type field. */
  labels?: Record<string, string>;
}

export const NotificationChannel: Schema.Schema<NotificationChannel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    type: Schema.optional(Schema.String),
    creationRecord: Schema.optional(MutationRecord),
    displayName: Schema.optional(Schema.String),
    mutationRecords: Schema.optional(Schema.Array(MutationRecord)),
    userLabels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    verificationStatus: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "NotificationChannel" });

export interface BasicService {
  /** Labels that specify the resource that emits the monitoring data which is used for SLO reporting of this Service. Documentation and valid values for given service types here (https://cloud.google.com/stackdriver/docs/solutions/slo-monitoring/api/api-structures#basic-svc-w-basic-sli). */
  serviceLabels?: Record<string, string>;
  /** The type of service that this basic service defines, e.g. APP_ENGINE service type. Documentation and valid values here (https://cloud.google.com/stackdriver/docs/solutions/slo-monitoring/api/api-structures#basic-svc-w-basic-sli). */
  serviceType?: string;
}

export const BasicService: Schema.Schema<BasicService> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceLabels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    serviceType: Schema.optional(Schema.String),
  }).annotate({ identifier: "BasicService" });

export interface CloudEndpoints {
  /** The name of the Cloud Endpoints service underlying this service. Corresponds to the service resource label in the api monitored resource (https://cloud.google.com/monitoring/api/resources#tag_api). */
  service?: string;
}

export const CloudEndpoints: Schema.Schema<CloudEndpoints> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    service: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudEndpoints" });

export interface IstioCanonicalService {
  /** The name of the canonical service underlying this service. Corresponds to the destination_canonical_service_name metric label in label in Istio metrics (https://cloud.google.com/monitoring/api/metrics_istio). */
  canonicalService?: string;
  /** The namespace of the canonical service underlying this service. Corresponds to the destination_canonical_service_namespace metric label in Istio metrics (https://cloud.google.com/monitoring/api/metrics_istio). */
  canonicalServiceNamespace?: string;
  /** Identifier for the Istio mesh in which this canonical service is defined. Corresponds to the mesh_uid metric label in Istio metrics (https://cloud.google.com/monitoring/api/metrics_istio). */
  meshUid?: string;
}

export const IstioCanonicalService: Schema.Schema<IstioCanonicalService> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    canonicalService: Schema.optional(Schema.String),
    canonicalServiceNamespace: Schema.optional(Schema.String),
    meshUid: Schema.optional(Schema.String),
  }).annotate({ identifier: "IstioCanonicalService" });

export interface Telemetry {
  /** The full name of the resource that defines this service. Formatted as described in https://cloud.google.com/apis/design/resource_names. */
  resourceName?: string;
}

export const Telemetry: Schema.Schema<Telemetry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Telemetry" });

export interface Custom {}

export const Custom: Schema.Schema<Custom> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Custom",
  });

export interface CloudRun {
  /** The location the service is run. Corresponds to the location resource label in the cloud_run_revision monitored resource (https://cloud.google.com/monitoring/api/resources#tag_cloud_run_revision). */
  location?: string;
  /** The name of the Cloud Run service. Corresponds to the service_name resource label in the cloud_run_revision monitored resource (https://cloud.google.com/monitoring/api/resources#tag_cloud_run_revision). */
  serviceName?: string;
}

export const CloudRun: Schema.Schema<CloudRun> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    serviceName: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudRun" });

export interface GkeWorkload {
  /** The location of the parent cluster. This may be a zone or region. */
  location?: string;
  /** The name of this workload. */
  topLevelControllerName?: string;
  /** The type of this workload (for example, "Deployment" or "DaemonSet") */
  topLevelControllerType?: string;
  /** Output only. The project this resource lives in. For legacy services migrated from the Custom type, this may be a distinct project from the one parenting the service itself. */
  projectId?: string;
  /** The name of the parent cluster. */
  clusterName?: string;
  /** The name of the parent namespace. */
  namespaceName?: string;
}

export const GkeWorkload: Schema.Schema<GkeWorkload> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    topLevelControllerName: Schema.optional(Schema.String),
    topLevelControllerType: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
    clusterName: Schema.optional(Schema.String),
    namespaceName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GkeWorkload" });

export interface MeshIstio {
  /** The namespace of the Istio service underlying this service. Corresponds to the destination_service_namespace metric label in Istio metrics. */
  serviceNamespace?: string;
  /** Identifier for the mesh in which this Istio service is defined. Corresponds to the mesh_uid metric label in Istio metrics. */
  meshUid?: string;
  /** The name of the Istio service underlying this service. Corresponds to the destination_service_name metric label in Istio metrics. */
  serviceName?: string;
}

export const MeshIstio: Schema.Schema<MeshIstio> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceNamespace: Schema.optional(Schema.String),
    meshUid: Schema.optional(Schema.String),
    serviceName: Schema.optional(Schema.String),
  }).annotate({ identifier: "MeshIstio" });

export interface GkeNamespace {
  /** The location of the parent cluster. This may be a zone or region. */
  location?: string;
  /** The name of the parent cluster. */
  clusterName?: string;
  /** The name of this namespace. */
  namespaceName?: string;
  /** Output only. The project this resource lives in. For legacy services migrated from the Custom type, this may be a distinct project from the one parenting the service itself. */
  projectId?: string;
}

export const GkeNamespace: Schema.Schema<GkeNamespace> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    clusterName: Schema.optional(Schema.String),
    namespaceName: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GkeNamespace" });

export interface Service {
  /** Message that contains the service type and service labels of this service if it is a basic service. Documentation and examples here (https://cloud.google.com/stackdriver/docs/solutions/slo-monitoring/api/api-structures#basic-svc-w-basic-sli). */
  basicService?: BasicService;
  /** Type used for Cloud Endpoints services. */
  cloudEndpoints?: CloudEndpoints;
  /** Name used for UI elements listing this Service. */
  displayName?: string;
  /** Type used for canonical services scoped to an Istio mesh. Metrics for Istio are documented here (https://istio.io/latest/docs/reference/config/metrics/) */
  istioCanonicalService?: IstioCanonicalService;
  /** Configuration for how to query telemetry on a Service. */
  telemetry?: Telemetry;
  /** Custom service type. */
  custom?: Custom;
  /** Labels which have been used to annotate the service. Label keys must start with a letter. Label keys and values may contain lowercase letters, numbers, underscores, and dashes. Label keys and values have a maximum length of 63 characters, and must be less than 128 bytes in size. Up to 64 label entries may be stored. For labels which do not have a semantic value, the empty string may be supplied for the label value. */
  userLabels?: Record<string, string>;
  /** Identifier. Resource name for this Service. The format is: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID] */
  name?: string;
  /** Type used for Cloud Run services. */
  cloudRun?: CloudRun;
  /** Type used for GKE Workloads. */
  gkeWorkload?: GkeWorkload;
  /** Type used for Istio services scoped to an Istio mesh. */
  meshIstio?: MeshIstio;
  /** Type used for GKE Namespaces. */
  gkeNamespace?: GkeNamespace;
  /** Type used for GKE Services (the Kubernetes concept of a service). */
  gkeService?: GkeService;
  /** Type used for App Engine services. */
  appEngine?: AppEngine;
  /** Type used for Istio services that live in a Kubernetes cluster. */
  clusterIstio?: ClusterIstio;
}

export const Service: Schema.Schema<Service> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    basicService: Schema.optional(BasicService),
    cloudEndpoints: Schema.optional(CloudEndpoints),
    displayName: Schema.optional(Schema.String),
    istioCanonicalService: Schema.optional(IstioCanonicalService),
    telemetry: Schema.optional(Telemetry),
    custom: Schema.optional(Custom),
    userLabels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    cloudRun: Schema.optional(CloudRun),
    gkeWorkload: Schema.optional(GkeWorkload),
    meshIstio: Schema.optional(MeshIstio),
    gkeNamespace: Schema.optional(GkeNamespace),
    gkeService: Schema.optional(GkeService),
    appEngine: Schema.optional(AppEngine),
    clusterIstio: Schema.optional(ClusterIstio),
  }).annotate({ identifier: "Service" });

export interface JsonPathMatcher {
  /** JSONPath within the response output pointing to the expected ContentMatcher::content to match against. */
  jsonPath?: string;
  /** The type of JSONPath match that will be applied to the JSON output (ContentMatcher.content) */
  jsonMatcher?:
    | "JSON_PATH_MATCHER_OPTION_UNSPECIFIED"
    | "EXACT_MATCH"
    | "REGEX_MATCH"
    | (string & {});
}

export const JsonPathMatcher: Schema.Schema<JsonPathMatcher> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jsonPath: Schema.optional(Schema.String),
    jsonMatcher: Schema.optional(Schema.String),
  }).annotate({ identifier: "JsonPathMatcher" });

export interface ContentMatcher {
  /** String, regex or JSON content to match. Maximum 1024 bytes. An empty content string indicates no content matching is to be performed. */
  content?: string;
  /** The type of content matcher that will be applied to the server output, compared to the content string when the check is run. */
  matcher?:
    | "CONTENT_MATCHER_OPTION_UNSPECIFIED"
    | "CONTAINS_STRING"
    | "NOT_CONTAINS_STRING"
    | "MATCHES_REGEX"
    | "NOT_MATCHES_REGEX"
    | "MATCHES_JSON_PATH"
    | "NOT_MATCHES_JSON_PATH"
    | (string & {});
  /** Matcher information for MATCHES_JSON_PATH and NOT_MATCHES_JSON_PATH */
  jsonPathMatcher?: JsonPathMatcher;
}

export const ContentMatcher: Schema.Schema<ContentMatcher> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    content: Schema.optional(Schema.String),
    matcher: Schema.optional(Schema.String),
    jsonPathMatcher: Schema.optional(JsonPathMatcher),
  }).annotate({ identifier: "ContentMatcher" });

export interface UptimeCheckIp {
  /** A more specific location within the region that typically encodes a particular city/town/metro (and its containing state/province or country) within the broader umbrella region category. */
  location?: string;
  /** A broad region category in which the IP address is located. */
  region?:
    | "REGION_UNSPECIFIED"
    | "USA"
    | "EUROPE"
    | "SOUTH_AMERICA"
    | "ASIA_PACIFIC"
    | "USA_OREGON"
    | "USA_IOWA"
    | "USA_VIRGINIA"
    | (string & {});
  /** The IP address from which the Uptime check originates. This is a fully specified IP address (not an IP address range). Most IP addresses, as of this publication, are in IPv4 format; however, one should not rely on the IP addresses being in IPv4 format indefinitely, and should support interpreting this field in either IPv4 or IPv6 format. */
  ipAddress?: string;
}

export const UptimeCheckIp: Schema.Schema<UptimeCheckIp> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    region: Schema.optional(Schema.String),
    ipAddress: Schema.optional(Schema.String),
  }).annotate({ identifier: "UptimeCheckIp" });

export interface BasicAuthentication {
  /** The password to use when authenticating with the HTTP server. */
  password?: string;
  /** The username to use when authenticating with the HTTP server. */
  username?: string;
}

export const BasicAuthentication: Schema.Schema<BasicAuthentication> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    password: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
  }).annotate({ identifier: "BasicAuthentication" });

export interface ServiceAgentAuthentication {
  /** Type of authentication. */
  type?:
    | "SERVICE_AGENT_AUTHENTICATION_TYPE_UNSPECIFIED"
    | "OIDC_TOKEN"
    | (string & {});
}

export const ServiceAgentAuthentication: Schema.Schema<ServiceAgentAuthentication> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServiceAgentAuthentication" });

export interface ResponseStatusCode {
  /** A status code to accept. */
  statusValue?: number;
  /** A class of status codes to accept. */
  statusClass?:
    | "STATUS_CLASS_UNSPECIFIED"
    | "STATUS_CLASS_1XX"
    | "STATUS_CLASS_2XX"
    | "STATUS_CLASS_3XX"
    | "STATUS_CLASS_4XX"
    | "STATUS_CLASS_5XX"
    | "STATUS_CLASS_ANY"
    | (string & {});
}

export const ResponseStatusCode: Schema.Schema<ResponseStatusCode> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    statusValue: Schema.optional(Schema.Number),
    statusClass: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResponseStatusCode" });

export interface HttpCheck {
  /** Boolean specifying whether to encrypt the header information. Encryption should be specified for any headers related to authentication that you do not wish to be seen when retrieving the configuration. The server will be responsible for encrypting the headers. On Get/List calls, if mask_headers is set to true then the headers will be obscured with ******. */
  maskHeaders?: boolean;
  /** Contains information needed to add pings to an HTTP check. */
  pingConfig?: PingConfig;
  /** The authentication information. Optional when creating an HTTP check; defaults to empty. Do not set both auth_method and auth_info. */
  authInfo?: BasicAuthentication;
  /** If true, use HTTPS instead of HTTP to run the check. */
  useSsl?: boolean;
  /** The HTTP request method to use for the check. If set to METHOD_UNSPECIFIED then request_method defaults to GET. */
  requestMethod?: "METHOD_UNSPECIFIED" | "GET" | "POST" | (string & {});
  /** Boolean specifying whether to include SSL certificate validation as a part of the Uptime check. Only applies to checks where monitored_resource is set to uptime_url. If use_ssl is false, setting validate_ssl to true has no effect. */
  validateSsl?: boolean;
  /** The request body associated with the HTTP POST request. If content_type is URL_ENCODED, the body passed in must be URL-encoded. Users can provide a Content-Length header via the headers field or the API will do so. If the request_method is GET and body is not empty, the API will return an error. The maximum byte size is 1 megabyte.Note: If client libraries aren't used (which performs the conversion automatically) base64 encode your body data since the field is of bytes type. */
  body?: string;
  /** If specified, Uptime will generate and attach an OIDC JWT token for the Monitoring service agent service account as an Authorization header in the HTTP request when probing. */
  serviceAgentAuthentication?: ServiceAgentAuthentication;
  /** The list of headers to send as part of the Uptime check request. If two headers have the same key and different values, they should be entered as a single header, with the value being a comma-separated list of all the desired values as described at https://www.w3.org/Protocols/rfc2616/rfc2616.txt (page 31). Entering two separate headers with the same key in a Create call will cause the first to be overwritten by the second. The maximum number of headers allowed is 100. */
  headers?: Record<string, string>;
  /** Optional (defaults to "/"). The path to the page against which to run the check. Will be combined with the host (specified within the monitored_resource) and port to construct the full URL. If the provided path does not begin with "/", a "/" will be prepended automatically. */
  path?: string;
  /** If present, the check will only pass if the HTTP response status code is in this set of status codes. If empty, the HTTP status code will only pass if the HTTP status code is 200-299. */
  acceptedResponseStatusCodes?: ReadonlyArray<ResponseStatusCode>;
  /** A user provided content type header to use for the check. The invalid configurations outlined in the content_type field apply to custom_content_type, as well as the following: 1. content_type is URL_ENCODED and custom_content_type is set. 2. content_type is USER_PROVIDED and custom_content_type is not set. */
  customContentType?: string;
  /** Optional (defaults to 80 when use_ssl is false, and 443 when use_ssl is true). The TCP port on the HTTP server against which to run the check. Will be combined with host (specified within the monitored_resource) and path to construct the full URL. */
  port?: number;
  /** The content type header to use for the check. The following configurations result in errors: 1. Content type is specified in both the headers field and the content_type field. 2. Request method is GET and content_type is not TYPE_UNSPECIFIED 3. Request method is POST and content_type is TYPE_UNSPECIFIED. 4. Request method is POST and a "Content-Type" header is provided via headers field. The content_type field should be used instead. */
  contentType?:
    | "TYPE_UNSPECIFIED"
    | "URL_ENCODED"
    | "USER_PROVIDED"
    | (string & {});
}

export const HttpCheck: Schema.Schema<HttpCheck> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maskHeaders: Schema.optional(Schema.Boolean),
    pingConfig: Schema.optional(PingConfig),
    authInfo: Schema.optional(BasicAuthentication),
    useSsl: Schema.optional(Schema.Boolean),
    requestMethod: Schema.optional(Schema.String),
    validateSsl: Schema.optional(Schema.Boolean),
    body: Schema.optional(Schema.String),
    serviceAgentAuthentication: Schema.optional(ServiceAgentAuthentication),
    headers: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    path: Schema.optional(Schema.String),
    acceptedResponseStatusCodes: Schema.optional(
      Schema.Array(ResponseStatusCode),
    ),
    customContentType: Schema.optional(Schema.String),
    port: Schema.optional(Schema.Number),
    contentType: Schema.optional(Schema.String),
  }).annotate({ identifier: "HttpCheck" });

export interface NotificationChannelDescriptor {
  /** The type of notification channel, such as "email" and "sms". To view the full list of channels, see Channel descriptors (https://cloud.google.com/monitoring/alerts/using-channels-api#ncd). Notification channel types are globally unique. */
  type?: string;
  /** The product launch stage for channels of this type. */
  launchStage?:
    | "LAUNCH_STAGE_UNSPECIFIED"
    | "UNIMPLEMENTED"
    | "PRELAUNCH"
    | "EARLY_ACCESS"
    | "ALPHA"
    | "BETA"
    | "GA"
    | "DEPRECATED"
    | (string & {});
  /** The full REST resource name for this descriptor. The format is: projects/[PROJECT_ID_OR_NUMBER]/notificationChannelDescriptors/[TYPE] In the above, [TYPE] is the value of the type field. */
  name?: string;
  /** A human-readable description of the notification channel type. The description may include a description of the properties of the channel and pointers to external documentation. */
  description?: string;
  /** The set of labels that must be defined to identify a particular channel of the corresponding type. Each label includes a description for how that field should be populated. */
  labels?: ReadonlyArray<LabelDescriptor>;
  /** The tiers that support this notification channel; the project service tier must be one of the supported_tiers. */
  supportedTiers?: ReadonlyArray<
    | "SERVICE_TIER_UNSPECIFIED"
    | "SERVICE_TIER_BASIC"
    | "SERVICE_TIER_PREMIUM"
    | (string & {})
  >;
  /** A human-readable name for the notification channel type. This form of the name is suitable for a user interface. */
  displayName?: string;
}

export const NotificationChannelDescriptor: Schema.Schema<NotificationChannelDescriptor> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    launchStage: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Array(LabelDescriptor)),
    supportedTiers: Schema.optional(Schema.Array(Schema.String)),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "NotificationChannelDescriptor" });

export interface ListNotificationChannelsResponse {
  /** If not empty, indicates that there may be more results that match the request. Use the value in the page_token field in a subsequent request to fetch the next set of results. If empty, all results have been returned. */
  nextPageToken?: string;
  /** The notification channels defined for the specified project. */
  notificationChannels?: ReadonlyArray<NotificationChannel>;
  /** The total number of notification channels in all pages. This number is only an estimate, and may change in subsequent pages. https://aip.dev/158 */
  totalSize?: number;
}

export const ListNotificationChannelsResponse: Schema.Schema<ListNotificationChannelsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    notificationChannels: Schema.optional(Schema.Array(NotificationChannel)),
    totalSize: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ListNotificationChannelsResponse" });

export interface CloudFunctionV2Target {
  /** Required. Fully qualified GCFv2 resource name i.e. projects/{project}/locations/{location}/functions/{function} Required. */
  name?: string;
  /** Output only. The cloud_run_revision Monitored Resource associated with the GCFv2. The Synthetic Monitor execution results (metrics, logs, and spans) are reported against this Monitored Resource. This field is output only. */
  cloudRunRevision?: MonitoredResource;
}

export const CloudFunctionV2Target: Schema.Schema<CloudFunctionV2Target> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    cloudRunRevision: Schema.optional(MonitoredResource),
  }).annotate({ identifier: "CloudFunctionV2Target" });

export interface SyntheticMonitorTarget {
  /** Target a Synthetic Monitor GCFv2 instance. */
  cloudFunctionV2?: CloudFunctionV2Target;
}

export const SyntheticMonitorTarget: Schema.Schema<SyntheticMonitorTarget> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cloudFunctionV2: Schema.optional(CloudFunctionV2Target),
  }).annotate({ identifier: "SyntheticMonitorTarget" });

export interface Option {
  /** The option's name. For protobuf built-in options (options defined in descriptor.proto), this is the short name. For example, "map_entry". For custom options, it should be the fully-qualified name. For example, "google.api.http". */
  name?: string;
  /** The option's value packed in an Any message. If the value is a primitive, the corresponding wrapper type defined in google/protobuf/wrappers.proto should be used. If the value is an enum, it should be stored as an int32 value using the google.protobuf.Int32Value type. */
  value?: Record<string, unknown>;
}

export const Option: Schema.Schema<Option> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Option" });

export interface Field {
  /** The field type URL, without the scheme, for message or enumeration types. Example: "type.googleapis.com/google.protobuf.Timestamp". */
  typeUrl?: string;
  /** The field cardinality. */
  cardinality?:
    | "CARDINALITY_UNKNOWN"
    | "CARDINALITY_OPTIONAL"
    | "CARDINALITY_REQUIRED"
    | "CARDINALITY_REPEATED"
    | (string & {});
  /** The field name. */
  name?: string;
  /** The index of the field type in Type.oneofs, for message or enumeration types. The first type has index 1; zero means the type is not in the list. */
  oneofIndex?: number;
  /** The field JSON name. */
  jsonName?: string;
  /** The string value of the default value of this field. Proto2 syntax only. */
  defaultValue?: string;
  /** Whether to use alternative packed wire representation. */
  packed?: boolean;
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
  /** The protocol buffer options. */
  options?: ReadonlyArray<Option>;
  /** The field number. */
  number?: number;
}

export const Field: Schema.Schema<Field> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    typeUrl: Schema.optional(Schema.String),
    cardinality: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    oneofIndex: Schema.optional(Schema.Number),
    jsonName: Schema.optional(Schema.String),
    defaultValue: Schema.optional(Schema.String),
    packed: Schema.optional(Schema.Boolean),
    kind: Schema.optional(Schema.String),
    options: Schema.optional(Schema.Array(Option)),
    number: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Field" });

export interface CollectdValueError {
  /** The zero-based index in CollectdPayload.values within the parent CreateCollectdTimeSeriesRequest.collectd_payloads. */
  index?: number;
  /** Records the error status for the value. */
  error?: Status;
}

export const CollectdValueError: Schema.Schema<CollectdValueError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    index: Schema.optional(Schema.Number),
    error: Schema.optional(Status),
  }).annotate({ identifier: "CollectdValueError" });

export interface InternalChecker {
  /** The GCP project ID where the internal checker lives. Not necessary the same as the Metrics Scope project. */
  peerProjectId?: string;
  /** The current operational state of the internal checker. */
  state?: "UNSPECIFIED" | "CREATING" | "RUNNING" | (string & {});
  /** The GCP VPC network (https://cloud.google.com/vpc/docs/vpc) where the internal resource lives (ex: "default"). */
  network?: string;
  /** The GCP zone the Uptime check should egress from. Only respected for internal Uptime checks, where internal_network is specified. */
  gcpZone?: string;
  /** A unique resource name for this InternalChecker. The format is: projects/[PROJECT_ID_OR_NUMBER]/internalCheckers/[INTERNAL_CHECKER_ID] [PROJECT_ID_OR_NUMBER] is the Cloud Monitoring Metrics Scope project for the Uptime check config associated with the internal checker. */
  name?: string;
  /** The checker's human-readable name. The display name should be unique within a Cloud Monitoring Metrics Scope in order to make it easier to identify; however, uniqueness is not enforced. */
  displayName?: string;
}

export const InternalChecker: Schema.Schema<InternalChecker> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    peerProjectId: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    network: Schema.optional(Schema.String),
    gcpZone: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "InternalChecker" });

export interface ResourceGroup {
  /** The group of resources being monitored. Should be only the [GROUP_ID], and not the full-path projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID]. */
  groupId?: string;
  /** The resource type of the group members. */
  resourceType?:
    | "RESOURCE_TYPE_UNSPECIFIED"
    | "INSTANCE"
    | "AWS_ELB_LOAD_BALANCER"
    | (string & {});
}

export const ResourceGroup: Schema.Schema<ResourceGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groupId: Schema.optional(Schema.String),
    resourceType: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResourceGroup" });

export interface UptimeCheckConfig {
  /** Contains information needed to make a TCP check. */
  tcpCheck?: TcpCheck;
  /** The content that is expected to appear in the data returned by the target server against which the check is run. Currently, only the first entry in the content_matchers list is supported, and additional entries will be ignored. This field is optional and should only be specified if a content match is required as part of the/ Uptime check. */
  contentMatchers?: ReadonlyArray<ContentMatcher>;
  /** The monitored resource (https://cloud.google.com/monitoring/api/resources) associated with the configuration. The following monitored resource types are valid for this field: uptime_url, gce_instance, gae_app, aws_ec2_instance, aws_elb_load_balancer k8s_service servicedirectory_service cloud_run_revision */
  monitoredResource?: MonitoredResource;
  /** To specify whether to log the results of failed probes to Cloud Logging. */
  logCheckFailures?: boolean;
  /** The maximum amount of time to wait for the request to complete (must be between 1 and 60 seconds). Required. */
  timeout?: string;
  /** A human-friendly name for the Uptime check configuration. The display name should be unique within a Cloud Monitoring Workspace in order to make it easier to identify; however, uniqueness is not enforced. Required. */
  displayName?: string;
  /** If this is true, then checks are made only from the 'internal_checkers'. If it is false, then checks are made only from the 'selected_regions'. It is an error to provide 'selected_regions' when is_internal is true, or to provide 'internal_checkers' when is_internal is false. */
  isInternal?: boolean;
  /** The internal checkers that this check will egress from. If is_internal is true and this list is empty, the check will egress from all the InternalCheckers configured for the project that owns this UptimeCheckConfig. */
  internalCheckers?: ReadonlyArray<InternalChecker>;
  /** The group resource associated with the configuration. */
  resourceGroup?: ResourceGroup;
  /** The type of checkers to use to execute the Uptime check. */
  checkerType?:
    | "CHECKER_TYPE_UNSPECIFIED"
    | "STATIC_IP_CHECKERS"
    | "VPC_CHECKERS"
    | (string & {});
  /** The list of regions from which the check will be run. Some regions contain one location, and others contain more than one. If this field is specified, enough regions must be provided to include a minimum of 3 locations. Not specifying this field will result in Uptime checks running from all available regions. */
  selectedRegions?: ReadonlyArray<
    | "REGION_UNSPECIFIED"
    | "USA"
    | "EUROPE"
    | "SOUTH_AMERICA"
    | "ASIA_PACIFIC"
    | "USA_OREGON"
    | "USA_IOWA"
    | "USA_VIRGINIA"
    | (string & {})
  >;
  /** Contains information needed to make an HTTP or HTTPS check. */
  httpCheck?: HttpCheck;
  /** Specifies a Synthetic Monitor to invoke. */
  syntheticMonitor?: SyntheticMonitorTarget;
  /** Identifier. A unique resource name for this Uptime check configuration. The format is: projects/[PROJECT_ID_OR_NUMBER]/uptimeCheckConfigs/[UPTIME_CHECK_ID] [PROJECT_ID_OR_NUMBER] is the Workspace host project associated with the Uptime check.This field should be omitted when creating the Uptime check configuration; on create, the resource name is assigned by the server and included in the response. */
  name?: string;
  /** User-supplied key/value data to be used for organizing and identifying the UptimeCheckConfig objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter. */
  userLabels?: Record<string, string>;
  /** How often, in seconds, the Uptime check is performed. Currently, the only supported values are 60s (1 minute), 300s (5 minutes), 600s (10 minutes), and 900s (15 minutes). Optional, defaults to 60s. */
  period?: string;
  /** Whether the check is disabled or not. */
  disabled?: boolean;
}

export const UptimeCheckConfig: Schema.Schema<UptimeCheckConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tcpCheck: Schema.optional(TcpCheck),
    contentMatchers: Schema.optional(Schema.Array(ContentMatcher)),
    monitoredResource: Schema.optional(MonitoredResource),
    logCheckFailures: Schema.optional(Schema.Boolean),
    timeout: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    isInternal: Schema.optional(Schema.Boolean),
    internalCheckers: Schema.optional(Schema.Array(InternalChecker)),
    resourceGroup: Schema.optional(ResourceGroup),
    checkerType: Schema.optional(Schema.String),
    selectedRegions: Schema.optional(Schema.Array(Schema.String)),
    httpCheck: Schema.optional(HttpCheck),
    syntheticMonitor: Schema.optional(SyntheticMonitorTarget),
    name: Schema.optional(Schema.String),
    userLabels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    period: Schema.optional(Schema.String),
    disabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "UptimeCheckConfig" });

export interface QueryTimeSeriesRequest {
  /** If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call. */
  pageToken?: string;
  /** Required. The query in the Monitoring Query Language (https://cloud.google.com/monitoring/mql/reference) format. The default time zone is in UTC. */
  query?: string;
  /** A positive number that is the maximum number of time_series_data to return. */
  pageSize?: number;
}

export const QueryTimeSeriesRequest: Schema.Schema<QueryTimeSeriesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String),
    query: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }).annotate({ identifier: "QueryTimeSeriesRequest" });

export interface CollectdPayloadError {
  /** The zero-based index in CreateCollectdTimeSeriesRequest.collectd_payloads. */
  index?: number;
  /** Records the error status for values that were not written due to an error.Failed payloads for which nothing is written will not include partial value errors. */
  valueErrors?: ReadonlyArray<CollectdValueError>;
  /** Records the error status for the payload. If this field is present, the partial errors for nested values won't be populated. */
  error?: Status;
}

export const CollectdPayloadError: Schema.Schema<CollectdPayloadError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    index: Schema.optional(Schema.Number),
    valueErrors: Schema.optional(Schema.Array(CollectdValueError)),
    error: Schema.optional(Status),
  }).annotate({ identifier: "CollectdPayloadError" });

export interface CollectdValue {
  /** The data source for the collectd value. For example, there are two data sources for network measurements: "rx" and "tx". */
  dataSourceName?: string;
  /** The measurement value. */
  value?: TypedValue;
  /** The type of measurement. */
  dataSourceType?:
    | "UNSPECIFIED_DATA_SOURCE_TYPE"
    | "GAUGE"
    | "COUNTER"
    | "DERIVE"
    | "ABSOLUTE"
    | (string & {});
}

export const CollectdValue: Schema.Schema<CollectdValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataSourceName: Schema.optional(Schema.String),
    value: Schema.optional(TypedValue),
    dataSourceType: Schema.optional(Schema.String),
  }).annotate({ identifier: "CollectdValue" });

export interface CollectdPayload {
  /** The measurement type. Example: "memory". */
  type?: string;
  /** The start time of the interval. */
  startTime?: string;
  /** The end time of the interval. */
  endTime?: string;
  /** The instance name of the plugin Example: "hdcl". */
  pluginInstance?: string;
  /** The measured values during this time interval. Each value must have a different data_source_name. */
  values?: ReadonlyArray<CollectdValue>;
  /** The measurement type instance. Example: "used". */
  typeInstance?: string;
  /** The name of the plugin. Example: "disk". */
  plugin?: string;
  /** The measurement metadata. Example: "process_id" -> 12345 */
  metadata?: Record<string, TypedValue>;
}

export const CollectdPayload: Schema.Schema<CollectdPayload> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    pluginInstance: Schema.optional(Schema.String),
    values: Schema.optional(Schema.Array(CollectdValue)),
    typeInstance: Schema.optional(Schema.String),
    plugin: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, TypedValue)),
  }).annotate({ identifier: "CollectdPayload" });

export interface CreateCollectdTimeSeriesRequest {
  /** The monitored resource associated with the time series. */
  resource?: MonitoredResource;
  /** The collectd payloads representing the time series data. You must not include more than a single point for each time series, so no two payloads can have the same values for all of the fields plugin, plugin_instance, type, and type_instance. */
  collectdPayloads?: ReadonlyArray<CollectdPayload>;
  /** The version of collectd that collected the data. Example: "5.3.0-192.el6". */
  collectdVersion?: string;
}

export const CreateCollectdTimeSeriesRequest: Schema.Schema<CreateCollectdTimeSeriesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(MonitoredResource),
    collectdPayloads: Schema.optional(Schema.Array(CollectdPayload)),
    collectdVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "CreateCollectdTimeSeriesRequest" });

export interface PointData {
  /** The time interval associated with the point. */
  timeInterval?: TimeInterval;
  /** The values that make up the point. */
  values?: ReadonlyArray<TypedValue>;
}

export const PointData: Schema.Schema<PointData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    timeInterval: Schema.optional(TimeInterval),
    values: Schema.optional(Schema.Array(TypedValue)),
  }).annotate({ identifier: "PointData" });

export interface ListTimeSeriesResponse {
  /** Query execution errors that may have caused the time series data returned to be incomplete. */
  executionErrors?: ReadonlyArray<Status>;
  /** One or more time series that match the filter included in the request. */
  timeSeries?: ReadonlyArray<TimeSeries>;
  /** The unit in which all time_series point values are reported. unit follows the UCUM format for units as seen in https://unitsofmeasure.org/ucum.html. If different time_series have different units (for example, because they come from different metric types, or a unit is absent), then unit will be "{not_a_unit}". */
  unit?: string;
  /** If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method. */
  nextPageToken?: string;
  /** Cloud regions that were unreachable which may have caused incomplete data to be returned. */
  unreachable?: ReadonlyArray<string>;
}

export const ListTimeSeriesResponse: Schema.Schema<ListTimeSeriesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    executionErrors: Schema.optional(Schema.Array(Status)),
    timeSeries: Schema.optional(Schema.Array(TimeSeries)),
    unit: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListTimeSeriesResponse" });

export interface SpanContext {
  /** The resource name of the span. The format is: projects/[PROJECT_ID_OR_NUMBER]/traces/[TRACE_ID]/spans/[SPAN_ID] [TRACE_ID] is a unique identifier for a trace within a project; it is a 32-character hexadecimal encoding of a 16-byte array.[SPAN_ID] is a unique identifier for a span within a trace; it is a 16-character hexadecimal encoding of an 8-byte array. */
  spanName?: string;
}

export const SpanContext: Schema.Schema<SpanContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    spanName: Schema.optional(Schema.String),
  }).annotate({ identifier: "SpanContext" });

export interface LabelValue {
  /** A string label value. */
  stringValue?: string;
  /** A bool label value. */
  boolValue?: boolean;
  /** An int64 label value. */
  int64Value?: string;
}

export const LabelValue: Schema.Schema<LabelValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stringValue: Schema.optional(Schema.String),
    boolValue: Schema.optional(Schema.Boolean),
    int64Value: Schema.optional(Schema.String),
  }).annotate({ identifier: "LabelValue" });

export interface TimeSeriesData {
  /** The values of the labels in the time series identifier, given in the same order as the label_descriptors field of the TimeSeriesDescriptor associated with this object. Each value must have a value of the type given in the corresponding entry of label_descriptors. */
  labelValues?: ReadonlyArray<LabelValue>;
  /** The points in the time series. */
  pointData?: ReadonlyArray<PointData>;
}

export const TimeSeriesData: Schema.Schema<TimeSeriesData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labelValues: Schema.optional(Schema.Array(LabelValue)),
    pointData: Schema.optional(Schema.Array(PointData)),
  }).annotate({ identifier: "TimeSeriesData" });

export interface ValueDescriptor {
  /** The value stream kind. */
  metricKind?:
    | "METRIC_KIND_UNSPECIFIED"
    | "GAUGE"
    | "DELTA"
    | "CUMULATIVE"
    | (string & {});
  /** The value type. */
  valueType?:
    | "VALUE_TYPE_UNSPECIFIED"
    | "BOOL"
    | "INT64"
    | "DOUBLE"
    | "STRING"
    | "DISTRIBUTION"
    | "MONEY"
    | (string & {});
  /** The value key. */
  key?: string;
  /** The unit in which time_series point values are reported. unit follows the UCUM format for units as seen in https://unitsofmeasure.org/ucum.html. unit is only valid if value_type is INTEGER, DOUBLE, DISTRIBUTION. */
  unit?: string;
}

export const ValueDescriptor: Schema.Schema<ValueDescriptor> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metricKind: Schema.optional(Schema.String),
    valueType: Schema.optional(Schema.String),
    key: Schema.optional(Schema.String),
    unit: Schema.optional(Schema.String),
  }).annotate({ identifier: "ValueDescriptor" });

export interface TimeSeriesDescriptor {
  /** Descriptors for the labels. */
  labelDescriptors?: ReadonlyArray<LabelDescriptor>;
  /** Descriptors for the point data value columns. */
  pointDescriptors?: ReadonlyArray<ValueDescriptor>;
}

export const TimeSeriesDescriptor: Schema.Schema<TimeSeriesDescriptor> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labelDescriptors: Schema.optional(Schema.Array(LabelDescriptor)),
    pointDescriptors: Schema.optional(Schema.Array(ValueDescriptor)),
  }).annotate({ identifier: "TimeSeriesDescriptor" });

export interface QueryTimeSeriesResponse {
  /** The time series data. */
  timeSeriesData?: ReadonlyArray<TimeSeriesData>;
  /** Query execution errors that may have caused the time series data returned to be incomplete. The available data will be available in the response. */
  partialErrors?: ReadonlyArray<Status>;
  /** The descriptor for the time series data. */
  timeSeriesDescriptor?: TimeSeriesDescriptor;
  /** If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method. */
  nextPageToken?: string;
}

export const QueryTimeSeriesResponse: Schema.Schema<QueryTimeSeriesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    timeSeriesData: Schema.optional(Schema.Array(TimeSeriesData)),
    partialErrors: Schema.optional(Schema.Array(Status)),
    timeSeriesDescriptor: Schema.optional(TimeSeriesDescriptor),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "QueryTimeSeriesResponse" });

export interface OperationMetadata {
  /** The time when the operation result was last updated. */
  updateTime?: string;
  /** Current state of the batch operation. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATED"
    | "RUNNING"
    | "DONE"
    | "CANCELLED"
    | (string & {});
  /** The time when the batch request was received. */
  createTime?: string;
}

export const OperationMetadata: Schema.Schema<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationMetadata" });

export interface PolicySnapshot {
  /** The name of the alert policy resource. In the form of "projects/PROJECT_ID_OR_NUMBER/alertPolicies/ALERT_POLICY_ID". */
  name?: string;
  /** The severity of the alert policy. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "CRITICAL"
    | "ERROR"
    | "WARNING"
    | (string & {});
  /** The display name of the alert policy. */
  displayName?: string;
  /** The user labels for the alert policy. */
  userLabels?: Record<string, string>;
}

export const PolicySnapshot: Schema.Schema<PolicySnapshot> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    userLabels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "PolicySnapshot" });

export interface ListServiceLevelObjectivesResponse {
  /** The ServiceLevelObjectives matching the specified filter. */
  serviceLevelObjectives?: ReadonlyArray<ServiceLevelObjective>;
  /** If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method. */
  nextPageToken?: string;
}

export const ListServiceLevelObjectivesResponse: Schema.Schema<ListServiceLevelObjectivesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceLevelObjectives: Schema.optional(
      Schema.Array(ServiceLevelObjective),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListServiceLevelObjectivesResponse" });

export interface Alert {
  /** The metric type and any metric labels preserved from the incident's generating condition. */
  metric?: Metric;
  /** Identifier. The name of the alert.The format is: projects/[PROJECT_ID_OR_NUMBER]/alerts/[ALERT_ID] The [ALERT_ID] is a system-assigned unique identifier for the alert. */
  name?: string;
  /** The time when the alert was closed. */
  closeTime?: string;
  /** The metadata of the monitored resource. */
  metadata?: MonitoredResourceMetadata;
  /** The snapshot of the alert policy that generated this alert. */
  policy?: PolicySnapshot;
  /** The log information associated with the alert. This field is only populated for log-based alerts. */
  log?: LogMetadata;
  /** Output only. The current state of the alert. */
  state?: "STATE_UNSPECIFIED" | "OPEN" | "CLOSED" | (string & {});
  /** The time when the alert was opened. */
  openTime?: string;
  /** The monitored resource type and any monitored resource labels preserved from the incident's generating condition. */
  resource?: MonitoredResource;
}

export const Alert: Schema.Schema<Alert> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metric: Schema.optional(Metric),
    name: Schema.optional(Schema.String),
    closeTime: Schema.optional(Schema.String),
    metadata: Schema.optional(MonitoredResourceMetadata),
    policy: Schema.optional(PolicySnapshot),
    log: Schema.optional(LogMetadata),
    state: Schema.optional(Schema.String),
    openTime: Schema.optional(Schema.String),
    resource: Schema.optional(MonitoredResource),
  }).annotate({ identifier: "Alert" });

export interface ListAlertsResponse {
  /** The list of alerts. */
  alerts?: ReadonlyArray<Alert>;
  /** The estimated total number of matching results for this query. */
  totalSize?: number;
  /** If not empty, indicates that there may be more results that match the request. Use the value in the page_token field in a subsequent request to fetch the next set of results. The token is encrypted and only guaranteed to return correct results for 72 hours after it is created. If empty, all results have been returned. */
  nextPageToken?: string;
}

export const ListAlertsResponse: Schema.Schema<ListAlertsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    alerts: Schema.optional(Schema.Array(Alert)),
    totalSize: Schema.optional(Schema.Number),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAlertsResponse" });

export interface ListNotificationChannelDescriptorsResponse {
  /** The monitored resource descriptors supported for the specified project, optionally filtered. */
  channelDescriptors?: ReadonlyArray<NotificationChannelDescriptor>;
  /** If not empty, indicates that there may be more results that match the request. Use the value in the page_token field in a subsequent request to fetch the next set of results. If empty, all results have been returned. */
  nextPageToken?: string;
}

export const ListNotificationChannelDescriptorsResponse: Schema.Schema<ListNotificationChannelDescriptorsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    channelDescriptors: Schema.optional(
      Schema.Array(NotificationChannelDescriptor),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListNotificationChannelDescriptorsResponse" });

export interface Monitoring_Error {
  /** The number of points that couldn't be written because of status. */
  pointCount?: number;
  /** The status of the requested write operation. */
  status?: Status;
}

export const Monitoring_Error: Schema.Schema<Monitoring_Error> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pointCount: Schema.optional(Schema.Number),
    status: Schema.optional(Status),
  }).annotate({ identifier: "Monitoring_Error" });

export interface ListAlertPoliciesResponse {
  /** The total number of alert policies in all pages. This number is only an estimate, and may change in subsequent pages. https://aip.dev/158 */
  totalSize?: number;
  /** The returned alert policies. */
  alertPolicies?: ReadonlyArray<AlertPolicy>;
  /** If there might be more results than were returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method. */
  nextPageToken?: string;
}

export const ListAlertPoliciesResponse: Schema.Schema<ListAlertPoliciesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalSize: Schema.optional(Schema.Number),
    alertPolicies: Schema.optional(Schema.Array(AlertPolicy)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAlertPoliciesResponse" });

export interface ListServicesResponse {
  /** If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method. */
  nextPageToken?: string;
  /** The Services matching the specified filter. */
  services?: ReadonlyArray<Service>;
}

export const ListServicesResponse: Schema.Schema<ListServicesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    services: Schema.optional(Schema.Array(Service)),
  }).annotate({ identifier: "ListServicesResponse" });

export interface CreateTimeSeriesSummary {
  /** The number of points that failed to be written. Order is not guaranteed. */
  errors?: ReadonlyArray<Monitoring_Error>;
  /** The number of points in the request. */
  totalPointCount?: number;
  /** The number of points that were successfully written. */
  successPointCount?: number;
}

export const CreateTimeSeriesSummary: Schema.Schema<CreateTimeSeriesSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(Schema.Array(Monitoring_Error)),
    totalPointCount: Schema.optional(Schema.Number),
    successPointCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "CreateTimeSeriesSummary" });

export interface CreateCollectdTimeSeriesResponse {
  /** Records the error status for points that were not written due to an error in the request.Failed requests for which nothing is written will return an error response instead. Requests where data points were rejected by the backend will set summary instead. */
  payloadErrors?: ReadonlyArray<CollectdPayloadError>;
  /** Aggregate statistics from writing the payloads. This field is omitted if all points were successfully written, so that the response is empty. This is for backwards compatibility with clients that log errors on any non-empty response. */
  summary?: CreateTimeSeriesSummary;
}

export const CreateCollectdTimeSeriesResponse: Schema.Schema<CreateCollectdTimeSeriesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    payloadErrors: Schema.optional(Schema.Array(CollectdPayloadError)),
    summary: Schema.optional(CreateTimeSeriesSummary),
  }).annotate({ identifier: "CreateCollectdTimeSeriesResponse" });

export interface ListUptimeCheckIpsResponse {
  /** The returned list of IP addresses (including region and location) that the checkers run from. */
  uptimeCheckIps?: ReadonlyArray<UptimeCheckIp>;
  /** This field represents the pagination token to retrieve the next page of results. If the value is empty, it means no further results for the request. To retrieve the next page of results, the value of the next_page_token is passed to the subsequent List method call (in the request message's page_token field). NOTE: this field is not yet implemented */
  nextPageToken?: string;
}

export const ListUptimeCheckIpsResponse: Schema.Schema<ListUptimeCheckIpsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uptimeCheckIps: Schema.optional(Schema.Array(UptimeCheckIp)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListUptimeCheckIpsResponse" });

export interface SourceContext {
  /** The path-qualified name of the .proto file that contained the associated protobuf element. For example: "google/protobuf/source_context.proto". */
  fileName?: string;
}

export const SourceContext: Schema.Schema<SourceContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileName: Schema.optional(Schema.String),
  }).annotate({ identifier: "SourceContext" });

export interface VerifyNotificationChannelRequest {
  /** Required. The verification code that was delivered to the channel as a result of invoking the SendNotificationChannelVerificationCode API method or that was retrieved from a verified channel via GetNotificationChannelVerificationCode. For example, one might have "G-123456" or "TKNZGhhd2EyN3I1MnRnMjRv" (in general, one is only guaranteed that the code is valid UTF-8; one should not make any assumptions regarding the structure or format of the code). */
  code?: string;
}

export const VerifyNotificationChannelRequest: Schema.Schema<VerifyNotificationChannelRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
  }).annotate({ identifier: "VerifyNotificationChannelRequest" });

export interface Type {
  /** The list of types appearing in oneof definitions in this type. */
  oneofs?: ReadonlyArray<string>;
  /** The source edition string, only valid when syntax is SYNTAX_EDITIONS. */
  edition?: string;
  /** The list of fields. */
  fields?: ReadonlyArray<Field>;
  /** The source syntax. */
  syntax?:
    | "SYNTAX_PROTO2"
    | "SYNTAX_PROTO3"
    | "SYNTAX_EDITIONS"
    | (string & {});
  /** The protocol buffer options. */
  options?: ReadonlyArray<Option>;
  /** The fully qualified message name. */
  name?: string;
  /** The source context. */
  sourceContext?: SourceContext;
}

export const Type: Schema.Schema<Type> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    oneofs: Schema.optional(Schema.Array(Schema.String)),
    edition: Schema.optional(Schema.String),
    fields: Schema.optional(Schema.Array(Field)),
    syntax: Schema.optional(Schema.String),
    options: Schema.optional(Schema.Array(Option)),
    name: Schema.optional(Schema.String),
    sourceContext: Schema.optional(SourceContext),
  }).annotate({ identifier: "Type" });

export interface ListSnoozesResponse {
  /** Snoozes matching this list call. */
  snoozes?: ReadonlyArray<Snooze>;
  /** Page token for repeated calls to ListSnoozes, to fetch additional pages of results. If this is empty or missing, there are no more pages. */
  nextPageToken?: string;
}

export const ListSnoozesResponse: Schema.Schema<ListSnoozesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    snoozes: Schema.optional(Schema.Array(Snooze)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListSnoozesResponse" });

export interface GetNotificationChannelVerificationCodeRequest {
  /** The desired expiration time. If specified, the API will guarantee that the returned code will not be valid after the specified timestamp; however, the API cannot guarantee that the returned code will be valid for at least as long as the requested time (the API puts an upper bound on the amount of time for which a code may be valid). If omitted, a default expiration will be used, which may be less than the max permissible expiration (so specifying an expiration may extend the code's lifetime over omitting an expiration, even though the API does impose an upper limit on the maximum expiration that is permitted). */
  expireTime?: string;
}

export const GetNotificationChannelVerificationCodeRequest: Schema.Schema<GetNotificationChannelVerificationCodeRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expireTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GetNotificationChannelVerificationCodeRequest" });

export interface ListUptimeCheckConfigsResponse {
  /** This field represents the pagination token to retrieve the next page of results. If the value is empty, it means no further results for the request. To retrieve the next page of results, the value of the next_page_token is passed to the subsequent List method call (in the request message's page_token field). */
  nextPageToken?: string;
  /** The total number of Uptime check configurations for the project, irrespective of any pagination. */
  totalSize?: number;
  /** The returned Uptime check configurations. */
  uptimeCheckConfigs?: ReadonlyArray<UptimeCheckConfig>;
}

export const ListUptimeCheckConfigsResponse: Schema.Schema<ListUptimeCheckConfigsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    totalSize: Schema.optional(Schema.Number),
    uptimeCheckConfigs: Schema.optional(Schema.Array(UptimeCheckConfig)),
  }).annotate({ identifier: "ListUptimeCheckConfigsResponse" });

export interface ListMonitoredResourceDescriptorsResponse {
  /** The monitored resource descriptors that are available to this project and that match filter, if present. */
  resourceDescriptors?: ReadonlyArray<MonitoredResourceDescriptor>;
  /** If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method. */
  nextPageToken?: string;
}

export const ListMonitoredResourceDescriptorsResponse: Schema.Schema<ListMonitoredResourceDescriptorsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceDescriptors: Schema.optional(
      Schema.Array(MonitoredResourceDescriptor),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListMonitoredResourceDescriptorsResponse" });

export interface ListGroupMembersResponse {
  /** A set of monitored resources in the group. */
  members?: ReadonlyArray<MonitoredResource>;
  /** The total number of elements matching this request. */
  totalSize?: number;
  /** If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method. */
  nextPageToken?: string;
}

export const ListGroupMembersResponse: Schema.Schema<ListGroupMembersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    members: Schema.optional(Schema.Array(MonitoredResource)),
    totalSize: Schema.optional(Schema.Number),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListGroupMembersResponse" });

export interface GetNotificationChannelVerificationCodeResponse {
  /** The verification code, which may be used to verify other channels that have an equivalent identity (i.e. other channels of the same type with the same fingerprint such as other email channels with the same email address or other sms channels with the same number). */
  code?: string;
  /** The expiration time associated with the code that was returned. If an expiration was provided in the request, this is the minimum of the requested expiration in the request and the max permitted expiration. */
  expireTime?: string;
}

export const GetNotificationChannelVerificationCodeResponse: Schema.Schema<GetNotificationChannelVerificationCodeResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
    expireTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GetNotificationChannelVerificationCodeResponse" });

// ==========================================================================
// Errors
// ==========================================================================

export class NotFound extends Schema.TaggedErrorClass<NotFound>()("NotFound", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
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
    details: Schema.optional(Schema.Array(Schema.Unknown)),
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
    details: Schema.optional(Schema.Array(Schema.Unknown)),
  },
) {}
T.applyErrorMatchers(BadRequest, [{ httpStatus: 400 }]);

export class Conflict extends Schema.TaggedErrorClass<Conflict>()("Conflict", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
}) {}
T.applyErrorMatchers(Conflict, [{ httpStatus: 409 }]);

// ==========================================================================
// Operations
// ==========================================================================

export interface ListOrganizationsTimeSeriesRequest {
  /** An Aligner describes how to bring the data points in a single time series into temporal alignment. Except for ALIGN_NONE, all alignments cause all the data points in an alignment_period to be mathematically grouped together, resulting in a single data point for each alignment_period with end timestamp at the end of the period.Not all alignment operations may be applied to all time series. The valid choices depend on the metric_kind and value_type of the original time series. Alignment can change the metric_kind or the value_type of the time series.Time series data must be aligned in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified and not equal to ALIGN_NONE and alignment_period must be specified; otherwise, an error is returned. */
  "aggregation.perSeriesAligner"?:
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
  /** The alignment_period specifies a time interval, in seconds, that is used to divide the data in all the time series into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.The value must be at least 60 seconds. If a per-series aligner other than ALIGN_NONE is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner ALIGN_NONE is specified, then this field is ignored.The maximum value of the alignment_period is 104 weeks (2 years) for charts, and 90,000 seconds (25 hours) for alerting policies. */
  "secondaryAggregation.alignmentPeriod"?: string;
  /** The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.Not all reducer operations can be applied to all time series. The valid choices depend on the metric_kind and the value_type of the original time series. Reduction can yield a time series with a different metric_kind or value_type than the input time series.Time series data must first be aligned (see per_series_aligner) in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified, and must not be ALIGN_NONE. An alignment_period must also be specified; otherwise, an error is returned. */
  "secondaryAggregation.crossSeriesReducer"?:
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
  /** Required. The end of the time interval. */
  "interval.endTime"?: string;
  /** The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.Not all reducer operations can be applied to all time series. The valid choices depend on the metric_kind and the value_type of the original time series. Reduction can yield a time series with a different metric_kind or value_type than the input time series.Time series data must first be aligned (see per_series_aligner) in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified, and must not be ALIGN_NONE. An alignment_period must also be specified; otherwise, an error is returned. */
  "aggregation.crossSeriesReducer"?:
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
  /** Unsupported: must be left blank. The points in each time series are currently returned in reverse time order (most recent to oldest). */
  orderBy?: string;
  /** The set of fields to preserve when cross_series_reducer is specified. The group_by_fields determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The cross_series_reducer is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains resource.type. Fields not specified in group_by_fields are aggregated away. If group_by_fields is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If cross_series_reducer is not defined, this field is ignored. */
  "secondaryAggregation.groupByFields"?: string[];
  /** Required. Specifies which information is returned about the time series. */
  view?: "FULL" | "HEADERS" | (string & {});
  /** Required. The project (https://cloud.google.com/monitoring/api/v3#project_name), organization or folder on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER] organizations/[ORGANIZATION_ID] folders/[FOLDER_ID] */
  name: string;
  /** An Aligner describes how to bring the data points in a single time series into temporal alignment. Except for ALIGN_NONE, all alignments cause all the data points in an alignment_period to be mathematically grouped together, resulting in a single data point for each alignment_period with end timestamp at the end of the period.Not all alignment operations may be applied to all time series. The valid choices depend on the metric_kind and value_type of the original time series. Alignment can change the metric_kind or the value_type of the time series.Time series data must be aligned in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified and not equal to ALIGN_NONE and alignment_period must be specified; otherwise, an error is returned. */
  "secondaryAggregation.perSeriesAligner"?:
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
  /** The set of fields to preserve when cross_series_reducer is specified. The group_by_fields determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The cross_series_reducer is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains resource.type. Fields not specified in group_by_fields are aggregated away. If group_by_fields is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If cross_series_reducer is not defined, this field is ignored. */
  "aggregation.groupByFields"?: string[];
  /** A positive number that is the maximum number of results to return. If page_size is empty or more than 100,000 results, the effective page_size is 100,000 results. If view is set to FULL, this is the maximum number of Points returned. If view is set to HEADERS, this is the maximum number of TimeSeries returned. */
  pageSize?: number;
  /** If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call. */
  pageToken?: string;
  /** Optional. The beginning of the time interval. The default value for the start time is the end time. The start time must not be later than the end time. */
  "interval.startTime"?: string;
  /** Required. A monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) that specifies which time series should be returned. The filter must specify a single metric type, and can additionally specify metric labels and other information. For example: metric.type = "compute.googleapis.com/instance/cpu/usage_time" AND metric.labels.instance_name = "my-instance-name" */
  filter?: string;
  /** The alignment_period specifies a time interval, in seconds, that is used to divide the data in all the time series into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.The value must be at least 60 seconds. If a per-series aligner other than ALIGN_NONE is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner ALIGN_NONE is specified, then this field is ignored.The maximum value of the alignment_period is 104 weeks (2 years) for charts, and 90,000 seconds (25 hours) for alerting policies. */
  "aggregation.alignmentPeriod"?: string;
}

export const ListOrganizationsTimeSeriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "aggregation.perSeriesAligner": Schema.optional(Schema.String).pipe(
      T.HttpQuery("aggregation.perSeriesAligner"),
    ),
    "secondaryAggregation.alignmentPeriod": Schema.optional(Schema.String).pipe(
      T.HttpQuery("secondaryAggregation.alignmentPeriod"),
    ),
    "secondaryAggregation.crossSeriesReducer": Schema.optional(
      Schema.String,
    ).pipe(T.HttpQuery("secondaryAggregation.crossSeriesReducer")),
    "interval.endTime": Schema.optional(Schema.String).pipe(
      T.HttpQuery("interval.endTime"),
    ),
    "aggregation.crossSeriesReducer": Schema.optional(Schema.String).pipe(
      T.HttpQuery("aggregation.crossSeriesReducer"),
    ),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    "secondaryAggregation.groupByFields": Schema.optional(
      Schema.Array(Schema.String),
    ).pipe(T.HttpQuery("secondaryAggregation.groupByFields")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    name: Schema.String.pipe(T.HttpPath("name")),
    "secondaryAggregation.perSeriesAligner": Schema.optional(
      Schema.String,
    ).pipe(T.HttpQuery("secondaryAggregation.perSeriesAligner")),
    "aggregation.groupByFields": Schema.optional(
      Schema.Array(Schema.String),
    ).pipe(T.HttpQuery("aggregation.groupByFields")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    "interval.startTime": Schema.optional(Schema.String).pipe(
      T.HttpQuery("interval.startTime"),
    ),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    "aggregation.alignmentPeriod": Schema.optional(Schema.String).pipe(
      T.HttpQuery("aggregation.alignmentPeriod"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}/timeSeries" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsTimeSeriesRequest>;

export type ListOrganizationsTimeSeriesResponse = ListTimeSeriesResponse;
export const ListOrganizationsTimeSeriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListTimeSeriesResponse;

export type ListOrganizationsTimeSeriesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists time series that match a filter. */
export const listOrganizationsTimeSeries: API.PaginatedOperationMethod<
  ListOrganizationsTimeSeriesRequest,
  ListOrganizationsTimeSeriesResponse,
  ListOrganizationsTimeSeriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsTimeSeriesRequest,
  output: ListOrganizationsTimeSeriesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateServicesRequest {
  /** Optional. The Service id to use for this Service. If omitted, an id will be generated instead. Must match the pattern [a-z0-9\-]+ */
  serviceId?: string;
  /** Required. Resource name (https://cloud.google.com/monitoring/api/v3#project_name) of the parent Metrics Scope. The format is: projects/[PROJECT_ID_OR_NUMBER] */
  parent: string;
  /** Request body */
  body?: Service;
}

export const CreateServicesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  serviceId: Schema.optional(Schema.String).pipe(T.HttpQuery("serviceId")),
  parent: Schema.String.pipe(T.HttpPath("parent")),
  body: Schema.optional(Service).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "v3/{+parent}/services", hasBody: true }),
  svc,
) as unknown as Schema.Schema<CreateServicesRequest>;

export type CreateServicesResponse = Service;
export const CreateServicesResponse = /*@__PURE__*/ /*#__PURE__*/ Service;

export type CreateServicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a Service. */
export const createServices: API.OperationMethod<
  CreateServicesRequest,
  CreateServicesResponse,
  CreateServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateServicesRequest,
  output: CreateServicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteServicesRequest {
  /** Required. Resource name of the Service to delete. The format is: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID] */
  name: string;
}

export const DeleteServicesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
}).pipe(
  T.Http({ method: "DELETE", path: "v3/{+name}" }),
  svc,
) as unknown as Schema.Schema<DeleteServicesRequest>;

export type DeleteServicesResponse = Empty;
export const DeleteServicesResponse = /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteServicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Soft delete this Service. */
export const deleteServices: API.OperationMethod<
  DeleteServicesRequest,
  DeleteServicesResponse,
  DeleteServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteServicesRequest,
  output: DeleteServicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchServicesRequest {
  /** Identifier. Resource name for this Service. The format is: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID] */
  name: string;
  /** A set of field paths defining which fields to use for the update. */
  updateMask?: string;
  /** Request body */
  body?: Service;
}

export const PatchServicesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
  updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
  body: Schema.optional(Service).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "PATCH", path: "v3/{+name}", hasBody: true }),
  svc,
) as unknown as Schema.Schema<PatchServicesRequest>;

export type PatchServicesResponse = Service;
export const PatchServicesResponse = /*@__PURE__*/ /*#__PURE__*/ Service;

export type PatchServicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update this Service. */
export const patchServices: API.OperationMethod<
  PatchServicesRequest,
  PatchServicesResponse,
  PatchServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchServicesRequest,
  output: PatchServicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetServicesRequest {
  /** Required. Resource name of the Service. The format is: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID] */
  name: string;
}

export const GetServicesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
}).pipe(
  T.Http({ method: "GET", path: "v3/{+name}" }),
  svc,
) as unknown as Schema.Schema<GetServicesRequest>;

export type GetServicesResponse = Service;
export const GetServicesResponse = /*@__PURE__*/ /*#__PURE__*/ Service;

export type GetServicesError = DefaultErrors | NotFound | Forbidden;

/** Get the named Service. */
export const getServices: API.OperationMethod<
  GetServicesRequest,
  GetServicesResponse,
  GetServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetServicesRequest,
  output: GetServicesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListServicesRequest {
  /** If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call. */
  pageToken?: string;
  /** Required. Resource name of the parent containing the listed services, either a project (https://cloud.google.com/monitoring/api/v3#project_name) or a Monitoring Metrics Scope. The formats are: projects/[PROJECT_ID_OR_NUMBER] workspaces/[HOST_PROJECT_ID_OR_NUMBER] */
  parent: string;
  /** A filter specifying what Services to return. The filter supports filtering on a particular service-identifier type or one of its attributes.To filter on a particular service-identifier type, the identifier_case refers to which option in the identifier field is populated. For example, the filter identifier_case = "CUSTOM" would match all services with a value for the custom field. Valid options include "CUSTOM", "APP_ENGINE", "MESH_ISTIO", and the other options listed at https://cloud.google.com/monitoring/api/ref_v3/rest/v3/services#ServiceTo filter on an attribute of a service-identifier type, apply the filter name by using the snake case of the service-identifier type and the attribute of that service-identifier type, and join the two with a period. For example, to filter by the meshUid field of the MeshIstio service-identifier type, you must filter on mesh_istio.mesh_uid = "123" to match all services with mesh UID "123". Service-identifier types and their attributes are described at https://cloud.google.com/monitoring/api/ref_v3/rest/v3/services#Service */
  filter?: string;
  /** A non-negative number that is the maximum number of results to return. When 0, use default page size. */
  pageSize?: number;
}

export const ListServicesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  parent: Schema.String.pipe(T.HttpPath("parent")),
  filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
}).pipe(
  T.Http({ method: "GET", path: "v3/{+parent}/services" }),
  svc,
) as unknown as Schema.Schema<ListServicesRequest>;

export type ListServicesResponse_Op = ListServicesResponse;
export const ListServicesResponse_Op =
  /*@__PURE__*/ /*#__PURE__*/ ListServicesResponse;

export type ListServicesError = DefaultErrors | NotFound | Forbidden;

/** List Services for this Metrics Scope. */
export const listServices: API.PaginatedOperationMethod<
  ListServicesRequest,
  ListServicesResponse_Op,
  ListServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListServicesRequest,
  output: ListServicesResponse_Op,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListServicesServiceLevelObjectivesRequest {
  /** A filter specifying what ServiceLevelObjectives to return. */
  filter?: string;
  /** View of the ServiceLevelObjectives to return. If DEFAULT, return each ServiceLevelObjective as originally defined. If EXPLICIT and the ServiceLevelObjective is defined in terms of a BasicSli, replace the BasicSli with a RequestBasedSli spelling out how the SLI is computed. */
  view?: "VIEW_UNSPECIFIED" | "FULL" | "EXPLICIT" | (string & {});
  /** Required. Resource name of the parent containing the listed SLOs, either a project or a Monitoring Metrics Scope. The formats are: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID] workspaces/[HOST_PROJECT_ID_OR_NUMBER]/services/- */
  parent: string;
  /** A non-negative number that is the maximum number of results to return. When 0, use default page size. */
  pageSize?: number;
  /** If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call. */
  pageToken?: string;
}

export const ListServicesServiceLevelObjectivesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+parent}/serviceLevelObjectives" }),
    svc,
  ) as unknown as Schema.Schema<ListServicesServiceLevelObjectivesRequest>;

export type ListServicesServiceLevelObjectivesResponse =
  ListServiceLevelObjectivesResponse;
export const ListServicesServiceLevelObjectivesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListServiceLevelObjectivesResponse;

export type ListServicesServiceLevelObjectivesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List the ServiceLevelObjectives for the given Service. */
export const listServicesServiceLevelObjectives: API.PaginatedOperationMethod<
  ListServicesServiceLevelObjectivesRequest,
  ListServicesServiceLevelObjectivesResponse,
  ListServicesServiceLevelObjectivesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListServicesServiceLevelObjectivesRequest,
  output: ListServicesServiceLevelObjectivesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetServicesServiceLevelObjectivesRequest {
  /** Required. Resource name of the ServiceLevelObjective to get. The format is: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID]/serviceLevelObjectives/[SLO_NAME] */
  name: string;
  /** View of the ServiceLevelObjective to return. If DEFAULT, return the ServiceLevelObjective as originally defined. If EXPLICIT and the ServiceLevelObjective is defined in terms of a BasicSli, replace the BasicSli with a RequestBasedSli spelling out how the SLI is computed. */
  view?: "VIEW_UNSPECIFIED" | "FULL" | "EXPLICIT" | (string & {});
}

export const GetServicesServiceLevelObjectivesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetServicesServiceLevelObjectivesRequest>;

export type GetServicesServiceLevelObjectivesResponse = ServiceLevelObjective;
export const GetServicesServiceLevelObjectivesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ServiceLevelObjective;

export type GetServicesServiceLevelObjectivesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get a ServiceLevelObjective by name. */
export const getServicesServiceLevelObjectives: API.OperationMethod<
  GetServicesServiceLevelObjectivesRequest,
  GetServicesServiceLevelObjectivesResponse,
  GetServicesServiceLevelObjectivesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetServicesServiceLevelObjectivesRequest,
  output: GetServicesServiceLevelObjectivesResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchServicesServiceLevelObjectivesRequest {
  /** A set of field paths defining which fields to use for the update. */
  updateMask?: string;
  /** Identifier. Resource name for this ServiceLevelObjective. The format is: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID]/serviceLevelObjectives/[SLO_NAME] */
  name: string;
  /** Request body */
  body?: ServiceLevelObjective;
}

export const PatchServicesServiceLevelObjectivesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ServiceLevelObjective).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchServicesServiceLevelObjectivesRequest>;

export type PatchServicesServiceLevelObjectivesResponse = ServiceLevelObjective;
export const PatchServicesServiceLevelObjectivesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ServiceLevelObjective;

export type PatchServicesServiceLevelObjectivesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update the given ServiceLevelObjective. */
export const patchServicesServiceLevelObjectives: API.OperationMethod<
  PatchServicesServiceLevelObjectivesRequest,
  PatchServicesServiceLevelObjectivesResponse,
  PatchServicesServiceLevelObjectivesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchServicesServiceLevelObjectivesRequest,
  output: PatchServicesServiceLevelObjectivesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateServicesServiceLevelObjectivesRequest {
  /** Required. Resource name of the parent Service. The format is: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID] */
  parent: string;
  /** Optional. The ServiceLevelObjective id to use for this ServiceLevelObjective. If omitted, an id will be generated instead. Must match the pattern ^[a-zA-Z0-9-_:.]+$ */
  serviceLevelObjectiveId?: string;
  /** Request body */
  body?: ServiceLevelObjective;
}

export const CreateServicesServiceLevelObjectivesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    serviceLevelObjectiveId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("serviceLevelObjectiveId"),
    ),
    body: Schema.optional(ServiceLevelObjective).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3/{+parent}/serviceLevelObjectives",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateServicesServiceLevelObjectivesRequest>;

export type CreateServicesServiceLevelObjectivesResponse =
  ServiceLevelObjective;
export const CreateServicesServiceLevelObjectivesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ServiceLevelObjective;

export type CreateServicesServiceLevelObjectivesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a ServiceLevelObjective for the given Service. */
export const createServicesServiceLevelObjectives: API.OperationMethod<
  CreateServicesServiceLevelObjectivesRequest,
  CreateServicesServiceLevelObjectivesResponse,
  CreateServicesServiceLevelObjectivesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateServicesServiceLevelObjectivesRequest,
  output: CreateServicesServiceLevelObjectivesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteServicesServiceLevelObjectivesRequest {
  /** Required. Resource name of the ServiceLevelObjective to delete. The format is: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID]/serviceLevelObjectives/[SLO_NAME] */
  name: string;
}

export const DeleteServicesServiceLevelObjectivesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteServicesServiceLevelObjectivesRequest>;

export type DeleteServicesServiceLevelObjectivesResponse = Empty;
export const DeleteServicesServiceLevelObjectivesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteServicesServiceLevelObjectivesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete the given ServiceLevelObjective. */
export const deleteServicesServiceLevelObjectives: API.OperationMethod<
  DeleteServicesServiceLevelObjectivesRequest,
  DeleteServicesServiceLevelObjectivesResponse,
  DeleteServicesServiceLevelObjectivesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteServicesServiceLevelObjectivesRequest,
  output: DeleteServicesServiceLevelObjectivesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListUptimeCheckIpsRequest {
  /** The maximum number of results to return in a single response. The server may further constrain the maximum number of results returned in a single page. If the page_size is <=0, the server will decide the number of results to be returned. NOTE: this field is not yet implemented */
  pageSize?: number;
  /** If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return more results from the previous method call. NOTE: this field is not yet implemented */
  pageToken?: string;
}

export const ListUptimeCheckIpsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/uptimeCheckIps" }),
    svc,
  ) as unknown as Schema.Schema<ListUptimeCheckIpsRequest>;

export type ListUptimeCheckIpsResponse_Op = ListUptimeCheckIpsResponse;
export const ListUptimeCheckIpsResponse_Op =
  /*@__PURE__*/ /*#__PURE__*/ ListUptimeCheckIpsResponse;

export type ListUptimeCheckIpsError = DefaultErrors | NotFound | Forbidden;

/** Returns the list of IP addresses that checkers run from. */
export const listUptimeCheckIps: API.PaginatedOperationMethod<
  ListUptimeCheckIpsRequest,
  ListUptimeCheckIpsResponse_Op,
  ListUptimeCheckIpsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListUptimeCheckIpsRequest,
  output: ListUptimeCheckIpsResponse_Op,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsCollectdTimeSeriesRequest {
  /** The project (https://cloud.google.com/monitoring/api/v3#project_name) in which to create the time series. The format is: projects/[PROJECT_ID_OR_NUMBER] */
  name: string;
  /** Request body */
  body?: CreateCollectdTimeSeriesRequest;
}

export const CreateProjectsCollectdTimeSeriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CreateCollectdTimeSeriesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3/{+name}/collectdTimeSeries",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsCollectdTimeSeriesRequest>;

export type CreateProjectsCollectdTimeSeriesResponse =
  CreateCollectdTimeSeriesResponse;
export const CreateProjectsCollectdTimeSeriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ CreateCollectdTimeSeriesResponse;

export type CreateProjectsCollectdTimeSeriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Cloud Monitoring Agent only: Creates a new time series.This method is only for use by the Cloud Monitoring Agent. Use projects.timeSeries.create instead. */
export const createProjectsCollectdTimeSeries: API.OperationMethod<
  CreateProjectsCollectdTimeSeriesRequest,
  CreateProjectsCollectdTimeSeriesResponse,
  CreateProjectsCollectdTimeSeriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsCollectdTimeSeriesRequest,
  output: CreateProjectsCollectdTimeSeriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsAlertPoliciesRequest {
  /** Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) whose alert policies are to be listed. The format is: projects/[PROJECT_ID_OR_NUMBER] Note that this field names the parent container in which the alerting policies to be listed are stored. To retrieve a single alerting policy by name, use the GetAlertPolicy operation, instead. */
  name: string;
  /** Optional. If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return more results from the previous method call. */
  pageToken?: string;
  /** Optional. The maximum number of results to return in a single response. */
  pageSize?: number;
  /** Optional. A comma-separated list of fields by which to sort the result. Supports the same set of field references as the filter field. Entries can be prefixed with a minus sign to sort by the field in descending order.For more details, see sorting and filtering (https://cloud.google.com/monitoring/api/v3/sorting-and-filtering). */
  orderBy?: string;
  /** Optional. If provided, this field specifies the criteria that must be met by alert policies to be included in the response.For more details, see sorting and filtering (https://cloud.google.com/monitoring/api/v3/sorting-and-filtering). */
  filter?: string;
}

export const ListProjectsAlertPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}/alertPolicies" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAlertPoliciesRequest>;

export type ListProjectsAlertPoliciesResponse = ListAlertPoliciesResponse;
export const ListProjectsAlertPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAlertPoliciesResponse;

export type ListProjectsAlertPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the existing alerting policies for the workspace. */
export const listProjectsAlertPolicies: API.PaginatedOperationMethod<
  ListProjectsAlertPoliciesRequest,
  ListProjectsAlertPoliciesResponse,
  ListProjectsAlertPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsAlertPoliciesRequest,
  output: ListProjectsAlertPoliciesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsAlertPoliciesRequest {
  /** Required. The alerting policy to retrieve. The format is: projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[ALERT_POLICY_ID] */
  name: string;
}

export const GetProjectsAlertPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsAlertPoliciesRequest>;

export type GetProjectsAlertPoliciesResponse = AlertPolicy;
export const GetProjectsAlertPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AlertPolicy;

export type GetProjectsAlertPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a single alerting policy. */
export const getProjectsAlertPolicies: API.OperationMethod<
  GetProjectsAlertPoliciesRequest,
  GetProjectsAlertPoliciesResponse,
  GetProjectsAlertPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsAlertPoliciesRequest,
  output: GetProjectsAlertPoliciesResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsAlertPoliciesRequest {
  /** Optional. A list of alerting policy field names. If this field is not empty, each listed field in the existing alerting policy is set to the value of the corresponding field in the supplied policy (alert_policy), or to the field's default value if the field is not in the supplied alerting policy. Fields not listed retain their previous value.Examples of valid field masks include display_name, documentation, documentation.content, documentation.mime_type, user_labels, user_label.nameofkey, enabled, conditions, combiner, etc.If this field is empty, then the supplied alerting policy replaces the existing policy. It is the same as deleting the existing policy and adding the supplied policy, except for the following: The new policy will have the same [ALERT_POLICY_ID] as the former policy. This gives you continuity with the former policy in your notifications and incidents. Conditions in the new policy will keep their former [CONDITION_ID] if the supplied condition includes the name field with that [CONDITION_ID]. If the supplied condition omits the name field, then a new [CONDITION_ID] is created. */
  updateMask?: string;
  /** Identifier. Required if the policy exists. The resource name for this policy. The format is: projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[ALERT_POLICY_ID] [ALERT_POLICY_ID] is assigned by Cloud Monitoring when the policy is created. When calling the alertPolicies.create method, do not include the name field in the alerting policy passed as part of the request. */
  name: string;
  /** Request body */
  body?: AlertPolicy;
}

export const PatchProjectsAlertPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(AlertPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsAlertPoliciesRequest>;

export type PatchProjectsAlertPoliciesResponse = AlertPolicy;
export const PatchProjectsAlertPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AlertPolicy;

export type PatchProjectsAlertPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an alerting policy. You can either replace the entire policy with a new one or replace only certain fields in the current alerting policy by specifying the fields to be updated via updateMask. Returns the updated alerting policy.Design your application to single-thread API calls that modify the state of alerting policies in a single project. This includes calls to CreateAlertPolicy, DeleteAlertPolicy and UpdateAlertPolicy. */
export const patchProjectsAlertPolicies: API.OperationMethod<
  PatchProjectsAlertPoliciesRequest,
  PatchProjectsAlertPoliciesResponse,
  PatchProjectsAlertPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsAlertPoliciesRequest,
  output: PatchProjectsAlertPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsAlertPoliciesRequest {
  /** Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) in which to create the alerting policy. The format is: projects/[PROJECT_ID_OR_NUMBER] Note that this field names the parent container in which the alerting policy will be written, not the name of the created policy. |name| must be a host project of a Metrics Scope, otherwise INVALID_ARGUMENT error will return. The alerting policy that is returned will have a name that contains a normalized representation of this name as a prefix but adds a suffix of the form /alertPolicies/[ALERT_POLICY_ID], identifying the policy in the container. */
  name: string;
  /** Request body */
  body?: AlertPolicy;
}

export const CreateProjectsAlertPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(AlertPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v3/{+name}/alertPolicies", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsAlertPoliciesRequest>;

export type CreateProjectsAlertPoliciesResponse = AlertPolicy;
export const CreateProjectsAlertPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AlertPolicy;

export type CreateProjectsAlertPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new alerting policy.Design your application to single-thread API calls that modify the state of alerting policies in a single project. This includes calls to CreateAlertPolicy, DeleteAlertPolicy and UpdateAlertPolicy. */
export const createProjectsAlertPolicies: API.OperationMethod<
  CreateProjectsAlertPoliciesRequest,
  CreateProjectsAlertPoliciesResponse,
  CreateProjectsAlertPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsAlertPoliciesRequest,
  output: CreateProjectsAlertPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsAlertPoliciesRequest {
  /** Required. The alerting policy to delete. The format is: projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[ALERT_POLICY_ID] For more information, see AlertPolicy. */
  name: string;
}

export const DeleteProjectsAlertPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsAlertPoliciesRequest>;

export type DeleteProjectsAlertPoliciesResponse = Empty;
export const DeleteProjectsAlertPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsAlertPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an alerting policy.Design your application to single-thread API calls that modify the state of alerting policies in a single project. This includes calls to CreateAlertPolicy, DeleteAlertPolicy and UpdateAlertPolicy. */
export const deleteProjectsAlertPolicies: API.OperationMethod<
  DeleteProjectsAlertPoliciesRequest,
  DeleteProjectsAlertPoliciesResponse,
  DeleteProjectsAlertPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsAlertPoliciesRequest,
  output: DeleteProjectsAlertPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsTimeSeriesRequest {
  /** Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER] */
  name: string;
  /** Request body */
  body?: CreateTimeSeriesRequest;
}

export const CreateProjectsTimeSeriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CreateTimeSeriesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v3/{+name}/timeSeries", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsTimeSeriesRequest>;

export type CreateProjectsTimeSeriesResponse = Empty;
export const CreateProjectsTimeSeriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type CreateProjectsTimeSeriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates or adds data to one or more time series. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response. This method does not support resource locations constraint of an organization policy (https://cloud.google.com/resource-manager/docs/organization-policy/defining-locations#setting_the_organization_policy). */
export const createProjectsTimeSeries: API.OperationMethod<
  CreateProjectsTimeSeriesRequest,
  CreateProjectsTimeSeriesResponse,
  CreateProjectsTimeSeriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsTimeSeriesRequest,
  output: CreateProjectsTimeSeriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsTimeSeriesRequest {
  /** An Aligner describes how to bring the data points in a single time series into temporal alignment. Except for ALIGN_NONE, all alignments cause all the data points in an alignment_period to be mathematically grouped together, resulting in a single data point for each alignment_period with end timestamp at the end of the period.Not all alignment operations may be applied to all time series. The valid choices depend on the metric_kind and value_type of the original time series. Alignment can change the metric_kind or the value_type of the time series.Time series data must be aligned in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified and not equal to ALIGN_NONE and alignment_period must be specified; otherwise, an error is returned. */
  "secondaryAggregation.perSeriesAligner"?:
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
  /** Required. The project (https://cloud.google.com/monitoring/api/v3#project_name), organization or folder on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER] organizations/[ORGANIZATION_ID] folders/[FOLDER_ID] */
  name: string;
  /** The set of fields to preserve when cross_series_reducer is specified. The group_by_fields determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The cross_series_reducer is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains resource.type. Fields not specified in group_by_fields are aggregated away. If group_by_fields is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If cross_series_reducer is not defined, this field is ignored. */
  "aggregation.groupByFields"?: string[];
  /** Optional. The beginning of the time interval. The default value for the start time is the end time. The start time must not be later than the end time. */
  "interval.startTime"?: string;
  /** A positive number that is the maximum number of results to return. If page_size is empty or more than 100,000 results, the effective page_size is 100,000 results. If view is set to FULL, this is the maximum number of Points returned. If view is set to HEADERS, this is the maximum number of TimeSeries returned. */
  pageSize?: number;
  /** If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call. */
  pageToken?: string;
  /** Required. A monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) that specifies which time series should be returned. The filter must specify a single metric type, and can additionally specify metric labels and other information. For example: metric.type = "compute.googleapis.com/instance/cpu/usage_time" AND metric.labels.instance_name = "my-instance-name" */
  filter?: string;
  /** The alignment_period specifies a time interval, in seconds, that is used to divide the data in all the time series into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.The value must be at least 60 seconds. If a per-series aligner other than ALIGN_NONE is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner ALIGN_NONE is specified, then this field is ignored.The maximum value of the alignment_period is 104 weeks (2 years) for charts, and 90,000 seconds (25 hours) for alerting policies. */
  "aggregation.alignmentPeriod"?: string;
  /** An Aligner describes how to bring the data points in a single time series into temporal alignment. Except for ALIGN_NONE, all alignments cause all the data points in an alignment_period to be mathematically grouped together, resulting in a single data point for each alignment_period with end timestamp at the end of the period.Not all alignment operations may be applied to all time series. The valid choices depend on the metric_kind and value_type of the original time series. Alignment can change the metric_kind or the value_type of the time series.Time series data must be aligned in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified and not equal to ALIGN_NONE and alignment_period must be specified; otherwise, an error is returned. */
  "aggregation.perSeriesAligner"?:
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
  /** Required. The end of the time interval. */
  "interval.endTime"?: string;
  /** The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.Not all reducer operations can be applied to all time series. The valid choices depend on the metric_kind and the value_type of the original time series. Reduction can yield a time series with a different metric_kind or value_type than the input time series.Time series data must first be aligned (see per_series_aligner) in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified, and must not be ALIGN_NONE. An alignment_period must also be specified; otherwise, an error is returned. */
  "aggregation.crossSeriesReducer"?:
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
  /** Unsupported: must be left blank. The points in each time series are currently returned in reverse time order (most recent to oldest). */
  orderBy?: string;
  /** The alignment_period specifies a time interval, in seconds, that is used to divide the data in all the time series into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.The value must be at least 60 seconds. If a per-series aligner other than ALIGN_NONE is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner ALIGN_NONE is specified, then this field is ignored.The maximum value of the alignment_period is 104 weeks (2 years) for charts, and 90,000 seconds (25 hours) for alerting policies. */
  "secondaryAggregation.alignmentPeriod"?: string;
  /** The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.Not all reducer operations can be applied to all time series. The valid choices depend on the metric_kind and the value_type of the original time series. Reduction can yield a time series with a different metric_kind or value_type than the input time series.Time series data must first be aligned (see per_series_aligner) in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified, and must not be ALIGN_NONE. An alignment_period must also be specified; otherwise, an error is returned. */
  "secondaryAggregation.crossSeriesReducer"?:
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
  "secondaryAggregation.groupByFields"?: string[];
  /** Required. Specifies which information is returned about the time series. */
  view?: "FULL" | "HEADERS" | (string & {});
}

export const ListProjectsTimeSeriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "secondaryAggregation.perSeriesAligner": Schema.optional(
      Schema.String,
    ).pipe(T.HttpQuery("secondaryAggregation.perSeriesAligner")),
    name: Schema.String.pipe(T.HttpPath("name")),
    "aggregation.groupByFields": Schema.optional(
      Schema.Array(Schema.String),
    ).pipe(T.HttpQuery("aggregation.groupByFields")),
    "interval.startTime": Schema.optional(Schema.String).pipe(
      T.HttpQuery("interval.startTime"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    "aggregation.alignmentPeriod": Schema.optional(Schema.String).pipe(
      T.HttpQuery("aggregation.alignmentPeriod"),
    ),
    "aggregation.perSeriesAligner": Schema.optional(Schema.String).pipe(
      T.HttpQuery("aggregation.perSeriesAligner"),
    ),
    "interval.endTime": Schema.optional(Schema.String).pipe(
      T.HttpQuery("interval.endTime"),
    ),
    "aggregation.crossSeriesReducer": Schema.optional(Schema.String).pipe(
      T.HttpQuery("aggregation.crossSeriesReducer"),
    ),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    "secondaryAggregation.alignmentPeriod": Schema.optional(Schema.String).pipe(
      T.HttpQuery("secondaryAggregation.alignmentPeriod"),
    ),
    "secondaryAggregation.crossSeriesReducer": Schema.optional(
      Schema.String,
    ).pipe(T.HttpQuery("secondaryAggregation.crossSeriesReducer")),
    "secondaryAggregation.groupByFields": Schema.optional(
      Schema.Array(Schema.String),
    ).pipe(T.HttpQuery("secondaryAggregation.groupByFields")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}/timeSeries" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsTimeSeriesRequest>;

export type ListProjectsTimeSeriesResponse = ListTimeSeriesResponse;
export const ListProjectsTimeSeriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListTimeSeriesResponse;

export type ListProjectsTimeSeriesError = DefaultErrors | NotFound | Forbidden;

/** Lists time series that match a filter. */
export const listProjectsTimeSeries: API.PaginatedOperationMethod<
  ListProjectsTimeSeriesRequest,
  ListProjectsTimeSeriesResponse,
  ListProjectsTimeSeriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsTimeSeriesRequest,
  output: ListProjectsTimeSeriesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateServiceProjectsTimeSeriesRequest {
  /** Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER] */
  name: string;
  /** Request body */
  body?: CreateTimeSeriesRequest;
}

export const CreateServiceProjectsTimeSeriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CreateTimeSeriesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3/{+name}/timeSeries:createService",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateServiceProjectsTimeSeriesRequest>;

export type CreateServiceProjectsTimeSeriesResponse = Empty;
export const CreateServiceProjectsTimeSeriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type CreateServiceProjectsTimeSeriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates or adds data to one or more service time series. A service time series is a time series for a metric from a Google Cloud service. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response. This endpoint rejects writes to user-defined metrics. This method is only for use by Google Cloud services. Use projects.timeSeries.create instead. */
export const createServiceProjectsTimeSeries: API.OperationMethod<
  CreateServiceProjectsTimeSeriesRequest,
  CreateServiceProjectsTimeSeriesResponse,
  CreateServiceProjectsTimeSeriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateServiceProjectsTimeSeriesRequest,
  output: CreateServiceProjectsTimeSeriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface QueryProjectsTimeSeriesRequest {
  /** Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER] */
  name: string;
  /** Request body */
  body?: QueryTimeSeriesRequest;
}

export const QueryProjectsTimeSeriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(QueryTimeSeriesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3/{+name}/timeSeries:query",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<QueryProjectsTimeSeriesRequest>;

export type QueryProjectsTimeSeriesResponse = QueryTimeSeriesResponse;
export const QueryProjectsTimeSeriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ QueryTimeSeriesResponse;

export type QueryProjectsTimeSeriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Queries time series by using Monitoring Query Language (MQL). We recommend using PromQL instead of MQL. For more information about the status of MQL, see the MQL deprecation notice (https://cloud.google.com/stackdriver/docs/deprecations/mql). */
export const queryProjectsTimeSeries: API.OperationMethod<
  QueryProjectsTimeSeriesRequest,
  QueryProjectsTimeSeriesResponse,
  QueryProjectsTimeSeriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: QueryProjectsTimeSeriesRequest,
  output: QueryProjectsTimeSeriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsSnoozesRequest {
  /** Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) in which a Snooze should be created. The format is: projects/[PROJECT_ID_OR_NUMBER] */
  parent: string;
  /** Request body */
  body?: Snooze;
}

export const CreateProjectsSnoozesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Snooze).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v3/{+parent}/snoozes", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsSnoozesRequest>;

export type CreateProjectsSnoozesResponse = Snooze;
export const CreateProjectsSnoozesResponse = /*@__PURE__*/ /*#__PURE__*/ Snooze;

export type CreateProjectsSnoozesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a Snooze that will prevent alerts, which match the provided criteria, from being opened. The Snooze applies for a specific time interval. */
export const createProjectsSnoozes: API.OperationMethod<
  CreateProjectsSnoozesRequest,
  CreateProjectsSnoozesResponse,
  CreateProjectsSnoozesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsSnoozesRequest,
  output: CreateProjectsSnoozesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsSnoozesRequest {
  /** Optional. The next_page_token from a previous call to ListSnoozesRequest to get the next page of results. */
  pageToken?: string;
  /** Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) whose Snoozes should be listed. The format is: projects/[PROJECT_ID_OR_NUMBER] */
  parent: string;
  /** Optional. Optional filter to restrict results to the given criteria. The following fields are supported. interval.start_time interval.end_timeFor example: interval.start_time > "2022-03-11T00:00:00-08:00" AND interval.end_time < "2022-03-12T00:00:00-08:00" */
  filter?: string;
  /** Optional. The maximum number of results to return for a single query. The server may further constrain the maximum number of results returned in a single page. The value should be in the range 1, 1000. If the value given is outside this range, the server will decide the number of results to be returned. */
  pageSize?: number;
}

export const ListProjectsSnoozesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+parent}/snoozes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsSnoozesRequest>;

export type ListProjectsSnoozesResponse = ListSnoozesResponse;
export const ListProjectsSnoozesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListSnoozesResponse;

export type ListProjectsSnoozesError = DefaultErrors | NotFound | Forbidden;

/** Lists the Snoozes associated with a project. Can optionally pass in filter, which specifies predicates to match Snoozes. */
export const listProjectsSnoozes: API.PaginatedOperationMethod<
  ListProjectsSnoozesRequest,
  ListProjectsSnoozesResponse,
  ListProjectsSnoozesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsSnoozesRequest,
  output: ListProjectsSnoozesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsSnoozesRequest {
  /** Required. Identifier. The name of the Snooze. The format is: projects/[PROJECT_ID_OR_NUMBER]/snoozes/[SNOOZE_ID] The ID of the Snooze will be generated by the system. */
  name: string;
  /** Required. The fields to update.For each field listed in update_mask: If the Snooze object supplied in the UpdateSnoozeRequest has a value for that field, the value of the field in the existing Snooze will be set to the value of the field in the supplied Snooze. If the field does not have a value in the supplied Snooze, the field in the existing Snooze is set to its default value.Fields not listed retain their existing value.The following are the field names that are accepted in update_mask: display_name interval.start_time interval.end_timeThat said, the start time and end time of the Snooze determines which fields can legally be updated. Before attempting an update, users should consult the documentation for UpdateSnoozeRequest, which talks about which fields can be updated. */
  updateMask?: string;
  /** Request body */
  body?: Snooze;
}

export const PatchProjectsSnoozesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Snooze).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsSnoozesRequest>;

export type PatchProjectsSnoozesResponse = Snooze;
export const PatchProjectsSnoozesResponse = /*@__PURE__*/ /*#__PURE__*/ Snooze;

export type PatchProjectsSnoozesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a Snooze, identified by its name, with the parameters in the given Snooze object. */
export const patchProjectsSnoozes: API.OperationMethod<
  PatchProjectsSnoozesRequest,
  PatchProjectsSnoozesResponse,
  PatchProjectsSnoozesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsSnoozesRequest,
  output: PatchProjectsSnoozesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsSnoozesRequest {
  /** Required. The ID of the Snooze to retrieve. The format is: projects/[PROJECT_ID_OR_NUMBER]/snoozes/[SNOOZE_ID] */
  name: string;
}

export const GetProjectsSnoozesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsSnoozesRequest>;

export type GetProjectsSnoozesResponse = Snooze;
export const GetProjectsSnoozesResponse = /*@__PURE__*/ /*#__PURE__*/ Snooze;

export type GetProjectsSnoozesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a Snooze by name. */
export const getProjectsSnoozes: API.OperationMethod<
  GetProjectsSnoozesRequest,
  GetProjectsSnoozesResponse,
  GetProjectsSnoozesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsSnoozesRequest,
  output: GetProjectsSnoozesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsNotificationChannelDescriptorsRequest {
  /** Required. The REST resource name of the parent from which to retrieve the notification channel descriptors. The expected syntax is: projects/[PROJECT_ID_OR_NUMBER] Note that this names (https://cloud.google.com/monitoring/api/v3#project_name) the parent container in which to look for the descriptors; to retrieve a single descriptor by name, use the GetNotificationChannelDescriptor operation, instead. */
  name: string;
  /** If non-empty, page_token must contain a value returned as the next_page_token in a previous response to request the next set of results. */
  pageToken?: string;
  /** The maximum number of results to return in a single response. If not set to a positive number, a reasonable value will be chosen by the service. */
  pageSize?: number;
}

export const ListProjectsNotificationChannelDescriptorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v3/{+name}/notificationChannelDescriptors",
    }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsNotificationChannelDescriptorsRequest>;

export type ListProjectsNotificationChannelDescriptorsResponse =
  ListNotificationChannelDescriptorsResponse;
export const ListProjectsNotificationChannelDescriptorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListNotificationChannelDescriptorsResponse;

export type ListProjectsNotificationChannelDescriptorsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the descriptors for supported channel types. The use of descriptors makes it possible for new channel types to be dynamically added. */
export const listProjectsNotificationChannelDescriptors: API.PaginatedOperationMethod<
  ListProjectsNotificationChannelDescriptorsRequest,
  ListProjectsNotificationChannelDescriptorsResponse,
  ListProjectsNotificationChannelDescriptorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsNotificationChannelDescriptorsRequest,
  output: ListProjectsNotificationChannelDescriptorsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsNotificationChannelDescriptorsRequest {
  /** Required. The channel type for which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER]/notificationChannelDescriptors/[CHANNEL_TYPE] */
  name: string;
}

export const GetProjectsNotificationChannelDescriptorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsNotificationChannelDescriptorsRequest>;

export type GetProjectsNotificationChannelDescriptorsResponse =
  NotificationChannelDescriptor;
export const GetProjectsNotificationChannelDescriptorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ NotificationChannelDescriptor;

export type GetProjectsNotificationChannelDescriptorsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a single channel descriptor. The descriptor indicates which fields are expected / permitted for a notification channel of the given type. */
export const getProjectsNotificationChannelDescriptors: API.OperationMethod<
  GetProjectsNotificationChannelDescriptorsRequest,
  GetProjectsNotificationChannelDescriptorsResponse,
  GetProjectsNotificationChannelDescriptorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsNotificationChannelDescriptorsRequest,
  output: GetProjectsNotificationChannelDescriptorsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsAlertsRequest {
  /** Optional. An alert is returned if there is a match on any fields belonging to the alert or its subfields. */
  filter?: string;
  /** Optional. A comma-separated list of fields in Alert to use for sorting. The default sort direction is ascending. To specify descending order for a field, add a desc modifier. The following fields are supported: open_time close_timeFor example, close_time desc, open_time will return the alerts closed most recently, with ties broken in the order of older alerts listed first.If the field is not set, the results are sorted by open_time desc. */
  orderBy?: string;
  /** Optional. If non-empty, page_token must contain a value returned as the next_page_token in a previous response to request the next set of results. */
  pageToken?: string;
  /** Required. The name of the project to list alerts for. */
  parent: string;
  /** Optional. The maximum number of results to return in a single response. If not set to a positive number, at most 50 alerts will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
}

export const ListProjectsAlertsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+parent}/alerts" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAlertsRequest>;

export type ListProjectsAlertsResponse = ListAlertsResponse;
export const ListProjectsAlertsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAlertsResponse;

export type ListProjectsAlertsError = DefaultErrors | NotFound | Forbidden;

/** Lists the existing alerts for the metrics scope of the project. */
export const listProjectsAlerts: API.PaginatedOperationMethod<
  ListProjectsAlertsRequest,
  ListProjectsAlertsResponse,
  ListProjectsAlertsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsAlertsRequest,
  output: ListProjectsAlertsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsAlertsRequest {
  /** Required. The name of the alert.The format is: projects/[PROJECT_ID_OR_NUMBER]/alerts/[ALERT_ID] The [ALERT_ID] is a system-assigned unique identifier for the alert. */
  name: string;
}

export const GetProjectsAlertsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsAlertsRequest>;

export type GetProjectsAlertsResponse = Alert;
export const GetProjectsAlertsResponse = /*@__PURE__*/ /*#__PURE__*/ Alert;

export type GetProjectsAlertsError = DefaultErrors | NotFound | Forbidden;

/** Gets a single alert. */
export const getProjectsAlerts: API.OperationMethod<
  GetProjectsAlertsRequest,
  GetProjectsAlertsResponse,
  GetProjectsAlertsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsAlertsRequest,
  output: GetProjectsAlertsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsMetricDescriptorsRequest {
  /** Required. The metric descriptor on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER]/metricDescriptors/[METRIC_ID] An example value of [METRIC_ID] is "compute.googleapis.com/instance/disk/read_bytes_count". */
  name: string;
}

export const GetProjectsMetricDescriptorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsMetricDescriptorsRequest>;

export type GetProjectsMetricDescriptorsResponse = MetricDescriptor;
export const GetProjectsMetricDescriptorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ MetricDescriptor;

export type GetProjectsMetricDescriptorsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a single metric descriptor. */
export const getProjectsMetricDescriptors: API.OperationMethod<
  GetProjectsMetricDescriptorsRequest,
  GetProjectsMetricDescriptorsResponse,
  GetProjectsMetricDescriptorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsMetricDescriptorsRequest,
  output: GetProjectsMetricDescriptorsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsMetricDescriptorsRequest {
  /** Optional. A positive number that is the maximum number of results to return. The default and maximum value is 10,000. If a page_size <= 0 or > 10,000 is submitted, will instead return a maximum of 10,000 results. */
  pageSize?: number;
  /** Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER] */
  name: string;
  /** Optional. If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call. */
  pageToken?: string;
  /** Optional. If true, only metrics and monitored resource types that have recent data (within roughly 25 hours) will be included in the response. - If a metric descriptor enumerates monitored resource types, only the monitored resource types for which the metric type has recent data will be included in the returned metric descriptor, and if none of them have recent data, the metric descriptor will not be returned. - If a metric descriptor does not enumerate the compatible monitored resource types, it will be returned only if the metric type has recent data for some monitored resource type. The returned descriptor will not enumerate any monitored resource types. */
  activeOnly?: boolean;
  /** Optional. If this field is empty, all custom and system-defined metric descriptors are returned. Otherwise, the filter (https://cloud.google.com/monitoring/api/v3/filters) specifies which metric descriptors are to be returned. For example, the following filter matches all custom metrics (https://cloud.google.com/monitoring/custom-metrics): metric.type = starts_with("custom.googleapis.com/") */
  filter?: string;
}

export const ListProjectsMetricDescriptorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    activeOnly: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("activeOnly")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}/metricDescriptors" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsMetricDescriptorsRequest>;

export type ListProjectsMetricDescriptorsResponse =
  ListMetricDescriptorsResponse;
export const ListProjectsMetricDescriptorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListMetricDescriptorsResponse;

export type ListProjectsMetricDescriptorsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists metric descriptors that match a filter. */
export const listProjectsMetricDescriptors: API.PaginatedOperationMethod<
  ListProjectsMetricDescriptorsRequest,
  ListProjectsMetricDescriptorsResponse,
  ListProjectsMetricDescriptorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsMetricDescriptorsRequest,
  output: ListProjectsMetricDescriptorsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsMetricDescriptorsRequest {
  /** Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) on which to execute the request. The format is: 4 projects/PROJECT_ID_OR_NUMBER */
  name: string;
  /** Request body */
  body?: MetricDescriptor;
}

export const CreateProjectsMetricDescriptorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(MetricDescriptor).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3/{+name}/metricDescriptors",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsMetricDescriptorsRequest>;

export type CreateProjectsMetricDescriptorsResponse = MetricDescriptor;
export const CreateProjectsMetricDescriptorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ MetricDescriptor;

export type CreateProjectsMetricDescriptorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new metric descriptor. The creation is executed asynchronously. User-created metric descriptors define custom metrics (https://cloud.google.com/monitoring/custom-metrics). The metric descriptor is updated if it already exists, except that metric labels are never removed. */
export const createProjectsMetricDescriptors: API.OperationMethod<
  CreateProjectsMetricDescriptorsRequest,
  CreateProjectsMetricDescriptorsResponse,
  CreateProjectsMetricDescriptorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsMetricDescriptorsRequest,
  output: CreateProjectsMetricDescriptorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsMetricDescriptorsRequest {
  /** Required. The metric descriptor on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER]/metricDescriptors/[METRIC_ID] An example of [METRIC_ID] is: "custom.googleapis.com/my_test_metric". */
  name: string;
}

export const DeleteProjectsMetricDescriptorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsMetricDescriptorsRequest>;

export type DeleteProjectsMetricDescriptorsResponse = Empty;
export const DeleteProjectsMetricDescriptorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsMetricDescriptorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a metric descriptor. Only user-created custom metrics (https://cloud.google.com/monitoring/custom-metrics) can be deleted. */
export const deleteProjectsMetricDescriptors: API.OperationMethod<
  DeleteProjectsMetricDescriptorsRequest,
  DeleteProjectsMetricDescriptorsResponse,
  DeleteProjectsMetricDescriptorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsMetricDescriptorsRequest,
  output: DeleteProjectsMetricDescriptorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsMonitoredResourceDescriptorsRequest {
  /** An optional filter (https://cloud.google.com/monitoring/api/v3/filters) describing the descriptors to be returned. The filter can reference the descriptor's type and labels. For example, the following filter returns only Google Compute Engine descriptors that have an id label: resource.type = starts_with("gce_") AND resource.label:id */
  filter?: string;
  /** A positive number that is the maximum number of results to return. */
  pageSize?: number;
  /** Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER] */
  name: string;
  /** If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call. */
  pageToken?: string;
}

export const ListProjectsMonitoredResourceDescriptorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}/monitoredResourceDescriptors" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsMonitoredResourceDescriptorsRequest>;

export type ListProjectsMonitoredResourceDescriptorsResponse =
  ListMonitoredResourceDescriptorsResponse;
export const ListProjectsMonitoredResourceDescriptorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListMonitoredResourceDescriptorsResponse;

export type ListProjectsMonitoredResourceDescriptorsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists monitored resource descriptors that match a filter. */
export const listProjectsMonitoredResourceDescriptors: API.PaginatedOperationMethod<
  ListProjectsMonitoredResourceDescriptorsRequest,
  ListProjectsMonitoredResourceDescriptorsResponse,
  ListProjectsMonitoredResourceDescriptorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsMonitoredResourceDescriptorsRequest,
  output: ListProjectsMonitoredResourceDescriptorsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsMonitoredResourceDescriptorsRequest {
  /** Required. The monitored resource descriptor to get. The format is: projects/[PROJECT_ID_OR_NUMBER]/monitoredResourceDescriptors/[RESOURCE_TYPE] The [RESOURCE_TYPE] is a predefined type, such as cloudsql_database. */
  name: string;
}

export const GetProjectsMonitoredResourceDescriptorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsMonitoredResourceDescriptorsRequest>;

export type GetProjectsMonitoredResourceDescriptorsResponse =
  MonitoredResourceDescriptor;
export const GetProjectsMonitoredResourceDescriptorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ MonitoredResourceDescriptor;

export type GetProjectsMonitoredResourceDescriptorsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a single monitored resource descriptor. */
export const getProjectsMonitoredResourceDescriptors: API.OperationMethod<
  GetProjectsMonitoredResourceDescriptorsRequest,
  GetProjectsMonitoredResourceDescriptorsResponse,
  GetProjectsMonitoredResourceDescriptorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsMonitoredResourceDescriptorsRequest,
  output: GetProjectsMonitoredResourceDescriptorsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsGroupsRequest {
  /** A group name. The format is: projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID] Returns groups that are ancestors of the specified group. The groups are returned in order, starting with the immediate parent and ending with the most distant ancestor. If the specified group has no immediate parent, the results are empty. */
  ancestorsOfGroup?: string;
  /** Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) whose groups are to be listed. The format is: projects/[PROJECT_ID_OR_NUMBER] */
  name: string;
  /** If this field is not empty then it must contain the next_page_token value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call. */
  pageToken?: string;
  /** A group name. The format is: projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID] Returns groups whose parent_name field contains the group name. If no groups have this parent, the results are empty. */
  childrenOfGroup?: string;
  /** A positive number that is the maximum number of results to return. */
  pageSize?: number;
  /** A group name. The format is: projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID] Returns the descendants of the specified group. This is a superset of the results returned by the children_of_group filter, and includes children-of-children, and so forth. */
  descendantsOfGroup?: string;
}

export const ListProjectsGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ancestorsOfGroup: Schema.optional(Schema.String).pipe(
      T.HttpQuery("ancestorsOfGroup"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    childrenOfGroup: Schema.optional(Schema.String).pipe(
      T.HttpQuery("childrenOfGroup"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    descendantsOfGroup: Schema.optional(Schema.String).pipe(
      T.HttpQuery("descendantsOfGroup"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}/groups" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsGroupsRequest>;

export type ListProjectsGroupsResponse = ListGroupsResponse;
export const ListProjectsGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListGroupsResponse;

export type ListProjectsGroupsError = DefaultErrors | NotFound | Forbidden;

/** Lists the existing groups. */
export const listProjectsGroups: API.PaginatedOperationMethod<
  ListProjectsGroupsRequest,
  ListProjectsGroupsResponse,
  ListProjectsGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsGroupsRequest,
  output: ListProjectsGroupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsGroupsRequest {
  /** Required. The group to retrieve. The format is: projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID] */
  name: string;
}

export const GetProjectsGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsGroupsRequest>;

export type GetProjectsGroupsResponse = Group;
export const GetProjectsGroupsResponse = /*@__PURE__*/ /*#__PURE__*/ Group;

export type GetProjectsGroupsError = DefaultErrors | NotFound | Forbidden;

/** Gets a single group. */
export const getProjectsGroups: API.OperationMethod<
  GetProjectsGroupsRequest,
  GetProjectsGroupsResponse,
  GetProjectsGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsGroupsRequest,
  output: GetProjectsGroupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateProjectsGroupsRequest {
  /** Output only. The name of this group. The format is: projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID] When creating a group, this field is ignored and a new name is created consisting of the project specified in the call to CreateGroup and a unique [GROUP_ID] that is generated automatically. */
  name: string;
  /** If true, validate this request but do not update the existing group. */
  validateOnly?: boolean;
  /** Request body */
  body?: Group;
}

export const UpdateProjectsGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(Group).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PUT", path: "v3/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateProjectsGroupsRequest>;

export type UpdateProjectsGroupsResponse = Group;
export const UpdateProjectsGroupsResponse = /*@__PURE__*/ /*#__PURE__*/ Group;

export type UpdateProjectsGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing group. You can change any group attributes except name. */
export const updateProjectsGroups: API.OperationMethod<
  UpdateProjectsGroupsRequest,
  UpdateProjectsGroupsResponse,
  UpdateProjectsGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateProjectsGroupsRequest,
  output: UpdateProjectsGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsGroupsRequest {
  /** If true, validate this request but do not create the group. */
  validateOnly?: boolean;
  /** Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) in which to create the group. The format is: projects/[PROJECT_ID_OR_NUMBER] */
  name: string;
  /** Request body */
  body?: Group;
}

export const CreateProjectsGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Group).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v3/{+name}/groups", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsGroupsRequest>;

export type CreateProjectsGroupsResponse = Group;
export const CreateProjectsGroupsResponse = /*@__PURE__*/ /*#__PURE__*/ Group;

export type CreateProjectsGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new group. */
export const createProjectsGroups: API.OperationMethod<
  CreateProjectsGroupsRequest,
  CreateProjectsGroupsResponse,
  CreateProjectsGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsGroupsRequest,
  output: CreateProjectsGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsGroupsRequest {
  /** Required. The group to delete. The format is: projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID] */
  name: string;
  /** If this field is true, then the request means to delete a group with all its descendants. Otherwise, the request means to delete a group only when it has no descendants. The default value is false. */
  recursive?: boolean;
}

export const DeleteProjectsGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    recursive: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("recursive")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsGroupsRequest>;

export type DeleteProjectsGroupsResponse = Empty;
export const DeleteProjectsGroupsResponse = /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an existing group. */
export const deleteProjectsGroups: API.OperationMethod<
  DeleteProjectsGroupsRequest,
  DeleteProjectsGroupsResponse,
  DeleteProjectsGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsGroupsRequest,
  output: DeleteProjectsGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsGroupsMembersRequest {
  /** An optional list filter (https://cloud.google.com/monitoring/api/learn_more#filtering) describing the members to be returned. The filter may reference the type, labels, and metadata of monitored resources that comprise the group. For example, to return only resources representing Compute Engine VM instances, use this filter: `resource.type = "gce_instance"` */
  filter?: string;
  /** A positive number that is the maximum number of results to return. */
  pageSize?: number;
  /** Required. The group whose members are listed. The format is: projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID] */
  name: string;
  /** If this field is not empty then it must contain the next_page_token value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call. */
  pageToken?: string;
  /** Required. The end of the time interval. */
  "interval.endTime"?: string;
  /** Optional. The beginning of the time interval. The default value for the start time is the end time. The start time must not be later than the end time. */
  "interval.startTime"?: string;
}

export const ListProjectsGroupsMembersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    "interval.endTime": Schema.optional(Schema.String).pipe(
      T.HttpQuery("interval.endTime"),
    ),
    "interval.startTime": Schema.optional(Schema.String).pipe(
      T.HttpQuery("interval.startTime"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}/members" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsGroupsMembersRequest>;

export type ListProjectsGroupsMembersResponse = ListGroupMembersResponse;
export const ListProjectsGroupsMembersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListGroupMembersResponse;

export type ListProjectsGroupsMembersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the monitored resources that are members of a group. */
export const listProjectsGroupsMembers: API.PaginatedOperationMethod<
  ListProjectsGroupsMembersRequest,
  ListProjectsGroupsMembersResponse,
  ListProjectsGroupsMembersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsGroupsMembersRequest,
  output: ListProjectsGroupsMembersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsNotificationChannelsRequest {
  /** Optional. If provided, this field specifies the criteria that must be met by notification channels to be included in the response.For more details, see sorting and filtering (https://cloud.google.com/monitoring/api/v3/sorting-and-filtering). */
  filter?: string;
  /** Optional. The maximum number of results to return in a single response. If not set to a positive number, a reasonable value will be chosen by the service. */
  pageSize?: number;
  /** Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER] This names the container in which to look for the notification channels; it does not name a specific channel. To query a specific channel by REST resource name, use the GetNotificationChannel operation. */
  name: string;
  /** Optional. If non-empty, page_token must contain a value returned as the next_page_token in a previous response to request the next set of results. */
  pageToken?: string;
  /** Optional. A comma-separated list of fields by which to sort the result. Supports the same set of fields as in filter. Entries can be prefixed with a minus sign to sort in descending rather than ascending order.For more details, see sorting and filtering (https://cloud.google.com/monitoring/api/v3/sorting-and-filtering). */
  orderBy?: string;
}

export const ListProjectsNotificationChannelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}/notificationChannels" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsNotificationChannelsRequest>;

export type ListProjectsNotificationChannelsResponse =
  ListNotificationChannelsResponse;
export const ListProjectsNotificationChannelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListNotificationChannelsResponse;

export type ListProjectsNotificationChannelsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the notification channels that have been created for the project. To list the types of notification channels that are supported, use the ListNotificationChannelDescriptors method. */
export const listProjectsNotificationChannels: API.PaginatedOperationMethod<
  ListProjectsNotificationChannelsRequest,
  ListProjectsNotificationChannelsResponse,
  ListProjectsNotificationChannelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsNotificationChannelsRequest,
  output: ListProjectsNotificationChannelsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetVerificationCodeProjectsNotificationChannelsRequest {
  /** Required. The notification channel for which a verification code is to be generated and retrieved. This must name a channel that is already verified; if the specified channel is not verified, the request will fail. */
  name: string;
  /** Request body */
  body?: GetNotificationChannelVerificationCodeRequest;
}

export const GetVerificationCodeProjectsNotificationChannelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GetNotificationChannelVerificationCodeRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3/{+name}:getVerificationCode",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GetVerificationCodeProjectsNotificationChannelsRequest>;

export type GetVerificationCodeProjectsNotificationChannelsResponse =
  GetNotificationChannelVerificationCodeResponse;
export const GetVerificationCodeProjectsNotificationChannelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GetNotificationChannelVerificationCodeResponse;

export type GetVerificationCodeProjectsNotificationChannelsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Requests a verification code for an already verified channel that can then be used in a call to VerifyNotificationChannel() on a different channel with an equivalent identity in the same or in a different project. This makes it possible to copy a channel between projects without requiring manual reverification of the channel. If the channel is not in the verified state, this method will fail (in other words, this may only be used if the SendNotificationChannelVerificationCode and VerifyNotificationChannel paths have already been used to put the given channel into the verified state).There is no guarantee that the verification codes returned by this method will be of a similar structure or form as the ones that are delivered to the channel via SendNotificationChannelVerificationCode; while VerifyNotificationChannel() will recognize both the codes delivered via SendNotificationChannelVerificationCode() and returned from GetNotificationChannelVerificationCode(), it is typically the case that the verification codes delivered via SendNotificationChannelVerificationCode() will be shorter and also have a shorter expiration (e.g. codes such as "G-123456") whereas GetVerificationCode() will typically return a much longer, websafe base 64 encoded string that has a longer expiration time. */
export const getVerificationCodeProjectsNotificationChannels: API.OperationMethod<
  GetVerificationCodeProjectsNotificationChannelsRequest,
  GetVerificationCodeProjectsNotificationChannelsResponse,
  GetVerificationCodeProjectsNotificationChannelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetVerificationCodeProjectsNotificationChannelsRequest,
  output: GetVerificationCodeProjectsNotificationChannelsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SendVerificationCodeProjectsNotificationChannelsRequest {
  /** Required. The notification channel to which to send a verification code. */
  name: string;
  /** Request body */
  body?: SendNotificationChannelVerificationCodeRequest;
}

export const SendVerificationCodeProjectsNotificationChannelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SendNotificationChannelVerificationCodeRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3/{+name}:sendVerificationCode",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SendVerificationCodeProjectsNotificationChannelsRequest>;

export type SendVerificationCodeProjectsNotificationChannelsResponse = Empty;
export const SendVerificationCodeProjectsNotificationChannelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type SendVerificationCodeProjectsNotificationChannelsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Causes a verification code to be delivered to the channel. The code can then be supplied in VerifyNotificationChannel to verify the channel. */
export const sendVerificationCodeProjectsNotificationChannels: API.OperationMethod<
  SendVerificationCodeProjectsNotificationChannelsRequest,
  SendVerificationCodeProjectsNotificationChannelsResponse,
  SendVerificationCodeProjectsNotificationChannelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SendVerificationCodeProjectsNotificationChannelsRequest,
  output: SendVerificationCodeProjectsNotificationChannelsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsNotificationChannelsRequest {
  /** Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER] This names the container into which the channel will be written, this does not name the newly created channel. The resulting channel's name will have a normalized version of this field as a prefix, but will add /notificationChannels/[CHANNEL_ID] to identify the channel. */
  name: string;
  /** Request body */
  body?: NotificationChannel;
}

export const CreateProjectsNotificationChannelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(NotificationChannel).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3/{+name}/notificationChannels",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsNotificationChannelsRequest>;

export type CreateProjectsNotificationChannelsResponse = NotificationChannel;
export const CreateProjectsNotificationChannelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ NotificationChannel;

export type CreateProjectsNotificationChannelsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new notification channel, representing a single notification endpoint such as an email address, SMS number, or PagerDuty service.Design your application to single-thread API calls that modify the state of notification channels in a single project. This includes calls to CreateNotificationChannel, DeleteNotificationChannel and UpdateNotificationChannel. */
export const createProjectsNotificationChannels: API.OperationMethod<
  CreateProjectsNotificationChannelsRequest,
  CreateProjectsNotificationChannelsResponse,
  CreateProjectsNotificationChannelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsNotificationChannelsRequest,
  output: CreateProjectsNotificationChannelsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsNotificationChannelsRequest {
  /** If true, the notification channel will be deleted regardless of its use in alert policies (the policies will be updated to remove the channel). If false, this operation will fail if the notification channel is referenced by existing alerting policies. */
  force?: boolean;
  /** Required. The channel for which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER]/notificationChannels/[CHANNEL_ID] */
  name: string;
}

export const DeleteProjectsNotificationChannelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsNotificationChannelsRequest>;

export type DeleteProjectsNotificationChannelsResponse = Empty;
export const DeleteProjectsNotificationChannelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsNotificationChannelsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a notification channel.Design your application to single-thread API calls that modify the state of notification channels in a single project. This includes calls to CreateNotificationChannel, DeleteNotificationChannel and UpdateNotificationChannel. */
export const deleteProjectsNotificationChannels: API.OperationMethod<
  DeleteProjectsNotificationChannelsRequest,
  DeleteProjectsNotificationChannelsResponse,
  DeleteProjectsNotificationChannelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsNotificationChannelsRequest,
  output: DeleteProjectsNotificationChannelsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface VerifyProjectsNotificationChannelsRequest {
  /** Required. The notification channel to verify. */
  name: string;
  /** Request body */
  body?: VerifyNotificationChannelRequest;
}

export const VerifyProjectsNotificationChannelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(VerifyNotificationChannelRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v3/{+name}:verify", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<VerifyProjectsNotificationChannelsRequest>;

export type VerifyProjectsNotificationChannelsResponse = NotificationChannel;
export const VerifyProjectsNotificationChannelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ NotificationChannel;

export type VerifyProjectsNotificationChannelsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Verifies a NotificationChannel by proving receipt of the code delivered to the channel as a result of calling SendNotificationChannelVerificationCode. */
export const verifyProjectsNotificationChannels: API.OperationMethod<
  VerifyProjectsNotificationChannelsRequest,
  VerifyProjectsNotificationChannelsResponse,
  VerifyProjectsNotificationChannelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: VerifyProjectsNotificationChannelsRequest,
  output: VerifyProjectsNotificationChannelsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsNotificationChannelsRequest {
  /** Required. The channel for which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER]/notificationChannels/[CHANNEL_ID] */
  name: string;
}

export const GetProjectsNotificationChannelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsNotificationChannelsRequest>;

export type GetProjectsNotificationChannelsResponse = NotificationChannel;
export const GetProjectsNotificationChannelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ NotificationChannel;

export type GetProjectsNotificationChannelsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a single notification channel. The channel includes the relevant configuration details with which the channel was created. However, the response may truncate or omit passwords, API keys, or other private key matter and thus the response may not be 100% identical to the information that was supplied in the call to the create method. */
export const getProjectsNotificationChannels: API.OperationMethod<
  GetProjectsNotificationChannelsRequest,
  GetProjectsNotificationChannelsResponse,
  GetProjectsNotificationChannelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsNotificationChannelsRequest,
  output: GetProjectsNotificationChannelsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsNotificationChannelsRequest {
  /** Optional. The fields to update. */
  updateMask?: string;
  /** Identifier. The full REST resource name for this channel. The format is: projects/[PROJECT_ID_OR_NUMBER]/notificationChannels/[CHANNEL_ID] The [CHANNEL_ID] is automatically assigned by the server on creation. */
  name: string;
  /** Request body */
  body?: NotificationChannel;
}

export const PatchProjectsNotificationChannelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(NotificationChannel).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsNotificationChannelsRequest>;

export type PatchProjectsNotificationChannelsResponse = NotificationChannel;
export const PatchProjectsNotificationChannelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ NotificationChannel;

export type PatchProjectsNotificationChannelsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a notification channel. Fields not specified in the field mask remain unchanged.Design your application to single-thread API calls that modify the state of notification channels in a single project. This includes calls to CreateNotificationChannel, DeleteNotificationChannel and UpdateNotificationChannel. */
export const patchProjectsNotificationChannels: API.OperationMethod<
  PatchProjectsNotificationChannelsRequest,
  PatchProjectsNotificationChannelsResponse,
  PatchProjectsNotificationChannelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsNotificationChannelsRequest,
  output: PatchProjectsNotificationChannelsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsUptimeCheckConfigsRequest {
  /** Identifier. A unique resource name for this Uptime check configuration. The format is: projects/[PROJECT_ID_OR_NUMBER]/uptimeCheckConfigs/[UPTIME_CHECK_ID] [PROJECT_ID_OR_NUMBER] is the Workspace host project associated with the Uptime check.This field should be omitted when creating the Uptime check configuration; on create, the resource name is assigned by the server and included in the response. */
  name: string;
  /** Optional. If present, only the listed fields in the current Uptime check configuration are updated with values from the new configuration. If this field is empty, then the current configuration is completely replaced with the new configuration. */
  updateMask?: string;
  /** Request body */
  body?: UptimeCheckConfig;
}

export const PatchProjectsUptimeCheckConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(UptimeCheckConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsUptimeCheckConfigsRequest>;

export type PatchProjectsUptimeCheckConfigsResponse = UptimeCheckConfig;
export const PatchProjectsUptimeCheckConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UptimeCheckConfig;

export type PatchProjectsUptimeCheckConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an Uptime check configuration. You can either replace the entire configuration with a new one or replace only certain fields in the current configuration by specifying the fields to be updated via updateMask. Returns the updated configuration. */
export const patchProjectsUptimeCheckConfigs: API.OperationMethod<
  PatchProjectsUptimeCheckConfigsRequest,
  PatchProjectsUptimeCheckConfigsResponse,
  PatchProjectsUptimeCheckConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsUptimeCheckConfigsRequest,
  output: PatchProjectsUptimeCheckConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsUptimeCheckConfigsRequest {
  /** Required. The Uptime check configuration to retrieve. The format is: projects/[PROJECT_ID_OR_NUMBER]/uptimeCheckConfigs/[UPTIME_CHECK_ID] */
  name: string;
}

export const GetProjectsUptimeCheckConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsUptimeCheckConfigsRequest>;

export type GetProjectsUptimeCheckConfigsResponse = UptimeCheckConfig;
export const GetProjectsUptimeCheckConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UptimeCheckConfig;

export type GetProjectsUptimeCheckConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a single Uptime check configuration. */
export const getProjectsUptimeCheckConfigs: API.OperationMethod<
  GetProjectsUptimeCheckConfigsRequest,
  GetProjectsUptimeCheckConfigsResponse,
  GetProjectsUptimeCheckConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsUptimeCheckConfigsRequest,
  output: GetProjectsUptimeCheckConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsUptimeCheckConfigsRequest {
  /** Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) in which to create the Uptime check. The format is: projects/[PROJECT_ID_OR_NUMBER] */
  parent: string;
  /** Request body */
  body?: UptimeCheckConfig;
}

export const CreateProjectsUptimeCheckConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(UptimeCheckConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3/{+parent}/uptimeCheckConfigs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsUptimeCheckConfigsRequest>;

export type CreateProjectsUptimeCheckConfigsResponse = UptimeCheckConfig;
export const CreateProjectsUptimeCheckConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UptimeCheckConfig;

export type CreateProjectsUptimeCheckConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Uptime check configuration. */
export const createProjectsUptimeCheckConfigs: API.OperationMethod<
  CreateProjectsUptimeCheckConfigsRequest,
  CreateProjectsUptimeCheckConfigsResponse,
  CreateProjectsUptimeCheckConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsUptimeCheckConfigsRequest,
  output: CreateProjectsUptimeCheckConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsUptimeCheckConfigsRequest {
  /** Required. The Uptime check configuration to delete. The format is: projects/[PROJECT_ID_OR_NUMBER]/uptimeCheckConfigs/[UPTIME_CHECK_ID] */
  name: string;
}

export const DeleteProjectsUptimeCheckConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsUptimeCheckConfigsRequest>;

export type DeleteProjectsUptimeCheckConfigsResponse = Empty;
export const DeleteProjectsUptimeCheckConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsUptimeCheckConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an Uptime check configuration. Note that this method will fail if the Uptime check configuration is referenced by an alert policy or other dependent configs that would be rendered invalid by the deletion. */
export const deleteProjectsUptimeCheckConfigs: API.OperationMethod<
  DeleteProjectsUptimeCheckConfigsRequest,
  DeleteProjectsUptimeCheckConfigsResponse,
  DeleteProjectsUptimeCheckConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsUptimeCheckConfigsRequest,
  output: DeleteProjectsUptimeCheckConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsUptimeCheckConfigsRequest {
  /** Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) whose Uptime check configurations are listed. The format is: projects/[PROJECT_ID_OR_NUMBER] */
  parent: string;
  /** If provided, this field specifies the criteria that must be met by uptime checks to be included in the response.For more details, see Filtering syntax (https://cloud.google.com/monitoring/api/v3/sorting-and-filtering#filter_syntax). */
  filter?: string;
  /** The maximum number of results to return in a single response. The server may further constrain the maximum number of results returned in a single page. If the page_size is <=0, the server will decide the number of results to be returned. */
  pageSize?: number;
  /** If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return more results from the previous method call. */
  pageToken?: string;
}

export const ListProjectsUptimeCheckConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+parent}/uptimeCheckConfigs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsUptimeCheckConfigsRequest>;

export type ListProjectsUptimeCheckConfigsResponse =
  ListUptimeCheckConfigsResponse;
export const ListProjectsUptimeCheckConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListUptimeCheckConfigsResponse;

export type ListProjectsUptimeCheckConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the existing valid Uptime check configurations for the project (leaving out any invalid configurations). */
export const listProjectsUptimeCheckConfigs: API.PaginatedOperationMethod<
  ListProjectsUptimeCheckConfigsRequest,
  ListProjectsUptimeCheckConfigsResponse,
  ListProjectsUptimeCheckConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsUptimeCheckConfigsRequest,
  output: ListProjectsUptimeCheckConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListFoldersTimeSeriesRequest {
  /** Required. A monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) that specifies which time series should be returned. The filter must specify a single metric type, and can additionally specify metric labels and other information. For example: metric.type = "compute.googleapis.com/instance/cpu/usage_time" AND metric.labels.instance_name = "my-instance-name" */
  filter?: string;
  /** The alignment_period specifies a time interval, in seconds, that is used to divide the data in all the time series into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.The value must be at least 60 seconds. If a per-series aligner other than ALIGN_NONE is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner ALIGN_NONE is specified, then this field is ignored.The maximum value of the alignment_period is 104 weeks (2 years) for charts, and 90,000 seconds (25 hours) for alerting policies. */
  "aggregation.alignmentPeriod"?: string;
  /** A positive number that is the maximum number of results to return. If page_size is empty or more than 100,000 results, the effective page_size is 100,000 results. If view is set to FULL, this is the maximum number of Points returned. If view is set to HEADERS, this is the maximum number of TimeSeries returned. */
  pageSize?: number;
  /** If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call. */
  pageToken?: string;
  /** Optional. The beginning of the time interval. The default value for the start time is the end time. The start time must not be later than the end time. */
  "interval.startTime"?: string;
  /** The set of fields to preserve when cross_series_reducer is specified. The group_by_fields determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The cross_series_reducer is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains resource.type. Fields not specified in group_by_fields are aggregated away. If group_by_fields is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If cross_series_reducer is not defined, this field is ignored. */
  "aggregation.groupByFields"?: string[];
  /** Required. The project (https://cloud.google.com/monitoring/api/v3#project_name), organization or folder on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER] organizations/[ORGANIZATION_ID] folders/[FOLDER_ID] */
  name: string;
  /** An Aligner describes how to bring the data points in a single time series into temporal alignment. Except for ALIGN_NONE, all alignments cause all the data points in an alignment_period to be mathematically grouped together, resulting in a single data point for each alignment_period with end timestamp at the end of the period.Not all alignment operations may be applied to all time series. The valid choices depend on the metric_kind and value_type of the original time series. Alignment can change the metric_kind or the value_type of the time series.Time series data must be aligned in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified and not equal to ALIGN_NONE and alignment_period must be specified; otherwise, an error is returned. */
  "secondaryAggregation.perSeriesAligner"?:
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
  /** The set of fields to preserve when cross_series_reducer is specified. The group_by_fields determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The cross_series_reducer is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains resource.type. Fields not specified in group_by_fields are aggregated away. If group_by_fields is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If cross_series_reducer is not defined, this field is ignored. */
  "secondaryAggregation.groupByFields"?: string[];
  /** Required. Specifies which information is returned about the time series. */
  view?: "FULL" | "HEADERS" | (string & {});
  /** The alignment_period specifies a time interval, in seconds, that is used to divide the data in all the time series into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.The value must be at least 60 seconds. If a per-series aligner other than ALIGN_NONE is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner ALIGN_NONE is specified, then this field is ignored.The maximum value of the alignment_period is 104 weeks (2 years) for charts, and 90,000 seconds (25 hours) for alerting policies. */
  "secondaryAggregation.alignmentPeriod"?: string;
  /** The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.Not all reducer operations can be applied to all time series. The valid choices depend on the metric_kind and the value_type of the original time series. Reduction can yield a time series with a different metric_kind or value_type than the input time series.Time series data must first be aligned (see per_series_aligner) in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified, and must not be ALIGN_NONE. An alignment_period must also be specified; otherwise, an error is returned. */
  "secondaryAggregation.crossSeriesReducer"?:
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
  /** Required. The end of the time interval. */
  "interval.endTime"?: string;
  /** The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.Not all reducer operations can be applied to all time series. The valid choices depend on the metric_kind and the value_type of the original time series. Reduction can yield a time series with a different metric_kind or value_type than the input time series.Time series data must first be aligned (see per_series_aligner) in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified, and must not be ALIGN_NONE. An alignment_period must also be specified; otherwise, an error is returned. */
  "aggregation.crossSeriesReducer"?:
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
  /** Unsupported: must be left blank. The points in each time series are currently returned in reverse time order (most recent to oldest). */
  orderBy?: string;
  /** An Aligner describes how to bring the data points in a single time series into temporal alignment. Except for ALIGN_NONE, all alignments cause all the data points in an alignment_period to be mathematically grouped together, resulting in a single data point for each alignment_period with end timestamp at the end of the period.Not all alignment operations may be applied to all time series. The valid choices depend on the metric_kind and value_type of the original time series. Alignment can change the metric_kind or the value_type of the time series.Time series data must be aligned in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified and not equal to ALIGN_NONE and alignment_period must be specified; otherwise, an error is returned. */
  "aggregation.perSeriesAligner"?:
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
}

export const ListFoldersTimeSeriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    "aggregation.alignmentPeriod": Schema.optional(Schema.String).pipe(
      T.HttpQuery("aggregation.alignmentPeriod"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    "interval.startTime": Schema.optional(Schema.String).pipe(
      T.HttpQuery("interval.startTime"),
    ),
    "aggregation.groupByFields": Schema.optional(
      Schema.Array(Schema.String),
    ).pipe(T.HttpQuery("aggregation.groupByFields")),
    name: Schema.String.pipe(T.HttpPath("name")),
    "secondaryAggregation.perSeriesAligner": Schema.optional(
      Schema.String,
    ).pipe(T.HttpQuery("secondaryAggregation.perSeriesAligner")),
    "secondaryAggregation.groupByFields": Schema.optional(
      Schema.Array(Schema.String),
    ).pipe(T.HttpQuery("secondaryAggregation.groupByFields")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    "secondaryAggregation.alignmentPeriod": Schema.optional(Schema.String).pipe(
      T.HttpQuery("secondaryAggregation.alignmentPeriod"),
    ),
    "secondaryAggregation.crossSeriesReducer": Schema.optional(
      Schema.String,
    ).pipe(T.HttpQuery("secondaryAggregation.crossSeriesReducer")),
    "interval.endTime": Schema.optional(Schema.String).pipe(
      T.HttpQuery("interval.endTime"),
    ),
    "aggregation.crossSeriesReducer": Schema.optional(Schema.String).pipe(
      T.HttpQuery("aggregation.crossSeriesReducer"),
    ),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    "aggregation.perSeriesAligner": Schema.optional(Schema.String).pipe(
      T.HttpQuery("aggregation.perSeriesAligner"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}/timeSeries" }),
    svc,
  ) as unknown as Schema.Schema<ListFoldersTimeSeriesRequest>;

export type ListFoldersTimeSeriesResponse = ListTimeSeriesResponse;
export const ListFoldersTimeSeriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListTimeSeriesResponse;

export type ListFoldersTimeSeriesError = DefaultErrors | NotFound | Forbidden;

/** Lists time series that match a filter. */
export const listFoldersTimeSeries: API.PaginatedOperationMethod<
  ListFoldersTimeSeriesRequest,
  ListFoldersTimeSeriesResponse,
  ListFoldersTimeSeriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListFoldersTimeSeriesRequest,
  output: ListFoldersTimeSeriesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
