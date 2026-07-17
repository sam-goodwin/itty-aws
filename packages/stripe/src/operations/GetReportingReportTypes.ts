import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetReportingReportTypesInput {
  expand?: string;
}
export const GetReportingReportTypesInput =
  /*@__PURE__*/ Schema.Struct({
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/reporting/report_types",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetReportingReportTypesInput>;

// Output Schema
export interface GetReportingReportTypesOutput {
  data: {
    data_available_end: number;
    data_available_start: number;
    default_columns: string[] | null;
    id: string;
    livemode: boolean;
    name: string;
    object: "reporting.report_type";
    updated: number;
    version: number;
  }[];
  has_more: boolean;
  object: "list";
  url: string;
}
export const GetReportingReportTypesOutput =
  /*@__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        data_available_end: Schema.Number,
        data_available_start: Schema.Number,
        default_columns: Schema.NullOr(Schema.Array(Schema.String)),
        id: Schema.String,
        livemode: Schema.Boolean,
        name: Schema.String,
        object: Schema.Literals(["reporting.report_type"]),
        updated: Schema.Number,
        version: Schema.Number,
      }),
    ),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  }) as unknown as Schema.Codec<GetReportingReportTypesOutput>;

// The operation
/**
 * List all Report Types
 *
 * <p>Returns a full list of Report Types.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetReportingReportTypes = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetReportingReportTypesInput,
  outputSchema: GetReportingReportTypesOutput,
}));
