// ==========================================================================
// Google Docs API (docs v1)
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
  name: "docs",
  version: "v1",
  rootUrl: "https://docs.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface SheetsChartReference {
  /** The ID of the Google Sheets spreadsheet that contains the source chart. */
  spreadsheetId?: string;
  /** The ID of the specific chart in the Google Sheets spreadsheet that's embedded. */
  chartId?: number;
}

export const SheetsChartReference = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  spreadsheetId: Schema.optional(Schema.String),
  chartId: Schema.optional(Schema.Number),
}).annotate({ identifier: "SheetsChartReference" });

export interface LinkedContentReference {
  /** A reference to the linked chart. */
  sheetsChartReference?: SheetsChartReference;
}

export const LinkedContentReference = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    sheetsChartReference: Schema.optional(SheetsChartReference),
  },
).annotate({ identifier: "LinkedContentReference" });

export interface Range {
  /** The zero-based start index of this range, in UTF-16 code units. In all current uses, a start index must be provided. This field is an Int32Value in order to accommodate future use cases with open-ended ranges. */
  startIndex?: number;
  /** The zero-based end index of this range, exclusive, in UTF-16 code units. In all current uses, an end index must be provided. This field is an Int32Value in order to accommodate future use cases with open-ended ranges. */
  endIndex?: number;
  /** The tab that contains this range. When omitted, the request applies to the first tab. In a document containing a single tab: - If provided, must match the singular tab's ID. - If omitted, the request applies to the singular tab. In a document containing multiple tabs: - If provided, the request applies to the specified tab. - If omitted, the request applies to the first tab in the document. */
  tabId?: string;
  /** The ID of the header, footer, or footnote that this range is contained in. An empty segment ID signifies the document's body. */
  segmentId?: string;
}

export const Range = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  startIndex: Schema.optional(Schema.Number),
  endIndex: Schema.optional(Schema.Number),
  tabId: Schema.optional(Schema.String),
  segmentId: Schema.optional(Schema.String),
}).annotate({ identifier: "Range" });

export interface DeleteParagraphBulletsRequest {
  /** The range to delete bullets from. */
  range?: Range;
}

export const DeleteParagraphBulletsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    range: Schema.optional(Range),
  }).annotate({ identifier: "DeleteParagraphBulletsRequest" });

export interface Location {
  /** The zero-based index, in UTF-16 code units. The index is relative to the beginning of the segment specified by segment_id. */
  index?: number;
  /** The ID of the header, footer or footnote the location is in. An empty segment ID signifies the document's body. */
  segmentId?: string;
  /** The tab that the location is in. When omitted, the request is applied to the first tab. In a document containing a single tab: - If provided, must match the singular tab's ID. - If omitted, the request applies to the singular tab. In a document containing multiple tabs: - If provided, the request applies to the specified tab. - If omitted, the request applies to the first tab in the document. */
  tabId?: string;
}

export const Location = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  index: Schema.optional(Schema.Number),
  segmentId: Schema.optional(Schema.String),
  tabId: Schema.optional(Schema.String),
}).annotate({ identifier: "Location" });

export interface CreateFooterRequest {
  /** The type of footer to create. */
  type?: "HEADER_FOOTER_TYPE_UNSPECIFIED" | "DEFAULT" | (string & {});
  /** The location of the SectionBreak immediately preceding the section whose SectionStyle this footer should belong to. If this is unset or refers to the first section break in the document, the footer applies to the document style. */
  sectionBreakLocation?: Location;
}

export const CreateFooterRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
  sectionBreakLocation: Schema.optional(Location),
}).annotate({ identifier: "CreateFooterRequest" });

export interface CreateFootnoteResponse {
  /** The ID of the created footnote. */
  footnoteId?: string;
}

export const CreateFootnoteResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    footnoteId: Schema.optional(Schema.String),
  },
).annotate({ identifier: "CreateFootnoteResponse" });

export interface Dimension {
  /** The units for magnitude. */
  unit?: "UNIT_UNSPECIFIED" | "PT" | (string & {});
  /** The magnitude. */
  magnitude?: number;
}

export const Dimension = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  unit: Schema.optional(Schema.String),
  magnitude: Schema.optional(Schema.Number),
}).annotate({ identifier: "Dimension" });

export interface TableRowStyle {
  /** Whether the row is a table header. */
  tableHeader?: boolean;
  /** Whether the row cannot overflow across page or column boundaries. */
  preventOverflow?: boolean;
  /** The minimum height of the row. The row will be rendered in the Docs editor at a height equal to or greater than this value in order to show all the content in the row's cells. */
  minRowHeight?: Dimension;
}

export const TableRowStyle = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tableHeader: Schema.optional(Schema.Boolean),
  preventOverflow: Schema.optional(Schema.Boolean),
  minRowHeight: Schema.optional(Dimension),
}).annotate({ identifier: "TableRowStyle" });

export interface TableRowStyleSuggestionState {
  /** Indicates if there was a suggested change to min_row_height. */
  minRowHeightSuggested?: boolean;
}

export const TableRowStyleSuggestionState =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minRowHeightSuggested: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "TableRowStyleSuggestionState" });

export interface SuggestedTableRowStyle {
  /** A TableRowStyle that only includes the changes made in this suggestion. This can be used along with the table_row_style_suggestion_state to see which fields have changed and their new values. */
  tableRowStyle?: TableRowStyle;
  /** A mask that indicates which of the fields on the base TableRowStyle have been changed in this suggestion. */
  tableRowStyleSuggestionState?: TableRowStyleSuggestionState;
}

export const SuggestedTableRowStyle = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    tableRowStyle: Schema.optional(TableRowStyle),
    tableRowStyleSuggestionState: Schema.optional(TableRowStyleSuggestionState),
  },
).annotate({ identifier: "SuggestedTableRowStyle" });

export interface RgbColor {
  /** The blue component of the color, from 0.0 to 1.0. */
  blue?: number;
  /** The red component of the color, from 0.0 to 1.0. */
  red?: number;
  /** The green component of the color, from 0.0 to 1.0. */
  green?: number;
}

export const RgbColor = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  blue: Schema.optional(Schema.Number),
  red: Schema.optional(Schema.Number),
  green: Schema.optional(Schema.Number),
}).annotate({ identifier: "RgbColor" });

export interface Color {
  /** The RGB color value. */
  rgbColor?: RgbColor;
}

export const Color = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  rgbColor: Schema.optional(RgbColor),
}).annotate({ identifier: "Color" });

export interface OptionalColor {
  /** If set, this will be used as an opaque color. If unset, this represents a transparent color. */
  color?: Color;
}

export const OptionalColor = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  color: Schema.optional(Color),
}).annotate({ identifier: "OptionalColor" });

export interface TableCellBorder {
  /** The color of the border. This color cannot be transparent. */
  color?: OptionalColor;
  /** The width of the border. */
  width?: Dimension;
  /** The dash style of the border. */
  dashStyle?:
    | "DASH_STYLE_UNSPECIFIED"
    | "SOLID"
    | "DOT"
    | "DASH"
    | (string & {});
}

export const TableCellBorder = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  color: Schema.optional(OptionalColor),
  width: Schema.optional(Dimension),
  dashStyle: Schema.optional(Schema.String),
}).annotate({ identifier: "TableCellBorder" });

export interface TableCellStyle {
  /** The top border of the cell. */
  borderTop?: TableCellBorder;
  /** The right padding of the cell. */
  paddingRight?: Dimension;
  /** The left border of the cell. */
  borderLeft?: TableCellBorder;
  /** The right border of the cell. */
  borderRight?: TableCellBorder;
  /** The column span of the cell. This property is read-only. */
  columnSpan?: number;
  /** The background color of the cell. */
  backgroundColor?: OptionalColor;
  /** The row span of the cell. This property is read-only. */
  rowSpan?: number;
  /** The bottom padding of the cell. */
  paddingBottom?: Dimension;
  /** The top padding of the cell. */
  paddingTop?: Dimension;
  /** The left padding of the cell. */
  paddingLeft?: Dimension;
  /** The alignment of the content in the table cell. The default alignment matches the alignment for newly created table cells in the Docs editor. */
  contentAlignment?:
    | "CONTENT_ALIGNMENT_UNSPECIFIED"
    | "CONTENT_ALIGNMENT_UNSUPPORTED"
    | "TOP"
    | "MIDDLE"
    | "BOTTOM"
    | (string & {});
  /** The bottom border of the cell. */
  borderBottom?: TableCellBorder;
}

export const TableCellStyle = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  borderTop: Schema.optional(TableCellBorder),
  paddingRight: Schema.optional(Dimension),
  borderLeft: Schema.optional(TableCellBorder),
  borderRight: Schema.optional(TableCellBorder),
  columnSpan: Schema.optional(Schema.Number),
  backgroundColor: Schema.optional(OptionalColor),
  rowSpan: Schema.optional(Schema.Number),
  paddingBottom: Schema.optional(Dimension),
  paddingTop: Schema.optional(Dimension),
  paddingLeft: Schema.optional(Dimension),
  contentAlignment: Schema.optional(Schema.String),
  borderBottom: Schema.optional(TableCellBorder),
}).annotate({ identifier: "TableCellStyle" });

export interface TableCellStyleSuggestionState {
  /** Indicates if there was a suggested change to padding_top. */
  paddingTopSuggested?: boolean;
  /** Indicates if there was a suggested change to padding_right. */
  paddingRightSuggested?: boolean;
  /** Indicates if there was a suggested change to border_right. */
  borderRightSuggested?: boolean;
  /** Indicates if there was a suggested change to content_alignment. */
  contentAlignmentSuggested?: boolean;
  /** Indicates if there was a suggested change to column_span. */
  columnSpanSuggested?: boolean;
  /** Indicates if there was a suggested change to padding_left. */
  paddingLeftSuggested?: boolean;
  /** Indicates if there was a suggested change to border_top. */
  borderTopSuggested?: boolean;
  /** Indicates if there was a suggested change to row_span. */
  rowSpanSuggested?: boolean;
  /** Indicates if there was a suggested change to background_color. */
  backgroundColorSuggested?: boolean;
  /** Indicates if there was a suggested change to border_left. */
  borderLeftSuggested?: boolean;
  /** Indicates if there was a suggested change to border_bottom. */
  borderBottomSuggested?: boolean;
  /** Indicates if there was a suggested change to padding_bottom. */
  paddingBottomSuggested?: boolean;
}

export const TableCellStyleSuggestionState =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    paddingTopSuggested: Schema.optional(Schema.Boolean),
    paddingRightSuggested: Schema.optional(Schema.Boolean),
    borderRightSuggested: Schema.optional(Schema.Boolean),
    contentAlignmentSuggested: Schema.optional(Schema.Boolean),
    columnSpanSuggested: Schema.optional(Schema.Boolean),
    paddingLeftSuggested: Schema.optional(Schema.Boolean),
    borderTopSuggested: Schema.optional(Schema.Boolean),
    rowSpanSuggested: Schema.optional(Schema.Boolean),
    backgroundColorSuggested: Schema.optional(Schema.Boolean),
    borderLeftSuggested: Schema.optional(Schema.Boolean),
    borderBottomSuggested: Schema.optional(Schema.Boolean),
    paddingBottomSuggested: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "TableCellStyleSuggestionState" });

export interface SuggestedTableCellStyle {
  /** A TableCellStyle that only includes the changes made in this suggestion. This can be used along with the table_cell_style_suggestion_state to see which fields have changed and their new values. */
  tableCellStyle?: TableCellStyle;
  /** A mask that indicates which of the fields on the base TableCellStyle have been changed in this suggestion. */
  tableCellStyleSuggestionState?: TableCellStyleSuggestionState;
}

export const SuggestedTableCellStyle =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tableCellStyle: Schema.optional(TableCellStyle),
    tableCellStyleSuggestionState: Schema.optional(
      TableCellStyleSuggestionState,
    ),
  }).annotate({ identifier: "SuggestedTableCellStyle" });

export interface TableCell {
  /** The suggested insertion IDs. A TableCell may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion. */
  suggestedInsertionIds?: ReadonlyArray<string>;
  /** The style of the cell. */
  tableCellStyle?: TableCellStyle;
  /** The suggested deletion IDs. If empty, then there are no suggested deletions of this content. */
  suggestedDeletionIds?: ReadonlyArray<string>;
  /** The zero-based end index of this cell, exclusive, in UTF-16 code units. */
  endIndex?: number;
  /** The suggested changes to the table cell style, keyed by suggestion ID. */
  suggestedTableCellStyleChanges?: Record<string, SuggestedTableCellStyle>;
  /** The zero-based start index of this cell, in UTF-16 code units. */
  startIndex?: number;
  /** The content of the cell. */
  content?: ReadonlyArray<StructuralElement>;
}

export const TableCell: Schema.Schema<TableCell> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      suggestedInsertionIds: Schema.optional(Schema.Array(Schema.String)),
      tableCellStyle: Schema.optional(TableCellStyle),
      suggestedDeletionIds: Schema.optional(Schema.Array(Schema.String)),
      endIndex: Schema.optional(Schema.Number),
      suggestedTableCellStyleChanges: Schema.optional(
        Schema.Record(Schema.String, SuggestedTableCellStyle),
      ),
      startIndex: Schema.optional(Schema.Number),
      content: Schema.optional(Schema.Array(StructuralElement)),
    }),
  ).annotate({ identifier: "TableCell" }) as any as Schema.Schema<TableCell>;

export interface TableRow {
  /** The suggested insertion IDs. A TableRow may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion. */
  suggestedInsertionIds?: ReadonlyArray<string>;
  /** The zero-based end index of this row, exclusive, in UTF-16 code units. */
  endIndex?: number;
  /** The suggested deletion IDs. If empty, then there are no suggested deletions of this content. */
  suggestedDeletionIds?: ReadonlyArray<string>;
  /** The suggested style changes to this row, keyed by suggestion ID. */
  suggestedTableRowStyleChanges?: Record<string, SuggestedTableRowStyle>;
  /** The zero-based start index of this row, in UTF-16 code units. */
  startIndex?: number;
  /** The contents and style of each cell in this row. It's possible for a table to be non-rectangular, so some rows may have a different number of cells than other rows in the same table. */
  tableCells?: ReadonlyArray<TableCell>;
  /** The style of the table row. */
  tableRowStyle?: TableRowStyle;
}

export const TableRow: Schema.Schema<TableRow> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      suggestedInsertionIds: Schema.optional(Schema.Array(Schema.String)),
      endIndex: Schema.optional(Schema.Number),
      suggestedDeletionIds: Schema.optional(Schema.Array(Schema.String)),
      suggestedTableRowStyleChanges: Schema.optional(
        Schema.Record(Schema.String, SuggestedTableRowStyle),
      ),
      startIndex: Schema.optional(Schema.Number),
      tableCells: Schema.optional(Schema.Array(TableCell)),
      tableRowStyle: Schema.optional(TableRowStyle),
    }),
  ).annotate({ identifier: "TableRow" }) as any as Schema.Schema<TableRow>;

export interface TableColumnProperties {
  /** The width type of the column. */
  widthType?:
    | "WIDTH_TYPE_UNSPECIFIED"
    | "EVENLY_DISTRIBUTED"
    | "FIXED_WIDTH"
    | (string & {});
  /** The width of the column. Set when the column's `width_type` is FIXED_WIDTH. */
  width?: Dimension;
}

export const TableColumnProperties = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  widthType: Schema.optional(Schema.String),
  width: Schema.optional(Dimension),
}).annotate({ identifier: "TableColumnProperties" });

export interface TableStyle {
  /** The properties of each column. Note that in Docs, tables contain rows and rows contain cells, similar to HTML. So the properties for a row can be found on the row's table_row_style. */
  tableColumnProperties?: ReadonlyArray<TableColumnProperties>;
}

export const TableStyle = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tableColumnProperties: Schema.optional(Schema.Array(TableColumnProperties)),
}).annotate({ identifier: "TableStyle" });

export interface Table {
  /** The contents and style of each row. */
  tableRows?: ReadonlyArray<TableRow>;
  /** The suggested insertion IDs. A Table may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion. */
  suggestedInsertionIds?: ReadonlyArray<string>;
  /** The style of the table. */
  tableStyle?: TableStyle;
  /** The suggested deletion IDs. If empty, then there are no suggested deletions of this content. */
  suggestedDeletionIds?: ReadonlyArray<string>;
  /** Number of rows in the table. */
  rows?: number;
  /** Number of columns in the table. It's possible for a table to be non-rectangular, so some rows may have a different number of cells. */
  columns?: number;
}

export const Table: Schema.Schema<Table> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      tableRows: Schema.optional(Schema.Array(TableRow)),
      suggestedInsertionIds: Schema.optional(Schema.Array(Schema.String)),
      tableStyle: Schema.optional(TableStyle),
      suggestedDeletionIds: Schema.optional(Schema.Array(Schema.String)),
      rows: Schema.optional(Schema.Number),
      columns: Schema.optional(Schema.Number),
    }),
  ).annotate({ identifier: "Table" }) as any as Schema.Schema<Table>;

export interface SectionColumnProperties {
  /** Output only. The width of the column. */
  width?: Dimension;
  /** The padding at the end of the column. */
  paddingEnd?: Dimension;
}

export const SectionColumnProperties =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    width: Schema.optional(Dimension),
    paddingEnd: Schema.optional(Dimension),
  }).annotate({ identifier: "SectionColumnProperties" });

export interface SectionStyle {
  /** The right page margin of the section. If unset, the value defaults to margin_right from DocumentStyle. Updating the right margin causes columns in this section to resize. Since the margin affects column width, it's applied before column properties. If DocumentMode is PAGELESS, this property will not be rendered. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error. */
  marginRight?: Dimension;
  /** The page number from which to start counting the number of pages for this section. If unset, page numbering continues from the previous section. If the value is unset in the first SectionBreak, refer to DocumentStyle's page_number_start. If DocumentMode is PAGELESS, this property will not be rendered. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error. */
  pageNumberStart?: number;
  /** The bottom page margin of the section. If unset, the value defaults to margin_bottom from DocumentStyle. If DocumentMode is PAGELESS, this property will not be rendered. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error. */
  marginBottom?: Dimension;
  /** The ID of the default footer. If unset, the value inherits from the previous SectionBreak's SectionStyle. If the value is unset in the first SectionBreak, it inherits from DocumentStyle's default_footer_id. If DocumentMode is PAGELESS, this property will not be rendered. This property is read-only. */
  defaultFooterId?: string;
  /** The content direction of this section. If unset, the value defaults to LEFT_TO_RIGHT. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error. */
  contentDirection?:
    | "CONTENT_DIRECTION_UNSPECIFIED"
    | "LEFT_TO_RIGHT"
    | "RIGHT_TO_LEFT"
    | (string & {});
  /** The left page margin of the section. If unset, the value defaults to margin_left from DocumentStyle. Updating the left margin causes columns in this section to resize. Since the margin affects column width, it's applied before column properties. If DocumentMode is PAGELESS, this property will not be rendered. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error. */
  marginLeft?: Dimension;
  /** The header margin of the section. If unset, the value defaults to margin_header from DocumentStyle. If updated, use_custom_header_footer_margins is set to true on DocumentStyle. The value of use_custom_header_footer_margins on DocumentStyle indicates if a header margin is being respected for this section. If DocumentMode is PAGELESS, this property will not be rendered. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error. */
  marginHeader?: Dimension;
  /** The ID of the header used only for the first page of the section. If use_first_page_header_footer is true, this value is used for the header on the first page of the section. If it's false, the header on the first page of the section uses the default_header_id. If unset, the value inherits from the previous SectionBreak's SectionStyle. If the value is unset in the first SectionBreak, it inherits from DocumentStyle's first_page_header_id. If DocumentMode is PAGELESS, this property will not be rendered. This property is read-only. */
  firstPageHeaderId?: string;
  /** The style of column separators. This style can be set even when there's one column in the section. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error. */
  columnSeparatorStyle?:
    | "COLUMN_SEPARATOR_STYLE_UNSPECIFIED"
    | "NONE"
    | "BETWEEN_EACH_COLUMN"
    | (string & {});
  /** The ID of the header used only for even pages. If the value of DocumentStyle's use_even_page_header_footer is true, this value is used for the headers on even pages in the section. If it is false, the headers on even pages use the default_header_id. If unset, the value inherits from the previous SectionBreak's SectionStyle. If the value is unset in the first SectionBreak, it inherits from DocumentStyle's even_page_header_id. If DocumentMode is PAGELESS, this property will not be rendered. This property is read-only. */
  evenPageHeaderId?: string;
  /** The ID of the footer used only for even pages. If the value of DocumentStyle's use_even_page_header_footer is true, this value is used for the footers on even pages in the section. If it is false, the footers on even pages use the default_footer_id. If unset, the value inherits from the previous SectionBreak's SectionStyle. If the value is unset in the first SectionBreak, it inherits from DocumentStyle's even_page_footer_id. If DocumentMode is PAGELESS, this property will not be rendered. This property is read-only. */
  evenPageFooterId?: string;
  /** The section's columns properties. If empty, the section contains one column with the default properties in the Docs editor. A section can be updated to have no more than 3 columns. When updating this property, setting a concrete value is required. Unsetting this property will result in a 400 bad request error. */
  columnProperties?: ReadonlyArray<SectionColumnProperties>;
  /** The footer margin of the section. If unset, the value defaults to margin_footer from DocumentStyle. If updated, use_custom_header_footer_margins is set to true on DocumentStyle. The value of use_custom_header_footer_margins on DocumentStyle indicates if a footer margin is being respected for this section If DocumentMode is PAGELESS, this property will not be rendered. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error. */
  marginFooter?: Dimension;
  /** Output only. The type of section. */
  sectionType?:
    | "SECTION_TYPE_UNSPECIFIED"
    | "CONTINUOUS"
    | "NEXT_PAGE"
    | (string & {});
  /** The top page margin of the section. If unset, the value defaults to margin_top from DocumentStyle. If DocumentMode is PAGELESS, this property will not be rendered. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error. */
  marginTop?: Dimension;
  /** The ID of the default header. If unset, the value inherits from the previous SectionBreak's SectionStyle. If the value is unset in the first SectionBreak, it inherits from DocumentStyle's default_header_id. If DocumentMode is PAGELESS, this property will not be rendered. This property is read-only. */
  defaultHeaderId?: string;
  /** Optional. Indicates whether to flip the dimensions of DocumentStyle's page_size for this section, which allows changing the page orientation between portrait and landscape. If unset, the value inherits from DocumentStyle's flip_page_orientation. If DocumentMode is PAGELESS, this property will not be rendered. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error. */
  flipPageOrientation?: boolean;
  /** The ID of the footer used only for the first page of the section. If use_first_page_header_footer is true, this value is used for the footer on the first page of the section. If it's false, the footer on the first page of the section uses the default_footer_id. If unset, the value inherits from the previous SectionBreak's SectionStyle. If the value is unset in the first SectionBreak, it inherits from DocumentStyle's first_page_footer_id. If DocumentMode is PAGELESS, this property will not be rendered. This property is read-only. */
  firstPageFooterId?: string;
  /** Indicates whether to use the first page header / footer IDs for the first page of the section. If unset, it inherits from DocumentStyle's use_first_page_header_footer for the first section. If the value is unset for subsequent sectors, it should be interpreted as false. If DocumentMode is PAGELESS, this property will not be rendered. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error. */
  useFirstPageHeaderFooter?: boolean;
}

export const SectionStyle = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  marginRight: Schema.optional(Dimension),
  pageNumberStart: Schema.optional(Schema.Number),
  marginBottom: Schema.optional(Dimension),
  defaultFooterId: Schema.optional(Schema.String),
  contentDirection: Schema.optional(Schema.String),
  marginLeft: Schema.optional(Dimension),
  marginHeader: Schema.optional(Dimension),
  firstPageHeaderId: Schema.optional(Schema.String),
  columnSeparatorStyle: Schema.optional(Schema.String),
  evenPageHeaderId: Schema.optional(Schema.String),
  evenPageFooterId: Schema.optional(Schema.String),
  columnProperties: Schema.optional(Schema.Array(SectionColumnProperties)),
  marginFooter: Schema.optional(Dimension),
  sectionType: Schema.optional(Schema.String),
  marginTop: Schema.optional(Dimension),
  defaultHeaderId: Schema.optional(Schema.String),
  flipPageOrientation: Schema.optional(Schema.Boolean),
  firstPageFooterId: Schema.optional(Schema.String),
  useFirstPageHeaderFooter: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "SectionStyle" });

export interface SectionBreak {
  /** The suggested insertion IDs. A SectionBreak may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion. */
  suggestedInsertionIds?: ReadonlyArray<string>;
  /** The suggested deletion IDs. If empty, then there are no suggested deletions of this content. */
  suggestedDeletionIds?: ReadonlyArray<string>;
  /** The style of the section after this section break. */
  sectionStyle?: SectionStyle;
}

export const SectionBreak = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  suggestedInsertionIds: Schema.optional(Schema.Array(Schema.String)),
  suggestedDeletionIds: Schema.optional(Schema.Array(Schema.String)),
  sectionStyle: Schema.optional(SectionStyle),
}).annotate({ identifier: "SectionBreak" });

export interface WeightedFontFamily {
  /** The font family of the text. The font family can be any font from the Font menu in Docs or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`. */
  fontFamily?: string;
  /** The weight of the font. This field can have any value that's a multiple of `100` between `100` and `900`, inclusive. This range corresponds to the numerical values described in the CSS 2.1 Specification, [section 15.6](https://www.w3.org/TR/CSS21/fonts.html#font-boldness), with non-numerical values disallowed. The default value is `400` ("normal"). The font weight makes up just one component of the rendered font weight. A combination of the `weight` and the text style's resolved `bold` value determine the rendered weight, after accounting for inheritance: * If the text is bold and the weight is less than `400`, the rendered weight is 400. * If the text is bold and the weight is greater than or equal to `400` but is less than `700`, the rendered weight is `700`. * If the weight is greater than or equal to `700`, the rendered weight is equal to the weight. * If the text is not bold, the rendered weight is equal to the weight. */
  weight?: number;
}

export const WeightedFontFamily = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fontFamily: Schema.optional(Schema.String),
  weight: Schema.optional(Schema.Number),
}).annotate({ identifier: "WeightedFontFamily" });

export interface BookmarkLink {
  /** The ID of a bookmark in this document. */
  id?: string;
  /** The ID of the tab containing this bookmark. */
  tabId?: string;
}

export const BookmarkLink = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  tabId: Schema.optional(Schema.String),
}).annotate({ identifier: "BookmarkLink" });

export interface HeadingLink {
  /** The ID of the tab containing this heading. */
  tabId?: string;
  /** The ID of a heading in this document. */
  id?: string;
}

export const HeadingLink = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tabId: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
}).annotate({ identifier: "HeadingLink" });

export interface Link {
  /** A bookmark in this document. In documents containing a single tab, links to bookmarks within the singular tab continue to return Link.bookmarkId when the includeTabsContent parameter is set to `false` or unset. Otherwise, this field is returned. */
  bookmark?: BookmarkLink;
  /** An external URL. */
  url?: string;
  /** The ID of a heading in this document. Legacy field: Instead, set includeTabsContent to `true` and use Link.heading for read and write operations. This field is only returned when includeTabsContent is set to `false` in documents containing a single tab and links to a heading within the singular tab. Otherwise, Link.heading is returned. If this field is used in a write request, the heading is considered to be from the tab ID specified in the request. If a tab ID is not specified in the request, it is considered to be from the first tab in the document. */
  headingId?: string;
  /** The ID of a tab in this document. */
  tabId?: string;
  /** A heading in this document. In documents containing a single tab, links to headings within the singular tab continue to return Link.headingId when the includeTabsContent parameter is set to `false` or unset. Otherwise, this field is returned. */
  heading?: HeadingLink;
  /** The ID of a bookmark in this document. Legacy field: Instead, set includeTabsContent to `true` and use Link.bookmark for read and write operations. This field is only returned when includeTabsContent is set to `false` in documents containing a single tab and links to a bookmark within the singular tab. Otherwise, Link.bookmark is returned. If this field is used in a write request, the bookmark is considered to be from the tab ID specified in the request. If a tab ID is not specified in the request, it is considered to be from the first tab in the document. */
  bookmarkId?: string;
}

export const Link = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  bookmark: Schema.optional(BookmarkLink),
  url: Schema.optional(Schema.String),
  headingId: Schema.optional(Schema.String),
  tabId: Schema.optional(Schema.String),
  heading: Schema.optional(HeadingLink),
  bookmarkId: Schema.optional(Schema.String),
}).annotate({ identifier: "Link" });

export interface TextStyle {
  /** The font family and rendered weight of the text. If an update request specifies values for both `weighted_font_family` and `bold`, the `weighted_font_family` is applied first, then `bold`. If `weighted_font_family#weight` is not set, it defaults to `400`. If `weighted_font_family` is set, then `weighted_font_family#font_family` must also be set with a non-empty value. Otherwise, a 400 bad request error is returned. */
  weightedFontFamily?: WeightedFontFamily;
  /** Whether or not the text is rendered as bold. */
  bold?: boolean;
  /** Whether or not the text is italicized. */
  italic?: boolean;
  /** The background color of the text. If set, the color is either an RGB color or transparent, depending on the `color` field. */
  backgroundColor?: OptionalColor;
  /** Whether or not the text is struck through. */
  strikethrough?: boolean;
  /** Whether or not the text is in small capital letters. */
  smallCaps?: boolean;
  /** The hyperlink destination of the text. If unset, there's no link. Links are not inherited from parent text. Changing the link in an update request causes some other changes to the text style of the range: * When setting a link, the text foreground color will be updated to the default link color and the text will be underlined. If these fields are modified in the same request, those values will be used instead of the link defaults. * Setting a link on a text range that overlaps with an existing link will also update the existing link to point to the new URL. * Links are not settable on newline characters. As a result, setting a link on a text range that crosses a paragraph boundary, such as `"ABC\n123"`, will separate the newline character(s) into their own text runs. The link will be applied separately to the runs before and after the newline. * Removing a link will update the text style of the range to match the style of the preceding text (or the default text styles if the preceding text is another link) unless different styles are being set in the same request. */
  link?: Link;
  /** The foreground color of the text. If set, the color is either an RGB color or transparent, depending on the `color` field. */
  foregroundColor?: OptionalColor;
  /** Whether or not the text is underlined. */
  underline?: boolean;
  /** The size of the text's font. */
  fontSize?: Dimension;
  /** The text's vertical offset from its normal position. Text with `SUPERSCRIPT` or `SUBSCRIPT` baseline offsets is automatically rendered in a smaller font size, computed based on the `font_size` field. Changes in this field don't affect the `font_size`. */
  baselineOffset?:
    | "BASELINE_OFFSET_UNSPECIFIED"
    | "NONE"
    | "SUPERSCRIPT"
    | "SUBSCRIPT"
    | (string & {});
}

export const TextStyle = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  weightedFontFamily: Schema.optional(WeightedFontFamily),
  bold: Schema.optional(Schema.Boolean),
  italic: Schema.optional(Schema.Boolean),
  backgroundColor: Schema.optional(OptionalColor),
  strikethrough: Schema.optional(Schema.Boolean),
  smallCaps: Schema.optional(Schema.Boolean),
  link: Schema.optional(Link),
  foregroundColor: Schema.optional(OptionalColor),
  underline: Schema.optional(Schema.Boolean),
  fontSize: Schema.optional(Dimension),
  baselineOffset: Schema.optional(Schema.String),
}).annotate({ identifier: "TextStyle" });

export interface Bullet {
  /** The ID of the list this paragraph belongs to. */
  listId?: string;
  /** The nesting level of this paragraph in the list. */
  nestingLevel?: number;
  /** The paragraph-specific text style applied to this bullet. */
  textStyle?: TextStyle;
}

export const Bullet = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  listId: Schema.optional(Schema.String),
  nestingLevel: Schema.optional(Schema.Number),
  textStyle: Schema.optional(TextStyle),
}).annotate({ identifier: "Bullet" });

export interface TextStyleSuggestionState {
  /** Indicates if there was a suggested change to foreground_color. */
  foregroundColorSuggested?: boolean;
  /** Indicates if there was a suggested change to link. */
  linkSuggested?: boolean;
  /** Indicates if there was a suggested change to italic. */
  italicSuggested?: boolean;
  /** Indicates if there was a suggested change to weighted_font_family. */
  weightedFontFamilySuggested?: boolean;
  /** Indicates if there was a suggested change to baseline_offset. */
  baselineOffsetSuggested?: boolean;
  /** Indicates if there was a suggested change to font_size. */
  fontSizeSuggested?: boolean;
  /** Indicates if there was a suggested change to bold. */
  boldSuggested?: boolean;
  /** Indicates if there was a suggested change to background_color. */
  backgroundColorSuggested?: boolean;
  /** Indicates if there was a suggested change to strikethrough. */
  strikethroughSuggested?: boolean;
  /** Indicates if there was a suggested change to small_caps. */
  smallCapsSuggested?: boolean;
  /** Indicates if there was a suggested change to underline. */
  underlineSuggested?: boolean;
}

export const TextStyleSuggestionState =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    foregroundColorSuggested: Schema.optional(Schema.Boolean),
    linkSuggested: Schema.optional(Schema.Boolean),
    italicSuggested: Schema.optional(Schema.Boolean),
    weightedFontFamilySuggested: Schema.optional(Schema.Boolean),
    baselineOffsetSuggested: Schema.optional(Schema.Boolean),
    fontSizeSuggested: Schema.optional(Schema.Boolean),
    boldSuggested: Schema.optional(Schema.Boolean),
    backgroundColorSuggested: Schema.optional(Schema.Boolean),
    strikethroughSuggested: Schema.optional(Schema.Boolean),
    smallCapsSuggested: Schema.optional(Schema.Boolean),
    underlineSuggested: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "TextStyleSuggestionState" });

export interface BulletSuggestionState {
  /** Indicates if there was a suggested change to the nesting_level. */
  nestingLevelSuggested?: boolean;
  /** A mask that indicates which of the fields in text style have been changed in this suggestion. */
  textStyleSuggestionState?: TextStyleSuggestionState;
  /** Indicates if there was a suggested change to the list_id. */
  listIdSuggested?: boolean;
}

export const BulletSuggestionState = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nestingLevelSuggested: Schema.optional(Schema.Boolean),
  textStyleSuggestionState: Schema.optional(TextStyleSuggestionState),
  listIdSuggested: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "BulletSuggestionState" });

export interface SuggestedBullet {
  /** A Bullet that only includes the changes made in this suggestion. This can be used along with the bullet_suggestion_state to see which fields have changed and their new values. */
  bullet?: Bullet;
  /** A mask that indicates which of the fields on the base Bullet have been changed in this suggestion. */
  bulletSuggestionState?: BulletSuggestionState;
}

export const SuggestedBullet = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  bullet: Schema.optional(Bullet),
  bulletSuggestionState: Schema.optional(BulletSuggestionState),
}).annotate({ identifier: "SuggestedBullet" });

export interface SuggestedTextStyle {
  /** A TextStyle that only includes the changes made in this suggestion. This can be used along with the text_style_suggestion_state to see which fields have changed and their new values. */
  textStyle?: TextStyle;
  /** A mask that indicates which of the fields on the base TextStyle have been changed in this suggestion. */
  textStyleSuggestionState?: TextStyleSuggestionState;
}

export const SuggestedTextStyle = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  textStyle: Schema.optional(TextStyle),
  textStyleSuggestionState: Schema.optional(TextStyleSuggestionState),
}).annotate({ identifier: "SuggestedTextStyle" });

export interface ColumnBreak {
  /** The suggested insertion IDs. A ColumnBreak may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion. */
  suggestedInsertionIds?: ReadonlyArray<string>;
  /** The text style of this ColumnBreak. Similar to text content, like text runs and footnote references, the text style of a column break can affect content layout as well as the styling of text inserted next to it. */
  textStyle?: TextStyle;
  /** The suggested text style changes to this ColumnBreak, keyed by suggestion ID. */
  suggestedTextStyleChanges?: Record<string, SuggestedTextStyle>;
  /** The suggested deletion IDs. If empty, then there are no suggested deletions of this content. */
  suggestedDeletionIds?: ReadonlyArray<string>;
}

export const ColumnBreak = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  suggestedInsertionIds: Schema.optional(Schema.Array(Schema.String)),
  textStyle: Schema.optional(TextStyle),
  suggestedTextStyleChanges: Schema.optional(
    Schema.Record(Schema.String, SuggestedTextStyle),
  ),
  suggestedDeletionIds: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "ColumnBreak" });

export interface TextRun {
  /** The suggested text style changes to this run, keyed by suggestion ID. */
  suggestedTextStyleChanges?: Record<string, SuggestedTextStyle>;
  /** The suggested insertion IDs. A TextRun may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion. */
  suggestedInsertionIds?: ReadonlyArray<string>;
  /** The text style of this run. */
  textStyle?: TextStyle;
  /** The suggested deletion IDs. If empty, then there are no suggested deletions of this content. */
  suggestedDeletionIds?: ReadonlyArray<string>;
  /** The text of this run. Any non-text elements in the run are replaced with the Unicode character U+E907. */
  content?: string;
}

export const TextRun = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  suggestedTextStyleChanges: Schema.optional(
    Schema.Record(Schema.String, SuggestedTextStyle),
  ),
  suggestedInsertionIds: Schema.optional(Schema.Array(Schema.String)),
  textStyle: Schema.optional(TextStyle),
  suggestedDeletionIds: Schema.optional(Schema.Array(Schema.String)),
  content: Schema.optional(Schema.String),
}).annotate({ identifier: "TextRun" });

export interface Equation {
  /** The suggested insertion IDs. An Equation may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion. */
  suggestedInsertionIds?: ReadonlyArray<string>;
  /** The suggested deletion IDs. If empty, then there are no suggested deletions of this content. */
  suggestedDeletionIds?: ReadonlyArray<string>;
}

export const Equation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  suggestedInsertionIds: Schema.optional(Schema.Array(Schema.String)),
  suggestedDeletionIds: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "Equation" });

export interface FootnoteReference {
  /** The text style of this FootnoteReference. */
  textStyle?: TextStyle;
  /** The suggested deletion IDs. If empty, then there are no suggested deletions of this content. */
  suggestedDeletionIds?: ReadonlyArray<string>;
  /** The rendered number of this footnote. */
  footnoteNumber?: string;
  /** The suggested text style changes to this FootnoteReference, keyed by suggestion ID. */
  suggestedTextStyleChanges?: Record<string, SuggestedTextStyle>;
  /** The ID of the footnote that contains the content of this footnote reference. */
  footnoteId?: string;
  /** The suggested insertion IDs. A FootnoteReference may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion. */
  suggestedInsertionIds?: ReadonlyArray<string>;
}

export const FootnoteReference = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  textStyle: Schema.optional(TextStyle),
  suggestedDeletionIds: Schema.optional(Schema.Array(Schema.String)),
  footnoteNumber: Schema.optional(Schema.String),
  suggestedTextStyleChanges: Schema.optional(
    Schema.Record(Schema.String, SuggestedTextStyle),
  ),
  footnoteId: Schema.optional(Schema.String),
  suggestedInsertionIds: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "FootnoteReference" });

export interface InlineObjectElement {
  /** The suggested insertion IDs. An InlineObjectElement may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion. */
  suggestedInsertionIds?: ReadonlyArray<string>;
  /** The suggested text style changes to this InlineObject, keyed by suggestion ID. */
  suggestedTextStyleChanges?: Record<string, SuggestedTextStyle>;
  /** The ID of the InlineObject this element contains. */
  inlineObjectId?: string;
  /** The suggested deletion IDs. If empty, then there are no suggested deletions of this content. */
  suggestedDeletionIds?: ReadonlyArray<string>;
  /** The text style of this InlineObjectElement. Similar to text content, like text runs and footnote references, the text style of an inline object element can affect content layout as well as the styling of text inserted next to it. */
  textStyle?: TextStyle;
}

export const InlineObjectElement = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  suggestedInsertionIds: Schema.optional(Schema.Array(Schema.String)),
  suggestedTextStyleChanges: Schema.optional(
    Schema.Record(Schema.String, SuggestedTextStyle),
  ),
  inlineObjectId: Schema.optional(Schema.String),
  suggestedDeletionIds: Schema.optional(Schema.Array(Schema.String)),
  textStyle: Schema.optional(TextStyle),
}).annotate({ identifier: "InlineObjectElement" });

export interface RichLinkProperties {
  /** The URI to the RichLink. This is always present. */
  uri?: string;
  /** The title of the RichLink as displayed in the link. This title matches the title of the linked resource at the time of the insertion or last update of the link. This field is always present. */
  title?: string;
  /** The [MIME type](https://developers.google.com/drive/api/v3/mime-types) of the RichLink, if there's one (for example, when it's a file in Drive). */
  mimeType?: string;
}

export const RichLinkProperties = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  uri: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
  mimeType: Schema.optional(Schema.String),
}).annotate({ identifier: "RichLinkProperties" });

export interface RichLink {
  /** IDs for suggestions that remove this link from the document. A RichLink might have multiple deletion IDs if, for example, multiple users suggest deleting it. If empty, then this person link isn't suggested for deletion. */
  suggestedDeletionIds?: ReadonlyArray<string>;
  /** The text style of this RichLink. */
  textStyle?: TextStyle;
  /** Output only. The properties of this RichLink. This field is always present. */
  richLinkProperties?: RichLinkProperties;
  /** The suggested text style changes to this RichLink, keyed by suggestion ID. */
  suggestedTextStyleChanges?: Record<string, SuggestedTextStyle>;
  /** Output only. The ID of this link. */
  richLinkId?: string;
  /** IDs for suggestions that insert this link into the document. A RichLink might have multiple insertion IDs if it's a nested suggested change (a suggestion within a suggestion made by a different user, for example). If empty, then this person link isn't a suggested insertion. */
  suggestedInsertionIds?: ReadonlyArray<string>;
}

export const RichLink = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  suggestedDeletionIds: Schema.optional(Schema.Array(Schema.String)),
  textStyle: Schema.optional(TextStyle),
  richLinkProperties: Schema.optional(RichLinkProperties),
  suggestedTextStyleChanges: Schema.optional(
    Schema.Record(Schema.String, SuggestedTextStyle),
  ),
  richLinkId: Schema.optional(Schema.String),
  suggestedInsertionIds: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "RichLink" });

export interface PersonProperties {
  /** The email address linked to this Person. This field is always present. */
  email?: string;
  /** The name of the person if it's displayed in the link text instead of the person's email address. */
  name?: string;
}

export const PersonProperties = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  email: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
}).annotate({ identifier: "PersonProperties" });

export interface Person {
  /** The text style of this Person. */
  textStyle?: TextStyle;
  /** Output only. The unique ID of this link. */
  personId?: string;
  /** IDs for suggestions that remove this person link from the document. A Person might have multiple deletion IDs if, for example, multiple users suggest deleting it. If empty, then this person link isn't suggested for deletion. */
  suggestedDeletionIds?: ReadonlyArray<string>;
  /** Output only. The properties of this Person. This field is always present. */
  personProperties?: PersonProperties;
  /** The suggested text style changes to this Person, keyed by suggestion ID. */
  suggestedTextStyleChanges?: Record<string, SuggestedTextStyle>;
  /** IDs for suggestions that insert this person link into the document. A Person might have multiple insertion IDs if it's a nested suggested change (a suggestion within a suggestion made by a different user, for example). If empty, then this person link isn't a suggested insertion. */
  suggestedInsertionIds?: ReadonlyArray<string>;
}

export const Person = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  textStyle: Schema.optional(TextStyle),
  personId: Schema.optional(Schema.String),
  suggestedDeletionIds: Schema.optional(Schema.Array(Schema.String)),
  personProperties: Schema.optional(PersonProperties),
  suggestedTextStyleChanges: Schema.optional(
    Schema.Record(Schema.String, SuggestedTextStyle),
  ),
  suggestedInsertionIds: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "Person" });

export interface DateElementProperties {
  /** The time zone of the DateElement, as defined by the Unicode Common Locale Data Repository (CLDR) project. For example, `America/New_York`. If unset, the default time zone is `etc/UTC`. */
  timeZoneId?: string;
  /** Determines how the time part of the DateElement will be displayed in the document. If unset, the default value is TIME_FORMAT_DISABLED, indicating no time should be shown. */
  timeFormat?:
    | "TIME_FORMAT_UNSPECIFIED"
    | "TIME_FORMAT_DISABLED"
    | "TIME_FORMAT_HOUR_MINUTE"
    | "TIME_FORMAT_HOUR_MINUTE_TIMEZONE"
    | (string & {});
  /** Output only. Indicates how the DateElement is displayed in the document. */
  displayText?: string;
  /** The language code of the DateElement. For example, `en`. If unset, the default locale is `en`. Limited to the following locales: `af`, `am`, `ar`, `as`, `az`, `be`, `bg`, `bn`, `ca`, `cs`, `da`, `de`, `el`, `en`, `en-CA`, `en-GB`, `es`, `es-419`, `et`, `eu`, `fa`, `fi`, `fil`, `fr`, `fr-CA`, `gl`, `gu`, `hi`, `hr`, `hu`, `hy`, `id`, `is`, `it`, `iw`, `ja`, `ka`, `kk`, `km`, `kn`, `ko`, `lo`, `lt`, `lv`, `mk`, `ml`, `mn`, `mr`, `ms`, `ne`, `nl`, `no`, `or`, `pa`, `pl`, `pt-BR`, `pt-PT`, `ro`, `ru`, `si`, `sk`, `sl`, `sq`, `sr`, `sv`, `sw`, `ta`, `te`, `th`, `tr`, `uk`, `ur`, `uz`, `vi`, `zh-CN`, `zh-HK`, `zh-TW`, `zu`, `cy`, `my`. */
  locale?: string;
  /** Determines how the date part of the DateElement will be displayed in the document. If unset, the default value is DATE_FORMAT_MONTH_DAY_YEAR_ABBREVIATED, indicating the DateElement will be formatted as `MMM d, y` in `en`, or locale specific equivalent. */
  dateFormat?:
    | "DATE_FORMAT_UNSPECIFIED"
    | "DATE_FORMAT_CUSTOM"
    | "DATE_FORMAT_MONTH_DAY_ABBREVIATED"
    | "DATE_FORMAT_MONTH_DAY_FULL"
    | "DATE_FORMAT_MONTH_DAY_YEAR_ABBREVIATED"
    | "DATE_FORMAT_ISO8601"
    | (string & {});
  /** The point in time to represent, in seconds and nanoseconds since Unix epoch: January 1, 1970 at midnight UTC. Timestamp is expected to be in UTC. If time_zone_id is set, the timestamp is adjusted according to the time zone. For example, a timestamp of `18000` with a date format of `DATE_FORMAT_ISO8601` and time format of `TIME_FORMAT_HOUR_MINUTE` would be displayed as `1970-01-01 5:00 AM`. A timestamp of `18000` with date format of `DATE_FORMAT_ISO8601`, time format of `TIME_FORMAT_HOUR_MINUTE`, and time zone set to `America/New_York` will instead be `1970-01-01 12:00 AM`. */
  timestamp?: string;
}

export const DateElementProperties = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  timeZoneId: Schema.optional(Schema.String),
  timeFormat: Schema.optional(Schema.String),
  displayText: Schema.optional(Schema.String),
  locale: Schema.optional(Schema.String),
  dateFormat: Schema.optional(Schema.String),
  timestamp: Schema.optional(Schema.String),
}).annotate({ identifier: "DateElementProperties" });

export interface DateElementPropertiesSuggestionState {
  /** Indicates if there was a suggested change to date_format. */
  dateFormatSuggested?: boolean;
  /** Indicates if there was a suggested change to locale. */
  localeSuggested?: boolean;
  /** Indicates if there was a suggested change to timestamp. */
  timestampSuggested?: boolean;
  /** Indicates if there was a suggested change to time_zone_id. */
  timeZoneIdSuggested?: boolean;
  /** Indicates if there was a suggested change to time_format. */
  timeFormatSuggested?: boolean;
}

export const DateElementPropertiesSuggestionState =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dateFormatSuggested: Schema.optional(Schema.Boolean),
    localeSuggested: Schema.optional(Schema.Boolean),
    timestampSuggested: Schema.optional(Schema.Boolean),
    timeZoneIdSuggested: Schema.optional(Schema.Boolean),
    timeFormatSuggested: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DateElementPropertiesSuggestionState" });

export interface SuggestedDateElementProperties {
  /** DateElementProperties that only includes the changes made in this suggestion. This can be used along with the date_element_properties_suggestion_state to see which fields have changed and their new values. */
  dateElementProperties?: DateElementProperties;
  /** A mask that indicates which of the fields on the base DateElementProperties have been changed in this suggestion. */
  dateElementPropertiesSuggestionState?: DateElementPropertiesSuggestionState;
}

export const SuggestedDateElementProperties =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dateElementProperties: Schema.optional(DateElementProperties),
    dateElementPropertiesSuggestionState: Schema.optional(
      DateElementPropertiesSuggestionState,
    ),
  }).annotate({ identifier: "SuggestedDateElementProperties" });

export interface DateElement {
  /** IDs for suggestions that insert this date into the document. A DateElement might have multiple insertion IDs if it's a nested suggested change (a suggestion within a suggestion made by a different user, for example). If empty, then this date isn't a suggested insertion. */
  suggestedInsertionIds?: ReadonlyArray<string>;
  /** The properties of this DateElement. */
  dateElementProperties?: DateElementProperties;
  /** Output only. The unique ID of this date. */
  dateId?: string;
  /** The suggested text style changes to this DateElement, keyed by suggestion ID. */
  suggestedTextStyleChanges?: Record<string, SuggestedTextStyle>;
  /** The text style of this DateElement. */
  textStyle?: TextStyle;
  /** The suggested changes to the date element properties, keyed by suggestion ID. */
  suggestedDateElementPropertiesChanges?: Record<
    string,
    SuggestedDateElementProperties
  >;
  /** IDs for suggestions that remove this date from the document. A DateElement might have multiple deletion IDs if, for example, multiple users suggest deleting it. If empty, then this date isn't suggested for deletion. */
  suggestedDeletionIds?: ReadonlyArray<string>;
}

export const DateElement = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  suggestedInsertionIds: Schema.optional(Schema.Array(Schema.String)),
  dateElementProperties: Schema.optional(DateElementProperties),
  dateId: Schema.optional(Schema.String),
  suggestedTextStyleChanges: Schema.optional(
    Schema.Record(Schema.String, SuggestedTextStyle),
  ),
  textStyle: Schema.optional(TextStyle),
  suggestedDateElementPropertiesChanges: Schema.optional(
    Schema.Record(Schema.String, SuggestedDateElementProperties),
  ),
  suggestedDeletionIds: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "DateElement" });

export interface AutoText {
  /** The text style of this AutoText. */
  textStyle?: TextStyle;
  /** The suggested deletion IDs. If empty, then there are no suggested deletions of this content. */
  suggestedDeletionIds?: ReadonlyArray<string>;
  /** The type of this auto text. */
  type?: "TYPE_UNSPECIFIED" | "PAGE_NUMBER" | "PAGE_COUNT" | (string & {});
  /** The suggested text style changes to this AutoText, keyed by suggestion ID. */
  suggestedTextStyleChanges?: Record<string, SuggestedTextStyle>;
  /** The suggested insertion IDs. An AutoText may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion. */
  suggestedInsertionIds?: ReadonlyArray<string>;
}

export const AutoText = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  textStyle: Schema.optional(TextStyle),
  suggestedDeletionIds: Schema.optional(Schema.Array(Schema.String)),
  type: Schema.optional(Schema.String),
  suggestedTextStyleChanges: Schema.optional(
    Schema.Record(Schema.String, SuggestedTextStyle),
  ),
  suggestedInsertionIds: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "AutoText" });

export interface HorizontalRule {
  /** The suggested insertion IDs. A HorizontalRule may have multiple insertion IDs if it is a nested suggested change. If empty, then this is not a suggested insertion. */
  suggestedInsertionIds?: ReadonlyArray<string>;
  /** The suggested deletion IDs. If empty, then there are no suggested deletions of this content. */
  suggestedDeletionIds?: ReadonlyArray<string>;
  /** The text style of this HorizontalRule. Similar to text content, like text runs and footnote references, the text style of a horizontal rule can affect content layout as well as the styling of text inserted next to it. */
  textStyle?: TextStyle;
  /** The suggested text style changes to this HorizontalRule, keyed by suggestion ID. */
  suggestedTextStyleChanges?: Record<string, SuggestedTextStyle>;
}

export const HorizontalRule = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  suggestedInsertionIds: Schema.optional(Schema.Array(Schema.String)),
  suggestedDeletionIds: Schema.optional(Schema.Array(Schema.String)),
  textStyle: Schema.optional(TextStyle),
  suggestedTextStyleChanges: Schema.optional(
    Schema.Record(Schema.String, SuggestedTextStyle),
  ),
}).annotate({ identifier: "HorizontalRule" });

export interface PageBreak {
  /** The suggested deletion IDs. If empty, then there are no suggested deletions of this content. */
  suggestedDeletionIds?: ReadonlyArray<string>;
  /** The text style of this PageBreak. Similar to text content, like text runs and footnote references, the text style of a page break can affect content layout as well as the styling of text inserted next to it. */
  textStyle?: TextStyle;
  /** The suggested text style changes to this PageBreak, keyed by suggestion ID. */
  suggestedTextStyleChanges?: Record<string, SuggestedTextStyle>;
  /** The suggested insertion IDs. A PageBreak may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion. */
  suggestedInsertionIds?: ReadonlyArray<string>;
}

export const PageBreak = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  suggestedDeletionIds: Schema.optional(Schema.Array(Schema.String)),
  textStyle: Schema.optional(TextStyle),
  suggestedTextStyleChanges: Schema.optional(
    Schema.Record(Schema.String, SuggestedTextStyle),
  ),
  suggestedInsertionIds: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "PageBreak" });

export interface ParagraphElement {
  /** A column break paragraph element. */
  columnBreak?: ColumnBreak;
  /** A text run paragraph element. */
  textRun?: TextRun;
  /** An equation paragraph element. */
  equation?: Equation;
  /** A footnote reference paragraph element. */
  footnoteReference?: FootnoteReference;
  /** An inline object paragraph element. */
  inlineObjectElement?: InlineObjectElement;
  /** A paragraph element that links to a Google resource (such as a file in Google Drive, a YouTube video, or a Calendar event.) */
  richLink?: RichLink;
  /** The zero-based start index of this paragraph element, in UTF-16 code units. */
  startIndex?: number;
  /** A paragraph element that links to a person or email address. */
  person?: Person;
  /** A paragraph element that represents a date. */
  dateElement?: DateElement;
  /** An auto text paragraph element. */
  autoText?: AutoText;
  /** A horizontal rule paragraph element. */
  horizontalRule?: HorizontalRule;
  /** The zero-base end index of this paragraph element, exclusive, in UTF-16 code units. */
  endIndex?: number;
  /** A page break paragraph element. */
  pageBreak?: PageBreak;
}

export const ParagraphElement = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  columnBreak: Schema.optional(ColumnBreak),
  textRun: Schema.optional(TextRun),
  equation: Schema.optional(Equation),
  footnoteReference: Schema.optional(FootnoteReference),
  inlineObjectElement: Schema.optional(InlineObjectElement),
  richLink: Schema.optional(RichLink),
  startIndex: Schema.optional(Schema.Number),
  person: Schema.optional(Person),
  dateElement: Schema.optional(DateElement),
  autoText: Schema.optional(AutoText),
  horizontalRule: Schema.optional(HorizontalRule),
  endIndex: Schema.optional(Schema.Number),
  pageBreak: Schema.optional(PageBreak),
}).annotate({ identifier: "ParagraphElement" });

export interface ParagraphBorder {
  /** The width of the border. */
  width?: Dimension;
  /** The dash style of the border. */
  dashStyle?:
    | "DASH_STYLE_UNSPECIFIED"
    | "SOLID"
    | "DOT"
    | "DASH"
    | (string & {});
  /** The padding of the border. */
  padding?: Dimension;
  /** The color of the border. */
  color?: OptionalColor;
}

export const ParagraphBorder = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  width: Schema.optional(Dimension),
  dashStyle: Schema.optional(Schema.String),
  padding: Schema.optional(Dimension),
  color: Schema.optional(OptionalColor),
}).annotate({ identifier: "ParagraphBorder" });

export interface TabStop {
  /** The offset between this tab stop and the start margin. */
  offset?: Dimension;
  /** The alignment of this tab stop. If unset, the value defaults to START. */
  alignment?:
    | "TAB_STOP_ALIGNMENT_UNSPECIFIED"
    | "START"
    | "CENTER"
    | "END"
    | (string & {});
}

export const TabStop = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  offset: Schema.optional(Dimension),
  alignment: Schema.optional(Schema.String),
}).annotate({ identifier: "TabStop" });

export interface Shading {
  /** The background color of this paragraph shading. */
  backgroundColor?: OptionalColor;
}

export const Shading = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  backgroundColor: Schema.optional(OptionalColor),
}).annotate({ identifier: "Shading" });

export interface ParagraphStyle {
  /** The heading ID of the paragraph. If empty, then this paragraph is not a heading. This property is read-only. */
  headingId?: string;
  /** The named style type of the paragraph. Since updating the named style type affects other properties within ParagraphStyle, the named style type is applied before the other properties are updated. */
  namedStyleType?:
    | "NAMED_STYLE_TYPE_UNSPECIFIED"
    | "NORMAL_TEXT"
    | "TITLE"
    | "SUBTITLE"
    | "HEADING_1"
    | "HEADING_2"
    | "HEADING_3"
    | "HEADING_4"
    | "HEADING_5"
    | "HEADING_6"
    | (string & {});
  /** The spacing mode for the paragraph. */
  spacingMode?:
    | "SPACING_MODE_UNSPECIFIED"
    | "NEVER_COLLAPSE"
    | "COLLAPSE_LISTS"
    | (string & {});
  /** The amount of extra space below the paragraph. If unset, the value is inherited from the parent. */
  spaceBelow?: Dimension;
  /** The border between this paragraph and the next and previous paragraphs. If unset, the value is inherited from the parent. The between border is rendered when the adjacent paragraph has the same border and indent properties. Paragraph borders cannot be partially updated. When changing a paragraph border, the new border must be specified in its entirety. */
  borderBetween?: ParagraphBorder;
  /** The amount of indentation for the paragraph on the side that corresponds to the start of the text, based on the current paragraph direction. If unset, the value is inherited from the parent. */
  indentStart?: Dimension;
  /** Whether the current paragraph should always start at the beginning of a page. If unset, the value is inherited from the parent. Attempting to update page_break_before for paragraphs in unsupported regions, including Table, Header, Footer and Footnote, can result in an invalid document state that returns a 400 bad request error. */
  pageBreakBefore?: boolean;
  /** The border to the right of this paragraph. If unset, the value is inherited from the parent. Paragraph borders cannot be partially updated. When changing a paragraph border, the new border must be specified in its entirety. */
  borderRight?: ParagraphBorder;
  /** Whether at least a part of this paragraph should be laid out on the same page or column as the next paragraph if possible. If unset, the value is inherited from the parent. */
  keepWithNext?: boolean;
  /** The amount of space between lines, as a percentage of normal, where normal is represented as 100.0. If unset, the value is inherited from the parent. */
  lineSpacing?: number;
  /** The amount of indentation for the paragraph on the side that corresponds to the end of the text, based on the current paragraph direction. If unset, the value is inherited from the parent. */
  indentEnd?: Dimension;
  /** Whether to avoid widows and orphans for the paragraph. If unset, the value is inherited from the parent. */
  avoidWidowAndOrphan?: boolean;
  /** The text direction of this paragraph. If unset, the value defaults to LEFT_TO_RIGHT since paragraph direction is not inherited. */
  direction?:
    | "CONTENT_DIRECTION_UNSPECIFIED"
    | "LEFT_TO_RIGHT"
    | "RIGHT_TO_LEFT"
    | (string & {});
  /** The amount of extra space above the paragraph. If unset, the value is inherited from the parent. */
  spaceAbove?: Dimension;
  /** A list of the tab stops for this paragraph. The list of tab stops is not inherited. This property is read-only. */
  tabStops?: ReadonlyArray<TabStop>;
  /** The border at the top of this paragraph. If unset, the value is inherited from the parent. The top border is rendered when the paragraph above has different border and indent properties. Paragraph borders cannot be partially updated. When changing a paragraph border, the new border must be specified in its entirety. */
  borderTop?: ParagraphBorder;
  /** The shading of the paragraph. If unset, the value is inherited from the parent. */
  shading?: Shading;
  /** The border to the left of this paragraph. If unset, the value is inherited from the parent. Paragraph borders cannot be partially updated. When changing a paragraph border, the new border must be specified in its entirety. */
  borderLeft?: ParagraphBorder;
  /** The amount of indentation for the first line of the paragraph. If unset, the value is inherited from the parent. */
  indentFirstLine?: Dimension;
  /** The border at the bottom of this paragraph. If unset, the value is inherited from the parent. The bottom border is rendered when the paragraph below has different border and indent properties. Paragraph borders cannot be partially updated. When changing a paragraph border, the new border must be specified in its entirety. */
  borderBottom?: ParagraphBorder;
  /** The text alignment for this paragraph. */
  alignment?:
    | "ALIGNMENT_UNSPECIFIED"
    | "START"
    | "CENTER"
    | "END"
    | "JUSTIFIED"
    | (string & {});
  /** Whether all lines of the paragraph should be laid out on the same page or column if possible. If unset, the value is inherited from the parent. */
  keepLinesTogether?: boolean;
}

export const ParagraphStyle = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  headingId: Schema.optional(Schema.String),
  namedStyleType: Schema.optional(Schema.String),
  spacingMode: Schema.optional(Schema.String),
  spaceBelow: Schema.optional(Dimension),
  borderBetween: Schema.optional(ParagraphBorder),
  indentStart: Schema.optional(Dimension),
  pageBreakBefore: Schema.optional(Schema.Boolean),
  borderRight: Schema.optional(ParagraphBorder),
  keepWithNext: Schema.optional(Schema.Boolean),
  lineSpacing: Schema.optional(Schema.Number),
  indentEnd: Schema.optional(Dimension),
  avoidWidowAndOrphan: Schema.optional(Schema.Boolean),
  direction: Schema.optional(Schema.String),
  spaceAbove: Schema.optional(Dimension),
  tabStops: Schema.optional(Schema.Array(TabStop)),
  borderTop: Schema.optional(ParagraphBorder),
  shading: Schema.optional(Shading),
  borderLeft: Schema.optional(ParagraphBorder),
  indentFirstLine: Schema.optional(Dimension),
  borderBottom: Schema.optional(ParagraphBorder),
  alignment: Schema.optional(Schema.String),
  keepLinesTogether: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "ParagraphStyle" });

export interface ShadingSuggestionState {
  /** Indicates if there was a suggested change to the Shading. */
  backgroundColorSuggested?: boolean;
}

export const ShadingSuggestionState = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    backgroundColorSuggested: Schema.optional(Schema.Boolean),
  },
).annotate({ identifier: "ShadingSuggestionState" });

export interface ParagraphStyleSuggestionState {
  /** Indicates if there was a suggested change to indent_start. */
  indentStartSuggested?: boolean;
  /** Indicates if there was a suggested change to border_bottom. */
  borderBottomSuggested?: boolean;
  /** Indicates if there was a suggested change to indent_end. */
  indentEndSuggested?: boolean;
  /** Indicates if there was a suggested change to spacing_mode. */
  spacingModeSuggested?: boolean;
  /** Indicates if there was a suggested change to indent_first_line. */
  indentFirstLineSuggested?: boolean;
  /** Indicates if there was a suggested change to space_below. */
  spaceBelowSuggested?: boolean;
  /** Indicates if there was a suggested change to line_spacing. */
  lineSpacingSuggested?: boolean;
  /** Indicates if there was a suggested change to heading_id. */
  headingIdSuggested?: boolean;
  /** Indicates if there was a suggested change to border_right. */
  borderRightSuggested?: boolean;
  /** Indicates if there was a suggested change to page_break_before. */
  pageBreakBeforeSuggested?: boolean;
  /** A mask that indicates which of the fields in shading have been changed in this suggestion. */
  shadingSuggestionState?: ShadingSuggestionState;
  /** Indicates if there was a suggested change to alignment. */
  alignmentSuggested?: boolean;
  /** Indicates if there was a suggested change to direction. */
  directionSuggested?: boolean;
  /** Indicates if there was a suggested change to border_left. */
  borderLeftSuggested?: boolean;
  /** Indicates if there was a suggested change to keep_lines_together. */
  keepLinesTogetherSuggested?: boolean;
  /** Indicates if there was a suggested change to border_top. */
  borderTopSuggested?: boolean;
  /** Indicates if there was a suggested change to keep_with_next. */
  keepWithNextSuggested?: boolean;
  /** Indicates if there was a suggested change to space_above. */
  spaceAboveSuggested?: boolean;
  /** Indicates if there was a suggested change to border_between. */
  borderBetweenSuggested?: boolean;
  /** Indicates if there was a suggested change to avoid_widow_and_orphan. */
  avoidWidowAndOrphanSuggested?: boolean;
  /** Indicates if there was a suggested change to named_style_type. */
  namedStyleTypeSuggested?: boolean;
}

export const ParagraphStyleSuggestionState =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    indentStartSuggested: Schema.optional(Schema.Boolean),
    borderBottomSuggested: Schema.optional(Schema.Boolean),
    indentEndSuggested: Schema.optional(Schema.Boolean),
    spacingModeSuggested: Schema.optional(Schema.Boolean),
    indentFirstLineSuggested: Schema.optional(Schema.Boolean),
    spaceBelowSuggested: Schema.optional(Schema.Boolean),
    lineSpacingSuggested: Schema.optional(Schema.Boolean),
    headingIdSuggested: Schema.optional(Schema.Boolean),
    borderRightSuggested: Schema.optional(Schema.Boolean),
    pageBreakBeforeSuggested: Schema.optional(Schema.Boolean),
    shadingSuggestionState: Schema.optional(ShadingSuggestionState),
    alignmentSuggested: Schema.optional(Schema.Boolean),
    directionSuggested: Schema.optional(Schema.Boolean),
    borderLeftSuggested: Schema.optional(Schema.Boolean),
    keepLinesTogetherSuggested: Schema.optional(Schema.Boolean),
    borderTopSuggested: Schema.optional(Schema.Boolean),
    keepWithNextSuggested: Schema.optional(Schema.Boolean),
    spaceAboveSuggested: Schema.optional(Schema.Boolean),
    borderBetweenSuggested: Schema.optional(Schema.Boolean),
    avoidWidowAndOrphanSuggested: Schema.optional(Schema.Boolean),
    namedStyleTypeSuggested: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ParagraphStyleSuggestionState" });

export interface SuggestedParagraphStyle {
  /** A ParagraphStyle that only includes the changes made in this suggestion. This can be used along with the paragraph_style_suggestion_state to see which fields have changed and their new values. */
  paragraphStyle?: ParagraphStyle;
  /** A mask that indicates which of the fields on the base ParagraphStyle have been changed in this suggestion. */
  paragraphStyleSuggestionState?: ParagraphStyleSuggestionState;
}

export const SuggestedParagraphStyle =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    paragraphStyle: Schema.optional(ParagraphStyle),
    paragraphStyleSuggestionState: Schema.optional(
      ParagraphStyleSuggestionState,
    ),
  }).annotate({ identifier: "SuggestedParagraphStyle" });

export interface ObjectReferences {
  /** The object IDs. */
  objectIds?: ReadonlyArray<string>;
}

export const ObjectReferences = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  objectIds: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "ObjectReferences" });

export interface Paragraph {
  /** The bullet for this paragraph. If not present, the paragraph does not belong to a list. */
  bullet?: Bullet;
  /** The suggested changes to this paragraph's bullet. */
  suggestedBulletChanges?: Record<string, SuggestedBullet>;
  /** The content of the paragraph, broken down into its component parts. */
  elements?: ReadonlyArray<ParagraphElement>;
  /** The suggested paragraph style changes to this paragraph, keyed by suggestion ID. */
  suggestedParagraphStyleChanges?: Record<string, SuggestedParagraphStyle>;
  /** The style of this paragraph. */
  paragraphStyle?: ParagraphStyle;
  /** The IDs of the positioned objects tethered to this paragraph. */
  positionedObjectIds?: ReadonlyArray<string>;
  /** The IDs of the positioned objects suggested to be attached to this paragraph, keyed by suggestion ID. */
  suggestedPositionedObjectIds?: Record<string, ObjectReferences>;
}

export const Paragraph = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  bullet: Schema.optional(Bullet),
  suggestedBulletChanges: Schema.optional(
    Schema.Record(Schema.String, SuggestedBullet),
  ),
  elements: Schema.optional(Schema.Array(ParagraphElement)),
  suggestedParagraphStyleChanges: Schema.optional(
    Schema.Record(Schema.String, SuggestedParagraphStyle),
  ),
  paragraphStyle: Schema.optional(ParagraphStyle),
  positionedObjectIds: Schema.optional(Schema.Array(Schema.String)),
  suggestedPositionedObjectIds: Schema.optional(
    Schema.Record(Schema.String, ObjectReferences),
  ),
}).annotate({ identifier: "Paragraph" });

export interface TableOfContents {
  /** The suggested deletion IDs. If empty, then there are no suggested deletions of this content. */
  suggestedDeletionIds?: ReadonlyArray<string>;
  /** The content of the table of contents. */
  content?: ReadonlyArray<StructuralElement>;
  /** The suggested insertion IDs. A TableOfContents may have multiple insertion IDs if it is a nested suggested change. If empty, then this is not a suggested insertion. */
  suggestedInsertionIds?: ReadonlyArray<string>;
}

export const TableOfContents: Schema.Schema<TableOfContents> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      suggestedDeletionIds: Schema.optional(Schema.Array(Schema.String)),
      content: Schema.optional(Schema.Array(StructuralElement)),
      suggestedInsertionIds: Schema.optional(Schema.Array(Schema.String)),
    }),
  ).annotate({
    identifier: "TableOfContents",
  }) as any as Schema.Schema<TableOfContents>;

export interface StructuralElement {
  /** A table type of structural element. */
  table?: Table;
  /** The zero-based end index of this structural element, exclusive, in UTF-16 code units. */
  endIndex?: number;
  /** A section break type of structural element. */
  sectionBreak?: SectionBreak;
  /** The zero-based start index of this structural element, in UTF-16 code units. */
  startIndex?: number;
  /** A paragraph type of structural element. */
  paragraph?: Paragraph;
  /** A table of contents type of structural element. */
  tableOfContents?: TableOfContents;
}

export const StructuralElement: Schema.Schema<StructuralElement> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      table: Schema.optional(Table),
      endIndex: Schema.optional(Schema.Number),
      sectionBreak: Schema.optional(SectionBreak),
      startIndex: Schema.optional(Schema.Number),
      paragraph: Schema.optional(Paragraph),
      tableOfContents: Schema.optional(TableOfContents),
    }),
  ).annotate({
    identifier: "StructuralElement",
  }) as any as Schema.Schema<StructuralElement>;

export interface Body {
  /** The contents of the body. The indexes for the body's content begin at zero. */
  content?: ReadonlyArray<StructuralElement>;
}

export const Body = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  content: Schema.optional(Schema.Array(StructuralElement)),
}).annotate({ identifier: "Body" });

export interface Footer {
  /** The ID of the footer. */
  footerId?: string;
  /** The contents of the footer. The indexes for a footer's content begin at zero. */
  content?: ReadonlyArray<StructuralElement>;
}

export const Footer = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  footerId: Schema.optional(Schema.String),
  content: Schema.optional(Schema.Array(StructuralElement)),
}).annotate({ identifier: "Footer" });

export interface DocumentFormat {
  /** Whether the document has pages or is pageless. */
  documentMode?:
    | "DOCUMENT_MODE_UNSPECIFIED"
    | "PAGES"
    | "PAGELESS"
    | (string & {});
}

export const DocumentFormat = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  documentMode: Schema.optional(Schema.String),
}).annotate({ identifier: "DocumentFormat" });

export interface NamedStyleSuggestionState {
  /** A mask that indicates which of the fields in paragraph style have been changed in this suggestion. */
  paragraphStyleSuggestionState?: ParagraphStyleSuggestionState;
  /** The named style type that this suggestion state corresponds to. This field is provided as a convenience for matching the NamedStyleSuggestionState with its corresponding NamedStyle. */
  namedStyleType?:
    | "NAMED_STYLE_TYPE_UNSPECIFIED"
    | "NORMAL_TEXT"
    | "TITLE"
    | "SUBTITLE"
    | "HEADING_1"
    | "HEADING_2"
    | "HEADING_3"
    | "HEADING_4"
    | "HEADING_5"
    | "HEADING_6"
    | (string & {});
  /** A mask that indicates which of the fields in text style have been changed in this suggestion. */
  textStyleSuggestionState?: TextStyleSuggestionState;
}

export const NamedStyleSuggestionState =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    paragraphStyleSuggestionState: Schema.optional(
      ParagraphStyleSuggestionState,
    ),
    namedStyleType: Schema.optional(Schema.String),
    textStyleSuggestionState: Schema.optional(TextStyleSuggestionState),
  }).annotate({ identifier: "NamedStyleSuggestionState" });

export interface NamedStylesSuggestionState {
  /** A mask that indicates which of the fields on the corresponding NamedStyle in styles have been changed in this suggestion. The order of these named style suggestion states matches the order of the corresponding named style within the named styles suggestion. */
  stylesSuggestionStates?: ReadonlyArray<NamedStyleSuggestionState>;
}

export const NamedStylesSuggestionState =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stylesSuggestionStates: Schema.optional(
      Schema.Array(NamedStyleSuggestionState),
    ),
  }).annotate({ identifier: "NamedStylesSuggestionState" });

export interface NamedStyle {
  /** The text style of this named style. */
  textStyle?: TextStyle;
  /** The type of this named style. */
  namedStyleType?:
    | "NAMED_STYLE_TYPE_UNSPECIFIED"
    | "NORMAL_TEXT"
    | "TITLE"
    | "SUBTITLE"
    | "HEADING_1"
    | "HEADING_2"
    | "HEADING_3"
    | "HEADING_4"
    | "HEADING_5"
    | "HEADING_6"
    | (string & {});
  /** The paragraph style of this named style. */
  paragraphStyle?: ParagraphStyle;
}

export const NamedStyle = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  textStyle: Schema.optional(TextStyle),
  namedStyleType: Schema.optional(Schema.String),
  paragraphStyle: Schema.optional(ParagraphStyle),
}).annotate({ identifier: "NamedStyle" });

export interface NamedStyles {
  /** The named styles. There's an entry for each of the possible named style types. */
  styles?: ReadonlyArray<NamedStyle>;
}

export const NamedStyles = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  styles: Schema.optional(Schema.Array(NamedStyle)),
}).annotate({ identifier: "NamedStyles" });

export interface SuggestedNamedStyles {
  /** A mask that indicates which of the fields on the base NamedStyles have been changed in this suggestion. */
  namedStylesSuggestionState?: NamedStylesSuggestionState;
  /** A NamedStyles that only includes the changes made in this suggestion. This can be used along with the named_styles_suggestion_state to see which fields have changed and their new values. */
  namedStyles?: NamedStyles;
}

export const SuggestedNamedStyles = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  namedStylesSuggestionState: Schema.optional(NamedStylesSuggestionState),
  namedStyles: Schema.optional(NamedStyles),
}).annotate({ identifier: "SuggestedNamedStyles" });

export interface DeleteContentRangeRequest {
  /** The range of content to delete. Deleting text that crosses a paragraph boundary may result in changes to paragraph styles, lists, positioned objects and bookmarks as the two paragraphs are merged. Attempting to delete certain ranges can result in an invalid document structure in which case a 400 bad request error is returned. Some examples of invalid delete requests include: * Deleting one code unit of a surrogate pair. * Deleting the last newline character of a Body, Header, Footer, Footnote, TableCell or TableOfContents. * Deleting the start or end of a Table, TableOfContents or Equation without deleting the entire element. * Deleting the newline character before a Table, TableOfContents or SectionBreak without deleting the element. * Deleting individual rows or cells of a table. Deleting the content within a table cell is allowed. */
  range?: Range;
}

export const DeleteContentRangeRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    range: Schema.optional(Range),
  }).annotate({ identifier: "DeleteContentRangeRequest" });

export interface EndOfSegmentLocation {
  /** The tab that the location is in. When omitted, the request is applied to the first tab. In a document containing a single tab: - If provided, must match the singular tab's ID. - If omitted, the request applies to the singular tab. In a document containing multiple tabs: - If provided, the request applies to the specified tab. - If omitted, the request applies to the first tab in the document. */
  tabId?: string;
  /** The ID of the header, footer or footnote the location is in. An empty segment ID signifies the document's body. */
  segmentId?: string;
}

export const EndOfSegmentLocation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tabId: Schema.optional(Schema.String),
  segmentId: Schema.optional(Schema.String),
}).annotate({ identifier: "EndOfSegmentLocation" });

export interface InsertPersonRequest {
  /** Inserts the person mention at a specific index in the document. The person mention must be inserted inside the bounds of an existing Paragraph. For instance, it cannot be inserted at a table's start index (i.e. between the table and its preceding paragraph). Person mentions cannot be inserted inside an equation. */
  location?: Location;
  /** The properties of the person mention to insert. */
  personProperties?: PersonProperties;
  /** Inserts the person mention at the end of a header, footer, footnote or the document body. */
  endOfSegmentLocation?: EndOfSegmentLocation;
}

export const InsertPersonRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  location: Schema.optional(Location),
  personProperties: Schema.optional(PersonProperties),
  endOfSegmentLocation: Schema.optional(EndOfSegmentLocation),
}).annotate({ identifier: "InsertPersonRequest" });

export interface TabsCriteria {
  /** The list of tab IDs in which the request executes. */
  tabIds?: ReadonlyArray<string>;
}

export const TabsCriteria = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tabIds: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "TabsCriteria" });

export interface ReplaceNamedRangeContentRequest {
  /** The ID of the named range whose content will be replaced. If there is no named range with the given ID a 400 bad request error is returned. */
  namedRangeId?: string;
  /** The name of the NamedRanges whose content will be replaced. If there are multiple named ranges with the given name, then the content of each one will be replaced. If there are no named ranges with the given name, then the request will be a no-op. */
  namedRangeName?: string;
  /** Replaces the content of the specified named range(s) with the given text. */
  text?: string;
  /** Optional. The criteria used to specify in which tabs the replacement occurs. When omitted, the replacement applies to all tabs. In a document containing a single tab: - If provided, must match the singular tab's ID. - If omitted, the replacement applies to the singular tab. In a document containing multiple tabs: - If provided, the replacement applies to the specified tabs. - If omitted, the replacement applies to all tabs. */
  tabsCriteria?: TabsCriteria;
}

export const ReplaceNamedRangeContentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    namedRangeId: Schema.optional(Schema.String),
    namedRangeName: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
    tabsCriteria: Schema.optional(TabsCriteria),
  }).annotate({ identifier: "ReplaceNamedRangeContentRequest" });

export interface TabProperties {
  /** Optional. The ID of the parent tab. Empty when the current tab is a root-level tab, which means it doesn't have any parents. */
  parentTabId?: string;
  /** The user-visible name of the tab. */
  title?: string;
  /** Output only. The depth of the tab within the document. Root-level tabs start at 0. */
  nestingLevel?: number;
  /** The zero-based index of the tab within the parent. */
  index?: number;
  /** Optional. The emoji icon displayed with the tab. A valid emoji icon is represented by a non-empty Unicode string. Any set of characters that don't represent a single emoji is invalid. If an emoji is invalid, a 400 bad request error is returned. If this value is unset or empty, the tab will display the default tab icon. */
  iconEmoji?: string;
  /** The immutable ID of the tab. */
  tabId?: string;
}

export const TabProperties = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  parentTabId: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
  nestingLevel: Schema.optional(Schema.Number),
  index: Schema.optional(Schema.Number),
  iconEmoji: Schema.optional(Schema.String),
  tabId: Schema.optional(Schema.String),
}).annotate({ identifier: "TabProperties" });

export interface UpdateDocumentTabPropertiesRequest {
  /** The tab properties to update. */
  tabProperties?: TabProperties;
  /** The fields that should be updated. At least one field must be specified. The root `tab_properties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. */
  fields?: string;
}

export const UpdateDocumentTabPropertiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tabProperties: Schema.optional(TabProperties),
    fields: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpdateDocumentTabPropertiesRequest" });

export interface InsertTableRequest {
  /** The number of rows in the table. */
  rows?: number;
  /** The number of columns in the table. */
  columns?: number;
  /** Inserts the table at the end of the given header, footer or document body. A newline character will be inserted before the inserted table. Tables cannot be inserted inside a footnote. */
  endOfSegmentLocation?: EndOfSegmentLocation;
  /** Inserts the table at a specific model index. A newline character will be inserted before the inserted table, therefore the table start index will be at the specified location index + 1. The table must be inserted inside the bounds of an existing Paragraph. For instance, it cannot be inserted at a table's start index (i.e. between an existing table and its preceding paragraph). Tables cannot be inserted inside a footnote or equation. */
  location?: Location;
}

export const InsertTableRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  rows: Schema.optional(Schema.Number),
  columns: Schema.optional(Schema.Number),
  endOfSegmentLocation: Schema.optional(EndOfSegmentLocation),
  location: Schema.optional(Location),
}).annotate({ identifier: "InsertTableRequest" });

export interface CropPropertiesSuggestionState {
  /** Indicates if there was a suggested change to offset_top. */
  offsetTopSuggested?: boolean;
  /** Indicates if there was a suggested change to offset_right. */
  offsetRightSuggested?: boolean;
  /** Indicates if there was a suggested change to offset_bottom. */
  offsetBottomSuggested?: boolean;
  /** Indicates if there was a suggested change to angle. */
  angleSuggested?: boolean;
  /** Indicates if there was a suggested change to offset_left. */
  offsetLeftSuggested?: boolean;
}

export const CropPropertiesSuggestionState =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    offsetTopSuggested: Schema.optional(Schema.Boolean),
    offsetRightSuggested: Schema.optional(Schema.Boolean),
    offsetBottomSuggested: Schema.optional(Schema.Boolean),
    angleSuggested: Schema.optional(Schema.Boolean),
    offsetLeftSuggested: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "CropPropertiesSuggestionState" });

export interface ImagePropertiesSuggestionState {
  /** Indicates if there was a suggested change to brightness. */
  brightnessSuggested?: boolean;
  /** A mask that indicates which of the fields in crop_properties have been changed in this suggestion. */
  cropPropertiesSuggestionState?: CropPropertiesSuggestionState;
  /** Indicates if there was a suggested change to contrast. */
  contrastSuggested?: boolean;
  /** Indicates if there was a suggested change to transparency. */
  transparencySuggested?: boolean;
  /** Indicates if there was a suggested change to angle. */
  angleSuggested?: boolean;
  /** Indicates if there was a suggested change to source_uri. */
  sourceUriSuggested?: boolean;
  /** Indicates if there was a suggested change to content_uri. */
  contentUriSuggested?: boolean;
}

export const ImagePropertiesSuggestionState =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    brightnessSuggested: Schema.optional(Schema.Boolean),
    cropPropertiesSuggestionState: Schema.optional(
      CropPropertiesSuggestionState,
    ),
    contrastSuggested: Schema.optional(Schema.Boolean),
    transparencySuggested: Schema.optional(Schema.Boolean),
    angleSuggested: Schema.optional(Schema.Boolean),
    sourceUriSuggested: Schema.optional(Schema.Boolean),
    contentUriSuggested: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ImagePropertiesSuggestionState" });

export interface TableCellLocation {
  /** The zero-based row index. For example, the second row in the table has a row index of 1. */
  rowIndex?: number;
  /** The location where the table starts in the document. */
  tableStartLocation?: Location;
  /** The zero-based column index. For example, the second column in the table has a column index of 1. */
  columnIndex?: number;
}

export const TableCellLocation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  rowIndex: Schema.optional(Schema.Number),
  tableStartLocation: Schema.optional(Location),
  columnIndex: Schema.optional(Schema.Number),
}).annotate({ identifier: "TableCellLocation" });

export interface TableRange {
  /** The row span of the table range. */
  rowSpan?: number;
  /** The cell location where the table range starts. */
  tableCellLocation?: TableCellLocation;
  /** The column span of the table range. */
  columnSpan?: number;
}

export const TableRange = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  rowSpan: Schema.optional(Schema.Number),
  tableCellLocation: Schema.optional(TableCellLocation),
  columnSpan: Schema.optional(Schema.Number),
}).annotate({ identifier: "TableRange" });

export interface UpdateSectionStyleRequest {
  /** The fields that should be updated. At least one field must be specified. The root `section_style` is implied and must not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the left margin, set `fields` to `"margin_left"`. */
  fields?: string;
  /** The range overlapping the sections to style. Because section breaks can only be inserted inside the body, the segment ID field must be empty. */
  range?: Range;
  /** The styles to be set on the section. Certain section style changes may cause other changes in order to mirror the behavior of the Docs editor. See the documentation of SectionStyle for more information. */
  sectionStyle?: SectionStyle;
}

export const UpdateSectionStyleRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fields: Schema.optional(Schema.String),
    range: Schema.optional(Range),
    sectionStyle: Schema.optional(SectionStyle),
  }).annotate({ identifier: "UpdateSectionStyleRequest" });

export interface Background {
  /** The background color. */
  color?: OptionalColor;
}

export const Background = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  color: Schema.optional(OptionalColor),
}).annotate({ identifier: "Background" });

export interface Size {
  /** The width of the object. */
  width?: Dimension;
  /** The height of the object. */
  height?: Dimension;
}

export const Size = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  width: Schema.optional(Dimension),
  height: Schema.optional(Dimension),
}).annotate({ identifier: "Size" });

export interface DocumentStyle {
  /** The top page margin. Updating the top page margin on the document style clears the top page margin on all section styles. If DocumentMode is PAGELESS, this property will not be rendered. */
  marginTop?: Dimension;
  /** The ID of the default header. If not set, there's no default header. If DocumentMode is PAGELESS, this property will not be rendered. This property is read-only. */
  defaultHeaderId?: string;
  /** Optional. Indicates whether to flip the dimensions of the page_size, which allows changing the page orientation between portrait and landscape. If DocumentMode is PAGELESS, this property will not be rendered. */
  flipPageOrientation?: boolean;
  /** The ID of the footer used only for the first page. If not set then a unique footer for the first page does not exist. The value of use_first_page_header_footer determines whether to use the default_footer_id or this value for the footer on the first page. If not set, there's no first page footer. If DocumentMode is PAGELESS, this property will not be rendered. This property is read-only. */
  firstPageFooterId?: string;
  /** Indicates whether to use the first page header / footer IDs for the first page. If DocumentMode is PAGELESS, this property will not be rendered. */
  useFirstPageHeaderFooter?: boolean;
  /** Indicates whether to use the even page header / footer IDs for the even pages. If DocumentMode is PAGELESS, this property will not be rendered. */
  useEvenPageHeaderFooter?: boolean;
  /** Specifies document-level format settings, such as the document mode (pages vs pageless). */
  documentFormat?: DocumentFormat;
  /** The background of the document. Documents cannot have a transparent background color. */
  background?: Background;
  /** The amount of space between the bottom of the page and the contents of the footer. If DocumentMode is PAGELESS, this property will not be rendered. */
  marginFooter?: Dimension;
  /** Indicates whether DocumentStyle margin_header, SectionStyle margin_header and DocumentStyle margin_footer, SectionStyle margin_footer are respected. When false, the default values in the Docs editor for header and footer margin is used. If DocumentMode is PAGELESS, this property will not be rendered. This property is read-only. */
  useCustomHeaderFooterMargins?: boolean;
  /** The size of a page in the document. If DocumentMode is PAGELESS, this property will not be rendered. */
  pageSize?: Size;
  /** The ID of the header used only for even pages. The value of use_even_page_header_footer determines whether to use the default_header_id or this value for the header on even pages. If not set, there's no even page header. If DocumentMode is PAGELESS, this property will not be rendered. This property is read-only. */
  evenPageHeaderId?: string;
  /** The ID of the footer used only for even pages. The value of use_even_page_header_footer determines whether to use the default_footer_id or this value for the footer on even pages. If not set, there's no even page footer. If DocumentMode is PAGELESS, this property will not be rendered. This property is read-only. */
  evenPageFooterId?: string;
  /** The page number from which to start counting the number of pages. If DocumentMode is PAGELESS, this property will not be rendered. */
  pageNumberStart?: number;
  /** The right page margin. Updating the right page margin on the document style clears the right page margin on all section styles. It may also cause columns to resize in all sections. If DocumentMode is PAGELESS, this property will not be rendered. */
  marginRight?: Dimension;
  /** The bottom page margin. Updating the bottom page margin on the document style clears the bottom page margin on all section styles. If DocumentMode is PAGELESS, this property will not be rendered. */
  marginBottom?: Dimension;
  /** The ID of the default footer. If not set, there's no default footer. If DocumentMode is PAGELESS, this property will not be rendered. This property is read-only. */
  defaultFooterId?: string;
  /** The ID of the header used only for the first page. If not set then a unique header for the first page does not exist. The value of use_first_page_header_footer determines whether to use the default_header_id or this value for the header on the first page. If not set, there's no first page header. If DocumentMode is PAGELESS, this property will not be rendered. This property is read-only. */
  firstPageHeaderId?: string;
  /** The left page margin. Updating the left page margin on the document style clears the left page margin on all section styles. It may also cause columns to resize in all sections. If DocumentMode is PAGELESS, this property will not be rendered. */
  marginLeft?: Dimension;
  /** The amount of space between the top of the page and the contents of the header. If DocumentMode is PAGELESS, this property will not be rendered. */
  marginHeader?: Dimension;
}

export const DocumentStyle = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  marginTop: Schema.optional(Dimension),
  defaultHeaderId: Schema.optional(Schema.String),
  flipPageOrientation: Schema.optional(Schema.Boolean),
  firstPageFooterId: Schema.optional(Schema.String),
  useFirstPageHeaderFooter: Schema.optional(Schema.Boolean),
  useEvenPageHeaderFooter: Schema.optional(Schema.Boolean),
  documentFormat: Schema.optional(DocumentFormat),
  background: Schema.optional(Background),
  marginFooter: Schema.optional(Dimension),
  useCustomHeaderFooterMargins: Schema.optional(Schema.Boolean),
  pageSize: Schema.optional(Size),
  evenPageHeaderId: Schema.optional(Schema.String),
  evenPageFooterId: Schema.optional(Schema.String),
  pageNumberStart: Schema.optional(Schema.Number),
  marginRight: Schema.optional(Dimension),
  marginBottom: Schema.optional(Dimension),
  defaultFooterId: Schema.optional(Schema.String),
  firstPageHeaderId: Schema.optional(Schema.String),
  marginLeft: Schema.optional(Dimension),
  marginHeader: Schema.optional(Dimension),
}).annotate({ identifier: "DocumentStyle" });

export interface UpdateDocumentStyleRequest {
  /** The styles to set on the document. Certain document style changes may cause other changes in order to mirror the behavior of the Docs editor. See the documentation of DocumentStyle for more information. */
  documentStyle?: DocumentStyle;
  /** The tab that contains the style to update. When omitted, the request applies to the first tab. In a document containing a single tab: - If provided, must match the singular tab's ID. - If omitted, the request applies to the singular tab. In a document containing multiple tabs: - If provided, the request applies to the specified tab. - If not provided, the request applies to the first tab in the document. */
  tabId?: string;
  /** The fields that should be updated. At least one field must be specified. The root `document_style` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the background, set `fields` to `"background"`. */
  fields?: string;
}

export const UpdateDocumentStyleRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    documentStyle: Schema.optional(DocumentStyle),
    tabId: Schema.optional(Schema.String),
    fields: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpdateDocumentStyleRequest" });

export interface UpdateTableCellStyleRequest {
  /** The style to set on the table cells. When updating borders, if a cell shares a border with an adjacent cell, the corresponding border property of the adjacent cell is updated as well. Borders that are merged and invisible are not updated. Since updating a border shared by adjacent cells in the same request can cause conflicting border updates, border updates are applied in the following order: - `border_right` - `border_left` - `border_bottom` - `border_top` */
  tableCellStyle?: TableCellStyle;
  /** The location where the table starts in the document. When specified, the updates are applied to all the cells in the table. */
  tableStartLocation?: Location;
  /** The fields that should be updated. At least one field must be specified. The root `tableCellStyle` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the table cell background color, set `fields` to `"backgroundColor"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset. */
  fields?: string;
  /** The table range representing the subset of the table to which the updates are applied. */
  tableRange?: TableRange;
}

export const UpdateTableCellStyleRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tableCellStyle: Schema.optional(TableCellStyle),
    tableStartLocation: Schema.optional(Location),
    fields: Schema.optional(Schema.String),
    tableRange: Schema.optional(TableRange),
  }).annotate({ identifier: "UpdateTableCellStyleRequest" });

export interface InsertTextRequest {
  /** Inserts the text at a specific index in the document. Text must be inserted inside the bounds of an existing Paragraph. For instance, text cannot be inserted at a table's start index (i.e. between the table and its preceding paragraph). The text must be inserted in the preceding paragraph. */
  location?: Location;
  /** Inserts the text at the end of a header, footer, footnote or the document body. */
  endOfSegmentLocation?: EndOfSegmentLocation;
  /** The text to be inserted. Inserting a newline character will implicitly create a new Paragraph at that index. The paragraph style of the new paragraph will be copied from the paragraph at the current insertion index, including lists and bullets. Text styles for inserted text will be determined automatically, generally preserving the styling of neighboring text. In most cases, the text style for the inserted text will match the text immediately before the insertion index. Some control characters (U+0000-U+0008, U+000C-U+001F) and characters from the Unicode Basic Multilingual Plane Private Use Area (U+E000-U+F8FF) will be stripped out of the inserted text. */
  text?: string;
}

export const InsertTextRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  location: Schema.optional(Location),
  endOfSegmentLocation: Schema.optional(EndOfSegmentLocation),
  text: Schema.optional(Schema.String),
}).annotate({ identifier: "InsertTextRequest" });

export interface UpdateTableRowStyleRequest {
  /** The list of zero-based row indices whose style should be updated. If no indices are specified, all rows will be updated. */
  rowIndices?: ReadonlyArray<number>;
  /** The styles to be set on the rows. */
  tableRowStyle?: TableRowStyle;
  /** The location where the table starts in the document. */
  tableStartLocation?: Location;
  /** The fields that should be updated. At least one field must be specified. The root `tableRowStyle` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the minimum row height, set `fields` to `"min_row_height"`. */
  fields?: string;
}

export const UpdateTableRowStyleRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rowIndices: Schema.optional(Schema.Array(Schema.Number)),
    tableRowStyle: Schema.optional(TableRowStyle),
    tableStartLocation: Schema.optional(Location),
    fields: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpdateTableRowStyleRequest" });

export interface CreateParagraphBulletsRequest {
  /** The kinds of bullet glyphs to be used. */
  bulletPreset?:
    | "BULLET_GLYPH_PRESET_UNSPECIFIED"
    | "BULLET_DISC_CIRCLE_SQUARE"
    | "BULLET_DIAMONDX_ARROW3D_SQUARE"
    | "BULLET_CHECKBOX"
    | "BULLET_ARROW_DIAMOND_DISC"
    | "BULLET_STAR_CIRCLE_SQUARE"
    | "BULLET_ARROW3D_CIRCLE_SQUARE"
    | "BULLET_LEFTTRIANGLE_DIAMOND_DISC"
    | "BULLET_DIAMONDX_HOLLOWDIAMOND_SQUARE"
    | "BULLET_DIAMOND_CIRCLE_SQUARE"
    | "NUMBERED_DECIMAL_ALPHA_ROMAN"
    | "NUMBERED_DECIMAL_ALPHA_ROMAN_PARENS"
    | "NUMBERED_DECIMAL_NESTED"
    | "NUMBERED_UPPERALPHA_ALPHA_ROMAN"
    | "NUMBERED_UPPERROMAN_UPPERALPHA_DECIMAL"
    | "NUMBERED_ZERODECIMAL_ALPHA_ROMAN"
    | (string & {});
  /** The range to apply the bullet preset to. */
  range?: Range;
}

export const CreateParagraphBulletsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bulletPreset: Schema.optional(Schema.String),
    range: Schema.optional(Range),
  }).annotate({ identifier: "CreateParagraphBulletsRequest" });

export interface InsertInlineImageRequest {
  /** Inserts the image at a specific index in the document. The image must be inserted inside the bounds of an existing Paragraph. For instance, it cannot be inserted at a table's start index (i.e. between the table and its preceding paragraph). Inline images cannot be inserted inside a footnote or equation. */
  location?: Location;
  /** The image URI. The image is fetched once at insertion time and a copy is stored for display inside the document. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format. The provided URI must be publicly accessible and at most 2 kB in length. The URI itself is saved with the image, and exposed via the ImageProperties.content_uri field. */
  uri?: string;
  /** Inserts the text at the end of a header, footer or the document body. Inline images cannot be inserted inside a footnote. */
  endOfSegmentLocation?: EndOfSegmentLocation;
  /** The size that the image should appear as in the document. This property is optional and the final size of the image in the document is determined by the following rules: * If neither width nor height is specified, then a default size of the image is calculated based on its resolution. * If one dimension is specified then the other dimension is calculated to preserve the aspect ratio of the image. * If both width and height are specified, the image is scaled to fit within the provided dimensions while maintaining its aspect ratio. */
  objectSize?: Size;
}

export const InsertInlineImageRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.optional(Location),
    uri: Schema.optional(Schema.String),
    endOfSegmentLocation: Schema.optional(EndOfSegmentLocation),
    objectSize: Schema.optional(Size),
  }).annotate({ identifier: "InsertInlineImageRequest" });

export interface MergeTableCellsRequest {
  /** The table range specifying which cells of the table to merge. Any text in the cells being merged will be concatenated and stored in the "head" cell of the range. This is the upper-left cell of the range when the content direction is left to right, and the upper-right cell of the range otherwise. If the range is non-rectangular (which can occur in some cases where the range covers cells that are already merged or where the table is non-rectangular), a 400 bad request error is returned. */
  tableRange?: TableRange;
}

export const MergeTableCellsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    tableRange: Schema.optional(TableRange),
  },
).annotate({ identifier: "MergeTableCellsRequest" });

export interface DeleteTabRequest {
  /** The ID of the tab to delete. */
  tabId?: string;
}

export const DeleteTabRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tabId: Schema.optional(Schema.String),
}).annotate({ identifier: "DeleteTabRequest" });

export interface DeleteNamedRangeRequest {
  /** The ID of the named range to delete. */
  namedRangeId?: string;
  /** The name of the range(s) to delete. All named ranges with the given name will be deleted. */
  name?: string;
  /** Optional. The criteria used to specify which tab(s) the range deletion should occur in. When omitted, the range deletion is applied to all tabs. In a document containing a single tab: - If provided, must match the singular tab's ID. - If omitted, the range deletion applies to the singular tab. In a document containing multiple tabs: - If provided, the range deletion applies to the specified tabs. - If not provided, the range deletion applies to all tabs. */
  tabsCriteria?: TabsCriteria;
}

export const DeleteNamedRangeRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    namedRangeId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    tabsCriteria: Schema.optional(TabsCriteria),
  }).annotate({ identifier: "DeleteNamedRangeRequest" });

export interface PinTableHeaderRowsRequest {
  /** The location where the table starts in the document. */
  tableStartLocation?: Location;
  /** The number of table rows to pin, where 0 implies that all rows are unpinned. */
  pinnedHeaderRowsCount?: number;
}

export const PinTableHeaderRowsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tableStartLocation: Schema.optional(Location),
    pinnedHeaderRowsCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "PinTableHeaderRowsRequest" });

export interface CreateHeaderRequest {
  /** The type of header to create. */
  type?: "HEADER_FOOTER_TYPE_UNSPECIFIED" | "DEFAULT" | (string & {});
  /** The location of the SectionBreak which begins the section this header should belong to. If `section_break_location' is unset or if it refers to the first section break in the document body, the header applies to the DocumentStyle */
  sectionBreakLocation?: Location;
}

export const CreateHeaderRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
  sectionBreakLocation: Schema.optional(Location),
}).annotate({ identifier: "CreateHeaderRequest" });

export interface UnmergeTableCellsRequest {
  /** The table range specifying which cells of the table to unmerge. All merged cells in this range will be unmerged, and cells that are already unmerged will not be affected. If the range has no merged cells, the request will do nothing. If there is text in any of the merged cells, the text will remain in the "head" cell of the resulting block of unmerged cells. The "head" cell is the upper-left cell when the content direction is from left to right, and the upper-right otherwise. */
  tableRange?: TableRange;
}

export const UnmergeTableCellsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tableRange: Schema.optional(TableRange),
  }).annotate({ identifier: "UnmergeTableCellsRequest" });

export interface DeleteFooterRequest {
  /** The tab that contains the footer to delete. When omitted, the request is applied to the first tab. In a document containing a single tab: - If provided, must match the singular tab's ID. - If omitted, the request applies to the singular tab. In a document containing multiple tabs: - If provided, the request applies to the specified tab. - If omitted, the request applies to the first tab in the document. */
  tabId?: string;
  /** The id of the footer to delete. If this footer is defined on DocumentStyle, the reference to this footer is removed, resulting in no footer of that type for the first section of the document. If this footer is defined on a SectionStyle, the reference to this footer is removed and the footer of that type is now continued from the previous section. */
  footerId?: string;
}

export const DeleteFooterRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tabId: Schema.optional(Schema.String),
  footerId: Schema.optional(Schema.String),
}).annotate({ identifier: "DeleteFooterRequest" });

export interface InsertPageBreakRequest {
  /** Inserts the page break at the end of the document body. Page breaks cannot be inserted inside a footnote, header or footer. Since page breaks can only be inserted inside the body, the segment ID field must be empty. */
  endOfSegmentLocation?: EndOfSegmentLocation;
  /** Inserts the page break at a specific index in the document. The page break must be inserted inside the bounds of an existing Paragraph. For instance, it cannot be inserted at a table's start index (i.e. between the table and its preceding paragraph). Page breaks cannot be inserted inside a table, equation, footnote, header or footer. Since page breaks can only be inserted inside the body, the segment ID field must be empty. */
  location?: Location;
}

export const InsertPageBreakRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    endOfSegmentLocation: Schema.optional(EndOfSegmentLocation),
    location: Schema.optional(Location),
  },
).annotate({ identifier: "InsertPageBreakRequest" });

export interface InsertTableColumnRequest {
  /** Whether to insert new column to the right of the reference cell location. - `True`: insert to the right. - `False`: insert to the left. */
  insertRight?: boolean;
  /** The reference table cell location from which columns will be inserted. A new column will be inserted to the left (or right) of the column where the reference cell is. If the reference cell is a merged cell, a new column will be inserted to the left (or right) of the merged cell. */
  tableCellLocation?: TableCellLocation;
}

export const InsertTableColumnRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    insertRight: Schema.optional(Schema.Boolean),
    tableCellLocation: Schema.optional(TableCellLocation),
  }).annotate({ identifier: "InsertTableColumnRequest" });

export interface UpdateParagraphStyleRequest {
  /** The range overlapping the paragraphs to style. */
  range?: Range;
  /** The fields that should be updated. At least one field must be specified. The root `paragraph_style` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example, to update the paragraph style's alignment property, set `fields` to `"alignment"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset. */
  fields?: string;
  /** The styles to set on the paragraphs. Certain paragraph style changes may cause other changes in order to mirror the behavior of the Docs editor. See the documentation of ParagraphStyle for more information. */
  paragraphStyle?: ParagraphStyle;
}

export const UpdateParagraphStyleRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    range: Schema.optional(Range),
    fields: Schema.optional(Schema.String),
    paragraphStyle: Schema.optional(ParagraphStyle),
  }).annotate({ identifier: "UpdateParagraphStyleRequest" });

export interface CreateNamedRangeRequest {
  /** The name of the NamedRange. Names do not need to be unique. Names must be at least 1 character and no more than 256 characters, measured in UTF-16 code units. */
  name?: string;
  /** The range to apply the name to. */
  range?: Range;
}

export const CreateNamedRangeRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    range: Schema.optional(Range),
  }).annotate({ identifier: "CreateNamedRangeRequest" });

export interface ReplaceImageRequest {
  /** The ID of the existing image that will be replaced. The ID can be retrieved from the response of a get request. */
  imageObjectId?: string;
  /** The URI of the new image. The image is fetched once at insertion time and a copy is stored for display inside the document. Images must be less than 50MB, cannot exceed 25 megapixels, and must be in PNG, JPEG, or GIF format. The provided URI can't surpass 2 KB in length. The URI is saved with the image, and exposed through the ImageProperties.source_uri field. */
  uri?: string;
  /** The tab that the image to be replaced is in. When omitted, the request is applied to the first tab. In a document containing a single tab: - If provided, must match the singular tab's ID. - If omitted, the request applies to the singular tab. In a document containing multiple tabs: - If provided, the request applies to the specified tab. - If omitted, the request applies to the first tab in the document. */
  tabId?: string;
  /** The replacement method. */
  imageReplaceMethod?:
    | "IMAGE_REPLACE_METHOD_UNSPECIFIED"
    | "CENTER_CROP"
    | (string & {});
}

export const ReplaceImageRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  imageObjectId: Schema.optional(Schema.String),
  uri: Schema.optional(Schema.String),
  tabId: Schema.optional(Schema.String),
  imageReplaceMethod: Schema.optional(Schema.String),
}).annotate({ identifier: "ReplaceImageRequest" });

export interface DeleteTableColumnRequest {
  /** The reference table cell location from which the column will be deleted. The column this cell spans will be deleted. If this is a merged cell that spans multiple columns, all columns that the cell spans will be deleted. If no columns remain in the table after this deletion, the whole table is deleted. */
  tableCellLocation?: TableCellLocation;
}

export const DeleteTableColumnRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tableCellLocation: Schema.optional(TableCellLocation),
  }).annotate({ identifier: "DeleteTableColumnRequest" });

export interface DeleteTableRowRequest {
  /** The reference table cell location from which the row will be deleted. The row this cell spans will be deleted. If this is a merged cell that spans multiple rows, all rows that the cell spans will be deleted. If no rows remain in the table after this deletion, the whole table is deleted. */
  tableCellLocation?: TableCellLocation;
}

export const DeleteTableRowRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tableCellLocation: Schema.optional(TableCellLocation),
}).annotate({ identifier: "DeleteTableRowRequest" });

export interface InsertSectionBreakRequest {
  /** Inserts a newline and a section break at the end of the document body. Section breaks cannot be inserted inside a footnote, header or footer. Because section breaks can only be inserted inside the body, the segment ID field must be empty. */
  endOfSegmentLocation?: EndOfSegmentLocation;
  /** Inserts a newline and a section break at a specific index in the document. The section break must be inserted inside the bounds of an existing Paragraph. For instance, it cannot be inserted at a table's start index (i.e. between the table and its preceding paragraph). Section breaks cannot be inserted inside a table, equation, footnote, header, or footer. Since section breaks can only be inserted inside the body, the segment ID field must be empty. */
  location?: Location;
  /** The type of section to insert. */
  sectionType?:
    | "SECTION_TYPE_UNSPECIFIED"
    | "CONTINUOUS"
    | "NEXT_PAGE"
    | (string & {});
}

export const InsertSectionBreakRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endOfSegmentLocation: Schema.optional(EndOfSegmentLocation),
    location: Schema.optional(Location),
    sectionType: Schema.optional(Schema.String),
  }).annotate({ identifier: "InsertSectionBreakRequest" });

export interface AddDocumentTabRequest {
  /** The properties of the tab to add. All properties are optional. */
  tabProperties?: TabProperties;
}

export const AddDocumentTabRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tabProperties: Schema.optional(TabProperties),
}).annotate({ identifier: "AddDocumentTabRequest" });

export interface InsertTableRowRequest {
  /** The reference table cell location from which rows will be inserted. A new row will be inserted above (or below) the row where the reference cell is. If the reference cell is a merged cell, a new row will be inserted above (or below) the merged cell. */
  tableCellLocation?: TableCellLocation;
  /** Whether to insert new row below the reference cell location. - `True`: insert below the cell. - `False`: insert above the cell. */
  insertBelow?: boolean;
}

export const InsertTableRowRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tableCellLocation: Schema.optional(TableCellLocation),
  insertBelow: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "InsertTableRowRequest" });

export interface InsertDateRequest {
  /** Inserts the date at a specific index in the document. The date must be inserted inside the bounds of an existing Paragraph. For instance, it cannot be inserted at a table's start index (i.e. between an existing table and its preceding paragraph). */
  location?: Location;
  /** Inserts the date at the end of the given header, footer or document body. */
  endOfSegmentLocation?: EndOfSegmentLocation;
  /** The properties of the date to insert. */
  dateElementProperties?: DateElementProperties;
}

export const InsertDateRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  location: Schema.optional(Location),
  endOfSegmentLocation: Schema.optional(EndOfSegmentLocation),
  dateElementProperties: Schema.optional(DateElementProperties),
}).annotate({ identifier: "InsertDateRequest" });

export interface UpdateTableColumnPropertiesRequest {
  /** The table column properties to update. If the value of `table_column_properties#width` is less than 5 points (5/72 inch), a 400 bad request error is returned. */
  tableColumnProperties?: TableColumnProperties;
  /** The location where the table starts in the document. */
  tableStartLocation?: Location;
  /** The list of zero-based column indices whose property should be updated. If no indices are specified, all columns will be updated. */
  columnIndices?: ReadonlyArray<number>;
  /** The fields that should be updated. At least one field must be specified. The root `tableColumnProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the column width, set `fields` to `"width"`. */
  fields?: string;
}

export const UpdateTableColumnPropertiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tableColumnProperties: Schema.optional(TableColumnProperties),
    tableStartLocation: Schema.optional(Location),
    columnIndices: Schema.optional(Schema.Array(Schema.Number)),
    fields: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpdateTableColumnPropertiesRequest" });

export interface UpdateTextStyleRequest {
  /** The fields that should be updated. At least one field must be specified. The root `text_style` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example, to update the text style to bold, set `fields` to `"bold"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset. */
  fields?: string;
  /** The range of text to style. The range may be extended to include adjacent newlines. If the range fully contains a paragraph belonging to a list, the paragraph's bullet is also updated with the matching text style. Ranges cannot be inserted inside a relative UpdateTextStyleRequest. */
  range?: Range;
  /** The styles to set on the text. If the value for a particular style matches that of the parent, that style will be set to inherit. Certain text style changes may cause other changes in order to to mirror the behavior of the Docs editor. See the documentation of TextStyle for more information. */
  textStyle?: TextStyle;
}

export const UpdateTextStyleRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    fields: Schema.optional(Schema.String),
    range: Schema.optional(Range),
    textStyle: Schema.optional(TextStyle),
  },
).annotate({ identifier: "UpdateTextStyleRequest" });

export interface CreateFootnoteRequest {
  /** Inserts the footnote reference at a specific index in the document. The footnote reference must be inserted inside the bounds of an existing Paragraph. For instance, it cannot be inserted at a table's start index (i.e. between the table and its preceding paragraph). Footnote references cannot be inserted inside an equation, header, footer or footnote. Since footnote references can only be inserted in the body, the segment ID field must be empty. */
  location?: Location;
  /** Inserts the footnote reference at the end of the document body. Footnote references cannot be inserted inside a header, footer or footnote. Since footnote references can only be inserted in the body, the segment ID field must be empty. */
  endOfSegmentLocation?: EndOfSegmentLocation;
}

export const CreateFootnoteRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  location: Schema.optional(Location),
  endOfSegmentLocation: Schema.optional(EndOfSegmentLocation),
}).annotate({ identifier: "CreateFootnoteRequest" });

export interface DeleteHeaderRequest {
  /** The id of the header to delete. If this header is defined on DocumentStyle, the reference to this header is removed, resulting in no header of that type for the first section of the document. If this header is defined on a SectionStyle, the reference to this header is removed and the header of that type is now continued from the previous section. */
  headerId?: string;
  /** The tab containing the header to delete. When omitted, the request is applied to the first tab. In a document containing a single tab: - If provided, must match the singular tab's ID. - If omitted, the request applies to the singular tab. In a document containing multiple tabs: - If provided, the request applies to the specified tab. - If omitted, the request applies to the first tab in the document. */
  tabId?: string;
}

export const DeleteHeaderRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  headerId: Schema.optional(Schema.String),
  tabId: Schema.optional(Schema.String),
}).annotate({ identifier: "DeleteHeaderRequest" });

export interface SubstringMatchCriteria {
  /** Indicates whether the search should respect case: - `True`: the search is case sensitive. - `False`: the search is case insensitive. */
  matchCase?: boolean;
  /** Optional. True if the find value should be treated as a regular expression. Any backslashes in the pattern should be escaped. - `True`: the search text is treated as a regular expressions. - `False`: the search text is treated as a substring for matching. */
  searchByRegex?: boolean;
  /** The text to search for in the document. */
  text?: string;
}

export const SubstringMatchCriteria = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    matchCase: Schema.optional(Schema.Boolean),
    searchByRegex: Schema.optional(Schema.Boolean),
    text: Schema.optional(Schema.String),
  },
).annotate({ identifier: "SubstringMatchCriteria" });

export interface ReplaceAllTextRequest {
  /** The text that will replace the matched text. */
  replaceText?: string;
  /** Finds text in the document matching this substring. */
  containsText?: SubstringMatchCriteria;
  /** Optional. The criteria used to specify in which tabs the replacement occurs. When omitted, the replacement applies to all tabs. In a document containing a single tab: - If provided, must match the singular tab's ID. - If omitted, the replacement applies to the singular tab. In a document containing multiple tabs: - If provided, the replacement applies to the specified tabs. - If omitted, the replacement applies to all tabs. */
  tabsCriteria?: TabsCriteria;
}

export const ReplaceAllTextRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  replaceText: Schema.optional(Schema.String),
  containsText: Schema.optional(SubstringMatchCriteria),
  tabsCriteria: Schema.optional(TabsCriteria),
}).annotate({ identifier: "ReplaceAllTextRequest" });

export interface DeletePositionedObjectRequest {
  /** The ID of the positioned object to delete. */
  objectId?: string;
  /** The tab that the positioned object to delete is in. When omitted, the request is applied to the first tab. In a document containing a single tab: - If provided, must match the singular tab's ID. - If omitted, the request applies to the singular tab. In a document containing multiple tabs: - If provided, the request applies to the specified tab. - If omitted, the request applies to the first tab in the document. */
  tabId?: string;
}

export const DeletePositionedObjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    objectId: Schema.optional(Schema.String),
    tabId: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeletePositionedObjectRequest" });

export interface Request {
  /** Updates the section style of the specified range. */
  updateSectionStyle?: UpdateSectionStyleRequest;
  /** Deletes bullets from paragraphs. */
  deleteParagraphBullets?: DeleteParagraphBulletsRequest;
  /** Deletes content from the document. */
  deleteContentRange?: DeleteContentRangeRequest;
  /** Updates the style of the document. */
  updateDocumentStyle?: UpdateDocumentStyleRequest;
  /** Updates the style of table cells. */
  updateTableCellStyle?: UpdateTableCellStyleRequest;
  /** Inserts text at the specified location. */
  insertText?: InsertTextRequest;
  /** Updates the row style in a table. */
  updateTableRowStyle?: UpdateTableRowStyleRequest;
  /** Creates bullets for paragraphs. */
  createParagraphBullets?: CreateParagraphBulletsRequest;
  /** Inserts a table at the specified location. */
  insertTable?: InsertTableRequest;
  /** Inserts an inline image at the specified location. */
  insertInlineImage?: InsertInlineImageRequest;
  /** Merges cells in a table. */
  mergeTableCells?: MergeTableCellsRequest;
  /** Deletes a document tab. */
  deleteTab?: DeleteTabRequest;
  /** Deletes a named range. */
  deleteNamedRange?: DeleteNamedRangeRequest;
  /** Updates the number of pinned header rows in a table. */
  pinTableHeaderRows?: PinTableHeaderRowsRequest;
  /** Creates a header. */
  createHeader?: CreateHeaderRequest;
  /** Unmerges cells in a table. */
  unmergeTableCells?: UnmergeTableCellsRequest;
  /** Deletes a footer from the document. */
  deleteFooter?: DeleteFooterRequest;
  /** Inserts a page break at the specified location. */
  insertPageBreak?: InsertPageBreakRequest;
  /** Inserts an empty column into a table. */
  insertTableColumn?: InsertTableColumnRequest;
  /** Replaces the content in a named range. */
  replaceNamedRangeContent?: ReplaceNamedRangeContentRequest;
  /** Updates the properties of a document tab. */
  updateDocumentTabProperties?: UpdateDocumentTabPropertiesRequest;
  /** Updates the paragraph style at the specified range. */
  updateParagraphStyle?: UpdateParagraphStyleRequest;
  /** Creates a named range. */
  createNamedRange?: CreateNamedRangeRequest;
  /** Replaces an image in the document. */
  replaceImage?: ReplaceImageRequest;
  /** Deletes a column from a table. */
  deleteTableColumn?: DeleteTableColumnRequest;
  /** Deletes a row from a table. */
  deleteTableRow?: DeleteTableRowRequest;
  /** Inserts a section break at the specified location. */
  insertSectionBreak?: InsertSectionBreakRequest;
  /** Adds a document tab. */
  addDocumentTab?: AddDocumentTabRequest;
  /** Inserts a person mention. */
  insertPerson?: InsertPersonRequest;
  /** Inserts an empty row into a table. */
  insertTableRow?: InsertTableRowRequest;
  /** Inserts a date. */
  insertDate?: InsertDateRequest;
  /** Updates the properties of columns in a table. */
  updateTableColumnProperties?: UpdateTableColumnPropertiesRequest;
  /** Updates the text style at the specified range. */
  updateTextStyle?: UpdateTextStyleRequest;
  /** Creates a footer. */
  createFooter?: CreateFooterRequest;
  /** Creates a footnote. */
  createFootnote?: CreateFootnoteRequest;
  /** Deletes a header from the document. */
  deleteHeader?: DeleteHeaderRequest;
  /** Replaces all instances of the specified text. */
  replaceAllText?: ReplaceAllTextRequest;
  /** Deletes a positioned object from the document. */
  deletePositionedObject?: DeletePositionedObjectRequest;
}

export const Request = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  updateSectionStyle: Schema.optional(UpdateSectionStyleRequest),
  deleteParagraphBullets: Schema.optional(DeleteParagraphBulletsRequest),
  deleteContentRange: Schema.optional(DeleteContentRangeRequest),
  updateDocumentStyle: Schema.optional(UpdateDocumentStyleRequest),
  updateTableCellStyle: Schema.optional(UpdateTableCellStyleRequest),
  insertText: Schema.optional(InsertTextRequest),
  updateTableRowStyle: Schema.optional(UpdateTableRowStyleRequest),
  createParagraphBullets: Schema.optional(CreateParagraphBulletsRequest),
  insertTable: Schema.optional(InsertTableRequest),
  insertInlineImage: Schema.optional(InsertInlineImageRequest),
  mergeTableCells: Schema.optional(MergeTableCellsRequest),
  deleteTab: Schema.optional(DeleteTabRequest),
  deleteNamedRange: Schema.optional(DeleteNamedRangeRequest),
  pinTableHeaderRows: Schema.optional(PinTableHeaderRowsRequest),
  createHeader: Schema.optional(CreateHeaderRequest),
  unmergeTableCells: Schema.optional(UnmergeTableCellsRequest),
  deleteFooter: Schema.optional(DeleteFooterRequest),
  insertPageBreak: Schema.optional(InsertPageBreakRequest),
  insertTableColumn: Schema.optional(InsertTableColumnRequest),
  replaceNamedRangeContent: Schema.optional(ReplaceNamedRangeContentRequest),
  updateDocumentTabProperties: Schema.optional(
    UpdateDocumentTabPropertiesRequest,
  ),
  updateParagraphStyle: Schema.optional(UpdateParagraphStyleRequest),
  createNamedRange: Schema.optional(CreateNamedRangeRequest),
  replaceImage: Schema.optional(ReplaceImageRequest),
  deleteTableColumn: Schema.optional(DeleteTableColumnRequest),
  deleteTableRow: Schema.optional(DeleteTableRowRequest),
  insertSectionBreak: Schema.optional(InsertSectionBreakRequest),
  addDocumentTab: Schema.optional(AddDocumentTabRequest),
  insertPerson: Schema.optional(InsertPersonRequest),
  insertTableRow: Schema.optional(InsertTableRowRequest),
  insertDate: Schema.optional(InsertDateRequest),
  updateTableColumnProperties: Schema.optional(
    UpdateTableColumnPropertiesRequest,
  ),
  updateTextStyle: Schema.optional(UpdateTextStyleRequest),
  createFooter: Schema.optional(CreateFooterRequest),
  createFootnote: Schema.optional(CreateFootnoteRequest),
  deleteHeader: Schema.optional(DeleteHeaderRequest),
  replaceAllText: Schema.optional(ReplaceAllTextRequest),
  deletePositionedObject: Schema.optional(DeletePositionedObjectRequest),
}).annotate({ identifier: "Request" });

export interface WriteControl {
  /** The optional revision ID of the document the write request is applied to. If this is not the latest revision of the document, the request is not processed and returns a 400 bad request error. When a required revision ID is returned in a response, it indicates the revision ID of the document after the request was applied. */
  requiredRevisionId?: string;
  /** The optional target revision ID of the document the write request is applied to. If collaborator changes have occurred after the document was read using the API, the changes produced by this write request are applied against the collaborator changes. This results in a new revision of the document that incorporates both the collaborator changes and the changes in the request, with the Docs server resolving conflicting changes. When using target revision ID, the API client can be thought of as another collaborator of the document. The target revision ID can only be used to write to recent versions of a document. If the target revision is too far behind the latest revision, the request is not processed and returns a 400 bad request error. The request should be tried again after retrieving the latest version of the document. Usually a revision ID remains valid for use as a target revision for several minutes after it's read, but for frequently edited documents this window might be shorter. */
  targetRevisionId?: string;
}

export const WriteControl = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  requiredRevisionId: Schema.optional(Schema.String),
  targetRevisionId: Schema.optional(Schema.String),
}).annotate({ identifier: "WriteControl" });

export interface BatchUpdateDocumentRequest {
  /** A list of updates to apply to the document. */
  requests?: ReadonlyArray<Request>;
  /** Provides control over how write requests are executed. */
  writeControl?: WriteControl;
}

export const BatchUpdateDocumentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requests: Schema.optional(Schema.Array(Request)),
    writeControl: Schema.optional(WriteControl),
  }).annotate({ identifier: "BatchUpdateDocumentRequest" });

export interface SheetsChartReferenceSuggestionState {
  /** Indicates if there was a suggested change to chart_id. */
  chartIdSuggested?: boolean;
  /** Indicates if there was a suggested change to spreadsheet_id. */
  spreadsheetIdSuggested?: boolean;
}

export const SheetsChartReferenceSuggestionState =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    chartIdSuggested: Schema.optional(Schema.Boolean),
    spreadsheetIdSuggested: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SheetsChartReferenceSuggestionState" });

export interface LinkedContentReferenceSuggestionState {
  /** A mask that indicates which of the fields in sheets_chart_reference have been changed in this suggestion. */
  sheetsChartReferenceSuggestionState?: SheetsChartReferenceSuggestionState;
}

export const LinkedContentReferenceSuggestionState =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sheetsChartReferenceSuggestionState: Schema.optional(
      SheetsChartReferenceSuggestionState,
    ),
  }).annotate({ identifier: "LinkedContentReferenceSuggestionState" });

export interface EmbeddedDrawingPropertiesSuggestionState {}

export const EmbeddedDrawingPropertiesSuggestionState =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "EmbeddedDrawingPropertiesSuggestionState",
  });

export interface EmbeddedObjectBorderSuggestionState {
  /** Indicates if there was a suggested change to color. */
  colorSuggested?: boolean;
  /** Indicates if there was a suggested change to dash_style. */
  dashStyleSuggested?: boolean;
  /** Indicates if there was a suggested change to width. */
  widthSuggested?: boolean;
  /** Indicates if there was a suggested change to property_state. */
  propertyStateSuggested?: boolean;
}

export const EmbeddedObjectBorderSuggestionState =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    colorSuggested: Schema.optional(Schema.Boolean),
    dashStyleSuggested: Schema.optional(Schema.Boolean),
    widthSuggested: Schema.optional(Schema.Boolean),
    propertyStateSuggested: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "EmbeddedObjectBorderSuggestionState" });

export interface SizeSuggestionState {
  /** Indicates if there was a suggested change to width. */
  widthSuggested?: boolean;
  /** Indicates if there was a suggested change to height. */
  heightSuggested?: boolean;
}

export const SizeSuggestionState = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  widthSuggested: Schema.optional(Schema.Boolean),
  heightSuggested: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "SizeSuggestionState" });

export interface EmbeddedObjectSuggestionState {
  /** Indicates if there was a suggested change to margin_right. */
  marginRightSuggested?: boolean;
  /** A mask that indicates which of the fields in linked_content_reference have been changed in this suggestion. */
  linkedContentReferenceSuggestionState?: LinkedContentReferenceSuggestionState;
  /** Indicates if there was a suggested change to margin_left. */
  marginLeftSuggested?: boolean;
  /** Indicates if there was a suggested change to margin_top. */
  marginTopSuggested?: boolean;
  /** Indicates if there was a suggested change to description. */
  descriptionSuggested?: boolean;
  /** A mask that indicates which of the fields in embedded_drawing_properties have been changed in this suggestion. */
  embeddedDrawingPropertiesSuggestionState?: EmbeddedDrawingPropertiesSuggestionState;
  /** A mask that indicates which of the fields in embedded_object_border have been changed in this suggestion. */
  embeddedObjectBorderSuggestionState?: EmbeddedObjectBorderSuggestionState;
  /** Indicates if there was a suggested change to title. */
  titleSuggested?: boolean;
  /** A mask that indicates which of the fields in size have been changed in this suggestion. */
  sizeSuggestionState?: SizeSuggestionState;
  /** A mask that indicates which of the fields in image_properties have been changed in this suggestion. */
  imagePropertiesSuggestionState?: ImagePropertiesSuggestionState;
  /** Indicates if there was a suggested change to margin_bottom. */
  marginBottomSuggested?: boolean;
}

export const EmbeddedObjectSuggestionState =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    marginRightSuggested: Schema.optional(Schema.Boolean),
    linkedContentReferenceSuggestionState: Schema.optional(
      LinkedContentReferenceSuggestionState,
    ),
    marginLeftSuggested: Schema.optional(Schema.Boolean),
    marginTopSuggested: Schema.optional(Schema.Boolean),
    descriptionSuggested: Schema.optional(Schema.Boolean),
    embeddedDrawingPropertiesSuggestionState: Schema.optional(
      EmbeddedDrawingPropertiesSuggestionState,
    ),
    embeddedObjectBorderSuggestionState: Schema.optional(
      EmbeddedObjectBorderSuggestionState,
    ),
    titleSuggested: Schema.optional(Schema.Boolean),
    sizeSuggestionState: Schema.optional(SizeSuggestionState),
    imagePropertiesSuggestionState: Schema.optional(
      ImagePropertiesSuggestionState,
    ),
    marginBottomSuggested: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "EmbeddedObjectSuggestionState" });

export interface PositionedObjectPositioningSuggestionState {
  /** Indicates if there was a suggested change to layout. */
  layoutSuggested?: boolean;
  /** Indicates if there was a suggested change to left_offset. */
  leftOffsetSuggested?: boolean;
  /** Indicates if there was a suggested change to top_offset. */
  topOffsetSuggested?: boolean;
}

export const PositionedObjectPositioningSuggestionState =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    layoutSuggested: Schema.optional(Schema.Boolean),
    leftOffsetSuggested: Schema.optional(Schema.Boolean),
    topOffsetSuggested: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "PositionedObjectPositioningSuggestionState" });

export interface PositionedObjectPropertiesSuggestionState {
  /** A mask that indicates which of the fields in embedded_object have been changed in this suggestion. */
  embeddedObjectSuggestionState?: EmbeddedObjectSuggestionState;
  /** A mask that indicates which of the fields in positioning have been changed in this suggestion. */
  positioningSuggestionState?: PositionedObjectPositioningSuggestionState;
}

export const PositionedObjectPropertiesSuggestionState =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    embeddedObjectSuggestionState: Schema.optional(
      EmbeddedObjectSuggestionState,
    ),
    positioningSuggestionState: Schema.optional(
      PositionedObjectPositioningSuggestionState,
    ),
  }).annotate({ identifier: "PositionedObjectPropertiesSuggestionState" });

export interface NestingLevelSuggestionState {
  /** Indicates if there was a suggested change to glyph_type. */
  glyphTypeSuggested?: boolean;
  /** Indicates if there was a suggested change to indent_first_line. */
  indentFirstLineSuggested?: boolean;
  /** Indicates if there was a suggested change to glyph_symbol. */
  glyphSymbolSuggested?: boolean;
  /** Indicates if there was a suggested change to bullet_alignment. */
  bulletAlignmentSuggested?: boolean;
  /** Indicates if there was a suggested change to glyph_format. */
  glyphFormatSuggested?: boolean;
  /** Indicates if there was a suggested change to indent_start. */
  indentStartSuggested?: boolean;
  /** A mask that indicates which of the fields in text style have been changed in this suggestion. */
  textStyleSuggestionState?: TextStyleSuggestionState;
  /** Indicates if there was a suggested change to start_number. */
  startNumberSuggested?: boolean;
}

export const NestingLevelSuggestionState =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    glyphTypeSuggested: Schema.optional(Schema.Boolean),
    indentFirstLineSuggested: Schema.optional(Schema.Boolean),
    glyphSymbolSuggested: Schema.optional(Schema.Boolean),
    bulletAlignmentSuggested: Schema.optional(Schema.Boolean),
    glyphFormatSuggested: Schema.optional(Schema.Boolean),
    indentStartSuggested: Schema.optional(Schema.Boolean),
    textStyleSuggestionState: Schema.optional(TextStyleSuggestionState),
    startNumberSuggested: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "NestingLevelSuggestionState" });

export interface InsertInlineImageResponse {
  /** The ID of the created InlineObject. */
  objectId?: string;
}

export const InsertInlineImageResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    objectId: Schema.optional(Schema.String),
  }).annotate({ identifier: "InsertInlineImageResponse" });

export interface BackgroundSuggestionState {
  /** Indicates whether the current background color has been modified in this suggestion. */
  backgroundColorSuggested?: boolean;
}

export const BackgroundSuggestionState =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backgroundColorSuggested: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "BackgroundSuggestionState" });

export interface DocumentStyleSuggestionState {
  /** A mask that indicates which of the fields in background have been changed in this suggestion. */
  backgroundSuggestionState?: BackgroundSuggestionState;
  /** Indicates if there was a suggested change to first_page_header_id. */
  firstPageHeaderIdSuggested?: boolean;
  /** Indicates if there was a suggested change to even_page_header_id. */
  evenPageHeaderIdSuggested?: boolean;
  /** Indicates if there was a suggested change to margin_footer. */
  marginFooterSuggested?: boolean;
  /** Optional. Indicates if there was a suggested change to flip_page_orientation. */
  flipPageOrientationSuggested?: boolean;
  /** Indicates if there was a suggested change to first_page_footer_id. */
  firstPageFooterIdSuggested?: boolean;
  /** Indicates if there was a suggested change to margin_right. */
  marginRightSuggested?: boolean;
  /** Indicates if there was a suggested change to margin_header. */
  marginHeaderSuggested?: boolean;
  /** Indicates if there was a suggested change to even_page_footer_id. */
  evenPageFooterIdSuggested?: boolean;
  /** Indicates if there was a suggested change to use_even_page_header_footer. */
  useEvenPageHeaderFooterSuggested?: boolean;
  /** Indicates if there was a suggested change to margin_bottom. */
  marginBottomSuggested?: boolean;
  /** Indicates if there was a suggested change to use_custom_header_footer_margins. */
  useCustomHeaderFooterMarginsSuggested?: boolean;
  /** Indicates if there was a suggested change to default_header_id. */
  defaultHeaderIdSuggested?: boolean;
  /** Indicates if there was a suggested change to margin_top. */
  marginTopSuggested?: boolean;
  /** Indicates if there was a suggested change to margin_left. */
  marginLeftSuggested?: boolean;
  /** A mask that indicates which of the fields in size have been changed in this suggestion. */
  pageSizeSuggestionState?: SizeSuggestionState;
  /** Indicates if there was a suggested change to default_footer_id. */
  defaultFooterIdSuggested?: boolean;
  /** Indicates if there was a suggested change to use_first_page_header_footer. */
  useFirstPageHeaderFooterSuggested?: boolean;
  /** Indicates if there was a suggested change to page_number_start. */
  pageNumberStartSuggested?: boolean;
}

export const DocumentStyleSuggestionState =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backgroundSuggestionState: Schema.optional(BackgroundSuggestionState),
    firstPageHeaderIdSuggested: Schema.optional(Schema.Boolean),
    evenPageHeaderIdSuggested: Schema.optional(Schema.Boolean),
    marginFooterSuggested: Schema.optional(Schema.Boolean),
    flipPageOrientationSuggested: Schema.optional(Schema.Boolean),
    firstPageFooterIdSuggested: Schema.optional(Schema.Boolean),
    marginRightSuggested: Schema.optional(Schema.Boolean),
    marginHeaderSuggested: Schema.optional(Schema.Boolean),
    evenPageFooterIdSuggested: Schema.optional(Schema.Boolean),
    useEvenPageHeaderFooterSuggested: Schema.optional(Schema.Boolean),
    marginBottomSuggested: Schema.optional(Schema.Boolean),
    useCustomHeaderFooterMarginsSuggested: Schema.optional(Schema.Boolean),
    defaultHeaderIdSuggested: Schema.optional(Schema.Boolean),
    marginTopSuggested: Schema.optional(Schema.Boolean),
    marginLeftSuggested: Schema.optional(Schema.Boolean),
    pageSizeSuggestionState: Schema.optional(SizeSuggestionState),
    defaultFooterIdSuggested: Schema.optional(Schema.Boolean),
    useFirstPageHeaderFooterSuggested: Schema.optional(Schema.Boolean),
    pageNumberStartSuggested: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DocumentStyleSuggestionState" });

export interface PositionedObjectPositioning {
  /** The layout of this positioned object. */
  layout?:
    | "POSITIONED_OBJECT_LAYOUT_UNSPECIFIED"
    | "WRAP_TEXT"
    | "BREAK_LEFT"
    | "BREAK_RIGHT"
    | "BREAK_LEFT_RIGHT"
    | "IN_FRONT_OF_TEXT"
    | "BEHIND_TEXT"
    | (string & {});
  /** The offset of the left edge of the positioned object relative to the beginning of the Paragraph it's tethered to. The exact positioning of the object can depend on other content in the document and the document's styling. */
  leftOffset?: Dimension;
  /** The offset of the top edge of the positioned object relative to the beginning of the Paragraph it's tethered to. The exact positioning of the object can depend on other content in the document and the document's styling. */
  topOffset?: Dimension;
}

export const PositionedObjectPositioning =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    layout: Schema.optional(Schema.String),
    leftOffset: Schema.optional(Dimension),
    topOffset: Schema.optional(Dimension),
  }).annotate({ identifier: "PositionedObjectPositioning" });

export interface EmbeddedDrawingProperties {}

export const EmbeddedDrawingProperties =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "EmbeddedDrawingProperties",
  });

export interface CropProperties {
  /** The offset specifies how far inwards the right edge of the crop rectangle is from the right edge of the original content as a fraction of the original content's width. */
  offsetRight?: number;
  /** The clockwise rotation angle of the crop rectangle around its center, in radians. Rotation is applied after the offsets. */
  angle?: number;
  /** The offset specifies how far inwards the left edge of the crop rectangle is from the left edge of the original content as a fraction of the original content's width. */
  offsetLeft?: number;
  /** The offset specifies how far inwards the top edge of the crop rectangle is from the top edge of the original content as a fraction of the original content's height. */
  offsetTop?: number;
  /** The offset specifies how far inwards the bottom edge of the crop rectangle is from the bottom edge of the original content as a fraction of the original content's height. */
  offsetBottom?: number;
}

export const CropProperties = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  offsetRight: Schema.optional(Schema.Number),
  angle: Schema.optional(Schema.Number),
  offsetLeft: Schema.optional(Schema.Number),
  offsetTop: Schema.optional(Schema.Number),
  offsetBottom: Schema.optional(Schema.Number),
}).annotate({ identifier: "CropProperties" });

export interface ImageProperties {
  /** The clockwise rotation angle of the image, in radians. */
  angle?: number;
  /** The contrast effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect. */
  contrast?: number;
  /** The crop properties of the image. */
  cropProperties?: CropProperties;
  /** A URI to the image with a default lifetime of 30 minutes. This URI is tagged with the account of the requester. Anyone with the URI effectively accesses the image as the original requester. Access to the image may be lost if the document's sharing settings change. */
  contentUri?: string;
  /** The source URI is the URI used to insert the image. The source URI can be empty. */
  sourceUri?: string;
  /** The brightness effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect. */
  brightness?: number;
  /** The transparency effect of the image. The value should be in the interval [0.0, 1.0], where 0 means no effect and 1 means transparent. */
  transparency?: number;
}

export const ImageProperties = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  angle: Schema.optional(Schema.Number),
  contrast: Schema.optional(Schema.Number),
  cropProperties: Schema.optional(CropProperties),
  contentUri: Schema.optional(Schema.String),
  sourceUri: Schema.optional(Schema.String),
  brightness: Schema.optional(Schema.Number),
  transparency: Schema.optional(Schema.Number),
}).annotate({ identifier: "ImageProperties" });

export interface EmbeddedObjectBorder {
  /** The width of the border. */
  width?: Dimension;
  /** The dash style of the border. */
  dashStyle?:
    | "DASH_STYLE_UNSPECIFIED"
    | "SOLID"
    | "DOT"
    | "DASH"
    | (string & {});
  /** The property state of the border property. */
  propertyState?: "RENDERED" | "NOT_RENDERED" | (string & {});
  /** The color of the border. */
  color?: OptionalColor;
}

export const EmbeddedObjectBorder = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  width: Schema.optional(Dimension),
  dashStyle: Schema.optional(Schema.String),
  propertyState: Schema.optional(Schema.String),
  color: Schema.optional(OptionalColor),
}).annotate({ identifier: "EmbeddedObjectBorder" });

export interface EmbeddedObject {
  /** The bottom margin of the embedded object. */
  marginBottom?: Dimension;
  /** The right margin of the embedded object. */
  marginRight?: Dimension;
  /** The visible size of the image after cropping. */
  size?: Size;
  /** The properties of an embedded drawing. */
  embeddedDrawingProperties?: EmbeddedDrawingProperties;
  /** The left margin of the embedded object. */
  marginLeft?: Dimension;
  /** The properties of an image. */
  imageProperties?: ImageProperties;
  /** The description of the embedded object. The `title` and `description` are both combined to display alt text. */
  description?: string;
  /** The title of the embedded object. The `title` and `description` are both combined to display alt text. */
  title?: string;
  /** A reference to the external linked source content. For example, it contains a reference to the source Google Sheets chart when the embedded object is a linked chart. If unset, then the embedded object is not linked. */
  linkedContentReference?: LinkedContentReference;
  /** The top margin of the embedded object. */
  marginTop?: Dimension;
  /** The border of the embedded object. */
  embeddedObjectBorder?: EmbeddedObjectBorder;
}

export const EmbeddedObject = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  marginBottom: Schema.optional(Dimension),
  marginRight: Schema.optional(Dimension),
  size: Schema.optional(Size),
  embeddedDrawingProperties: Schema.optional(EmbeddedDrawingProperties),
  marginLeft: Schema.optional(Dimension),
  imageProperties: Schema.optional(ImageProperties),
  description: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
  linkedContentReference: Schema.optional(LinkedContentReference),
  marginTop: Schema.optional(Dimension),
  embeddedObjectBorder: Schema.optional(EmbeddedObjectBorder),
}).annotate({ identifier: "EmbeddedObject" });

export interface PositionedObjectProperties {
  /** The positioning of this positioned object relative to the newline of the Paragraph that references this positioned object. */
  positioning?: PositionedObjectPositioning;
  /** The embedded object of this positioned object. */
  embeddedObject?: EmbeddedObject;
}

export const PositionedObjectProperties =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    positioning: Schema.optional(PositionedObjectPositioning),
    embeddedObject: Schema.optional(EmbeddedObject),
  }).annotate({ identifier: "PositionedObjectProperties" });

export interface InlineObjectProperties {
  /** The embedded object of this inline object. */
  embeddedObject?: EmbeddedObject;
}

export const InlineObjectProperties = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    embeddedObject: Schema.optional(EmbeddedObject),
  },
).annotate({ identifier: "InlineObjectProperties" });

export interface InlineObjectPropertiesSuggestionState {
  /** A mask that indicates which of the fields in embedded_object have been changed in this suggestion. */
  embeddedObjectSuggestionState?: EmbeddedObjectSuggestionState;
}

export const InlineObjectPropertiesSuggestionState =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    embeddedObjectSuggestionState: Schema.optional(
      EmbeddedObjectSuggestionState,
    ),
  }).annotate({ identifier: "InlineObjectPropertiesSuggestionState" });

export interface SuggestedInlineObjectProperties {
  /** An InlineObjectProperties that only includes the changes made in this suggestion. This can be used along with the inline_object_properties_suggestion_state to see which fields have changed and their new values. */
  inlineObjectProperties?: InlineObjectProperties;
  /** A mask that indicates which of the fields on the base InlineObjectProperties have been changed in this suggestion. */
  inlineObjectPropertiesSuggestionState?: InlineObjectPropertiesSuggestionState;
}

export const SuggestedInlineObjectProperties =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inlineObjectProperties: Schema.optional(InlineObjectProperties),
    inlineObjectPropertiesSuggestionState: Schema.optional(
      InlineObjectPropertiesSuggestionState,
    ),
  }).annotate({ identifier: "SuggestedInlineObjectProperties" });

export interface CreateNamedRangeResponse {
  /** The ID of the created named range. */
  namedRangeId?: string;
}

export const CreateNamedRangeResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    namedRangeId: Schema.optional(Schema.String),
  }).annotate({ identifier: "CreateNamedRangeResponse" });

export interface Footnote {
  /** The contents of the footnote. The indexes for a footnote's content begin at zero. */
  content?: ReadonlyArray<StructuralElement>;
  /** The ID of the footnote. */
  footnoteId?: string;
}

export const Footnote = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  content: Schema.optional(Schema.Array(StructuralElement)),
  footnoteId: Schema.optional(Schema.String),
}).annotate({ identifier: "Footnote" });

export interface ListPropertiesSuggestionState {
  /** A mask that indicates which of the fields on the corresponding NestingLevel in nesting_levels have been changed in this suggestion. The nesting level suggestion states are returned in ascending order of the nesting level with the least nested returned first. */
  nestingLevelsSuggestionStates?: ReadonlyArray<NestingLevelSuggestionState>;
}

export const ListPropertiesSuggestionState =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nestingLevelsSuggestionStates: Schema.optional(
      Schema.Array(NestingLevelSuggestionState),
    ),
  }).annotate({ identifier: "ListPropertiesSuggestionState" });

export interface NestingLevel {
  /** The alignment of the bullet within the space allotted for rendering the bullet. */
  bulletAlignment?:
    | "BULLET_ALIGNMENT_UNSPECIFIED"
    | "START"
    | "CENTER"
    | "END"
    | (string & {});
  /** A custom glyph symbol used by bullets when paragraphs at this level of nesting is unordered. The glyph symbol replaces placeholders within the glyph_format. For example, if the glyph_symbol is the solid circle corresponding to Unicode U+25cf code point and the glyph_format is `%0`, the rendered glyph would be the solid circle. */
  glyphSymbol?: string;
  /** The text style of bullets at this level of nesting. */
  textStyle?: TextStyle;
  /** The amount of indentation for the first line of paragraphs at this level of nesting. */
  indentFirstLine?: Dimension;
  /** The format string used by bullets at this level of nesting. The glyph format contains one or more placeholders, and these placeholders are replaced with the appropriate values depending on the glyph_type or glyph_symbol. The placeholders follow the pattern `%[nesting_level]`. Furthermore, placeholders can have prefixes and suffixes. Thus, the glyph format follows the pattern `%[nesting_level]`. Note that the prefix and suffix are optional and can be arbitrary strings. For example, the glyph format `%0.` indicates that the rendered glyph will replace the placeholder with the corresponding glyph for nesting level 0 followed by a period as the suffix. So a list with a glyph type of UPPER_ALPHA and glyph format `%0.` at nesting level 0 will result in a list with rendered glyphs `A.` `B.` `C.` The glyph format can contain placeholders for the current nesting level as well as placeholders for parent nesting levels. For example, a list can have a glyph format of `%0.` at nesting level 0 and a glyph format of `%0.%1.` at nesting level 1. Assuming both nesting levels have DECIMAL glyph types, this would result in a list with rendered glyphs `1.` `2.` ` 2.1.` ` 2.2.` `3.` For nesting levels that are ordered, the string that replaces a placeholder in the glyph format for a particular paragraph depends on the paragraph's order within the list. */
  glyphFormat?: string;
  /** The type of glyph used by bullets when paragraphs at this level of nesting is ordered. The glyph type determines the type of glyph used to replace placeholders within the glyph_format when paragraphs at this level of nesting are ordered. For example, if the nesting level is 0, the glyph_format is `%0.` and the glyph type is DECIMAL, then the rendered glyph would replace the placeholder `%0` in the glyph format with a number corresponding to the list item's order within the list. */
  glyphType?:
    | "GLYPH_TYPE_UNSPECIFIED"
    | "NONE"
    | "DECIMAL"
    | "ZERO_DECIMAL"
    | "UPPER_ALPHA"
    | "ALPHA"
    | "UPPER_ROMAN"
    | "ROMAN"
    | (string & {});
  /** The amount of indentation for paragraphs at this level of nesting. Applied to the side that corresponds to the start of the text, based on the paragraph's content direction. */
  indentStart?: Dimension;
  /** The number of the first list item at this nesting level. A value of 0 is treated as a value of 1 for lettered lists and Roman numeral lists. For values of both 0 and 1, lettered and Roman numeral lists will begin at `a` and `i` respectively. This value is ignored for nesting levels with unordered glyphs. */
  startNumber?: number;
}

export const NestingLevel = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  bulletAlignment: Schema.optional(Schema.String),
  glyphSymbol: Schema.optional(Schema.String),
  textStyle: Schema.optional(TextStyle),
  indentFirstLine: Schema.optional(Dimension),
  glyphFormat: Schema.optional(Schema.String),
  glyphType: Schema.optional(Schema.String),
  indentStart: Schema.optional(Dimension),
  startNumber: Schema.optional(Schema.Number),
}).annotate({ identifier: "NestingLevel" });

export interface ListProperties {
  /** Describes the properties of the bullets at the associated level. A list has at most 9 levels of nesting with nesting level 0 corresponding to the top-most level and nesting level 8 corresponding to the most nested level. The nesting levels are returned in ascending order with the least nested returned first. */
  nestingLevels?: ReadonlyArray<NestingLevel>;
}

export const ListProperties = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nestingLevels: Schema.optional(Schema.Array(NestingLevel)),
}).annotate({ identifier: "ListProperties" });

export interface SuggestedListProperties {
  /** A mask that indicates which of the fields on the base ListProperties have been changed in this suggestion. */
  listPropertiesSuggestionState?: ListPropertiesSuggestionState;
  /** A ListProperties that only includes the changes made in this suggestion. This can be used along with the list_properties_suggestion_state to see which fields have changed and their new values. */
  listProperties?: ListProperties;
}

export const SuggestedListProperties =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    listPropertiesSuggestionState: Schema.optional(
      ListPropertiesSuggestionState,
    ),
    listProperties: Schema.optional(ListProperties),
  }).annotate({ identifier: "SuggestedListProperties" });

export interface List {
  /** The suggested changes to the list properties, keyed by suggestion ID. */
  suggestedListPropertiesChanges?: Record<string, SuggestedListProperties>;
  /** The suggested insertion ID. If empty, then this is not a suggested insertion. */
  suggestedInsertionId?: string;
  /** The suggested deletion IDs. If empty, then there are no suggested deletions of this list. */
  suggestedDeletionIds?: ReadonlyArray<string>;
  /** The properties of the list. */
  listProperties?: ListProperties;
}

export const List = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  suggestedListPropertiesChanges: Schema.optional(
    Schema.Record(Schema.String, SuggestedListProperties),
  ),
  suggestedInsertionId: Schema.optional(Schema.String),
  suggestedDeletionIds: Schema.optional(Schema.Array(Schema.String)),
  listProperties: Schema.optional(ListProperties),
}).annotate({ identifier: "List" });

export interface SuggestedPositionedObjectProperties {
  /** A PositionedObjectProperties that only includes the changes made in this suggestion. This can be used along with the positioned_object_properties_suggestion_state to see which fields have changed and their new values. */
  positionedObjectProperties?: PositionedObjectProperties;
  /** A mask that indicates which of the fields on the base PositionedObjectProperties have been changed in this suggestion. */
  positionedObjectPropertiesSuggestionState?: PositionedObjectPropertiesSuggestionState;
}

export const SuggestedPositionedObjectProperties =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    positionedObjectProperties: Schema.optional(PositionedObjectProperties),
    positionedObjectPropertiesSuggestionState: Schema.optional(
      PositionedObjectPropertiesSuggestionState,
    ),
  }).annotate({ identifier: "SuggestedPositionedObjectProperties" });

export interface PositionedObject {
  /** The properties of this positioned object. */
  positionedObjectProperties?: PositionedObjectProperties;
  /** The suggested deletion IDs. If empty, then there are no suggested deletions of this content. */
  suggestedDeletionIds?: ReadonlyArray<string>;
  /** The suggested insertion ID. If empty, then this is not a suggested insertion. */
  suggestedInsertionId?: string;
  /** The ID of this positioned object. */
  objectId?: string;
  /** The suggested changes to the positioned object properties, keyed by suggestion ID. */
  suggestedPositionedObjectPropertiesChanges?: Record<
    string,
    SuggestedPositionedObjectProperties
  >;
}

export const PositionedObject = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  positionedObjectProperties: Schema.optional(PositionedObjectProperties),
  suggestedDeletionIds: Schema.optional(Schema.Array(Schema.String)),
  suggestedInsertionId: Schema.optional(Schema.String),
  objectId: Schema.optional(Schema.String),
  suggestedPositionedObjectPropertiesChanges: Schema.optional(
    Schema.Record(Schema.String, SuggestedPositionedObjectProperties),
  ),
}).annotate({ identifier: "PositionedObject" });

export interface InlineObject {
  /** The suggested deletion IDs. If empty, then there are no suggested deletions of this content. */
  suggestedDeletionIds?: ReadonlyArray<string>;
  /** The properties of this inline object. */
  inlineObjectProperties?: InlineObjectProperties;
  /** The suggested changes to the inline object properties, keyed by suggestion ID. */
  suggestedInlineObjectPropertiesChanges?: Record<
    string,
    SuggestedInlineObjectProperties
  >;
  /** The suggested insertion ID. If empty, then this is not a suggested insertion. */
  suggestedInsertionId?: string;
  /** The ID of this inline object. Can be used to update an object’s properties. */
  objectId?: string;
}

export const InlineObject = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  suggestedDeletionIds: Schema.optional(Schema.Array(Schema.String)),
  inlineObjectProperties: Schema.optional(InlineObjectProperties),
  suggestedInlineObjectPropertiesChanges: Schema.optional(
    Schema.Record(Schema.String, SuggestedInlineObjectProperties),
  ),
  suggestedInsertionId: Schema.optional(Schema.String),
  objectId: Schema.optional(Schema.String),
}).annotate({ identifier: "InlineObject" });

export interface SuggestedDocumentStyle {
  /** A DocumentStyle that only includes the changes made in this suggestion. This can be used along with the document_style_suggestion_state to see which fields have changed and their new values. */
  documentStyle?: DocumentStyle;
  /** A mask that indicates which of the fields on the base DocumentStyle have been changed in this suggestion. */
  documentStyleSuggestionState?: DocumentStyleSuggestionState;
}

export const SuggestedDocumentStyle = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    documentStyle: Schema.optional(DocumentStyle),
    documentStyleSuggestionState: Schema.optional(DocumentStyleSuggestionState),
  },
).annotate({ identifier: "SuggestedDocumentStyle" });

export interface NamedRange {
  /** The name of the named range. */
  name?: string;
  /** The ID of the named range. */
  namedRangeId?: string;
  /** The ranges that belong to this named range. */
  ranges?: ReadonlyArray<Range>;
}

export const NamedRange = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  namedRangeId: Schema.optional(Schema.String),
  ranges: Schema.optional(Schema.Array(Range)),
}).annotate({ identifier: "NamedRange" });

export interface NamedRanges {
  /** The NamedRanges that share the same name. */
  namedRanges?: ReadonlyArray<NamedRange>;
  /** The name that all the named ranges share. */
  name?: string;
}

export const NamedRanges = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  namedRanges: Schema.optional(Schema.Array(NamedRange)),
  name: Schema.optional(Schema.String),
}).annotate({ identifier: "NamedRanges" });

export interface Header {
  /** The ID of the header. */
  headerId?: string;
  /** The contents of the header. The indexes for a header's content begin at zero. */
  content?: ReadonlyArray<StructuralElement>;
}

export const Header = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  headerId: Schema.optional(Schema.String),
  content: Schema.optional(Schema.Array(StructuralElement)),
}).annotate({ identifier: "Header" });

export interface DocumentTab {
  /** The main body of the document tab. */
  body?: Body;
  /** The named styles of the document tab. */
  namedStyles?: NamedStyles;
  /** The footnotes in the document tab, keyed by footnote ID. */
  footnotes?: Record<string, Footnote>;
  /** The style of the document tab. */
  documentStyle?: DocumentStyle;
  /** The lists in the document tab, keyed by list ID. */
  lists?: Record<string, List>;
  /** The footers in the document tab, keyed by footer ID. */
  footers?: Record<string, Footer>;
  /** The positioned objects in the document tab, keyed by object ID. */
  positionedObjects?: Record<string, PositionedObject>;
  /** The suggested changes to the named styles of the document tab, keyed by suggestion ID. */
  suggestedNamedStylesChanges?: Record<string, SuggestedNamedStyles>;
  /** The inline objects in the document tab, keyed by object ID. */
  inlineObjects?: Record<string, InlineObject>;
  /** The suggested changes to the style of the document tab, keyed by suggestion ID. */
  suggestedDocumentStyleChanges?: Record<string, SuggestedDocumentStyle>;
  /** The named ranges in the document tab, keyed by name. */
  namedRanges?: Record<string, NamedRanges>;
  /** The headers in the document tab, keyed by header ID. */
  headers?: Record<string, Header>;
}

export const DocumentTab = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  body: Schema.optional(Body),
  namedStyles: Schema.optional(NamedStyles),
  footnotes: Schema.optional(Schema.Record(Schema.String, Footnote)),
  documentStyle: Schema.optional(DocumentStyle),
  lists: Schema.optional(Schema.Record(Schema.String, List)),
  footers: Schema.optional(Schema.Record(Schema.String, Footer)),
  positionedObjects: Schema.optional(
    Schema.Record(Schema.String, PositionedObject),
  ),
  suggestedNamedStylesChanges: Schema.optional(
    Schema.Record(Schema.String, SuggestedNamedStyles),
  ),
  inlineObjects: Schema.optional(Schema.Record(Schema.String, InlineObject)),
  suggestedDocumentStyleChanges: Schema.optional(
    Schema.Record(Schema.String, SuggestedDocumentStyle),
  ),
  namedRanges: Schema.optional(Schema.Record(Schema.String, NamedRanges)),
  headers: Schema.optional(Schema.Record(Schema.String, Header)),
}).annotate({ identifier: "DocumentTab" });

export interface ReplaceAllTextResponse {
  /** The number of occurrences changed by replacing all text. */
  occurrencesChanged?: number;
}

export const ReplaceAllTextResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    occurrencesChanged: Schema.optional(Schema.Number),
  },
).annotate({ identifier: "ReplaceAllTextResponse" });

export interface CreateFooterResponse {
  /** The ID of the created footer. */
  footerId?: string;
}

export const CreateFooterResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  footerId: Schema.optional(Schema.String),
}).annotate({ identifier: "CreateFooterResponse" });

export interface InsertInlineSheetsChartResponse {
  /** The object ID of the inserted chart. */
  objectId?: string;
}

export const InsertInlineSheetsChartResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    objectId: Schema.optional(Schema.String),
  }).annotate({ identifier: "InsertInlineSheetsChartResponse" });

export interface AddDocumentTabResponse {
  /** The properties of the newly added tab. */
  tabProperties?: TabProperties;
}

export const AddDocumentTabResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    tabProperties: Schema.optional(TabProperties),
  },
).annotate({ identifier: "AddDocumentTabResponse" });

export interface CreateHeaderResponse {
  /** The ID of the created header. */
  headerId?: string;
}

export const CreateHeaderResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  headerId: Schema.optional(Schema.String),
}).annotate({ identifier: "CreateHeaderResponse" });

export interface Response {
  /** The result of creating a named range. */
  createNamedRange?: CreateNamedRangeResponse;
  /** The result of creating a footer. */
  createFooter?: CreateFooterResponse;
  /** The result of creating a footnote. */
  createFootnote?: CreateFootnoteResponse;
  /** The result of inserting an inline Google Sheets chart. */
  insertInlineSheetsChart?: InsertInlineSheetsChartResponse;
  /** The result of replacing text. */
  replaceAllText?: ReplaceAllTextResponse;
  /** The result of adding a document tab. */
  addDocumentTab?: AddDocumentTabResponse;
  /** The result of inserting an inline image. */
  insertInlineImage?: InsertInlineImageResponse;
  /** The result of creating a header. */
  createHeader?: CreateHeaderResponse;
}

export const Response = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  createNamedRange: Schema.optional(CreateNamedRangeResponse),
  createFooter: Schema.optional(CreateFooterResponse),
  createFootnote: Schema.optional(CreateFootnoteResponse),
  insertInlineSheetsChart: Schema.optional(InsertInlineSheetsChartResponse),
  replaceAllText: Schema.optional(ReplaceAllTextResponse),
  addDocumentTab: Schema.optional(AddDocumentTabResponse),
  insertInlineImage: Schema.optional(InsertInlineImageResponse),
  createHeader: Schema.optional(CreateHeaderResponse),
}).annotate({ identifier: "Response" });

export interface BatchUpdateDocumentResponse {
  /** The ID of the document to which the updates were applied to. */
  documentId?: string;
  /** The reply of the updates. This maps 1:1 with the updates, although replies to some requests may be empty. */
  replies?: ReadonlyArray<Response>;
  /** The updated write control after applying the request. */
  writeControl?: WriteControl;
}

export const BatchUpdateDocumentResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    documentId: Schema.optional(Schema.String),
    replies: Schema.optional(Schema.Array(Response)),
    writeControl: Schema.optional(WriteControl),
  }).annotate({ identifier: "BatchUpdateDocumentResponse" });

export interface Tab {
  /** The child tabs nested within this tab. */
  childTabs?: ReadonlyArray<Tab>;
  /** A tab with document contents, like text and images. */
  documentTab?: DocumentTab;
  /** The properties of the tab, like ID and title. */
  tabProperties?: TabProperties;
}

export const Tab: Schema.Schema<Tab> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      childTabs: Schema.optional(Schema.Array(Tab)),
      documentTab: Schema.optional(DocumentTab),
      tabProperties: Schema.optional(TabProperties),
    }),
  ).annotate({ identifier: "Tab" }) as any as Schema.Schema<Tab>;

export interface Document {
  /** Output only. The footnotes in the document, keyed by footnote ID. Legacy field: Instead, use Document.tabs.documentTab.footnotes, which exposes the actual document content from all tabs when the includeTabsContent parameter is set to `true`. If `false` or unset, this field contains information about the first tab in the document. */
  footnotes?: Record<string, Footnote>;
  /** Output only. The positioned objects in the document, keyed by object ID. Legacy field: Instead, use Document.tabs.documentTab.positionedObjects, which exposes the actual document content from all tabs when the includeTabsContent parameter is set to `true`. If `false` or unset, this field contains information about the first tab in the document. */
  positionedObjects?: Record<string, PositionedObject>;
  /** Output only. The revision ID of the document. Can be used in update requests to specify which revision of a document to apply updates to and how the request should behave if the document has been edited since that revision. Only populated if the user has edit access to the document. The revision ID is not a sequential number but an opaque string. The format of the revision ID might change over time. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the document has not changed. Conversely, a changed ID (for the same document and user) usually means the document has been updated. However, a changed ID can also be due to internal factors such as ID format changes. */
  revisionId?: string;
  /** Output only. The named ranges in the document, keyed by name. Legacy field: Instead, use Document.tabs.documentTab.namedRanges, which exposes the actual document content from all tabs when the includeTabsContent parameter is set to `true`. If `false` or unset, this field contains information about the first tab in the document. */
  namedRanges?: Record<string, NamedRanges>;
  /** Output only. The headers in the document, keyed by header ID. Legacy field: Instead, use Document.tabs.documentTab.headers, which exposes the actual document content from all tabs when the includeTabsContent parameter is set to `true`. If `false` or unset, this field contains information about the first tab in the document. */
  headers?: Record<string, Header>;
  /** Output only. The main body of the document. Legacy field: Instead, use Document.tabs.documentTab.body, which exposes the actual document content from all tabs when the includeTabsContent parameter is set to `true`. If `false` or unset, this field contains information about the first tab in the document. */
  body?: Body;
  /** Output only. The named styles of the document. Legacy field: Instead, use Document.tabs.documentTab.namedStyles, which exposes the actual document content from all tabs when the includeTabsContent parameter is set to `true`. If `false` or unset, this field contains information about the first tab in the document. */
  namedStyles?: NamedStyles;
  /** Output only. The style of the document. Legacy field: Instead, use Document.tabs.documentTab.documentStyle, which exposes the actual document content from all tabs when the includeTabsContent parameter is set to `true`. If `false` or unset, this field contains information about the first tab in the document. */
  documentStyle?: DocumentStyle;
  /** Output only. The lists in the document, keyed by list ID. Legacy field: Instead, use Document.tabs.documentTab.lists, which exposes the actual document content from all tabs when the includeTabsContent parameter is set to `true`. If `false` or unset, this field contains information about the first tab in the document. */
  lists?: Record<string, List>;
  /** Output only. The footers in the document, keyed by footer ID. Legacy field: Instead, use Document.tabs.documentTab.footers, which exposes the actual document content from all tabs when the includeTabsContent parameter is set to `true`. If `false` or unset, this field contains information about the first tab in the document. */
  footers?: Record<string, Footer>;
  /** Output only. The ID of the document. */
  documentId?: string;
  /** The title of the document. */
  title?: string;
  /** Output only. The suggestions view mode applied to the document. Note: When editing a document, changes must be based on a document with SUGGESTIONS_INLINE. */
  suggestionsViewMode?:
    | "DEFAULT_FOR_CURRENT_ACCESS"
    | "SUGGESTIONS_INLINE"
    | "PREVIEW_SUGGESTIONS_ACCEPTED"
    | "PREVIEW_WITHOUT_SUGGESTIONS"
    | (string & {});
  /** Tabs that are part of a document. Tabs can contain child tabs, a tab nested within another tab. Child tabs are represented by the Tab.childTabs field. */
  tabs?: ReadonlyArray<Tab>;
  /** Output only. The suggested changes to the named styles of the document, keyed by suggestion ID. Legacy field: Instead, use Document.tabs.documentTab.suggestedNamedStylesChanges, which exposes the actual document content from all tabs when the includeTabsContent parameter is set to `true`. If `false` or unset, this field contains information about the first tab in the document. */
  suggestedNamedStylesChanges?: Record<string, SuggestedNamedStyles>;
  /** Output only. The suggested changes to the style of the document, keyed by suggestion ID. Legacy field: Instead, use Document.tabs.documentTab.suggestedDocumentStyleChanges, which exposes the actual document content from all tabs when the includeTabsContent parameter is set to `true`. If `false` or unset, this field contains information about the first tab in the document. */
  suggestedDocumentStyleChanges?: Record<string, SuggestedDocumentStyle>;
  /** Output only. The inline objects in the document, keyed by object ID. Legacy field: Instead, use Document.tabs.documentTab.inlineObjects, which exposes the actual document content from all tabs when the includeTabsContent parameter is set to `true`. If `false` or unset, this field contains information about the first tab in the document. */
  inlineObjects?: Record<string, InlineObject>;
}

export const Document = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  footnotes: Schema.optional(Schema.Record(Schema.String, Footnote)),
  positionedObjects: Schema.optional(
    Schema.Record(Schema.String, PositionedObject),
  ),
  revisionId: Schema.optional(Schema.String),
  namedRanges: Schema.optional(Schema.Record(Schema.String, NamedRanges)),
  headers: Schema.optional(Schema.Record(Schema.String, Header)),
  body: Schema.optional(Body),
  namedStyles: Schema.optional(NamedStyles),
  documentStyle: Schema.optional(DocumentStyle),
  lists: Schema.optional(Schema.Record(Schema.String, List)),
  footers: Schema.optional(Schema.Record(Schema.String, Footer)),
  documentId: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
  suggestionsViewMode: Schema.optional(Schema.String),
  tabs: Schema.optional(Schema.Array(Tab)),
  suggestedNamedStylesChanges: Schema.optional(
    Schema.Record(Schema.String, SuggestedNamedStyles),
  ),
  suggestedDocumentStyleChanges: Schema.optional(
    Schema.Record(Schema.String, SuggestedDocumentStyle),
  ),
  inlineObjects: Schema.optional(Schema.Record(Schema.String, InlineObject)),
}).annotate({ identifier: "Document" });

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

export interface GetDocumentsRequest {
  /** The ID of the document to retrieve. */
  documentId: string;
  /** The suggestions view mode to apply to the document. This allows viewing the document with all suggestions inline, accepted or rejected. If one is not specified, DEFAULT_FOR_CURRENT_ACCESS is used. */
  suggestionsViewMode?:
    | "DEFAULT_FOR_CURRENT_ACCESS"
    | "SUGGESTIONS_INLINE"
    | "PREVIEW_SUGGESTIONS_ACCEPTED"
    | "PREVIEW_WITHOUT_SUGGESTIONS"
    | (string & {});
  /** Whether to populate the Document.tabs field instead of the text content fields like `body` and `documentStyle` on Document. - When `True`: Document content populates in the Document.tabs field instead of the text content fields in Document. - When `False`: The content of the document's first tab populates the content fields in Document excluding Document.tabs. If a document has only one tab, then that tab is used to populate the document content. Document.tabs will be empty. */
  includeTabsContent?: boolean;
}

export const GetDocumentsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  documentId: Schema.String.pipe(T.HttpPath("documentId")),
  suggestionsViewMode: Schema.optional(Schema.String).pipe(
    T.HttpQuery("suggestionsViewMode"),
  ),
  includeTabsContent: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("includeTabsContent"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "v1/documents/{documentId}" }),
  svc,
) as unknown as Schema.Schema<GetDocumentsRequest>;

export type GetDocumentsResponse = Document;
export const GetDocumentsResponse = /*@__PURE__*/ /*#__PURE__*/ Document;

export type GetDocumentsError = DefaultErrors | NotFound | Forbidden;

/** Gets the latest version of the specified document. */
export const getDocuments: API.OperationMethod<
  GetDocumentsRequest,
  GetDocumentsResponse,
  GetDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDocumentsRequest,
  output: GetDocumentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateDocumentsRequest {
  /** Request body */
  body?: Document;
}

export const CreateDocumentsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    body: Schema.optional(Document).pipe(T.HttpBody()),
  },
).pipe(
  T.Http({ method: "POST", path: "v1/documents", hasBody: true }),
  svc,
) as unknown as Schema.Schema<CreateDocumentsRequest>;

export type CreateDocumentsResponse = Document;
export const CreateDocumentsResponse = /*@__PURE__*/ /*#__PURE__*/ Document;

export type CreateDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a blank document using the title given in the request. Other fields in the request, including any provided content, are ignored. Returns the created document. */
export const createDocuments: API.OperationMethod<
  CreateDocumentsRequest,
  CreateDocumentsResponse,
  CreateDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateDocumentsRequest,
  output: CreateDocumentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchUpdateDocumentsRequest {
  /** The ID of the document to update. */
  documentId: string;
  /** Request body */
  body?: BatchUpdateDocumentRequest;
}

export const BatchUpdateDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    documentId: Schema.String.pipe(T.HttpPath("documentId")),
    body: Schema.optional(BatchUpdateDocumentRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/documents/{documentId}:batchUpdate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchUpdateDocumentsRequest>;

export type BatchUpdateDocumentsResponse = BatchUpdateDocumentResponse;
export const BatchUpdateDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ BatchUpdateDocumentResponse;

export type BatchUpdateDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Applies one or more updates to the document. Each request is validated before being applied. If any request is not valid, then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. Other requests do not need to return information; these each return an empty reply. The order of replies matches that of the requests. For example, suppose you call batchUpdate with four updates, and only the third one returns information. The response would have two empty replies, the reply to the third request, and another empty reply, in that order. Because other users may be editing the document, the document might not exactly reflect your changes: your changes may be altered with respect to collaborator changes. If there are no collaborators, the document should reflect your changes. In any case, the updates in your request are guaranteed to be applied together atomically. */
export const batchUpdateDocuments: API.OperationMethod<
  BatchUpdateDocumentsRequest,
  BatchUpdateDocumentsResponse,
  BatchUpdateDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchUpdateDocumentsRequest,
  output: BatchUpdateDocumentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
