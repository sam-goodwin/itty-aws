import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetReportingReportTypesReportTypeInput {
  report_type: string;
  expand?: string;
}
export const GetReportingReportTypesReportTypeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    report_type: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/reporting/report_types/{report_type}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetReportingReportTypesReportTypeInput>;

// Output Schema
export interface GetReportingReportTypesReportTypeOutput {
  data_available_end: number;
  data_available_start: number;
  default_columns: string[] | null;
  id: string;
  livemode: boolean;
  name: string;
  object: "reporting.report_type";
  updated: number;
  version: number;
}
export const GetReportingReportTypesReportTypeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data_available_end: Schema.Number,
    data_available_start: Schema.Number,
    default_columns: Schema.NullOr(Schema.Array(Schema.String)),
    id: Schema.String,
    livemode: Schema.Boolean,
    name: Schema.String,
    object: Schema.Literals(["reporting.report_type"]),
    updated: Schema.Number,
    version: Schema.Number,
  }) as unknown as Schema.Codec<GetReportingReportTypesReportTypeOutput>;

// The operation
/**
 * Retrieve a Report Type
 *
 * <p>Retrieves the details of a Report Type. (Certain report types require a <a href="https://stripe.com/docs/keys#test-live-modes">live-mode API key</a>.)</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetReportingReportTypesReportType =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetReportingReportTypesReportTypeInput,
    outputSchema: GetReportingReportTypesReportTypeOutput,
  }));
