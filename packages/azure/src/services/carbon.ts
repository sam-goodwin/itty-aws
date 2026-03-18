/**
 * Azure Carbon API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const CarbonServiceQueryCarbonEmissionDataAvailableDateRangeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Carbon/queryCarbonEmissionDataAvailableDateRange",
    }),
  );
export type CarbonServiceQueryCarbonEmissionDataAvailableDateRangeInput =
  typeof CarbonServiceQueryCarbonEmissionDataAvailableDateRangeInput.Type;

// Output Schema
export const CarbonServiceQueryCarbonEmissionDataAvailableDateRangeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startDate: Schema.String,
    endDate: Schema.String,
  });
export type CarbonServiceQueryCarbonEmissionDataAvailableDateRangeOutput =
  typeof CarbonServiceQueryCarbonEmissionDataAvailableDateRangeOutput.Type;

// The operation
/**
 * API for query carbon emission data available date range
 *
 * @param api-version - The API version to use for this operation.
 */
export const CarbonServiceQueryCarbonEmissionDataAvailableDateRange =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CarbonServiceQueryCarbonEmissionDataAvailableDateRangeInput,
    outputSchema: CarbonServiceQueryCarbonEmissionDataAvailableDateRangeOutput,
  }));
// Input Schema
export const CarbonServiceQueryCarbonEmissionReportsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Carbon/carbonEmissionReports",
    }),
  );
export type CarbonServiceQueryCarbonEmissionReportsInput =
  typeof CarbonServiceQueryCarbonEmissionReportsInput.Type;

// Output Schema
export const CarbonServiceQueryCarbonEmissionReportsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        dataType: Schema.Literals([
          "OverallSummaryData",
          "MonthlySummaryData",
          "TopItemsSummaryData",
          "ResourceTopItemsSummaryData",
          "ResourceGroupTopItemsSummaryData",
          "TopItemsMonthlySummaryData",
          "ResourceTopItemsMonthlySummaryData",
          "ResourceGroupTopItemsMonthlySummaryData",
          "ItemDetailsData",
          "ResourceItemDetailsData",
          "ResourceGroupItemDetailsData",
        ]),
        latestMonthEmissions: Schema.Number,
        previousMonthEmissions: Schema.Number,
        monthOverMonthEmissionsChangeRatio: Schema.optional(Schema.Number),
        monthlyEmissionsChangeValue: Schema.optional(Schema.Number),
      }),
    ),
    skipToken: Schema.optional(Schema.String),
    subscriptionAccessDecisionList: Schema.optional(
      Schema.Array(
        Schema.Struct({
          subscriptionId: Schema.String,
          decision: Schema.Literals(["Allowed", "Denied"]),
          denialReason: Schema.optional(Schema.String),
        }),
      ),
    ),
  });
export type CarbonServiceQueryCarbonEmissionReportsOutput =
  typeof CarbonServiceQueryCarbonEmissionReportsOutput.Type;

// The operation
/**
 * API for Carbon Emissions Reports
 *
 * @param api-version - The API version to use for this operation.
 */
export const CarbonServiceQueryCarbonEmissionReports =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CarbonServiceQueryCarbonEmissionReportsInput,
    outputSchema: CarbonServiceQueryCarbonEmissionReportsOutput,
  }));
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  "api-version": Schema.String,
}).pipe(
  T.Http({ method: "GET", path: "/providers/Microsoft.Carbon/operations" }),
);
export type OperationsListInput = typeof OperationsListInput.Type;

// Output Schema
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        isDataAction: Schema.optional(Schema.Boolean),
        display: Schema.optional(
          Schema.Struct({
            provider: Schema.optional(Schema.String),
            resource: Schema.optional(Schema.String),
            operation: Schema.optional(Schema.String),
            description: Schema.optional(Schema.String),
          }),
        ),
        origin: Schema.optional(
          Schema.Literals(["user", "system", "user,system"]),
        ),
        actionType: Schema.optional(Schema.Literals(["Internal"])),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
});
export type OperationsListOutput = typeof OperationsListOutput.Type;

// The operation
/**
 * List the operations for the provider
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
