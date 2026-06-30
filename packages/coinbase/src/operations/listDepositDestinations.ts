import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListDepositDestinationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.optional(Schema.String),
    address: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    network: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    pageToken: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/v2/deposit-destinations" }));
export type ListDepositDestinationsInput =
  typeof ListDepositDestinationsInput.Type;

// Output Schema
export const ListDepositDestinationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    depositDestinations: Schema.Array(Schema.Unknown),
    nextPageToken: Schema.optional(Schema.String),
  });
export type ListDepositDestinationsOutput =
  typeof ListDepositDestinationsOutput.Type;

// The operation
/**
 * List deposit destinations
 *
 * List deposit destinations. You can optionally filter the results by type, account ID, network, or cryptocurrency address. Results are sorted by creation date in descending order (newest first).
 *
 * @param accountId - Filter deposit destinations by account ID.
 * @param address - Filter deposit destinations by the cryptocurrency address.
 * @param type - Filter deposit destinations by type.
 * @param network - Filter deposit destinations by network.
 * @param pageSize - The number of resources to return per page.
 * @param pageToken - The token for the next page of resources, if any.
 */
export const listDepositDestinations = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListDepositDestinationsInput,
    outputSchema: ListDepositDestinationsOutput,
  }),
);
