// ==========================================================================
// Google Sheets API (sheets v4)
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
  name: "sheets",
  version: "v4",
  rootUrl: "https://sheets.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface DimensionRange {
  /** The start (inclusive) of the span, or not set if unbounded. */
  startIndex?: number;
  /** The end (exclusive) of the span, or not set if unbounded. */
  endIndex?: number;
  /** The sheet this span is on. */
  sheetId?: number;
  /** The dimension of the span. */
  dimension?: "DIMENSION_UNSPECIFIED" | "ROWS" | "COLUMNS" | (string & {});
}

export const DimensionRange = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  startIndex: Schema.optional(Schema.Number),
  endIndex: Schema.optional(Schema.Number),
  sheetId: Schema.optional(Schema.Number),
  dimension: Schema.optional(Schema.String),
}).annotate({ identifier: "DimensionRange" });

export interface DeveloperMetadataLocation {
  /** Represents the row or column when metadata is associated with a dimension. The specified DimensionRange must represent a single row or column. It cannot be unbounded or span multiple rows or columns. */
  dimensionRange?: DimensionRange;
  /** The type of location this object represents. This field is read-only. */
  locationType?:
    | "DEVELOPER_METADATA_LOCATION_TYPE_UNSPECIFIED"
    | "ROW"
    | "COLUMN"
    | "SHEET"
    | "SPREADSHEET"
    | (string & {});
  /** True when metadata is associated with an entire spreadsheet. */
  spreadsheet?: boolean;
  /** The ID of the sheet when metadata is associated with an entire sheet. */
  sheetId?: number;
}

export const DeveloperMetadataLocation =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dimensionRange: Schema.optional(DimensionRange),
    locationType: Schema.optional(Schema.String),
    spreadsheet: Schema.optional(Schema.Boolean),
    sheetId: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DeveloperMetadataLocation" });

export interface DeveloperMetadata {
  /** The spreadsheet-scoped unique ID that identifies the metadata. IDs may be specified when metadata is created, otherwise one will be randomly generated and assigned. Must be positive. */
  metadataId?: number;
  /** Data associated with the metadata's key. */
  metadataValue?: string;
  /** The location where the metadata is associated. */
  location?: DeveloperMetadataLocation;
  /** The metadata key. There may be multiple metadata in a spreadsheet with the same key. Developer metadata must always have a key specified. */
  metadataKey?: string;
  /** The metadata visibility. Developer metadata must always have visibility specified. */
  visibility?:
    | "DEVELOPER_METADATA_VISIBILITY_UNSPECIFIED"
    | "DOCUMENT"
    | "PROJECT"
    | (string & {});
}

export const DeveloperMetadata = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  metadataId: Schema.optional(Schema.Number),
  metadataValue: Schema.optional(Schema.String),
  location: Schema.optional(DeveloperMetadataLocation),
  metadataKey: Schema.optional(Schema.String),
  visibility: Schema.optional(Schema.String),
}).annotate({ identifier: "DeveloperMetadata" });

export interface CreateDeveloperMetadataRequest {
  /** The developer metadata to create. */
  developerMetadata?: DeveloperMetadata;
}

export const CreateDeveloperMetadataRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    developerMetadata: Schema.optional(DeveloperMetadata),
  }).annotate({ identifier: "CreateDeveloperMetadataRequest" });

export interface DataSourceColumnReference {
  /** The display name of the column. It should be unique within a data source. */
  name?: string;
}

export const DataSourceColumnReference =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataSourceColumnReference" });

export interface ChartDateTimeRule {
  /** The type of date-time grouping to apply. */
  type?:
    | "CHART_DATE_TIME_RULE_TYPE_UNSPECIFIED"
    | "SECOND"
    | "MINUTE"
    | "HOUR"
    | "HOUR_MINUTE"
    | "HOUR_MINUTE_AMPM"
    | "DAY_OF_WEEK"
    | "DAY_OF_YEAR"
    | "DAY_OF_MONTH"
    | "DAY_MONTH"
    | "MONTH"
    | "QUARTER"
    | "YEAR"
    | "YEAR_MONTH"
    | "YEAR_QUARTER"
    | "YEAR_MONTH_DAY"
    | (string & {});
}

export const ChartDateTimeRule = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
}).annotate({ identifier: "ChartDateTimeRule" });

export interface ChartHistogramRule {
  /** The maximum value at which items are placed into buckets. Values greater than the maximum are grouped into a single bucket. If omitted, it is determined by the maximum item value. */
  maxValue?: number;
  /** The size of the buckets that are created. Must be positive. */
  intervalSize?: number;
  /** The minimum value at which items are placed into buckets. Values that are less than the minimum are grouped into a single bucket. If omitted, it is determined by the minimum item value. */
  minValue?: number;
}

export const ChartHistogramRule = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  maxValue: Schema.optional(Schema.Number),
  intervalSize: Schema.optional(Schema.Number),
  minValue: Schema.optional(Schema.Number),
}).annotate({ identifier: "ChartHistogramRule" });

export interface ChartGroupRule {
  /** A ChartDateTimeRule. */
  dateTimeRule?: ChartDateTimeRule;
  /** A ChartHistogramRule */
  histogramRule?: ChartHistogramRule;
}

export const ChartGroupRule = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dateTimeRule: Schema.optional(ChartDateTimeRule),
  histogramRule: Schema.optional(ChartHistogramRule),
}).annotate({ identifier: "ChartGroupRule" });

export interface GridRange {
  /** The end column (exclusive) of the range, or not set if unbounded. */
  endColumnIndex?: number;
  /** The sheet this range is on. */
  sheetId?: number;
  /** The start row (inclusive) of the range, or not set if unbounded. */
  startRowIndex?: number;
  /** The end row (exclusive) of the range, or not set if unbounded. */
  endRowIndex?: number;
  /** The start column (inclusive) of the range, or not set if unbounded. */
  startColumnIndex?: number;
}

export const GridRange = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  endColumnIndex: Schema.optional(Schema.Number),
  sheetId: Schema.optional(Schema.Number),
  startRowIndex: Schema.optional(Schema.Number),
  endRowIndex: Schema.optional(Schema.Number),
  startColumnIndex: Schema.optional(Schema.Number),
}).annotate({ identifier: "GridRange" });

export interface ChartSourceRange {
  /** The ranges of data for a series or domain. Exactly one dimension must have a length of 1, and all sources in the list must have the same dimension with length 1. The domain (if it exists) & all series must have the same number of source ranges. If using more than one source range, then the source range at a given offset must be in order and contiguous across the domain and series. For example, these are valid configurations: domain sources: A1:A5 series1 sources: B1:B5 series2 sources: D6:D10 domain sources: A1:A5, C10:C12 series1 sources: B1:B5, D10:D12 series2 sources: C1:C5, E10:E12 */
  sources?: ReadonlyArray<GridRange>;
}

export const ChartSourceRange = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sources: Schema.optional(Schema.Array(GridRange)),
}).annotate({ identifier: "ChartSourceRange" });

export interface ChartData {
  /** The aggregation type for the series of a data source chart. Only supported for data source charts. */
  aggregateType?:
    | "CHART_AGGREGATE_TYPE_UNSPECIFIED"
    | "AVERAGE"
    | "COUNT"
    | "MAX"
    | "MEDIAN"
    | "MIN"
    | "SUM"
    | (string & {});
  /** The reference to the data source column that the data reads from. */
  columnReference?: DataSourceColumnReference;
  /** The rule to group the data by if the ChartData backs the domain of a data source chart. Only supported for data source charts. */
  groupRule?: ChartGroupRule;
  /** The source ranges of the data. */
  sourceRange?: ChartSourceRange;
}

export const ChartData = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  aggregateType: Schema.optional(Schema.String),
  columnReference: Schema.optional(DataSourceColumnReference),
  groupRule: Schema.optional(ChartGroupRule),
  sourceRange: Schema.optional(ChartSourceRange),
}).annotate({ identifier: "ChartData" });

export interface Color {
  /** The amount of blue in the color as a value in the interval [0, 1]. */
  blue?: number;
  /** The amount of red in the color as a value in the interval [0, 1]. */
  red?: number;
  /** The amount of green in the color as a value in the interval [0, 1]. */
  green?: number;
  /** The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation: `pixel color = alpha * (this color) + (1.0 - alpha) * (background color)` This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is rendered as a solid color (as if the alpha value had been explicitly given a value of 1.0). */
  alpha?: number;
}

export const Color = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  blue: Schema.optional(Schema.Number),
  red: Schema.optional(Schema.Number),
  green: Schema.optional(Schema.Number),
  alpha: Schema.optional(Schema.Number),
}).annotate({ identifier: "Color" });

export interface ColorStyle {
  /** RGB color. The [`alpha`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/other#Color.FIELDS.alpha) value in the [`Color`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/other#color) object isn't generally supported. */
  rgbColor?: Color;
  /** Theme color. */
  themeColor?:
    | "THEME_COLOR_TYPE_UNSPECIFIED"
    | "TEXT"
    | "BACKGROUND"
    | "ACCENT1"
    | "ACCENT2"
    | "ACCENT3"
    | "ACCENT4"
    | "ACCENT5"
    | "ACCENT6"
    | "LINK"
    | (string & {});
}

export const ColorStyle = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  rgbColor: Schema.optional(Color),
  themeColor: Schema.optional(Schema.String),
}).annotate({ identifier: "ColorStyle" });

export interface Link {
  /** The link identifier. */
  uri?: string;
}

export const Link = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  uri: Schema.optional(Schema.String),
}).annotate({ identifier: "Link" });

export interface TextFormat {
  /** True if the text is bold. */
  bold?: boolean;
  /** The size of the font. */
  fontSize?: number;
  /** True if the text is italicized. */
  italic?: boolean;
  /** The foreground color of the text. If foreground_color is also set, this field takes precedence. */
  foregroundColorStyle?: ColorStyle;
  /** The foreground color of the text. Deprecated: Use foreground_color_style. */
  foregroundColor?: Color;
  /** The font family. */
  fontFamily?: string;
  /** The link destination of the text, if any. Setting the link field in a TextFormatRun will clear the cell's existing links or a cell-level link set in the same request. When a link is set, the text foreground color will be set to the default link color and the text will be underlined. If these fields are modified in the same request, those values will be used instead of the link defaults. */
  link?: Link;
  /** True if the text has a strikethrough. */
  strikethrough?: boolean;
  /** True if the text is underlined. */
  underline?: boolean;
}

export const TextFormat = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  bold: Schema.optional(Schema.Boolean),
  fontSize: Schema.optional(Schema.Number),
  italic: Schema.optional(Schema.Boolean),
  foregroundColorStyle: Schema.optional(ColorStyle),
  foregroundColor: Schema.optional(Color),
  fontFamily: Schema.optional(Schema.String),
  link: Schema.optional(Link),
  strikethrough: Schema.optional(Schema.Boolean),
  underline: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "TextFormat" });

export interface DataLabel {
  /** The type of the data label. */
  type?:
    | "DATA_LABEL_TYPE_UNSPECIFIED"
    | "NONE"
    | "DATA"
    | "CUSTOM"
    | (string & {});
  /** Data to use for custom labels. Only used if type is set to CUSTOM. This data must be the same length as the series or other element this data label is applied to. In addition, if the series is split into multiple source ranges, this source data must come from the next column in the source data. For example, if the series is B2:B4,E6:E8 then this data must come from C2:C4,F6:F8. */
  customLabelData?: ChartData;
  /** The text format used for the data label. The link field is not supported. */
  textFormat?: TextFormat;
  /** The placement of the data label relative to the labeled data. */
  placement?:
    | "DATA_LABEL_PLACEMENT_UNSPECIFIED"
    | "CENTER"
    | "LEFT"
    | "RIGHT"
    | "ABOVE"
    | "BELOW"
    | "INSIDE_END"
    | "INSIDE_BASE"
    | "OUTSIDE_END"
    | (string & {});
}

export const DataLabel = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
  customLabelData: Schema.optional(ChartData),
  textFormat: Schema.optional(TextFormat),
  placement: Schema.optional(Schema.String),
}).annotate({ identifier: "DataLabel" });

export interface DeleteNamedRangeRequest {
  /** The ID of the named range to delete. */
  namedRangeId?: string;
}

export const DeleteNamedRangeRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    namedRangeId: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeleteNamedRangeRequest" });

export interface ChartCustomNumberFormatOptions {
  /** Custom prefix to be prepended to the chart attribute. This field is optional. */
  prefix?: string;
  /** Custom suffix to be appended to the chart attribute. This field is optional. */
  suffix?: string;
}

export const ChartCustomNumberFormatOptions =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    prefix: Schema.optional(Schema.String),
    suffix: Schema.optional(Schema.String),
  }).annotate({ identifier: "ChartCustomNumberFormatOptions" });

export interface TextPosition {
  /** Horizontal alignment setting for the piece of text. */
  horizontalAlignment?:
    | "HORIZONTAL_ALIGN_UNSPECIFIED"
    | "LEFT"
    | "CENTER"
    | "RIGHT"
    | (string & {});
}

export const TextPosition = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  horizontalAlignment: Schema.optional(Schema.String),
}).annotate({ identifier: "TextPosition" });

export interface KeyValueFormat {
  /** Text formatting options for key value. The link field is not supported. */
  textFormat?: TextFormat;
  /** Specifies the horizontal text positioning of key value. This field is optional. If not specified, default positioning is used. */
  position?: TextPosition;
}

export const KeyValueFormat = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  textFormat: Schema.optional(TextFormat),
  position: Schema.optional(TextPosition),
}).annotate({ identifier: "KeyValueFormat" });

export interface BaselineValueFormat {
  /** Specifies the horizontal text positioning of baseline value. This field is optional. If not specified, default positioning is used. */
  position?: TextPosition;
  /** Color to be used, in case baseline value represents a positive change for key value. This field is optional. Deprecated: Use positive_color_style. */
  positiveColor?: Color;
  /** Color to be used, in case baseline value represents a positive change for key value. This field is optional. If positive_color is also set, this field takes precedence. */
  positiveColorStyle?: ColorStyle;
  /** Text formatting options for baseline value. The link field is not supported. */
  textFormat?: TextFormat;
  /** Color to be used, in case baseline value represents a negative change for key value. This field is optional. Deprecated: Use negative_color_style. */
  negativeColor?: Color;
  /** Description which is appended after the baseline value. This field is optional. */
  description?: string;
  /** Color to be used, in case baseline value represents a negative change for key value. This field is optional. If negative_color is also set, this field takes precedence. */
  negativeColorStyle?: ColorStyle;
  /** The comparison type of key value with baseline value. */
  comparisonType?:
    | "COMPARISON_TYPE_UNDEFINED"
    | "ABSOLUTE_DIFFERENCE"
    | "PERCENTAGE_DIFFERENCE"
    | (string & {});
}

export const BaselineValueFormat = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  position: Schema.optional(TextPosition),
  positiveColor: Schema.optional(Color),
  positiveColorStyle: Schema.optional(ColorStyle),
  textFormat: Schema.optional(TextFormat),
  negativeColor: Schema.optional(Color),
  description: Schema.optional(Schema.String),
  negativeColorStyle: Schema.optional(ColorStyle),
  comparisonType: Schema.optional(Schema.String),
}).annotate({ identifier: "BaselineValueFormat" });

export interface ScorecardChartSpec {
  /** The data for scorecard key value. */
  keyValueData?: ChartData;
  /** The number format source used in the scorecard chart. This field is optional. */
  numberFormatSource?:
    | "CHART_NUMBER_FORMAT_SOURCE_UNDEFINED"
    | "FROM_DATA"
    | "CUSTOM"
    | (string & {});
  /** The data for scorecard baseline value. This field is optional. */
  baselineValueData?: ChartData;
  /** Custom formatting options for numeric key/baseline values in scorecard chart. This field is used only when number_format_source is set to CUSTOM. This field is optional. */
  customFormatOptions?: ChartCustomNumberFormatOptions;
  /** Formatting options for key value. */
  keyValueFormat?: KeyValueFormat;
  /** Formatting options for baseline value. This field is needed only if baseline_value_data is specified. */
  baselineValueFormat?: BaselineValueFormat;
  /** Value to scale scorecard key and baseline value. For example, a factor of 10 can be used to divide all values in the chart by 10. This field is optional. */
  scaleFactor?: number;
  /** The aggregation type for key and baseline chart data in scorecard chart. This field is not supported for data source charts. Use the ChartData.aggregateType field of the key_value_data or baseline_value_data instead for data source charts. This field is optional. */
  aggregateType?:
    | "CHART_AGGREGATE_TYPE_UNSPECIFIED"
    | "AVERAGE"
    | "COUNT"
    | "MAX"
    | "MEDIAN"
    | "MIN"
    | "SUM"
    | (string & {});
}

export const ScorecardChartSpec = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  keyValueData: Schema.optional(ChartData),
  numberFormatSource: Schema.optional(Schema.String),
  baselineValueData: Schema.optional(ChartData),
  customFormatOptions: Schema.optional(ChartCustomNumberFormatOptions),
  keyValueFormat: Schema.optional(KeyValueFormat),
  baselineValueFormat: Schema.optional(BaselineValueFormat),
  scaleFactor: Schema.optional(Schema.Number),
  aggregateType: Schema.optional(Schema.String),
}).annotate({ identifier: "ScorecardChartSpec" });

export interface GridProperties {
  /** The number of rows in the grid. */
  rowCount?: number;
  /** True if the grid isn't showing gridlines in the UI. */
  hideGridlines?: boolean;
  /** The number of columns in the grid. */
  columnCount?: number;
  /** True if the row grouping control toggle is shown after the group. */
  rowGroupControlAfter?: boolean;
  /** True if the column grouping control toggle is shown after the group. */
  columnGroupControlAfter?: boolean;
  /** The number of rows that are frozen in the grid. */
  frozenRowCount?: number;
  /** The number of columns that are frozen in the grid. */
  frozenColumnCount?: number;
}

export const GridProperties = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  rowCount: Schema.optional(Schema.Number),
  hideGridlines: Schema.optional(Schema.Boolean),
  columnCount: Schema.optional(Schema.Number),
  rowGroupControlAfter: Schema.optional(Schema.Boolean),
  columnGroupControlAfter: Schema.optional(Schema.Boolean),
  frozenRowCount: Schema.optional(Schema.Number),
  frozenColumnCount: Schema.optional(Schema.Number),
}).annotate({ identifier: "GridProperties" });

export interface DataExecutionStatus {
  /** The state of the data execution. */
  state?:
    | "DATA_EXECUTION_STATE_UNSPECIFIED"
    | "NOT_STARTED"
    | "RUNNING"
    | "CANCELLING"
    | "SUCCEEDED"
    | "FAILED"
    | (string & {});
  /** The error message, which may be empty. */
  errorMessage?: string;
  /** Gets the time the data last successfully refreshed. */
  lastRefreshTime?: string;
  /** The error code. */
  errorCode?:
    | "DATA_EXECUTION_ERROR_CODE_UNSPECIFIED"
    | "TIMED_OUT"
    | "TOO_MANY_ROWS"
    | "TOO_MANY_COLUMNS"
    | "TOO_MANY_CELLS"
    | "ENGINE"
    | "PARAMETER_INVALID"
    | "UNSUPPORTED_DATA_TYPE"
    | "DUPLICATE_COLUMN_NAMES"
    | "INTERRUPTED"
    | "CONCURRENT_QUERY"
    | "OTHER"
    | "TOO_MANY_CHARS_PER_CELL"
    | "DATA_NOT_FOUND"
    | "PERMISSION_DENIED"
    | "MISSING_COLUMN_ALIAS"
    | "OBJECT_NOT_FOUND"
    | "OBJECT_IN_ERROR_STATE"
    | "OBJECT_SPEC_INVALID"
    | "DATA_EXECUTION_CANCELLED"
    | (string & {});
}

export const DataExecutionStatus = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  state: Schema.optional(Schema.String),
  errorMessage: Schema.optional(Schema.String),
  lastRefreshTime: Schema.optional(Schema.String),
  errorCode: Schema.optional(Schema.String),
}).annotate({ identifier: "DataExecutionStatus" });

export interface DataSourceColumn {
  /** The column reference. */
  reference?: DataSourceColumnReference;
  /** The formula of the calculated column. */
  formula?: string;
}

export const DataSourceColumn = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reference: Schema.optional(DataSourceColumnReference),
  formula: Schema.optional(Schema.String),
}).annotate({ identifier: "DataSourceColumn" });

export interface DataSourceSheetProperties {
  /** The data execution status. */
  dataExecutionStatus?: DataExecutionStatus;
  /** ID of the DataSource the sheet is connected to. */
  dataSourceId?: string;
  /** The columns displayed on the sheet, corresponding to the values in RowData. */
  columns?: ReadonlyArray<DataSourceColumn>;
}

export const DataSourceSheetProperties =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataExecutionStatus: Schema.optional(DataExecutionStatus),
    dataSourceId: Schema.optional(Schema.String),
    columns: Schema.optional(Schema.Array(DataSourceColumn)),
  }).annotate({ identifier: "DataSourceSheetProperties" });

export interface SheetProperties {
  /** The ID of the sheet. Must be non-negative. This field cannot be changed once set. */
  sheetId?: number;
  /** The name of the sheet. */
  title?: string;
  /** The type of sheet. Defaults to GRID. This field cannot be changed once set. */
  sheetType?:
    | "SHEET_TYPE_UNSPECIFIED"
    | "GRID"
    | "OBJECT"
    | "DATA_SOURCE"
    | (string & {});
  /** True if the sheet is hidden in the UI, false if it's visible. */
  hidden?: boolean;
  /** The color of the tab in the UI. Deprecated: Use tab_color_style. */
  tabColor?: Color;
  /** Additional properties of the sheet if this sheet is a grid. (If the sheet is an object sheet, containing a chart or image, then this field will be absent.) When writing it is an error to set any grid properties on non-grid sheets. If this sheet is a DATA_SOURCE sheet, this field is output only but contains the properties that reflect how a data source sheet is rendered in the UI, e.g. row_count. */
  gridProperties?: GridProperties;
  /** The color of the tab in the UI. If tab_color is also set, this field takes precedence. */
  tabColorStyle?: ColorStyle;
  /** The index of the sheet within the spreadsheet. When adding or updating sheet properties, if this field is excluded then the sheet is added or moved to the end of the sheet list. When updating sheet indices or inserting sheets, movement is considered in "before the move" indexes. For example, if there were three sheets (S1, S2, S3) in order to move S1 ahead of S2 the index would have to be set to 2. A sheet index update request is ignored if the requested index is identical to the sheets current index or if the requested new index is equal to the current sheet index + 1. */
  index?: number;
  /** True if the sheet is an RTL sheet instead of an LTR sheet. */
  rightToLeft?: boolean;
  /** Output only. If present, the field contains DATA_SOURCE sheet specific properties. */
  dataSourceSheetProperties?: DataSourceSheetProperties;
}

export const SheetProperties = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sheetId: Schema.optional(Schema.Number),
  title: Schema.optional(Schema.String),
  sheetType: Schema.optional(Schema.String),
  hidden: Schema.optional(Schema.Boolean),
  tabColor: Schema.optional(Color),
  gridProperties: Schema.optional(GridProperties),
  tabColorStyle: Schema.optional(ColorStyle),
  index: Schema.optional(Schema.Number),
  rightToLeft: Schema.optional(Schema.Boolean),
  dataSourceSheetProperties: Schema.optional(DataSourceSheetProperties),
}).annotate({ identifier: "SheetProperties" });

export interface DuplicateSheetResponse {
  /** The properties of the duplicate sheet. */
  properties?: SheetProperties;
}

export const DuplicateSheetResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    properties: Schema.optional(SheetProperties),
  },
).annotate({ identifier: "DuplicateSheetResponse" });

export interface PersonProperties {
  /** Required. The email address linked to this person. This field is always present. */
  email?: string;
  /** Optional. The display format of the person chip. If not set, the default display format is used. */
  displayFormat?:
    | "DISPLAY_FORMAT_UNSPECIFIED"
    | "DEFAULT"
    | "LAST_NAME_COMMA_FIRST_NAME"
    | "EMAIL"
    | (string & {});
}

export const PersonProperties = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  email: Schema.optional(Schema.String),
  displayFormat: Schema.optional(Schema.String),
}).annotate({ identifier: "PersonProperties" });

export interface RichLinkProperties {
  /** Required. The URI to the link. This is always present. */
  uri?: string;
  /** Output only. The [MIME type](https://developers.google.com/drive/api/v3/mime-types) of the link, if there's one (for example, when it's a file in Drive). */
  mimeType?: string;
}

export const RichLinkProperties = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  uri: Schema.optional(Schema.String),
  mimeType: Schema.optional(Schema.String),
}).annotate({ identifier: "RichLinkProperties" });

export interface Chip {
  /** Properties of a linked person. */
  personProperties?: PersonProperties;
  /** Properties of a rich link. */
  richLinkProperties?: RichLinkProperties;
}

export const Chip = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  personProperties: Schema.optional(PersonProperties),
  richLinkProperties: Schema.optional(RichLinkProperties),
}).annotate({ identifier: "Chip" });

export interface BatchClearValuesResponse {
  /** The spreadsheet the updates were applied to. */
  spreadsheetId?: string;
  /** The ranges that were cleared, in A1 notation. If the requests are for an unbounded range or a range larger than the bounds of the sheet, this is the actual ranges that were cleared, bounded to the sheet's limits. */
  clearedRanges?: ReadonlyArray<string>;
}

export const BatchClearValuesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    spreadsheetId: Schema.optional(Schema.String),
    clearedRanges: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "BatchClearValuesResponse" });

export interface TimeOfDay {
  /** Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
  hours?: number;
  /** Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds. */
  seconds?: number;
  /** Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. */
  minutes?: number;
  /** Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999. */
  nanos?: number;
}

export const TimeOfDay = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  hours: Schema.optional(Schema.Number),
  seconds: Schema.optional(Schema.Number),
  minutes: Schema.optional(Schema.Number),
  nanos: Schema.optional(Schema.Number),
}).annotate({ identifier: "TimeOfDay" });

export interface DataSourceRefreshWeeklySchedule {
  /** The start time of a time interval in which a data source refresh is scheduled. Only `hours` part is used. The time interval size defaults to that in the Sheets editor. */
  startTime?: TimeOfDay;
  /** Days of the week to refresh. At least one day must be specified. */
  daysOfWeek?: ReadonlyArray<
    | "DAY_OF_WEEK_UNSPECIFIED"
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | "SUNDAY"
    | (string & {})
  >;
}

export const DataSourceRefreshWeeklySchedule =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(TimeOfDay),
    daysOfWeek: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "DataSourceRefreshWeeklySchedule" });

export interface ConditionValue {
  /** A relative date (based on the current date). Valid only if the type is DATE_BEFORE, DATE_AFTER, DATE_ON_OR_BEFORE or DATE_ON_OR_AFTER. Relative dates are not supported in data validation. They are supported only in conditional formatting and conditional filters. */
  relativeDate?:
    | "RELATIVE_DATE_UNSPECIFIED"
    | "PAST_YEAR"
    | "PAST_MONTH"
    | "PAST_WEEK"
    | "YESTERDAY"
    | "TODAY"
    | "TOMORROW"
    | (string & {});
  /** A value the condition is based on. The value is parsed as if the user typed into a cell. Formulas are supported (and must begin with an `=` or a '+'). */
  userEnteredValue?: string;
}

export const ConditionValue = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  relativeDate: Schema.optional(Schema.String),
  userEnteredValue: Schema.optional(Schema.String),
}).annotate({ identifier: "ConditionValue" });

export interface BooleanCondition {
  /** The type of condition. */
  type?:
    | "CONDITION_TYPE_UNSPECIFIED"
    | "NUMBER_GREATER"
    | "NUMBER_GREATER_THAN_EQ"
    | "NUMBER_LESS"
    | "NUMBER_LESS_THAN_EQ"
    | "NUMBER_EQ"
    | "NUMBER_NOT_EQ"
    | "NUMBER_BETWEEN"
    | "NUMBER_NOT_BETWEEN"
    | "TEXT_CONTAINS"
    | "TEXT_NOT_CONTAINS"
    | "TEXT_STARTS_WITH"
    | "TEXT_ENDS_WITH"
    | "TEXT_EQ"
    | "TEXT_IS_EMAIL"
    | "TEXT_IS_URL"
    | "DATE_EQ"
    | "DATE_BEFORE"
    | "DATE_AFTER"
    | "DATE_ON_OR_BEFORE"
    | "DATE_ON_OR_AFTER"
    | "DATE_BETWEEN"
    | "DATE_NOT_BETWEEN"
    | "DATE_IS_VALID"
    | "ONE_OF_RANGE"
    | "ONE_OF_LIST"
    | "BLANK"
    | "NOT_BLANK"
    | "CUSTOM_FORMULA"
    | "BOOLEAN"
    | "TEXT_NOT_EQ"
    | "DATE_NOT_EQ"
    | "FILTER_EXPRESSION"
    | (string & {});
  /** The values of the condition. The number of supported values depends on the condition type. Some support zero values, others one or two values, and ConditionType.ONE_OF_LIST supports an arbitrary number of values. */
  values?: ReadonlyArray<ConditionValue>;
}

export const BooleanCondition = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
  values: Schema.optional(Schema.Array(ConditionValue)),
}).annotate({ identifier: "BooleanCondition" });

export interface PivotFilterCriteria {
  /** Values that should be included. Values not listed here are excluded. */
  visibleValues?: ReadonlyArray<string>;
  /** A condition that must be true for values to be shown. (`visibleValues` does not override this -- even if a value is listed there, it is still hidden if it does not meet the condition.) Condition values that refer to ranges in A1-notation are evaluated relative to the pivot table sheet. References are treated absolutely, so are not filled down the pivot table. For example, a condition value of `=A1` on "Pivot Table 1" is treated as `'Pivot Table 1'!$A$1`. The source data of the pivot table can be referenced by column header name. For example, if the source data has columns named "Revenue" and "Cost" and a condition is applied to the "Revenue" column with type `NUMBER_GREATER` and value `=Cost`, then only columns where "Revenue" > "Cost" are included. */
  condition?: BooleanCondition;
  /** Whether values are visible by default. If true, the visible_values are ignored, all values that meet condition (if specified) are shown. If false, values that are both in visible_values and meet condition are shown. */
  visibleByDefault?: boolean;
}

export const PivotFilterCriteria = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  visibleValues: Schema.optional(Schema.Array(Schema.String)),
  condition: Schema.optional(BooleanCondition),
  visibleByDefault: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "PivotFilterCriteria" });

export interface PivotFilterSpec {
  /** The criteria for the column. */
  filterCriteria?: PivotFilterCriteria;
  /** The zero-based column offset of the source range. */
  columnOffsetIndex?: number;
  /** The reference to the data source column. */
  dataSourceColumnReference?: DataSourceColumnReference;
}

export const PivotFilterSpec = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  filterCriteria: Schema.optional(PivotFilterCriteria),
  columnOffsetIndex: Schema.optional(Schema.Number),
  dataSourceColumnReference: Schema.optional(DataSourceColumnReference),
}).annotate({ identifier: "PivotFilterSpec" });

export interface DataSourceChartProperties {
  /** ID of the data source that the chart is associated with. */
  dataSourceId?: string;
  /** Output only. The data execution status. */
  dataExecutionStatus?: DataExecutionStatus;
}

export const DataSourceChartProperties =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataSourceId: Schema.optional(Schema.String),
    dataExecutionStatus: Schema.optional(DataExecutionStatus),
  }).annotate({ identifier: "DataSourceChartProperties" });

export interface FilterCriteria {
  /** The foreground color to filter by; only cells with this foreground color are shown. This field is mutually exclusive with visible_background_color, and must be set to an RGB-type color. If visible_foreground_color is also set, this field takes precedence. */
  visibleForegroundColorStyle?: ColorStyle;
  /** The background fill color to filter by; only cells with this fill color are shown. This field is mutually exclusive with visible_foreground_color, and must be set to an RGB-type color. If visible_background_color is also set, this field takes precedence. */
  visibleBackgroundColorStyle?: ColorStyle;
  /** Values that should be hidden. */
  hiddenValues?: ReadonlyArray<string>;
  /** A condition that must be `true` for values to be shown. (This does not override hidden_values -- if a value is listed there, it will still be hidden.) */
  condition?: BooleanCondition;
  /** The background fill color to filter by; only cells with this fill color are shown. Mutually exclusive with visible_foreground_color. Deprecated: Use visible_background_color_style. */
  visibleBackgroundColor?: Color;
  /** The foreground color to filter by; only cells with this foreground color are shown. Mutually exclusive with visible_background_color. Deprecated: Use visible_foreground_color_style. */
  visibleForegroundColor?: Color;
}

export const FilterCriteria = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  visibleForegroundColorStyle: Schema.optional(ColorStyle),
  visibleBackgroundColorStyle: Schema.optional(ColorStyle),
  hiddenValues: Schema.optional(Schema.Array(Schema.String)),
  condition: Schema.optional(BooleanCondition),
  visibleBackgroundColor: Schema.optional(Color),
  visibleForegroundColor: Schema.optional(Color),
}).annotate({ identifier: "FilterCriteria" });

export interface SlicerSpec {
  /** The title of the slicer. */
  title?: string;
  /** The background color of the slicer. If background_color is also set, this field takes precedence. */
  backgroundColorStyle?: ColorStyle;
  /** The data range of the slicer. */
  dataRange?: GridRange;
  /** The horizontal alignment of title in the slicer. If unspecified, defaults to `LEFT` */
  horizontalAlignment?:
    | "HORIZONTAL_ALIGN_UNSPECIFIED"
    | "LEFT"
    | "CENTER"
    | "RIGHT"
    | (string & {});
  /** The filtering criteria of the slicer. */
  filterCriteria?: FilterCriteria;
  /** True if the filter should apply to pivot tables. If not set, default to `True`. */
  applyToPivotTables?: boolean;
  /** The text format of title in the slicer. The link field is not supported. */
  textFormat?: TextFormat;
  /** The background color of the slicer. Deprecated: Use background_color_style. */
  backgroundColor?: Color;
  /** The zero-based column index in the data table on which the filter is applied to. */
  columnIndex?: number;
}

export const SlicerSpec = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  title: Schema.optional(Schema.String),
  backgroundColorStyle: Schema.optional(ColorStyle),
  dataRange: Schema.optional(GridRange),
  horizontalAlignment: Schema.optional(Schema.String),
  filterCriteria: Schema.optional(FilterCriteria),
  applyToPivotTables: Schema.optional(Schema.Boolean),
  textFormat: Schema.optional(TextFormat),
  backgroundColor: Schema.optional(Color),
  columnIndex: Schema.optional(Schema.Number),
}).annotate({ identifier: "SlicerSpec" });

export interface UpdateSlicerSpecRequest {
  /** The specification to apply to the slicer. */
  spec?: SlicerSpec;
  /** The fields that should be updated. At least one field must be specified. The root `SlicerSpec` is implied and should not be specified. A single "*"` can be used as short-hand for listing every field. */
  fields?: string;
  /** The id of the slicer to update. */
  slicerId?: number;
}

export const UpdateSlicerSpecRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    spec: Schema.optional(SlicerSpec),
    fields: Schema.optional(Schema.String),
    slicerId: Schema.optional(Schema.Number),
  }).annotate({ identifier: "UpdateSlicerSpecRequest" });

export interface ErrorValue {
  /** The type of error. */
  type?:
    | "ERROR_TYPE_UNSPECIFIED"
    | "ERROR"
    | "NULL_VALUE"
    | "DIVIDE_BY_ZERO"
    | "VALUE"
    | "REF"
    | "NAME"
    | "NUM"
    | "N_A"
    | "LOADING"
    | (string & {});
  /** A message with more information about the error (in the spreadsheet's locale). */
  message?: string;
}

export const ErrorValue = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
  message: Schema.optional(Schema.String),
}).annotate({ identifier: "ErrorValue" });

export interface ExtendedValue {
  /** Represents an error. This field is read-only. */
  errorValue?: ErrorValue;
  /** Represents a double value. Note: Dates, Times and DateTimes are represented as doubles in SERIAL_NUMBER format. */
  numberValue?: number;
  /** Represents a string value. Leading single quotes are not included. For example, if the user typed `'123` into the UI, this would be represented as a `stringValue` of `"123"`. */
  stringValue?: string;
  /** Represents a boolean value. */
  boolValue?: boolean;
  /** Represents a formula. */
  formulaValue?: string;
}

export const ExtendedValue = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  errorValue: Schema.optional(ErrorValue),
  numberValue: Schema.optional(Schema.Number),
  stringValue: Schema.optional(Schema.String),
  boolValue: Schema.optional(Schema.Boolean),
  formulaValue: Schema.optional(Schema.String),
}).annotate({ identifier: "ExtendedValue" });

export interface FilterSpec {
  /** The zero-based column index. */
  columnIndex?: number;
  /** Reference to a data source column. */
  dataSourceColumnReference?: DataSourceColumnReference;
  /** The criteria for the column. */
  filterCriteria?: FilterCriteria;
}

export const FilterSpec = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  columnIndex: Schema.optional(Schema.Number),
  dataSourceColumnReference: Schema.optional(DataSourceColumnReference),
  filterCriteria: Schema.optional(FilterCriteria),
}).annotate({ identifier: "FilterSpec" });

export interface SortSpec {
  /** Reference to a data source column. */
  dataSourceColumnReference?: DataSourceColumnReference;
  /** The order data should be sorted. */
  sortOrder?:
    | "SORT_ORDER_UNSPECIFIED"
    | "ASCENDING"
    | "DESCENDING"
    | (string & {});
  /** The foreground color to sort by; cells with this foreground color are sorted to the top. Mutually exclusive with background_color. Deprecated: Use foreground_color_style. */
  foregroundColor?: Color;
  /** The background fill color to sort by; cells with this fill color are sorted to the top. Mutually exclusive with foreground_color, and must be an RGB-type color. If background_color is also set, this field takes precedence. */
  backgroundColorStyle?: ColorStyle;
  /** The dimension the sort should be applied to. */
  dimensionIndex?: number;
  /** The foreground color to sort by; cells with this foreground color are sorted to the top. Mutually exclusive with background_color, and must be an RGB-type color. If foreground_color is also set, this field takes precedence. */
  foregroundColorStyle?: ColorStyle;
  /** The background fill color to sort by; cells with this fill color are sorted to the top. Mutually exclusive with foreground_color. Deprecated: Use background_color_style. */
  backgroundColor?: Color;
}

export const SortSpec = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dataSourceColumnReference: Schema.optional(DataSourceColumnReference),
  sortOrder: Schema.optional(Schema.String),
  foregroundColor: Schema.optional(Color),
  backgroundColorStyle: Schema.optional(ColorStyle),
  dimensionIndex: Schema.optional(Schema.Number),
  foregroundColorStyle: Schema.optional(ColorStyle),
  backgroundColor: Schema.optional(Color),
}).annotate({ identifier: "SortSpec" });

export interface DataSourceTable {
  /** Columns selected for the data source table. The column_selection_type must be SELECTED. */
  columns?: ReadonlyArray<DataSourceColumnReference>;
  /** Filter specifications in the data source table. */
  filterSpecs?: ReadonlyArray<FilterSpec>;
  /** The limit of rows to return. If not set, a default limit is applied. Please refer to the Sheets editor for the default and max limit. */
  rowLimit?: number;
  /** The ID of the data source the data source table is associated with. */
  dataSourceId?: string;
  /** Sort specifications in the data source table. The result of the data source table is sorted based on the sort specifications in order. */
  sortSpecs?: ReadonlyArray<SortSpec>;
  /** The type to select columns for the data source table. Defaults to SELECTED. */
  columnSelectionType?:
    | "DATA_SOURCE_TABLE_COLUMN_SELECTION_TYPE_UNSPECIFIED"
    | "SELECTED"
    | "SYNC_ALL"
    | (string & {});
  /** Output only. The data execution status. */
  dataExecutionStatus?: DataExecutionStatus;
}

export const DataSourceTable = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  columns: Schema.optional(Schema.Array(DataSourceColumnReference)),
  filterSpecs: Schema.optional(Schema.Array(FilterSpec)),
  rowLimit: Schema.optional(Schema.Number),
  dataSourceId: Schema.optional(Schema.String),
  sortSpecs: Schema.optional(Schema.Array(SortSpec)),
  columnSelectionType: Schema.optional(Schema.String),
  dataExecutionStatus: Schema.optional(DataExecutionStatus),
}).annotate({ identifier: "DataSourceTable" });

export interface NumberFormat {
  /** Pattern string used for formatting. If not set, a default pattern based on the spreadsheet's locale will be used if necessary for the given type. See the [Date and Number Formats guide](https://developers.google.com/workspace/sheets/api/guides/formats) for more information about the supported patterns. */
  pattern?: string;
  /** The type of the number format. When writing, this field must be set. */
  type?:
    | "NUMBER_FORMAT_TYPE_UNSPECIFIED"
    | "TEXT"
    | "NUMBER"
    | "PERCENT"
    | "CURRENCY"
    | "DATE"
    | "TIME"
    | "DATE_TIME"
    | "SCIENTIFIC"
    | (string & {});
}

export const NumberFormat = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pattern: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}).annotate({ identifier: "NumberFormat" });

export interface Border {
  /** The color of the border. If color is also set, this field takes precedence. */
  colorStyle?: ColorStyle;
  /** The style of the border. */
  style?:
    | "STYLE_UNSPECIFIED"
    | "DOTTED"
    | "DASHED"
    | "SOLID"
    | "SOLID_MEDIUM"
    | "SOLID_THICK"
    | "NONE"
    | "DOUBLE"
    | (string & {});
  /** The color of the border. Deprecated: Use color_style. */
  color?: Color;
  /** The width of the border, in pixels. Deprecated; the width is determined by the "style" field. */
  width?: number;
}

export const Border = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  colorStyle: Schema.optional(ColorStyle),
  style: Schema.optional(Schema.String),
  color: Schema.optional(Color),
  width: Schema.optional(Schema.Number),
}).annotate({ identifier: "Border" });

export interface Borders {
  /** The top border of the cell. */
  top?: Border;
  /** The bottom border of the cell. */
  bottom?: Border;
  /** The left border of the cell. */
  left?: Border;
  /** The right border of the cell. */
  right?: Border;
}

export const Borders = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  top: Schema.optional(Border),
  bottom: Schema.optional(Border),
  left: Schema.optional(Border),
  right: Schema.optional(Border),
}).annotate({ identifier: "Borders" });

export interface TextRotation {
  /** The angle between the standard orientation and the desired orientation. Measured in degrees. Valid values are between -90 and 90. Positive angles are angled upwards, negative are angled downwards. Note: For LTR text direction positive angles are in the counterclockwise direction, whereas for RTL they are in the clockwise direction */
  angle?: number;
  /** If true, text reads top to bottom, but the orientation of individual characters is unchanged. For example: | V | | e | | r | | t | | i | | c | | a | | l | */
  vertical?: boolean;
}

export const TextRotation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  angle: Schema.optional(Schema.Number),
  vertical: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "TextRotation" });

export interface Padding {
  /** The right padding of the cell. */
  right?: number;
  /** The top padding of the cell. */
  top?: number;
  /** The bottom padding of the cell. */
  bottom?: number;
  /** The left padding of the cell. */
  left?: number;
}

export const Padding = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  right: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  bottom: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
}).annotate({ identifier: "Padding" });

export interface CellFormat {
  /** A format describing how number values should be represented to the user. */
  numberFormat?: NumberFormat;
  /** The borders of the cell. */
  borders?: Borders;
  /** The horizontal alignment of the value in the cell. */
  horizontalAlignment?:
    | "HORIZONTAL_ALIGN_UNSPECIFIED"
    | "LEFT"
    | "CENTER"
    | "RIGHT"
    | (string & {});
  /** The rotation applied to text in the cell. */
  textRotation?: TextRotation;
  /** The background color of the cell. If background_color is also set, this field takes precedence. */
  backgroundColorStyle?: ColorStyle;
  /** The vertical alignment of the value in the cell. */
  verticalAlignment?:
    | "VERTICAL_ALIGN_UNSPECIFIED"
    | "TOP"
    | "MIDDLE"
    | "BOTTOM"
    | (string & {});
  /** If one exists, how a hyperlink should be displayed in the cell. */
  hyperlinkDisplayType?:
    | "HYPERLINK_DISPLAY_TYPE_UNSPECIFIED"
    | "LINKED"
    | "PLAIN_TEXT"
    | (string & {});
  /** The background color of the cell. Deprecated: Use background_color_style. */
  backgroundColor?: Color;
  /** The padding of the cell. */
  padding?: Padding;
  /** The wrap strategy for the value in the cell. */
  wrapStrategy?:
    | "WRAP_STRATEGY_UNSPECIFIED"
    | "OVERFLOW_CELL"
    | "LEGACY_WRAP"
    | "CLIP"
    | "WRAP"
    | (string & {});
  /** The format of the text in the cell (unless overridden by a format run). Setting a cell-level link here clears the cell's existing links. Setting the link field in a TextFormatRun takes precedence over the cell-level link. */
  textFormat?: TextFormat;
  /** The direction of the text in the cell. */
  textDirection?:
    | "TEXT_DIRECTION_UNSPECIFIED"
    | "LEFT_TO_RIGHT"
    | "RIGHT_TO_LEFT"
    | (string & {});
}

export const CellFormat = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  numberFormat: Schema.optional(NumberFormat),
  borders: Schema.optional(Borders),
  horizontalAlignment: Schema.optional(Schema.String),
  textRotation: Schema.optional(TextRotation),
  backgroundColorStyle: Schema.optional(ColorStyle),
  verticalAlignment: Schema.optional(Schema.String),
  hyperlinkDisplayType: Schema.optional(Schema.String),
  backgroundColor: Schema.optional(Color),
  padding: Schema.optional(Padding),
  wrapStrategy: Schema.optional(Schema.String),
  textFormat: Schema.optional(TextFormat),
  textDirection: Schema.optional(Schema.String),
}).annotate({ identifier: "CellFormat" });

export interface TextFormatRun {
  /** The format of this run. Absent values inherit the cell's format. */
  format?: TextFormat;
  /** The zero-based character index where this run starts, in UTF-16 code units. */
  startIndex?: number;
}

export const TextFormatRun = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  format: Schema.optional(TextFormat),
  startIndex: Schema.optional(Schema.Number),
}).annotate({ identifier: "TextFormatRun" });

export interface DataValidationRule {
  /** A message to show the user when adding data to the cell. */
  inputMessage?: string;
  /** True if the UI should be customized based on the kind of condition. If true, "List" conditions will show a dropdown. */
  showCustomUi?: boolean;
  /** The condition that data in the cell must match. */
  condition?: BooleanCondition;
  /** True if invalid data should be rejected. */
  strict?: boolean;
}

export const DataValidationRule = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  inputMessage: Schema.optional(Schema.String),
  showCustomUi: Schema.optional(Schema.Boolean),
  condition: Schema.optional(BooleanCondition),
  strict: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "DataValidationRule" });

export interface PivotGroupValueMetadata {
  /** True if the data corresponding to the value is collapsed. */
  collapsed?: boolean;
  /** The calculated value the metadata corresponds to. (Note that formulaValue is not valid, because the values will be calculated.) */
  value?: ExtendedValue;
}

export const PivotGroupValueMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    collapsed: Schema.optional(Schema.Boolean),
    value: Schema.optional(ExtendedValue),
  }).annotate({ identifier: "PivotGroupValueMetadata" });

export interface ManualRuleGroup {
  /** The group name, which must be a string. Each group in a given ManualRule must have a unique group name. */
  groupName?: ExtendedValue;
  /** The items in the source data that should be placed into this group. Each item may be a string, number, or boolean. Items may appear in at most one group within a given ManualRule. Items that do not appear in any group will appear on their own. */
  items?: ReadonlyArray<ExtendedValue>;
}

export const ManualRuleGroup = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  groupName: Schema.optional(ExtendedValue),
  items: Schema.optional(Schema.Array(ExtendedValue)),
}).annotate({ identifier: "ManualRuleGroup" });

export interface ManualRule {
  /** The list of group names and the corresponding items from the source data that map to each group name. */
  groups?: ReadonlyArray<ManualRuleGroup>;
}

export const ManualRule = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  groups: Schema.optional(Schema.Array(ManualRuleGroup)),
}).annotate({ identifier: "ManualRule" });

export interface HistogramRule {
  /** The size of the buckets that are created. Must be positive. */
  interval?: number;
  /** The maximum value at which items are placed into buckets of constant size. Values above end are lumped into a single bucket. This field is optional. */
  end?: number;
  /** The minimum value at which items are placed into buckets of constant size. Values below start are lumped into a single bucket. This field is optional. */
  start?: number;
}

export const HistogramRule = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  interval: Schema.optional(Schema.Number),
  end: Schema.optional(Schema.Number),
  start: Schema.optional(Schema.Number),
}).annotate({ identifier: "HistogramRule" });

export interface DateTimeRule {
  /** The type of date-time grouping to apply. */
  type?:
    | "DATE_TIME_RULE_TYPE_UNSPECIFIED"
    | "SECOND"
    | "MINUTE"
    | "HOUR"
    | "HOUR_MINUTE"
    | "HOUR_MINUTE_AMPM"
    | "DAY_OF_WEEK"
    | "DAY_OF_YEAR"
    | "DAY_OF_MONTH"
    | "DAY_MONTH"
    | "MONTH"
    | "QUARTER"
    | "YEAR"
    | "YEAR_MONTH"
    | "YEAR_QUARTER"
    | "YEAR_MONTH_DAY"
    | (string & {});
}

export const DateTimeRule = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
}).annotate({ identifier: "DateTimeRule" });

export interface PivotGroupRule {
  /** A ManualRule. */
  manualRule?: ManualRule;
  /** A HistogramRule. */
  histogramRule?: HistogramRule;
  /** A DateTimeRule. */
  dateTimeRule?: DateTimeRule;
}

export const PivotGroupRule = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  manualRule: Schema.optional(ManualRule),
  histogramRule: Schema.optional(HistogramRule),
  dateTimeRule: Schema.optional(DateTimeRule),
}).annotate({ identifier: "PivotGroupRule" });

export interface PivotGroupSortValueBucket {
  /** Determines the bucket from which values are chosen to sort. For example, in a pivot table with one row group & two column groups, the row group can list up to two values. The first value corresponds to a value within the first column group, and the second value corresponds to a value in the second column group. If no values are listed, this would indicate that the row should be sorted according to the "Grand Total" over the column groups. If a single value is listed, this would correspond to using the "Total" of that bucket. */
  buckets?: ReadonlyArray<ExtendedValue>;
  /** The offset in the PivotTable.values list which the values in this grouping should be sorted by. */
  valuesIndex?: number;
}

export const PivotGroupSortValueBucket =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    buckets: Schema.optional(Schema.Array(ExtendedValue)),
    valuesIndex: Schema.optional(Schema.Number),
  }).annotate({ identifier: "PivotGroupSortValueBucket" });

export interface PivotGroupLimit {
  /** The count limit. */
  countLimit?: number;
  /** The order in which the group limit is applied to the pivot table. Pivot group limits are applied from lower to higher order number. Order numbers are normalized to consecutive integers from 0. For write request, to fully customize the applying orders, all pivot group limits should have this field set with an unique number. Otherwise, the order is determined by the index in the PivotTable.rows list and then the PivotTable.columns list. */
  applyOrder?: number;
}

export const PivotGroupLimit = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  countLimit: Schema.optional(Schema.Number),
  applyOrder: Schema.optional(Schema.Number),
}).annotate({ identifier: "PivotGroupLimit" });

export interface PivotGroup {
  /** Metadata about values in the grouping. */
  valueMetadata?: ReadonlyArray<PivotGroupValueMetadata>;
  /** The column offset of the source range that this grouping is based on. For example, if the source was `C10:E15`, a `sourceColumnOffset` of `0` means this group refers to column `C`, whereas the offset `1` would refer to column `D`. */
  sourceColumnOffset?: number;
  /** The labels to use for the row/column groups which can be customized. For example, in the following pivot table, the row label is `Region` (which could be renamed to `State`) and the column label is `Product` (which could be renamed `Item`). Pivot tables created before December 2017 do not have header labels. If you'd like to add header labels to an existing pivot table, please delete the existing pivot table and then create a new pivot table with same parameters. +--------------+---------+-------+ | SUM of Units | Product | | | Region | Pen | Paper | +--------------+---------+-------+ | New York | 345 | 98 | | Oregon | 234 | 123 | | Tennessee | 531 | 415 | +--------------+---------+-------+ | Grand Total | 1110 | 636 | +--------------+---------+-------+ */
  label?: string;
  /** True if the pivot table should include the totals for this grouping. */
  showTotals?: boolean;
  /** The group rule to apply to this row/column group. */
  groupRule?: PivotGroupRule;
  /** The bucket of the opposite pivot group to sort by. If not specified, sorting is alphabetical by this group's values. */
  valueBucket?: PivotGroupSortValueBucket;
  /** The count limit on rows or columns to apply to this pivot group. */
  groupLimit?: PivotGroupLimit;
  /** The reference to the data source column this grouping is based on. */
  dataSourceColumnReference?: DataSourceColumnReference;
  /** The order the values in this group should be sorted. */
  sortOrder?:
    | "SORT_ORDER_UNSPECIFIED"
    | "ASCENDING"
    | "DESCENDING"
    | (string & {});
  /** True if the headings in this pivot group should be repeated. This is only valid for row groupings and is ignored by columns. By default, we minimize repetition of headings by not showing higher level headings where they are the same. For example, even though the third row below corresponds to "Q1 Mar", "Q1" is not shown because it is redundant with previous rows. Setting repeat_headings to true would cause "Q1" to be repeated for "Feb" and "Mar". +--------------+ | Q1 | Jan | | | Feb | | | Mar | +--------+-----+ | Q1 Total | +--------------+ */
  repeatHeadings?: boolean;
}

export const PivotGroup = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  valueMetadata: Schema.optional(Schema.Array(PivotGroupValueMetadata)),
  sourceColumnOffset: Schema.optional(Schema.Number),
  label: Schema.optional(Schema.String),
  showTotals: Schema.optional(Schema.Boolean),
  groupRule: Schema.optional(PivotGroupRule),
  valueBucket: Schema.optional(PivotGroupSortValueBucket),
  groupLimit: Schema.optional(PivotGroupLimit),
  dataSourceColumnReference: Schema.optional(DataSourceColumnReference),
  sortOrder: Schema.optional(Schema.String),
  repeatHeadings: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "PivotGroup" });

export interface PivotValue {
  /** A custom formula to calculate the value. The formula must start with an `=` character. */
  formula?: string;
  /** The reference to the data source column that this value reads from. */
  dataSourceColumnReference?: DataSourceColumnReference;
  /** A name to use for the value. */
  name?: string;
  /** A function to summarize the value. If formula is set, the only supported values are SUM and CUSTOM. If sourceColumnOffset is set, then `CUSTOM` is not supported. */
  summarizeFunction?:
    | "PIVOT_STANDARD_VALUE_FUNCTION_UNSPECIFIED"
    | "SUM"
    | "COUNTA"
    | "COUNT"
    | "COUNTUNIQUE"
    | "AVERAGE"
    | "MAX"
    | "MIN"
    | "MEDIAN"
    | "PRODUCT"
    | "STDEV"
    | "STDEVP"
    | "VAR"
    | "VARP"
    | "CUSTOM"
    | "NONE"
    | (string & {});
  /** The column offset of the source range that this value reads from. For example, if the source was `C10:E15`, a `sourceColumnOffset` of `0` means this value refers to column `C`, whereas the offset `1` would refer to column `D`. */
  sourceColumnOffset?: number;
  /** If specified, indicates that pivot values should be displayed as the result of a calculation with another pivot value. For example, if calculated_display_type is specified as PERCENT_OF_GRAND_TOTAL, all the pivot values are displayed as the percentage of the grand total. In the Sheets editor, this is referred to as "Show As" in the value section of a pivot table. */
  calculatedDisplayType?:
    | "PIVOT_VALUE_CALCULATED_DISPLAY_TYPE_UNSPECIFIED"
    | "PERCENT_OF_ROW_TOTAL"
    | "PERCENT_OF_COLUMN_TOTAL"
    | "PERCENT_OF_GRAND_TOTAL"
    | (string & {});
}

export const PivotValue = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  formula: Schema.optional(Schema.String),
  dataSourceColumnReference: Schema.optional(DataSourceColumnReference),
  name: Schema.optional(Schema.String),
  summarizeFunction: Schema.optional(Schema.String),
  sourceColumnOffset: Schema.optional(Schema.Number),
  calculatedDisplayType: Schema.optional(Schema.String),
}).annotate({ identifier: "PivotValue" });

export interface PivotTable {
  /** The ID of the data source the pivot table is reading data from. */
  dataSourceId?: string;
  /** An optional mapping of filters per source column offset. The filters are applied before aggregating data into the pivot table. The map's key is the column offset of the source range that you want to filter, and the value is the criteria for that column. For example, if the source was `C10:E15`, a key of `0` will have the filter for column `C`, whereas the key `1` is for column `D`. This field is deprecated in favor of filter_specs. */
  criteria?: Record<string, PivotFilterCriteria>;
  /** Whether values should be listed horizontally (as columns) or vertically (as rows). */
  valueLayout?: "HORIZONTAL" | "VERTICAL" | (string & {});
  /** The filters applied to the source columns before aggregating data for the pivot table. Both criteria and filter_specs are populated in responses. If both fields are specified in an update request, this field takes precedence. */
  filterSpecs?: ReadonlyArray<PivotFilterSpec>;
  /** Each row grouping in the pivot table. */
  rows?: ReadonlyArray<PivotGroup>;
  /** A list of values to include in the pivot table. */
  values?: ReadonlyArray<PivotValue>;
  /** The range the pivot table is reading data from. */
  source?: GridRange;
  /** Output only. The data execution status for data source pivot tables. */
  dataExecutionStatus?: DataExecutionStatus;
  /** Each column grouping in the pivot table. */
  columns?: ReadonlyArray<PivotGroup>;
}

export const PivotTable = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dataSourceId: Schema.optional(Schema.String),
  criteria: Schema.optional(Schema.Record(Schema.String, PivotFilterCriteria)),
  valueLayout: Schema.optional(Schema.String),
  filterSpecs: Schema.optional(Schema.Array(PivotFilterSpec)),
  rows: Schema.optional(Schema.Array(PivotGroup)),
  values: Schema.optional(Schema.Array(PivotValue)),
  source: Schema.optional(GridRange),
  dataExecutionStatus: Schema.optional(DataExecutionStatus),
  columns: Schema.optional(Schema.Array(PivotGroup)),
}).annotate({ identifier: "PivotTable" });

export interface DataSourceFormula {
  /** The ID of the data source the formula is associated with. */
  dataSourceId?: string;
  /** Output only. The data execution status. */
  dataExecutionStatus?: DataExecutionStatus;
}

export const DataSourceFormula = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dataSourceId: Schema.optional(Schema.String),
  dataExecutionStatus: Schema.optional(DataExecutionStatus),
}).annotate({ identifier: "DataSourceFormula" });

export interface ChipRun {
  /** Required. The zero-based character index where this run starts, in UTF-16 code units. */
  startIndex?: number;
  /** Optional. The chip of this run. */
  chip?: Chip;
}

export const ChipRun = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  startIndex: Schema.optional(Schema.Number),
  chip: Schema.optional(Chip),
}).annotate({ identifier: "ChipRun" });

export interface CellData {
  /** The effective value of the cell. For cells with formulas, this is the calculated value. For cells with literals, this is the same as the user_entered_value. This field is read-only. */
  effectiveValue?: ExtendedValue;
  /** The formatted value of the cell. This is the value as it's shown to the user. This field is read-only. */
  formattedValue?: string;
  /** A data source table anchored at this cell. The size of data source table itself is computed dynamically based on its configuration. Only the first cell of the data source table contains the data source table definition. The other cells will contain the display values of the data source table result in their effective_value fields. */
  dataSourceTable?: DataSourceTable;
  /** Any note on the cell. */
  note?: string;
  /** The effective format being used by the cell. This includes the results of applying any conditional formatting and, if the cell contains a formula, the computed number format. If the effective format is the default format, effective format will not be written. This field is read-only. */
  effectiveFormat?: CellFormat;
  /** Runs of rich text applied to subsections of the cell. Runs are only valid on user entered strings, not formulas, bools, or numbers. Properties of a run start at a specific index in the text and continue until the next run. Runs will inherit the properties of the cell unless explicitly changed. When writing, the new runs will overwrite any prior runs. When writing a new user_entered_value, previous runs are erased. */
  textFormatRuns?: ReadonlyArray<TextFormatRun>;
  /** A data validation rule on the cell, if any. When writing, the new data validation rule will overwrite any prior rule. */
  dataValidation?: DataValidationRule;
  /** A pivot table anchored at this cell. The size of pivot table itself is computed dynamically based on its data, grouping, filters, values, etc. Only the top-left cell of the pivot table contains the pivot table definition. The other cells will contain the calculated values of the results of the pivot in their effective_value fields. */
  pivotTable?: PivotTable;
  /** A hyperlink this cell points to, if any. If the cell contains multiple hyperlinks, this field will be empty. This field is read-only. To set it, use a `=HYPERLINK` formula in the userEnteredValue.formulaValue field. A cell-level link can also be set from the userEnteredFormat.textFormat field. Alternatively, set a hyperlink in the textFormatRun.format.link field that spans the entire cell. */
  hyperlink?: string;
  /** Output only. Information about a data source formula on the cell. The field is set if user_entered_value is a formula referencing some DATA_SOURCE sheet, e.g. `=SUM(DataSheet!Column)`. */
  dataSourceFormula?: DataSourceFormula;
  /** Optional. Runs of chips applied to subsections of the cell. Properties of a run start at a specific index in the text and continue until the next run. When reading, all chipped and non-chipped runs are included. Non-chipped runs will have an empty Chip. When writing, only runs with chips are included. Runs containing chips are of length 1 and are represented in the user-entered text by an “@” placeholder symbol. New runs will overwrite any prior runs. Writing a new user_entered_value will erase previous runs. */
  chipRuns?: ReadonlyArray<ChipRun>;
  /** The value the user entered in the cell. e.g., `1234`, `'Hello'`, or `=NOW()` Note: Dates, Times and DateTimes are represented as doubles in serial number format. */
  userEnteredValue?: ExtendedValue;
  /** The format the user entered for the cell. When writing, the new format will be merged with the existing format. */
  userEnteredFormat?: CellFormat;
}

export const CellData = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  effectiveValue: Schema.optional(ExtendedValue),
  formattedValue: Schema.optional(Schema.String),
  dataSourceTable: Schema.optional(DataSourceTable),
  note: Schema.optional(Schema.String),
  effectiveFormat: Schema.optional(CellFormat),
  textFormatRuns: Schema.optional(Schema.Array(TextFormatRun)),
  dataValidation: Schema.optional(DataValidationRule),
  pivotTable: Schema.optional(PivotTable),
  hyperlink: Schema.optional(Schema.String),
  dataSourceFormula: Schema.optional(DataSourceFormula),
  chipRuns: Schema.optional(Schema.Array(ChipRun)),
  userEnteredValue: Schema.optional(ExtendedValue),
  userEnteredFormat: Schema.optional(CellFormat),
}).annotate({ identifier: "CellData" });

export interface RowData {
  /** The values in the row, one per column. */
  values?: ReadonlyArray<CellData>;
}

export const RowData = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  values: Schema.optional(Schema.Array(CellData)),
}).annotate({ identifier: "RowData" });

export interface DataSourceParameter {
  /** Named parameter. Must be a legitimate identifier for the DataSource that supports it. For example, [BigQuery identifier](https://cloud.google.com/bigquery/docs/reference/standard-sql/lexical#identifiers). */
  name?: string;
  /** ID of a NamedRange. Its size must be 1x1. */
  namedRangeId?: string;
  /** A range that contains the value of the parameter. Its size must be 1x1. */
  range?: GridRange;
}

export const DataSourceParameter = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  namedRangeId: Schema.optional(Schema.String),
  range: Schema.optional(GridRange),
}).annotate({ identifier: "DataSourceParameter" });

export interface BigQueryQuerySpec {
  /** The raw query string. */
  rawQuery?: string;
}

export const BigQueryQuerySpec = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  rawQuery: Schema.optional(Schema.String),
}).annotate({ identifier: "BigQueryQuerySpec" });

export interface BigQueryTableSpec {
  /** The BigQuery dataset id. */
  datasetId?: string;
  /** The ID of a BigQuery project the table belongs to. If not specified, the project_id is assumed. */
  tableProjectId?: string;
  /** The BigQuery table id. */
  tableId?: string;
}

export const BigQueryTableSpec = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  datasetId: Schema.optional(Schema.String),
  tableProjectId: Schema.optional(Schema.String),
  tableId: Schema.optional(Schema.String),
}).annotate({ identifier: "BigQueryTableSpec" });

export interface BigQueryDataSourceSpec {
  /** The ID of a BigQuery enabled Google Cloud project with a billing account attached. For any queries executed against the data source, the project is charged. */
  projectId?: string;
  /** A BigQueryQuerySpec. */
  querySpec?: BigQueryQuerySpec;
  /** A BigQueryTableSpec. */
  tableSpec?: BigQueryTableSpec;
}

export const BigQueryDataSourceSpec = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    projectId: Schema.optional(Schema.String),
    querySpec: Schema.optional(BigQueryQuerySpec),
    tableSpec: Schema.optional(BigQueryTableSpec),
  },
).annotate({ identifier: "BigQueryDataSourceSpec" });

export interface LookerDataSourceSpec {
  /** A Looker instance URL. */
  instanceUri?: string;
  /** Name of a Looker model. */
  model?: string;
  /** Name of a Looker model explore. */
  explore?: string;
}

export const LookerDataSourceSpec = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  instanceUri: Schema.optional(Schema.String),
  model: Schema.optional(Schema.String),
  explore: Schema.optional(Schema.String),
}).annotate({ identifier: "LookerDataSourceSpec" });

export interface DataSourceSpec {
  /** The parameters of the data source, used when querying the data source. */
  parameters?: ReadonlyArray<DataSourceParameter>;
  /** A BigQueryDataSourceSpec. */
  bigQuery?: BigQueryDataSourceSpec;
  /** A LookerDatasourceSpec. */
  looker?: LookerDataSourceSpec;
}

export const DataSourceSpec = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  parameters: Schema.optional(Schema.Array(DataSourceParameter)),
  bigQuery: Schema.optional(BigQueryDataSourceSpec),
  looker: Schema.optional(LookerDataSourceSpec),
}).annotate({ identifier: "DataSourceSpec" });

export interface DataSource {
  /** The DataSourceSpec for the data source connected with this spreadsheet. */
  spec?: DataSourceSpec;
  /** The ID of the Sheet connected with the data source. The field cannot be changed once set. When creating a data source, an associated DATA_SOURCE sheet is also created, if the field is not specified, the ID of the created sheet will be randomly generated. */
  sheetId?: number;
  /** The spreadsheet-scoped unique ID that identifies the data source. Example: 1080547365. */
  dataSourceId?: string;
  /** All calculated columns in the data source. */
  calculatedColumns?: ReadonlyArray<DataSourceColumn>;
}

export const DataSource = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  spec: Schema.optional(DataSourceSpec),
  sheetId: Schema.optional(Schema.Number),
  dataSourceId: Schema.optional(Schema.String),
  calculatedColumns: Schema.optional(Schema.Array(DataSourceColumn)),
}).annotate({ identifier: "DataSource" });

export interface DimensionGroup {
  /** The depth of the group, representing how many groups have a range that wholly contains the range of this group. */
  depth?: number;
  /** This field is true if this group is collapsed. A collapsed group remains collapsed if an overlapping group at a shallower depth is expanded. A true value does not imply that all dimensions within the group are hidden, since a dimension's visibility can change independently from this group property. However, when this property is updated, all dimensions within it are set to hidden if this field is true, or set to visible if this field is false. */
  collapsed?: boolean;
  /** The range over which this group exists. */
  range?: DimensionRange;
}

export const DimensionGroup = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  depth: Schema.optional(Schema.Number),
  collapsed: Schema.optional(Schema.Boolean),
  range: Schema.optional(DimensionRange),
}).annotate({ identifier: "DimensionGroup" });

export interface AddDimensionGroupResponse {
  /** All groups of a dimension after adding a group to that dimension. */
  dimensionGroups?: ReadonlyArray<DimensionGroup>;
}

export const AddDimensionGroupResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dimensionGroups: Schema.optional(Schema.Array(DimensionGroup)),
  }).annotate({ identifier: "AddDimensionGroupResponse" });

export interface DeveloperMetadataLookup {
  /** Limits the selected developer metadata to that which has a matching DeveloperMetadata.metadata_value. */
  metadataValue?: string;
  /** Limits the selected developer metadata to those entries which are associated with locations of the specified type. For example, when this field is specified as ROW this lookup only considers developer metadata associated on rows. If the field is left unspecified, all location types are considered. This field cannot be specified as SPREADSHEET when the locationMatchingStrategy is specified as INTERSECTING or when the metadataLocation is specified as a non-spreadsheet location. Spreadsheet metadata cannot intersect any other developer metadata location. This field also must be left unspecified when the locationMatchingStrategy is specified as EXACT. */
  locationType?:
    | "DEVELOPER_METADATA_LOCATION_TYPE_UNSPECIFIED"
    | "ROW"
    | "COLUMN"
    | "SHEET"
    | "SPREADSHEET"
    | (string & {});
  /** Determines how this lookup matches the location. If this field is specified as EXACT, only developer metadata associated on the exact location specified is matched. If this field is specified to INTERSECTING, developer metadata associated on intersecting locations is also matched. If left unspecified, this field assumes a default value of INTERSECTING. If this field is specified, a metadataLocation must also be specified. */
  locationMatchingStrategy?:
    | "DEVELOPER_METADATA_LOCATION_MATCHING_STRATEGY_UNSPECIFIED"
    | "EXACT_LOCATION"
    | "INTERSECTING_LOCATION"
    | (string & {});
  /** Limits the selected developer metadata to that which has a matching DeveloperMetadata.metadata_key. */
  metadataKey?: string;
  /** Limits the selected developer metadata to that which has a matching DeveloperMetadata.visibility. If left unspecified, all developer metadata visible to the requesting project is considered. */
  visibility?:
    | "DEVELOPER_METADATA_VISIBILITY_UNSPECIFIED"
    | "DOCUMENT"
    | "PROJECT"
    | (string & {});
  /** Limits the selected developer metadata to that which has a matching DeveloperMetadata.metadata_id. */
  metadataId?: number;
  /** Limits the selected developer metadata to those entries associated with the specified location. This field either matches exact locations or all intersecting locations according the specified locationMatchingStrategy. */
  metadataLocation?: DeveloperMetadataLocation;
}

export const DeveloperMetadataLookup =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadataValue: Schema.optional(Schema.String),
    locationType: Schema.optional(Schema.String),
    locationMatchingStrategy: Schema.optional(Schema.String),
    metadataKey: Schema.optional(Schema.String),
    visibility: Schema.optional(Schema.String),
    metadataId: Schema.optional(Schema.Number),
    metadataLocation: Schema.optional(DeveloperMetadataLocation),
  }).annotate({ identifier: "DeveloperMetadataLookup" });

export interface DataFilter {
  /** Selects data that matches the specified A1 range. */
  a1Range?: string;
  /** Selects data that matches the range described by the GridRange. */
  gridRange?: GridRange;
  /** Selects data associated with the developer metadata matching the criteria described by this DeveloperMetadataLookup. */
  developerMetadataLookup?: DeveloperMetadataLookup;
}

export const DataFilter = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  a1Range: Schema.optional(Schema.String),
  gridRange: Schema.optional(GridRange),
  developerMetadataLookup: Schema.optional(DeveloperMetadataLookup),
}).annotate({ identifier: "DataFilter" });

export interface SearchDeveloperMetadataRequest {
  /** The data filters describing the criteria used to determine which DeveloperMetadata entries to return. DeveloperMetadata matching any of the specified filters are included in the response. */
  dataFilters?: ReadonlyArray<DataFilter>;
}

export const SearchDeveloperMetadataRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataFilters: Schema.optional(Schema.Array(DataFilter)),
  }).annotate({ identifier: "SearchDeveloperMetadataRequest" });

export interface GridCoordinate {
  /** The column index of the coordinate. */
  columnIndex?: number;
  /** The row index of the coordinate. */
  rowIndex?: number;
  /** The sheet this coordinate is on. */
  sheetId?: number;
}

export const GridCoordinate = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  columnIndex: Schema.optional(Schema.Number),
  rowIndex: Schema.optional(Schema.Number),
  sheetId: Schema.optional(Schema.Number),
}).annotate({ identifier: "GridCoordinate" });

export interface OverlayPosition {
  /** The horizontal offset, in pixels, that the object is offset from the anchor cell. */
  offsetXPixels?: number;
  /** The width of the object, in pixels. Defaults to 600. */
  widthPixels?: number;
  /** The height of the object, in pixels. Defaults to 371. */
  heightPixels?: number;
  /** The cell the object is anchored to. */
  anchorCell?: GridCoordinate;
  /** The vertical offset, in pixels, that the object is offset from the anchor cell. */
  offsetYPixels?: number;
}

export const OverlayPosition = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  offsetXPixels: Schema.optional(Schema.Number),
  widthPixels: Schema.optional(Schema.Number),
  heightPixels: Schema.optional(Schema.Number),
  anchorCell: Schema.optional(GridCoordinate),
  offsetYPixels: Schema.optional(Schema.Number),
}).annotate({ identifier: "OverlayPosition" });

export interface EmbeddedObjectPosition {
  /** The sheet this is on. Set only if the embedded object is on its own sheet. Must be non-negative. */
  sheetId?: number;
  /** If true, the embedded object is put on a new sheet whose ID is chosen for you. Used only when writing. */
  newSheet?: boolean;
  /** The position at which the object is overlaid on top of a grid. */
  overlayPosition?: OverlayPosition;
}

export const EmbeddedObjectPosition = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    sheetId: Schema.optional(Schema.Number),
    newSheet: Schema.optional(Schema.Boolean),
    overlayPosition: Schema.optional(OverlayPosition),
  },
).annotate({ identifier: "EmbeddedObjectPosition" });

export interface UpdateEmbeddedObjectPositionRequest {
  /** The fields of OverlayPosition that should be updated when setting a new position. Used only if newPosition.overlayPosition is set, in which case at least one field must be specified. The root `newPosition.overlayPosition` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. */
  fields?: string;
  /** The ID of the object to moved. */
  objectId?: number;
  /** An explicit position to move the embedded object to. If newPosition.sheetId is set, a new sheet with that ID will be created. If newPosition.newSheet is set to true, a new sheet will be created with an ID that will be chosen for you. */
  newPosition?: EmbeddedObjectPosition;
}

export const UpdateEmbeddedObjectPositionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fields: Schema.optional(Schema.String),
    objectId: Schema.optional(Schema.Number),
    newPosition: Schema.optional(EmbeddedObjectPosition),
  }).annotate({ identifier: "UpdateEmbeddedObjectPositionRequest" });

export interface DeleteDuplicatesRequest {
  /** The range to remove duplicates rows from. */
  range?: GridRange;
  /** The columns in the range to analyze for duplicate values. If no columns are selected then all columns are analyzed for duplicates. */
  comparisonColumns?: ReadonlyArray<DimensionRange>;
}

export const DeleteDuplicatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    range: Schema.optional(GridRange),
    comparisonColumns: Schema.optional(Schema.Array(DimensionRange)),
  }).annotate({ identifier: "DeleteDuplicatesRequest" });

export interface TrimWhitespaceRequest {
  /** The range whose cells to trim. */
  range?: GridRange;
}

export const TrimWhitespaceRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  range: Schema.optional(GridRange),
}).annotate({ identifier: "TrimWhitespaceRequest" });

export interface UpdateSheetPropertiesRequest {
  /** The fields that should be updated. At least one field must be specified. The root `properties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. */
  fields?: string;
  /** The properties to update. */
  properties?: SheetProperties;
}

export const UpdateSheetPropertiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fields: Schema.optional(Schema.String),
    properties: Schema.optional(SheetProperties),
  }).annotate({ identifier: "UpdateSheetPropertiesRequest" });

export interface DataSourceSheetDimensionRange {
  /** The ID of the data source sheet the range is on. */
  sheetId?: number;
  /** The columns on the data source sheet. */
  columnReferences?: ReadonlyArray<DataSourceColumnReference>;
}

export const DataSourceSheetDimensionRange =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sheetId: Schema.optional(Schema.Number),
    columnReferences: Schema.optional(Schema.Array(DataSourceColumnReference)),
  }).annotate({ identifier: "DataSourceSheetDimensionRange" });

export interface DimensionProperties {
  /** The height (if a row) or width (if a column) of the dimension in pixels. */
  pixelSize?: number;
  /** Output only. If set, this is a column in a data source sheet. */
  dataSourceColumnReference?: DataSourceColumnReference;
  /** True if this dimension is being filtered. This field is read-only. */
  hiddenByFilter?: boolean;
  /** True if this dimension is explicitly hidden. */
  hiddenByUser?: boolean;
  /** The developer metadata associated with a single row or column. */
  developerMetadata?: ReadonlyArray<DeveloperMetadata>;
}

export const DimensionProperties = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pixelSize: Schema.optional(Schema.Number),
  dataSourceColumnReference: Schema.optional(DataSourceColumnReference),
  hiddenByFilter: Schema.optional(Schema.Boolean),
  hiddenByUser: Schema.optional(Schema.Boolean),
  developerMetadata: Schema.optional(Schema.Array(DeveloperMetadata)),
}).annotate({ identifier: "DimensionProperties" });

export interface UpdateDimensionPropertiesRequest {
  /** The columns on a data source sheet to update. */
  dataSourceSheetRange?: DataSourceSheetDimensionRange;
  /** Properties to update. */
  properties?: DimensionProperties;
  /** The rows or columns to update. */
  range?: DimensionRange;
  /** The fields that should be updated. At least one field must be specified. The root `properties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. */
  fields?: string;
}

export const UpdateDimensionPropertiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataSourceSheetRange: Schema.optional(DataSourceSheetDimensionRange),
    properties: Schema.optional(DimensionProperties),
    range: Schema.optional(DimensionRange),
    fields: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpdateDimensionPropertiesRequest" });

export interface PasteDataRequest {
  /** The coordinate at which the data should start being inserted. */
  coordinate?: GridCoordinate;
  /** How the data should be pasted. */
  type?:
    | "PASTE_NORMAL"
    | "PASTE_VALUES"
    | "PASTE_FORMAT"
    | "PASTE_NO_BORDERS"
    | "PASTE_FORMULA"
    | "PASTE_DATA_VALIDATION"
    | "PASTE_CONDITIONAL_FORMATTING"
    | (string & {});
  /** The data to insert. */
  data?: string;
  /** The delimiter in the data. */
  delimiter?: string;
  /** True if the data is HTML. */
  html?: boolean;
}

export const PasteDataRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  coordinate: Schema.optional(GridCoordinate),
  type: Schema.optional(Schema.String),
  data: Schema.optional(Schema.String),
  delimiter: Schema.optional(Schema.String),
  html: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "PasteDataRequest" });

export interface BandingProperties {
  /** The first color that is alternating. (Required) Deprecated: Use first_band_color_style. */
  firstBandColor?: Color;
  /** The second color that is alternating. (Required) Deprecated: Use second_band_color_style. */
  secondBandColor?: Color;
  /** The color of the first row or column. If this field is set, the first row or column is filled with this color and the colors alternate between first_band_color and second_band_color starting from the second row or column. Otherwise, the first row or column is filled with first_band_color and the colors proceed to alternate as they normally would. Deprecated: Use header_color_style. */
  headerColor?: Color;
  /** The second color that is alternating. (Required) If second_band_color is also set, this field takes precedence. */
  secondBandColorStyle?: ColorStyle;
  /** The color of the last row or column. If this field is not set, the last row or column is filled with either first_band_color or second_band_color, depending on the color of the previous row or column. If footer_color is also set, this field takes precedence. */
  footerColorStyle?: ColorStyle;
  /** The color of the first row or column. If this field is set, the first row or column is filled with this color and the colors alternate between first_band_color and second_band_color starting from the second row or column. Otherwise, the first row or column is filled with first_band_color and the colors proceed to alternate as they normally would. If header_color is also set, this field takes precedence. */
  headerColorStyle?: ColorStyle;
  /** The first color that is alternating. (Required) If first_band_color is also set, this field takes precedence. */
  firstBandColorStyle?: ColorStyle;
  /** The color of the last row or column. If this field is not set, the last row or column is filled with either first_band_color or second_band_color, depending on the color of the previous row or column. Deprecated: Use footer_color_style. */
  footerColor?: Color;
}

export const BandingProperties = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  firstBandColor: Schema.optional(Color),
  secondBandColor: Schema.optional(Color),
  headerColor: Schema.optional(Color),
  secondBandColorStyle: Schema.optional(ColorStyle),
  footerColorStyle: Schema.optional(ColorStyle),
  headerColorStyle: Schema.optional(ColorStyle),
  firstBandColorStyle: Schema.optional(ColorStyle),
  footerColor: Schema.optional(Color),
}).annotate({ identifier: "BandingProperties" });

export interface BandedRange {
  /** The range over which these properties are applied. */
  range?: GridRange;
  /** Output only. The reference of the banded range, used to identify the ID that is not supported by the banded_range_id. */
  bandedRangeReference?: string;
  /** Properties for row bands. These properties are applied on a row-by-row basis throughout all the rows in the range. At least one of row_properties or column_properties must be specified. */
  rowProperties?: BandingProperties;
  /** The ID of the banded range. If unset, refer to banded_range_reference. */
  bandedRangeId?: number;
  /** Properties for column bands. These properties are applied on a column- by-column basis throughout all the columns in the range. At least one of row_properties or column_properties must be specified. */
  columnProperties?: BandingProperties;
}

export const BandedRange = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  range: Schema.optional(GridRange),
  bandedRangeReference: Schema.optional(Schema.String),
  rowProperties: Schema.optional(BandingProperties),
  bandedRangeId: Schema.optional(Schema.Number),
  columnProperties: Schema.optional(BandingProperties),
}).annotate({ identifier: "BandedRange" });

export interface UpdateBandingRequest {
  /** The banded range to update with the new properties. */
  bandedRange?: BandedRange;
  /** The fields that should be updated. At least one field must be specified. The root `bandedRange` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. */
  fields?: string;
}

export const UpdateBandingRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  bandedRange: Schema.optional(BandedRange),
  fields: Schema.optional(Schema.String),
}).annotate({ identifier: "UpdateBandingRequest" });

export interface TableRowsProperties {
  /** The second color that is alternating. If this field is set, the second banded row is filled with the specified color. Otherwise, the second banded row is filled with a default color. */
  secondBandColorStyle?: ColorStyle;
  /** The color of the last row. If this field is not set a footer is not added, the last row is filled with either first_band_color_style or second_band_color_style, depending on the color of the previous row. If updating an existing table without a footer to have a footer, the range will be expanded by 1 row. If updating an existing table with a footer and removing a footer, the range will be shrunk by 1 row. */
  footerColorStyle?: ColorStyle;
  /** The color of the header row. If this field is set, the header row is filled with the specified color. Otherwise, the header row is filled with a default color. */
  headerColorStyle?: ColorStyle;
  /** The first color that is alternating. If this field is set, the first banded row is filled with the specified color. Otherwise, the first banded row is filled with a default color. */
  firstBandColorStyle?: ColorStyle;
}

export const TableRowsProperties = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  secondBandColorStyle: Schema.optional(ColorStyle),
  footerColorStyle: Schema.optional(ColorStyle),
  headerColorStyle: Schema.optional(ColorStyle),
  firstBandColorStyle: Schema.optional(ColorStyle),
}).annotate({ identifier: "TableRowsProperties" });

export interface TableColumnDataValidationRule {
  /** The condition that data in the cell must match. Valid only if the [BooleanCondition.type] is ONE_OF_LIST. */
  condition?: BooleanCondition;
}

export const TableColumnDataValidationRule =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    condition: Schema.optional(BooleanCondition),
  }).annotate({ identifier: "TableColumnDataValidationRule" });

export interface TableColumnProperties {
  /** The column type. */
  columnType?:
    | "COLUMN_TYPE_UNSPECIFIED"
    | "DOUBLE"
    | "CURRENCY"
    | "PERCENT"
    | "DATE"
    | "TIME"
    | "DATE_TIME"
    | "TEXT"
    | "BOOLEAN"
    | "DROPDOWN"
    | "FILES_CHIP"
    | "PEOPLE_CHIP"
    | "FINANCE_CHIP"
    | "PLACE_CHIP"
    | "RATINGS_CHIP"
    | (string & {});
  /** The column data validation rule. Only set for dropdown column type. */
  dataValidationRule?: TableColumnDataValidationRule;
  /** The 0-based column index. This index is relative to its position in the table and is not necessarily the same as the column index in the sheet. */
  columnIndex?: number;
  /** The column name. */
  columnName?: string;
}

export const TableColumnProperties = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  columnType: Schema.optional(Schema.String),
  dataValidationRule: Schema.optional(TableColumnDataValidationRule),
  columnIndex: Schema.optional(Schema.Number),
  columnName: Schema.optional(Schema.String),
}).annotate({ identifier: "TableColumnProperties" });

export interface Table {
  /** The table rows properties. */
  rowsProperties?: TableRowsProperties;
  /** The table name. This is unique to all tables in the same spreadsheet. */
  name?: string;
  /** The table range. */
  range?: GridRange;
  /** The table column properties. */
  columnProperties?: ReadonlyArray<TableColumnProperties>;
  /** The id of the table. */
  tableId?: string;
}

export const Table = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  rowsProperties: Schema.optional(TableRowsProperties),
  name: Schema.optional(Schema.String),
  range: Schema.optional(GridRange),
  columnProperties: Schema.optional(Schema.Array(TableColumnProperties)),
  tableId: Schema.optional(Schema.String),
}).annotate({ identifier: "Table" });

export interface UpdateTableRequest {
  /** Required. The table to update. */
  table?: Table;
  /** Required. The fields that should be updated. At least one field must be specified. The root `table` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. */
  fields?: string;
}

export const UpdateTableRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  table: Schema.optional(Table),
  fields: Schema.optional(Schema.String),
}).annotate({ identifier: "UpdateTableRequest" });

export interface InsertRangeRequest {
  /** The range to insert new cells into. The range is constrained to the current sheet boundaries. */
  range?: GridRange;
  /** The dimension which will be shifted when inserting cells. If ROWS, existing cells will be shifted down. If COLUMNS, existing cells will be shifted right. */
  shiftDimension?: "DIMENSION_UNSPECIFIED" | "ROWS" | "COLUMNS" | (string & {});
}

export const InsertRangeRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  range: Schema.optional(GridRange),
  shiftDimension: Schema.optional(Schema.String),
}).annotate({ identifier: "InsertRangeRequest" });

export interface DeleteSheetRequest {
  /** The ID of the sheet to delete. If the sheet is of DATA_SOURCE type, the associated DataSource is also deleted. */
  sheetId?: number;
}

export const DeleteSheetRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sheetId: Schema.optional(Schema.Number),
}).annotate({ identifier: "DeleteSheetRequest" });

export interface InterpolationPoint {
  /** The value this interpolation point uses. May be a formula. Unused if type is MIN or MAX. */
  value?: string;
  /** How the value should be interpreted. */
  type?:
    | "INTERPOLATION_POINT_TYPE_UNSPECIFIED"
    | "MIN"
    | "MAX"
    | "NUMBER"
    | "PERCENT"
    | "PERCENTILE"
    | (string & {});
  /** The color this interpolation point should use. Deprecated: Use color_style. */
  color?: Color;
  /** The color this interpolation point should use. If color is also set, this field takes precedence. */
  colorStyle?: ColorStyle;
}

export const InterpolationPoint = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  color: Schema.optional(Color),
  colorStyle: Schema.optional(ColorStyle),
}).annotate({ identifier: "InterpolationPoint" });

export interface GradientRule {
  /** The starting interpolation point. */
  minpoint?: InterpolationPoint;
  /** An optional midway interpolation point. */
  midpoint?: InterpolationPoint;
  /** The final interpolation point. */
  maxpoint?: InterpolationPoint;
}

export const GradientRule = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  minpoint: Schema.optional(InterpolationPoint),
  midpoint: Schema.optional(InterpolationPoint),
  maxpoint: Schema.optional(InterpolationPoint),
}).annotate({ identifier: "GradientRule" });

export interface BooleanRule {
  /** The condition of the rule. If the condition evaluates to true, the format is applied. */
  condition?: BooleanCondition;
  /** The format to apply. Conditional formatting can only apply a subset of formatting: bold, italic, strikethrough, foreground color and, background color. */
  format?: CellFormat;
}

export const BooleanRule = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  condition: Schema.optional(BooleanCondition),
  format: Schema.optional(CellFormat),
}).annotate({ identifier: "BooleanRule" });

export interface ConditionalFormatRule {
  /** The formatting will vary based on the gradients in the rule. */
  gradientRule?: GradientRule;
  /** The ranges that are formatted if the condition is true. All the ranges must be on the same grid. */
  ranges?: ReadonlyArray<GridRange>;
  /** The formatting is either "on" or "off" according to the rule. */
  booleanRule?: BooleanRule;
}

export const ConditionalFormatRule = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  gradientRule: Schema.optional(GradientRule),
  ranges: Schema.optional(Schema.Array(GridRange)),
  booleanRule: Schema.optional(BooleanRule),
}).annotate({ identifier: "ConditionalFormatRule" });

export interface AddConditionalFormatRuleRequest {
  /** The rule to add. */
  rule?: ConditionalFormatRule;
  /** The zero-based index where the rule should be inserted. */
  index?: number;
}

export const AddConditionalFormatRuleRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rule: Schema.optional(ConditionalFormatRule),
    index: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AddConditionalFormatRuleRequest" });

export interface AppendCellsRequest {
  /** The data to append. */
  rows?: ReadonlyArray<RowData>;
  /** The sheet ID to append the data to. */
  sheetId?: number;
  /** The fields of CellData that should be updated. At least one field must be specified. The root is the CellData; 'row.values.' should not be specified. A single `"*"` can be used as short-hand for listing every field. */
  fields?: string;
  /** The ID of the table to append data to. The data will be only appended to the table body. This field also takes precedence over the `sheet_id` field. */
  tableId?: string;
}

export const AppendCellsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  rows: Schema.optional(Schema.Array(RowData)),
  sheetId: Schema.optional(Schema.Number),
  fields: Schema.optional(Schema.String),
  tableId: Schema.optional(Schema.String),
}).annotate({ identifier: "AppendCellsRequest" });

export interface DeleteProtectedRangeRequest {
  /** The ID of the protected range to delete. */
  protectedRangeId?: number;
}

export const DeleteProtectedRangeRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    protectedRangeId: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DeleteProtectedRangeRequest" });

export interface AutoResizeDimensionsRequest {
  /** The dimensions on a data source sheet to automatically resize. */
  dataSourceSheetDimensions?: DataSourceSheetDimensionRange;
  /** The dimensions to automatically resize. */
  dimensions?: DimensionRange;
}

export const AutoResizeDimensionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataSourceSheetDimensions: Schema.optional(DataSourceSheetDimensionRange),
    dimensions: Schema.optional(DimensionRange),
  }).annotate({ identifier: "AutoResizeDimensionsRequest" });

export interface AddDataSourceRequest {
  /** The data source to add. */
  dataSource?: DataSource;
}

export const AddDataSourceRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dataSource: Schema.optional(DataSource),
}).annotate({ identifier: "AddDataSourceRequest" });

export interface SortRangeRequest {
  /** The sort order per column. Later specifications are used when values are equal in the earlier specifications. */
  sortSpecs?: ReadonlyArray<SortSpec>;
  /** The range to sort. */
  range?: GridRange;
}

export const SortRangeRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sortSpecs: Schema.optional(Schema.Array(SortSpec)),
  range: Schema.optional(GridRange),
}).annotate({ identifier: "SortRangeRequest" });

export interface RandomizeRangeRequest {
  /** The range to randomize. */
  range?: GridRange;
}

export const RandomizeRangeRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  range: Schema.optional(GridRange),
}).annotate({ identifier: "RandomizeRangeRequest" });

export interface BasicFilter {
  /** The table this filter is backed by, if any. When writing, only one of range or table_id may be set. */
  tableId?: string;
  /** The sort order per column. Later specifications are used when values are equal in the earlier specifications. */
  sortSpecs?: ReadonlyArray<SortSpec>;
  /** The criteria for showing/hiding values per column. The map's key is the column index, and the value is the criteria for that column. This field is deprecated in favor of filter_specs. */
  criteria?: Record<string, FilterCriteria>;
  /** The range the filter covers. */
  range?: GridRange;
  /** The filter criteria per column. Both criteria and filter_specs are populated in responses. If both fields are specified in an update request, this field takes precedence. */
  filterSpecs?: ReadonlyArray<FilterSpec>;
}

export const BasicFilter = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tableId: Schema.optional(Schema.String),
  sortSpecs: Schema.optional(Schema.Array(SortSpec)),
  criteria: Schema.optional(Schema.Record(Schema.String, FilterCriteria)),
  range: Schema.optional(GridRange),
  filterSpecs: Schema.optional(Schema.Array(FilterSpec)),
}).annotate({ identifier: "BasicFilter" });

export interface SetBasicFilterRequest {
  /** The filter to set. */
  filter?: BasicFilter;
}

export const SetBasicFilterRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  filter: Schema.optional(BasicFilter),
}).annotate({ identifier: "SetBasicFilterRequest" });

export interface ClearBasicFilterRequest {
  /** The sheet ID on which the basic filter should be cleared. */
  sheetId?: number;
}

export const ClearBasicFilterRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sheetId: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ClearBasicFilterRequest" });

export interface DeleteDeveloperMetadataRequest {
  /** The data filter describing the criteria used to select which developer metadata entry to delete. */
  dataFilter?: DataFilter;
}

export const DeleteDeveloperMetadataRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataFilter: Schema.optional(DataFilter),
  }).annotate({ identifier: "DeleteDeveloperMetadataRequest" });

export interface UpdateDeveloperMetadataRequest {
  /** The fields that should be updated. At least one field must be specified. The root `developerMetadata` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. */
  fields?: string;
  /** The filters matching the developer metadata entries to update. */
  dataFilters?: ReadonlyArray<DataFilter>;
  /** The value that all metadata matched by the data filters will be updated to. */
  developerMetadata?: DeveloperMetadata;
}

export const UpdateDeveloperMetadataRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fields: Schema.optional(Schema.String),
    dataFilters: Schema.optional(Schema.Array(DataFilter)),
    developerMetadata: Schema.optional(DeveloperMetadata),
  }).annotate({ identifier: "UpdateDeveloperMetadataRequest" });

export interface EmbeddedObjectBorder {
  /** The color of the border. If color is also set, this field takes precedence. */
  colorStyle?: ColorStyle;
  /** The color of the border. Deprecated: Use color_style. */
  color?: Color;
}

export const EmbeddedObjectBorder = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  colorStyle: Schema.optional(ColorStyle),
  color: Schema.optional(Color),
}).annotate({ identifier: "EmbeddedObjectBorder" });

export interface WaterfallChartCustomSubtotal {
  /** The zero-based index of a data point within the series. If data_is_subtotal is true, the data point at this index is the subtotal. Otherwise, the subtotal appears after the data point with this index. A series can have multiple subtotals at arbitrary indices, but subtotals do not affect the indices of the data points. For example, if a series has three data points, their indices will always be 0, 1, and 2, regardless of how many subtotals exist on the series or what data points they are associated with. */
  subtotalIndex?: number;
  /** A label for the subtotal column. */
  label?: string;
  /** True if the data point at subtotal_index is the subtotal. If false, the subtotal will be computed and appear after the data point. */
  dataIsSubtotal?: boolean;
}

export const WaterfallChartCustomSubtotal =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subtotalIndex: Schema.optional(Schema.Number),
    label: Schema.optional(Schema.String),
    dataIsSubtotal: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "WaterfallChartCustomSubtotal" });

export interface WaterfallChartColumnStyle {
  /** The color of the column. Deprecated: Use color_style. */
  color?: Color;
  /** The color of the column. If color is also set, this field takes precedence. */
  colorStyle?: ColorStyle;
  /** The label of the column's legend. */
  label?: string;
}

export const WaterfallChartColumnStyle =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    color: Schema.optional(Color),
    colorStyle: Schema.optional(ColorStyle),
    label: Schema.optional(Schema.String),
  }).annotate({ identifier: "WaterfallChartColumnStyle" });

export interface WaterfallChartSeries {
  /** Custom subtotal columns appearing in this series. The order in which subtotals are defined is not significant. Only one subtotal may be defined for each data point. */
  customSubtotals?: ReadonlyArray<WaterfallChartCustomSubtotal>;
  /** The data being visualized in this series. */
  data?: ChartData;
  /** Styles for all columns in this series with negative values. */
  negativeColumnsStyle?: WaterfallChartColumnStyle;
  /** Styles for all subtotal columns in this series. */
  subtotalColumnsStyle?: WaterfallChartColumnStyle;
  /** Information about the data labels for this series. */
  dataLabel?: DataLabel;
  /** True to hide the subtotal column from the end of the series. By default, a subtotal column will appear at the end of each series. Setting this field to true will hide that subtotal column for this series. */
  hideTrailingSubtotal?: boolean;
  /** Styles for all columns in this series with positive values. */
  positiveColumnsStyle?: WaterfallChartColumnStyle;
}

export const WaterfallChartSeries = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customSubtotals: Schema.optional(Schema.Array(WaterfallChartCustomSubtotal)),
  data: Schema.optional(ChartData),
  negativeColumnsStyle: Schema.optional(WaterfallChartColumnStyle),
  subtotalColumnsStyle: Schema.optional(WaterfallChartColumnStyle),
  dataLabel: Schema.optional(DataLabel),
  hideTrailingSubtotal: Schema.optional(Schema.Boolean),
  positiveColumnsStyle: Schema.optional(WaterfallChartColumnStyle),
}).annotate({ identifier: "WaterfallChartSeries" });

export interface WaterfallChartDomain {
  /** True to reverse the order of the domain values (horizontal axis). */
  reversed?: boolean;
  /** The data of the WaterfallChartDomain. */
  data?: ChartData;
}

export const WaterfallChartDomain = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reversed: Schema.optional(Schema.Boolean),
  data: Schema.optional(ChartData),
}).annotate({ identifier: "WaterfallChartDomain" });

export interface LineStyle {
  /** The thickness of the line, in px. */
  width?: number;
  /** The dash type of the line. */
  type?:
    | "LINE_DASH_TYPE_UNSPECIFIED"
    | "INVISIBLE"
    | "CUSTOM"
    | "SOLID"
    | "DOTTED"
    | "MEDIUM_DASHED"
    | "MEDIUM_DASHED_DOTTED"
    | "LONG_DASHED"
    | "LONG_DASHED_DOTTED"
    | (string & {});
}

export const LineStyle = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  width: Schema.optional(Schema.Number),
  type: Schema.optional(Schema.String),
}).annotate({ identifier: "LineStyle" });

export interface WaterfallChartSpec {
  /** The stacked type. */
  stackedType?:
    | "WATERFALL_STACKED_TYPE_UNSPECIFIED"
    | "STACKED"
    | "SEQUENTIAL"
    | (string & {});
  /** The data this waterfall chart is visualizing. */
  series?: ReadonlyArray<WaterfallChartSeries>;
  /** Controls whether to display additional data labels on stacked charts which sum the total value of all stacked values at each value along the domain axis. stacked_type must be STACKED and neither CUSTOM nor placement can be set on the total_data_label. */
  totalDataLabel?: DataLabel;
  /** The domain data (horizontal axis) for the waterfall chart. */
  domain?: WaterfallChartDomain;
  /** True to hide connector lines between columns. */
  hideConnectorLines?: boolean;
  /** True to interpret the first value as a total. */
  firstValueIsTotal?: boolean;
  /** The line style for the connector lines. */
  connectorLineStyle?: LineStyle;
}

export const WaterfallChartSpec = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  stackedType: Schema.optional(Schema.String),
  series: Schema.optional(Schema.Array(WaterfallChartSeries)),
  totalDataLabel: Schema.optional(DataLabel),
  domain: Schema.optional(WaterfallChartDomain),
  hideConnectorLines: Schema.optional(Schema.Boolean),
  firstValueIsTotal: Schema.optional(Schema.Boolean),
  connectorLineStyle: Schema.optional(LineStyle),
}).annotate({ identifier: "WaterfallChartSpec" });

export interface ChartAxisViewWindowOptions {
  /** The view window's mode. */
  viewWindowMode?:
    | "DEFAULT_VIEW_WINDOW_MODE"
    | "VIEW_WINDOW_MODE_UNSUPPORTED"
    | "EXPLICIT"
    | "PRETTY"
    | (string & {});
  /** The minimum numeric value to be shown in this view window. If unset, will automatically determine a minimum value that looks good for the data. */
  viewWindowMin?: number;
  /** The maximum numeric value to be shown in this view window. If unset, will automatically determine a maximum value that looks good for the data. */
  viewWindowMax?: number;
}

export const ChartAxisViewWindowOptions =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    viewWindowMode: Schema.optional(Schema.String),
    viewWindowMin: Schema.optional(Schema.Number),
    viewWindowMax: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ChartAxisViewWindowOptions" });

export interface BasicChartAxis {
  /** The axis title text position. */
  titleTextPosition?: TextPosition;
  /** The view window options for this axis. */
  viewWindowOptions?: ChartAxisViewWindowOptions;
  /** The title of this axis. If set, this overrides any title inferred from headers of the data. */
  title?: string;
  /** The position of this axis. */
  position?:
    | "BASIC_CHART_AXIS_POSITION_UNSPECIFIED"
    | "BOTTOM_AXIS"
    | "LEFT_AXIS"
    | "RIGHT_AXIS"
    | (string & {});
  /** The format of the title. Only valid if the axis is not associated with the domain. The link field is not supported. */
  format?: TextFormat;
}

export const BasicChartAxis = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  titleTextPosition: Schema.optional(TextPosition),
  viewWindowOptions: Schema.optional(ChartAxisViewWindowOptions),
  title: Schema.optional(Schema.String),
  position: Schema.optional(Schema.String),
  format: Schema.optional(TextFormat),
}).annotate({ identifier: "BasicChartAxis" });

export interface PointStyle {
  /** The point size. If empty, a default size is used. */
  size?: number;
  /** The point shape. If empty or unspecified, a default shape is used. */
  shape?:
    | "POINT_SHAPE_UNSPECIFIED"
    | "CIRCLE"
    | "DIAMOND"
    | "HEXAGON"
    | "PENTAGON"
    | "SQUARE"
    | "STAR"
    | "TRIANGLE"
    | "X_MARK"
    | (string & {});
}

export const PointStyle = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  size: Schema.optional(Schema.Number),
  shape: Schema.optional(Schema.String),
}).annotate({ identifier: "PointStyle" });

export interface BasicSeriesDataPointStyleOverride {
  /** The zero-based index of the series data point. */
  index?: number;
  /** Color of the series data point. If empty, the series default is used. If color is also set, this field takes precedence. */
  colorStyle?: ColorStyle;
  /** Color of the series data point. If empty, the series default is used. Deprecated: Use color_style. */
  color?: Color;
  /** Point style of the series data point. Valid only if the chartType is AREA, LINE, or SCATTER. COMBO charts are also supported if the series chart type is AREA, LINE, or SCATTER. If empty, the series default is used. */
  pointStyle?: PointStyle;
}

export const BasicSeriesDataPointStyleOverride =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    index: Schema.optional(Schema.Number),
    colorStyle: Schema.optional(ColorStyle),
    color: Schema.optional(Color),
    pointStyle: Schema.optional(PointStyle),
  }).annotate({ identifier: "BasicSeriesDataPointStyleOverride" });

export interface BasicChartSeries {
  /** The data being visualized in this chart series. */
  series?: ChartData;
  /** Information about the data labels for this series. */
  dataLabel?: DataLabel;
  /** The style for points associated with this series. Valid only if the chartType is AREA, LINE, or SCATTER. COMBO charts are also supported if the series chart type is AREA, LINE, or SCATTER. If empty, a default point style is used. */
  pointStyle?: PointStyle;
  /** The line style of this series. Valid only if the chartType is AREA, LINE, or SCATTER. COMBO charts are also supported if the series chart type is AREA or LINE. */
  lineStyle?: LineStyle;
  /** The minor axis that will specify the range of values for this series. For example, if charting stocks over time, the "Volume" series may want to be pinned to the right with the prices pinned to the left, because the scale of trading volume is different than the scale of prices. It is an error to specify an axis that isn't a valid minor axis for the chart's type. */
  targetAxis?:
    | "BASIC_CHART_AXIS_POSITION_UNSPECIFIED"
    | "BOTTOM_AXIS"
    | "LEFT_AXIS"
    | "RIGHT_AXIS"
    | (string & {});
  /** The color for elements (such as bars, lines, and points) associated with this series. If empty, a default color is used. If color is also set, this field takes precedence. */
  colorStyle?: ColorStyle;
  /** The color for elements (such as bars, lines, and points) associated with this series. If empty, a default color is used. Deprecated: Use color_style. */
  color?: Color;
  /** The type of this series. Valid only if the chartType is COMBO. Different types will change the way the series is visualized. Only LINE, AREA, and COLUMN are supported. */
  type?:
    | "BASIC_CHART_TYPE_UNSPECIFIED"
    | "BAR"
    | "LINE"
    | "AREA"
    | "COLUMN"
    | "SCATTER"
    | "COMBO"
    | "STEPPED_AREA"
    | (string & {});
  /** Style override settings for series data points. */
  styleOverrides?: ReadonlyArray<BasicSeriesDataPointStyleOverride>;
}

export const BasicChartSeries = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  series: Schema.optional(ChartData),
  dataLabel: Schema.optional(DataLabel),
  pointStyle: Schema.optional(PointStyle),
  lineStyle: Schema.optional(LineStyle),
  targetAxis: Schema.optional(Schema.String),
  colorStyle: Schema.optional(ColorStyle),
  color: Schema.optional(Color),
  type: Schema.optional(Schema.String),
  styleOverrides: Schema.optional(
    Schema.Array(BasicSeriesDataPointStyleOverride),
  ),
}).annotate({ identifier: "BasicChartSeries" });

export interface BasicChartDomain {
  /** The data of the domain. For example, if charting stock prices over time, this is the data representing the dates. */
  domain?: ChartData;
  /** True to reverse the order of the domain values (horizontal axis). */
  reversed?: boolean;
}

export const BasicChartDomain = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  domain: Schema.optional(ChartData),
  reversed: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "BasicChartDomain" });

export interface BasicChartSpec {
  /** The type of the chart. */
  chartType?:
    | "BASIC_CHART_TYPE_UNSPECIFIED"
    | "BAR"
    | "LINE"
    | "AREA"
    | "COLUMN"
    | "SCATTER"
    | "COMBO"
    | "STEPPED_AREA"
    | (string & {});
  /** The axis on the chart. */
  axis?: ReadonlyArray<BasicChartAxis>;
  /** The number of rows or columns in the data that are "headers". If not set, Google Sheets will guess how many rows are headers based on the data. (Note that BasicChartAxis.title may override the axis title inferred from the header values.) */
  headerCount?: number;
  /** True to make the chart 3D. Applies to Bar and Column charts. */
  threeDimensional?: boolean;
  /** The data this chart is visualizing. */
  series?: ReadonlyArray<BasicChartSeries>;
  /** Controls whether to display additional data labels on stacked charts which sum the total value of all stacked values at each value along the domain axis. These data labels can only be set when chart_type is one of AREA, BAR, COLUMN, COMBO or STEPPED_AREA and stacked_type is either STACKED or PERCENT_STACKED. In addition, for COMBO, this will only be supported if there is only one type of stackable series type or one type has more series than the others and each of the other types have no more than one series. For example, if a chart has two stacked bar series and one area series, the total data labels will be supported. If it has three bar series and two area series, total data labels are not allowed. Neither CUSTOM nor placement can be set on the total_data_label. */
  totalDataLabel?: DataLabel;
  /** The position of the chart legend. */
  legendPosition?:
    | "BASIC_CHART_LEGEND_POSITION_UNSPECIFIED"
    | "BOTTOM_LEGEND"
    | "LEFT_LEGEND"
    | "RIGHT_LEGEND"
    | "TOP_LEGEND"
    | "NO_LEGEND"
    | (string & {});
  /** The domain of data this is charting. Only a single domain is supported. */
  domains?: ReadonlyArray<BasicChartDomain>;
  /** If some values in a series are missing, gaps may appear in the chart (e.g, segments of lines in a line chart will be missing). To eliminate these gaps set this to true. Applies to Line, Area, and Combo charts. */
  interpolateNulls?: boolean;
  /** The stacked type for charts that support vertical stacking. Applies to Area, Bar, Column, Combo, and Stepped Area charts. */
  stackedType?:
    | "BASIC_CHART_STACKED_TYPE_UNSPECIFIED"
    | "NOT_STACKED"
    | "STACKED"
    | "PERCENT_STACKED"
    | (string & {});
  /** Gets whether all lines should be rendered smooth or straight by default. Applies to Line charts. */
  lineSmoothing?: boolean;
  /** The behavior of tooltips and data highlighting when hovering on data and chart area. */
  compareMode?:
    | "BASIC_CHART_COMPARE_MODE_UNSPECIFIED"
    | "DATUM"
    | "CATEGORY"
    | (string & {});
}

export const BasicChartSpec = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  chartType: Schema.optional(Schema.String),
  axis: Schema.optional(Schema.Array(BasicChartAxis)),
  headerCount: Schema.optional(Schema.Number),
  threeDimensional: Schema.optional(Schema.Boolean),
  series: Schema.optional(Schema.Array(BasicChartSeries)),
  totalDataLabel: Schema.optional(DataLabel),
  legendPosition: Schema.optional(Schema.String),
  domains: Schema.optional(Schema.Array(BasicChartDomain)),
  interpolateNulls: Schema.optional(Schema.Boolean),
  stackedType: Schema.optional(Schema.String),
  lineSmoothing: Schema.optional(Schema.Boolean),
  compareMode: Schema.optional(Schema.String),
}).annotate({ identifier: "BasicChartSpec" });

export interface HistogramSeries {
  /** The color of the column representing this series in each bucket. This field is optional. Deprecated: Use bar_color_style. */
  barColor?: Color;
  /** The color of the column representing this series in each bucket. This field is optional. If bar_color is also set, this field takes precedence. */
  barColorStyle?: ColorStyle;
  /** The data for this histogram series. */
  data?: ChartData;
}

export const HistogramSeries = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  barColor: Schema.optional(Color),
  barColorStyle: Schema.optional(ColorStyle),
  data: Schema.optional(ChartData),
}).annotate({ identifier: "HistogramSeries" });

export interface HistogramChartSpec {
  /** The outlier percentile is used to ensure that outliers do not adversely affect the calculation of bucket sizes. For example, setting an outlier percentile of 0.05 indicates that the top and bottom 5% of values when calculating buckets. The values are still included in the chart, they will be added to the first or last buckets instead of their own buckets. Must be between 0.0 and 0.5. */
  outlierPercentile?: number;
  /** The position of the chart legend. */
  legendPosition?:
    | "HISTOGRAM_CHART_LEGEND_POSITION_UNSPECIFIED"
    | "BOTTOM_LEGEND"
    | "LEFT_LEGEND"
    | "RIGHT_LEGEND"
    | "TOP_LEGEND"
    | "NO_LEGEND"
    | "INSIDE_LEGEND"
    | (string & {});
  /** The series for a histogram may be either a single series of values to be bucketed or multiple series, each of the same length, containing the name of the series followed by the values to be bucketed for that series. */
  series?: ReadonlyArray<HistogramSeries>;
  /** Whether horizontal divider lines should be displayed between items in each column. */
  showItemDividers?: boolean;
  /** By default the bucket size (the range of values stacked in a single column) is chosen automatically, but it may be overridden here. E.g., A bucket size of 1.5 results in buckets from 0 - 1.5, 1.5 - 3.0, etc. Cannot be negative. This field is optional. */
  bucketSize?: number;
}

export const HistogramChartSpec = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  outlierPercentile: Schema.optional(Schema.Number),
  legendPosition: Schema.optional(Schema.String),
  series: Schema.optional(Schema.Array(HistogramSeries)),
  showItemDividers: Schema.optional(Schema.Boolean),
  bucketSize: Schema.optional(Schema.Number),
}).annotate({ identifier: "HistogramChartSpec" });

export interface OrgChartSpec {
  /** The size of the org chart nodes. */
  nodeSize?:
    | "ORG_CHART_LABEL_SIZE_UNSPECIFIED"
    | "SMALL"
    | "MEDIUM"
    | "LARGE"
    | (string & {});
  /** The color of the org chart nodes. Deprecated: Use node_color_style. */
  nodeColor?: Color;
  /** The color of the selected org chart nodes. Deprecated: Use selected_node_color_style. */
  selectedNodeColor?: Color;
  /** The color of the org chart nodes. If node_color is also set, this field takes precedence. */
  nodeColorStyle?: ColorStyle;
  /** The data containing the label of the parent for the corresponding node. A blank value indicates that the node has no parent and is a top-level node. This field is optional. */
  parentLabels?: ChartData;
  /** The data containing the tooltip for the corresponding node. A blank value results in no tooltip being displayed for the node. This field is optional. */
  tooltips?: ChartData;
  /** The data containing the labels for all the nodes in the chart. Labels must be unique. */
  labels?: ChartData;
  /** The color of the selected org chart nodes. If selected_node_color is also set, this field takes precedence. */
  selectedNodeColorStyle?: ColorStyle;
}

export const OrgChartSpec = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nodeSize: Schema.optional(Schema.String),
  nodeColor: Schema.optional(Color),
  selectedNodeColor: Schema.optional(Color),
  nodeColorStyle: Schema.optional(ColorStyle),
  parentLabels: Schema.optional(ChartData),
  tooltips: Schema.optional(ChartData),
  labels: Schema.optional(ChartData),
  selectedNodeColorStyle: Schema.optional(ColorStyle),
}).annotate({ identifier: "OrgChartSpec" });

export interface BubbleChartSpec {
  /** The data containing the bubble sizes. Bubble sizes are used to draw the bubbles at different sizes relative to each other. If specified, group_ids must also be specified. This field is optional. */
  bubbleSizes?: ChartData;
  /** The max radius size of the bubbles, in pixels. If specified, the field must be a positive value. */
  bubbleMaxRadiusSize?: number;
  /** The format of the text inside the bubbles. Strikethrough, underline, and link are not supported. */
  bubbleTextStyle?: TextFormat;
  /** The data containing the bubble labels. These do not need to be unique. */
  bubbleLabels?: ChartData;
  /** The opacity of the bubbles between 0 and 1.0. 0 is fully transparent and 1 is fully opaque. */
  bubbleOpacity?: number;
  /** The bubble border color. Deprecated: Use bubble_border_color_style. */
  bubbleBorderColor?: Color;
  /** The minimum radius size of the bubbles, in pixels. If specific, the field must be a positive value. */
  bubbleMinRadiusSize?: number;
  /** The data containing the bubble group IDs. All bubbles with the same group ID are drawn in the same color. If bubble_sizes is specified then this field must also be specified but may contain blank values. This field is optional. */
  groupIds?: ChartData;
  /** The data containing the bubble y-values. These values locate the bubbles in the chart vertically. */
  series?: ChartData;
  /** The data containing the bubble x-values. These values locate the bubbles in the chart horizontally. */
  domain?: ChartData;
  /** The bubble border color. If bubble_border_color is also set, this field takes precedence. */
  bubbleBorderColorStyle?: ColorStyle;
  /** Where the legend of the chart should be drawn. */
  legendPosition?:
    | "BUBBLE_CHART_LEGEND_POSITION_UNSPECIFIED"
    | "BOTTOM_LEGEND"
    | "LEFT_LEGEND"
    | "RIGHT_LEGEND"
    | "TOP_LEGEND"
    | "NO_LEGEND"
    | "INSIDE_LEGEND"
    | (string & {});
}

export const BubbleChartSpec = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  bubbleSizes: Schema.optional(ChartData),
  bubbleMaxRadiusSize: Schema.optional(Schema.Number),
  bubbleTextStyle: Schema.optional(TextFormat),
  bubbleLabels: Schema.optional(ChartData),
  bubbleOpacity: Schema.optional(Schema.Number),
  bubbleBorderColor: Schema.optional(Color),
  bubbleMinRadiusSize: Schema.optional(Schema.Number),
  groupIds: Schema.optional(ChartData),
  series: Schema.optional(ChartData),
  domain: Schema.optional(ChartData),
  bubbleBorderColorStyle: Schema.optional(ColorStyle),
  legendPosition: Schema.optional(Schema.String),
}).annotate({ identifier: "BubbleChartSpec" });

export interface CandlestickDomain {
  /** True to reverse the order of the domain values (horizontal axis). */
  reversed?: boolean;
  /** The data of the CandlestickDomain. */
  data?: ChartData;
}

export const CandlestickDomain = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reversed: Schema.optional(Schema.Boolean),
  data: Schema.optional(ChartData),
}).annotate({ identifier: "CandlestickDomain" });

export interface CandlestickSeries {
  /** The data of the CandlestickSeries. */
  data?: ChartData;
}

export const CandlestickSeries = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  data: Schema.optional(ChartData),
}).annotate({ identifier: "CandlestickSeries" });

export interface CandlestickData {
  /** The range data (vertical axis) for the open/initial value for each candle. This is the bottom of the candle body. If less than the close value the candle will be filled. Otherwise the candle will be hollow. */
  openSeries?: CandlestickSeries;
  /** The range data (vertical axis) for the close/final value for each candle. This is the top of the candle body. If greater than the open value the candle will be filled. Otherwise the candle will be hollow. */
  closeSeries?: CandlestickSeries;
  /** The range data (vertical axis) for the low/minimum value for each candle. This is the bottom of the candle's center line. */
  lowSeries?: CandlestickSeries;
  /** The range data (vertical axis) for the high/maximum value for each candle. This is the top of the candle's center line. */
  highSeries?: CandlestickSeries;
}

export const CandlestickData = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  openSeries: Schema.optional(CandlestickSeries),
  closeSeries: Schema.optional(CandlestickSeries),
  lowSeries: Schema.optional(CandlestickSeries),
  highSeries: Schema.optional(CandlestickSeries),
}).annotate({ identifier: "CandlestickData" });

export interface CandlestickChartSpec {
  /** The domain data (horizontal axis) for the candlestick chart. String data will be treated as discrete labels, other data will be treated as continuous values. */
  domain?: CandlestickDomain;
  /** The Candlestick chart data. Only one CandlestickData is supported. */
  data?: ReadonlyArray<CandlestickData>;
}

export const CandlestickChartSpec = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  domain: Schema.optional(CandlestickDomain),
  data: Schema.optional(Schema.Array(CandlestickData)),
}).annotate({ identifier: "CandlestickChartSpec" });

export interface PieChartSpec {
  /** True if the pie is three dimensional. */
  threeDimensional?: boolean;
  /** Where the legend of the pie chart should be drawn. */
  legendPosition?:
    | "PIE_CHART_LEGEND_POSITION_UNSPECIFIED"
    | "BOTTOM_LEGEND"
    | "LEFT_LEGEND"
    | "RIGHT_LEGEND"
    | "TOP_LEGEND"
    | "NO_LEGEND"
    | "LABELED_LEGEND"
    | (string & {});
  /** The data that covers the one and only series of the pie chart. */
  series?: ChartData;
  /** The size of the hole in the pie chart. */
  pieHole?: number;
  /** The data that covers the domain of the pie chart. */
  domain?: ChartData;
}

export const PieChartSpec = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  threeDimensional: Schema.optional(Schema.Boolean),
  legendPosition: Schema.optional(Schema.String),
  series: Schema.optional(ChartData),
  pieHole: Schema.optional(Schema.Number),
  domain: Schema.optional(ChartData),
}).annotate({ identifier: "PieChartSpec" });

export interface TreemapChartColorScale {
  /** The background color for cells with a color value less than or equal to minValue. Defaults to #dc3912 if not specified. Deprecated: Use min_value_color_style. */
  minValueColor?: Color;
  /** The background color for cells that have no color data associated with them. Defaults to #000000 if not specified. If no_data_color is also set, this field takes precedence. */
  noDataColorStyle?: ColorStyle;
  /** The background color for cells that have no color data associated with them. Defaults to #000000 if not specified. Deprecated: Use no_data_color_style. */
  noDataColor?: Color;
  /** The background color for cells with a color value at the midpoint between minValue and maxValue. Defaults to #efe6dc if not specified. Deprecated: Use mid_value_color_style. */
  midValueColor?: Color;
  /** The background color for cells with a color value at the midpoint between minValue and maxValue. Defaults to #efe6dc if not specified. If mid_value_color is also set, this field takes precedence. */
  midValueColorStyle?: ColorStyle;
  /** The background color for cells with a color value greater than or equal to maxValue. Defaults to #109618 if not specified. Deprecated: Use max_value_color_style. */
  maxValueColor?: Color;
  /** The background color for cells with a color value greater than or equal to maxValue. Defaults to #109618 if not specified. If max_value_color is also set, this field takes precedence. */
  maxValueColorStyle?: ColorStyle;
  /** The background color for cells with a color value less than or equal to minValue. Defaults to #dc3912 if not specified. If min_value_color is also set, this field takes precedence. */
  minValueColorStyle?: ColorStyle;
}

export const TreemapChartColorScale = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    minValueColor: Schema.optional(Color),
    noDataColorStyle: Schema.optional(ColorStyle),
    noDataColor: Schema.optional(Color),
    midValueColor: Schema.optional(Color),
    midValueColorStyle: Schema.optional(ColorStyle),
    maxValueColor: Schema.optional(Color),
    maxValueColorStyle: Schema.optional(ColorStyle),
    minValueColorStyle: Schema.optional(ColorStyle),
  },
).annotate({ identifier: "TreemapChartColorScale" });

export interface TreemapChartSpec {
  /** The maximum possible data value. Cells with values greater than this will have the same color as cells with this value. If not specified, defaults to the actual maximum value from color_data, or the maximum value from size_data if color_data is not specified. */
  maxValue?: number;
  /** The data that determines the background color of each treemap data cell. This field is optional. If not specified, size_data is used to determine background colors. If specified, the data is expected to be numeric. color_scale will determine how the values in this data map to data cell background colors. */
  colorData?: ChartData;
  /** The data that contains the treemap cell labels. */
  labels?: ChartData;
  /** The background color for header cells. Deprecated: Use header_color_style. */
  headerColor?: Color;
  /** The data the contains the treemap cells' parent labels. */
  parentLabels?: ChartData;
  /** The data that determines the size of each treemap data cell. This data is expected to be numeric. The cells corresponding to non-numeric or missing data will not be rendered. If color_data is not specified, this data is used to determine data cell background colors as well. */
  sizeData?: ChartData;
  /** The minimum possible data value. Cells with values less than this will have the same color as cells with this value. If not specified, defaults to the actual minimum value from color_data, or the minimum value from size_data if color_data is not specified. */
  minValue?: number;
  /** True to hide tooltips. */
  hideTooltips?: boolean;
  /** The color scale for data cells in the treemap chart. Data cells are assigned colors based on their color values. These color values come from color_data, or from size_data if color_data is not specified. Cells with color values less than or equal to min_value will have minValueColor as their background color. Cells with color values greater than or equal to max_value will have maxValueColor as their background color. Cells with color values between min_value and max_value will have background colors on a gradient between minValueColor and maxValueColor, the midpoint of the gradient being midValueColor. Cells with missing or non-numeric color values will have noDataColor as their background color. */
  colorScale?: TreemapChartColorScale;
  /** The number of data levels to show on the treemap chart. These levels are interactive and are shown with their labels. Defaults to 2 if not specified. */
  levels?: number;
  /** The text format for all labels on the chart. The link field is not supported. */
  textFormat?: TextFormat;
  /** The background color for header cells. If header_color is also set, this field takes precedence. */
  headerColorStyle?: ColorStyle;
  /** The number of additional data levels beyond the labeled levels to be shown on the treemap chart. These levels are not interactive and are shown without their labels. Defaults to 0 if not specified. */
  hintedLevels?: number;
}

export const TreemapChartSpec = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  maxValue: Schema.optional(Schema.Number),
  colorData: Schema.optional(ChartData),
  labels: Schema.optional(ChartData),
  headerColor: Schema.optional(Color),
  parentLabels: Schema.optional(ChartData),
  sizeData: Schema.optional(ChartData),
  minValue: Schema.optional(Schema.Number),
  hideTooltips: Schema.optional(Schema.Boolean),
  colorScale: Schema.optional(TreemapChartColorScale),
  levels: Schema.optional(Schema.Number),
  textFormat: Schema.optional(TextFormat),
  headerColorStyle: Schema.optional(ColorStyle),
  hintedLevels: Schema.optional(Schema.Number),
}).annotate({ identifier: "TreemapChartSpec" });

export interface ChartSpec {
  /** The name of the font to use by default for all chart text (e.g. title, axis labels, legend). If a font is specified for a specific part of the chart it will override this font name. */
  fontName?: string;
  /** A waterfall chart specification. */
  waterfallChart?: WaterfallChartSpec;
  /** A basic chart specification, can be one of many kinds of charts. See BasicChartType for the list of all charts this supports. */
  basicChart?: BasicChartSpec;
  /** The subtitle text format. Strikethrough, underline, and link are not supported. */
  subtitleTextFormat?: TextFormat;
  /** The background color of the entire chart. Not applicable to Org charts. If background_color is also set, this field takes precedence. */
  backgroundColorStyle?: ColorStyle;
  /** A histogram chart specification. */
  histogramChart?: HistogramChartSpec;
  /** The alternative text that describes the chart. This is often used for accessibility. */
  altText?: string;
  /** The background color of the entire chart. Not applicable to Org charts. Deprecated: Use background_color_style. */
  backgroundColor?: Color;
  /** The title text format. Strikethrough, underline, and link are not supported. */
  titleTextFormat?: TextFormat;
  /** The title text position. This field is optional. */
  titleTextPosition?: TextPosition;
  /** An org chart specification. */
  orgChart?: OrgChartSpec;
  /** A bubble chart specification. */
  bubbleChart?: BubbleChartSpec;
  /** A candlestick chart specification. */
  candlestickChart?: CandlestickChartSpec;
  /** The filters applied to the source data of the chart. Only supported for data source charts. */
  filterSpecs?: ReadonlyArray<FilterSpec>;
  /** The title of the chart. */
  title?: string;
  /** If present, the field contains data source chart specific properties. */
  dataSourceChartProperties?: DataSourceChartProperties;
  /** True to make a chart fill the entire space in which it's rendered with minimum padding. False to use the default padding. (Not applicable to Geo and Org charts.) */
  maximized?: boolean;
  /** The order to sort the chart data by. Only a single sort spec is supported. Only supported for data source charts. */
  sortSpecs?: ReadonlyArray<SortSpec>;
  /** A pie chart specification. */
  pieChart?: PieChartSpec;
  /** A scorecard chart specification. */
  scorecardChart?: ScorecardChartSpec;
  /** A treemap chart specification. */
  treemapChart?: TreemapChartSpec;
  /** The subtitle of the chart. */
  subtitle?: string;
  /** The subtitle text position. This field is optional. */
  subtitleTextPosition?: TextPosition;
  /** Determines how the charts will use hidden rows or columns. */
  hiddenDimensionStrategy?:
    | "CHART_HIDDEN_DIMENSION_STRATEGY_UNSPECIFIED"
    | "SKIP_HIDDEN_ROWS_AND_COLUMNS"
    | "SKIP_HIDDEN_ROWS"
    | "SKIP_HIDDEN_COLUMNS"
    | "SHOW_ALL"
    | (string & {});
}

export const ChartSpec = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fontName: Schema.optional(Schema.String),
  waterfallChart: Schema.optional(WaterfallChartSpec),
  basicChart: Schema.optional(BasicChartSpec),
  subtitleTextFormat: Schema.optional(TextFormat),
  backgroundColorStyle: Schema.optional(ColorStyle),
  histogramChart: Schema.optional(HistogramChartSpec),
  altText: Schema.optional(Schema.String),
  backgroundColor: Schema.optional(Color),
  titleTextFormat: Schema.optional(TextFormat),
  titleTextPosition: Schema.optional(TextPosition),
  orgChart: Schema.optional(OrgChartSpec),
  bubbleChart: Schema.optional(BubbleChartSpec),
  candlestickChart: Schema.optional(CandlestickChartSpec),
  filterSpecs: Schema.optional(Schema.Array(FilterSpec)),
  title: Schema.optional(Schema.String),
  dataSourceChartProperties: Schema.optional(DataSourceChartProperties),
  maximized: Schema.optional(Schema.Boolean),
  sortSpecs: Schema.optional(Schema.Array(SortSpec)),
  pieChart: Schema.optional(PieChartSpec),
  scorecardChart: Schema.optional(ScorecardChartSpec),
  treemapChart: Schema.optional(TreemapChartSpec),
  subtitle: Schema.optional(Schema.String),
  subtitleTextPosition: Schema.optional(TextPosition),
  hiddenDimensionStrategy: Schema.optional(Schema.String),
}).annotate({ identifier: "ChartSpec" });

export interface EmbeddedChart {
  /** The position of the chart. */
  position?: EmbeddedObjectPosition;
  /** The border of the chart. */
  border?: EmbeddedObjectBorder;
  /** The ID of the chart. */
  chartId?: number;
  /** The specification of the chart. */
  spec?: ChartSpec;
}

export const EmbeddedChart = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  position: Schema.optional(EmbeddedObjectPosition),
  border: Schema.optional(EmbeddedObjectBorder),
  chartId: Schema.optional(Schema.Number),
  spec: Schema.optional(ChartSpec),
}).annotate({ identifier: "EmbeddedChart" });

export interface AddChartRequest {
  /** The chart that should be added to the spreadsheet, including the position where it should be placed. The chartId field is optional; if one is not set, an id will be randomly generated. (It is an error to specify the ID of an embedded object that already exists.) */
  chart?: EmbeddedChart;
}

export const AddChartRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  chart: Schema.optional(EmbeddedChart),
}).annotate({ identifier: "AddChartRequest" });

export interface TextToColumnsRequest {
  /** The source data range. This must span exactly one column. */
  source?: GridRange;
  /** The delimiter to use. Used only if delimiterType is CUSTOM. */
  delimiter?: string;
  /** The delimiter type to use. */
  delimiterType?:
    | "DELIMITER_TYPE_UNSPECIFIED"
    | "COMMA"
    | "SEMICOLON"
    | "PERIOD"
    | "SPACE"
    | "CUSTOM"
    | "AUTODETECT"
    | (string & {});
}

export const TextToColumnsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  source: Schema.optional(GridRange),
  delimiter: Schema.optional(Schema.String),
  delimiterType: Schema.optional(Schema.String),
}).annotate({ identifier: "TextToColumnsRequest" });

export interface Editors {
  /** The email addresses of users with edit access to the protected range. */
  users?: ReadonlyArray<string>;
  /** The email addresses of groups with edit access to the protected range. */
  groups?: ReadonlyArray<string>;
  /** True if anyone in the document's domain has edit access to the protected range. Domain protection is only supported on documents within a domain. */
  domainUsersCanEdit?: boolean;
}

export const Editors = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  users: Schema.optional(Schema.Array(Schema.String)),
  groups: Schema.optional(Schema.Array(Schema.String)),
  domainUsersCanEdit: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "Editors" });

export interface ProtectedRange {
  /** True if the user who requested this protected range can edit the protected area. This field is read-only. */
  requestingUserCanEdit?: boolean;
  /** The description of this protected range. */
  description?: string;
  /** The named range this protected range is backed by, if any. When writing, only one of range or named_range_id or table_id may be set. */
  namedRangeId?: string;
  /** True if this protected range will show a warning when editing. Warning-based protection means that every user can edit data in the protected range, except editing will prompt a warning asking the user to confirm the edit. When writing: if this field is true, then editors are ignored. Additionally, if this field is changed from true to false and the `editors` field is not set (nor included in the field mask), then the editors will be set to all the editors in the document. */
  warningOnly?: boolean;
  /** The list of unprotected ranges within a protected sheet. Unprotected ranges are only supported on protected sheets. */
  unprotectedRanges?: ReadonlyArray<GridRange>;
  /** The ID of the protected range. This field is read-only. */
  protectedRangeId?: number;
  /** The range that is being protected. The range may be fully unbounded, in which case this is considered a protected sheet. When writing, only one of range or named_range_id or table_id may be set. */
  range?: GridRange;
  /** The table this protected range is backed by, if any. When writing, only one of range or named_range_id or table_id may be set. */
  tableId?: string;
  /** The users and groups with edit access to the protected range. This field is only visible to users with edit access to the protected range and the document. Editors are not supported with warning_only protection. */
  editors?: Editors;
}

export const ProtectedRange = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  requestingUserCanEdit: Schema.optional(Schema.Boolean),
  description: Schema.optional(Schema.String),
  namedRangeId: Schema.optional(Schema.String),
  warningOnly: Schema.optional(Schema.Boolean),
  unprotectedRanges: Schema.optional(Schema.Array(GridRange)),
  protectedRangeId: Schema.optional(Schema.Number),
  range: Schema.optional(GridRange),
  tableId: Schema.optional(Schema.String),
  editors: Schema.optional(Editors),
}).annotate({ identifier: "ProtectedRange" });

export interface UpdateProtectedRangeRequest {
  /** The protected range to update with the new properties. */
  protectedRange?: ProtectedRange;
  /** The fields that should be updated. At least one field must be specified. The root `protectedRange` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. */
  fields?: string;
}

export const UpdateProtectedRangeRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    protectedRange: Schema.optional(ProtectedRange),
    fields: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpdateProtectedRangeRequest" });

export interface UpdateDimensionGroupRequest {
  /** The group whose state should be updated. The range and depth of the group should specify a valid group on the sheet, and all other fields updated. */
  dimensionGroup?: DimensionGroup;
  /** The fields that should be updated. At least one field must be specified. The root `dimensionGroup` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. */
  fields?: string;
}

export const UpdateDimensionGroupRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dimensionGroup: Schema.optional(DimensionGroup),
    fields: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpdateDimensionGroupRequest" });

export interface UpdateEmbeddedObjectBorderRequest {
  /** The fields that should be updated. At least one field must be specified. The root `border` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. */
  fields?: string;
  /** The ID of the embedded object to update. */
  objectId?: number;
  /** The border that applies to the embedded object. */
  border?: EmbeddedObjectBorder;
}

export const UpdateEmbeddedObjectBorderRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fields: Schema.optional(Schema.String),
    objectId: Schema.optional(Schema.Number),
    border: Schema.optional(EmbeddedObjectBorder),
  }).annotate({ identifier: "UpdateEmbeddedObjectBorderRequest" });

export interface CutPasteRequest {
  /** The source data to cut. */
  source?: GridRange;
  /** The top-left coordinate where the data should be pasted. */
  destination?: GridCoordinate;
  /** What kind of data to paste. All the source data will be cut, regardless of what is pasted. */
  pasteType?:
    | "PASTE_NORMAL"
    | "PASTE_VALUES"
    | "PASTE_FORMAT"
    | "PASTE_NO_BORDERS"
    | "PASTE_FORMULA"
    | "PASTE_DATA_VALIDATION"
    | "PASTE_CONDITIONAL_FORMATTING"
    | (string & {});
}

export const CutPasteRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  source: Schema.optional(GridRange),
  destination: Schema.optional(GridCoordinate),
  pasteType: Schema.optional(Schema.String),
}).annotate({ identifier: "CutPasteRequest" });

export interface DuplicateSheetRequest {
  /** The sheet to duplicate. If the source sheet is of DATA_SOURCE type, its backing DataSource is also duplicated and associated with the new copy of the sheet. No data execution is triggered, the grid data of this sheet is also copied over but only available after the batch request completes. */
  sourceSheetId?: number;
  /** The name of the new sheet. If empty, a new name is chosen for you. */
  newSheetName?: string;
  /** The zero-based index where the new sheet should be inserted. The index of all sheets after this are incremented. */
  insertSheetIndex?: number;
  /** If set, the ID of the new sheet. If not set, an ID is chosen. If set, the ID must not conflict with any existing sheet ID. If set, it must be non-negative. */
  newSheetId?: number;
}

export const DuplicateSheetRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sourceSheetId: Schema.optional(Schema.Number),
  newSheetName: Schema.optional(Schema.String),
  insertSheetIndex: Schema.optional(Schema.Number),
  newSheetId: Schema.optional(Schema.Number),
}).annotate({ identifier: "DuplicateSheetRequest" });

export interface SourceAndDestination {
  /** The dimension that data should be filled into. */
  dimension?: "DIMENSION_UNSPECIFIED" | "ROWS" | "COLUMNS" | (string & {});
  /** The location of the data to use as the source of the autofill. */
  source?: GridRange;
  /** The number of rows or columns that data should be filled into. Positive numbers expand beyond the last row or last column of the source. Negative numbers expand before the first row or first column of the source. */
  fillLength?: number;
}

export const SourceAndDestination = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dimension: Schema.optional(Schema.String),
  source: Schema.optional(GridRange),
  fillLength: Schema.optional(Schema.Number),
}).annotate({ identifier: "SourceAndDestination" });

export interface AutoFillRequest {
  /** The range to autofill. This will examine the range and detect the location that has data and automatically fill that data in to the rest of the range. */
  range?: GridRange;
  /** The source and destination areas to autofill. This explicitly lists the source of the autofill and where to extend that data. */
  sourceAndDestination?: SourceAndDestination;
  /** True if we should generate data with the "alternate" series. This differs based on the type and amount of source data. */
  useAlternateSeries?: boolean;
}

export const AutoFillRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  range: Schema.optional(GridRange),
  sourceAndDestination: Schema.optional(SourceAndDestination),
  useAlternateSeries: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "AutoFillRequest" });

export interface DeleteDimensionGroupRequest {
  /** The range of the group to be deleted. */
  range?: DimensionRange;
}

export const DeleteDimensionGroupRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    range: Schema.optional(DimensionRange),
  }).annotate({ identifier: "DeleteDimensionGroupRequest" });

export interface FilterView {
  /** The named range this filter view is backed by, if any. When writing, only one of range, named_range_id, or table_id may be set. */
  namedRangeId?: string;
  /** The table this filter view is backed by, if any. When writing, only one of range, named_range_id, or table_id may be set. */
  tableId?: string;
  /** The sort order per column. Later specifications are used when values are equal in the earlier specifications. */
  sortSpecs?: ReadonlyArray<SortSpec>;
  /** The criteria for showing/hiding values per column. The map's key is the column index, and the value is the criteria for that column. This field is deprecated in favor of filter_specs. */
  criteria?: Record<string, FilterCriteria>;
  /** The name of the filter view. */
  title?: string;
  /** The range this filter view covers. When writing, only one of range, named_range_id, or table_id may be set. */
  range?: GridRange;
  /** The filter criteria for showing or hiding values per column. Both criteria and filter_specs are populated in responses. If both fields are specified in an update request, this field takes precedence. */
  filterSpecs?: ReadonlyArray<FilterSpec>;
  /** The ID of the filter view. */
  filterViewId?: number;
}

export const FilterView = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  namedRangeId: Schema.optional(Schema.String),
  tableId: Schema.optional(Schema.String),
  sortSpecs: Schema.optional(Schema.Array(SortSpec)),
  criteria: Schema.optional(Schema.Record(Schema.String, FilterCriteria)),
  title: Schema.optional(Schema.String),
  range: Schema.optional(GridRange),
  filterSpecs: Schema.optional(Schema.Array(FilterSpec)),
  filterViewId: Schema.optional(Schema.Number),
}).annotate({ identifier: "FilterView" });

export interface UpdateFilterViewRequest {
  /** The new properties of the filter view. */
  filter?: FilterView;
  /** The fields that should be updated. At least one field must be specified. The root `filter` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. */
  fields?: string;
}

export const UpdateFilterViewRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(FilterView),
    fields: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpdateFilterViewRequest" });

export interface CopyPasteRequest {
  /** The location to paste to. If the range covers a span that's a multiple of the source's height or width, then the data will be repeated to fill in the destination range. If the range is smaller than the source range, the entire source data will still be copied (beyond the end of the destination range). */
  destination?: GridRange;
  /** What kind of data to paste. */
  pasteType?:
    | "PASTE_NORMAL"
    | "PASTE_VALUES"
    | "PASTE_FORMAT"
    | "PASTE_NO_BORDERS"
    | "PASTE_FORMULA"
    | "PASTE_DATA_VALIDATION"
    | "PASTE_CONDITIONAL_FORMATTING"
    | (string & {});
  /** How that data should be oriented when pasting. */
  pasteOrientation?: "NORMAL" | "TRANSPOSE" | (string & {});
  /** The source range to copy. */
  source?: GridRange;
}

export const CopyPasteRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  destination: Schema.optional(GridRange),
  pasteType: Schema.optional(Schema.String),
  pasteOrientation: Schema.optional(Schema.String),
  source: Schema.optional(GridRange),
}).annotate({ identifier: "CopyPasteRequest" });

export interface UpdateConditionalFormatRuleRequest {
  /** The zero-based new index the rule should end up at. */
  newIndex?: number;
  /** The rule that should replace the rule at the given index. */
  rule?: ConditionalFormatRule;
  /** The zero-based index of the rule that should be replaced or moved. */
  index?: number;
  /** The sheet of the rule to move. Required if new_index is set, unused otherwise. */
  sheetId?: number;
}

export const UpdateConditionalFormatRuleRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    newIndex: Schema.optional(Schema.Number),
    rule: Schema.optional(ConditionalFormatRule),
    index: Schema.optional(Schema.Number),
    sheetId: Schema.optional(Schema.Number),
  }).annotate({ identifier: "UpdateConditionalFormatRuleRequest" });

export interface ThemeColorPair {
  /** The type of the spreadsheet theme color. */
  colorType?:
    | "THEME_COLOR_TYPE_UNSPECIFIED"
    | "TEXT"
    | "BACKGROUND"
    | "ACCENT1"
    | "ACCENT2"
    | "ACCENT3"
    | "ACCENT4"
    | "ACCENT5"
    | "ACCENT6"
    | "LINK"
    | (string & {});
  /** The concrete color corresponding to the theme color type. */
  color?: ColorStyle;
}

export const ThemeColorPair = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  colorType: Schema.optional(Schema.String),
  color: Schema.optional(ColorStyle),
}).annotate({ identifier: "ThemeColorPair" });

export interface SpreadsheetTheme {
  /** Name of the primary font family. */
  primaryFontFamily?: string;
  /** The spreadsheet theme color pairs. To update you must provide all theme color pairs. */
  themeColors?: ReadonlyArray<ThemeColorPair>;
}

export const SpreadsheetTheme = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  primaryFontFamily: Schema.optional(Schema.String),
  themeColors: Schema.optional(Schema.Array(ThemeColorPair)),
}).annotate({ identifier: "SpreadsheetTheme" });

export interface IterativeCalculationSettings {
  /** When iterative calculation is enabled and successive results differ by less than this threshold value, the calculation rounds stop. */
  convergenceThreshold?: number;
  /** When iterative calculation is enabled, the maximum number of calculation rounds to perform. */
  maxIterations?: number;
}

export const IterativeCalculationSettings =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    convergenceThreshold: Schema.optional(Schema.Number),
    maxIterations: Schema.optional(Schema.Number),
  }).annotate({ identifier: "IterativeCalculationSettings" });

export interface SpreadsheetProperties {
  /** Theme applied to the spreadsheet. */
  spreadsheetTheme?: SpreadsheetTheme;
  /** The time zone of the spreadsheet, in CLDR format such as `America/New_York`. If the time zone isn't recognized, this may be a custom time zone such as `GMT-07:00`. */
  timeZone?: string;
  /** Determines whether and how circular references are resolved with iterative calculation. Absence of this field means that circular references result in calculation errors. */
  iterativeCalculationSettings?: IterativeCalculationSettings;
  /** The locale of the spreadsheet in one of the following formats: * an ISO 639-1 language code such as `en` * an ISO 639-2 language code such as `fil`, if no 639-1 code exists * a combination of the ISO language code and country code, such as `en_US` Note: when updating this field, not all locales/languages are supported. */
  locale?: string;
  /** The default format of all cells in the spreadsheet. CellData.effectiveFormat will not be set if the cell's format is equal to this default format. This field is read-only. */
  defaultFormat?: CellFormat;
  /** The amount of time to wait before volatile functions are recalculated. */
  autoRecalc?:
    | "RECALCULATION_INTERVAL_UNSPECIFIED"
    | "ON_CHANGE"
    | "MINUTE"
    | "HOUR"
    | (string & {});
  /** Whether to allow external URL access for image and import functions. Read only when true. When false, you can set to true. This value will be bypassed and always return true if the admin has enabled the [allowlisting feature](https://support.google.com/a?p=url_allowlist). */
  importFunctionsExternalUrlAccessAllowed?: boolean;
  /** The title of the spreadsheet. */
  title?: string;
}

export const SpreadsheetProperties = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  spreadsheetTheme: Schema.optional(SpreadsheetTheme),
  timeZone: Schema.optional(Schema.String),
  iterativeCalculationSettings: Schema.optional(IterativeCalculationSettings),
  locale: Schema.optional(Schema.String),
  defaultFormat: Schema.optional(CellFormat),
  autoRecalc: Schema.optional(Schema.String),
  importFunctionsExternalUrlAccessAllowed: Schema.optional(Schema.Boolean),
  title: Schema.optional(Schema.String),
}).annotate({ identifier: "SpreadsheetProperties" });

export interface UpdateSpreadsheetPropertiesRequest {
  /** The fields that should be updated. At least one field must be specified. The root 'properties' is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. */
  fields?: string;
  /** The properties to update. */
  properties?: SpreadsheetProperties;
}

export const UpdateSpreadsheetPropertiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fields: Schema.optional(Schema.String),
    properties: Schema.optional(SpreadsheetProperties),
  }).annotate({ identifier: "UpdateSpreadsheetPropertiesRequest" });

export interface DeleteTableRequest {
  /** The ID of the table to delete. */
  tableId?: string;
}

export const DeleteTableRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tableId: Schema.optional(Schema.String),
}).annotate({ identifier: "DeleteTableRequest" });

export interface DeleteRangeRequest {
  /** The dimension from which deleted cells will be replaced with. If ROWS, existing cells will be shifted upward to replace the deleted cells. If COLUMNS, existing cells will be shifted left to replace the deleted cells. */
  shiftDimension?: "DIMENSION_UNSPECIFIED" | "ROWS" | "COLUMNS" | (string & {});
  /** The range of cells to delete. */
  range?: GridRange;
}

export const DeleteRangeRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  shiftDimension: Schema.optional(Schema.String),
  range: Schema.optional(GridRange),
}).annotate({ identifier: "DeleteRangeRequest" });

export interface DataSourceObjectReference {
  /** References to a cell containing DataSourceFormula. */
  dataSourceFormulaCell?: GridCoordinate;
  /** References to a data source chart. */
  chartId?: number;
  /** References to a data source PivotTable anchored at the cell. */
  dataSourcePivotTableAnchorCell?: GridCoordinate;
  /** References to a DATA_SOURCE sheet. */
  sheetId?: string;
  /** References to a DataSourceTable anchored at the cell. */
  dataSourceTableAnchorCell?: GridCoordinate;
}

export const DataSourceObjectReference =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataSourceFormulaCell: Schema.optional(GridCoordinate),
    chartId: Schema.optional(Schema.Number),
    dataSourcePivotTableAnchorCell: Schema.optional(GridCoordinate),
    sheetId: Schema.optional(Schema.String),
    dataSourceTableAnchorCell: Schema.optional(GridCoordinate),
  }).annotate({ identifier: "DataSourceObjectReference" });

export interface DataSourceObjectReferences {
  /** The references. */
  references?: ReadonlyArray<DataSourceObjectReference>;
}

export const DataSourceObjectReferences =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    references: Schema.optional(Schema.Array(DataSourceObjectReference)),
  }).annotate({ identifier: "DataSourceObjectReferences" });

export interface RefreshDataSourceRequest {
  /** Refreshes all existing data source objects in the spreadsheet. */
  isAll?: boolean;
  /** References to data source objects to refresh. */
  references?: DataSourceObjectReferences;
  /** Reference to a DataSource. If specified, refreshes all associated data source objects for the data source. */
  dataSourceId?: string;
  /** Refreshes the data source objects regardless of the current state. If not set and a referenced data source object was in error state, the refresh will fail immediately. */
  force?: boolean;
}

export const RefreshDataSourceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isAll: Schema.optional(Schema.Boolean),
    references: Schema.optional(DataSourceObjectReferences),
    dataSourceId: Schema.optional(Schema.String),
    force: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "RefreshDataSourceRequest" });

export interface AddProtectedRangeRequest {
  /** The protected range to be added. The protectedRangeId field is optional; if one is not set, an id will be randomly generated. (It is an error to specify the ID of a range that already exists.) */
  protectedRange?: ProtectedRange;
}

export const AddProtectedRangeRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    protectedRange: Schema.optional(ProtectedRange),
  }).annotate({ identifier: "AddProtectedRangeRequest" });

export interface NamedRange {
  /** The ID of the named range. */
  namedRangeId?: string;
  /** The name of the named range. */
  name?: string;
  /** The range this represents. */
  range?: GridRange;
}

export const NamedRange = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  namedRangeId: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  range: Schema.optional(GridRange),
}).annotate({ identifier: "NamedRange" });

export interface AddNamedRangeRequest {
  /** The named range to add. The namedRangeId field is optional; if one is not set, an id will be randomly generated. (It is an error to specify the ID of a range that already exists.) */
  namedRange?: NamedRange;
}

export const AddNamedRangeRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  namedRange: Schema.optional(NamedRange),
}).annotate({ identifier: "AddNamedRangeRequest" });

export interface UnmergeCellsRequest {
  /** The range within which all cells should be unmerged. If the range spans multiple merges, all will be unmerged. The range must not partially span any merge. */
  range?: GridRange;
}

export const UnmergeCellsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  range: Schema.optional(GridRange),
}).annotate({ identifier: "UnmergeCellsRequest" });

export interface FindReplaceRequest {
  /** True if the search is case sensitive. */
  matchCase?: boolean;
  /** The value to search. */
  find?: string;
  /** The sheet to find/replace over. */
  sheetId?: number;
  /** True if the find value should match the entire cell. */
  matchEntireCell?: boolean;
  /** True if the search should include cells with formulas. False to skip cells with formulas. */
  includeFormulas?: boolean;
  /** True if the find value is a regex. The regular expression and replacement should follow Java regex rules at https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html. The replacement string is allowed to refer to capturing groups. For example, if one cell has the contents `"Google Sheets"` and another has `"Google Docs"`, then searching for `"o.* (.*)"` with a replacement of `"$1 Rocks"` would change the contents of the cells to `"GSheets Rocks"` and `"GDocs Rocks"` respectively. */
  searchByRegex?: boolean;
  /** The value to use as the replacement. */
  replacement?: string;
  /** True to find/replace over all sheets. */
  allSheets?: boolean;
  /** The range to find/replace over. */
  range?: GridRange;
}

export const FindReplaceRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  matchCase: Schema.optional(Schema.Boolean),
  find: Schema.optional(Schema.String),
  sheetId: Schema.optional(Schema.Number),
  matchEntireCell: Schema.optional(Schema.Boolean),
  includeFormulas: Schema.optional(Schema.Boolean),
  searchByRegex: Schema.optional(Schema.Boolean),
  replacement: Schema.optional(Schema.String),
  allSheets: Schema.optional(Schema.Boolean),
  range: Schema.optional(GridRange),
}).annotate({ identifier: "FindReplaceRequest" });

export interface SetDataValidationRequest {
  /** The range the data validation rule should apply to. */
  range?: GridRange;
  /** The data validation rule to set on each cell in the range, or empty to clear the data validation in the range. */
  rule?: DataValidationRule;
  /** Optional. If true, the data validation rule will be applied to the filtered rows as well. */
  filteredRowsIncluded?: boolean;
}

export const SetDataValidationRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    range: Schema.optional(GridRange),
    rule: Schema.optional(DataValidationRule),
    filteredRowsIncluded: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SetDataValidationRequest" });

export interface DeleteDataSourceRequest {
  /** The ID of the data source to delete. */
  dataSourceId?: string;
}

export const DeleteDataSourceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataSourceId: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeleteDataSourceRequest" });

export interface UpdateBordersRequest {
  /** The border to put at the bottom of the range. */
  bottom?: Border;
  /** The horizontal border to put within the range. */
  innerHorizontal?: Border;
  /** The border to put at the right of the range. */
  right?: Border;
  /** The border to put at the top of the range. */
  top?: Border;
  /** The border to put at the left of the range. */
  left?: Border;
  /** The range whose borders should be updated. */
  range?: GridRange;
  /** The vertical border to put within the range. */
  innerVertical?: Border;
}

export const UpdateBordersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  bottom: Schema.optional(Border),
  innerHorizontal: Schema.optional(Border),
  right: Schema.optional(Border),
  top: Schema.optional(Border),
  left: Schema.optional(Border),
  range: Schema.optional(GridRange),
  innerVertical: Schema.optional(Border),
}).annotate({ identifier: "UpdateBordersRequest" });

export interface DeleteBandingRequest {
  /** The ID of the banded range to delete. */
  bandedRangeId?: number;
}

export const DeleteBandingRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  bandedRangeId: Schema.optional(Schema.Number),
}).annotate({ identifier: "DeleteBandingRequest" });

export interface AddFilterViewRequest {
  /** The filter to add. The filterViewId field is optional. If one is not set, an ID will be randomly generated. (It is an error to specify the ID of a filter that already exists.) */
  filter?: FilterView;
}

export const AddFilterViewRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  filter: Schema.optional(FilterView),
}).annotate({ identifier: "AddFilterViewRequest" });

export interface MergeCellsRequest {
  /** The range of cells to merge. */
  range?: GridRange;
  /** How the cells should be merged. */
  mergeType?: "MERGE_ALL" | "MERGE_COLUMNS" | "MERGE_ROWS" | (string & {});
}

export const MergeCellsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  range: Schema.optional(GridRange),
  mergeType: Schema.optional(Schema.String),
}).annotate({ identifier: "MergeCellsRequest" });

export interface UpdateCellsRequest {
  /** The coordinate to start writing data at. Any number of rows and columns (including a different number of columns per row) may be written. */
  start?: GridCoordinate;
  /** The data to write. */
  rows?: ReadonlyArray<RowData>;
  /** The range to write data to. If the data in rows does not cover the entire requested range, the fields matching those set in fields will be cleared. */
  range?: GridRange;
  /** The fields of CellData that should be updated. At least one field must be specified. The root is the CellData; 'row.values.' should not be specified. A single `"*"` can be used as short-hand for listing every field. */
  fields?: string;
}

export const UpdateCellsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  start: Schema.optional(GridCoordinate),
  rows: Schema.optional(Schema.Array(RowData)),
  range: Schema.optional(GridRange),
  fields: Schema.optional(Schema.String),
}).annotate({ identifier: "UpdateCellsRequest" });

export interface DuplicateFilterViewRequest {
  /** The ID of the filter being duplicated. */
  filterId?: number;
}

export const DuplicateFilterViewRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filterId: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DuplicateFilterViewRequest" });

export interface AddBandingRequest {
  /** The banded range to add. The bandedRangeId field is optional; if one is not set, an id will be randomly generated. (It is an error to specify the ID of a range that already exists.) */
  bandedRange?: BandedRange;
}

export const AddBandingRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  bandedRange: Schema.optional(BandedRange),
}).annotate({ identifier: "AddBandingRequest" });

export interface RepeatCellRequest {
  /** The range to repeat the cell in. */
  range?: GridRange;
  /** The fields that should be updated. At least one field must be specified. The root `cell` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. */
  fields?: string;
  /** The data to write. */
  cell?: CellData;
}

export const RepeatCellRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  range: Schema.optional(GridRange),
  fields: Schema.optional(Schema.String),
  cell: Schema.optional(CellData),
}).annotate({ identifier: "RepeatCellRequest" });

export interface MoveDimensionRequest {
  /** The source dimensions to move. */
  source?: DimensionRange;
  /** The zero-based start index of where to move the source data to, based on the coordinates *before* the source data is removed from the grid. Existing data will be shifted down or right (depending on the dimension) to make room for the moved dimensions. The source dimensions are removed from the grid, so the the data may end up in a different index than specified. For example, given `A1..A5` of `0, 1, 2, 3, 4` and wanting to move `"1"` and `"2"` to between `"3"` and `"4"`, the source would be `ROWS [1..3)`,and the destination index would be `"4"` (the zero-based index of row 5). The end result would be `A1..A5` of `0, 3, 1, 2, 4`. */
  destinationIndex?: number;
}

export const MoveDimensionRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  source: Schema.optional(DimensionRange),
  destinationIndex: Schema.optional(Schema.Number),
}).annotate({ identifier: "MoveDimensionRequest" });

export interface DeleteDimensionRequest {
  /** The dimensions to delete from the sheet. */
  range?: DimensionRange;
}

export const DeleteDimensionRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    range: Schema.optional(DimensionRange),
  },
).annotate({ identifier: "DeleteDimensionRequest" });

export interface CancelDataSourceRefreshRequest {
  /** References to data source objects whose refreshes are to be cancelled. */
  references?: DataSourceObjectReferences;
  /** Reference to a DataSource. If specified, cancels all associated data source object refreshes for this data source. */
  dataSourceId?: string;
  /** Cancels all existing data source object refreshes for all data sources in the spreadsheet. */
  isAll?: boolean;
}

export const CancelDataSourceRefreshRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    references: Schema.optional(DataSourceObjectReferences),
    dataSourceId: Schema.optional(Schema.String),
    isAll: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "CancelDataSourceRefreshRequest" });

export interface AddSheetRequest {
  /** The properties the new sheet should have. All properties are optional. The sheetId field is optional; if one is not set, an id will be randomly generated. (It is an error to specify the ID of a sheet that already exists.) */
  properties?: SheetProperties;
}

export const AddSheetRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(SheetProperties),
}).annotate({ identifier: "AddSheetRequest" });

export interface UpdateDataSourceRequest {
  /** The fields that should be updated. At least one field must be specified. The root `dataSource` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. */
  fields?: string;
  /** The data source to update. */
  dataSource?: DataSource;
}

export const UpdateDataSourceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fields: Schema.optional(Schema.String),
    dataSource: Schema.optional(DataSource),
  }).annotate({ identifier: "UpdateDataSourceRequest" });

export interface DeleteEmbeddedObjectRequest {
  /** The ID of the embedded object to delete. */
  objectId?: number;
}

export const DeleteEmbeddedObjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    objectId: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DeleteEmbeddedObjectRequest" });

export interface DeleteFilterViewRequest {
  /** The ID of the filter to delete. */
  filterId?: number;
}

export const DeleteFilterViewRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filterId: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DeleteFilterViewRequest" });

export interface AddDimensionGroupRequest {
  /** The range over which to create a group. */
  range?: DimensionRange;
}

export const AddDimensionGroupRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    range: Schema.optional(DimensionRange),
  }).annotate({ identifier: "AddDimensionGroupRequest" });

export interface InsertDimensionRequest {
  /** The dimensions to insert. Both the start and end indexes must be bounded. */
  range?: DimensionRange;
  /** Whether dimension properties should be extended from the dimensions before or after the newly inserted dimensions. True to inherit from the dimensions before (in which case the start index must be greater than 0), and false to inherit from the dimensions after. For example, if row index 0 has red background and row index 1 has a green background, then inserting 2 rows at index 1 can inherit either the green or red background. If `inheritFromBefore` is true, the two new rows will be red (because the row before the insertion point was red), whereas if `inheritFromBefore` is false, the two new rows will be green (because the row after the insertion point was green). */
  inheritFromBefore?: boolean;
}

export const InsertDimensionRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    range: Schema.optional(DimensionRange),
    inheritFromBefore: Schema.optional(Schema.Boolean),
  },
).annotate({ identifier: "InsertDimensionRequest" });

export interface Slicer {
  /** The specification of the slicer. */
  spec?: SlicerSpec;
  /** The position of the slicer. Note that slicer can be positioned only on existing sheet. Also, width and height of slicer can be automatically adjusted to keep it within permitted limits. */
  position?: EmbeddedObjectPosition;
  /** The ID of the slicer. */
  slicerId?: number;
}

export const Slicer = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  spec: Schema.optional(SlicerSpec),
  position: Schema.optional(EmbeddedObjectPosition),
  slicerId: Schema.optional(Schema.Number),
}).annotate({ identifier: "Slicer" });

export interface AddSlicerRequest {
  /** The slicer that should be added to the spreadsheet, including the position where it should be placed. The slicerId field is optional; if one is not set, an id will be randomly generated. (It is an error to specify the ID of a slicer that already exists.) */
  slicer?: Slicer;
}

export const AddSlicerRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  slicer: Schema.optional(Slicer),
}).annotate({ identifier: "AddSlicerRequest" });

export interface DeleteConditionalFormatRuleRequest {
  /** The zero-based index of the rule to be deleted. */
  index?: number;
  /** The sheet the rule is being deleted from. */
  sheetId?: number;
}

export const DeleteConditionalFormatRuleRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    index: Schema.optional(Schema.Number),
    sheetId: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DeleteConditionalFormatRuleRequest" });

export interface UpdateNamedRangeRequest {
  /** The named range to update with the new properties. */
  namedRange?: NamedRange;
  /** The fields that should be updated. At least one field must be specified. The root `namedRange` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. */
  fields?: string;
}

export const UpdateNamedRangeRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    namedRange: Schema.optional(NamedRange),
    fields: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpdateNamedRangeRequest" });

export interface UpdateChartSpecRequest {
  /** The ID of the chart to update. */
  chartId?: number;
  /** The specification to apply to the chart. */
  spec?: ChartSpec;
}

export const UpdateChartSpecRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    chartId: Schema.optional(Schema.Number),
    spec: Schema.optional(ChartSpec),
  },
).annotate({ identifier: "UpdateChartSpecRequest" });

export interface AppendDimensionRequest {
  /** The sheet to append rows or columns to. */
  sheetId?: number;
  /** Whether rows or columns should be appended. */
  dimension?: "DIMENSION_UNSPECIFIED" | "ROWS" | "COLUMNS" | (string & {});
  /** The number of rows or columns to append. */
  length?: number;
}

export const AppendDimensionRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    sheetId: Schema.optional(Schema.Number),
    dimension: Schema.optional(Schema.String),
    length: Schema.optional(Schema.Number),
  },
).annotate({ identifier: "AppendDimensionRequest" });

export interface AddTableRequest {
  /** Required. The table to add. */
  table?: Table;
}

export const AddTableRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  table: Schema.optional(Table),
}).annotate({ identifier: "AddTableRequest" });

export interface Request {
  /** Updates an embedded object's (e.g. chart, image) position. */
  updateEmbeddedObjectPosition?: UpdateEmbeddedObjectPositionRequest;
  /** Removes rows containing duplicate values in specified columns of a cell range. */
  deleteDuplicates?: DeleteDuplicatesRequest;
  /** Trims cells of whitespace (such as spaces, tabs, or new lines). */
  trimWhitespace?: TrimWhitespaceRequest;
  /** Updates a sheet's properties. */
  updateSheetProperties?: UpdateSheetPropertiesRequest;
  /** Updates dimensions' properties. */
  updateDimensionProperties?: UpdateDimensionPropertiesRequest;
  /** Pastes data (HTML or delimited) into a sheet. */
  pasteData?: PasteDataRequest;
  /** Updates a banded range */
  updateBanding?: UpdateBandingRequest;
  /** Updates a table. */
  updateTable?: UpdateTableRequest;
  /** Inserts new cells in a sheet, shifting the existing cells. */
  insertRange?: InsertRangeRequest;
  /** Deletes a sheet. */
  deleteSheet?: DeleteSheetRequest;
  /** Adds a new conditional format rule. */
  addConditionalFormatRule?: AddConditionalFormatRuleRequest;
  /** Appends cells after the last row with data in a sheet. */
  appendCells?: AppendCellsRequest;
  /** Deletes a protected range. */
  deleteProtectedRange?: DeleteProtectedRangeRequest;
  /** Automatically resizes one or more dimensions based on the contents of the cells in that dimension. */
  autoResizeDimensions?: AutoResizeDimensionsRequest;
  /** Deletes a named range. */
  deleteNamedRange?: DeleteNamedRangeRequest;
  /** Adds a data source. */
  addDataSource?: AddDataSourceRequest;
  /** Updates a slicer's specifications. */
  updateSlicerSpec?: UpdateSlicerSpecRequest;
  /** Sorts data in a range. */
  sortRange?: SortRangeRequest;
  /** Randomizes the order of the rows in a range. */
  randomizeRange?: RandomizeRangeRequest;
  /** Sets the basic filter on a sheet. */
  setBasicFilter?: SetBasicFilterRequest;
  /** Clears the basic filter on a sheet. */
  clearBasicFilter?: ClearBasicFilterRequest;
  /** Deletes developer metadata */
  deleteDeveloperMetadata?: DeleteDeveloperMetadataRequest;
  /** Updates an existing developer metadata entry */
  updateDeveloperMetadata?: UpdateDeveloperMetadataRequest;
  /** Adds a chart. */
  addChart?: AddChartRequest;
  /** Converts a column of text into many columns of text. */
  textToColumns?: TextToColumnsRequest;
  /** Updates a protected range. */
  updateProtectedRange?: UpdateProtectedRangeRequest;
  /** Updates the state of the specified group. */
  updateDimensionGroup?: UpdateDimensionGroupRequest;
  /** Updates an embedded object's border. */
  updateEmbeddedObjectBorder?: UpdateEmbeddedObjectBorderRequest;
  /** Cuts data from one area and pastes it to another. */
  cutPaste?: CutPasteRequest;
  /** Duplicates a sheet. */
  duplicateSheet?: DuplicateSheetRequest;
  /** Automatically fills in more data based on existing data. */
  autoFill?: AutoFillRequest;
  /** Deletes a group over the specified range. */
  deleteDimensionGroup?: DeleteDimensionGroupRequest;
  /** Updates the properties of a filter view. */
  updateFilterView?: UpdateFilterViewRequest;
  /** Copies data from one area and pastes it to another. */
  copyPaste?: CopyPasteRequest;
  /** Updates an existing conditional format rule. */
  updateConditionalFormatRule?: UpdateConditionalFormatRuleRequest;
  /** Updates the spreadsheet's properties. */
  updateSpreadsheetProperties?: UpdateSpreadsheetPropertiesRequest;
  /** A request for deleting a table. */
  deleteTable?: DeleteTableRequest;
  /** Deletes a range of cells from a sheet, shifting the remaining cells. */
  deleteRange?: DeleteRangeRequest;
  /** Refreshes one or multiple data sources and associated dbobjects. */
  refreshDataSource?: RefreshDataSourceRequest;
  /** Adds a protected range. */
  addProtectedRange?: AddProtectedRangeRequest;
  /** Adds a named range. */
  addNamedRange?: AddNamedRangeRequest;
  /** Unmerges merged cells. */
  unmergeCells?: UnmergeCellsRequest;
  /** Finds and replaces occurrences of some text with other text. */
  findReplace?: FindReplaceRequest;
  /** Sets data validation for one or more cells. */
  setDataValidation?: SetDataValidationRequest;
  /** Deletes a data source. */
  deleteDataSource?: DeleteDataSourceRequest;
  /** Updates the borders in a range of cells. */
  updateBorders?: UpdateBordersRequest;
  /** Removes a banded range */
  deleteBanding?: DeleteBandingRequest;
  /** Adds a filter view. */
  addFilterView?: AddFilterViewRequest;
  /** Merges cells together. */
  mergeCells?: MergeCellsRequest;
  /** Updates many cells at once. */
  updateCells?: UpdateCellsRequest;
  /** Duplicates a filter view. */
  duplicateFilterView?: DuplicateFilterViewRequest;
  /** Adds a new banded range */
  addBanding?: AddBandingRequest;
  /** Repeats a single cell across a range. */
  repeatCell?: RepeatCellRequest;
  /** Moves rows or columns to another location in a sheet. */
  moveDimension?: MoveDimensionRequest;
  /** Deletes rows or columns in a sheet. */
  deleteDimension?: DeleteDimensionRequest;
  /** Cancels refreshes of one or multiple data sources and associated dbobjects. */
  cancelDataSourceRefresh?: CancelDataSourceRefreshRequest;
  /** Creates new developer metadata */
  createDeveloperMetadata?: CreateDeveloperMetadataRequest;
  /** Adds a sheet. */
  addSheet?: AddSheetRequest;
  /** Updates a data source. */
  updateDataSource?: UpdateDataSourceRequest;
  /** Deletes an embedded object (e.g, chart, image) in a sheet. */
  deleteEmbeddedObject?: DeleteEmbeddedObjectRequest;
  /** Deletes a filter view from a sheet. */
  deleteFilterView?: DeleteFilterViewRequest;
  /** Creates a group over the specified range. */
  addDimensionGroup?: AddDimensionGroupRequest;
  /** Inserts new rows or columns in a sheet. */
  insertDimension?: InsertDimensionRequest;
  /** Adds a slicer. */
  addSlicer?: AddSlicerRequest;
  /** Deletes an existing conditional format rule. */
  deleteConditionalFormatRule?: DeleteConditionalFormatRuleRequest;
  /** Updates a named range. */
  updateNamedRange?: UpdateNamedRangeRequest;
  /** Updates a chart's specifications. */
  updateChartSpec?: UpdateChartSpecRequest;
  /** Appends dimensions to the end of a sheet. */
  appendDimension?: AppendDimensionRequest;
  /** Adds a table. */
  addTable?: AddTableRequest;
}

export const Request = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  updateEmbeddedObjectPosition: Schema.optional(
    UpdateEmbeddedObjectPositionRequest,
  ),
  deleteDuplicates: Schema.optional(DeleteDuplicatesRequest),
  trimWhitespace: Schema.optional(TrimWhitespaceRequest),
  updateSheetProperties: Schema.optional(UpdateSheetPropertiesRequest),
  updateDimensionProperties: Schema.optional(UpdateDimensionPropertiesRequest),
  pasteData: Schema.optional(PasteDataRequest),
  updateBanding: Schema.optional(UpdateBandingRequest),
  updateTable: Schema.optional(UpdateTableRequest),
  insertRange: Schema.optional(InsertRangeRequest),
  deleteSheet: Schema.optional(DeleteSheetRequest),
  addConditionalFormatRule: Schema.optional(AddConditionalFormatRuleRequest),
  appendCells: Schema.optional(AppendCellsRequest),
  deleteProtectedRange: Schema.optional(DeleteProtectedRangeRequest),
  autoResizeDimensions: Schema.optional(AutoResizeDimensionsRequest),
  deleteNamedRange: Schema.optional(DeleteNamedRangeRequest),
  addDataSource: Schema.optional(AddDataSourceRequest),
  updateSlicerSpec: Schema.optional(UpdateSlicerSpecRequest),
  sortRange: Schema.optional(SortRangeRequest),
  randomizeRange: Schema.optional(RandomizeRangeRequest),
  setBasicFilter: Schema.optional(SetBasicFilterRequest),
  clearBasicFilter: Schema.optional(ClearBasicFilterRequest),
  deleteDeveloperMetadata: Schema.optional(DeleteDeveloperMetadataRequest),
  updateDeveloperMetadata: Schema.optional(UpdateDeveloperMetadataRequest),
  addChart: Schema.optional(AddChartRequest),
  textToColumns: Schema.optional(TextToColumnsRequest),
  updateProtectedRange: Schema.optional(UpdateProtectedRangeRequest),
  updateDimensionGroup: Schema.optional(UpdateDimensionGroupRequest),
  updateEmbeddedObjectBorder: Schema.optional(
    UpdateEmbeddedObjectBorderRequest,
  ),
  cutPaste: Schema.optional(CutPasteRequest),
  duplicateSheet: Schema.optional(DuplicateSheetRequest),
  autoFill: Schema.optional(AutoFillRequest),
  deleteDimensionGroup: Schema.optional(DeleteDimensionGroupRequest),
  updateFilterView: Schema.optional(UpdateFilterViewRequest),
  copyPaste: Schema.optional(CopyPasteRequest),
  updateConditionalFormatRule: Schema.optional(
    UpdateConditionalFormatRuleRequest,
  ),
  updateSpreadsheetProperties: Schema.optional(
    UpdateSpreadsheetPropertiesRequest,
  ),
  deleteTable: Schema.optional(DeleteTableRequest),
  deleteRange: Schema.optional(DeleteRangeRequest),
  refreshDataSource: Schema.optional(RefreshDataSourceRequest),
  addProtectedRange: Schema.optional(AddProtectedRangeRequest),
  addNamedRange: Schema.optional(AddNamedRangeRequest),
  unmergeCells: Schema.optional(UnmergeCellsRequest),
  findReplace: Schema.optional(FindReplaceRequest),
  setDataValidation: Schema.optional(SetDataValidationRequest),
  deleteDataSource: Schema.optional(DeleteDataSourceRequest),
  updateBorders: Schema.optional(UpdateBordersRequest),
  deleteBanding: Schema.optional(DeleteBandingRequest),
  addFilterView: Schema.optional(AddFilterViewRequest),
  mergeCells: Schema.optional(MergeCellsRequest),
  updateCells: Schema.optional(UpdateCellsRequest),
  duplicateFilterView: Schema.optional(DuplicateFilterViewRequest),
  addBanding: Schema.optional(AddBandingRequest),
  repeatCell: Schema.optional(RepeatCellRequest),
  moveDimension: Schema.optional(MoveDimensionRequest),
  deleteDimension: Schema.optional(DeleteDimensionRequest),
  cancelDataSourceRefresh: Schema.optional(CancelDataSourceRefreshRequest),
  createDeveloperMetadata: Schema.optional(CreateDeveloperMetadataRequest),
  addSheet: Schema.optional(AddSheetRequest),
  updateDataSource: Schema.optional(UpdateDataSourceRequest),
  deleteEmbeddedObject: Schema.optional(DeleteEmbeddedObjectRequest),
  deleteFilterView: Schema.optional(DeleteFilterViewRequest),
  addDimensionGroup: Schema.optional(AddDimensionGroupRequest),
  insertDimension: Schema.optional(InsertDimensionRequest),
  addSlicer: Schema.optional(AddSlicerRequest),
  deleteConditionalFormatRule: Schema.optional(
    DeleteConditionalFormatRuleRequest,
  ),
  updateNamedRange: Schema.optional(UpdateNamedRangeRequest),
  updateChartSpec: Schema.optional(UpdateChartSpecRequest),
  appendDimension: Schema.optional(AppendDimensionRequest),
  addTable: Schema.optional(AddTableRequest),
}).annotate({ identifier: "Request" });

export interface BatchUpdateSpreadsheetRequest {
  /** Determines if the update response should include the spreadsheet resource. */
  includeSpreadsheetInResponse?: boolean;
  /** A list of updates to apply to the spreadsheet. Requests will be applied in the order they are specified. If any request is not valid, no requests will be applied. */
  requests?: ReadonlyArray<Request>;
  /** Limits the ranges included in the response spreadsheet. Meaningful only if include_spreadsheet_in_response is 'true'. */
  responseRanges?: ReadonlyArray<string>;
  /** True if grid data should be returned. Meaningful only if include_spreadsheet_in_response is 'true'. This parameter is ignored if a field mask was set in the request. */
  responseIncludeGridData?: boolean;
}

export const BatchUpdateSpreadsheetRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    includeSpreadsheetInResponse: Schema.optional(Schema.Boolean),
    requests: Schema.optional(Schema.Array(Request)),
    responseRanges: Schema.optional(Schema.Array(Schema.String)),
    responseIncludeGridData: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "BatchUpdateSpreadsheetRequest" });

export interface AddProtectedRangeResponse {
  /** The newly added protected range. */
  protectedRange?: ProtectedRange;
}

export const AddProtectedRangeResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    protectedRange: Schema.optional(ProtectedRange),
  }).annotate({ identifier: "AddProtectedRangeResponse" });

export interface ValueRange {
  /** The range the values cover, in [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell). For output, this range indicates the entire requested range, even though the values will exclude trailing rows and columns. When appending values, this field represents the range to search for a table, after which values will be appended. */
  range?: string;
  /** The major dimension of the values. For output, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`, then requesting `range=A1:B2,majorDimension=ROWS` will return `[[1,2],[3,4]]`, whereas requesting `range=A1:B2,majorDimension=COLUMNS` will return `[[1,3],[2,4]]`. For input, with `range=A1:B2,majorDimension=ROWS` then `[[1,2],[3,4]]` will set `A1=1,B1=2,A2=3,B2=4`. With `range=A1:B2,majorDimension=COLUMNS` then `[[1,2],[3,4]]` will set `A1=1,B1=3,A2=2,B2=4`. When writing, if this field is not set, it defaults to ROWS. */
  majorDimension?: "DIMENSION_UNSPECIFIED" | "ROWS" | "COLUMNS" | (string & {});
  /** The data that was read or to be written. This is an array of arrays, the outer array representing all the data and each inner array representing a major dimension. Each item in the inner array corresponds with one cell. For output, empty trailing rows and columns will not be included. For input, supported value types are: bool, string, and double. Null values will be skipped. To set a cell to an empty value, set the string value to an empty string. */
  values?: ReadonlyArray<ReadonlyArray<unknown>>;
}

export const ValueRange = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  range: Schema.optional(Schema.String),
  majorDimension: Schema.optional(Schema.String),
  values: Schema.optional(Schema.Array(Schema.Array(Schema.Unknown))),
}).annotate({ identifier: "ValueRange" });

export interface BatchUpdateValuesRequest {
  /** Determines if the update response should include the values of the cells that were updated. By default, responses do not include the updated values. The `updatedData` field within each of the BatchUpdateValuesResponse.responses contains the updated values. If the range to write was larger than the range actually written, the response includes all values in the requested range (excluding trailing empty rows and columns). */
  includeValuesInResponse?: boolean;
  /** The new values to apply to the spreadsheet. */
  data?: ReadonlyArray<ValueRange>;
  /** Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER. */
  responseDateTimeRenderOption?:
    | "SERIAL_NUMBER"
    | "FORMATTED_STRING"
    | (string & {});
  /** Determines how values in the response should be rendered. The default render option is FORMATTED_VALUE. */
  responseValueRenderOption?:
    | "FORMATTED_VALUE"
    | "UNFORMATTED_VALUE"
    | "FORMULA"
    | (string & {});
  /** How the input data should be interpreted. */
  valueInputOption?:
    | "INPUT_VALUE_OPTION_UNSPECIFIED"
    | "RAW"
    | "USER_ENTERED"
    | (string & {});
}

export const BatchUpdateValuesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    includeValuesInResponse: Schema.optional(Schema.Boolean),
    data: Schema.optional(Schema.Array(ValueRange)),
    responseDateTimeRenderOption: Schema.optional(Schema.String),
    responseValueRenderOption: Schema.optional(Schema.String),
    valueInputOption: Schema.optional(Schema.String),
  }).annotate({ identifier: "BatchUpdateValuesRequest" });

export interface BatchClearValuesRequest {
  /** The ranges to clear, in [A1 notation or R1C1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell). */
  ranges?: ReadonlyArray<string>;
}

export const BatchClearValuesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ranges: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "BatchClearValuesRequest" });

export interface AddSlicerResponse {
  /** The newly added slicer. */
  slicer?: Slicer;
}

export const AddSlicerResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  slicer: Schema.optional(Slicer),
}).annotate({ identifier: "AddSlicerResponse" });

export interface UpdateConditionalFormatRuleResponse {
  /** The old index of the rule. Not set if a rule was replaced (because it is the same as new_index). */
  oldIndex?: number;
  /** The new rule that replaced the old rule (if replacing), or the rule that was moved (if moved) */
  newRule?: ConditionalFormatRule;
  /** The index of the new rule. */
  newIndex?: number;
  /** The old (deleted) rule. Not set if a rule was moved (because it is the same as new_rule). */
  oldRule?: ConditionalFormatRule;
}

export const UpdateConditionalFormatRuleResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    oldIndex: Schema.optional(Schema.Number),
    newRule: Schema.optional(ConditionalFormatRule),
    newIndex: Schema.optional(Schema.Number),
    oldRule: Schema.optional(ConditionalFormatRule),
  }).annotate({ identifier: "UpdateConditionalFormatRuleResponse" });

export interface DeleteConditionalFormatRuleResponse {
  /** The rule that was deleted. */
  rule?: ConditionalFormatRule;
}

export const DeleteConditionalFormatRuleResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rule: Schema.optional(ConditionalFormatRule),
  }).annotate({ identifier: "DeleteConditionalFormatRuleResponse" });

export interface DataSourceRefreshDailySchedule {
  /** The start time of a time interval in which a data source refresh is scheduled. Only `hours` part is used. The time interval size defaults to that in the Sheets editor. */
  startTime?: TimeOfDay;
}

export const DataSourceRefreshDailySchedule =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(TimeOfDay),
  }).annotate({ identifier: "DataSourceRefreshDailySchedule" });

export interface DataSourceRefreshMonthlySchedule {
  /** The start time of a time interval in which a data source refresh is scheduled. Only `hours` part is used. The time interval size defaults to that in the Sheets editor. */
  startTime?: TimeOfDay;
  /** Days of the month to refresh. Only 1-28 are supported, mapping to the 1st to the 28th day. At least one day must be specified. */
  daysOfMonth?: ReadonlyArray<number>;
}

export const DataSourceRefreshMonthlySchedule =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(TimeOfDay),
    daysOfMonth: Schema.optional(Schema.Array(Schema.Number)),
  }).annotate({ identifier: "DataSourceRefreshMonthlySchedule" });

export interface Interval {
  /** Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start. */
  startTime?: string;
  /** Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end. */
  endTime?: string;
}

export const Interval = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  startTime: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
}).annotate({ identifier: "Interval" });

export interface DataSourceRefreshSchedule {
  /** Daily refresh schedule. */
  dailySchedule?: DataSourceRefreshDailySchedule;
  /** Monthly refresh schedule. */
  monthlySchedule?: DataSourceRefreshMonthlySchedule;
  /** Output only. The time interval of the next run. */
  nextRun?: Interval;
  /** True if the refresh schedule is enabled, or false otherwise. */
  enabled?: boolean;
  /** The scope of the refresh. Must be ALL_DATA_SOURCES. */
  refreshScope?:
    | "DATA_SOURCE_REFRESH_SCOPE_UNSPECIFIED"
    | "ALL_DATA_SOURCES"
    | (string & {});
  /** Weekly refresh schedule. */
  weeklySchedule?: DataSourceRefreshWeeklySchedule;
}

export const DataSourceRefreshSchedule =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dailySchedule: Schema.optional(DataSourceRefreshDailySchedule),
    monthlySchedule: Schema.optional(DataSourceRefreshMonthlySchedule),
    nextRun: Schema.optional(Interval),
    enabled: Schema.optional(Schema.Boolean),
    refreshScope: Schema.optional(Schema.String),
    weeklySchedule: Schema.optional(DataSourceRefreshWeeklySchedule),
  }).annotate({ identifier: "DataSourceRefreshSchedule" });

export interface MatchedDeveloperMetadata {
  /** The developer metadata matching the specified filters. */
  developerMetadata?: DeveloperMetadata;
  /** All filters matching the returned developer metadata. */
  dataFilters?: ReadonlyArray<DataFilter>;
}

export const MatchedDeveloperMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    developerMetadata: Schema.optional(DeveloperMetadata),
    dataFilters: Schema.optional(Schema.Array(DataFilter)),
  }).annotate({ identifier: "MatchedDeveloperMetadata" });

export interface ClearValuesRequest {}

export const ClearValuesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "ClearValuesRequest" });

export interface FindReplaceResponse {
  /** The number of sheets changed. */
  sheetsChanged?: number;
  /** The number of formula cells changed. */
  formulasChanged?: number;
  /** The number of rows changed. */
  rowsChanged?: number;
  /** The number of non-formula cells changed. */
  valuesChanged?: number;
  /** The number of occurrences (possibly multiple within a cell) changed. For example, if replacing `"e"` with `"o"` in `"Google Sheets"`, this would be `"3"` because `"Google Sheets"` -> `"Googlo Shoots"`. */
  occurrencesChanged?: number;
}

export const FindReplaceResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sheetsChanged: Schema.optional(Schema.Number),
  formulasChanged: Schema.optional(Schema.Number),
  rowsChanged: Schema.optional(Schema.Number),
  valuesChanged: Schema.optional(Schema.Number),
  occurrencesChanged: Schema.optional(Schema.Number),
}).annotate({ identifier: "FindReplaceResponse" });

export interface MatchedValueRange {
  /** The DataFilters from the request that matched the range of values. */
  dataFilters?: ReadonlyArray<DataFilter>;
  /** The values matched by the DataFilter. */
  valueRange?: ValueRange;
}

export const MatchedValueRange = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dataFilters: Schema.optional(Schema.Array(DataFilter)),
  valueRange: Schema.optional(ValueRange),
}).annotate({ identifier: "MatchedValueRange" });

export interface BatchGetValuesByDataFilterResponse {
  /** The ID of the spreadsheet the data was retrieved from. */
  spreadsheetId?: string;
  /** The requested values with the list of data filters that matched them. */
  valueRanges?: ReadonlyArray<MatchedValueRange>;
}

export const BatchGetValuesByDataFilterResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    spreadsheetId: Schema.optional(Schema.String),
    valueRanges: Schema.optional(Schema.Array(MatchedValueRange)),
  }).annotate({ identifier: "BatchGetValuesByDataFilterResponse" });

export interface BatchClearValuesByDataFilterRequest {
  /** The DataFilters used to determine which ranges to clear. */
  dataFilters?: ReadonlyArray<DataFilter>;
}

export const BatchClearValuesByDataFilterRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataFilters: Schema.optional(Schema.Array(DataFilter)),
  }).annotate({ identifier: "BatchClearValuesByDataFilterRequest" });

export interface UpdateValuesResponse {
  /** The number of rows where at least one cell in the row was updated. */
  updatedRows?: number;
  /** The number of columns where at least one cell in the column was updated. */
  updatedColumns?: number;
  /** The values of the cells after updates were applied. This is only included if the request's `includeValuesInResponse` field was `true`. */
  updatedData?: ValueRange;
  /** The number of cells updated. */
  updatedCells?: number;
  /** The spreadsheet the updates were applied to. */
  spreadsheetId?: string;
  /** The range (in A1 notation) that updates were applied to. */
  updatedRange?: string;
}

export const UpdateValuesResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  updatedRows: Schema.optional(Schema.Number),
  updatedColumns: Schema.optional(Schema.Number),
  updatedData: Schema.optional(ValueRange),
  updatedCells: Schema.optional(Schema.Number),
  spreadsheetId: Schema.optional(Schema.String),
  updatedRange: Schema.optional(Schema.String),
}).annotate({ identifier: "UpdateValuesResponse" });

export interface AddChartResponse {
  /** The newly added chart. */
  chart?: EmbeddedChart;
}

export const AddChartResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  chart: Schema.optional(EmbeddedChart),
}).annotate({ identifier: "AddChartResponse" });

export interface GridData {
  /** The first row this GridData refers to, zero-based. */
  startRow?: number;
  /** The first column this GridData refers to, zero-based. */
  startColumn?: number;
  /** Metadata about the requested rows in the grid, starting with the row in start_row. */
  rowMetadata?: ReadonlyArray<DimensionProperties>;
  /** Metadata about the requested columns in the grid, starting with the column in start_column. */
  columnMetadata?: ReadonlyArray<DimensionProperties>;
  /** The data in the grid, one entry per row, starting with the row in startRow. The values in RowData will correspond to columns starting at start_column. */
  rowData?: ReadonlyArray<RowData>;
}

export const GridData = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  startRow: Schema.optional(Schema.Number),
  startColumn: Schema.optional(Schema.Number),
  rowMetadata: Schema.optional(Schema.Array(DimensionProperties)),
  columnMetadata: Schema.optional(Schema.Array(DimensionProperties)),
  rowData: Schema.optional(Schema.Array(RowData)),
}).annotate({ identifier: "GridData" });

export interface Sheet {
  /** The ranges that are merged together. */
  merges?: ReadonlyArray<GridRange>;
  /** The banded (alternating colors) ranges on this sheet. */
  bandedRanges?: ReadonlyArray<BandedRange>;
  /** The specifications of every chart on this sheet. */
  charts?: ReadonlyArray<EmbeddedChart>;
  /** The developer metadata associated with a sheet. */
  developerMetadata?: ReadonlyArray<DeveloperMetadata>;
  /** All column groups on this sheet, ordered by increasing range start index, then by group depth. */
  columnGroups?: ReadonlyArray<DimensionGroup>;
  /** All row groups on this sheet, ordered by increasing range start index, then by group depth. */
  rowGroups?: ReadonlyArray<DimensionGroup>;
  /** The conditional format rules in this sheet. */
  conditionalFormats?: ReadonlyArray<ConditionalFormatRule>;
  /** The protected ranges in this sheet. */
  protectedRanges?: ReadonlyArray<ProtectedRange>;
  /** Data in the grid, if this is a grid sheet. The number of GridData objects returned is dependent on the number of ranges requested on this sheet. For example, if this is representing `Sheet1`, and the spreadsheet was requested with ranges `Sheet1!A1:C10` and `Sheet1!D15:E20`, then the first GridData will have a startRow/startColumn of `0`, while the second one will have `startRow 14` (zero-based row 15), and `startColumn 3` (zero-based column D). For a DATA_SOURCE sheet, you can not request a specific range, the GridData contains all the values. */
  data?: ReadonlyArray<GridData>;
  /** The filter views in this sheet. */
  filterViews?: ReadonlyArray<FilterView>;
  /** The slicers on this sheet. */
  slicers?: ReadonlyArray<Slicer>;
  /** The filter on this sheet, if any. */
  basicFilter?: BasicFilter;
  /** The tables on this sheet. */
  tables?: ReadonlyArray<Table>;
  /** The properties of the sheet. */
  properties?: SheetProperties;
}

export const Sheet = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  merges: Schema.optional(Schema.Array(GridRange)),
  bandedRanges: Schema.optional(Schema.Array(BandedRange)),
  charts: Schema.optional(Schema.Array(EmbeddedChart)),
  developerMetadata: Schema.optional(Schema.Array(DeveloperMetadata)),
  columnGroups: Schema.optional(Schema.Array(DimensionGroup)),
  rowGroups: Schema.optional(Schema.Array(DimensionGroup)),
  conditionalFormats: Schema.optional(Schema.Array(ConditionalFormatRule)),
  protectedRanges: Schema.optional(Schema.Array(ProtectedRange)),
  data: Schema.optional(Schema.Array(GridData)),
  filterViews: Schema.optional(Schema.Array(FilterView)),
  slicers: Schema.optional(Schema.Array(Slicer)),
  basicFilter: Schema.optional(BasicFilter),
  tables: Schema.optional(Schema.Array(Table)),
  properties: Schema.optional(SheetProperties),
}).annotate({ identifier: "Sheet" });

export interface UpdateDeveloperMetadataResponse {
  /** The updated developer metadata. */
  developerMetadata?: ReadonlyArray<DeveloperMetadata>;
}

export const UpdateDeveloperMetadataResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    developerMetadata: Schema.optional(Schema.Array(DeveloperMetadata)),
  }).annotate({ identifier: "UpdateDeveloperMetadataResponse" });

export interface RefreshCancellationStatus {
  /** The state of a call to cancel a refresh in Sheets. */
  state?:
    | "REFRESH_CANCELLATION_STATE_UNSPECIFIED"
    | "CANCEL_SUCCEEDED"
    | "CANCEL_FAILED"
    | (string & {});
  /** The error code. */
  errorCode?:
    | "REFRESH_CANCELLATION_ERROR_CODE_UNSPECIFIED"
    | "EXECUTION_NOT_FOUND"
    | "CANCEL_PERMISSION_DENIED"
    | "QUERY_EXECUTION_COMPLETED"
    | "CONCURRENT_CANCELLATION"
    | "CANCEL_OTHER_ERROR"
    | (string & {});
}

export const RefreshCancellationStatus =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    errorCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "RefreshCancellationStatus" });

export interface CancelDataSourceRefreshStatus {
  /** Reference to the data source object whose refresh is being cancelled. */
  reference?: DataSourceObjectReference;
  /** The cancellation status. */
  refreshCancellationStatus?: RefreshCancellationStatus;
}

export const CancelDataSourceRefreshStatus =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reference: Schema.optional(DataSourceObjectReference),
    refreshCancellationStatus: Schema.optional(RefreshCancellationStatus),
  }).annotate({ identifier: "CancelDataSourceRefreshStatus" });

export interface CancelDataSourceRefreshResponse {
  /** The cancellation statuses of refreshes of all data source objects specified in the request. If is_all is specified, the field contains only those in failure status. Refreshing and canceling refresh the same data source object is also not allowed in the same `batchUpdate`. */
  statuses?: ReadonlyArray<CancelDataSourceRefreshStatus>;
}

export const CancelDataSourceRefreshResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    statuses: Schema.optional(Schema.Array(CancelDataSourceRefreshStatus)),
  }).annotate({ identifier: "CancelDataSourceRefreshResponse" });

export interface DeleteDeveloperMetadataResponse {
  /** The metadata that was deleted. */
  deletedDeveloperMetadata?: ReadonlyArray<DeveloperMetadata>;
}

export const DeleteDeveloperMetadataResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deletedDeveloperMetadata: Schema.optional(Schema.Array(DeveloperMetadata)),
  }).annotate({ identifier: "DeleteDeveloperMetadataResponse" });

export interface AddSheetResponse {
  /** The properties of the newly added sheet. */
  properties?: SheetProperties;
}

export const AddSheetResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(SheetProperties),
}).annotate({ identifier: "AddSheetResponse" });

export interface UpdateDataSourceResponse {
  /** The data execution status. */
  dataExecutionStatus?: DataExecutionStatus;
  /** The updated data source. */
  dataSource?: DataSource;
}

export const UpdateDataSourceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataExecutionStatus: Schema.optional(DataExecutionStatus),
    dataSource: Schema.optional(DataSource),
  }).annotate({ identifier: "UpdateDataSourceResponse" });

export interface CreateDeveloperMetadataResponse {
  /** The developer metadata that was created. */
  developerMetadata?: DeveloperMetadata;
}

export const CreateDeveloperMetadataResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    developerMetadata: Schema.optional(DeveloperMetadata),
  }).annotate({ identifier: "CreateDeveloperMetadataResponse" });

export interface AddTableResponse {
  /** Output only. The table that was added. */
  table?: Table;
}

export const AddTableResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  table: Schema.optional(Table),
}).annotate({ identifier: "AddTableResponse" });

export interface DeleteDimensionGroupResponse {
  /** All groups of a dimension after deleting a group from that dimension. */
  dimensionGroups?: ReadonlyArray<DimensionGroup>;
}

export const DeleteDimensionGroupResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dimensionGroups: Schema.optional(Schema.Array(DimensionGroup)),
  }).annotate({ identifier: "DeleteDimensionGroupResponse" });

export interface UpdateEmbeddedObjectPositionResponse {
  /** The new position of the embedded object. */
  position?: EmbeddedObjectPosition;
}

export const UpdateEmbeddedObjectPositionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    position: Schema.optional(EmbeddedObjectPosition),
  }).annotate({ identifier: "UpdateEmbeddedObjectPositionResponse" });

export interface DeleteDuplicatesResponse {
  /** The number of duplicate rows removed. */
  duplicatesRemovedCount?: number;
}

export const DeleteDuplicatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    duplicatesRemovedCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DeleteDuplicatesResponse" });

export interface TrimWhitespaceResponse {
  /** The number of cells that were trimmed of whitespace. */
  cellsChangedCount?: number;
}

export const TrimWhitespaceResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    cellsChangedCount: Schema.optional(Schema.Number),
  },
).annotate({ identifier: "TrimWhitespaceResponse" });

export interface RefreshDataSourceObjectExecutionStatus {
  /** The data execution status. */
  dataExecutionStatus?: DataExecutionStatus;
  /** Reference to a data source object being refreshed. */
  reference?: DataSourceObjectReference;
}

export const RefreshDataSourceObjectExecutionStatus =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataExecutionStatus: Schema.optional(DataExecutionStatus),
    reference: Schema.optional(DataSourceObjectReference),
  }).annotate({ identifier: "RefreshDataSourceObjectExecutionStatus" });

export interface RefreshDataSourceResponse {
  /** All the refresh status for the data source object references specified in the request. If is_all is specified, the field contains only those in failure status. */
  statuses?: ReadonlyArray<RefreshDataSourceObjectExecutionStatus>;
}

export const RefreshDataSourceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    statuses: Schema.optional(
      Schema.Array(RefreshDataSourceObjectExecutionStatus),
    ),
  }).annotate({ identifier: "RefreshDataSourceResponse" });

export interface AddNamedRangeResponse {
  /** The named range to add. */
  namedRange?: NamedRange;
}

export const AddNamedRangeResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  namedRange: Schema.optional(NamedRange),
}).annotate({ identifier: "AddNamedRangeResponse" });

export interface AddFilterViewResponse {
  /** The newly added filter view. */
  filter?: FilterView;
}

export const AddFilterViewResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  filter: Schema.optional(FilterView),
}).annotate({ identifier: "AddFilterViewResponse" });

export interface AddDataSourceResponse {
  /** The data source that was created. */
  dataSource?: DataSource;
  /** The data execution status. */
  dataExecutionStatus?: DataExecutionStatus;
}

export const AddDataSourceResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dataSource: Schema.optional(DataSource),
  dataExecutionStatus: Schema.optional(DataExecutionStatus),
}).annotate({ identifier: "AddDataSourceResponse" });

export interface AddBandingResponse {
  /** The banded range that was added. */
  bandedRange?: BandedRange;
}

export const AddBandingResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  bandedRange: Schema.optional(BandedRange),
}).annotate({ identifier: "AddBandingResponse" });

export interface DuplicateFilterViewResponse {
  /** The newly created filter. */
  filter?: FilterView;
}

export const DuplicateFilterViewResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(FilterView),
  }).annotate({ identifier: "DuplicateFilterViewResponse" });

export interface Response {
  /** A reply from updating a developer metadata entry. */
  updateDeveloperMetadata?: UpdateDeveloperMetadataResponse;
  /** A reply from cancelling data source object refreshes. */
  cancelDataSourceRefresh?: CancelDataSourceRefreshResponse;
  /** A reply from deleting a developer metadata entry. */
  deleteDeveloperMetadata?: DeleteDeveloperMetadataResponse;
  /** A reply from adding a chart. */
  addChart?: AddChartResponse;
  /** A reply from adding a sheet. */
  addSheet?: AddSheetResponse;
  /** A reply from updating a data source. */
  updateDataSource?: UpdateDataSourceResponse;
  /** A reply from creating a developer metadata entry. */
  createDeveloperMetadata?: CreateDeveloperMetadataResponse;
  /** A reply from duplicating a sheet. */
  duplicateSheet?: DuplicateSheetResponse;
  /** A reply from adding a dimension group. */
  addDimensionGroup?: AddDimensionGroupResponse;
  /** A reply from adding a slicer. */
  addSlicer?: AddSlicerResponse;
  /** A reply from adding a table. */
  addTable?: AddTableResponse;
  /** A reply from updating a conditional format rule. */
  updateConditionalFormatRule?: UpdateConditionalFormatRuleResponse;
  /** A reply from deleting a conditional format rule. */
  deleteConditionalFormatRule?: DeleteConditionalFormatRuleResponse;
  /** A reply from deleting a dimension group. */
  deleteDimensionGroup?: DeleteDimensionGroupResponse;
  /** A reply from updating an embedded object's position. */
  updateEmbeddedObjectPosition?: UpdateEmbeddedObjectPositionResponse;
  /** A reply from removing rows containing duplicate values. */
  deleteDuplicates?: DeleteDuplicatesResponse;
  /** A reply from trimming whitespace. */
  trimWhitespace?: TrimWhitespaceResponse;
  /** A reply from refreshing data source objects. */
  refreshDataSource?: RefreshDataSourceResponse;
  /** A reply from adding a named range. */
  addNamedRange?: AddNamedRangeResponse;
  /** A reply from adding a protected range. */
  addProtectedRange?: AddProtectedRangeResponse;
  /** A reply from doing a find/replace. */
  findReplace?: FindReplaceResponse;
  /** A reply from adding a filter view. */
  addFilterView?: AddFilterViewResponse;
  /** A reply from adding a data source. */
  addDataSource?: AddDataSourceResponse;
  /** A reply from adding a banded range. */
  addBanding?: AddBandingResponse;
  /** A reply from duplicating a filter view. */
  duplicateFilterView?: DuplicateFilterViewResponse;
}

export const Response = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  updateDeveloperMetadata: Schema.optional(UpdateDeveloperMetadataResponse),
  cancelDataSourceRefresh: Schema.optional(CancelDataSourceRefreshResponse),
  deleteDeveloperMetadata: Schema.optional(DeleteDeveloperMetadataResponse),
  addChart: Schema.optional(AddChartResponse),
  addSheet: Schema.optional(AddSheetResponse),
  updateDataSource: Schema.optional(UpdateDataSourceResponse),
  createDeveloperMetadata: Schema.optional(CreateDeveloperMetadataResponse),
  duplicateSheet: Schema.optional(DuplicateSheetResponse),
  addDimensionGroup: Schema.optional(AddDimensionGroupResponse),
  addSlicer: Schema.optional(AddSlicerResponse),
  addTable: Schema.optional(AddTableResponse),
  updateConditionalFormatRule: Schema.optional(
    UpdateConditionalFormatRuleResponse,
  ),
  deleteConditionalFormatRule: Schema.optional(
    DeleteConditionalFormatRuleResponse,
  ),
  deleteDimensionGroup: Schema.optional(DeleteDimensionGroupResponse),
  updateEmbeddedObjectPosition: Schema.optional(
    UpdateEmbeddedObjectPositionResponse,
  ),
  deleteDuplicates: Schema.optional(DeleteDuplicatesResponse),
  trimWhitespace: Schema.optional(TrimWhitespaceResponse),
  refreshDataSource: Schema.optional(RefreshDataSourceResponse),
  addNamedRange: Schema.optional(AddNamedRangeResponse),
  addProtectedRange: Schema.optional(AddProtectedRangeResponse),
  findReplace: Schema.optional(FindReplaceResponse),
  addFilterView: Schema.optional(AddFilterViewResponse),
  addDataSource: Schema.optional(AddDataSourceResponse),
  addBanding: Schema.optional(AddBandingResponse),
  duplicateFilterView: Schema.optional(DuplicateFilterViewResponse),
}).annotate({ identifier: "Response" });

export interface Spreadsheet {
  /** Overall properties of a spreadsheet. */
  properties?: SpreadsheetProperties;
  /** Output only. A list of data source refresh schedules. */
  dataSourceSchedules?: ReadonlyArray<DataSourceRefreshSchedule>;
  /** The sheets that are part of a spreadsheet. */
  sheets?: ReadonlyArray<Sheet>;
  /** The ID of the spreadsheet. This field is read-only. */
  spreadsheetId?: string;
  /** The url of the spreadsheet. This field is read-only. */
  spreadsheetUrl?: string;
  /** The named ranges defined in a spreadsheet. */
  namedRanges?: ReadonlyArray<NamedRange>;
  /** The developer metadata associated with a spreadsheet. */
  developerMetadata?: ReadonlyArray<DeveloperMetadata>;
  /** A list of external data sources connected with the spreadsheet. */
  dataSources?: ReadonlyArray<DataSource>;
}

export const Spreadsheet = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(SpreadsheetProperties),
  dataSourceSchedules: Schema.optional(Schema.Array(DataSourceRefreshSchedule)),
  sheets: Schema.optional(Schema.Array(Sheet)),
  spreadsheetId: Schema.optional(Schema.String),
  spreadsheetUrl: Schema.optional(Schema.String),
  namedRanges: Schema.optional(Schema.Array(NamedRange)),
  developerMetadata: Schema.optional(Schema.Array(DeveloperMetadata)),
  dataSources: Schema.optional(Schema.Array(DataSource)),
}).annotate({ identifier: "Spreadsheet" });

export interface BatchUpdateSpreadsheetResponse {
  /** The reply of the updates. This maps 1:1 with the updates, although replies to some requests may be empty. */
  replies?: ReadonlyArray<Response>;
  /** The spreadsheet the updates were applied to. */
  spreadsheetId?: string;
  /** The spreadsheet after updates were applied. This is only set if BatchUpdateSpreadsheetRequest.include_spreadsheet_in_response is `true`. */
  updatedSpreadsheet?: Spreadsheet;
}

export const BatchUpdateSpreadsheetResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    replies: Schema.optional(Schema.Array(Response)),
    spreadsheetId: Schema.optional(Schema.String),
    updatedSpreadsheet: Schema.optional(Spreadsheet),
  }).annotate({ identifier: "BatchUpdateSpreadsheetResponse" });

export interface DataFilterValueRange {
  /** The major dimension of the values. */
  majorDimension?: "DIMENSION_UNSPECIFIED" | "ROWS" | "COLUMNS" | (string & {});
  /** The data filter describing the location of the values in the spreadsheet. */
  dataFilter?: DataFilter;
  /** The data to be written. If the provided values exceed any of the ranges matched by the data filter then the request fails. If the provided values are less than the matched ranges only the specified values are written, existing values in the matched ranges remain unaffected. */
  values?: ReadonlyArray<ReadonlyArray<unknown>>;
}

export const DataFilterValueRange = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  majorDimension: Schema.optional(Schema.String),
  dataFilter: Schema.optional(DataFilter),
  values: Schema.optional(Schema.Array(Schema.Array(Schema.Unknown))),
}).annotate({ identifier: "DataFilterValueRange" });

export interface BatchUpdateValuesByDataFilterRequest {
  /** The new values to apply to the spreadsheet. If more than one range is matched by the specified DataFilter the specified values are applied to all of those ranges. */
  data?: ReadonlyArray<DataFilterValueRange>;
  /** Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER. */
  responseDateTimeRenderOption?:
    | "SERIAL_NUMBER"
    | "FORMATTED_STRING"
    | (string & {});
  /** How the input data should be interpreted. */
  valueInputOption?:
    | "INPUT_VALUE_OPTION_UNSPECIFIED"
    | "RAW"
    | "USER_ENTERED"
    | (string & {});
  /** Determines how values in the response should be rendered. The default render option is FORMATTED_VALUE. */
  responseValueRenderOption?:
    | "FORMATTED_VALUE"
    | "UNFORMATTED_VALUE"
    | "FORMULA"
    | (string & {});
  /** Determines if the update response should include the values of the cells that were updated. By default, responses do not include the updated values. The `updatedData` field within each of the BatchUpdateValuesResponse.responses contains the updated values. If the range to write was larger than the range actually written, the response includes all values in the requested range (excluding trailing empty rows and columns). */
  includeValuesInResponse?: boolean;
}

export const BatchUpdateValuesByDataFilterRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.optional(Schema.Array(DataFilterValueRange)),
    responseDateTimeRenderOption: Schema.optional(Schema.String),
    valueInputOption: Schema.optional(Schema.String),
    responseValueRenderOption: Schema.optional(Schema.String),
    includeValuesInResponse: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "BatchUpdateValuesByDataFilterRequest" });

export interface CopySheetToAnotherSpreadsheetRequest {
  /** The ID of the spreadsheet to copy the sheet to. */
  destinationSpreadsheetId?: string;
}

export const CopySheetToAnotherSpreadsheetRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    destinationSpreadsheetId: Schema.optional(Schema.String),
  }).annotate({ identifier: "CopySheetToAnotherSpreadsheetRequest" });

export interface BatchGetValuesResponse {
  /** The requested values. The order of the ValueRanges is the same as the order of the requested ranges. */
  valueRanges?: ReadonlyArray<ValueRange>;
  /** The ID of the spreadsheet the data was retrieved from. */
  spreadsheetId?: string;
}

export const BatchGetValuesResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    valueRanges: Schema.optional(Schema.Array(ValueRange)),
    spreadsheetId: Schema.optional(Schema.String),
  },
).annotate({ identifier: "BatchGetValuesResponse" });

export interface UpdateValuesByDataFilterResponse {
  /** The range (in [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell)) that updates were applied to. */
  updatedRange?: string;
  /** The data filter that selected the range that was updated. */
  dataFilter?: DataFilter;
  /** The number of rows where at least one cell in the row was updated. */
  updatedRows?: number;
  /** The number of columns where at least one cell in the column was updated. */
  updatedColumns?: number;
  /** The values of the cells in the range matched by the dataFilter after all updates were applied. This is only included if the request's `includeValuesInResponse` field was `true`. */
  updatedData?: ValueRange;
  /** The number of cells updated. */
  updatedCells?: number;
}

export const UpdateValuesByDataFilterResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updatedRange: Schema.optional(Schema.String),
    dataFilter: Schema.optional(DataFilter),
    updatedRows: Schema.optional(Schema.Number),
    updatedColumns: Schema.optional(Schema.Number),
    updatedData: Schema.optional(ValueRange),
    updatedCells: Schema.optional(Schema.Number),
  }).annotate({ identifier: "UpdateValuesByDataFilterResponse" });

export interface BatchUpdateValuesByDataFilterResponse {
  /** The spreadsheet the updates were applied to. */
  spreadsheetId?: string;
  /** The total number of rows where at least one cell in the row was updated. */
  totalUpdatedRows?: number;
  /** The total number of cells updated. */
  totalUpdatedCells?: number;
  /** The response for each range updated. */
  responses?: ReadonlyArray<UpdateValuesByDataFilterResponse>;
  /** The total number of sheets where at least one cell in the sheet was updated. */
  totalUpdatedSheets?: number;
  /** The total number of columns where at least one cell in the column was updated. */
  totalUpdatedColumns?: number;
}

export const BatchUpdateValuesByDataFilterResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    spreadsheetId: Schema.optional(Schema.String),
    totalUpdatedRows: Schema.optional(Schema.Number),
    totalUpdatedCells: Schema.optional(Schema.Number),
    responses: Schema.optional(Schema.Array(UpdateValuesByDataFilterResponse)),
    totalUpdatedSheets: Schema.optional(Schema.Number),
    totalUpdatedColumns: Schema.optional(Schema.Number),
  }).annotate({ identifier: "BatchUpdateValuesByDataFilterResponse" });

export interface GetSpreadsheetByDataFilterRequest {
  /** The DataFilters used to select which ranges to retrieve from the spreadsheet. */
  dataFilters?: ReadonlyArray<DataFilter>;
  /** True if grid data should be returned. This parameter is ignored if a field mask was set in the request. */
  includeGridData?: boolean;
  /** True if tables should be excluded in the banded ranges. False if not set. */
  excludeTablesInBandedRanges?: boolean;
}

export const GetSpreadsheetByDataFilterRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataFilters: Schema.optional(Schema.Array(DataFilter)),
    includeGridData: Schema.optional(Schema.Boolean),
    excludeTablesInBandedRanges: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GetSpreadsheetByDataFilterRequest" });

export interface BatchGetValuesByDataFilterRequest {
  /** The major dimension that results should use. For example, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`, then a request that selects that range and sets `majorDimension=ROWS` returns `[[1,2],[3,4]]`, whereas a request that sets `majorDimension=COLUMNS` returns `[[1,3],[2,4]]`. */
  majorDimension?: "DIMENSION_UNSPECIFIED" | "ROWS" | "COLUMNS" | (string & {});
  /** How values should be represented in the output. The default render option is FORMATTED_VALUE. */
  valueRenderOption?:
    | "FORMATTED_VALUE"
    | "UNFORMATTED_VALUE"
    | "FORMULA"
    | (string & {});
  /** How dates, times, and durations should be represented in the output. This is ignored if value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER. */
  dateTimeRenderOption?: "SERIAL_NUMBER" | "FORMATTED_STRING" | (string & {});
  /** The data filters used to match the ranges of values to retrieve. Ranges that match any of the specified data filters are included in the response. */
  dataFilters?: ReadonlyArray<DataFilter>;
}

export const BatchGetValuesByDataFilterRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    majorDimension: Schema.optional(Schema.String),
    valueRenderOption: Schema.optional(Schema.String),
    dateTimeRenderOption: Schema.optional(Schema.String),
    dataFilters: Schema.optional(Schema.Array(DataFilter)),
  }).annotate({ identifier: "BatchGetValuesByDataFilterRequest" });

export interface SearchDeveloperMetadataResponse {
  /** The metadata matching the criteria of the search request. */
  matchedDeveloperMetadata?: ReadonlyArray<MatchedDeveloperMetadata>;
}

export const SearchDeveloperMetadataResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matchedDeveloperMetadata: Schema.optional(
      Schema.Array(MatchedDeveloperMetadata),
    ),
  }).annotate({ identifier: "SearchDeveloperMetadataResponse" });

export interface BatchClearValuesByDataFilterResponse {
  /** The spreadsheet the updates were applied to. */
  spreadsheetId?: string;
  /** The ranges that were cleared, in [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell). If the requests are for an unbounded range or a range larger than the bounds of the sheet, this is the actual ranges that were cleared, bounded to the sheet's limits. */
  clearedRanges?: ReadonlyArray<string>;
}

export const BatchClearValuesByDataFilterResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    spreadsheetId: Schema.optional(Schema.String),
    clearedRanges: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "BatchClearValuesByDataFilterResponse" });

export interface AppendValuesResponse {
  /** The range (in A1 notation) of the table that values are being appended to (before the values were appended). Empty if no table was found. */
  tableRange?: string;
  /** Information about the updates that were applied. */
  updates?: UpdateValuesResponse;
  /** The spreadsheet the updates were applied to. */
  spreadsheetId?: string;
}

export const AppendValuesResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tableRange: Schema.optional(Schema.String),
  updates: Schema.optional(UpdateValuesResponse),
  spreadsheetId: Schema.optional(Schema.String),
}).annotate({ identifier: "AppendValuesResponse" });

export interface BatchUpdateValuesResponse {
  /** The total number of sheets where at least one cell in the sheet was updated. */
  totalUpdatedSheets?: number;
  /** One UpdateValuesResponse per requested range, in the same order as the requests appeared. */
  responses?: ReadonlyArray<UpdateValuesResponse>;
  /** The total number of rows where at least one cell in the row was updated. */
  totalUpdatedRows?: number;
  /** The total number of cells updated. */
  totalUpdatedCells?: number;
  /** The spreadsheet the updates were applied to. */
  spreadsheetId?: string;
  /** The total number of columns where at least one cell in the column was updated. */
  totalUpdatedColumns?: number;
}

export const BatchUpdateValuesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalUpdatedSheets: Schema.optional(Schema.Number),
    responses: Schema.optional(Schema.Array(UpdateValuesResponse)),
    totalUpdatedRows: Schema.optional(Schema.Number),
    totalUpdatedCells: Schema.optional(Schema.Number),
    spreadsheetId: Schema.optional(Schema.String),
    totalUpdatedColumns: Schema.optional(Schema.Number),
  }).annotate({ identifier: "BatchUpdateValuesResponse" });

export interface ClearValuesResponse {
  /** The range (in A1 notation) that was cleared. (If the request was for an unbounded range or a range larger than the bounds of the sheet, this will be the actual range that was cleared, bounded to the sheet's limits.) */
  clearedRange?: string;
  /** The spreadsheet the updates were applied to. */
  spreadsheetId?: string;
}

export const ClearValuesResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  clearedRange: Schema.optional(Schema.String),
  spreadsheetId: Schema.optional(Schema.String),
}).annotate({ identifier: "ClearValuesResponse" });

// ==========================================================================
// Operations
// ==========================================================================

export interface GetByDataFilterSpreadsheetsRequest {
  /** The spreadsheet to request. */
  spreadsheetId: string;
  /** Request body */
  body?: GetSpreadsheetByDataFilterRequest;
}

export const GetByDataFilterSpreadsheetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    spreadsheetId: Schema.String.pipe(T.HttpPath("spreadsheetId")),
    body: Schema.optional(GetSpreadsheetByDataFilterRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v4/spreadsheets/{spreadsheetId}:getByDataFilter",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GetByDataFilterSpreadsheetsRequest>;

export type GetByDataFilterSpreadsheetsResponse = Spreadsheet;
export const GetByDataFilterSpreadsheetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Spreadsheet;

export type GetByDataFilterSpreadsheetsError = DefaultErrors;

/** Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID. For more information, see [Read, write, and search metadata](https://developers.google.com/workspace/sheets/api/guides/metadata). This method differs from GetSpreadsheet in that it allows selecting which subsets of spreadsheet data to return by specifying a dataFilters parameter. Multiple DataFilters can be specified. Specifying one or more data filters returns the portions of the spreadsheet that intersect ranges matched by any of the filters. By default, data within grids is not returned. You can include grid data in one of two ways: * Specify a [field mask](https://developers.google.com/workspace/sheets/api/guides/field-masks) listing your desired fields using the `fields` URL parameter in HTTP. * Set the includeGridData parameter to `true`. If a field mask is set, the `includeGridData` parameter is ignored. For large spreadsheets, as a best practice, retrieve only the specific spreadsheet fields that you want. */
export const getByDataFilterSpreadsheets: API.OperationMethod<
  GetByDataFilterSpreadsheetsRequest,
  GetByDataFilterSpreadsheetsResponse,
  GetByDataFilterSpreadsheetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetByDataFilterSpreadsheetsRequest,
  output: GetByDataFilterSpreadsheetsResponse,
  errors: [],
}));

export interface BatchUpdateSpreadsheetsRequest {
  /** The spreadsheet to apply the updates to. */
  spreadsheetId: string;
  /** Request body */
  body?: BatchUpdateSpreadsheetRequest;
}

export const BatchUpdateSpreadsheetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    spreadsheetId: Schema.String.pipe(T.HttpPath("spreadsheetId")),
    body: Schema.optional(BatchUpdateSpreadsheetRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v4/spreadsheets/{spreadsheetId}:batchUpdate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchUpdateSpreadsheetsRequest>;

export type BatchUpdateSpreadsheetsResponse = BatchUpdateSpreadsheetResponse;
export const BatchUpdateSpreadsheetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ BatchUpdateSpreadsheetResponse;

export type BatchUpdateSpreadsheetsError = DefaultErrors;

/** Applies one or more updates to the spreadsheet. Each request is validated before being applied. If any request is not valid then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. The replies will mirror the requests. For example, if you applied 4 updates and the 3rd one had a reply, then the response will have 2 empty replies, the actual reply, and another empty reply, in that order. Due to the collaborative nature of spreadsheets, it is not guaranteed that the spreadsheet will reflect exactly your changes after this completes, however it is guaranteed that the updates in the request will be applied together atomically. Your changes may be altered with respect to collaborator changes. If there are no collaborators, the spreadsheet should reflect your changes. */
export const batchUpdateSpreadsheets: API.OperationMethod<
  BatchUpdateSpreadsheetsRequest,
  BatchUpdateSpreadsheetsResponse,
  BatchUpdateSpreadsheetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchUpdateSpreadsheetsRequest,
  output: BatchUpdateSpreadsheetsResponse,
  errors: [],
}));

export interface CreateSpreadsheetsRequest {
  /** Request body */
  body?: Spreadsheet;
}

export const CreateSpreadsheetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(Spreadsheet).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v4/spreadsheets", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateSpreadsheetsRequest>;

export type CreateSpreadsheetsResponse = Spreadsheet;
export const CreateSpreadsheetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Spreadsheet;

export type CreateSpreadsheetsError = DefaultErrors;

/** Creates a spreadsheet, returning the newly created spreadsheet. */
export const createSpreadsheets: API.OperationMethod<
  CreateSpreadsheetsRequest,
  CreateSpreadsheetsResponse,
  CreateSpreadsheetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateSpreadsheetsRequest,
  output: CreateSpreadsheetsResponse,
  errors: [],
}));

export interface GetSpreadsheetsRequest {
  /** The spreadsheet to request. */
  spreadsheetId: string;
  /** True if grid data should be returned. This parameter is ignored if a field mask was set in the request. */
  includeGridData?: boolean;
  /** True if tables should be excluded in the banded ranges. False if not set. */
  excludeTablesInBandedRanges?: boolean;
  /** The ranges to retrieve from the spreadsheet. */
  ranges?: string[];
}

export const GetSpreadsheetsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    spreadsheetId: Schema.String.pipe(T.HttpPath("spreadsheetId")),
    includeGridData: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("includeGridData"),
    ),
    excludeTablesInBandedRanges: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("excludeTablesInBandedRanges"),
    ),
    ranges: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("ranges"),
    ),
  },
).pipe(
  T.Http({ method: "GET", path: "v4/spreadsheets/{spreadsheetId}" }),
  svc,
) as unknown as Schema.Schema<GetSpreadsheetsRequest>;

export type GetSpreadsheetsResponse = Spreadsheet;
export const GetSpreadsheetsResponse = /*@__PURE__*/ /*#__PURE__*/ Spreadsheet;

export type GetSpreadsheetsError = DefaultErrors;

/** Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID. By default, data within grids is not returned. You can include grid data in one of 2 ways: * Specify a [field mask](https://developers.google.com/workspace/sheets/api/guides/field-masks) listing your desired fields using the `fields` URL parameter in HTTP * Set the includeGridData URL parameter to true. If a field mask is set, the `includeGridData` parameter is ignored For large spreadsheets, as a best practice, retrieve only the specific spreadsheet fields that you want. To retrieve only subsets of spreadsheet data, use the ranges URL parameter. Ranges are specified using [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell). You can define a single cell (for example, `A1`) or multiple cells (for example, `A1:D5`). You can also get cells from other sheets within the same spreadsheet (for example, `Sheet2!A1:C4`) or retrieve multiple ranges at once (for example, `?ranges=A1:D5&ranges=Sheet2!A1:C4`). Limiting the range returns only the portions of the spreadsheet that intersect the requested ranges. */
export const getSpreadsheets: API.OperationMethod<
  GetSpreadsheetsRequest,
  GetSpreadsheetsResponse,
  GetSpreadsheetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSpreadsheetsRequest,
  output: GetSpreadsheetsResponse,
  errors: [],
}));

export interface UpdateSpreadsheetsValuesRequest {
  /** How the input data should be interpreted. */
  valueInputOption?:
    | "INPUT_VALUE_OPTION_UNSPECIFIED"
    | "RAW"
    | "USER_ENTERED"
    | (string & {});
  /** Determines how values in the response should be rendered. The default render option is FORMATTED_VALUE. */
  responseValueRenderOption?:
    | "FORMATTED_VALUE"
    | "UNFORMATTED_VALUE"
    | "FORMULA"
    | (string & {});
  /** Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER. */
  responseDateTimeRenderOption?:
    | "SERIAL_NUMBER"
    | "FORMATTED_STRING"
    | (string & {});
  /** The [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell) of the values to update. */
  range: string;
  /** Determines if the update response should include the values of the cells that were updated. By default, responses do not include the updated values. If the range to write was larger than the range actually written, the response includes all values in the requested range (excluding trailing empty rows and columns). */
  includeValuesInResponse?: boolean;
  /** The ID of the spreadsheet to update. */
  spreadsheetId: string;
  /** Request body */
  body?: ValueRange;
}

export const UpdateSpreadsheetsValuesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    valueInputOption: Schema.optional(Schema.String).pipe(
      T.HttpQuery("valueInputOption"),
    ),
    responseValueRenderOption: Schema.optional(Schema.String).pipe(
      T.HttpQuery("responseValueRenderOption"),
    ),
    responseDateTimeRenderOption: Schema.optional(Schema.String).pipe(
      T.HttpQuery("responseDateTimeRenderOption"),
    ),
    range: Schema.String.pipe(T.HttpPath("range")),
    includeValuesInResponse: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("includeValuesInResponse"),
    ),
    spreadsheetId: Schema.String.pipe(T.HttpPath("spreadsheetId")),
    body: Schema.optional(ValueRange).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "v4/spreadsheets/{spreadsheetId}/values/{range}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateSpreadsheetsValuesRequest>;

export type UpdateSpreadsheetsValuesResponse = UpdateValuesResponse;
export const UpdateSpreadsheetsValuesResponse =
  /*@__PURE__*/ /*#__PURE__*/ UpdateValuesResponse;

export type UpdateSpreadsheetsValuesError = DefaultErrors;

/** Sets values in a range of a spreadsheet. The caller must specify the spreadsheet ID, range, and a valueInputOption. */
export const updateSpreadsheetsValues: API.OperationMethod<
  UpdateSpreadsheetsValuesRequest,
  UpdateSpreadsheetsValuesResponse,
  UpdateSpreadsheetsValuesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateSpreadsheetsValuesRequest,
  output: UpdateSpreadsheetsValuesResponse,
  errors: [],
}));

export interface BatchGetSpreadsheetsValuesRequest {
  /** The major dimension that results should use. For example, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`, then requesting `ranges=["A1:B2"],majorDimension=ROWS` returns `[[1,2],[3,4]]`, whereas requesting `ranges=["A1:B2"],majorDimension=COLUMNS` returns `[[1,3],[2,4]]`. */
  majorDimension?: "DIMENSION_UNSPECIFIED" | "ROWS" | "COLUMNS" | (string & {});
  /** How values should be represented in the output. The default render option is ValueRenderOption.FORMATTED_VALUE. */
  valueRenderOption?:
    | "FORMATTED_VALUE"
    | "UNFORMATTED_VALUE"
    | "FORMULA"
    | (string & {});
  /** How dates, times, and durations should be represented in the output. This is ignored if value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER. */
  dateTimeRenderOption?: "SERIAL_NUMBER" | "FORMATTED_STRING" | (string & {});
  /** The [A1 notation or R1C1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell) of the range to retrieve values from. */
  ranges?: string[];
  /** The ID of the spreadsheet to retrieve data from. */
  spreadsheetId: string;
}

export const BatchGetSpreadsheetsValuesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    majorDimension: Schema.optional(Schema.String).pipe(
      T.HttpQuery("majorDimension"),
    ),
    valueRenderOption: Schema.optional(Schema.String).pipe(
      T.HttpQuery("valueRenderOption"),
    ),
    dateTimeRenderOption: Schema.optional(Schema.String).pipe(
      T.HttpQuery("dateTimeRenderOption"),
    ),
    ranges: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("ranges"),
    ),
    spreadsheetId: Schema.String.pipe(T.HttpPath("spreadsheetId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v4/spreadsheets/{spreadsheetId}/values:batchGet",
    }),
    svc,
  ) as unknown as Schema.Schema<BatchGetSpreadsheetsValuesRequest>;

export type BatchGetSpreadsheetsValuesResponse = BatchGetValuesResponse;
export const BatchGetSpreadsheetsValuesResponse =
  /*@__PURE__*/ /*#__PURE__*/ BatchGetValuesResponse;

export type BatchGetSpreadsheetsValuesError = DefaultErrors;

/** Returns one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more ranges. */
export const batchGetSpreadsheetsValues: API.OperationMethod<
  BatchGetSpreadsheetsValuesRequest,
  BatchGetSpreadsheetsValuesResponse,
  BatchGetSpreadsheetsValuesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchGetSpreadsheetsValuesRequest,
  output: BatchGetSpreadsheetsValuesResponse,
  errors: [],
}));

export interface BatchClearSpreadsheetsValuesRequest {
  /** The ID of the spreadsheet to update. */
  spreadsheetId: string;
  /** Request body */
  body?: BatchClearValuesRequest;
}

export const BatchClearSpreadsheetsValuesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    spreadsheetId: Schema.String.pipe(T.HttpPath("spreadsheetId")),
    body: Schema.optional(BatchClearValuesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v4/spreadsheets/{spreadsheetId}/values:batchClear",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchClearSpreadsheetsValuesRequest>;

export type BatchClearSpreadsheetsValuesResponse = BatchClearValuesResponse;
export const BatchClearSpreadsheetsValuesResponse =
  /*@__PURE__*/ /*#__PURE__*/ BatchClearValuesResponse;

export type BatchClearSpreadsheetsValuesError = DefaultErrors;

/** Clears one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more ranges. Only values are cleared -- all other properties of the cell (such as formatting and data validation) are kept. */
export const batchClearSpreadsheetsValues: API.OperationMethod<
  BatchClearSpreadsheetsValuesRequest,
  BatchClearSpreadsheetsValuesResponse,
  BatchClearSpreadsheetsValuesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchClearSpreadsheetsValuesRequest,
  output: BatchClearSpreadsheetsValuesResponse,
  errors: [],
}));

export interface BatchUpdateSpreadsheetsValuesRequest {
  /** The ID of the spreadsheet to update. */
  spreadsheetId: string;
  /** Request body */
  body?: BatchUpdateValuesRequest;
}

export const BatchUpdateSpreadsheetsValuesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    spreadsheetId: Schema.String.pipe(T.HttpPath("spreadsheetId")),
    body: Schema.optional(BatchUpdateValuesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v4/spreadsheets/{spreadsheetId}/values:batchUpdate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchUpdateSpreadsheetsValuesRequest>;

export type BatchUpdateSpreadsheetsValuesResponse = BatchUpdateValuesResponse;
export const BatchUpdateSpreadsheetsValuesResponse =
  /*@__PURE__*/ /*#__PURE__*/ BatchUpdateValuesResponse;

export type BatchUpdateSpreadsheetsValuesError = DefaultErrors;

/** Sets values in one or more ranges of a spreadsheet. The caller must specify the spreadsheet ID, a valueInputOption, and one or more ValueRanges. */
export const batchUpdateSpreadsheetsValues: API.OperationMethod<
  BatchUpdateSpreadsheetsValuesRequest,
  BatchUpdateSpreadsheetsValuesResponse,
  BatchUpdateSpreadsheetsValuesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchUpdateSpreadsheetsValuesRequest,
  output: BatchUpdateSpreadsheetsValuesResponse,
  errors: [],
}));

export interface BatchGetByDataFilterSpreadsheetsValuesRequest {
  /** The ID of the spreadsheet to retrieve data from. */
  spreadsheetId: string;
  /** Request body */
  body?: BatchGetValuesByDataFilterRequest;
}

export const BatchGetByDataFilterSpreadsheetsValuesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    spreadsheetId: Schema.String.pipe(T.HttpPath("spreadsheetId")),
    body: Schema.optional(BatchGetValuesByDataFilterRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v4/spreadsheets/{spreadsheetId}/values:batchGetByDataFilter",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchGetByDataFilterSpreadsheetsValuesRequest>;

export type BatchGetByDataFilterSpreadsheetsValuesResponse =
  BatchGetValuesByDataFilterResponse;
export const BatchGetByDataFilterSpreadsheetsValuesResponse =
  /*@__PURE__*/ /*#__PURE__*/ BatchGetValuesByDataFilterResponse;

export type BatchGetByDataFilterSpreadsheetsValuesError = DefaultErrors;

/** Returns one or more ranges of values that match the specified data filters. For more information, see [Read, write, and search metadata](https://developers.google.com/workspace/sheets/api/guides/metadata). The caller must specify the spreadsheet ID and one or more DataFilters. Ranges that match any of the data filters in the request will be returned. */
export const batchGetByDataFilterSpreadsheetsValues: API.OperationMethod<
  BatchGetByDataFilterSpreadsheetsValuesRequest,
  BatchGetByDataFilterSpreadsheetsValuesResponse,
  BatchGetByDataFilterSpreadsheetsValuesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchGetByDataFilterSpreadsheetsValuesRequest,
  output: BatchGetByDataFilterSpreadsheetsValuesResponse,
  errors: [],
}));

export interface GetSpreadsheetsValuesRequest {
  /** The [A1 notation or R1C1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell) of the range to retrieve values from. */
  range: string;
  /** The major dimension that results should use. For example, if the spreadsheet data in Sheet1 is: `A1=1,B1=2,A2=3,B2=4`, then requesting `range=Sheet1!A1:B2?majorDimension=ROWS` returns `[[1,2],[3,4]]`, whereas requesting `range=Sheet1!A1:B2?majorDimension=COLUMNS` returns `[[1,3],[2,4]]`. */
  majorDimension?: "DIMENSION_UNSPECIFIED" | "ROWS" | "COLUMNS" | (string & {});
  /** How values should be represented in the output. The default render option is FORMATTED_VALUE. */
  valueRenderOption?:
    | "FORMATTED_VALUE"
    | "UNFORMATTED_VALUE"
    | "FORMULA"
    | (string & {});
  /** How dates, times, and durations should be represented in the output. This is ignored if value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER. */
  dateTimeRenderOption?: "SERIAL_NUMBER" | "FORMATTED_STRING" | (string & {});
  /** The ID of the spreadsheet to retrieve data from. */
  spreadsheetId: string;
}

export const GetSpreadsheetsValuesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    range: Schema.String.pipe(T.HttpPath("range")),
    majorDimension: Schema.optional(Schema.String).pipe(
      T.HttpQuery("majorDimension"),
    ),
    valueRenderOption: Schema.optional(Schema.String).pipe(
      T.HttpQuery("valueRenderOption"),
    ),
    dateTimeRenderOption: Schema.optional(Schema.String).pipe(
      T.HttpQuery("dateTimeRenderOption"),
    ),
    spreadsheetId: Schema.String.pipe(T.HttpPath("spreadsheetId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v4/spreadsheets/{spreadsheetId}/values/{range}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetSpreadsheetsValuesRequest>;

export type GetSpreadsheetsValuesResponse = ValueRange;
export const GetSpreadsheetsValuesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ValueRange;

export type GetSpreadsheetsValuesError = DefaultErrors;

/** Returns a range of values from a spreadsheet. The caller must specify the spreadsheet ID and a range. */
export const getSpreadsheetsValues: API.OperationMethod<
  GetSpreadsheetsValuesRequest,
  GetSpreadsheetsValuesResponse,
  GetSpreadsheetsValuesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSpreadsheetsValuesRequest,
  output: GetSpreadsheetsValuesResponse,
  errors: [],
}));

export interface AppendSpreadsheetsValuesRequest {
  /** The ID of the spreadsheet to update. */
  spreadsheetId: string;
  /** The [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell) of a range to search for a logical table of data. Values are appended after the last row of the table. */
  range: string;
  /** Determines if the update response should include the values of the cells that were appended. By default, responses do not include the updated values. */
  includeValuesInResponse?: boolean;
  /** Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER. */
  responseDateTimeRenderOption?:
    | "SERIAL_NUMBER"
    | "FORMATTED_STRING"
    | (string & {});
  /** How the input data should be interpreted. */
  valueInputOption?:
    | "INPUT_VALUE_OPTION_UNSPECIFIED"
    | "RAW"
    | "USER_ENTERED"
    | (string & {});
  /** How the input data should be inserted. */
  insertDataOption?: "OVERWRITE" | "INSERT_ROWS" | (string & {});
  /** Determines how values in the response should be rendered. The default render option is FORMATTED_VALUE. */
  responseValueRenderOption?:
    | "FORMATTED_VALUE"
    | "UNFORMATTED_VALUE"
    | "FORMULA"
    | (string & {});
  /** Request body */
  body?: ValueRange;
}

export const AppendSpreadsheetsValuesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    spreadsheetId: Schema.String.pipe(T.HttpPath("spreadsheetId")),
    range: Schema.String.pipe(T.HttpPath("range")),
    includeValuesInResponse: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("includeValuesInResponse"),
    ),
    responseDateTimeRenderOption: Schema.optional(Schema.String).pipe(
      T.HttpQuery("responseDateTimeRenderOption"),
    ),
    valueInputOption: Schema.optional(Schema.String).pipe(
      T.HttpQuery("valueInputOption"),
    ),
    insertDataOption: Schema.optional(Schema.String).pipe(
      T.HttpQuery("insertDataOption"),
    ),
    responseValueRenderOption: Schema.optional(Schema.String).pipe(
      T.HttpQuery("responseValueRenderOption"),
    ),
    body: Schema.optional(ValueRange).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v4/spreadsheets/{spreadsheetId}/values/{range}:append",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AppendSpreadsheetsValuesRequest>;

export type AppendSpreadsheetsValuesResponse = AppendValuesResponse;
export const AppendSpreadsheetsValuesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AppendValuesResponse;

export type AppendSpreadsheetsValuesError = DefaultErrors;

/** Appends values to a spreadsheet. The input range is used to search for existing data and find a "table" within that range. Values will be appended to the next row of the table, starting with the first column of the table. See the [guide](https://developers.google.com/workspace/sheets/api/guides/values#appending_values) and [sample code](https://developers.google.com/workspace/sheets/api/samples/writing#append_values) for specific details of how tables are detected and data is appended. The caller must specify the spreadsheet ID, range, and a valueInputOption. The `valueInputOption` only controls how the input data will be added to the sheet (column-wise or row-wise), it does not influence what cell the data starts being written to. */
export const appendSpreadsheetsValues: API.OperationMethod<
  AppendSpreadsheetsValuesRequest,
  AppendSpreadsheetsValuesResponse,
  AppendSpreadsheetsValuesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AppendSpreadsheetsValuesRequest,
  output: AppendSpreadsheetsValuesResponse,
  errors: [],
}));

export interface ClearSpreadsheetsValuesRequest {
  /** The ID of the spreadsheet to update. */
  spreadsheetId: string;
  /** The [A1 notation or R1C1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell) of the values to clear. */
  range: string;
  /** Request body */
  body?: ClearValuesRequest;
}

export const ClearSpreadsheetsValuesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    spreadsheetId: Schema.String.pipe(T.HttpPath("spreadsheetId")),
    range: Schema.String.pipe(T.HttpPath("range")),
    body: Schema.optional(ClearValuesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v4/spreadsheets/{spreadsheetId}/values/{range}:clear",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ClearSpreadsheetsValuesRequest>;

export type ClearSpreadsheetsValuesResponse = ClearValuesResponse;
export const ClearSpreadsheetsValuesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ClearValuesResponse;

export type ClearSpreadsheetsValuesError = DefaultErrors;

/** Clears values from a spreadsheet. The caller must specify the spreadsheet ID and range. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc..) are kept. */
export const clearSpreadsheetsValues: API.OperationMethod<
  ClearSpreadsheetsValuesRequest,
  ClearSpreadsheetsValuesResponse,
  ClearSpreadsheetsValuesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ClearSpreadsheetsValuesRequest,
  output: ClearSpreadsheetsValuesResponse,
  errors: [],
}));

export interface BatchUpdateByDataFilterSpreadsheetsValuesRequest {
  /** The ID of the spreadsheet to update. */
  spreadsheetId: string;
  /** Request body */
  body?: BatchUpdateValuesByDataFilterRequest;
}

export const BatchUpdateByDataFilterSpreadsheetsValuesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    spreadsheetId: Schema.String.pipe(T.HttpPath("spreadsheetId")),
    body: Schema.optional(BatchUpdateValuesByDataFilterRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v4/spreadsheets/{spreadsheetId}/values:batchUpdateByDataFilter",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchUpdateByDataFilterSpreadsheetsValuesRequest>;

export type BatchUpdateByDataFilterSpreadsheetsValuesResponse =
  BatchUpdateValuesByDataFilterResponse;
export const BatchUpdateByDataFilterSpreadsheetsValuesResponse =
  /*@__PURE__*/ /*#__PURE__*/ BatchUpdateValuesByDataFilterResponse;

export type BatchUpdateByDataFilterSpreadsheetsValuesError = DefaultErrors;

/** Sets values in one or more ranges of a spreadsheet. For more information, see [Read, write, and search metadata](https://developers.google.com/workspace/sheets/api/guides/metadata). The caller must specify the spreadsheet ID, a valueInputOption, and one or more DataFilterValueRanges. */
export const batchUpdateByDataFilterSpreadsheetsValues: API.OperationMethod<
  BatchUpdateByDataFilterSpreadsheetsValuesRequest,
  BatchUpdateByDataFilterSpreadsheetsValuesResponse,
  BatchUpdateByDataFilterSpreadsheetsValuesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchUpdateByDataFilterSpreadsheetsValuesRequest,
  output: BatchUpdateByDataFilterSpreadsheetsValuesResponse,
  errors: [],
}));

export interface BatchClearByDataFilterSpreadsheetsValuesRequest {
  /** The ID of the spreadsheet to update. */
  spreadsheetId: string;
  /** Request body */
  body?: BatchClearValuesByDataFilterRequest;
}

export const BatchClearByDataFilterSpreadsheetsValuesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    spreadsheetId: Schema.String.pipe(T.HttpPath("spreadsheetId")),
    body: Schema.optional(BatchClearValuesByDataFilterRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v4/spreadsheets/{spreadsheetId}/values:batchClearByDataFilter",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchClearByDataFilterSpreadsheetsValuesRequest>;

export type BatchClearByDataFilterSpreadsheetsValuesResponse =
  BatchClearValuesByDataFilterResponse;
export const BatchClearByDataFilterSpreadsheetsValuesResponse =
  /*@__PURE__*/ /*#__PURE__*/ BatchClearValuesByDataFilterResponse;

export type BatchClearByDataFilterSpreadsheetsValuesError = DefaultErrors;

/** Clears one or more ranges of values from a spreadsheet. For more information, see [Read, write, and search metadata](https://developers.google.com/workspace/sheets/api/guides/metadata). The caller must specify the spreadsheet ID and one or more DataFilters. Ranges matching any of the specified data filters will be cleared. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc.) are kept. */
export const batchClearByDataFilterSpreadsheetsValues: API.OperationMethod<
  BatchClearByDataFilterSpreadsheetsValuesRequest,
  BatchClearByDataFilterSpreadsheetsValuesResponse,
  BatchClearByDataFilterSpreadsheetsValuesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchClearByDataFilterSpreadsheetsValuesRequest,
  output: BatchClearByDataFilterSpreadsheetsValuesResponse,
  errors: [],
}));

export interface GetSpreadsheetsDeveloperMetadataRequest {
  /** The ID of the developer metadata to retrieve. */
  metadataId: number;
  /** The ID of the spreadsheet to retrieve metadata from. */
  spreadsheetId: string;
}

export const GetSpreadsheetsDeveloperMetadataRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadataId: Schema.Number.pipe(T.HttpPath("metadataId")),
    spreadsheetId: Schema.String.pipe(T.HttpPath("spreadsheetId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v4/spreadsheets/{spreadsheetId}/developerMetadata/{metadataId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetSpreadsheetsDeveloperMetadataRequest>;

export type GetSpreadsheetsDeveloperMetadataResponse = DeveloperMetadata;
export const GetSpreadsheetsDeveloperMetadataResponse =
  /*@__PURE__*/ /*#__PURE__*/ DeveloperMetadata;

export type GetSpreadsheetsDeveloperMetadataError = DefaultErrors;

/** Returns the developer metadata with the specified ID. The caller must specify the spreadsheet ID and the developer metadata's unique metadataId. For more information, see [Read, write, and search metadata](https://developers.google.com/workspace/sheets/api/guides/metadata). */
export const getSpreadsheetsDeveloperMetadata: API.OperationMethod<
  GetSpreadsheetsDeveloperMetadataRequest,
  GetSpreadsheetsDeveloperMetadataResponse,
  GetSpreadsheetsDeveloperMetadataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSpreadsheetsDeveloperMetadataRequest,
  output: GetSpreadsheetsDeveloperMetadataResponse,
  errors: [],
}));

export interface SearchSpreadsheetsDeveloperMetadataRequest {
  /** The ID of the spreadsheet to retrieve metadata from. */
  spreadsheetId: string;
  /** Request body */
  body?: SearchDeveloperMetadataRequest;
}

export const SearchSpreadsheetsDeveloperMetadataRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    spreadsheetId: Schema.String.pipe(T.HttpPath("spreadsheetId")),
    body: Schema.optional(SearchDeveloperMetadataRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v4/spreadsheets/{spreadsheetId}/developerMetadata:search",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SearchSpreadsheetsDeveloperMetadataRequest>;

export type SearchSpreadsheetsDeveloperMetadataResponse =
  SearchDeveloperMetadataResponse;
export const SearchSpreadsheetsDeveloperMetadataResponse =
  /*@__PURE__*/ /*#__PURE__*/ SearchDeveloperMetadataResponse;

export type SearchSpreadsheetsDeveloperMetadataError = DefaultErrors;

/** Returns all developer metadata matching the specified DataFilter. For more information, see [Read, write, and search metadata](https://developers.google.com/workspace/sheets/api/guides/metadata). If the provided DataFilter represents a DeveloperMetadataLookup object, this will return all DeveloperMetadata entries selected by it. If the DataFilter represents a location in a spreadsheet, this will return all developer metadata associated with locations intersecting that region. */
export const searchSpreadsheetsDeveloperMetadata: API.OperationMethod<
  SearchSpreadsheetsDeveloperMetadataRequest,
  SearchSpreadsheetsDeveloperMetadataResponse,
  SearchSpreadsheetsDeveloperMetadataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SearchSpreadsheetsDeveloperMetadataRequest,
  output: SearchSpreadsheetsDeveloperMetadataResponse,
  errors: [],
}));

export interface CopyToSpreadsheetsSheetsRequest {
  /** The ID of the spreadsheet containing the sheet to copy. */
  spreadsheetId: string;
  /** The ID of the sheet to copy. */
  sheetId: number;
  /** Request body */
  body?: CopySheetToAnotherSpreadsheetRequest;
}

export const CopyToSpreadsheetsSheetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    spreadsheetId: Schema.String.pipe(T.HttpPath("spreadsheetId")),
    sheetId: Schema.Number.pipe(T.HttpPath("sheetId")),
    body: Schema.optional(CopySheetToAnotherSpreadsheetRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v4/spreadsheets/{spreadsheetId}/sheets/{sheetId}:copyTo",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CopyToSpreadsheetsSheetsRequest>;

export type CopyToSpreadsheetsSheetsResponse = SheetProperties;
export const CopyToSpreadsheetsSheetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SheetProperties;

export type CopyToSpreadsheetsSheetsError = DefaultErrors;

/** Copies a single sheet from a spreadsheet to another spreadsheet. Returns the properties of the newly created sheet. */
export const copyToSpreadsheetsSheets: API.OperationMethod<
  CopyToSpreadsheetsSheetsRequest,
  CopyToSpreadsheetsSheetsResponse,
  CopyToSpreadsheetsSheetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CopyToSpreadsheetsSheetsRequest,
  output: CopyToSpreadsheetsSheetsResponse,
  errors: [],
}));
