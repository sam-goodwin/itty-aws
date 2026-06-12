/**
 * Azure Carbon API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Shared schemas
const ReportTypeEnumSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "OverallSummaryReport",
  "MonthlySummaryReport",
  "TopItemsSummaryReport",
  "TopItemsMonthlySummaryReport",
  "ItemDetailsReport",
]);
const DateRangeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  start: Schema.String,
  end: Schema.String,
});
const EmissionScopeEnumSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Scope1",
  "Scope2",
  "Scope3",
]);
const CarbonEmissionDataSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dataType: Schema.suspend(() => ResponseDataTypeEnumSchema),
  latestMonthEmissions: Schema.Number,
  previousMonthEmissions: Schema.Number,
  monthOverMonthEmissionsChangeRatio: Schema.optional(Schema.Number),
  monthlyEmissionsChangeValue: Schema.optional(Schema.Number),
});
const ResponseDataTypeEnumSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
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
]);
const SubscriptionAccessDecisionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String,
    decision: Schema.suspend(() => AccessDecisionEnumSchema),
    denialReason: Schema.optional(Schema.String),
  });
const AccessDecisionEnumSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Allowed",
  "Denied",
]);
const OperationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  origin: Schema.optional(Schema.Literals(["user", "system", "user,system"])),
  actionType: Schema.optional(Schema.Literals(["Internal"])),
});

// Input Schema
export const CarbonServiceQueryCarbonEmissionDataAvailableDateRangeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Carbon/queryCarbonEmissionDataAvailableDateRange",
      apiVersion: "2025-04-01",
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
    reportType: Schema.suspend(() => ReportTypeEnumSchema),
    dateRange: Schema.suspend(() => DateRangeSchema),
    subscriptionList: Schema.Array(Schema.String),
    resourceGroupUrlList: Schema.optional(Schema.Array(Schema.String)),
    resourceTypeList: Schema.optional(Schema.Array(Schema.String)),
    locationList: Schema.optional(Schema.Array(Schema.String)),
    carbonScopeList: Schema.Array(
      Schema.suspend(() => EmissionScopeEnumSchema),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Carbon/carbonEmissionReports",
      apiVersion: "2025-04-01",
    }),
  );
export type CarbonServiceQueryCarbonEmissionReportsInput =
  typeof CarbonServiceQueryCarbonEmissionReportsInput.Type;

// Output Schema
export const CarbonServiceQueryCarbonEmissionReportsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => CarbonEmissionDataSchema)),
    skipToken: Schema.optional(Schema.String),
    subscriptionAccessDecisionList: Schema.optional(
      Schema.Array(Schema.suspend(() => SubscriptionAccessDecisionSchema)),
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
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Carbon/operations",
    apiVersion: "2025-04-01",
  }),
);
export type OperationsListInput = typeof OperationsListInput.Type;

// Output Schema
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.Array(Schema.suspend(() => OperationSchema))),
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
