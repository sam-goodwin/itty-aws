import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const GetBandwidthBaremetalInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    baremetalId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/bare-metals/{baremetalId}/bandwidth" }),
  );
export type GetBandwidthBaremetalInput = typeof GetBandwidthBaremetalInput.Type;

// Output Schema
export const GetBandwidthBaremetalOutput =
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
export type GetBandwidthBaremetalOutput =
  typeof GetBandwidthBaremetalOutput.Type;

// The operation
/**
 * Bare Metal Bandwidth
 *
 * Get bandwidth information for the Bare Metal instance.<br><br>The `bandwidth` object in a successful response contains objects representing a day in the month. The date is denoted by the nested object keys. Days begin and end in the UTC timezone. Bandwidth utilization data contained within the date object is refreshed periodically. We do not recommend using this endpoint to gather real-time metrics.
 *
 * @param baremetalId - The [Bare Metal id](#operation/list-baremetals).
 */
export const getBandwidthBaremetal = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetBandwidthBaremetalInput,
    outputSchema: GetBandwidthBaremetalOutput,
    errors: [BadRequest, NotFound] as const,
  }),
);
