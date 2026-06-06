import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../errors.ts";

// Input Schema
export const AnalyticsGetVerificationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    query: Schema.String,
  }).pipe(T.Http({ method: "POST", path: "/v2/analytics.getVerifications" }));
export type AnalyticsGetVerificationsInput =
  typeof AnalyticsGetVerificationsInput.Type;

// Output Schema
export const AnalyticsGetVerificationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    meta: Schema.Struct({
      requestId: Schema.String,
    }),
    data: Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
  });
export type AnalyticsGetVerificationsOutput =
  typeof AnalyticsGetVerificationsOutput.Type;

// The operation
/**
 * Query key verification data
 *
 * Execute custom SQL queries against your key verification analytics.
 * For complete documentation including available tables, columns, data types, query examples, see the schema reference in the API documentation.
 */
export const analyticsGetVerifications = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AnalyticsGetVerificationsInput,
    outputSchema: AnalyticsGetVerificationsOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }),
);
