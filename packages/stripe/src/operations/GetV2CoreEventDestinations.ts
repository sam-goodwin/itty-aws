import * as Schema from "effect/Schema";
import { v2_core_event_destinationSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetV2CoreEventDestinationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    include: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
  }).pipe(T.Http({ method: "GET", path: "/v2/core/event_destinations" }));
export type GetV2CoreEventDestinationsInput =
  typeof GetV2CoreEventDestinationsInput.Type;

// Output Schema
export const GetV2CoreEventDestinationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(Schema.suspend(() => v2_core_event_destinationSchema)),
    next_page_url: Schema.NullOr(Schema.String),
    previous_page_url: Schema.NullOr(Schema.String),
  });
export type GetV2CoreEventDestinationsOutput =
  typeof GetV2CoreEventDestinationsOutput.Type;

// The operation
/**
 * List Event Destinations
 *
 * Lists all event destinations.
 *
 * @param include - Additional fields to include in the response. Currently supports `webhook_endpoint.url`.
 * @param limit - The page size.
 */
export const GetV2CoreEventDestinations = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetV2CoreEventDestinationsInput,
    outputSchema: GetV2CoreEventDestinationsOutput,
  }),
);
