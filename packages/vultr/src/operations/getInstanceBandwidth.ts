import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const GetInstanceBandwidthInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instanceId: Schema.String.pipe(T.PathParam()),
    date_range: Schema.optional(Schema.Number),
  }).pipe(T.Http({ method: "GET", path: "/instances/{instanceId}/bandwidth" }));
export type GetInstanceBandwidthInput = typeof GetInstanceBandwidthInput.Type;

// Output Schema
export const GetInstanceBandwidthOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bandwidth: Schema.optional(
      Schema.Struct({
        "2020-10-10": Schema.optional(
          Schema.Struct({
            incoming_bytes: Schema.optional(Schema.Number),
            outgoing_bytes: Schema.optional(Schema.Number),
          }),
        ),
        "2020-10-11": Schema.optional(
          Schema.Struct({
            incoming_bytes: Schema.optional(Schema.Number),
            outgoing_bytes: Schema.optional(Schema.Number),
          }),
        ),
      }),
    ),
  });
export type GetInstanceBandwidthOutput = typeof GetInstanceBandwidthOutput.Type;

// The operation
/**
 * Instance Bandwidth
 *
 * Get bandwidth information about an Instance.<br><br>The `bandwidth` object in a successful response contains objects representing a day in the month. The date is denoted by the nested object keys. Days begin and end in the UTC timezone. The bandwidth utilization data contained within the date object is refreshed periodically. We do not recommend using this endpoint to gather real-time metrics.
 *
 * @param instanceId - The [Instance ID](#operation/list-instances).
 * @param date_range - The range of days to include, represented as the number of days relative to the current date. Default 30, Minimum 1 and Max 60.
 */
export const getInstanceBandwidth = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetInstanceBandwidthInput,
    outputSchema: GetInstanceBandwidthOutput,
    errors: [BadRequest, NotFound] as const,
  }),
);
